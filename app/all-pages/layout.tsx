import type { Metadata } from "next";
import { routeMetadata } from "@/app/lib/seoMetadata";

export const metadata: Metadata = {
  ...routeMetadata({
    title: "All pages (internal) | InOps Solutions",
    description: "Internal index of InOps website routes for navigation. Not intended for search indexing.",
    path: "/all-pages",
    extraKeywords: [],
  }),
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function AllPagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
