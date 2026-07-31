import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { bgvServiceFaqItems } from "@/app/lib/bgvServiceFaqItems";
import type { Metadata } from "next";

const PAGE_TITLE = "Background Verification for Contract Workers | InOps RegX";
const PAGE_DESCRIPTION =
  "Industrial background verification for contract workers, vendors, and visitors — Aadhaar-based identity, criminal checks, address verification, and UAN employment history, deployed in days.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/bgv",
  extraKeywords: [
    "background verification India",
    "industrial background verification",
    "contract worker BGV",
    "employee background check India",
    "criminal record check India",
    "pre-employment screening India",
    "Aadhaar verification workers",
    "blue collar background verification",
    "vendor background check",
    "bulk worker verification",
  ],
});

export default function BGVLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/bgv"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
        faqItems={bgvServiceFaqItems}
      />
      {children}
    </>
  );
}
