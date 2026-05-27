import { jsonLdScriptProps } from "@/app/lib/jsonLd";
import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  PHONE_E164,
  SITE_NAME,
  absoluteUrl,
  getSiteUrl,
} from "@/app/lib/site";

export default function ContactPageJsonLd() {
  const siteUrl = getSiteUrl();
  const contactUrl = absoluteUrl("/contact");

  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${contactUrl}#contactpage`,
        url: contactUrl,
        name: `Contact ${SITE_NAME}`,
        description: `Book a demo or speak with sales. Phone ${PHONE_DISPLAY}.`,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${siteUrl}/#localbusiness` },
      },
      {
        "@type": "ContactPoint",
        "@id": `${siteUrl}/#sales-contact`,
        contactType: "sales",
        telephone: PHONE_E164,
        email: CONTACT_EMAIL,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Kannada"],
        url: contactUrl,
      },
    ],
  };

  return <script {...jsonLdScriptProps(payload)} />;
}
