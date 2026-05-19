import { SITE_NAME, absoluteUrl } from "@/app/lib/site";

type Props = {
  name: string;
  description: string;
  path: string;
};

export default function SoftwareApplicationJsonLd({ name, description, path }: Props) {
  const url = absoluteUrl(path);
  const payload = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
