import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { verifyCaptcha } from "@/app/lib/verifyCaptcha";

// ─── Gmail SMTP ───────────────────────────────────────────────────────
// Works on Vercel — no IP blocking like Zoho.
// Required env vars:
//   GMAIL_USER        e.g. inopsindia@gmail.com
//   GMAIL_APP_PASS    16-char App Password (NOT your Gmail login password)
//                     Generate at: myaccount.google.com/apppasswords
//   CONTACT_TO_EMAIL  comma-separated list of recipient inboxes
//                     e.g. alice@inops.tech,bob@inops.tech
//   NEXT_PUBLIC_SITE_URL  canonical origin, e.g. https://inops.tech
//                         Used for CORS — requests from other origins are rejected.
// ─────────────────────────────────────────────────────────────────────

// ─── CORS ─────────────────────────────────────────────────────────────
// Allow one or more deployed origins + localhost for local dev.
// NEXT_PUBLIC_SITE_URL supports a comma-separated list, e.g.:
//   NEXT_PUBLIC_SITE_URL=https://inops.tech,https://www.inops.tech,https://staging.inops.tech
const ALLOWED_ORIGINS = new Set<string>([
  ...(process.env.NEXT_PUBLIC_SITE_URL ?? "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean),
  "http://localhost:3000",
  "http://localhost:3001",
]);

function corsHeaders(origin: string | null): Record<string, string> {
  const allowed = origin && ALLOWED_ORIGINS.has(origin) ? origin : "";
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

/** Handle pre-flight OPTIONS requests from the browser. */
export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (!origin || !ALLOWED_ORIGINS.has(origin)) {
    return new NextResponse(null, { status: 403 });
  }
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}
// ─────────────────────────────────────────────────────────────────────

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS,
  },
});

const FROM = `InOps Contact <${process.env.GMAIL_USER}>`;

/**
 * Parse CONTACT_TO_EMAIL into a cleaned array of addresses.
 * Supports a single address or a comma-separated list.
 * Falls back to GMAIL_USER if the env var is absent.
 */
function parseRecipients(): string[] {
  const raw = process.env.CONTACT_TO_EMAIL ?? process.env.GMAIL_USER ?? "";
  return raw
    .split(",")
    .map((addr) => addr.trim())
    .filter(Boolean);
}

const TO_LIST = parseRecipients();

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");

  // ── CORS gate ──────────────────────────────────────────────────────
  // Reject requests from origins not in the allow-list.
  // Server-side calls (no Origin header) are allowed through.
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    console.warn(`[contact] CORS blocked — origin: ${origin}`);
    return NextResponse.json(
      { error: "CORS: origin not allowed." },
      { status: 403, headers: { "Access-Control-Allow-Origin": "" } }
    );
  }
  // ──────────────────────────────────────────────────────────────────

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASS) {
    console.error("[contact] GMAIL_USER or GMAIL_APP_PASS env var missing");
    return NextResponse.json(
      { error: "Email server not configured." },
      { status: 500, headers: corsHeaders(origin) }
    );
  }

  try {
    const body = await req.json();
    const { name, email, phone, subject, message, source, captchaToken, captchaAnswer } = body as {
      name?: string;
      email?: string;
      phone?: string;
      subject?: string;
      message?: string;
      source?: string;
      captchaToken?: string;
      captchaAnswer?: string;
    };

    if (!verifyCaptcha(captchaToken ?? "", captchaAnswer ?? "")) {
      return NextResponse.json(
        { error: "Incorrect verification code. Please try again.", code: "CAPTCHA_INVALID" },
        { status: 400, headers: corsHeaders(origin) }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400, headers: corsHeaders(origin) }
      );
    }

    const subjectLine = subject
      ? `[InOps] ${subject} — from ${name}`
      : `[InOps] New contact form submission from ${name}`;

    const html = `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#0b1e2d">
        <div style="background:#0a1f3d;padding:24px 32px;border-radius:12px 12px 0 0">
          <p style="margin:0;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.5);font-weight:600">InOps Solutions</p>
          <h1 style="margin:4px 0 0;font-size:20px;color:#fff;font-weight:700">New Contact Form Submission</h1>
        </div>
        <div style="background:#fff;padding:28px 32px;border:1px solid #e2e8ee;border-top:none;border-radius:0 0 12px 12px">
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;width:120px;font-size:12px;font-weight:600;color:#8696a7;text-transform:uppercase;letter-spacing:.05em">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:14px;color:#0b1e2d">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:12px;font-weight:600;color:#8696a7;text-transform:uppercase;letter-spacing:.05em">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:14px"><a href="mailto:${email}" style="color:#1c7bb8">${email}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:12px;font-weight:600;color:#8696a7;text-transform:uppercase;letter-spacing:.05em">Phone</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:14px;color:#0b1e2d">${phone}</td>
            </tr>` : ""}
            ${subject ? `<tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:12px;font-weight:600;color:#8696a7;text-transform:uppercase;letter-spacing:.05em">Subject</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:14px;color:#0b1e2d">${subject}</td>
            </tr>` : ""}
            ${source ? `<tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:12px;font-weight:600;color:#8696a7;text-transform:uppercase;letter-spacing:.05em">Source</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:14px;color:#0b1e2d">${source}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top:20px">
            <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#8696a7;text-transform:uppercase;letter-spacing:.05em">Message</p>
            <div style="background:#f4f6f8;border-radius:8px;padding:16px;font-size:14px;line-height:1.7;color:#0b1e2d;white-space:pre-wrap">${message}</div>
          </div>
          <p style="margin:24px 0 0;font-size:11px;color:#aab4bf">
            Sent from inops.tech · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({ from: FROM, to: TO_LIST, replyTo: email, subject: subjectLine, html });

    console.log(`[contact] ✅ Email sent — ${name} <${email}>`);
    return NextResponse.json({ success: true }, { headers: corsHeaders(origin) });

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact] ❌ Gmail error:", msg);
    return NextResponse.json(
      { error: `Email error: ${msg}` },
      { status: 500, headers: corsHeaders(origin) }
    );
  }
}
