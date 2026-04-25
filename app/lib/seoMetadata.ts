import type { Metadata } from "next";
import { defaultOgImageUrl, KEYWORDS_BASE, SITE_NAME } from "@/app/lib/site";

type RouteMetaInput = {
  title: string;
  description: string;
  path: string;
  extraKeywords?: string[];
};

/**
 * Per-route metadata with canonical URL, OG/Twitter, and keyword list (includes global + route terms).
 */
export function routeMetadata({
  title,
  description,
  path,
  extraKeywords = [],
}: RouteMetaInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const og = defaultOgImageUrl();
  const keywords = [...KEYWORDS_BASE, ...extraKeywords];

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [{ url: og, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [og],
    },
  };
}
