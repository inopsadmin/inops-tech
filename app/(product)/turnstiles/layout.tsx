import ProductSchemaInjector from "@/app/components/ProductSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Turnstiles & Flap Barriers with Biometric Access Control | InOps",
  description:
    "Tripod turnstiles and flap barriers with biometric integration for factory gates — stainless steel, smooth throughput, and CLMS-connected access control for Indian industrial sites.",
  path: "/turnstiles",
  extraKeywords: [
    "turnstile access control",
    "flap barrier factory",
    "industrial turnstile India",
    "biometric turnstile integration",
  ],
});

export default function TurnstilesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductSchemaInjector path="/turnstiles" />
      {children}
    </>
  );
}
