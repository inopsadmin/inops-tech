import SecondaryPageJsonLd from "@/app/components/SecondaryPageJsonLd";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE =
  "ZKTeco Biometric Devices in India | Face, Fingerprint & Access Control — InOps";
const PAGE_DESCRIPTION =
  "ZKTeco biometric devices supplied, installed, integrated and maintained across India — face recognition terminals, fingerprint readers, turnstiles and access controllers for industrial sites. AMC and spares support included.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/brands/zkteco",
  extraKeywords: [
    "zkteco biometrics",
    "zkteco India",
    "zkteco face recognition",
    "zkteco attendance machine",
    "zkteco access control",
    "zkteco fingerprint",
    "zkteco turnstile",
    "zkteco WDMS",
    "zkteco dealer India",
    "zkteco AMC",
    "zkteco eSSL Realtime mixed estate",
  ],
});

const FAQ_ITEMS = [
  {
    question: "What is ZKTeco used for?",
    answer:
      "ZKTeco devices are used for time and attendance capture and physical access control — face recognition and fingerprint terminals at gates and entry points, plus turnstiles and controllers for door and lane control.",
  },
  {
    question: "Which ZKTeco device is best for a factory gate?",
    answer:
      "Face terminals for high-throughput and dusty or oily environments; fingerprint terminals for indoor and lower-volume points. Outdoor gates need environment-rated models. Selection follows a site survey.",
  },
  {
    question: "Do you supply ZKTeco devices across India?",
    answer:
      "Yes — supply, installation and maintenance across Indian industrial sites, with engineer coverage for multi-site estates.",
  },
  {
    question: "Can ZKTeco devices integrate with attendance and payroll software?",
    answer:
      "Yes. InOps integrates ZKTeco devices with its own attendance and contract labour platform, so punches become attendance, payroll and statutory records automatically rather than sitting in device logs.",
  },
  {
    question: "Do you provide AMC for ZKTeco devices?",
    answer:
      "Yes — including devices supplied by other vendors. See biometric AMC for full scope.",
  },
  {
    question: "Are spares available in India?",
    answer:
      "Yes, spares are held and supported locally rather than imported per incident, minimising downtime at your site.",
  },
  {
    question: "Can we mix ZKTeco with our existing eSSL or Realtime devices?",
    answer:
      "Yes. Mixed-brand estates run on one attendance engine under one worker identity, which is the normal situation for plants that added hardware over several years.",
  },
  {
    question: "How is ZKTeco firmware managed?",
    answer:
      "Firmware versions are tracked across the fleet and updated on a managed schedule under AMC — ageing firmware is a common cause of both device failure and security exposure, and it is rarely anyone's internal responsibility.",
  },
];

export default function ZKTecoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SecondaryPageJsonLd
        path="/brands/zkteco"
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      {children}
    </>
  );
}
