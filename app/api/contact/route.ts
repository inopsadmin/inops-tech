import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// ─── Zoho Mail SMTP ───────────────────────────────────────────────────
//   SMTP_HOST         smtppro.zoho.in
//   SMTP_PORT         465  (SSL)
//   SMTP_USER         clms@inops.tech
//   SMTP_PASS         your Zoho password
//   CONTACT_FROM_EMAIL  InOps Contact <clms@inops.tech>
//   CONTACT_TO_EMAIL    destination inbox
// ─────────────────────────────────────────────────────────────────────

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,          // smtppro.zoho.in
  port: Number(process.env.SMTP_PORT),  // 465
  secure: true,                         // port 465 → SSL (not STARTTLS)
  auth: {
    user: process.env.SMTP_USER,        // clms@inops.tech
    pass: process.env.SMTP_PASS,        // Zoho password
  },
  tls: {
    rejectUnauthorized: false,          // trusts all SSL certs (matches mail_smtp_ssl_trust: "*")
  },
});

const FROM = process.env.CONTACT_FROM_EMAIL ?? `InOps Contact <${process.env.SMTP_USER}>`;
const TO   = process.env.CONTACT_TO_EMAIL   ?? (process.env.SMTP_USER as string);

export async function POST(req: NextRequest) {
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

    // ── Basic server-side validation ──────────────────────────────────
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
            ${phone ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:12px;font-weight:600;color:#8696a7;text-transform:uppercase;letter-spacing:.05em">Phone</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:14px;color:#0b1e2d">${phone}</td>
            </tr>` : ""}
            ${subject ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:12px;font-weight:600;color:#8696a7;text-transform:uppercase;letter-spacing:.05em">Subject</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:14px;color:#0b1e2d">${subject}</td>
            </tr>` : ""}
            ${source ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:12px;font-weight:600;color:#8696a7;text-transform:uppercase;letter-spacing:.05em">Source</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f2f4;font-size:14px;color:#0b1e2d">${source}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top:20px">
            <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#8696a7;text-transform:uppercase;letter-spacing:.05em">Message</p>
            <div style="background:#f4f6f8;border-radius:8px;padding:16px;font-size:14px;line-height:1.7;color:#0b1e2d;white-space:pre-wrap">${message}</div>
          </div>

          <p style="margin:24px 0 0;font-size:11px;color:#aab4bf">
            Sent from inops.tech contact form · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: subjectLine,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Email send error:", err);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
