import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE =
  "Contract Labour Management for Pharmaceutical Manufacturing | InOps";
const PAGE_DESCRIPTION =
  "Compliant workforce Contract Labour Management for pharmaceutical manufacturing. InOps automates contractor validation, cleanroom access, and audit readiness for regulated environments.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/industry/pharma",
  extraKeywords: [
    "contract labour management pharmaceutical",
    "pharmaceutical workforce compliance software",
    "cleanroom access control software",
    "FDA audit readiness contractor workforce",
    "WHO GMP contractor compliance India",
    "21 CFR Part 11 Contract Labour Management",
    "EU GMP Annex 11 contractor management",
    "Schedule M pharmaceutical compliance software",
    "pharma contractor onboarding compliance",
    "biometric cleanroom access control pharma",
    "contract worker certification tracking",
    "pharmaceutical manufacturing contractor compliance",
    "PMDA audit readiness contract labour",
    "sterile manufacturing zone access control",
  ],
});

const FAQ_ITEMS = [
  {
    question:
      "How does InOps ensure compliance for contract workers?",
    answer:
      "The platform digitises and verifies each contractor's training records, medical clearances, and SOPs. Access is only granted when all required certifications are current and validated — eliminating the risk of non-compliant personnel entering regulated areas.",
  },
  {
    question: "How does the system support FDA and WHO audit readiness?",
    answer:
      "InOps maintains immutable, timestamped records of every worker access, compliance action, and document submission. Complete audit trails can be generated in minutes for any inspection window.",
  },
  {
    question:
      "Can the platform handle controlled substance manufacturing environments?",
    answer:
      "Yes. The system supports Schedule H, Schedule X, and narcotic manufacturing environments with dual-authentication access, complete traceability, and automatic regulatory reporting.",
  },
  {
    question: "Does InOps integrate with QMS and ERP systems?",
    answer:
      "Yes. The platform integrates with SAP, Oracle, and leading QMS platforms via standard APIs, synchronising worker qualification data and compliance events in real time.",
  },
  {
    question:
      "How does the platform manage training expiry for contractor workers?",
    answer:
      "Automated expiry alerts are triggered when a contractor's training, medical clearance, or SOP acknowledgment approaches renewal. Access rights are automatically suspended until renewed — no manual tracking required.",
  },
];

export default function PharmaIndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/industry/pharma"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
      />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      {children}
    </>
  );
}
