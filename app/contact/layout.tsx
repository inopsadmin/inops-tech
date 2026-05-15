import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = routeMetadata({
  title: "Contact | InOps Solutions ,  Bommasandra, Bengaluru",
  description:
    "Contact us: Second Floor, Sy. No.60/A, Bommasandra Industrial Area, Jigani Road, Bengaluru, Karnataka 560099. Email contact@inops.tech, phone +91 80886 02602. Request a demo or sales enquiry.",
  path: "/contact",
  extraKeywords: [
    "workforce solutions contact Bengaluru",
    "Bommasandra office workforce software",
    "Bommasandra workforce software",
    "CLMS demo India",
  ],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
