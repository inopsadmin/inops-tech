import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Contact | InOps Solutions ,  Koramangala, Bengaluru",
  description:
    "Contact us: No.18, 4th 'C' Cross, 1st Main Rd, Koramangala Industrial Layout, 5th Block, Bengaluru, Karnataka 560095. Email contact@inops.tech, phone +91 80886 02602. Request a demo or sales enquiry.",
  path: "/contact",
  extraKeywords: [
    "workforce solutions contact Bengaluru",
    "Koramangala office workforce software",
    "Koramangala workforce software",
    "CLMS demo India",
  ],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
