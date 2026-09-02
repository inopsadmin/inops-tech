import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { clmsFaqItems } from "@/app/lib/clmsFaqItems";
import { KEYWORDS_CLMS } from "@/app/lib/site";
import type { Metadata } from "next";

const PAGE_TITLE = "Labour Management System Software for Indian Manufacturers | Contract Labour Management — InOps";
const PAGE_DESCRIPTION =
  "Labour management system software for contract workforces — gate compliance, biometric attendance, PF/ESI statutory deductions and payroll for Indian manufacturers. Audit-ready, multi-site, built for the Contract Labour (R&A) Act.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/contract-labour-management",
  extraKeywords: [
    ...KEYWORDS_CLMS,
    "labour management system software",
    "labour management software",
    "contract labour attendance software",
    "contract labour attendance system",
    "contract workmen management",
    "casual labour management system",
    "e-contract labour management system",
    "contract manpower management system",
    "contract employee management system",
    "biometric attendance CLMS",
    "contractor payroll",
    "Form V Form XIII",
    "multi-site contractor management",
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
