import type { FAQItem } from "@/app/components/FAQPageJsonLd";

export const bgvServiceFaqItems: FAQItem[] = [
  {
    question: "How long does a single verification take?",
    answer:
      "Most checks complete within 48 hours; complex or multi-location checks may take slightly longer depending on record availability. Identity and court checks typically return fastest; address verification involving physical fieldwork takes the most time and is the part that extends timelines on rural or migrant-worker profiles.",
  },
  {
    question: "Do you conduct police verification checks?",
    answer:
      "Yes — police verification is included as part of our identity verification and pre-employment screening workflow, alongside criminal record screening, education verification, and address checks. Results are documented per worker with source and date, not returned as a single pass/fail flag.",
  },
  {
    question: "Is the process compliant with Indian labour law?",
    answer:
      "Verification workflows are structured to align with statutory contractor and principal-employer obligations, including Aadhaar-based offline verification with worker consent under DPDP Act requirements. Results are held under a defined data-handling scope and retained or destroyed per your policy.",
  },
  {
    question: "Do you verify workers across multiple states?",
    answer:
      "Yes — as an industrial background verification provider we run checks pan-India across identity, address, employment, and education records. Migrant workers from source states are a core use case, covering permanent and current addresses in different states in a single engagement.",
  },
  {
    question: "What checks are included in a standard package?",
    answer:
      "Aadhaar-based offline identity verification with consent, PAN and UAN validation, criminal and court record screening at current and permanent addresses, address verification, and employment history via EPFO records. Education or trade-certificate checks are included where the role requires them. Each result carries its source and date.",
  },
  {
    question: "What if a check returns an adverse finding?",
    answer:
      "The finding is reported with its source; the deployment decision remains yours. A worker flagged for a serious finding can be blocked across your sites, and because blocks attach to biometric identity rather than contractor relationship, the same worker cannot be resubmitted under a different agency.",
  },
  {
    question: "What happens when records are incomplete or unavailable?",
    answer:
      "The report says so rather than returning a false clear. We distinguish 'verified clear,' 'unable to verify,' and 'adverse finding' — treating the middle case as clean is how unverified workers reach the gate, and we do not do that.",
  },
  {
    question: "Does verification work for blue-collar and contract workers without formal employment histories?",
    answer:
      "Yes — that is the primary deployment case. Verification adapts to the documentation available: workers without formal employment records are checked against identity, court, and address databases, with UAN-based employment history run where it exists. A thin history is reported as thin, not as clear.",
  },
  {
    question: "Can bulk verifications be run for shutdown or surge hiring?",
    answer:
      "Yes. Bulk uploads with digital intake run verifications in parallel so results come back as a stream rather than a queue. Plants handling hundreds of contract workers for a shutdown turnaround are the standard case, not an exception.",
  },
  {
    question: "How is worker data protected during the process?",
    answer:
      "Consent is captured digitally before any check runs. Identity documents and results are handled under a defined scope agreement, processed for verification only, and returned or destroyed on completion per your policy. Handling aligns with DPDP Act obligations.",
  },
  {
    question: "Does verification expire and need to be redone?",
    answer:
      "Results reflect records as of the check date. Sensitive sites — defence, PSU, high-security — typically mandate periodic re-verification. If you are using Iddion RegX, re-verification schedules can be enforced at the gate: an expired check blocks entry the same way an expired medical clearance does.",
  },
  {
    question: "Can this integrate with a gate pass system?",
    answer:
      "Yes. When verification is run through the Iddion RegX platform, BGV status is a live gate rule — pending or expired means no entry, enforced at the barrier rather than tracked in a monthly report. Standalone verification delivers a report; platform-connected verification delivers enforcement.",
  },
];
