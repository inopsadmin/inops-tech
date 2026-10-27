import ContactPageJsonLd from "@/app/components/ContactPageJsonLd";
import SecondaryPageJsonLd from "@/app/components/SecondaryPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Contact InOps IT Solutions | Book a CLMS Demo, Bengaluru";
const PAGE_DESCRIPTION =
  "Call +91 80277 45220 or email contact@inops.tech to book a CLMS or biometric demo. Office: Bommasandra Industrial Area, Bengaluru. AMC support too.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/contact",
  extraKeywords: ["workforce software contact Bengaluru", "CLMS demo India", "book workforce demo"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ContactPageJsonLd />
      <SecondaryPageJsonLd path="/contact" title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      {children}
    </>
  );
}
