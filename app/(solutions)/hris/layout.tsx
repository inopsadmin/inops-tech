import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { hrisFaqItems } from "@/app/lib/hrisFaqItems";
import type { Metadata } from "next";

const PAGE_TITLE = "HRIS Software for Manufacturing | Payroll, Attendance & Statutory Compliance — InOps";
const PAGE_DESCRIPTION =
  "HRIS software built for Indian manufacturers: employee records, biometric attendance, statutory payroll (PF, ESI, PT, LWF), leave and claims — one system for your permanent workforce, unified with contract labour data.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/hris",
  extraKeywords: [
    "HRIS software India",
    "HRIS for manufacturing",
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
