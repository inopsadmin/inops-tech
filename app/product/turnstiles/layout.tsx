import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Turnstiles | InOps Solutions",
  description:
    "Tripod turnstiles and lane hardware for access control — stainless steel, smooth operation, compact footprint for offices, plants, and campuses in India.",
  path: "/product/turnstiles",
  extraKeywords: ["tripod turnstile India", "entrance turnstile", "access control gate"],
});

export default function TurnstilesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
