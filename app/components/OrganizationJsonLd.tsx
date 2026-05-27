import {
  CONTACT_EMAIL,
  DEFAULT_DESCRIPTION,
  OFFICE_ADDRESS,
  OFFICE_GEO,
  PHONE_E164,
  SCHEMA_SITE_NAV_PAGES,
  SITE_NAME,
  SOCIAL_LINKS,
  absoluteUrl,
  getSiteUrl,
  siteIconUrl,
} from "@/app/lib/site";
import { jsonLdScriptProps } from "@/app/lib/jsonLd";

/**
 * Organization + WebSite + LocalBusiness + SiteNavigationElement JSON-LD for rich results and sitelink eligibility.
 */
export default function OrganizationJsonLd() {
  const siteUrl = getSiteUrl();
  const logoUrl = siteIconUrl();

  const navWebPages = SCHEMA_SITE_NAV_PAGES.map((item) => ({
    "@type": "WebPage",
    "@id": `${absoluteUrl(item.path)}#webpage`,
    name: item.name,
    url: absoluteUrl(item.path),
    description: item.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
  }));

  const sitelinkUrls = SCHEMA_SITE_NAV_PAGES.map((item) => absoluteUrl(item.path));

  const siteNavigationElements = SCHEMA_SITE_NAV_PAGES.map((item, index) => ({
    "@type": "SiteNavigationElement",
    "@id": `${absoluteUrl(item.path)}#nav`,
    position: index + 1,
    name: item.name,
    description: item.description,
    url: absoluteUrl(item.path),
  }));

  const keyPagesItemList = {
    "@type": "ItemList",
    "@id": `${siteUrl}/#key-pages`,
    name: "Popular pages",
    numberOfItems: SCHEMA_SITE_NAV_PAGES.length,
    itemListElement: SCHEMA_SITE_NAV_PAGES.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        name: item.name,
        description: item.description,
        url: absoluteUrl(item.path),
      },
    })),
  };

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: SITE_NAME,
      url: siteUrl,
      logo: { "@type": "ImageObject", url: logoUrl },
      image: logoUrl,
      description: DEFAULT_DESCRIPTION,
      email: CONTACT_EMAIL,
      telephone: PHONE_E164,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: PHONE_E164,
          email: CONTACT_EMAIL,
          areaServed: "IN",
          availableLanguage: ["en", "hi", "kn"],
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: PHONE_E164,
          email: CONTACT_EMAIL,
          areaServed: "IN",
        },
      ],
      sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.twitter, SOCIAL_LINKS.facebook],
      address: {
        "@type": "PostalAddress",
        streetAddress: OFFICE_ADDRESS.streetAddress,
        addressLocality: OFFICE_ADDRESS.addressLocality,
        addressRegion: OFFICE_ADDRESS.addressRegion,
        postalCode: OFFICE_ADDRESS.postalCode,
        addressCountry: OFFICE_ADDRESS.addressCountry,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: SITE_NAME,
      url: siteUrl,
      description: DEFAULT_DESCRIPTION,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
      significantLink: sitelinkUrls,
      hasPart: [
        ...navWebPages.map((p) => ({ "@id": p["@id"] as string })),
        { "@id": `${siteUrl}/#key-pages` },
        ...siteNavigationElements.map((n) => ({ "@id": n["@id"] as string })),
      ],
    },
    ...navWebPages,
    ...siteNavigationElements,
    keyPagesItemList,
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: SITE_NAME,
      image: logoUrl,
      url: siteUrl,
      telephone: PHONE_E164,
      email: CONTACT_EMAIL,
      description: DEFAULT_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        streetAddress: OFFICE_ADDRESS.streetAddress,
        addressLocality: OFFICE_ADDRESS.addressLocality,
        addressRegion: OFFICE_ADDRESS.addressRegion,
        postalCode: OFFICE_ADDRESS.postalCode,
        addressCountry: OFFICE_ADDRESS.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: OFFICE_GEO.latitude,
        longitude: OFFICE_GEO.longitude,
      },
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
      priceRange: "$$",
    },
  ];

  return <script {...jsonLdScriptProps({ "@context": "https://schema.org", "@graph": graph })} />;
}
