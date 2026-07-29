import ProductSchemaInjector from "@/app/components/ProductSchemaInjector";
import SecondaryPageJsonLd from "@/app/components/SecondaryPageJsonLd";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Face Recognition Attendance System for Factories | Terminals & Readers — InOps";
const PAGE_DESCRIPTION =
  "Industrial face recognition attendance terminals for factory gates: liveness detection, CLMS integration, and multi-site biometric attendance for Indian manufacturers.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/face-based-access-control",
  extraKeywords: [
    "face recognition attendance",
    "face reader factory",
    "biometric face terminal India",
    "ZKTeco face reader",
    "industrial face recognition",
  ],
});

const FAQ_ITEMS = [
  {
    question: "What is a biometric face recognition terminal for factory access control?",
    answer:
      "A biometric face recognition terminal is an industrial-grade device that identifies workers by their facial geometry to grant or deny gate entry. InOps face readers support liveness detection to prevent photo spoofing and are engineered to operate accurately in high-ambient-light factory environments.",
  },
  {
    question: "How does biometric attendance integrate with contract labour payroll?",
    answer:
      "InOps face terminals push attendance punches in real time to the InOps CLMS platform. Each punch is tagged to a contractor, site, and shift — the data flows directly into payroll calculation, eliminating manual timesheets and preventing buddy punching.",
  },
  {
    question: "What types of access control hardware does InOps supply?",
    answer:
      "InOps supplies face recognition terminals, fingerprint readers, card/QR readers, tripod turnstiles, flap barriers, full-height turnstiles, and CCTV-integrated AI attendance cameras. All hardware integrates with the InOps CLMS attendance module.",
  },
  {
    question: "Do InOps face readers work in outdoor or high-light factory environments?",
    answer:
      "Yes. InOps biometric terminals are rated for industrial environments — they handle direct sunlight, high ambient light at factory gates, and wide temperature ranges. Liveness detection and infrared sensing ensure accurate reads regardless of lighting conditions.",
  },
  {
    question: "How does face recognition attendance prevent contractor overbilling?",
    answer:
      "Each face recognition event is tagged to a specific enrolled worker, their contractor agency, and their shift. When the contractor submits their invoice, InOps CLMS reconciles every line item against the biometric gate record. A worker billed but not present has no biometric event — the discrepancy is flagged before payment. Plants report invoice accuracy rising to near 100% from the first billing cycle on InOps.",
  },
  {
    question: "What happens if a biometric terminal goes offline at a factory gate?",
    answer:
      "InOps terminals store attendance events locally during network outages and sync automatically on reconnection. Offline buffer events are processed without creating duplicates or attendance gaps. For multi-gate plants, offline events from one gate do not affect attendance recording at other gates on the same deployment.",
  },
];

export default function BiometricAccessControlLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SecondaryPageJsonLd path="/face-based-access-control" title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProductSchemaInjector path="/face-based-access-control" />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      {children}
    </>
  );
}
