import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
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

const FAQ_ITEMS = [
  {
    question: "What is an HRIS for contract labour in India?",
    answer:
      "An HRIS (HR Information System) for contract labour manages the full employee lifecycle for both permanent and contract workers — digital onboarding, gate compliance, biometric attendance, leave management, shift scheduling, and statutory document tracking — in a single platform designed for Indian manufacturing environments.",
  },
  {
    question: "How does InOps HRIS handle contractor onboarding compliance?",
    answer:
      "InOps HRIS verifies contractor identities, runs background checks, and digitizes Form V, Form XIII, and other CLRA documents before a worker's first gate entry. Every contractor is audit-ready before day one — no paper files, no missing records.",
  },
  {
    question: "What statutory compliance does InOps HRIS cover?",
    answer:
      "InOps HRIS automates compliance for PF (Provident Fund), ESI (Employees' State Insurance), LWF (Labour Welfare Fund), and minimum wage regulations under the Contract Labour (Regulation & Abolition) Act, 1970. It generates challan reports, Form 16 data, and return filings for each statutory period.",
  },
  {
    question: "Can InOps HRIS manage multi-contractor and multi-site workforce?",
    answer:
      "Yes. InOps HRIS supports multiple contractors across multiple factory sites with consolidated reporting. HR teams can track headcount, attendance, and compliance status per contractor, per site, or across the enterprise from a single dashboard.",
  },
  {
    question: "What is Form V under CLRA and who issues it?",
    answer:
      "Form V is the Certificate of Commencement of Contract Work issued by the principal employer to the contractor before work begins. It records the nature of work, estimated worker count, commencement date, and the contractor's CLRA licence number. InOps HRIS generates Form V digitally at contractor onboarding and gates gate access until it is acknowledged — preventing the most common compliance failure: deployment before documentation.",
  },
  {
    question: "How does InOps HRIS reduce contractor attrition and absenteeism?",
    answer:
      "InOps HRIS gives contract workers self-service access to their attendance records, payslips, and leave status via mobile app. Transparency in attendance data reduces disputes. When combined with InOps EWA (earned wage access), workers can draw earned wages before payday — directly reducing financial stress-driven attrition, which is the leading cause of contract worker turnover in Indian manufacturing.",
  },
];

export default function LabourManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/hris" pageTitle={PAGE_TITLE} pageDescription={PAGE_DESCRIPTION} />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      {children}
    </>
  );
}
