/**
 * Single source of truth for public site URL, NAP (name, address, phone), and SEO defaults.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://inops.tech) so metadata, sitemap, and schema stay correct.
 */

export const SITE_NAME = "InOps Solutions";

/** Default `<title>` for the homepage (matches brand + high-intent queries + geo). */
export const HOME_PAGE_TITLE = `${SITE_NAME} | CLMS, Biometrics & Workforce Compliance | Bengaluru`;

export const SITE_TAGLINE =
  "Enterprise contract labour management, biometric attendance, PF/ESI compliance, payroll automation, and earned wage access for Indian manufacturers.";

/** Meta description: optimized for SERP snippet (reference: contract labour, biometrics, PF ESI, EWA, geo). */
export const DEFAULT_DESCRIPTION =
  "Enterprise contract labour management software with biometric attendance, PF ESI compliance, payroll automation, and earned wage access for Indian manufacturers. Bengaluru.";

export const CONTACT_EMAIL = "contact@inops.tech";

/** Official company social profiles (footer / schema / sameAs). */
export const SOCIAL_LINKS = {
  linkedin: "https://in.linkedin.com/company/inops-it-solutions-pvt-ltd",
  twitter: "https://x.com/InOpstweets",
  facebook: "https://www.facebook.com/people/InOps-Solutions/61552352699183/",
  // Add these once profiles are live — they unlock sameAs entity resolution in AI engines
  // g2: "https://www.g2.com/products/inops",
  // capterra: "https://www.capterra.com/p/inops",
  // crunchbase: "https://www.crunchbase.com/organization/inops-it-solutions",
  // softwaresuggest: "https://www.softwaresuggest.com/inops",
} as const;

export const FOUNDING_YEAR = "2014" as const;

/** Founder / CEO — used as named Person author in blog Article schema.
 *  Update `name` to the full name (first + last) before publishing bylined posts. */
export const FOUNDER = {
  name: "Satish Sinha",
  jobTitle: "Founder & CEO, InOps IT Solutions",
  url: "https://in.linkedin.com/company/inops-it-solutions-pvt-ltd",
} as const;

export const KNOWS_ABOUT = [
  "Contract Labour Management",
  "Contract Labour (Regulation & Abolition) Act Compliance",
  "Biometric Attendance Systems",
  "Earned Wage Access",
  "Factory Workforce Management",
  "PF ESI Statutory Compliance",
  "Industrial Access Control",
  "Contractor Payroll Automation",
  "Manufacturing HR Software",
  "Zone Safety Monitoring",
] as const;

/** E.164 for schema.org / tel: links */
export const PHONE_E164 = "+918088602602";

export const PHONE_DISPLAY = "+91 80886 02602";

/** X (Twitter) handle for `twitter:site` / `twitter:creator` metadata. */
export const TWITTER_HANDLE = "@InOpstweets";

/** Full postal address (matches footer / Google Business profile style). */
export const OFFICE_ADDRESS = {
  streetAddress:
    "60B, Bommasandra Link Road, near Karnataka Bank, Bommasandra Industrial Area, Bommasandra",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560099",
  addressCountry: "IN",
} as const;

/** Single-line display (footer, contact cards). */
export const OFFICE_ADDRESS_LINE = `${OFFICE_ADDRESS.streetAddress}, ${OFFICE_ADDRESS.addressLocality}, ${OFFICE_ADDRESS.addressRegion} ${OFFICE_ADDRESS.postalCode}`;

/** Open in Google Maps (share link). */
export const OFFICE_MAPS_URL = "https://maps.app.goo.gl/MCxTww99RXaD3hfbA";

/** Google Maps embed — matches OFFICE_MAPS_URL place pin. */
export const OFFICE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=60B,+Bommasandra+Link+Road,+near+Karnataka+Bank,+Bommasandra+Industrial+Area,+Bommasandra,+Bengaluru,+Karnataka+560099&hl=en&z=17&output=embed";

/** Coordinates for Bommasandra office (LocalBusiness geo / map pin). */
export const OFFICE_GEO = {
  latitude: 12.813693,
  longitude: 77.6835529,
} as const;

/** Brand terms — homepage only (avoids inner pages competing on "inops" navigational queries). */
export const KEYWORDS_BRAND = ["InOps", "InOps Solutions"] as const;

export const KEYWORDS_BASE = [
  ...KEYWORDS_BRAND,
  // Broadly applicable to all pages
  "biometric attendance system",
  "biometric attendance system manufacturing",
  "workforce management India",
  "access control systems",
  "industrial attendance",
  "payroll compliance India",
  // Geo
  "Bommasandra Industrial Area",
  "Bengaluru workforce software",
  "Karnataka enterprise software",
] as const;

/**
 * CLMS-specific keywords — add via extraKeywords in CLMS-related layouts only.
 * Removed from KEYWORDS_BASE so they don't appear on unrelated pages (biometrics, accessories, etc.).
 */
export const KEYWORDS_CLMS = [
  "CLMS software",
  "contract labour management software India",
  "contract labour management system",
  "contract labor management India",
  "contractor compliance software India",
  "CLRA compliance software",
  "PF ESI compliance software",
  "contractor payroll automation India",
] as const;

/**
 * Important landing URLs surfaced internally for structured data (`WebSite` → `hasPart`).
 * Helps search engines understand IA (sitelinks are still algorithmically chosen).
 */
export const SCHEMA_SITE_NAV_PAGES = [
  {
    path: "/contract-labour-management",
    name: "Contract Labour Management",
    description: "Automate payroll, PF/ESI & biometric attendance",
  },
  {
    path: "/early-wage-access",
    name: "Early Wage Access (EWA)",
    description: "On-demand wages for factory workers",
  },
  {
    path: "/face-based-access-control",
    name: "Biometric Access Control",
    description: "Face readers, turnstiles & attendance hardware",
  },
  {
    path: "/contact",
    name: "Contact InOps",
    description: `Book a demo · ${PHONE_DISPLAY}`,
  },
] as const;

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");
  if (raw) return raw;
  return "https://inops.tech";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/**
 * Default OG/Twitter image (absolute). Uses App Router `app/opengraph-image.tsx` (1200×630).
 * Falls back to logo if a route overrides images explicitly.
 */
export function defaultOgImageUrl(): string {
  return absoluteUrl("/opengraph-image");
}

/** Full-width brand logo (navbar, marketing). */
export const BRAND_LOGO_PATH = "/logo.png";

/** Square mark for favicon, app icon, JSON-LD logo, and SERP site icon. */
export const SITE_ICON_PATH = "/favicon.png";

export function logoImageUrl(): string {
  return absoluteUrl(BRAND_LOGO_PATH);
}

export function siteIconUrl(): string {
  return absoluteUrl(SITE_ICON_PATH);
}

/** Sitemap `lastModified` hints for high-priority routes (ISO date strings). */
export const SITEMAP_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-05-01",
  "/contact": "2026-05-01",
  "/contract-labour-management": "2026-04-15",
  "/hris": "2026-04-15",
  "/early-wage-access": "2026-04-15",
  "/face-based-access-control": "2026-04-15",
  "/cctv-attendance": "2026-04-15",
  "/canteen-and-visitor": "2026-04-15",
};
