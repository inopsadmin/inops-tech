import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Contract Labour Management | Payroll, PF/ESI & Attendance";
const PAGE_DESCRIPTION =
  "Automate contract labour payroll, PF/ESI compliance, and biometric attendance for Indian manufacturers — fewer errors, faster cycles, audit-ready reporting.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/clms",
  extraKeywords: [
    "contract labour management software India",
    "CLMS software",
    "contract labour management system India",
    "CLRA compliance software",
    "contractor compliance software India",
    "contractor attendance tracking software India",
    "Form V Form XIII automation software India",
    "PF ESI auto-deduction contractor attendance software",
    "minimum wage compliance tracking contract labour",
    "biometric attendance CLMS integration",
    "9 day continuous attendance rule India",
    "ghost OT fraud detection manufacturing",
    // Tier 4 — InOps-exclusive, zero competitor coverage
    "CLMS for defence contractors India",
    "contract labour management HAL DRDO",
    "biometric attendance 163 sites manufacturing",
    "ghost overtime detection biometric",
    "OT misuse detection manufacturing India",
    "ZKTeco WDMS integration CLMS",
  ],
});

const FAQ_ITEMS = [
  {
    question: "What is a Contract Labour Management System (CLMS)?",
    answer:
      "A Contract Labour Management System (CLMS) is software that automates the full lifecycle of contract labour: onboarding, gate compliance, biometric attendance, PF/ESI/LWF statutory deductions, payroll processing, and contractor governance for manufacturing plants and industrial facilities.",
  },
  {
    question: "How does ghost worker fraud drain contractor spend?",
    answer:
      "Buddy punching and proxy clock-ins hide real headcount so clean attendance data never reaches payroll. Industry estimates put the drain at approximately 3–5% of total contractor spend. InOps CLMS eliminates this through biometric verification and face recognition at the gate.",
  },
  {
    question: "What is the financial risk of CLRA compliance violations in India?",
    answer:
      "OT, wage, and incident gaps in contract labour records surface during audits and disputes after the fact. Each violation can cost ₹50,000–₹1,00,000 in penalties under the Contract Labour (Regulation & Abolition) Act. Automated compliance tracking prevents gaps before filing deadlines.",
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
    question: "Can InOps CLMS manage contractors across multiple factory sites?",
    answer:
      "Yes. InOps supports multi-site deployments where biometrics, contractor records, and compliance data from each plant are unified in a single dashboard. HR heads and compliance teams get site-level and aggregate visibility without manual stitching across systems.",
  },
  {
    question: "How does CLMS help with CLRA compliance?",
    answer:
      "InOps CLMS automates CLRA compliance by maintaining digital Form V and Form XIII registers, tracking each contractor's licence expiry and headcount limits per establishment, alerting on the 9-day continuous attendance threshold that creates permanent employment risk, and generating audit-ready statutory reports. Every gate event is a compliance record — not just an attendance log.",
  },
  {
    question: "Can CLMS integrate with biometric attendance devices?",
    answer:
      "Yes. InOps CLMS integrates with ZKTeco face and fingerprint terminals, AI-based CCTV attendance, QR code readers, and card swipe systems. All hardware feeds into the same CLMS attendance engine — per-worker, per-contractor, per-site. Mixed hardware deployments across multiple plant gates are supported without additional configuration.",
  },
  {
    question: "What is the 9-day continuous attendance rule under CLRA?",
    answer:
      "Under the Contract Labour (Regulation & Abolition) Act and corresponding state rules, a contract worker who works for 9 or more consecutive days without a weekly off may be entitled to a compensatory rest day — and in some circumstances may acquire employment rights that complicate the contractor relationship. InOps CLMS tracks continuous attendance per worker and alerts HR at day 7, giving two days to schedule the mandatory off before the threshold is crossed.",
  },
  {
    question: "How does InOps CLMS prevent OT cost leakage?",
    answer:
      "InOps CLMS calculates overtime from biometric punch-out times against registered shift end times. Any OT above the configured threshold requires digital supervisor approval before it becomes payable. Contractor invoices are reconciled line-by-line against the CLMS-approved OT record — discrepancies are flagged before payment. This closes the three types of OT leakage: unauthorised OT, ghost OT, and unclaimed legitimate OT.",
  },
];

export default function PayrollSolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/clms" pageTitle={PAGE_TITLE} pageDescription={PAGE_DESCRIPTION} />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      {children}
    </>
  );
}
