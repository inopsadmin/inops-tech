import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Time & Attendance | InOps Solutions",
  description:
    "Biometric time and attendance for accurate shifts, overtime, and payroll-ready data. InOps devices and software for factories, IT parks, and distributed sites.",
  path: "/solutions/time-and-attendance",
  extraKeywords: ["attendance software India", "biometric T&A", "shift tracking enterprise"],
});

export default function TimeAndAttendanceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
