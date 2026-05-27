import { jsonLdScriptProps } from "@/app/lib/jsonLd";
import {
  DEFAULT_DESCRIPTION,
  HOME_PAGE_TITLE,
  SCHEMA_SITE_NAV_PAGES,
  SITE_NAME,
  absoluteUrl,
  getSiteUrl,
  siteIconUrl,
} from "@/app/lib/site";

/**
 * Home `WebPage` + flagship `SoftwareApplication` (complements root Organization / WebSite graph).
 */
export default function HomePageJsonLd() {
  const siteUrl = getSiteUrl();
  const homeUrl = `${siteUrl}/`;
  const logoUrl = siteIconUrl();

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
      significantLink: SCHEMA_SITE_NAV_PAGES.map((p) => absoluteUrl(p.path)),
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
    {
      "@type": "ItemList",
      "@id": `${homeUrl}#home-sitelinks`,
      name: "Core solutions",
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
    },
  ];

  return <script {...jsonLdScriptProps({ "@context": "https://schema.org", "@graph": graph })} />;
}
