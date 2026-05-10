import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Canteen Management System | InOps Solutions",
  description:
    "Digital canteen and subsidy control — biometric meal counting, payroll-linked subsidies, inventory and waste tracking, contractor vs employee pricing. Headquartered in Bengaluru.",
  path: "/solutions/canteen-management",
  extraKeywords: ["canteen management India", "meal subsidy software", "corporate cafeteria system"],
});

export default function CanteenManagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
