import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

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

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (!origin || !ALLOWED_ORIGINS.has(origin)) {
    return new NextResponse(null, { status: 403 });
  }
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS,
  },
});

function parseRecipients(): string[] {
  const raw = process.env.CONTACT_TO_EMAIL ?? process.env.GMAIL_USER ?? "";
  return raw.split(",").map((a) => a.trim()).filter(Boolean);
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");

  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json(
      { error: "CORS: origin not allowed." },
      { status: 403, headers: { "Access-Control-Allow-Origin": "" } }
    );
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASS) {
    console.error("[brochure-lead] GMAIL_USER or GMAIL_APP_PASS env var missing");
    return NextResponse.json(
      { error: "Email server not configured." },
      { status: 500, headers: corsHeaders(origin) }
    );
  }

  try {
    const body = await req.json();
    const { name, email, brochureTitle } = body as {
      name?: string;
      email?: string;
      brochureTitle?: string;
    };

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400, headers: corsHeaders(origin) }
      );
    }

    const FROM = `InOps Contact <${process.env.GMAIL_USER}>`;
    const TO_LIST = parseRecipients();
    const subject = `[InOps] Brochure download — ${brochureTitle ?? "unknown"} — ${name}`;

    const html = `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#0b1e2d">
        <div style="background:#0a1f3d;padding:24px 32px;border-radius:12px 12px 0 0">
          <p style="margin:0;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.5);font-weight:600">InOps Solutions</p>
          <h1 style="margin:4px 0 0;font-size:20px;color:#fff;font-weight:700">Brochure Download Lead</h1>
        </div>
        <div style="background:#fff;padding:28px 32px;border:1px solid #e2e8ee;border-top:none;border-radius:0 0 12px 12px">
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;width:140px;font-size:12px;font-weight:600;color:#8696a7;text-transform:uppercase;letter-spacing:.05em">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:14px;color:#0b1e2d">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:12px;font-weight:600;color:#8696a7;text-transform:uppercase;letter-spacing:.05em">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:14px"><a href="mailto:${email}" style="color:#1c7bb8">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:12px;font-weight:600;color:#8696a7;text-transform:uppercase;letter-spacing:.05em">Brochure</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:14px;color:#0b1e2d">${brochureTitle ?? "—"}</td>
            </tr>
          </table>
          <p style="margin:24px 0 0;font-size:11px;color:#aab4bf">
            Sent from inops.tech · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({ from: FROM, to: TO_LIST, replyTo: email, subject, html });

    console.log(`[brochure-lead] ✅ Lead saved — ${name} <${email}> → ${brochureTitle}`);
    return NextResponse.json({ success: true }, { headers: corsHeaders(origin) });

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[brochure-lead] ❌ Error:", msg);
    return NextResponse.json(
      { error: `Server error: ${msg}` },
      { status: 500, headers: corsHeaders(origin) }
    );
  }
}
