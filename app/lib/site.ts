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

/** Official company social profiles (footer / schema). */
export const SOCIAL_LINKS = {
  linkedin: "https://in.linkedin.com/company/inops-it-solutions-pvt-ltd",
  twitter: "https://x.com/InOpstweets",
  facebook: "https://www.facebook.com/people/InOps-Solutions/61552352699183/",
} as const;

/** E.164 for schema.org / tel: links */
export const PHONE_E164 = "+918088602602";

export const PHONE_DISPLAY = "+91 80886 02602";

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
  "Bommasandra Industrial Area",
  "Bengaluru workforce software",
  "Karnataka enterprise software",
] as const;

/**
 * Important landing URLs surfaced internally for structured data (`WebSite` → `hasPart`).
 * Helps search engines understand IA (sitelinks are still algorithmically chosen).
 */
export const SCHEMA_SITE_NAV_PAGES = [
  {
    path: "/solutions/labourmanagement",
    name: "Contract Labour Management",
    description: "Automate payroll, PF/ESI & biometric attendance",
  },
  {
    path: "/solutions/ewa",
    name: "Earned Wage Access (EWA)",
    description: "On-demand wages for factory workers",
  },
  {
    path: "/product/biometric-access-control",
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

/** Default OG/Twitter image (absolute). Use logo until a dedicated 1200×630 asset exists. */
export function defaultOgImageUrl(): string {
  return absoluteUrl("/logo.png");
}
