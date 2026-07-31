import type { FAQItem } from "@/app/components/FAQPageJsonLd";

export const industrialManpowerSupplyFaqItems: FAQItem[] = [
  {
    question: "What is industrial manpower supply?",
    answer:
      "Industrial manpower supply is the sourcing, verification, and deployment of contract workers for manufacturing, warehousing, and industrial facilities — covering blue-collar roles across shift-based operations. Unlike general staffing, industrial manpower supply handles Aadhaar-based verification, CLRA licence compliance, PF/ESI registration, and biometric enrollment before workers reach the gate. The result is a workforce that is compliant on day one rather than assembled before an inspection.",
  },
  {
    question: "How fast can a new site be staffed?",
    answer:
      "Typical industrial manpower supply timelines are significantly faster than traditional sourcing because background verification, digital onboarding, and biometric enrollment run in parallel with worker sourcing rather than sequentially after it. Workers arrive on Day One already cleared and enrolled — there is no hold period at the gate while paperwork catches up.",
  },
  {
    question: "What does 'compliance-ready workforce' mean in practice?",
    answer:
      "Every worker is background-verified before deployment, digitally onboarded with identity and document capture, and biometrically enrolled against your access and attendance infrastructure before they report on site. Contractor licence headcounts, PF/ESI registration, and wage documentation are in place at the point of deployment — not assembled afterwards in response to an inspection.",
  },
  {
    question: "Does this replace our existing staffing vendor?",
    answer:
      "It can run alongside or replace existing vendors depending on your operating model. Many sites run InOps as a parallel supply channel for compliance-critical roles and surge capacity, then consolidate once the difference in documentation quality and gate-level traceability is visible in audit cycles.",
  },
  {
    question: "Is biometric enrollment done on our devices?",
    answer:
      "Yes. Enrollment is configured against your existing access control and attendance infrastructure — we do not require you to replace or supplement your device fleet. Where sites run InOps biometric AMC or our attendance platform, enrollment data carries over with verified identity records intact.",
  },
  {
    question: "What industries is this suited for?",
    answer:
      "Manufacturing, logistics, warehousing, and engineering operations with high-volume contract labour deployment needs — particularly sites under CLRA principal employer obligations, facilities facing regular labour department or CVC-style inspections, and plants operating with large contractor headcounts across multiple shifts.",
  },
  {
    question: "How is this different from a standard manpower agency?",
    answer:
      "Standard agencies supply workers; we supply workers with a compliance trail. The difference surfaces at inspection time: contractor licences current, headcount within cap, registers maintained live, biometric records reconciled against actual workforce. The compliance infrastructure is built into deployment, not bolted on after a gap is found.",
  },
  {
    question: "What documentation does the principal employer receive?",
    answer:
      "For each deployed worker: verified identity records, background check report, digital onboarding documentation, and biometric enrollment confirmation. At the contractor level: valid CLRA licence, PF/ESI registration, and wage documentation. The package is structured to satisfy principal employer due-diligence obligations under CLRA.",
  },
  {
    question: "Can you handle surge staffing — short-term or seasonal peaks?",
    answer:
      "Yes. The pre-screening and digital onboarding pipeline is designed to handle surge volumes, with verification running concurrently rather than creating a queue. Sites with recurring seasonal peaks benefit from maintaining a pre-cleared reserve pool that can be activated quickly without restarting the compliance process.",
  },
  {
    question: "What happens when a worker leaves or is replaced?",
    answer:
      "Offboarding is tracked: biometric de-enrollment is logged, attendance and wage records are closed, and the contractor headcount is updated against their licence cap. This prevents the stale-credential problem where departed workers remain enrolled in access devices and can continue generating attendance records.",
  },
  {
    question: "Do you cover multi-site deployments?",
    answer:
      "Yes. Multi-site deployments run with a consolidated compliance view — each site's headcount, licence status, and documentation tracked separately but reportable together. Sites in different states with different CLRA state-rule requirements are handled with state-specific documentation mapped accordingly.",
  },
  {
    question: "How is wage compliance handled?",
    answer:
      "Minimum wage rates applicable to the site's state and category are built into wage calculations at deployment. Wage records, payment evidence, and statutory deductions are maintained in a format that satisfies contractor register requirements under CLRA Form XIII, reducing principal employer exposure for contractor wage defaults.",
  },
  {
    question: "What if we already have contract workers on site who are not in this system?",
    answer:
      "Existing workforces can be brought into compliance incrementally — identity verification, document capture, and biometric reconciliation run against the current headcount to establish a clean baseline. The gap analysis that comes out of that exercise typically surfaces the same issues a labour department inspection would find, while there is still time to close them.",
  },
];
