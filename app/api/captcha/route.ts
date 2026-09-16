import { NextResponse } from "next/server";
import { makeToken } from "@/app/lib/verifyCaptcha";

export const runtime = "nodejs";

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
const FONTS = ["Georgia,serif", '"Times New Roman",serif', "Palatino,serif", "Garamond,serif"];
const W = 220;
const H = 70;

function rnd(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function generateSvgCaptcha(text: string): string {
  const n = text.length;
  const slotW = (W - 28) / n;
  const parts: string[] = [];

  // Background with slight gradient feel via two rects
  parts.push(
    `<rect width="${W}" height="${H}" fill="#b2dce8"/>`,
    `<rect width="${W}" height="${H}" fill="url(#ng)" opacity="0.25"/>`
  );

  // Noise dots
  for (let i = 0; i < 50; i++) {
    const cx = rnd(0, W).toFixed(1);
    const cy = rnd(0, H).toFixed(1);
    const r = rnd(0.6, 2.2).toFixed(1);
    const op = rnd(0.08, 0.28).toFixed(2);
    parts.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#17305e" opacity="${op}"/>`);
  }

  // Noise lines
  for (let i = 0; i < 3; i++) {
    const x1 = rnd(0, W * 0.5).toFixed(1);
    const y1 = rnd(0, H).toFixed(1);
    const x2 = rnd(W * 0.5, W).toFixed(1);
    const y2 = rnd(0, H).toFixed(1);
    const sw = rnd(0.5, 1.5).toFixed(1);
    parts.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#17305e" stroke-width="${sw}" opacity="0.22"/>`);
  }

  // Characters — wavy sine baseline, individual rotation & size
  for (let i = 0; i < n; i++) {
    const char = text[i];
    const cx = 14 + i * slotW + slotW / 2 + rnd(-4, 4);
    // sine-wave baseline so characters curve up and down
    const wave = Math.sin((i / (n - 1)) * Math.PI * 1.8 - 0.4) * 10;
    const cy = H / 2 + 9 + wave + rnd(-4, 4);
    const rot = rnd(-28, 28).toFixed(1);
    const fs = rnd(26, 38).toFixed(1);
    const font = FONTS[Math.floor(rnd(0, FONTS.length))];
    const fw = Math.random() > 0.4 ? "bold" : "900";
    // slight color variation within dark navy palette
    const hue = Math.floor(rnd(215, 235));
    const sat = Math.floor(rnd(55, 75));
    const lig = Math.floor(rnd(18, 30));
    const fill = `hsl(${hue},${sat}%,${lig}%)`;

    parts.push(
      `<text x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" ` +
        `font-size="${fs}" font-family="${font}" font-weight="${fw}" fill="${fill}" ` +
        `transform="rotate(${rot},${cx.toFixed(1)},${cy.toFixed(1)})"` +
        `>${char}</text>`
    );
  }

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">` +
    `<defs><linearGradient id="ng" x1="0" y1="0" x2="0" y2="1">` +
    `<stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#8cb8c8"/>` +
    `</linearGradient></defs>` +
    parts.join("") +
    `</svg>`
  );
}

export function GET() {
  // Pick random chars
  const text = Array.from(
    { length: 6 },
    () => CHARS[Math.floor(Math.random() * CHARS.length)]
  ).join("");

  const svg = generateSvgCaptcha(text);
  const token = makeToken(text);

  return NextResponse.json(
    { svg, token },
    { headers: { "Cache-Control": "no-store, no-cache" } }
  );
}
