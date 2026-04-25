import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Mobile App Solution | InOps Solutions",
  description:
    "InOps mobile app for attendance, leave, shift visibility, and employee self-service with real-time sync across HR and operations teams.",
  path: "/solutions/mobile-app",
  extraKeywords: ["employee self service app", "mobile attendance app", "workforce app"],
});

export default function MobileAppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
