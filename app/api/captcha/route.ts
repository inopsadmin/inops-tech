import { NextResponse } from "next/server";
import { makeToken } from "@/app/lib/verifyCaptcha";

export const runtime = "nodejs";

export function GET() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  const answer = String(a + b);
  const question = `${a} + ${b}`;
  const token = makeToken(answer);
  return NextResponse.json(
    { question, token },
    { headers: { "Cache-Control": "no-store, no-cache" } }
  );
}
