import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import ScrollRevealEnhancer from "./components/ScrollRevealEnhancer";
import OrganizationJsonLd from "./components/OrganizationJsonLd";
import {
  DEFAULT_DESCRIPTION,
  KEYWORDS_BASE,
  SITE_NAME,
  defaultOgImageUrl,
  getSiteUrl,
} from "@/app/lib/site";
import LayoutWrapper from "./components/LayoutWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const ogImage = defaultOgImageUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} | CLMS, Biometrics & Workforce Compliance | Bengaluru`,
    /** Child layouts set full titles (e.g. "About Us | InOps Solutions"); avoid double suffix. */
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [...KEYWORDS_BASE, "Best Authentication Services", "Trusted Workforce Management Solutions"],
  authors: [{ name: SITE_NAME, url: siteUrl }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | CLMS, Biometrics & Workforce Compliance`,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: ogImage, alt: `${SITE_NAME} ,  enterprise workforce and access solutions` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | CLMS, Biometrics & Workforce Compliance`,
    description: DEFAULT_DESCRIPTION,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${geistMono.variable} overflow-x-hidden`} suppressHydrationWarning>
      <body
        className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sans text-gray-900 antialiased"
        suppressHydrationWarning
      >
        <OrganizationJsonLd />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}