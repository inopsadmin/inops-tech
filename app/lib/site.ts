/**
 * Single source of truth for public site URL, NAP (name, address, phone), and SEO defaults.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://inops.tech) so metadata, sitemap, and schema stay correct.
 */

export const SITE_NAME = "InOps Solutions";

export const SITE_TAGLINE =
  "CLMS, workforce compliance, biometrics, and access control for industrial and enterprise sites in India.";

export const DEFAULT_DESCRIPTION =
  "Enterprise workforce management and authentication for industrial environments, biometrics, real-time tracking, and automated compliance for contract workers, attendance, payroll, access control, and visitor management. Based in Koramangala, Bengaluru.";

export const CONTACT_EMAIL = "contact@inops.tech";

/** E.164 for schema.org / tel: links */
export const PHONE_E164 = "+918088602602";

export const PHONE_DISPLAY = "+91 80886 02602";

/** Full postal address (matches footer / Google Business profile style). */
export const OFFICE_ADDRESS = {
  streetAddress:
    "No.18, 4th 'C' Cross, 1st Main Rd, Koramangala Industrial Layout, 5th Block",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560095",
  addressCountry: "IN",
} as const;

/** Approximate coordinates for Koramangala Industrial Layout (LocalBusiness geo). */
export const OFFICE_GEO = {
  latitude: 12.9352,
  longitude: 77.6245,
} as const;

export const KEYWORDS_BASE = [
  "InOps",
  "InOps Solutions",
  "CLMS software",
  "contract labour management system",
  "contract labor management India",
  "biometric attendance system",
  "workforce management India",
  "access control systems",
  "turnstiles India",
  "visitor management system",
  "canteen management system",
  "payroll compliance India",
  "industrial attendance",
  "Koramangala",
  "Bengaluru workforce software",
  "Karnataka enterprise software",
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

/** Default OG/Twitter image (absolute). Use logo until a dedicated 1200×630 asset exists. */
export function defaultOgImageUrl(): string {
  return absoluteUrl("/logo.png");
}
