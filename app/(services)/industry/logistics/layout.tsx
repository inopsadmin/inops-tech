import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Workforce Management for Logistics & Warehousing | InOps RegX";
const PAGE_DESCRIPTION =
  "Centralised workforce governance for logistics and warehousing. InOps RegX delivers multi-location attendance, zone access control, and contractor compliance for 24/7 operations.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/industry/logistics",
  extraKeywords: [
    "logistics workforce management software",
    "warehouse attendance management system",
    "multi-location workforce visibility",
    "contractor compliance logistics India",
    "biometric attendance warehouse",
    "night shift governance software",
    "zone access control warehouse",
    "3PL workforce management platform",
    "seasonal workforce onboarding software",
    "attendance fraud prevention logistics",
    "warehouse contractor billing automation",
    "WMS TMS workforce integration",
  ],
});

const FAQ_ITEMS = [
  {
    question: "How does InOps RegX handle workforce management across multiple warehouse locations?",
    answer:
      "InOps RegX provides a centralised command dashboard that aggregates real-time attendance, compliance, and access data from all your warehouse sites into a single view, with site-level drill-down capability.",
  },
  {
    question: "Can the platform manage night shift and 24/7 operations?",
    answer:
      "Yes. The system is designed for continuous operations — automated shift handovers, muster reports, and anomaly alerts run without supervisor intervention across all shifts.",
  },
  {
    question: "How does the system prevent attendance fraud in high-volume warehouses?",
    answer:
      "Individual biometric authentication (fingerprint or face) at every clock-in point eliminates buddy punching entirely. All entries are time-stamped, geo-tagged, and stored immutably.",
  },
  {
    question: "Does InOps RegX integrate with WMS and TMS platforms?",
    answer:
      "Yes. The platform connects to major WMS and TMS systems via REST APIs, enabling automated workforce data sync with your supply chain operations.",
  },
  {
    question: "How does the system handle seasonal workforce spikes during peak periods?",
    answer:
      "InOps RegX supports rapid bulk onboarding — hundreds of temp workers can be enrolled, verified, and zone-cleared in a single day, matching the speed of your peak hiring cycles.",
  },
];

export default function LogisticsIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/industry/logistics"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
      />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      {children}
    </>
  );
}
