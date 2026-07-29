import type { NextConfig } from "next";

const staticAssetCache = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.elimparcial.com",
        pathname: "/resizer/**",
      },
    ],
  },
  experimental: {},
  async redirects() {
    return [
      { source: "/solutions/labourmanagement", destination: "/hris", permanent: true },
      { source: "/solutions/labourmanagement/:path*", destination: "/hris", permanent: true },
      { source: "/clms", destination: "/contract-labour-management", permanent: true },
      { source: "/clms/:path*", destination: "/contract-labour-management/:path*", permanent: true },
      { source: "/solutions/payroll-solutions", destination: "/contract-labour-management", permanent: true },
      { source: "/solutions/payroll-solutions/:path*", destination: "/contract-labour-management", permanent: true },
      { source: "/solutions/time-and-attendance", destination: "/cctv", permanent: true },
      { source: "/solutions/time-and-attendance/:path*", destination: "/cctv", permanent: true },
      { source: "/solutions/canteen-management", destination: "/canteen-and-visitor", permanent: true },
      { source: "/solutions/canteen-management/:path*", destination: "/canteen-and-visitor", permanent: true },
      { source: "/product/biometric-access-control", destination: "/face", permanent: true },
      { source: "/product/biometric-access-control/:path*", destination: "/face", permanent: true },
      { source: "/product/turnstiles-access", destination: "/turnstiles-access", permanent: true },
      { source: "/product/turnstiles-access/:path*", destination: "/turnstiles-access", permanent: true },
      { source: "/product/accessories", destination: "/accessories", permanent: true },
      { source: "/product/accessories/:path*", destination: "/accessories", permanent: true },
      { source: "/solutions/ewa", destination: "/ewa", permanent: true },
      { source: "/solutions/ewa/:path*", destination: "/ewa", permanent: true },
      { source: "/solutions/mobile-app", destination: "/mobile-app", permanent: true },
      { source: "/solutions/mobile-app/:path*", destination: "/mobile-app", permanent: true },
      { source: "/solutions/enterprise-solution", destination: "/enterprise-solution", permanent: true },
      { source: "/solutions/enterprise-solution/:path*", destination: "/enterprise-solution", permanent: true },
      { source: "/solutions/visitor-management", destination: "/visitor-management", permanent: true },
      { source: "/solutions/visitor-management/:path*", destination: "/visitor-management", permanent: true },
      {
        source: "/solutions/fixed-asset-management",
        destination: "/fixed-asset-management",
        permanent: true,
      },
      {
        source: "/solutions/fixed-asset-management/:path*",
        destination: "/fixed-asset-management",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/:path*.mp4",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/clients/:path*",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/logo.png",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/logo1.png",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/favicon.png",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/favicon-16x16.png",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/favicon-32x32.png",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/apple-touch-icon.png",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/opengraph-image",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: staticAssetCache }],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;
