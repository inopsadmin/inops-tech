import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Contract Labour Management for Manufacturing | InOps";
const PAGE_DESCRIPTION =
  "Digitise your manufacturing contractor ecosystem. InOps delivers Contract Labour Management, gate compliance, and payroll automation for industrial manufacturing units.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/industry/manufacturing",
  extraKeywords: [
    "contract labour management software manufacturing",
    "manufacturing contractor compliance India",
    "CLMS for manufacturing plants",
    "biometric attendance manufacturing",
    "contractor onboarding manufacturing plant",
    "PF ESI compliance manufacturing",
    "gate access control manufacturing",
    "multi-plant contractor management",
    "statutory compliance manufacturing India",
    "Contract Labour Management manufacturing",
    "InOps manufacturing",
    "contract labour CLRA manufacturing",
    "payroll automation manufacturing plant",
    "contractor billing validation manufacturing",
  ],
});

const FAQ_ITEMS = [
  {
    question: "How does InOps handle multi-vendor contractor management?",
    answer:
      "InOps provides a unified dashboard to manage multiple contractors across sites, with consolidated attendance, compliance, and billing data per vendor.",
  },
  {
    question: "Can the platform integrate with our existing ERP system?",
    answer:
      "Yes. InOps integrates with SAP, Oracle, and custom ERP systems via REST APIs, syncing workforce data in real time.",
  },
  {
    question: "How long does contractor onboarding take on the platform?",
    answer:
      "With OCR-powered document capture and automated BGV, a contractor can be onboarded and gate-cleared in under 30 minutes.",
  },
  {
    question: "Does the system support multi-plant or multi-site deployments?",
    answer:
      "Yes. InOps is built for enterprise-scale deployments across multiple plants, with site-level and consolidated reporting.",
  },
  {
    question: "What compliance standards does the platform support?",
    answer:
      "The platform supports PF, ESI, LWF, minimum wage, CLRA, and Factories Act compliance with automated report generation.",
  },
];

export default function ManufacturingIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/industry/manufacturing"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
      />
      {/* <FAQPageJsonLd items={FAQ_ITEMS} /> */}
      {children}
    </>
  );
}
