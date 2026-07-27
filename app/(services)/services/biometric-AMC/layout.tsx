import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Biometric AMC Services | InOps";
const PAGE_DESCRIPTION =
  "SLA-backed biometric AMC services and lifecycle management covering access control AMC, attendance machine AMC and RFID reader AMC across distributed plants, warehouses and campuses.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/biometric",
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
        path="/services/biometric"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
      />
      {children}
    </>
  );
}
