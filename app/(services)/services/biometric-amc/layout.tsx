import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { biometricAmcFaqItems } from "@/app/lib/biometricAmcFaqItems";
import type { Metadata } from "next";

const PAGE_TITLE = "Biometric AMC Services India | Attendance & Access Control Device AMC — InOps";
const PAGE_DESCRIPTION =
  "SLA-backed biometric AMC services and lifecycle management covering access control AMC, attendance machine AMC and RFID reader AMC across distributed plants, warehouses and campuses.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/biometric-amc",
  extraKeywords: [
    "biometric AMC services India",
    "biometric device maintenance",
    "access control AMC",
    "attendance machine AMC",
    "RFID reader AMC",
    "biometric service provider India",
    "device health monitoring",
    "biometric infrastructure maintenance",
    "InOps AMC",
    "preventive biometric maintenance",
    "biometric lifecycle management",
    "on-site engineer support",
  ],
});

export default function BiometricLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/biometric-amc"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
        faqItems={biometricAmcFaqItems}
      />
      {children}
    </>
  );
}
