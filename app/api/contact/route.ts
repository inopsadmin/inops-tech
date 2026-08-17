import { NextRequest, NextResponse } from "next/server";

// ─── Email backend URL ────────────────────────────────────────────────
// Set EMAIL_SERVER_URL in your Vercel environment variables:
//   e.g.  https://inops-email-server.onrender.com
// Locally it falls back to localhost:3001
// ─────────────────────────────────────────────────────────────────────
const EMAIL_SERVER = process.env.EMAIL_SERVER_URL ?? "http://localhost:3001";

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

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // Forward to the Express email backend
    const res = await fetch(`${EMAIL_SERVER}/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, subject, message, source }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return NextResponse.json(
        { error: (data as { error?: string }).error ?? "Failed to send email." },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Error calling email server:", err);
    return NextResponse.json({ error: "Could not reach email server." }, { status: 500 });
  }
}
