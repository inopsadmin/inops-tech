import ProductSchemaInjector from "@/app/components/ProductSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Biometric Access Control & Face Readers | InOps Solutions",
  description:
    "Biometric access control for enterprise: face and fingerprint readers, turnstiles, card readers, and attendance integration for Indian industrial sites.",
  path: "/product/biometric-access-control",
  extraKeywords: ["face recognition access control India", "turnstile biometric", "industrial access control"],
});

export default function BiometricAccessControlLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductSchemaInjector path="/product/biometric-access-control" />
      {children}
    </>
  );
}
