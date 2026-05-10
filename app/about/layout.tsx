import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "About Us | InOps Solutions",
  description:
    "Enterprise CLMS, workforce automation, and digital operations partnership—headquartered in Koramangala, Bengaluru, Karnataka.",
  path: "/about",
  extraKeywords: ["workforce automation company Bengaluru", "enterprise CLMS India", "workforce technology partner India"],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
