import type { FAQItem } from "@/app/components/FAQPageJsonLd";

/**
 * Single source of truth for /services/biometric-database-audit FAQ.
 * Shared by layout.tsx (JSON-LD schema) and page.tsx (visible accordion).
 * All answers are plain strings so JSON-LD serialises correctly.
 */
export const biometricDatabaseAuditFaqItems: FAQItem[] = [
  {
    question: "What is a biometric database audit?",
    answer:
      "A biometric database audit is a full scan of every enrollment record across your device fleet to find what shouldn't be there: workers who left but were never de-enrolled, the same person enrolled multiple times across devices or sites, and fake or inactive records still capable of marking attendance. It ends with a certified report of what was found, what was removed, and what remains valid.",
  },
  {
    question: "What counts as a ghost enrollment?",
    answer:
      "Any enrolled identity that no longer corresponds to an active, authorised worker — a departed employee still in the device, a contractor's worker who moved on months ago, a test or duplicate record created during setup, or an enrollment with no matching HR or contractor record. Each one is a live credential that can still open a gate and mark attendance.",
  },
  {
    question: "How common is this? Isn't our database clean?",
    answer:
      "Almost no multi-site fleet is clean, because enrollment is a daily operational task and de-enrollment is nobody's job. Devices accumulate records for years across shift changes, contractor switches, and site expansions. InOps fleet data across industrial deployments shows enrolled record counts running several times higher than active workforce headcount.",
  },
  {
    question: "How does a ghost enrollment cause payroll leakage?",
    answer:
      "A stale credential that can still be presented at a gate produces attendance records, and attendance records produce contractor invoices and wages. The leakage is invisible in aggregate because the headcount looks plausible — it only surfaces when enrollment records are reconciled against actual active workers, which is what the audit does.",
  },
  {
    question: "Does the audit disrupt daily attendance?",
    answer:
      "No. Extraction and cross-matching run against exported enrollment data, not live devices, so gates keep operating normally. Remediation — de-enrollment of flagged records — is scheduled with your team, typically between shifts, and every removal is logged and reversible if a record is later revalidated.",
  },
  {
    question: "What happens if a valid worker gets flagged?",
    answer:
      "Flagged records are revalidated before removal, not deleted automatically. Where a worker is genuinely active but their record is incomplete or duplicated, the audit consolidates rather than removes — the goal is a correct database, not a smaller one.",
  },
  {
    question: "How long does an audit take?",
    answer:
      "Extraction and analysis typically complete within days rather than months, with remediation scheduled around your operations. Duration scales with device count, site spread, and how much revalidation the flagged records need.",
  },
  {
    question: "What do we get at the end?",
    answer:
      "A certified audit report: total records scanned, duplicates found and consolidated, ghost enrollments identified and removed, records revalidated, and the resulting clean-state count per site and device. It's built to satisfy internal audit and, for PSU and defence sites, external scrutiny of who holds access.",
  },
  {
    question: "How often should this run?",
    answer:
      "Annually as a baseline, and after any event that churns the workforce — a shutdown, a contractor change, a site expansion, or a device fleet migration. Sites running biometric AMC get enrollment hygiene monitored continuously as part of fleet health, which reduces how much any single audit finds.",
  },
  {
    question: "Do we need to be an InOps customer?",
    answer:
      "No. The audit runs on any biometric fleet regardless of vendor or which software manages it. Many engagements start here precisely because the plant doesn't yet know what condition its fleet is in. If you later deploy contract labour management, your cleaned database carries over with verified records intact.",
  },
  {
    question: "What about data protection during the audit?",
    answer:
      "Enrollment data is handled under a defined scope agreement, processed for the audit purpose only, and returned or destroyed per your policy on completion. Handling aligns with DPDP Act obligations.",
  },
];
