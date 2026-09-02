import type { FAQItem } from "@/app/components/FAQPageJsonLd";

/**
 * Single source of truth for /contract-labour-management FAQ — shared by layout.tsx (JSON-LD schema)
 * and page.tsx (visible accordion). Edit here; both surfaces update automatically.
 */
export const clmsFaqItems: FAQItem[] = [
  {
    question: "What is a Contract Labour Management System (CLMS)?",
    answer:
      "A Contract Labour Management System (CLMS) is software that automates the full lifecycle of contract labour: onboarding, gate compliance, biometric attendance, PF/ESI/LWF statutory deductions, payroll processing for manufacturing plants, and contractor governance.",
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
      "Finance teams spend 80–120 hours per month manually matching contractor invoices to gate attendance and shift logs instead of closing books. Iddion RegX reconciles invoices against verified headcount and hours automatically, catching leakage before it reaches the finance close.",
  },
  {
    question: "How does InOps handle PF and ESI reconciliation for contract labour?",
    answer:
      "Spreadsheet-driven statutory checks miss deltas until filing deadlines, and errors compound across branches. Iddion RegX automates PF, ESI, and LWF deduction calculations per worker, generates challan-ready reports, and flags reconciliation gaps in real time — eliminating end-of-month scrambles.",
  },
  {
    question: "Can Contract Labour Management System (CLMS) manage contractors across multiple factory sites?",
    answer:
      "Yes. Iddion RegX supports multi-site deployments where biometrics, contractor records, and compliance data from each plant are unified in a single dashboard. HR heads and compliance teams get site-level and aggregate visibility without manual stitching across systems.",
  },
  {
    question: "How does CLMS help with CLRA compliance?",
    answer:
      "Iddion RegX automates CLRA compliance by maintaining digital Form V and Form XIII registers, tracking each contractor's licence expiry and headcount limits per establishment, alerting on the 9-day continuous attendance threshold that creates permanent employment risk, and generating audit-ready statutory reports. Every gate event is a compliance record — not just an attendance log. See our CLRA compliance software module for the full register and licence capabilities.",
  },
  {
    question: "Can CLMS integrate with biometric attendance devices?",
    answer:
      "Yes. Iddion RegX integrates with ZKTeco face and fingerprint terminals, AI-based CCTV attendance, QR code readers, and card swipe systems. All hardware feeds into the same attendance engine — per-worker, per-contractor, per-site. Mixed hardware deployments across multiple plant gates are supported without additional configuration.",
  },
  {
    question: "What is the 9-day continuous attendance rule under CLRA?",
    answer:
      "Under the Contract Labour (Regulation & Abolition) Act and corresponding state rules, a contract worker who works for 9 or more consecutive days without a weekly off may be entitled to a compensatory rest day — and in some states may acquire employment rights that complicate the principal-employer relationship. Iddion RegX tracks continuous attendance per worker per site and alerts HR to schedule the mandatory off before the threshold is crossed.",
  },
  {
    question: "How does Contract Labour Management System (CLMS) prevent OT cost leakage?",
    answer:
      "Iddion RegX calculates overtime from biometric punch-out times against registered shift end times. Any OT above the configured threshold requires digital supervisor approval before it becomes payable. Contractor invoices are reconciled line-by-line against the approved OT record — discrepancies are flagged before payment. This closes the three types of OT leakage: unauthorised OT, ghost OT, and unclaimed legitimate OT.",
  },
  {
    question: "What is contract labour attendance software?",
    answer:
      "Contract labour attendance software captures and records attendance specifically for contract workers — tracking gate entry and exit per contractor, shift and site, and feeding that data into payroll, statutory registers and contractor invoice reconciliation. Unlike general attendance tools, it enforces contractor-specific rules: CLRA headcount caps, 9-day continuous attendance thresholds, and shift eligibility per work order.",
  },
  {
    question: "What is a contract labour attendance system?",
    answer:
      "A contract labour attendance system is the combination of biometric hardware at the gate and software that assigns each punch to a worker, contractor and shift — and turns that record into a compliance input rather than just a headcount. In Iddion RegX, every gate event writes to Form XIII, updates deployed headcount, and triggers any configured compliance check simultaneously.",
  },
  {
    question: "What is contract workmen management?",
    answer:
      "Contract workmen management covers the full lifecycle of workers engaged through contractors at a principal employer's site: onboarding and verification, gate access and compliance, daily attendance, wage computation, statutory deductions, and offboarding — all governed under the Contract Labour (Regulation & Abolition) Act and its state rules. The principal employer carries compliance liability for every contractor's workmen on their premises.",
  },
  {
    question: "What is a casual labour management system?",
    answer:
      "A casual labour management system manages daily-wage or temporary workers who may not have fixed contracts or permanent assignments — common in seasonal manufacturing, construction, and logistics. It handles day-by-day attendance, variable wage computation, and basic statutory compliance for workers who may work intermittently across different contractors or work orders. Iddion RegX manages both regular contract workers and casual daily-wage workforces on the same platform.",
  },
  {
    question: "What is an e-contract labour management system?",
    answer:
      "An e-contract labour management system is a digital platform for managing contract labour — replacing paper registers, physical gate passes, and manual invoice matching with electronic workflows. Under the Code on Social Security 2020 and CLRA rules, many registrations, returns and challans are now expected digitally. An e-CLMS produces the electronic records that satisfy both internal audit and statutory inspection requirements.",
  },
  {
    question: "What is a contract manpower management system?",
    answer:
      "A contract manpower management system tracks the supply, deployment and compliance of contract workers across one or more sites — covering contractor onboarding and licence management, worker verification and gate access, attendance and payroll, and statutory compliance under CLRA and the Minimum Wages Act. It is the operational layer between a principal employer and their contractor ecosystem.",
  },
];
