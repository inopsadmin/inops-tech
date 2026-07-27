import SolutionSchemaInjector from "@/app/components/SolutionSchemaInjector";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Camera-Based Attendance for Contract Workers | CCTV & AI Attendance with CLRA Compliance";
const PAGE_DESCRIPTION =
  "Camera and AI-based attendance for contract worker manufacturing sites — links face recognition and existing CCTV to CLRA compliance, OT verification, and contractor billing. Multi-site, biometric-integrated, audit-ready.";

export const metadata: Metadata = routeMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/cctv",
  extraKeywords: [
    // Owned — zero competition, high ICP relevance
    "camera based attendance contract workers manufacturing India",
    "face recognition attendance CLRA compliance",
    "AI attendance biometric integration CLMS",
    "camera attendance OT verification manufacturing",
    "existing CCTV attendance contract labour India",
    "face attendance contractor billing verification",
    "proxy attendance prevention contract workers India",
    "CCTV attendance CLRA compliance manufacturing",
    // Supporting
    "camera attendance system manufacturing India",
    "AI attendance multi-site manufacturing",
  ],
});

const FAQ_ITEMS = [
  {
    question: "What is camera-based attendance for contract workers in manufacturing?",
    answer:
      "Camera-based attendance uses face recognition via CCTV cameras or dedicated biometric terminals to record when contract workers enter and exit a manufacturing site. InOps links this attendance data to CLRA compliance records, contractor billing verification, and OT tracking — making it an audit-ready compliance record, not just a headcount log.",
  },
  {
    question: "How does camera attendance prevent proxy attendance for contract workers?",
    answer:
      "Proxy attendance (buddy punching) occurs when one worker clocks in on behalf of another. Camera-based face recognition with liveness detection prevents this by requiring the physical presence of the enrolled worker's face for each gate event. InOps CLMS flags any attempt to re-use an image or authenticate for a different enrolled worker.",
  },
  {
    question: "Can existing CCTV cameras be used for attendance tracking?",
    answer:
      "Yes. InOps CCTV-based attendance uses AI analytics on feeds from existing IP camera infrastructure to detect and identify workers as they enter a site. This allows plants to use their current camera investment for attendance without installing dedicated biometric terminals at every entry point.",
  },
  {
    question: "How does camera attendance connect to CLRA compliance?",
    answer:
      "Each camera attendance event in InOps CLMS is tagged to a specific contractor worker, their contractor agency, and their compliance status. The system tracks continuous attendance days (for the 9-day CLRA risk), minimum wage compliance per verified shift, and weekly off adherence — all from the camera attendance record.",
  },
  {
    question: "Does InOps support ZKTeco and other biometric devices alongside camera attendance?",
    answer:
      "Yes. InOps CLMS supports a mixed hardware environment — ZKTeco face and fingerprint terminals, CCTV-based AI attendance, and QR/card readers can all feed attendance events into the same CLMS record per worker. Multi-gate factories commonly deploy different hardware at different entry points with unified attendance in InOps.",
  },
];

export default function TimeAndAttendanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionSchemaInjector path="/cctv" pageTitle={PAGE_TITLE} pageDescription={PAGE_DESCRIPTION} />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      {children}
    </>
  );
}
