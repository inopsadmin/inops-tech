import SecondaryPageJsonLd from "@/app/components/SecondaryPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "About InOps | Contract Workforce Compliance Since 2014";
const PAGE_DESCRIPTION =
  "InOps IT Solutions — contract labour management, biometric attendance & CLRA compliance for Indian manufacturing. Headquartered in Bommasandra, Bengaluru.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/about",
  extraKeywords: ["workforce automation Bengaluru", "enterprise CLMS India", "workforce technology partner India"],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SecondaryPageJsonLd path="/about" title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      {children}
    </>
  );
}
