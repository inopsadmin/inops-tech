import { jsonLdScriptProps } from "@/app/lib/jsonLd";
import { absoluteUrl, getSiteUrl } from "@/app/lib/site";

type Props = {
  name: string;
  description: string;
  path: string;
};

export default function SoftwareApplicationJsonLd({ name, description, path }: Props) {
  const siteUrl = getSiteUrl();
  const url = absoluteUrl(path);

  const payload = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}#software`,
    name,
    description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/contact"),
      availability: "https://schema.org/OnlineOnly",
      seller: { "@id": `${siteUrl}/#organization` },
    },
    provider: { "@id": `${siteUrl}/#organization` },
  };

  return <script {...jsonLdScriptProps(payload)} />;
}
