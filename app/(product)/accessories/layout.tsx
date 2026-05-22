import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Accessories | InOps Solutions",
  description:
    "Access control accessories ,  wireless exit button, exit push button, and add-ons for request-to-exit and integrated security systems.",
  path: "/accessories",
  extraKeywords: ["exit button access control", "RTE button India", "proximity card accessories"],
});

export default function AccessoriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
