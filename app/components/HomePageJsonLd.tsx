import {
  DEFAULT_DESCRIPTION,
  HOME_PAGE_TITLE,
  SITE_NAME,
  absoluteUrl,
  getSiteUrl,
} from "@/app/lib/site";

/**
 * Home `WebPage` + flagship `SoftwareApplication` (complements root Organization / WebSite graph).
 */
export default function HomePageJsonLd() {
  const siteUrl = getSiteUrl();
  const homeUrl = `${siteUrl}/`;
  const logoUrl = absoluteUrl("/logo.png");

  const graph = [
    {
      "@type": "WebPage",
      "@id": `${homeUrl}#home-webpage`,
      url: homeUrl,
      name: HOME_PAGE_TITLE,
      description: DEFAULT_DESCRIPTION,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteUrl}/#website` },
      primaryImageOfPage: { "@type": "ImageObject", url: logoUrl },
      about: { "@id": `${siteUrl}/#primary-product` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#primary-product`,
      name: `${SITE_NAME} — Workforce & Compliance Platform`,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Workforce Management Software",
      operatingSystem: "Web, Android, iOS",
      url: homeUrl,
      description: DEFAULT_DESCRIPTION,
      provider: { "@id": `${siteUrl}/#organization` },
      offers: {
        "@type": "Offer",
        url: absoluteUrl("/contact"),
        availability: "https://schema.org/OnlineOnly",
        seller: { "@id": `${siteUrl}/#organization` },
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
