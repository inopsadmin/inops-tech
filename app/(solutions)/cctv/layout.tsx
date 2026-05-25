import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "CCTV",
  description:
    "Biometric time and attendance for accurate shifts, overtime, and payroll-ready data. Trusted devices and software for factories, IT parks, and distributed sites.",
  path: "/cctv",
  extraKeywords: ["attendance software India", "biometric T&A", "shift tracking enterprise"],
});

export default function TimeAndAttendanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/cctv" />
      {children}
    </>
  );
}
