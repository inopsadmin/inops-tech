import ProductSchemaInjector from "@/app/components/ProductSchemaInjector";
import SecondaryPageJsonLd from "@/app/components/SecondaryPageJsonLd";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE =
  "Biometric Devices for Attendance & Access Control | ZKTeco, eSSL, Realtime — InOps";
const PAGE_DESCRIPTION =
  "Biometric devices for industrial attendance and access control — face terminals, fingerprint readers, RFID and turnstiles from ZKTeco, eSSL and Realtime. Supplied, installed, integrated and maintained across India since 2014.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/biometric-devices",
  extraKeywords: [
    "biometric device",
    "biometric for attendance",
    "biometric attendance machine",
    "biometric machine",
    "fingerprint attendance machine",
    "face attendance machine",
    "biometric device for attendance",
    "biometric attendance management system",
    "biometric companies India",
    "face recognition attendance system",
    "ZKTeco biometric",
    "eSSL biometric",
    "Realtime biometric",
    "biometric AMC",
  ],
});

const FAQ_ITEMS = [
  {
    question: "What is a biometric device and how does it work for attendance?",
    answer:
      "A biometric device identifies a person by a physical characteristic — face, fingerprint or iris — rather than a card or PIN. For attendance it captures the worker's identity at entry and exit and records the timestamp, so hours are tied to a verified person rather than a transferable credential.",
  },
  {
    question: "Which is better for factories — fingerprint or face recognition?",
    answer:
      "Face recognition, in most industrial settings. Fingerprint readers fail on damaged, dry, oily or dirty fingers, which describes most manual work — and every failure becomes a manual attendance entry and a payroll dispute. Fingerprint remains reasonable for offices and low-throughput indoor points.",
  },
  {
    question: "How much does a biometric attendance machine cost?",
    answer:
      "Price depends on modality, throughput, environment rating and volume. Fingerprint readers sit at the entry level; face terminals cost more per unit but reduce disputes and queue time. We quote against a site survey rather than a list, because gate conditions change which device is appropriate.",
  },
  {
    question: "Which biometric device brands do you supply?",
    answer:
      "ZKTeco, eSSL and Realtime, plus turnstiles and controllers. We also maintain and integrate mixed-brand estates that were supplied by others.",
  },
  {
    question: "Can biometric devices work with our existing attendance or HR software?",
    answer:
      "Yes — devices integrate with the InOps attendance engine, and data can be exported to existing HR and payroll systems.",
  },
  {
    question: "How many devices does one site need?",
    answer:
      "Determined by peak throughput, not headcount. A gate handling 800 workers in a 20-minute shift change needs multiple lanes or camera-based capture; the same headcount arriving over two hours may need one. The site survey sizes this.",
  },
  {
    question: "Do biometric devices work without internet?",
    answer:
      "Yes — devices store punches locally and sync when connectivity returns, which matters at remote plants and project sites.",
  },
  {
    question: "What about worker consent and biometric data protection?",
    answer:
      "Consent is captured digitally at enrolment in the worker's language before any template is created. Templates are access-controlled with configurable retention, aligned with DPDP Act obligations.",
  },
  {
    question: "Who maintains the devices after installation?",
    answer:
      "Devices are covered under biometric AMC — preventive maintenance, remote monitoring, firmware updates and on-site engineer support across every site under one contract, including devices originally supplied by other vendors.",
  },
];

export default function BiometricDevicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SecondaryPageJsonLd
        path="/biometric-devices"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      />
      <ProductSchemaInjector path="/biometric-devices" />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      {children}
    </>
  );
}
