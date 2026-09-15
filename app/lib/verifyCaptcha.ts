import { createHmac } from "crypto";

const SECRET = process.env.CAPTCHA_SECRET || "inops-captcha-fallback-key";

export function makeToken(text: string): string {
  const w = Math.floor(Date.now() / 1000 / 300); // 5-min window
  const mac = createHmac("sha256", SECRET)
    .update(`${text.toLowerCase()}:${w}`)
    .digest("hex");
  return `${w}:${mac}`;
}

export function verifyCaptcha(token: string, answer: string): boolean {
  const parts = token.split(":");
  if (parts.length !== 2) return false;
  const [wStr, mac] = parts;
  const w = parseInt(wStr, 10);
  if (isNaN(w)) return false;
  const now = Math.floor(Date.now() / 1000 / 300);
  if (Math.abs(now - w) > 1) return false; // allow ±10 min clock drift
  const expected = createHmac("sha256", SECRET)
    .update(`${answer.toLowerCase()}:${wStr}`)
    .digest("hex");
  return expected === mac;
}
