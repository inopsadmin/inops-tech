import { NextResponse } from "next/server";
import svgCaptcha from "svg-captcha";
import { makeToken } from "@/app/lib/verifyCaptcha";

export const runtime = "nodejs";

export function GET() {
  const captcha = svgCaptcha.create({
    size: 5,
    noise: 2,
    color: false,
    background: "#b5dde8",
    width: 200,
    height: 60,
    fontSize: 52,
    ignoreChars: "0O1lIiuU",
  });

  return NextResponse.json(
    { svg: captcha.data, token: makeToken(captcha.text) },
    { headers: { "Cache-Control": "no-store, no-cache" } }
  );
}
