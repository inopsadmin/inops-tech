// app/lib/hrisFaqItems.ts

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
  {
    question: "Can HRIS and CLMS run on the same biometric devices?",
    answer:
      "Yes — that's the architecture. The same face terminals, fingerprint readers, and CCTV-based capture that clock permanent staff also record contract workers. One hardware estate, one enrollment per person, two workforce systems drawing from it. Plants running both avoid buying and maintaining duplicate device fleets.",
  },
  {
    question: "Does it handle leave, claims, and reimbursements?",
    answer:
      "Yes. Leave policies, accruals, and approval workflows are configured per category and site; claims and travel reimbursements run through the same approval chain and settle in payroll. Employees raise and track both through self-service.",
  },
  {
    question: "Is there an employee self-service app?",
    answer:
      "Yes. Employees view payslips, apply for leave, submit claims, check attendance, and update records from mobile — which removes most of the routine queries that otherwise land on the HR desk.",
  },
  {
    question: "How does TDS and tax computation work?",
    answer:
      "TDS is computed per employee against declared investments and applicable slabs, with a tax planner for employees to model declarations. Statutory rate changes are maintained centrally so computations stay current without manual reconfiguration.",
  },
  {
    question: "Can we migrate existing employee data from our current system?",
    answer:
      "Yes. Migration of employee master data, historical attendance, leave balances, and payroll history is part of implementation, with validation before go-live. Data-migration volume is usually what determines whether implementation lands at four weeks or eight.",
  },
  {
    question: "Does it manage exits and full-and-final settlement?",
    answer:
      "Yes — exit workflows cover clearance across departments, notice-period and leave-encashment computation, final settlement, and statutory documentation, with the audit trail retained after the employee leaves.",
  },
  {
    question: "What reporting do HR and management get?",
    answer:
      "Standard statutory reports and challan-ready outputs, plus headcount, attendance, overtime, cost and attrition views by site, department, and category — with exports for management review. Multi-site plants get per-plant and consolidated views from the same data.",
  },
  {
    question: "Does it support shift-based and multi-location workforces?",
    answer:
      "Yes. Shift patterns, rosters, week-offs, and site-specific policies are configured per location and applied automatically, which is the difference between an HRIS built for manufacturing and one built for offices.",
  },
  {
    question: "What does implementation involve on our side?",
    answer:
      "A typical rollout is: data migration, payroll parallel run, policy configuration, and device integration where attendance hardware is involved. Your team's main input is validating policy rules and reconciling the parallel run — most of the rest sits with the implementation team.",
  },
  {
    question: "Is our employee data secure and where is it hosted?",
    answer:
      "Access is role-based with audit logging on record changes, and data handling aligns with DPDP Act obligations. On-premise deployment is available where data-residency requirements demand it.",
  },
  {
    question: "Can employees access self-service without a laptop or smartphone?",
    answer:
      "Yes. Employee self-service is available through a web portal, the mobile app, and a shop-floor kiosk. The kiosk matters most in manufacturing, where the majority of the workforce has neither a company laptop nor a company email address — payslips, leave balances and attendance history become self-serviceable rather than an HR queue. See self-service kiosks.",
  },
];