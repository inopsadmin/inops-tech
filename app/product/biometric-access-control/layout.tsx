import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Biometric Access Control | InOps Solutions",
  description:
    "Face reader, fingerprint reader, and card reader systems for enterprise access control. Secure gates, turnstiles, and critical zones with InOps biometrics — India.",
  path: "/product/biometric-access-control",
  extraKeywords: ["face recognition access control", "fingerprint reader India", "card reader attendance"],
});

export default function BiometricAccessControlLayout({ children }: { children: React.ReactNode }) {
  return children;
}
