import type { FAQItem } from "@/app/components/FAQPageJsonLd";

/**
 * Single source of truth for /contract-labour-management FAQ — shared by layout.tsx (JSON-LD schema)
 * and page.tsx (visible accordion). Edit here; both surfaces update automatically.
 */
export const clmsFaqItems: FAQItem[] = [
  {
    question: "What is a Contract Labour Management System (CLMS)?",
    answer:
      "A Contract Labour Management System (CLMS) is software that automates the full lifecycle of contract labour: onboarding, gate compliance, biometric attendance, PF/ESI/LWF statutory deductions, payroll processing for manufacturing plants and industrial facilities.",
  },
  {
    question: "How does ghost worker fraud drain contractor spend?",
    answer:
      "Buddy punching and proxy clock-ins hide real headcount so clean attendance data never reaches payroll. Industry estimates put the drain at approximately 3–5% of total contractor spend. Iddion RegX Contract Labour Management System (CLMS) eliminates this through biometric verification and face recognition at the gate.",
  },
  {
    question: "What is the financial risk of CLRA compliance violations in India?",
    answer:
      "Untracked OT, wage gaps, and missing statutory records surface during CLRA inspections and labour disputes. Each violation can attract penalties under the Contract Labour (Regulation & Abolition) Act, with repeat findings compounding across establishments. Automated register and return management prevents gaps before filing deadlines.",
  },
  {
    question: "Why do contractor invoices have a 25–30% discrepancy rate?",
    answer:
      "Finance teams spend 80–120 hours per month manually matching contractor invoices to gate attendance and shift logs instead of closing books. InOps reconciles invoices against verified headcount and hours automatically, catching leakage before it reaches the finance close.",
  },
  {
    question: "How does InOps handle PF and ESI reconciliation for contract labour?",
    answer:
      "Spreadsheet-driven statutory checks miss deltas until filing deadlines, and errors compound across branches. InOps automates PF, ESI, and LWF deduction calculations per worker, generates challan-ready reports, and flags reconciliation gaps in real time — eliminating end-of-month scrambles.",
  },
  {
    question: "Can  Contract Labour Management System (CLMS) manage contractors across multiple factory sites?",
    answer:
      "Yes. Iddion RegX supports multi-site deployments where biometrics, contractor records, and compliance data from each plant are unified in a single dashboard. HR heads and compliance teams get site-level and aggregate visibility without manual stitching across systems.",
  },
  {
    question: "How does CLMS help with CLRA compliance?",
    answer:
      "Iddion RegX Contract Labour Management System (CLMS) automates CLRA compliance by maintaining digital Form V and Form XIII registers, tracking each contractor's licence expiry and headcount limits per establishment, alerting on the 9-day continuous attendance threshold that creates permanent employment risk, and generating audit-ready statutory reports. Every gate event is a compliance record — not just an attendance log. See our CLRA compliance software module (/contract-labour-management/iddion-regx-modules/compliance-report) for the full register and licence capabilities.",
  },
  {
    question: "Can CLMS integrate with biometric attendance devices?",
    answer:
      "Yes.Our Contract Labour Management System (CLMS) integrates with ZKTeco face and fingerprint terminals, AI-based CCTV attendance, QR code readers, and card swipe systems. All hardware feeds into the same CLMS attendance engine — per-worker, per-contractor, per-site. Mixed hardware deployments across multiple plant gates are supported without additional configuration.",
  },
  {
    question: "What is the 9-day continuous attendance rule under CLRA?",
    answer:
      "Under the Contract Labour (Regulation & Abolition) Act and corresponding state rules, a contract worker who works for 9 or more consecutive days without a weekly off may be entitled to a compensatory rest day — and in some states may acquire employment rights that complicate the principal-employer relationship. Our Contract Labour Management System (CLMS) tracks continuous attendance per worker per site and alerts HR to schedule the mandatory off before the threshold is crossed.",
  },
  {
    question: "How does Contract Labour Management System (CLMS) prevent OT cost leakage?",
    answer:
      "Iddion RegX Contract Labour Management System (CLMS) calculates overtime from biometric punch-out times against registered shift end times. Any OT above the configured threshold requires digital supervisor approval before it becomes payable. Contractor invoices are reconciled line-by-line against the CLMS-approved OT record — discrepancies are flagged before payment. This closes the three types of OT leakage: unauthorised OT, ghost OT, and unclaimed legitimate OT.",
  },
];
