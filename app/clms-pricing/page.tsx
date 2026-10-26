import type { Metadata } from "next";
import ClmsPricingPage from "./ClmsPricingPage";

export const metadata: Metadata = {
  title: "CLMS Software Pricing in India | Iddion RegX by InOps",
  description:
    "How Iddion RegX contract labour management software (CLMS) is priced in India: the cost factors, deployment and integration considerations, hardware costs, and how to request a quote from InOps.",
  alternates: { canonical: "https://inops.tech/clms-pricing" },
};

export default function Page() {
  return <ClmsPricingPage />;
}
