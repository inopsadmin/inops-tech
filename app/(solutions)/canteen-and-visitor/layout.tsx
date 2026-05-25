import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Canteen and Visitor visitor pass",
  description:
    "Digital canteen and subsidy control ,  biometric meal counting, payroll-linked subsidies, inventory and waste tracking, contractor vs employee pricing. Headquartered in Bengaluru.",
  path: "/canteen-and-visitor",
  extraKeywords: ["canteen management India", "meal subsidy software", "corporate cafeteria system"],
});

export default function CanteenManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/canteen-and-visitor" />
      {children}
    </>
  );
}
