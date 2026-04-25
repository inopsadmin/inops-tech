import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "EWA (Earned Wage Access) | InOps Solutions",
  description:
    "Give employees instant access to earned wages with a compliant, payroll-connected EWA solution that improves retention and financial well-being.",
  path: "/solutions/ewa",
  extraKeywords: ["earned wage access", "ewa platform", "salary advance solution", "financial wellness"],
});

export default function EwaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
