import { ImageResponse } from "next/og";
import { HOME_PAGE_TITLE, SITE_NAME } from "@/app/lib/site";

export const alt = `${SITE_NAME} — enterprise workforce, CLMS, and biometric compliance`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #0c1929 0%, #0f2744 45%, #0d3d5c 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            IO
          </div>
          <span style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}>{SITE_NAME}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <div style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.03em" }}>
            {HOME_PAGE_TITLE.split(" | ")[1] ?? "CLMS, Biometrics & Workforce Compliance"}
          </div>
          <div style={{ fontSize: 24, lineHeight: 1.4, color: "#cbd5e1" }}>
            Contract labour management · Biometric attendance · PF/ESI · Earned wage access
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#94a3b8" }}>inops.tech · Bengaluru, India</div>
      </div>
    ),
    { ...size },
  );
}
