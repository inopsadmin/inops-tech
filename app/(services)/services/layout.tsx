import type { Metadata } from "next";
import { routeMetadata } from "@/app/lib/seoMetadata";
import SecondaryPageJsonLd from "@/app/components/SecondaryPageJsonLd";

const PAGE_TITLE = "Services | InOps — Workforce Compliance & Biometric Solutions";
const PAGE_DESCRIPTION =
  "InOps delivers end-to-end workforce compliance services for industrial enterprises — background verification, biometric AMC, CLRA audits, database audits, and industrial manpower supply.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services",
  extraKeywords: [
    "workforce compliance services India",
    "industrial workforce solutions",
    "background verification services",
    "biometric AMC services",
    "CLRA compliance audit",
    "industrial manpower supply",
    "biometric database audit",
    "InOps services",
  ],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SecondaryPageJsonLd
        path="/services"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      />
      {children}
    </>
  );
}
