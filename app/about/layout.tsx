import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "About Us | InOps Solutions",
  description:
    "About InOps Solutions — enterprise CLMS, workforce automation, and digital operations partnership. Headquartered in Koramangala, Bengaluru, Karnataka.",
  path: "/about",
  extraKeywords: ["about InOps", "InOps company Bengaluru", "workforce technology partner India"],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
