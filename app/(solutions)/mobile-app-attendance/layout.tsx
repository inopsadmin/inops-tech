import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Mobile Attendance & Workforce App | Face Recognition on Mobile — InOps",
  description:
    "Mobile attendance with face recognition for contract workers: GPS-validated check-in, earned wage access, leave management, and self-service — no fixed biometric hardware needed.",
  path: "/mobile-app",
  extraKeywords: [
    "mobile attendance app for contract workers",
    "face recognition mobile attendance",
    "GPS attendance app India",
    "contractor self service app",
  ],
});

export default function MobileAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/mobile-app" />
      {children}
    </>
  );
}
