import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Blog | InOps Solutions",
  description:
    "Insights on biometric attendance, access control, CLMS, visitor management, payroll compliance, and HR technology—written from our Bengaluru team.",
  path: "/blog",
  extraKeywords: ["workforce management blog", "biometric attendance India", "CLMS articles"],
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
