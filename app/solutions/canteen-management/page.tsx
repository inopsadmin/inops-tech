"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SolutionLandingHero from "@/app/components/SolutionLandingHero";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

/** Full-card hover: accent border, shadow, slight lift (matches analytics `#00AAFF`). */
const interactiveSurfaceHover =
  "transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-[#00AAFF]/50 hover:shadow-lg hover:shadow-[#00AAFF]/12";

const buttonHover =
  "transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg";

/** Scheduled vs walk-up process — `public/images/Visitor-Management-Process (1).png` */
const visitorManagementProcessImage = "/images/Visitor-Management-Process (1).png";

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

export default function CanteenManagementPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        <SolutionLandingHero
          badge={
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              Canteen and visitor solutions
            </span>
          }
          title="Manage Visitors and Canteen Operations with Ease"
          subtitle="Centralize meal issuance, biometric verification, and subsidy rules from the serving line to payroll—aligned with visitor check-in and lobby workflows when you need one campus story."
          imageSrc="/WhatsApp Image 2026-05-04 at 12.31.38 PM.jpeg"
          imageAlt="Digital canteen and subsidy operations on an industrial campus"
          sectionClassName="min-h-[380px] sm:min-h-[460px] lg:min-h-[560px]"
          imageWrapperClassName="absolute top-0 bottom-0 right-0 mt-10 overflow-hidden w-[min(100%,29rem)] sm:w-[min(100%,34rem)] lg:w-[min(100%,40rem)]"
          imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 34rem, 40rem"
          imageClassName="object-contain object-[right_center] opacity-[0.82]"
          // imageEdgeFadeClassName="z-[1] bg-[linear-gradient(to_top,rgba(255,255,255,0.44),transparent_44%),linear-gradient(to_bottom,rgba(255,255,255,0.44),transparent_44%),linear-gradient(to_left,rgba(255,255,255,0.4),transparent_38%),linear-gradient(to_right,rgba(255,255,255,0.4),transparent_38%)]"
          gradientClassName="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.78)_11%,rgba(255,255,255,0.35)_20%,rgba(255,255,255,0.12)_28%,transparent_40%)] sm:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.72)_12%,rgba(255,255,255,0.28)_21%,rgba(255,255,255,0.08)_30%,transparent_42%)] lg:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.68)_13%,rgba(255,255,255,0.22)_22%,transparent_38%)]"
          mobileStackGradientClassName="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-white/15 via-transparent to-white/10 sm:hidden"
        />

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
                <div className="mt-8 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Visitor Management System</p>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 ${buttonHover}`}
                  >
                    Get started
                  </Link>
                </div>
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

        {/* Visitor Management System — overview + process diagram */}
        <section className="border-t border-slate-200 py-10 lg:py-14 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-3xl lg:max-w-6xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Visitor Management System
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 sm:w-20" aria-hidden />
              <p className="mt-6 text-base leading-relaxed text-center text-slate-600 sm:text-lg">
                InOps Company&apos;s Visitor Management System offers a holistic solution to visitor tracking and security,
                empowering organizations to create safe and welcoming environments for employees, guests, and clients alike.
                With its advanced features and corresponding benefits, our system sets the standard for modern visitor
                management practices, delivering unparalleled efficiency, security, and peace of mind. Experience the future
                of visitor management with InOps Company today.
              </p>
            </motion.div>
            <motion.div
              className={`relative mt-10 overflow-hidden rounded-2xl  p-3 sm:p-5 lg:mt-12`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
            >
              <Image
                src={visitorManagementProcessImage}
                alt="Visitor management process: tracking, security, and workflow overview"
                width={1230}
                height={650}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
            </motion.div>
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
