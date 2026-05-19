import type { NextConfig } from "next";

const staticAssetCache = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
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
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "simple-icons"],
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
    ];
  },
};

export default nextConfig;
