import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Visitor Management System | InOps Solutions",
  description:
    "Visitor management with pre-registration, badges, host notifications, blacklist checks, and audit trails — secure reception and gate operations for enterprises.",
  path: "/solutions/visitor-management",
  extraKeywords: ["VMS India", "visitor check-in software", "gate visitor tracking"],
});

export default function VisitorManagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
