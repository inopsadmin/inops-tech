import type { FAQItem } from "@/app/components/FAQPageJsonLd";

/**
 * Single source of truth for /hris FAQ — shared by layout.tsx (JSON-LD schema)
 * and page.tsx (visible accordion). Edit here; both surfaces update automatically.
 */
export const hrisFaqItems: FAQItem[] = [
  {
    question: "What is an HR Information System (HRIS)?",
    answer:
      "An HRIS is the system of record for your workforce: employee data, onboarding, attendance and leave, payroll processing, claims, and compliance documents in one platform. InOps HRIS is built for Indian industrial employers — statutory-aware payroll, biometric attendance integration, and audit-ready records out of the box.",
  },
  {
    question: "What is the difference between HRIS and CLMS?",
    answer:
      "An HRIS manages your own employees; a CLMS governs contract workers supplied by third-party contractors — licences, gate compliance, CLRA registers, and contractor invoice verification, which an HRIS is not designed to handle. Most large plants run both. InOps is one of the few platforms where HRIS and CLMS share a single attendance and identity engine, so permanent and contract workforces are visible together without duplicate hardware or data stitching.",
  },
  {
    question: "Does InOps HRIS handle Indian statutory compliance?",
    answer:
      "Yes — PF, ESI, PT, LWF, and TDS computations are built into payroll processing, with challan-ready outputs and audit trails. Statutory logic is maintained for Indian central and state requirements rather than adapted from a global product.",
  },
  {
    question: "Can it integrate with our biometric devices and existing systems?",
    answer:
      "Yes. The same device estate that serves attendance — face terminals, fingerprint, CCTV-based capture — feeds HRIS time and attendance directly, and integrations cover common ERP and enterprise stacks. One hardware investment serves both HRIS and CLMS.",
  },
  {
    question: "Is it suitable for multi-site operations?",
    answer:
      "Yes — employee records, attendance, leave, and payroll consolidate across plants and offices with site-level and aggregate reporting, matching the multi-site architecture InOps runs for manufacturing clients across 163+ sites.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Typical HRIS implementations run 4–8 weeks depending on workforce size, data migration, and payroll complexity — faster when deployed alongside an existing InOps attendance estate.",
  },
];
