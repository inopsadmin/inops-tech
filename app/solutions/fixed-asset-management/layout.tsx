import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Fixed Asset Management | InOps Solutions",
  description:
    "Track, maintain, and audit fixed assets across locations — depreciation visibility, custody, and maintenance workflows with InOps FAM.",
  path: "/solutions/fixed-asset-management",
  extraKeywords: ["fixed asset tracking India", "asset register software", "FAM enterprise"],
});

export default function FixedAssetManagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
