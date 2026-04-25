import {
  CONTACT_EMAIL,
  DEFAULT_DESCRIPTION,
  OFFICE_ADDRESS,
  OFFICE_GEO,
  PHONE_E164,
  SITE_NAME,
  absoluteUrl,
  getSiteUrl,
} from "@/app/lib/site";

/**
 * Organization + WebSite + LocalBusiness JSON-LD for rich results and local relevance.
 */
export default function OrganizationJsonLd() {
  const siteUrl = getSiteUrl();
  const logoUrl = absoluteUrl("/logo.png");

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: SITE_NAME,
      url: siteUrl,
      logo: { "@type": "ImageObject", url: logoUrl },
      description: DEFAULT_DESCRIPTION,
      email: CONTACT_EMAIL,
      telephone: PHONE_E164,
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
    },
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
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
