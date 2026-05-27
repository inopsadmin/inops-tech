import { jsonLdScriptProps } from "@/app/lib/jsonLd";
import { productSchemaByPath } from "@/app/lib/productSchema";
import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/app/lib/site";

type Props = {
  path: string;
};

export default function ProductJsonLd({ path }: Props) {
  const data = productSchemaByPath[path];
  if (!data) return null;

  const siteUrl = getSiteUrl();
  const url = absoluteUrl(path);

  const payload = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    description: data.description,
    url,
    category: data.category,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    manufacturer: { "@id": `${siteUrl}/#organization` },
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/contact"),
      availability: "https://schema.org/InStock",
      seller: { "@id": `${siteUrl}/#organization` },
    },
  };

  return <script {...jsonLdScriptProps(payload)} />;
}
