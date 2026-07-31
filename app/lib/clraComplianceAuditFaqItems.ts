import type { FAQItem } from "@/app/components/FAQPageJsonLd";

export const clraComplianceAuditFaqItems: FAQItem[] = [
  {
    question: "What is a CLRA compliance audit?",
    answer:
      "A CLRA compliance audit reviews a principal employer's contract labour operations against the Contract Labour (Regulation & Abolition) Act and applicable state rules: contractor licences and headcount caps, statutory registers, wage and attendance records, statutory remittance evidence, and welfare obligations. It produces a scored gap report with prioritised remediation, not just a list of findings.",
  },
  {
    question: "What does the audit actually cover?",
    answer:
      "Contractor licence validity and cap headroom per establishment; Form V and Form XIII register completeness; wage records and minimum-wage compliance; attendance and OT records; PF/ESI remittance evidence from contractors; welfare facility obligations; and whether gate-level controls can actually enforce what your policy claims. Gaps are ranked by exposure, not listed alphabetically.",
  },
  {
    question: "Who is responsible when a contractor doesn't comply — us or them?",
    answer:
      "Both, but the exposure lands differently. Under CLRA the principal employer carries responsibility for ensuring contractors meet obligations and can be liable for defaults such as unpaid wages or statutory dues. That asymmetry is why the audit maps every obligation to an owner — it's usually the single most useful output for a plant that has never separated the two.",
  },
  {
    question: "How long does an assessment take?",
    answer:
      "Site assessment and documentation review typically complete in days rather than weeks, with duration scaling by site count, contractor count, and how much documentation is retrievable. Multi-site engagements run site-by-site with a consolidated scorecard at the end.",
  },
  {
    question: "Do you help fix the gaps you find?",
    answer:
      "Yes. The report prioritises remediation by risk, and where gaps are structural — registers reconstructed monthly instead of maintained live, licences tracked in spreadsheets, no gate-level enforcement — remediation may mean process or system change rather than paperwork. Those recommendations map to CLRA compliance software capabilities where automation is the fix.",
  },
  {
    question: "Is this useful ahead of a labour department inspection?",
    answer:
      "That's the common trigger. The audit surfaces what an inspector would find, in the same order they'd find it, while you still have time to close it. For PSU and defence sites facing CVC or CAG-style scrutiny, the certified report also documents that due diligence was performed.",
  },
  {
    question: "Will you tell us we need to buy your software?",
    answer:
      "Not necessarily. Many findings are process and documentation issues fixable without any system. The audit's job is to tell you where you stand — where automation is genuinely the fix, the report says so and explains why; where it isn't, it doesn't.",
  },
  {
    question: "What's the difference between this and our internal compliance review?",
    answer:
      "Internal reviews check whether documents exist. This checks whether the documents are current, whether they reconcile against actual attendance and wage data, and whether the controls they describe are enforceable at the gate. Most failures we find aren't missing paperwork — they're timing failures, where records are reconstructed after the fact rather than maintained as events happen.",
  },
  {
    question: "Do you audit our contractors directly?",
    answer:
      "The audit reviews contractor documentation and compliance evidence as held and required by you as principal employer. Direct contractor engagement — collecting missing licences, remittance proofs, or registers — can be included in scope where you want the gaps closed rather than just identified.",
  },
  {
    question: "Is the audit report legal advice?",
    answer:
      "No. The audit assesses compliance posture against statutory requirements and industry practice, and is intended to support your legal and compliance teams' decisions rather than replace them. Specific legal positions should be confirmed with counsel.",
  },
  {
    question: "How often should a compliance audit run?",
    answer:
      "Annually as a baseline, plus after any material change — a new contractor, a site expansion, a shutdown with surge workforce, or a change in state rules. Sites running automated registers need it less often, because the underlying records stay current by design rather than by effort.",
  },
];
