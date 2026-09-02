import ProductSchemaInjector from "@/app/components/ProductSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...routeMetadata({
    title: "Access Control Accessories | Cards, Exit Buttons & Add-ons",
    description:
      "Access control accessories ,  wireless exit button, exit push button, and add-ons for request-to-exit and integrated security systems.",
    path: "/accessories",
    extraKeywords: ["exit button access control", "RTE button India", "proximity card accessories"],
  }),
  robots: { index: false, follow: false },
};

export default function AccessoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductSchemaInjector path="/accessories" />
      {children}
    </>
  );
}
