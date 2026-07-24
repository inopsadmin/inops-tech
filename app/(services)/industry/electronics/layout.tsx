import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Contract Labour Management for Electronics Manufacturing | InOps RegX";
const PAGE_DESCRIPTION =
  "Precision workforce governance for EMS and electronics manufacturing. InOps RegX manages cleanroom access, contractor compliance, and high-volume seasonal hiring at scale.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/industry/electronics",
  extraKeywords: [
    "contract labour management electronics manufacturing",
    "EMS workforce governance software",
    "cleanroom access control contract workers",
    "electronics manufacturing contractor compliance India",
    "seasonal hiring EMS facility",
    "biometric cleanroom access enforcement",
    "InOps RegX EMS",
    "vendor compliance score electronics plant",
    "rapid contractor onboarding electronics",
    "CLRA compliance electronics manufacturing",
  ],
});

const FAQ_ITEMS = [
  {
    question: "How does InOps RegX handle cleanroom access enforcement?",
    answer:
      "The platform integrates biometric readers at cleanroom entry points. Access is only granted if the worker has completed the required gowning certification and has a valid, active clearance for that specific zone.",
  },
  {
    question: "Can the system manage the high-volume seasonal hiring typical in EMS?",
    answer:
      "Yes. InOps RegX is built for rapid-scale onboarding — processing hundreds of contractors per day with automated BGV and zone clearance issuance.",
  },
  {
    question: "How does the platform reduce skill mismatch risk?",
    answer:
      "Each contractor profile includes a verified skills matrix. The system enforces that only workers with the required certifications can be assigned to or access specific production zones.",
  },
  {
    question: "Does InOps RegX integrate with MES systems?",
    answer:
      "Yes. The platform provides REST API connectors for major MES platforms, syncing real-time attendance and productivity data without manual intervention.",
  },
  {
    question: "How quickly can a new EMS facility go live on InOps RegX?",
    answer:
      "A standard facility deployment takes 2–3 weeks, including hardware setup, system configuration, contractor data migration, and team training.",
  },
];

export default function ElectronicsIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/industry/electronics"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
      />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      {children}
    </>
  );
}
