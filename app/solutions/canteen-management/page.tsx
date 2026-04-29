"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

/** Full-card hover: accent border, shadow, slight lift (matches analytics `#00AAFF`). */
const interactiveSurfaceHover =
  "transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-[#00AAFF]/50 hover:shadow-lg hover:shadow-[#00AAFF]/12";

const buttonHover =
  "transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg";

const featureRowHover =
  "rounded-xl border border-transparent p-4 transition-[border-color,box-shadow,background-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-[#00AAFF]/40 hover:bg-blue-50/40 hover:shadow-md hover:shadow-[#00AAFF]/8 sm:p-5";

/** Visily “Real-time Operational Visibility”–style metrics, adapted for canteen. */
const operationalMetrics = [
  {
    label: "Meals verified today",
    value: "1,204",
    hint: "Biometric & rule-based checks",
    icon: "shield" as const,
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    label: "Peak canteen utilization",
    value: "88%",
    hint: "Capacity during lunch windows",
    icon: "utensils" as const,
    accent: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    label: "Subsidy & payroll sync",
    value: "Real-time",
    hint: "Accruals tied to HR / payroll",
    icon: "link" as const,
    accent: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Platform uptime",
    value: "99.98%",
    hint: "Mission-critical site operations",
    icon: "clock" as const,
    accent: "text-blue-600",
    bg: "bg-blue-50",
  },
];

/** Enterprise analytics dashboard — visitor volume (Thu peak), facility KPIs, live logs. */
const analyticsAccent = "#00AAFF";

const visitorTrendWeek = [
  { day: "Mon", pct: 52 },
  { day: "Tue", pct: 78 },
  { day: "Wed", pct: 65 },
  { day: "Thu", pct: 100 },
  { day: "Fri", pct: 88 },
  { day: "Sat", pct: 28 },
  { day: "Sun", pct: 18 },
] as const;

const liveMovementLogs = [
  {
    id: "LOG-9281",
    personnel: "Sarah Jenkins",
    entity: "Astra Corp",
    entityKind: "company" as const,
    time: "09:12 AM",
    status: "Active" as const,
  },
  {
    id: "LOG-9282",
    personnel: "David Miller",
    entity: "Contractor",
    entityKind: "contractor" as const,
    time: "09:18 AM",
    status: "Success" as const,
  },
  {
    id: "LOG-9283",
    personnel: "Priya Nair",
    entity: "Staff",
    entityKind: "staff" as const,
    time: "09:24 AM",
    status: "Active" as const,
  },
  {
    id: "LOG-9284",
    personnel: "James Okonkwo",
    entity: "Astra Corp",
    entityKind: "company" as const,
    time: "09:31 AM",
    status: "Expired" as const,
  },
  {
    id: "LOG-9285",
    personnel: "Elena Rossi",
    entity: "Staff",
    entityKind: "staff" as const,
    time: "09:45 AM",
    status: "Success" as const,
  },
] as const;

/** Core pillars from Visily “Digital Canteen & Subsidy Control” section. */
const digitalCanteenPillars = [
  "Face recognition and biometric meal counting for accurate issuance.",
  "Real-time subsidy calculation with payroll linkage and policy rules.",
  "Inventory management and waste-reduction tracking across locations.",
  "Contractor vs. employee pricing and entitlements without manual spreadsheets.",
];

const secondaryHighlights = [
  {
    title: "Queue & capacity insight",
    description:
      "Understand dwell times and peak queues so you can staff lanes, stagger breaks, and right-size production.",
    icon: "chart" as const,
  },
  {
    title: "Ops-friendly tablets",
    description:
      "Give canteen supervisors a mobile-first view of counts, exceptions, and overrides at the serving line.",
    icon: "device" as const,
  },
  {
    title: "Proactive alerts",
    description:
      "Flag policy breaches, duplicate scans, and unusual consumption patterns before they become audit issues.",
    icon: "bell" as const,
  },
];

/** Visitor desk / lobby — aligns with combined “canteen & visitor” brochure narrative. */
const visitorExperiencePillars = [
  "Faster lobby flows with pre-registration, host notification, and clear visitor badges.",
  "Real-time visibility of who is on-site, with exportable trails for audits and incidents.",
  "Tie visitor passes to access rules so guests and contractors only reach approved zones.",
  "Shares policy context with canteen identity—workforce, visitors, and subsidies stay consistent.",
];

const visitorLobbyHighlights = [
  {
    title: "Pre-registration & host workflows",
    description:
      "Hosts pre-approve visitors, cut desk time, and smooth peak-hour arrivals without extra headcount.",
    icon: "calendar" as const,
  },
  {
    title: "Badges & access handoff",
    description:
      "Print or digital badges that integrate with turnstiles and access control for the right zones.",
    icon: "badge" as const,
  },
  {
    title: "Lobby analytics & reporting",
    description:
      "Traffic patterns, dwell insights, and exports for facilities, security, and compliance reviews.",
    icon: "chart" as const,
  },
];

const visitorDeskFeatures = [
  {
    title: "Streamlined visitor check-in",
    circleColor: "bg-orange-500",
    description:
      "Digitize registration, shorten wait times, and keep reception predictable during busy windows.",
    benefit: "Better visitor experience and less lobby congestion.",
  },
  {
    title: "Real-time visitor monitoring",
    circleColor: "bg-pink-500",
    description:
      "See who is on-site live, spot exceptions early, and coordinate security or hosts quickly.",
    benefit: "Stronger security posture and faster incident response.",
  },
  {
    title: "Visitor badges & access integration",
    circleColor: "bg-yellow-500",
    description:
      "Issue branded badges and sync with access control so restricted areas stay enforced.",
    benefit: "Clear identification and tighter zone governance.",
  },
  {
    title: "Pre-registration & visitor analytics",
    circleColor: "bg-blue-800",
    description:
      "Hosts pre-register guests; analytics cover volumes, demographics, and trends over time.",
    benefit: "Data-led decisions for staffing, space, and policy.",
  },
];

const featuresAndBenefits = [
  {
    title: "Biometric meal counting",
    circleColor: "bg-blue-600",
    description:
      "Use face recognition and biometrics to tie each meal to the right person, cutting unaccounted issues and proxy swipes.",
    benefit: "Trustworthy meal logs for audits, subsidies, and capacity planning.",
  },
  {
    title: "Subsidy calculation & payroll",
    circleColor: "bg-blue-500",
    description:
      "Apply rules in real time, sync with payroll and HR master data, and keep deductions and employer contributions accurate.",
    benefit: "Fewer payroll corrections and clearer visibility for finance teams.",
  },
  {
    title: "Inventory & waste tracking",
    circleColor: "bg-teal-500",
    description:
      "Track stock, consumption, and spoilage so procurement matches real demand instead of guesswork.",
    benefit: "Lower food waste and more predictable supply spend.",
  },
  {
    title: "Contractor vs. employee pricing",
    circleColor: "bg-orange-500",
    description:
      "Enforce different rates, caps, and subsidies by workforce type without separate tills or manual reconciliations.",
    benefit: "Fair, consistent pricing and less revenue leakage at the counter.",
  },
  {
    title: "Menu management",
    circleColor: "bg-amber-500",
    description:
      "Publish menus and rotations with allergens and dietary tags so employees know what they can order.",
    benefit: "Better variety, compliance, and employee satisfaction.",
  },
  {
    title: "Cashless & integrated payments",
    circleColor: "bg-pink-500",
    description:
      "Connect wallets, cards, and account deductions for fast checkout and fewer cash-handling errors.",
    benefit: "Shorter lines and simpler reconciliation.",
  },
  {
    title: "Ordering & feedback",
    circleColor: "bg-emerald-500",
    description:
      "Let staff pre-order or rate meals so you can tune menus and service based on real usage.",
    benefit: "Continuous improvement loop from the floor.",
  },
  {
    title: "Analytics & reporting",
    circleColor: "bg-blue-800",
    description:
      "Report on sales, subsidies, peak hours, and exceptions to support finance and facilities in one place.",
    benefit: "Data-led decisions for menus, staffing, and spend.",
  },
];

const powerfulServices = [
  { title: "Integrated Applications For Enterprise", icon: "document", color: "bg-amber-500" },
  { title: "Biometric Attendance System", icon: "id", color: "bg-blue-400" },
  { title: "Access Control System", icon: "card", color: "bg-pink-500" },
  { title: "Visitor Management System", icon: "person", color: "bg-blue-500" },
  { title: "Canteen Management System", icon: "tray", color: "bg-pink-500" },
  { title: "Contract Management System", icon: "document-pen", color: "bg-amber-500" },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function MetricIcon({ name }: { name: "shield" | "utensils" | "link" | "clock" }) {
  const c = "h-6 w-6";
  if (name === "shield") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (name === "utensils") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18M3 8l4 4 4-4M17 8h4M17 12h4M17 16h4" />
      </svg>
    );
  }
  if (name === "link") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function HighlightIcon({ name }: { name: "chart" | "device" | "bell" | "calendar" | "badge" }) {
  const c = "h-6 w-6";
  if (name === "chart") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6m4 6V9m4 10V5M5 19h14" />
      </svg>
    );
  }
  if (name === "device") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  }
  if (name === "badge") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8h.01M12 12h4.01M16 12h.01M12 16h.01M16 16h.01" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

function ServiceIcon({ icon }: { icon: string }) {
  const c = "h-6 w-6";
  return (
    <>
      {icon === "document" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
      {icon === "card" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
      {icon === "tray" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
      {icon === "id" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>}
      {icon === "person" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
      {icon === "document-pen" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
    </>
  );
}

function LogEntityIcon({ kind }: { kind: "company" | "contractor" | "staff" }) {
  const c = "h-4 w-4 shrink-0 text-slate-500";
  if (kind === "staff") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function LogStatusPill({ status }: { status: "Active" | "Success" | "Expired" }) {
  return (
    <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200/80">
      {status}
    </span>
  );
}

export default function CanteenManagementPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero – Visily-style light layout + facility ops positioning */}
        <motion.section
          className="relative overflow-hidden border-b border-slate-200/80 from-slate-50 via-white to-white bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-10%,rgba(37,99,235,0.09),transparent)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-10 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-20 lg:pt-14">
            <motion.nav
              className="mb-8 text-sm text-slate-500"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
              aria-label="Breadcrumb"
            >
              {/* <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="mx-2 text-slate-400">/</span>
              <span className="font-medium text-slate-800">Canteen management</span> */}
            </motion.nav>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div>
                <motion.span
                  className="inline-flex rounded-full border border-blue-100 bg-blue-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#00AAFF]/45 hover:bg-white hover:shadow-md hover:shadow-[#00AAFF]/10"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
                >
                  Canteen and Visitor Solutions
                </motion.span>
                <motion.h1
                  className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[2.75rem] lg:leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: smoothEase, delay: 0.12 }}
                >
                  Digital canteen operations &amp; subsidy control
                </motion.h1>
                <motion.p
                  className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                >
                  Centralize meal issuance, biometric verification, and subsidy rules on one platform from the serving line to payroll so finance and facilities stay aligned. Pair the same stack with visitor check in, badges, and lobby analytics for one campus story.
                </motion.p>
                <motion.div
                  className="mt-8 flex flex-wrap items-center gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.22 }}
                >
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 hover:bg-blue-700 ${buttonHover}`}
                  >
                    Get started
                  </Link>
                  <a
                    href="#canteen-features"
                    className={`inline-flex items-center justify-center rounded-xl border-2 border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 hover:border-[#00AAFF] hover:bg-blue-50/80 hover:shadow-[#00AAFF]/15 ${buttonHover}`}
                  >
                    View capabilities
                  </a>
                  <Link
                    href="/solutions/visitor-management"
                    className={`inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-[#00AAFF]/45 hover:bg-blue-50/50 ${buttonHover}`}
                  >
                    Visitor management
                  </Link>
                </motion.div>
                <motion.p
                  className="mt-8 text-sm font-medium text-slate-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.28 }}
                >
                  Trusted by 2,500+ site and facility teams nationwide.
                </motion.p>
              </div>

              <motion.div
                className="relative mx-auto w-full max-w-lg lg:max-w-none"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: smoothEase, delay: 0.15 }}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 ${interactiveSurfaceHover}`}
                >
                  <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
                    <span className="ml-2 text-xs font-medium text-slate-500">Canteen ops — live dashboard</span>
                  </div>
                  <div className="relative h-[230px] w-full bg-slate-50 sm:h-[270px] lg:h-[300px]">
                    <Image
                      src="/1111.png"
                      alt="Digital canteen operations and visitor management — campus dining, subsidy control, and lobby workflows"
                      fill
                      className=""
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-px border-t border-slate-100 bg-slate-100 sm:grid-cols-4">
                    {[
                      { k: "Meals today", v: "1,204" },
                      { k: "Pending overrides", v: "12" },
                      { k: "Subsidy sync", v: "OK" },
                      { k: "Waste vs. plan", v: "−4%" },
                    ].map((row) => (
                      <div key={row.k} className="bg-white px-3 py-3 text-center sm:px-4">
                        <div className="text-lg font-bold tabular-nums text-slate-900">{row.v}</div>
                        <div className="text-[10px] font-medium uppercase tracking-wide text-slate-500 sm:text-xs">{row.k}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Operational metrics – Visily “Real-time visibility” strip */}
        <section className="mt-10 border-b border-slate-200 py-10 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Real-time canteen visibility</h2>
              <p className="mt-3 text-slate-600">
                Monitor utilization, verified meals, and subsidy health across sites without waiting for month-end spreadsheets.
              </p>
            </motion.div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {operationalMetrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  className={`flex flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm ${interactiveSurfaceHover}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: i * 0.05 }}
                >
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${m.bg} ${m.accent}`}>
                    <MetricIcon name={m.icon} />
                  </div>
                  <div className="text-2xl font-bold tabular-nums tracking-tight text-slate-900">{m.value}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-800">{m.label}</div>
                  <p className="mt-2 text-sm leading-snug text-slate-500">{m.hint}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Canteen & Subsidy Control – Visily feature block (image + checklist) */}
        <section className="border-b border-slate-200 py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <motion.div
                className={`relative order-2 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg lg:order-1 ${interactiveSurfaceHover}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase }}
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src="/images/cmsy.jpg"
                    alt="InOps digital canteen dashboard: biometric meal verification, subsidy and payroll-linked rules, inventory signals, and contractor vs employee entitlements"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700" aria-hidden>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
                  Digital canteen &amp; subsidy control
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Replace informal registers and brittle Excel rules with biometric meal counts, live subsidies, and inventory signals your procurement team can trust.
                </p>
                <ul className="mt-6 space-y-3">
                  {digitalCanteenPillars.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-slate-700 leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors duration-300 hover:text-[#00AAFF]"
                >
                  Learn more
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Secondary highlights – queue, mobile ops, alerts */}
        <section className="border-b border-slate-200 py-10 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {secondaryHighlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  className={`group rounded-2xl border border-slate-200/90 bg-slate-50/30 p-6 ${interactiveSurfaceHover}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: i * 0.06 }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition-transform duration-300 group-hover:scale-105">
                    <HighlightIcon name={item.icon} />
                  </div>
                  <h3 className="mt-4 font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visitor desk & lobby — brochure “canteen + visitor” pairing */}
        <section id="visitor-desk" className="border-b border-slate-200 py-12 lg:py-16 scroll-mt-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700" aria-hidden>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
                  Visitor desk &amp; lobby on the same campus stack
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  The combined facility story does not stop at the serving line. Layer visitor workflows next to canteen and attendance so security, HR, and front desk share consistent data instead of parallel spreadsheets.
                </p>
                <ul className="mt-6 space-y-3">
                  {visitorExperiencePillars.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-slate-700 leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solutions/visitor-management"
                  className="group mt-8 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 transition-colors duration-300 hover:text-[#00AAFF]"
                >
                  Explore visitor management
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>
              <motion.div
                className={`relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg ${interactiveSurfaceHover}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src="/images/visitor.jpg"
                    alt="Visitor management and lobby reception"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {visitorLobbyHighlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  className={`group rounded-2xl border border-slate-200/90 bg-slate-50/40 p-6 ${interactiveSurfaceHover}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: i * 0.06 }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition-transform duration-300 group-hover:scale-105">
                    <HighlightIcon name={item.icon} />
                  </div>
                  <h3 className="mt-4 font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep-dive: why InOps canteen */}
        <section className="border-t border-gray-200 from-white to-slate-50/50 py-8 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="w-full text-left"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Built for high-volume sites and enterprise policy
              </h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 sm:w-20" aria-hidden />
            </motion.div>

            <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.04 }}
              >
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  A well-run canteen is part productivity, part cost control. InOps ties every meal event to identity and policy so subsidy leakage, contractor mis-rating, and unplanned waste surface while you can still act—not after the quarter closes.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">
                  Whether you operate one campus kitchen or a network of contractor-run outlets, the same dashboards, alerts, and payroll-ready exports keep facilities, HR, and finance on one version of the truth.
                </p>
              </motion.div>
              <motion.div
                className="lg:pl-2"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.08 }}
              >
                <div className={`overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md ${interactiveSurfaceHover}`}>
                  <div className="relative aspect-[16/10] w-full min-h-[220px] sm:min-h-[260px] lg:min-h-[280px]">
                    <Image
                      src="/images/cmsy.jpg"
                      alt="Canteen management — operations and meal management interface"
                      fill
                      className="object-contain object-center p-3 sm:p-5"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Powerful Services for Your Business */}
        <section className="py-6 lg:py-10 border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-2xl font-bold text-gray-900 sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Powerful Services for Your Business
            </motion.h2>
            <div className="mt-2 h-0.5 w-20 rounded-full bg-blue-500" />
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {powerfulServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  className={`flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-100/80 p-6 shadow-sm backdrop-blur-sm ${interactiveSurfaceHover}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.05 }}
                >
                  <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${service.color} text-white`}>
                    <ServiceIcon icon={service.icon} />
                  </span>
                  <h3 className="font-semibold text-gray-900">{service.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Field / supervisor view */}
        <section className="py-6 lg:py-10 border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 lg:items-center">
              <motion.div
                className="lg:pr-8"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase }}
              >
                <h2 className="text-2xl font-bold text-blue-600 sm:text-3xl">
                  Smarter canteens across campuses and industries
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                  From IT parks to plants and large contractor populations, InOps gives ops teams the same disciplined workflow: verify the person, apply the right subsidy, and push clean numbers to payroll—without slowing the lunch rush.
                </p>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-blue-700 ${buttonHover}`}
                >
                  Get started
                </Link>
              </motion.div>
              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
              >
                <div className="relative w-full max-w-[280px] rounded-[2.5rem] border-[10px] border-slate-200 bg-slate-100 p-2 shadow-2xl transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-[#00AAFF]/40 hover:shadow-[0_25px_50px_-12px_rgba(0,170,255,0.2)]">
                  <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-100" aria-hidden />
                  <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
                    <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                      <span className="font-semibold text-slate-900 text-sm">Shift meal summary</span>
                    </div>
                    <div className="px-3 py-2 text-center text-xs text-slate-500">Today · Lunch window</div>
                    <div className="px-3 pb-3 space-y-2">
                      {[
                        { label: "Biometric verified", count: 342, tone: "bg-emerald-500" },
                        { label: "Contractor meals", count: 118, tone: "bg-blue-500" },
                        { label: "Overrides / manual", count: 7, tone: "bg-amber-500" },
                        { label: "Exceptions flagged", count: 2, tone: "bg-rose-500" },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between gap-2 rounded-lg border border-slate-100 bg-slate-50/50 px-3 py-2 text-sm">
                          <span className="flex items-center gap-2 text-slate-700">
                            <span className={`h-6 w-1 rounded-full ${row.tone}`} aria-hidden />
                            {row.label}
                          </span>
                          <span className="tabular-nums font-semibold text-slate-900">{row.count}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-slate-200 p-3 text-center text-xs text-slate-500">
                      Subsidy export · synced to payroll rules
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA band — light banner aligned with hero (sky, dark type, white buttons) */}
        <section className="border-t border-blue-300/40 py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <motion.h2
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.95rem] lg:leading-snug"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Ready to modernize canteen, visitor desk, and site policy?
            </motion.h2>
            <motion.p
              className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-slate-600 sm:text-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
            >
              Help manufacturing, IT parks, and infrastructure campuses tighten subsidy accuracy, serving-line discipline, and lobby visibility—teams often recover meaningful leakage once biometrics, payroll linkage, and visitor workflows share one platform.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase, delay: 0.1 }}
            >
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-md shadow-slate-900/5 ring-1 ring-slate-200/80 hover:bg-blue-50 hover:ring-[#00AAFF]/35 ${buttonHover}`}
              >
                Request a demo
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-md shadow-slate-900/5 ring-1 ring-slate-200/80 hover:ring-[#00AAFF]/30 ${buttonHover}`}
              >
                Talk to a specialist
              </Link>
            </motion.div>
            <motion.p
              className="mt-8 text-sm text-slate-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, delay: 0.12 }}
            >
              No credit card required · Personalized walkthrough · Typical session under 15 minutes
            </motion.p>
          </div>
        </section>
      </div>
    </>
  );
}
