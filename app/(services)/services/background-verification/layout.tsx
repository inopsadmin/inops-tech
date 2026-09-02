/**
 * /services/background-verification
 *
 * Primary: background verification software — 500/mo, Low, ₹34–238
 * Intent note: volume is for *software*, page sells a *service*.
 * Resolution: frame InOps RegX as background verification software with managed
 * deployment — accurate (RegX is a platform, not a bureau), and closes the intent gap.
 *
 * Secondary: background check software (500) · verification solutions (500) · vendor verification (50)
 */

import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { bgvFaqItems } from "@/app/lib/bgvFaqItems";
import type { Metadata } from "next";

const PAGE_TITLE = "Background Verification Software for Contract Workers | InOps RegX";
const PAGE_DESCRIPTION =
  "InOps RegX is background verification software for Indian manufacturers — instant digital BGV for contract workers, employees, visitors, and vendors, integrated with gate access and CLMS. Deployed and managed by InOps.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/services/background-verification",
  extraKeywords: [
    "background verification software",
    "background check software",
    "verification solutions",
    "vendor verification",
    "background verification services India",
    "employee background check India",
    "contractor BGV solution",
    "digital background verification platform",
    "identity verification India",
    "pre-employment screening India",
    "gate access BGV integration",
    "industrial background verification",
  ],
});

export default function BGVLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector
        path="/services/background-verification"
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
        faqItems={bgvFaqItems}
      />
      {children}
    </>
  );
}
