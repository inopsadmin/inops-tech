import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { clmsFaqItems } from "@/app/lib/clmsFaqItems";
import { KEYWORDS_CLMS } from "@/app/lib/site";
import type { Metadata } from "next";

const PAGE_TITLE = "Contract Labour Management System (CLMS) | Payroll, PF/ESI & Attendance — InOps";
const PAGE_DESCRIPTION =
  "Automate contract labour payroll, PF/ESI compliance, and biometric attendance for Indian manufacturers — fewer errors, faster cycles, audit-ready reporting.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/contract-labour-management",
  extraKeywords: [
    ...KEYWORDS_CLMS,
    "biometric attendance CLMS",
    "contractor payroll",
    "Form V Form XIII",
    "multi-site contractor management",
    "turnstiles India",
    "visitor management system",
    "canteen management system",
  ],
});

export default function PayrollSolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/contract-labour-management" pageTitle={PAGE_TITLE} pageDescription={PAGE_DESCRIPTION} />
      <FAQPageJsonLd items={clmsFaqItems} />
      {children}
    </>
  );
}
