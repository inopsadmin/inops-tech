import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import ScrollRevealEnhancer from "./components/ScrollRevealEnhancer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://example.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "InOps Solutions | Automated CLMS & Compliance",
    template: "%s | InOps Solutions",
  },
  description:
    "InOps Solutions delivers workforce management and authentication for industrial environments—biometrics, real-time tracking, and automated compliance for contract workers, attendance, payroll, and access control.",
  keywords: [
    "InOps",
    "CLMS software",
    "contract labour management system",
    "biometric attendance system",
    "workforce management India",
    "access control systems",
    "turnstiles",
    "visitor management system",
    "payroll compliance",
    "industrial attendance",
    "Best Authentication Services",
    "Trusted Workforce Management Solutions",
    "Reliable Access Control Systems",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "InOps Solutions",
    title: "InOps Solutions | Automated CLMS & Compliance",
    description:
      "InOps Solutions delivers workforce management and authentication for industrial environments—biometrics, real-time tracking, and automated compliance for contract workers, attendance, payroll, and access control.",
  },
  twitter: {
    card: "summary_large_image",
    title: "InOps Solutions | Automated CLMS & Compliance",
    description:
      "InOps Solutions delivers workforce management and authentication for industrial environments—biometrics, real-time tracking, and automated compliance for contract workers, attendance, payroll, and access control.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col overflow-x-hidden bg-white text-gray-900 antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <div className="site-shell relative flex min-h-screen w-full flex-col">
            <div className="brand-shape-canvas" aria-hidden>
              <div className="brand-shape brand-shape--top-left" />
              <div className="brand-shape brand-shape--top-right" />
              <div className="brand-shape brand-shape--mid-right" />
              <div className="brand-shape brand-shape--bottom-left" />
            </div>
            <Navbar />
            <main className="relative z-[1] min-w-0 flex-1">
              {children}
              <ScrollRevealEnhancer />
            </main>
            <div className="relative z-[1]">
              <Footer />
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
