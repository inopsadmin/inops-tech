/**
 * Homepage platform device — one tab per unique Solutions mega-menu destination.
 * Copy and imagery mirror each page’s hero section.
 */
export const platformShowcaseSlides = [
  {
    id: "workforce-governance",
    tabLabel: "Workforce governance",
    href: "/solutions/time-and-attendance",
    title: "Attendance without devices, powered by AI",
    badge: "CCTV attendance",
    text:
      "Turn your existing CCTV infrastructure into a real-time, hardware-free attendance system with computer vision. No queues, no contact, no excuses.",
    imageUrl: "/WhatsApp Image 2026-04-27 at 3.53.36 PM.jpeg",
    imageAlt: "CCTV-based attendance and computer vision monitoring on site",
  },
  {
    id: "payroll-clms",
    tabLabel: "Contract & payroll",
    href: "/solutions/payroll-solutions",
    title: "Redefining contract workforce — governance system",
    badge: "CLMS",
    text: "One Unified Platform for Complete Control",
    imageUrl: "/WhatsApp Image 2026-05-04 at 12.41.37 PM.jpeg",
    imageAlt: "Payroll and contract workforce operations",
  },
  {
    id: "hris",
    tabLabel: "HRIS",
    href: "/solutions/labourmanagement",
    title: "Total workforce management — simplified",
    badge: "HR Information System",
    text:
      "Manage employee data, attendance, payroll, and workforce operations all in one unified platform built for speed and compliance.",
    imageUrl: "/WhatsApp Image 2026-05-04 at 12.24.11 PM.jpeg",
    imageAlt: "Labour management and HRIS — unified workforce, attendance, and payroll",
  },
  {
    id: "canteen-visitor",
    tabLabel: "Canteen & visitors",
    href: "/solutions/canteen-management",
    title: "Manage visitors and canteen operations with ease",
    badge: "Canteen & visitor",
    text:
      "Centralize meal issuance, biometric verification, and subsidy rules from the serving line to payroll—aligned with visitor check-in and lobby workflows when you need one campus story.",
    imageUrl: "/WhatsApp Image 2026-05-04 at 12.31.38 PM.jpeg",
    imageAlt: "Digital canteen and subsidy operations on an industrial campus",
  },
  {
    id: "mobile-app",
    tabLabel: "Mobile app",
    href: "/solutions/mobile-app",
    title: "Attendance in every pocket",
    badge: "Mobile attendance",
    text:
      "Punch in, submit leave, and see who is on shift—from the phones your team already uses. Self-service without extra hardware for everyday work.",
    imageUrl: "/WhatsApp Image 2026-05-04 at 12.24.06 PM.jpeg",
    imageAlt: "Mobile app for attendance and workforce self-service on the go",
  },
  {
    id: "face-reader",
    tabLabel: "Face & devices",
    href: "/product/biometric-access-control",
    title: "Smart access. Secure workforce.",
    badge: "Biometric hardware",
    text:
      "Advanced biometric devices engineered for high-precision attendance, access control, and seamless workforce management across industrial environments.",
    imageUrl: "/WhatsApp Image 2026-04-29 at 3.18.32 PM.jpeg",
    imageAlt: "Enterprise biometric access devices in a modern secure facility",
  },
  {
    id: "enterprise",
    tabLabel: "Enterprise",
    href: "/solutions/enterprise-solution",
    title: "Connected operations. Intelligent control.",
    badge: "Enterprise scale",
    text:
      "Manage assets, logistics, and warehouse operations through a unified platform with real-time visibility and AI-driven automation.",
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Warehouse and logistics operations — enterprise visibility",
  },
  {
    id: "ewa",
    tabLabel: "EWA",
    href: "/solutions/ewa",
    title: "Instant access to earned wages",
    badge: "Earned wage access",
    text:
      "Enable your workforce to access wages they've already earned—powered by real-time attendance and payroll data.",
    imageUrl: "/images/ewa-hero.png",
    imageAlt: "Workforce on site — earned wage access aligned to verified attendance",
  },
] as const;

export type PlatformShowcaseSlide = (typeof platformShowcaseSlides)[number];
