import type { Metadata } from "next";
import ResearchInsightsPage from "./ResearchInsightsPage";

export const metadata: Metadata = {
  title: "Contract Labour Compliance Research & Insights (India) | InOps",
  description:
    "InOps research and insights on contract labour compliance in Indian manufacturing, including the planned study Contract Labour Compliance Gaps in 50 Indian Plants.",
  alternates: { canonical: "https://inops.tech/research-insights" },
};

export default function Page() {
  return <ResearchInsightsPage />;
}
