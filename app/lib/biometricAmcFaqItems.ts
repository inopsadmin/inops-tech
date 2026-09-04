import type { FAQItem } from "@/app/components/FAQPageJsonLd";

/**
 * Single source of truth for /services/biometric-amc FAQ.
 * Shared by layout.tsx (JSON-LD schema) and page.tsx (visible accordion).
 * All answers are plain strings so JSON-LD serialises correctly.
 */
export const biometricAmcFaqItems: FAQItem[] = [
  {
    question: "What is a biometric AMC and what does it cover?",
    answer:
      "A biometric AMC (Annual Maintenance Contract) is a service agreement that keeps attendance and access-control hardware operational. InOps AMC covers preventive maintenance visits, corrective repairs, firmware lifecycle management, remote device-health monitoring, and on-site engineer support for biometric terminals, fingerprint and face readers, RFID readers, and turnstiles — under one contract and one SLA across every site.",
  },
  {
    question: "Which devices are covered under AMC?",
    answer:
      "Biometric fingerprint and face terminals, RFID and card readers, turnstiles and flap barriers, and associated controllers and panels — regardless of original vendor. Mixed-brand fleets across multiple sites are supported under a single contract, which is the usual situation for plants that bought hardware over several years from different suppliers.",
  },
  {
    question: "Do you take over AMC for devices we bought from another vendor?",
    answer:
      "Yes. Takeover AMC is one of the most common engagements — we audit the existing fleet, register every device, and bring it under one SLA regardless of who supplied or previously serviced it. Enrollment and configuration data is preserved during transition.",
  },
  {
    question: "What is the standard response SLA?",
    answer:
      "Standard response is within 24 hours, with remote diagnostics often resolving issues before an engineer is dispatched. Faster-response tiers are available for critical gates and high-security sites, and every SLA window is defined contractually per site tier.",
  },
  {
    question: "What's the difference between preventive and corrective maintenance?",
    answer:
      "Preventive maintenance runs on a schedule — cleaning, calibration, firmware updates, and health checks before failures occur. Corrective maintenance is the repair response when something does fail. Most fleets fail because only the second exists; the AMC's value is that the first prevents most of the second.",
  },
  {
    question: "Can we monitor device health ourselves?",
    answer:
      "Yes. The AMC includes a live fleet-health dashboard showing device status, uptime, open tickets, and service history across every registered site — so your team sees failures forming rather than hearing about them from the gate.",
  },
  {
    question: "Do you offer RFID reader AMC and access control maintenance?",
    answer:
      "Yes. RFID reader AMC and access-control maintenance — turnstiles, flap barriers, controllers — are covered alongside biometric attendance devices, so one contract spans your entire identity and access hardware estate rather than splitting it across vendors.",
  },
  {
    question: "How does AMC work across multiple sites in different states?",
    answer:
      "One contract, one SLA, one dashboard, with engineer coverage across India. Site-wise uptime and service history are reported monthly, so corporate sees every plant's fleet condition without chasing local vendors.",
  },
  {
    question: "What happens to attendance and access when a device fails?",
    answer:
      "Failover depends on your setup: multi-lane gates continue on remaining readers, and sites running CCTV attendance or the mobile attendance app can capture attendance while a terminal is down. Part of AMC onboarding is identifying single-point-of-failure gates and recommending redundancy.",
  },
  {
    question: "Is firmware managed as part of the contract?",
    answer:
      "Yes. Ageing firmware is one of the most common causes of both device failure and security exposure, and it's rarely anyone's job internally. AMC includes tracking firmware versions across the fleet and applying vendor-supported updates on a managed schedule.",
  },
  {
    question: "Are spares stocked locally?",
    answer:
      "Yes — spares are held and supported in India, so replacements don't wait on import lead times. This is a practical difference from vendors who service Indian sites from overseas inventory.",
  },
  {
    question: "How is AMC priced?",
    answer:
      "Pricing is per device per year, tiered by device class, SLA level, and site count, with volume rates for large or multi-site fleets. Fleets in unknown condition typically start with a biometric database audit so the AMC is scoped against what's actually deployed rather than what the asset register claims.",
  },
  {
    question: "Do we need to be an InOps software customer?",
    answer:
      "No. AMC is available as a standalone service for any biometric and access-control fleet. If you later deploy contract labour management or HRIS, the same device estate feeds it — but the AMC stands on its own.",
  },
  {
    question: "Our biometric machine has stopped working. What now?",
    answer:
      "Start with the basics — power, network, and sensor cleaning resolve a surprising share of failures. If the device is unresponsive after that, or if the same problem recurs across several devices, it usually points to firmware or a fleet-level issue rather than one faulty unit. We diagnose remotely first and dispatch an engineer where the fix needs hands.",
  },
  {
    question: "Can you repair a device that's out of warranty?",
    answer:
      "Yes. Out-of-warranty repair is covered under AMC, and available as a one-off for estates not yet under contract — though for anything beyond a handful of devices, an annual contract is usually cheaper than repeated call-outs.",
  },
  {
    question: "Do you have a service centre for biometric attendance devices?",
    answer:
      "We operate as a service provider rather than a walk-in centre — engineers travel to the site, because industrial devices are gate-mounted and taking them offline for a workshop visit means manual attendance for the duration.",
  },
];
