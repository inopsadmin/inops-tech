import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import ContactPageJsonLd from "@/app/components/ContactPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Contact InOps | Book a Demo | Bengaluru",
  description:
    "Book a demo, talk to sales, or visit our Bengaluru office. Phone +91 80886 02602 · contact@inops.tech · Bommasandra Industrial Area.",
  path: "/contact",
  extraKeywords: [
    "InOps demo",
    "workforce software contact Bengaluru",
    "CLMS demo India",
  ],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ContactPageJsonLd />
      <BreadcrumbJsonLd path="/contact" />
      {children}
    </>
  );
}
