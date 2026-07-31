import type { FAQItem } from "@/app/components/FAQPageJsonLd";

export const turnstilesFaqItems: FAQItem[] = [
  {
    question: "What types of turnstiles suit factory gates?",
    answer:
      "Tripod turnstiles for indoor lanes and contractor entry points where throughput is the constraint; full-height turnstiles for perimeter gates, defence and PSU campuses where tailgating cannot be tolerated; flap barriers for office-to-plant transitions and visitor lanes where passage speed matters. Most industrial sites use a mix, matched gate by gate during the site survey.",
  },
  {
    question: "How many people per minute can a turnstile lane handle?",
    answer:
      "A tripod lane handles roughly 25–30 persons per minute with card or fingerprint verification. Shift changes at large plants usually need multiple parallel lanes, or CCTV-based attendance alongside lanes to absorb peak flow without queueing.",
  },
  {
    question: "Can turnstiles enforce compliance rules, not just identity?",
    answer:
      "Yes — that's the difference between access control and compliance enforcement. Connected to a rules engine, the lane checks induction validity, medical fitness, licence status, and BGV clearance at the moment of entry; a failed check means the arm doesn't turn and the denial is logged with its reason. See gate pass management and auto-blocking for how this integrates with CLRA obligations.",
  },
  {
    question: "What happens during a power failure or fire alarm?",
    answer:
      "Lanes are configured to fail safe: arms drop or release to allow free egress on power loss and on fire-alarm signal, in line with life-safety requirements. Fail-secure configurations are available for high-security perimeters where the security posture requires it.",
  },
  {
    question: "Which readers can be integrated?",
    answer:
      "Face terminals, fingerprint readers, RFID and card readers, and QR scanners mount to the lane without a separate controller. Events feed the same attendance engine as face recognition attendance, so one enrollment covers every gate and device.",
  },
  {
    question: "Can turnstiles work with our existing access control system?",
    answer:
      "Yes — lanes accept standard reader and controller interfaces, so existing card systems can drive them while attendance and compliance logic runs on InOps. Mixed environments are common in plants that added hardware over several years.",
  },
  {
    question: "Are they suitable for outdoor gates?",
    answer:
      "Full-height turnstiles are rated for outdoor exposure. Tripod turnstiles work outdoors when sheltered from direct rain and sun; flap barriers are indoor-rated with sheltered-outdoor options subject to deployment specifications. Site conditions determine the recommendation.",
  },
  {
    question: "How are visitors and vehicles handled?",
    answer:
      "Visitor passes issued through visitor management work on the same lanes as workforce credentials, with zone permissions attached. Vehicle access uses boom barriers and ANPR rather than pedestrian lanes, integrated into the same access records.",
  },
  {
    question: "What's involved in installation?",
    answer:
      "Site survey, civil coordination for foundation and cabling, installation, reader mounting, and commissioning against your attendance system. Most single-gate configurations are live within days of hardware delivery; multi-gate campuses are staged in parallel lanes so attendance capture never stops during rollout.",
  },
  {
    question: "Is maintenance covered?",
    answer:
      "Turnstiles, flap barriers, and their integrated readers are covered under biometric AMC services — preventive maintenance, mechanism servicing, and SLA-backed repair across every site under one contract.",
  },
];
