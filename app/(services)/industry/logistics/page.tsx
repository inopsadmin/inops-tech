"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.15 };

// ─── Data ────────────────────────────────────────────────────────────────────

const heroStats = [
  { value: "24/7", label: "Shift Continuity" },
  { value: "0%", label: "Attendance Fraud" },
  { value: "Multi", label: "Location Control" },
];

const contextCheckItems = [
  "Continuous Shift Handover",
  "Dynamic Temp Staffing",
  "Real-time Warehouse Tracking",
  "Automated Muster Rolls",
];

const painPoints = [
  {
    title: "Distributed Workforce",
    desc: "Lack of centralised visibility across multiple warehouses, shifts, and satellite workforces.",
  },
  {
    title: "Multiple Contractors",
    desc: "Managing dozens of contractor firms across locations with inconsistent compliance and documentation.",
  },
  {
    title: "Night Shift Governance",
    desc: "Supervision and compliance enforcement across overnight and weekend shifts remains a persistent blind spot.",
  },
  {
    title: "Seasonal Temp Spikes",
    desc: "Rapid onboarding and offboarding during peak logistics cycles creates compliance and safety risks.",
  },
  {
    title: "Attendance Fraud",
    desc: "Buddy punching and proxy attendance inflate payroll and undermine operational headcount accuracy.",
  },
  {
    title: "Access Control Lapses",
    desc: "Unauthorised access to cargo zones and high-value storage areas poses serious security risks.",
  },
];

const platformCards = [
  {
    title: "WMS/TMS Connectivity",
    desc: "Native integrations to Oracle Connectors, Oracle Fieldglass, and Oracle Employee Central for bi-directional data syncing.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Audit Ready Trail",
    desc: "Every worker movement timestamped and secured across multiple warehouses, prepared for immediate compliance audit.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Scalable Command",
    desc: "Single command centre giving primary workforce data with full operations dashboard for multiple locations and regulatory compliances.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const certBadges = [ "ISO 27001", "SOC 2 Type II", "GDPR Compliant"];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LogisticsIndustryPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-gray-900">

        {/* ── S1 HERO ── */}
        <section className="relative min-h-[540px] overflow-hidden bg-slate-100 text-white">
          <Image
            src="/images/logistics-warehouse-hero.jpg"
            alt="Logistics warehouse with stacked shelves"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#011d38] from-[0%] via-[#073b68]/88 via-[48%] to-white/18 to-[100%]" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001a33]/95 from-[0%] via-[#0067b1]/35 via-[58%] to-white/25 to-[100%]" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06284a]/30 via-transparent to-[#011d38]/25" aria-hidden />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-12 py-16 sm:px-16 lg:px-24">
            <div className="lg:grid lg:grid-cols-2">
            <motion.div
              className=""
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              <span className="inline-flex bg-teal-500/25 px-3 py-1 text-[0.56rem] font-bold uppercase tracking-wider text-teal-100 ring-1 ring-teal-400/40">
                Industry Focus: Logistics &amp; Warehousing
              </span>

              <h1 className="mt-7 max-w-[40rem] text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[3.6rem]">
                Workforce Management for{" "}
                <span className="block text-teal-400">Logistics &amp; Warehousing</span>
              </h1>

              <p className="mt-8 max-w-[29rem] text-base leading-relaxed text-blue-50">
                Gain complete visibility into your warehouse workforce across multiple locations while automating
                attendance, contractor compliance, and shift governance.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-w-48 items-center justify-center gap-3 bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  Request Logistics Audit <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-w-36 justify-center border border-white/60 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Solutions
                </Link>
              </div>

              <div className="mt-8 grid max-w-[34rem] grid-cols-3 border-t border-white/20 pt-8">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-bold tracking-wider text-teal-300">{s.value}</p>
                    <p className="mt-2 text-[0.54rem] font-bold uppercase tracking-[0.24em] text-blue-100">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            </div>
          </div>
        </section>

        {/* ── S2 CONTEXT ── */}
        <section className="border-b border-slate-200 bg-white py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:px-8">
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              <div className="relative mx-auto max-w-md">
                <div className="absolute -bottom-7 -left-7 h-24 w-24 bg-blue-50" aria-hidden />
                <div className="absolute -right-7 -top-7 h-28 w-28 border-r-2 border-t-2 border-teal-300" aria-hidden />
                <div className="relative border border-slate-200 bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                  <Image
                    src="/images/logistics-warehouse-worker.jpg"
                    alt="Warehouse workers managing logistics operations"
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.06 }}
            >
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-blue-600">
                Industry Context
              </p>
              <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight text-slate-900">
                The Logistics Machine Never Sleeps
              </h2>
              <div className="mt-5 h-[3px] w-16 bg-blue-600" />

              <div className="mt-8 max-w-lg space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  Logistics and warehousing operate on a 24/7 cycle where every minute of downtime translates to supply
                  chain latency. Managing thousands of contractors across night shifts and peak seasons using manual logs
                  is no longer viable.
                </p>
                <p>
                  InOps RegX provides the digital infrastructure to transition from fragmented manual oversight to{" "}
                  <strong className="font-bold text-slate-700">Centralised Workforce Governance</strong>, ensuring your
                  enterprise matches your labor capacity.
                </p>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-5 sm:grid-cols-2">
                {contextCheckItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-teal-500 text-teal-600">
                      <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden>
                        <path d="m20 6-11 11-5-5" />
                      </svg>
                    </span>
                    <span className="text-xs font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── S3 PAIN POINTS ── */}
        <section className="bg-[#f4f6f9] py-20">
          <div className="mx-auto max-w-[1100px] px-6">
            <div className="text-center mb-14">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-[#1b52d6] mb-4">
                Operational Vulnerabilities
              </span>
              <h2 className="text-[clamp(1.6rem,3.5vw,2.1rem)] font-extrabold leading-tight tracking-tight text-[#111827] max-w-[600px] mx-auto mb-4">
                Overcoming the Chaos of Scale
              </h2>
              <p className="text-[0.93rem] text-[#5a6a7e] leading-[1.75] max-w-[520px] mx-auto">
                Logistics managers face a unique set of challenges when coordinating distributed workforces across
                multiple zones, shifts, and contractor vendors.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {painPoints.map((card, i) => (
                <div
                  key={card.title}
                  className="group bg-white p-8 border border-[#e4e9f0] transition-all duration-200 hover:border-[#c5d0df] hover:shadow-[0_4px_16px_rgba(27,82,214,0.07)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center bg-[#eef3fb] text-[#1b52d6] mb-5">
                    <PainIcon index={i} />
                  </div>
                  <h3 className="text-[0.92rem] font-bold tracking-[-0.01em] text-[#111827] mb-2.5">{card.title}</h3>
                  <p className="text-[0.82rem] text-[#5a6a7e] leading-[1.72]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── S4 SOLUTION ── */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">

            {/* Top header row */}
            <div className="flex items-start justify-between gap-6 mb-10">
              <div className="max-w-lg">
                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-3">
                  The Enterprise Solution
                </p>
                <h2 className="text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight text-gray-900 mb-4">
                  Intelligent Governance for Modern Logistics
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our modular architecture is purpose-built to digitise the entire contractor lifecycle, from the
                  gatehouse to the loading dock.
                </p>
              </div>
              <div className="flex-shrink-0 mt-1">
                <Link
                  href="/contact"
                  className="inline-block border border-blue-600 text-blue-600 text-xs font-bold uppercase tracking-wide px-5 py-2.5 hover:bg-blue-600 hover:text-white transition-colors whitespace-nowrap"
                >
                  Download Sector Blueprint
                </Link>
              </div>
            </div>

            {/* Middle: features list + image placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-8">

              <motion.div
                className="divide-y divide-gray-100 border-t border-b border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase }}
              >
                {[
                  {
                    title: "Centralized Workforce Management",
                    desc: "A single dashboard providing headcount, attendance, and compliance across all warehouse locations in real time.",
                    icon: (
                      <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <rect x="2" y="3" width="16" height="11" rx="1" />
                        <path d="M6 18h8M10 14v4" />
                        <path d="M5 7h10M5 10h6" />
                      </svg>
                    ),
                  },
                  {
                    title: "Attendance & Shift Control",
                    desc: "Multi-shift biometric attendance with automated handover reports and real-time anomaly alerts to eliminate losses.",
                    icon: (
                      <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <rect x="3" y="4" width="14" height="13" rx="1.5" />
                        <path d="M3 8h14M7 2v4M13 2v4" />
                        <path d="M7 12l2 2 4-4" />
                      </svg>
                    ),
                  },
                  {
                    title: "Conditional Access Governance",
                    desc: "Restrict access to specific zones (dock, cold storage, HVS) based on role, certification, and shift time slot.",
                    icon: (
                      <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M10 2l7 3.5v6c0 4-3 7-7 8.5C7 18.5 3 16 3 11.5V5.5L10 2z" />
                        <path d="M7 10.5l2 2 4-4" />
                      </svg>
                    ),
                  },
                ].map((f) => (
                  <div key={f.title} className="flex gap-5 py-7">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center border border-gray-200">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 mb-1.5">{f.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="w-full aspect-[4/3] overflow-hidden bg-slate-200 relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
              >
                <Image
                  src="/images/logistics-warehouse-cta.jpg"
                  alt="Active forklift operations in warehouse"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <svg className="h-4 w-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm font-semibold text-white">100% Secure</span>
                </div>
              </motion.div>
            </div>

            {/* Bottom: 3 cards — gap-px trick for 1px dividers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
              {[
                {
                  title: "Automated Compliance Monitoring",
                  desc: "Statutory obligations tracked in real time across all sites with pre-emptive non-compliance alerts and documentation.",
                  icon: (
                    <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="4" y="2" width="12" height="16" rx="1.5" />
                      <path d="M7 7h6M7 10h6M7 13h4" />
                    </svg>
                  ),
                },
                {
                  title: "Billing & Invoice Automation",
                  desc: "100% accuracy between attendance data and billing — instantly reconcile contractor invoices against verified gate logs.",
                  icon: (
                    <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="3" y="13" width="4" height="5" rx="0.5" />
                      <rect x="8" y="9" width="4" height="9" rx="0.5" />
                      <rect x="13" y="5" width="4" height="13" rx="0.5" />
                      <path d="M4 9l4-4 4 2 4-5" strokeDasharray="2 1.2" />
                    </svg>
                  ),
                },
                {
                  title: "Multi-Site Analytics",
                  desc: "Actionable insights into turnover rates, shift productivity, and labor cost leakage via high-fidelity dashboards.",
                  icon: (
                    <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <circle cx="10" cy="10" r="3" />
                      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" />
                    </svg>
                  ),
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="group bg-gray-50 p-7 hover:bg-white transition-colors"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.42, ease: smoothEase, delay: Math.min(i * 0.06, 0.18) }}
                >
                  <div className="flex h-10 w-10 items-center justify-center border border-gray-200 bg-white mb-5 group-hover:border-blue-600 transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ── S5 RESULTS ── */}
        <section className="bg-[#06284a] py-24 text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:px-8">

            {/* LEFT */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase }}
            >
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.24em] text-teal-300">
                Strategic Impact
              </p>
              <h2 className="mt-4 max-w-md text-2xl font-bold leading-tight">
                Measurable Excellence for Logistics Leaders
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-blue-100">
                Transform your workforce management into a quantifiable asset. InOps RegX delivers the operational
                insights necessary for supply chain scaling.
              </p>

              {/* 2×2 stat grid */}
              <div className="mt-10 grid w-full grid-cols-2 gap-4">
                {[
                  {
                    value: "360°", label: "Workforce Visibility",
                    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden><circle cx="10" cy="10" r="7" /><path d="M10 3v3M10 14v3M3 10h3M14 10h3" /></svg>,
                  },
                  {
                    value: "+28%", label: "Shift Utilisation",
                    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden><path d="M10 17V4M4 10l6-6 6 6" /></svg>,
                  },
                  {
                    value: "180%", label: "ROI Year One",
                    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden><rect x="3" y="13" width="3" height="5" rx="0.5" /><rect x="8.5" y="9" width="3" height="9" rx="0.5" /><rect x="14" y="5" width="3" height="13" rx="0.5" /></svg>,
                  },
                  {
                    value: "4x", label: "Faster Billing Cycles",
                    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden><circle cx="10" cy="10" r="7" /><polyline points="10,6 10,10 13,12" /></svg>,
                  },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col justify-center gap-3 rounded-sm bg-[#071028] p-6 shadow-sm ring-1 ring-white/5">
                    <div className="text-teal-300">{s.icon}</div>
                    <p className="text-2xl font-extrabold text-white">{s.value}</p>
                    <p className="text-[0.58rem] font-bold uppercase tracking-widest text-blue-200">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Bullets */}
              <ul className="mt-8 space-y-4">
                {[
                  "Accountability: Individual worker performance tracking linked to specific site locations.",
                  "Governance: Uniform policy enforcement across globally distributed logistics hubs.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-white/5 px-4 py-3 text-[0.68rem] leading-relaxed text-blue-50">
                    <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-300" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* RIGHT: image placeholder + floating card */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
            >
              <div className="relative mx-auto max-w-[680px]">
                <Image
                  src="/images/workforce-analytics-dashboard.jpg"
                  alt="Workforce analytics and compliance dashboard"
                  width={900}
                  height={600}
                  className="aspect-[16/9] w-full rounded-sm object-cover shadow-lg"
                />
                <div className="absolute right-4 top-6 w-44 rounded-sm bg-white px-5 py-4 text-slate-900 shadow-2xl">
                  <p className="text-[0.56rem] font-bold uppercase tracking-widest text-slate-400">Global Headcount</p>
                  <p className="mt-1 text-xl font-extrabold text-[#06284a]">14,208</p>
                  <div className="mt-3 h-[2px] w-20 bg-teal-400" />
                  <p className="mt-2 text-[0.52rem] font-bold uppercase tracking-widest text-teal-500">Real Time Active</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── S6 PLATFORM ── */}
        <section className="border-b border-slate-200 bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.24em] text-blue-600">
                Enterprise Architecture
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900">
                Built for Global Supply Chain Integration
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-slate-500">
                InOps RegX acts as the intelligent human governance layer that bridges your WMS/TMS infrastructure
                with the real-time activity of your workforce.
              </p>
            </motion.div>

            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
              {platformCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="border border-slate-200 bg-slate-50 p-8"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.42, ease: smoothEase, delay: Math.min(i * 0.06, 0.18) }}
                >
                  <div className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-blue-600">
                    {card.icon}
                  </div>
                  <h3 className="mt-7 text-sm font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-4 text-[0.68rem] leading-relaxed text-slate-500">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-10 border-t border-slate-200 pt-10">
              {certBadges.map((cert) => (
                <span key={cert} className="text-sm font-extrabold italic text-slate-400">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── S7 CTA BANNER ── */}
        <section className="relative overflow-hidden bg-[#0b69b3] py-16 text-white">
          <Image
            src="/images/logistics-warehouse-ops.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25"
            aria-hidden
          />
          <div className="absolute inset-0 bg-blue-700/80" />

          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12 lg:px-8">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase }}
            >
              <h2 className="max-w-sm text-3xl font-bold leading-tight">
                Secure your logistics workforce today
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-blue-100">
                Join leading 3PL providers and retail giants using InOps RegX to govern their distributed
                warehousing ecosystems.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 lg:col-span-7 lg:justify-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
            >
              <Link
                href="/contact"
                className="inline-flex min-w-56 items-center justify-center bg-white px-8 py-4 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Request Strategy Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-w-48 items-center justify-center border border-white/50 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                View Sector Success Stories
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </MotionConfig>
  );
}

// ─── Pain point icons ─────────────────────────────────────────────────────────

function PainIcon({ index }: { index: number }) {
  const icons = [
    /* 0 — Distributed Workforce */
    <svg key="distributed" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="16" width="10" height="14" rx="1" />
      <rect x="22" y="16" width="10" height="14" rx="1" />
      <rect x="13" y="4" width="10" height="12" rx="1" />
      <path d="M18 16v-4M9 16v-4h18v4" />
    </svg>,
    /* 1 — Multiple Contractors */
    <svg key="contractors" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="13" cy="11" r="5" />
      <circle cx="23" cy="11" r="5" />
      <path d="M4 32c0-5.523 4.03-10 9-10h10c4.97 0 9 4.477 9 10" />
    </svg>,
    /* 2 — Night Shift Governance */
    <svg key="nightshift" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 8a12 12 0 1 0 0 20 10 10 0 0 1 0-20z" />
      <circle cx="28" cy="8" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="32" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="30" cy="4" r="1" fill="currentColor" stroke="none" />
    </svg>,
    /* 3 — Seasonal Temp Spikes */
    <svg key="seasonal" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="5" y="8" width="26" height="22" rx="2" />
      <path d="M5 14h26M12 4v8M24 4v8" />
      <polyline points="10,24 16,18 22,22 28,14" />
    </svg>,
    /* 4 — Attendance Fraud */
    <svg key="fraud" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="18" cy="11" r="6" />
      <path d="M6 32c0-6.627 5.373-12 12-12s12 5.373 12 12" />
      <line x1="28" y1="20" x2="32" y2="16" />
      <line x1="32" y1="20" x2="28" y2="16" />
    </svg>,
    /* 5 — Access Control Lapses */
    <svg key="access" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="8" y="16" width="20" height="16" rx="2" />
      <path d="M12 16v-5a6 6 0 0 1 12 0v5" />
      <circle cx="18" cy="24" r="2.5" />
      <line x1="18" y1="26.5" x2="18" y2="29" />
    </svg>,
  ];
  return icons[index] ?? null;
}
