import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Payroll Solutions | InOps Solutions",
  description:
    "Payroll and compliance workflows aligned with attendance and labour data ,  fewer errors, faster cycles, and audit-ready reporting.",
  path: "/solutions/payroll-solutions",
  extraKeywords: ["payroll software India", "statutory compliance payroll", "attendance payroll integration"],
});

export default function PayrollSolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/solutions/payroll-solutions" />
      {children}
    </>
  );
}
