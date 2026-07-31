import type { FAQItem } from "@/app/components/FAQPageJsonLd";

/**
 * Single source of truth for /services/background-verification FAQ.
 * Shared by layout.tsx (JSON-LD schema) and page.tsx (visible accordion).
 * All answers are plain strings so JSON-LD serialises correctly.
 */
export const bgvFaqItems: FAQItem[] = [
  {
    question: "What is background verification for contract workers, and who is this service for?",
    answer:
      "Background verification confirms a worker's identity, criminal record, address, and employment history before deployment to a site. This service is for two buyers: plants verifying incoming contract workers without deploying a platform, and manpower contractors verifying their own bench before bidding. Per-check pricing, bulk upload, no software licence required.",
  },
  {
    question: "What checks can we order, and can we choose which ones?",
    answer:
      "Checks are selected per worker category rather than applied as a fixed package: identity (Aadhaar-based offline verification with consent, PAN, UAN), criminal and court records at current and permanent addresses, address verification (digital or physical), employment history, education and trade certificates, and police verification coordination on the premium tier. A housekeeping worker and a hot-work fitter entering a defence site don't need the same set, and you pay for what the role requires.",
  },
  {
    question: "How is it priced?",
    answer:
      "Per check, with volume rates for bulk batches and package pricing for contractor bench verification. No platform licence and no minimum commitment on the per-check tier; the defence and PSU premium tier is priced on consultation given physical and police verification components.",
  },
  {
    question: "How long does a single verification take?",
    answer:
      "Digital identity and record checks typically return within 48 hours, including for bulk batches. Physical address verification and police verification coordination follow their own timelines, measured in days to weeks depending on jurisdiction. Turnaround is defined per tier.",
  },
  {
    question: "Can you verify a few hundred workers at once before a shutdown?",
    answer:
      "Yes — bulk intake is the normal case, not the exception. Worker details are uploaded in batch, digital checks run in parallel, and cleared workers are released as results return rather than holding the whole batch for the slowest check. This is the difference between verification built for hiring and verification built for industrial mobilisation.",
  },
  {
    question: "We're a manpower contractor — can we verify our own workers before a client asks?",
    answer:
      "Yes, and it's the strongest use of the service. Verify your bench once, present a verified roster in every bid, and deploy without per-client verification delays. Re-attestation replaces re-verification when your workers move between InOps-network sites.",
  },
  {
    question: "Does verification have to be repeated at every new site?",
    answer:
      "No. Because verification attaches to the worker's biometric identity rather than a paper file, a worker verified through InOps carries that verification across sites and contractors in the network — the receiving site sees status, date, and scope, and pays for re-attestation rather than a fresh check. Sensitive sites can still mandate periodic re-verification.",
  },
  {
    question: "Do you conduct police verification checks?",
    answer:
      "Police verification coordination is available for sites that mandate it — typically defence, PSU, and high-security environments — as part of the premium tier. Timelines depend on jurisdiction and local police processes.",
  },
  {
    question: "Do you verify workers across multiple states?",
    answer:
      "Yes. Checks run against both current and permanent addresses across states, which matters for migrant industrial workforces whose records sit in different jurisdictions from where they work.",
  },
  {
    question: "What happens if a worker fails a check?",
    answer:
      "The report records the finding with its source; the deployment decision remains yours. Where InOps CLMS is deployed, a worker without clearance can be blocked at the gate automatically, and the block persists across contractors — so a flagged worker cannot re-enter by being re-submitted under a different vendor.",
  },
  {
    question: "How accurate are the results, and what are the limits?",
    answer:
      "Reports reflect results as reported by source records — government databases, court records, previous employers, and field verification — at the time of the check. Verification supports, and does not replace, the employer's deployment decision. Where records are incomplete or unavailable, the report states that rather than returning a false clear.",
  },
  {
    question: "Is the process compliant with Indian labour law and data protection?",
    answer:
      "Verification runs on digital consent captured at intake in the worker's language, before any check is initiated. Reports are access-controlled, retention is policy-configurable, and handling aligns with DPDP Act obligations. Verification supports your statutory due-diligence obligations rather than replacing them.",
  },
  {
    question: "How do we get started, and what do you need from us?",
    answer:
      "A worker list with the checks required per category, submitted in bulk or through the portal. Most plants run their first batch within a week of contracting — there's no implementation project, because there's no platform to deploy.",
  },
  {
    question: "Do we need to buy the CLMS platform?",
    answer:
      "No. This is a standalone service. If you later deploy Iddion RegX, your verified workers carry over with their verification history intact — and verification becomes a built-in step via the background verification module.",
  },
];
