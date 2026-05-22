import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Enterprise Solution | InOps Solutions",
  description:
    "Connected operations and intelligent control for enterprise assets, logistics, and warehouse performance with live analytics.",
  path: "/enterprise-solution",
  extraKeywords: ["enterprise operations platform", "asset and logistics visibility", "intelligent control solution"],
});

export default function EnterpriseSolutionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/enterprise-solution" />
      {children}
    </>
  );
}
