import ContactPageJsonLd from "@/app/components/ContactPageJsonLd";
import SecondaryPageJsonLd from "@/app/components/SecondaryPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Book a Demo | InOps — CLMS, Biometrics & Workforce Compliance";
const PAGE_DESCRIPTION =
  "Book a demo, talk to sales, or visit our Bengaluru office. Phone +91 80277 45220 · contact@inops.tech · Bommasandra Industrial Area.";

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
