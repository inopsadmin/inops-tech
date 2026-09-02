import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import OrganizationJsonLd from "./components/OrganizationJsonLd";
import {
  DEFAULT_DESCRIPTION,
  HOME_PAGE_TITLE,
  KEYWORDS_BASE,
  SITE_NAME,
  TWITTER_HANDLE,
  defaultOgImageUrl,
  getSiteUrl,
  siteIconUrl,
} from "@/app/lib/site";
import LayoutWrapper from "./components/LayoutWrapper";
import FloatingActions from "./components/FloatingActions";

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
    default: HOME_PAGE_TITLE,
    /** Child layouts set full titles; avoid double suffix. */
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [...KEYWORDS_BASE, "Best Authentication Services", "Trusted Workforce Management Solutions"],
  authors: [{ name: SITE_NAME, url: siteUrl }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "business",
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
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.png"],
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_NAME,
    title: HOME_PAGE_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — enterprise workforce, CLMS, and biometric compliance`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: HOME_PAGE_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [ogImage],
  },
  other: {
    "msapplication-TileImage": siteIconUrl(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // added this data-scroll-behavior="smooth"
    <html lang="en-IN" className={`${inter.variable} ${geistMono.variable} overflow-x-hidden`}  data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body
        className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sans text-gray-900 antialiased"
        suppressHydrationWarning
      >
        <OrganizationJsonLd />
        <LayoutWrapper>{children}</LayoutWrapper>
        <FloatingActions />
        <GoogleAnalytics gaId="G-87Z9WJBRMM" />
      </body>
    </html>
  );
}
