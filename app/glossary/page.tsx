import type { Metadata } from "next";
import GlossaryPage from "./GlossaryPage";

export const metadata: Metadata = {
  title: "Contract Labour & Workforce Compliance Glossary (India) | InOps",
  description:
    "Plain-English definitions of Indian contract labour laws, forms, filings and systems: OSH Code, CLRA, ECR, muster roll, gate pass, CLMS and more.",
  alternates: { canonical: "https://inops.tech/glossary" },
};

export default function Page() {
  return <GlossaryPage />;
}
