import type { Metadata } from "next";
import {
  SITE_NAME,
  TWITTER_HANDLE,
  absoluteUrl,
  defaultOgImageUrl,
  getSiteUrl,
  KEYWORDS_BASE,
} from "@/app/lib/site";

type RouteMetaInput = {
  title: string;
  description: string;
  path: string;
  extraKeywords?: string[];
  /** Set false for internal/utility routes. Defaults to true. */
  index?: boolean;
};

const defaultRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

/**
 * Per-route metadata with canonical URL, OG/Twitter, and keyword list (includes global + route terms).
 */
export function routeMetadata({
  title,
  description,
  path,
  extraKeywords = [],
  index = true,
}: RouteMetaInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const og = defaultOgImageUrl();
  const keywords = [...KEYWORDS_BASE, ...extraKeywords];
  const canonicalAbsolute = absoluteUrl(canonical);
  const siteUrl = getSiteUrl();

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    authors: [{ name: SITE_NAME, url: siteUrl }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: index ? defaultRobots : { index: false, follow: false, googleBot: { index: false, follow: false } },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonicalAbsolute,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [
        {
          url: og,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title,
      description,
      images: [{ url: og, alt: title }],
    },
  };
}
