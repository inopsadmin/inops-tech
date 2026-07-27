import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Background Verification Services | InOps → Background Verification Services for Contract Workers India | InOps ";
const PAGE_DESCRIPTION =
  "Verify every worker before they cross the gate. InOps RegX delivers instant BGV for employees, contractors, visitors, and vendors — deployed in days, not months.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/background-verification",
  extraKeywords: [
    "background verification services India",
    "employee background check India",
    "contractor BGV solution",
    "digital background verification platform",
    "identity verification India",
    "pre-employment screening India",
    "vendor background verification",
    "gate access BGV integration",
    "InOps RegX BGV",
    "workforce background check",
    "industrial background verification",
    "visitor verification system",
    "background screening automation",
  ],
});

export default function BGVLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/background-verification"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
      />
      {children}
    </>
  );
}
