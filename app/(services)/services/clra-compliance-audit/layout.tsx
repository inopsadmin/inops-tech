import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { clraComplianceAuditFaqItems } from "@/app/lib/clraComplianceAuditFaqItems";
import type { Metadata } from "next";

const PAGE_TITLE = "CLRA Compliance Audit | InOps RegX";
const PAGE_DESCRIPTION =
  "CLRA compliance audit and labour compliance audit built for contract labour compliance and principal employer compliance, with a scored, actionable path to labour law compliance.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/clra-compliance-audit",
  extraKeywords: [
    "CLRA compliance audit India",
    "contract labour compliance",
    "principal employer compliance",
    "labour law compliance India",
    "CLRA audit readiness",
    "contractor documentation review",
    "labour compliance audit",
    "compliance gap analysis",
    "InOps RegX compliance",
    "factory labour compliance",
    "contractor compliance audit",
    "CLRA statutory compliance",
  ],
});

export default function CLRAComplianceAuditLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/clra-compliance-audit"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
        faqItems={clraComplianceAuditFaqItems}
      />
      {children}
    </>
  );
}
