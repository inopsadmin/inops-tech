import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Labour Management Software | InOps Solutions",
  description:
    "Contract labour management system (CLMS) — onboarding, ID issuance, gate compliance, and contractor governance for Indian industrial sites.",
  path: "/solutions/labour-management",
  extraKeywords: ["CLMS India", "contract labour compliance", "contractor workforce software"],
});

export default function LabourManagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
