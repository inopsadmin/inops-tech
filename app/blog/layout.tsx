import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Resources — Contract Labour Compliance, CLRA & Workforce Tech | InOps",
  description:
    "Insights on contract labour compliance, CLRA, biometric attendance, CLMS, payroll automation, and HR technology — written from our Bengaluru team.",
  path: "/blog",
  extraKeywords: [
    "contract labour compliance blog",
    "CLRA resources India",
    "CLMS articles",
    "workforce compliance guides",
  ],
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd path="/blog" />
      {children}
    </>
  );
}
