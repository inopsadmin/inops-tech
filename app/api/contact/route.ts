import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// ─── Zoho SMTP transporter ────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.in",
  port: 465,
  secure: true,                      // SSL on port 465
  auth: {
    user: process.env.SMTP_USER,     // clms@inops.tech
    pass: process.env.SMTP_PASS,     // Zoho password
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 8000,           // 8s — stay under Vercel's 10s limit
  greetingTimeout: 8000,
  socketTimeout: 8000,
});

const FROM = `InOps Contact <${process.env.SMTP_USER}>`;
const TO   = process.env.CONTACT_TO_EMAIL ?? (process.env.SMTP_USER as string);

export async function POST(req: NextRequest) {
  // ── Guard: make sure env vars are actually loaded ──────────────────
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error("[contact] SMTP_USER or SMTP_PASS env var is missing");
    return NextResponse.json(
      { error: "Email server is not configured. Contact support." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, phone, subject, message, source } = body as {
      name?: string;
      email?: string;
      phone?: string;
      subject?: string;
      message?: string;
      source?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
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

    await transporter.sendMail({ from: FROM, to: TO, replyTo: email, subject: subjectLine, html });

    console.log(`[contact] ✅ Email sent to ${TO} from ${name} <${email}>`);
    return NextResponse.json({ success: true });

  } catch (err: unknown) {
    // Log the FULL error so you can read it in Vercel → Functions → Logs
    const message  = err instanceof Error ? err.message  : String(err);
    const code     = (err as Record<string, unknown>).code     ?? "—";
    const command  = (err as Record<string, unknown>).command  ?? "—";
    const response = (err as Record<string, unknown>).response ?? "—";

    console.error("[contact] ❌ SMTP error:", { message, code, command, response });

    // Return the real error so it shows in the browser during debugging
    return NextResponse.json(
      { error: `SMTP error: ${message}` },
      { status: 500 }
    );
  }
}
