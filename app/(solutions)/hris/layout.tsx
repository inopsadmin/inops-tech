import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { hrisFaqItems } from "@/app/lib/hrisFaqItems";
import type { Metadata } from "next";

const PAGE_TITLE = "HR Software for Indian Manufacturing | HRMS with Payroll & Attendance — InOps";
const PAGE_DESCRIPTION =
  "HR software built for Indian manufacturing: biometric attendance, statutory payroll (PF, ESI, PT, LWF), leave, claims and HRIS records — cloud-based HRMS for permanent workforces across multi-site plants.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/hris",
  extraKeywords: [
    "hr software",
    "hrms software",
    "human resource software",
    "cloud based hr software",
    "hr software india",
    "hris hr software",
    "attendance management software",
    "hr management software",
    "hrms for manufacturing",
    "HRIS software India",
    "HR information system",
    "statutory payroll software",
    "HRIS biometric attendance",
    "HRIS vs CLMS",
  ],
});

export default function LabourManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/hris" pageTitle={PAGE_TITLE} pageDescription={PAGE_DESCRIPTION} />
      <FAQPageJsonLd items={hrisFaqItems} />
      {children}
    </>
  );
}
