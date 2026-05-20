import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Contract Labour Management (CLMS) | InOps Solutions",
  description:
    "Contract labour management (CLMS) for Indian manufacturers: onboarding, gate compliance, biometric attendance, PF/ESI workflows, and contractor governance.",
  path: "/solutions/labourmanagement",
  extraKeywords: ["CLMS India", "contract labour compliance", "contractor workforce software"],
});

export default function LabourManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/solutions/labourmanagement" />
      {children}
    </>
  );
}
