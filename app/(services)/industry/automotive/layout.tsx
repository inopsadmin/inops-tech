import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE =
  "Contract Labour Management for Automotive Manufacturing | InOps RegX";
const PAGE_DESCRIPTION =
  "Synchronise your contractor workforce with JIT production. InOps RegX delivers shift compliance, vendor governance, and biometric access control for automotive assembly plants.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/industry/automotive",
  extraKeywords: [
    "automotive contractor workforce management",
    "JIT workforce synchronisation software",
    "automotive assembly Contract Labour Management",
    "shift compliance automotive plant",
    "biometric access control automotive",
    "vendor SLA management automotive",
    "contractor lifecycle management automotive",
  ],
});

const FAQ_ITEMS = [
  {
    question:
      "How does InOps RegX support Just-In-Time production models?",
    answer:
      "InOps RegX syncs contractor availability with your PPS in real time, ensuring shift-ready workers are cleared and on the floor before production starts — eliminating JIT delays caused by workforce gaps.",
  },
  {
    question:
      "Can the system manage Tier-2 and Tier-3 vendor ecosystems?",
    answer:
      "Yes. InOps RegX provides a unified visibility layer across your entire contractor hierarchy — from primary contractors to sub-vendors — with consolidated compliance and performance dashboards.",
  },
  {
    question:
      "How does the platform handle zone-specific access in an automotive plant?",
    answer:
      "The system supports granular, biometric-enforced access rules per production zone, allowing different permissions for body shop, paint shop, assembly, and restricted areas.",
  },
  {
    question: "What ERP systems does InOps RegX integrate with?",
    answer:
      "InOps RegX is certified with SAP and Oracle and integrates via standard REST APIs, syncing attendance, payroll, and compliance data into your enterprise systems.",
  },
  {
    question: "How does the platform reduce overtime leakage?",
    answer:
      "Automated shift boundaries and real-time alerts flag unauthorized overtime the moment it begins — allowing supervisors to intervene before it affects payroll.",
  },
];

export default function AutomotiveIndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/industry/automotive"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
      />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      {children}
    </>
  );
}
