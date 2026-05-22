import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Earned Wage Access (EWA) for Factory Workers | InOps Solutions",
  description:
    "Payroll-connected earned wage access (EWA) for industrial workforces: on-demand earned wages, attendance validation, and compliant controls.",
  path: "/ewa",
  extraKeywords: ["earned wage access", "EWA India", "salary advance factory workers", "financial wellness"],
});

export default function EwaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/ewa" />
      {children}
    </>
  );
}
