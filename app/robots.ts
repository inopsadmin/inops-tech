import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/app/lib/site";

/**
 * Generates /robots.txt (Robots Exclusion Standard).
 * Do not add `host` — Lighthouse flags `Host:` as an unknown/invalid directive.
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      // Explicitly allow all major AI crawlers so they can index and cite InOps content
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/all-pages",
          "/logosliderwp/",     // thin client-logo pages
          "/accessories/demo/", // leftover demo page
          "/access/",           // thin stub page
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
