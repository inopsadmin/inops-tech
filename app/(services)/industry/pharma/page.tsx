"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.15 };

// ─── Data ────────────────────────────────────────────────────────────────────

const heroStats = [
  { value: "100%", label: "Compliance" },
  { value: "0%", label: "Leakage" },
  { value: "Audit", label: "Ready Always" },
];

const contextCheckItems = [
  "Strict Compliance Adherence",
  "Automated Training Validation",
  "Cleanroom Access Logs",
  "Instant Audit Reporting",
];

const painPoints = [
  {
    title: "Compliance",
    desc: "Difficulties in enforcing and documenting hygiene and process standards for temporary staff.",
  },
  {
    title: "Workforce Verification",
    desc: "Inability to instantly verify technical certifications and specialised lab training at the gate.",
  },
  {
    title: "Contractor Documentation",
    desc: "Fragmented KYC and medical records across multiple vendors causing onboarding delays.",
  },
  {
    title: "Audit Readiness",
    desc: "Hours of manual data gathering required to produce workforce trails during surprise FDA/EMA inspections.",
  },
  {
    title: "Controlled Area Access",
    desc: "Unauthorized personnel entering high-risk bio-safety levels or sterile formulation zones.",
  },
  {
    title: "Temp Workforce Flux",
    desc: "Managing high turnover rates while maintaining 100% compliance during seasonal production spikes.",
  },
];

const platformCards = [
  {
    title: "Compliance Engine",
    desc: "Pre-built compliance rules and workflows designed for pharmaceutical and life sciences safety standards.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Immutable Audit Trails",
    desc: "Every compliance event and worker action cryptographically secured and permanently accessible for regulatory audit.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Deep ERP Integration",
    desc: "Connectors for SAP S/4HANA, Oracle, and specialised Pharma MES for seamless data flow.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const certBadges = ["ISO 27001", "21 CFR Part 11", "GDPR Compliant"];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PharmaIndustryPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-gray-900">

        {/* ── S1 HERO ── */}
        <section className="relative min-h-[540px] overflow-hidden bg-slate-100 text-white">
          <Image
            src="/images/pharma-manufacturing-hero.jpg"
            alt="Pharmaceutical manufacturing floor"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_50%]"
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
                Sector: Pharmaceuticals &amp; Life Sciences
              </span>

              <h1 className="mt-7 max-w-[40rem] text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[3.6rem]">
                Contract Labour Management for{" "}
                <span className="block text-teal-400">Pharmaceutical Manufacturing</span>
              </h1>

              <p className="mt-8 max-w-[29rem] text-base leading-relaxed text-blue-50">
                Ensure only qualified, compliant, and authorized workers enter regulated manufacturing
                environments. Maintain standards with automated workforce validation.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-w-48 items-center justify-center gap-3 bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  Request Compliance Audit <span aria-hidden>→</span>
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
                    src="/images/pharma-lab-tablet-worker.jpg"
                    alt="Pharmaceutical workforce compliance and biometric access"
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
                Zero-Tolerance Governance for Life Sciences
              </h2>
              <div className="mt-5 h-[3px] w-16 bg-blue-600" />

              <div className="mt-8 max-w-lg space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  In pharmaceutical manufacturing, Contract Labour Management isn&rsquo;t just about
                  attendance — it&rsquo;s a critical component of safety and product integrity.
                  Regulated environments demand that every individual on the shop floor possesses
                  verified qualifications and training.
                </p>
                <p>
                  InOps digitises the{" "}
                  <strong className="font-bold text-slate-700">Validation Lifecycle</strong>, ensuring
                  that only personnel with current medical clearances, certifications, and
                  specialised area training can cross the threshold into cleanrooms or high-potency labs.
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
                Compliance Risks
              </span>
              <h2 className="text-[clamp(1.6rem,3.5vw,2.1rem)] font-extrabold leading-tight tracking-tight text-[#111827] max-w-[600px] mx-auto mb-4">
                Navigating the Complexity of Pharmaceutical Labor
              </h2>
              <p className="text-[0.93rem] text-[#5a6a7e] leading-[1.75] max-w-[520px] mx-auto">
                Manual contractor management creates invisible gaps that can lead to catastrophic
                regulatory failures and production shutdowns.
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
                  Intelligent Governance for Sterile Environments
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  InOps provides a modular, high-trust architecture designed to digitise the
                  entire contractor lifecycle, specifically mapped to life sciences regulatory demands.
                </p>
              </div>
              <div className="flex-shrink-0 mt-1">
                <Link
                  href="/contact"
                  className="inline-block border border-blue-600 text-blue-600 text-xs font-bold uppercase tracking-wide px-5 py-2.5 hover:bg-blue-600 hover:text-white transition-colors whitespace-nowrap"
                >
                  Download Pharma Blueprint
                </Link>
              </div>
            </div>

            {/* Middle: features list + image */}
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
                    title: "Compliance-Driven Onboarding",
                    desc: "Automated verification of medical fitness, training, and safety inductions before any ID issuance.",
                    icon: (
                      <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <circle cx="10" cy="7" r="3.5" />
                        <path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" />
                        <path d="M15 4l1.5 1.5 3-3" strokeWidth={2} />
                      </svg>
                    ),
                  },
                  {
                    title: "Controlled Facility Access",
                    desc: "Biometric gates synchronized with area-specific permits (Sterile, R&D, Packaging) to prevent cross-contamination.",
                    icon: (
                      <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M10 2l7 3.5v6c0 4-3 7-7 8.5C7 18.5 3 16 3 11.5V5.5L10 2z" />
                        <path d="M7 10.5l2 2 4-4" />
                      </svg>
                    ),
                  },
                  {
                    title: "Full Workforce Traceability",
                    desc: "Granular movement logs providing a complete historical trail of who was in what zone at any given second.",
                    icon: (
                      <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <circle cx="10" cy="10" r="7" />
                        <path d="M10 6v4l3 2" />
                      </svg>
                    ),
                  },
                  {
                    title: "Attendance Automation",
                    desc: "Real-time muster roll generation that eliminates 'ghost workers' and ensures site safety during emergencies.",
                    icon: (
                      <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <rect x="3" y="4" width="14" height="13" rx="1.5" />
                        <path d="M3 8h14M7 2v4M13 2v4" />
                        <path d="M7 12l2 2 4-4" />
                      </svg>
                    ),
                  },
                  {
                    title: "Active Compliance Monitoring",
                    desc: "Real-time dashboards tracking vendor performance and statutory payment adherence across the supply chain.",
                    icon: (
                      <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <rect x="3" y="13" width="4" height="5" rx="0.5" />
                        <rect x="8" y="9" width="4" height="9" rx="0.5" />
                        <rect x="13" y="5" width="4" height="13" rx="0.5" />
                        <path d="M4 9l4-4 4 2 4-5" strokeDasharray="2 1.2" />
                      </svg>
                    ),
                  },
                ].map((f) => (
                  <div key={f.title} className="flex gap-5 py-6">
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
                  src="/images/pharma-cleanroom-operator.jpg"
                  alt="Biometric access control for pharmaceutical cleanroom"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#06284a]/90 px-5 py-3 backdrop-blur-sm ring-1 ring-white/10">
                  <p className="text-[0.56rem] font-bold uppercase tracking-widest text-slate-300">Compliance Rating</p>
                  <p className="text-lg font-extrabold text-teal-300">100.0% Validated</p>
                </div>
              </motion.div>
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
                Measurable Impact
              </p>
              <h2 className="mt-4 max-w-md text-2xl font-bold leading-tight">
                Strategic Value for Pharma Operations
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-blue-100">
                Moving beyond manual logs into digital governance transforms workforce management
                into an audit-ready asset.
              </p>

              {/* 2×2 stat grid */}
              <div className="mt-10 grid w-full grid-cols-2 gap-4">
                {[
                  {
                    value: "Instant", label: "Audit Readiness",
                    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden><circle cx="10" cy="10" r="7" /><path d="M10 6v4l2.5 1.5" /></svg>,
                  },
                  {
                    value: "100%", label: "Compliance Uplift",
                    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden><path d="M10 2l7 3.5v6c0 4-3 7-7 8.5C7 18.5 3 16 3 11.5V5.5L10 2z" /><path d="M7 10.5l2 2 4-4" /></svg>,
                  },
                  {
                    value: "3x", label: "Onboarding Speed",
                    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden><path d="M10 17V4M4 10l6-6 6 6" /></svg>,
                  },
                  {
                    value: "85%", label: "Manual Data Reduction",
                    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden><circle cx="10" cy="7" r="3.5" /><path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" /></svg>,
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
                  "Facility Integrity: Eradicate the risk of uncertified personnel entering sterile manufacturing stations.",
                  "Operational Speed: Onboard critical technical contractors in hours instead of days without skipping a single check.",
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

            {/* RIGHT: image + floating card */}
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
                  alt="Pharma workforce compliance dashboard"
                  width={900}
                  height={600}
                  className="aspect-[16/9] w-full rounded-sm object-cover shadow-lg"
                />
                <div className="absolute right-4 top-6 w-44 rounded-sm bg-white px-5 py-4 text-slate-900 shadow-2xl">
                  <p className="text-[0.56rem] font-bold uppercase tracking-widest text-slate-400">Certified Personnel</p>
                  <p className="mt-1 text-xl font-extrabold text-[#06284a]">4,812</p>
                  <div className="mt-3 h-[2px] w-20 bg-teal-400" />
                  <p className="mt-2 text-[0.52rem] font-bold uppercase tracking-widest text-teal-500">Medical Validated</p>
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
                Technical Standards
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900">
                Enterprise Infrastructure for Regulated Environments
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-slate-500">
                InOps acts as the intelligent human governance layer that bridges your LIMS and ERP
                systems with real-time floor activity.
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
            src="/images/pharma-cleanroom-cta.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-20"
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
                Secure your pharmaceutical labor supply chain
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-blue-100">
                Join leading life sciences manufacturers using InOps to enforce 100% compliance
                across their distributed workforce.
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
                View Success Stories
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
    /* 0 — GMP Compliance */
    <svg key="gmp" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 4l12 5v10c0 7.5-5 13-12 15C11 32 6 26.5 6 19V9l12-5z" />
      <path d="M13 19l3.5 3.5L24 14" />
    </svg>,
    /* 1 — Workforce Verification */
    <svg key="verify" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="15" cy="12" r="6" />
      <path d="M5 32c0-5.523 4.477-10 10-10h2" />
      <path d="M24 22l2 2 5-5" />
    </svg>,
    /* 2 — Contractor Documentation */
    <svg key="docs" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="8" y="4" width="20" height="28" rx="2" />
      <line x1="13" y1="12" x2="23" y2="12" />
      <line x1="13" y1="18" x2="23" y2="18" />
      <line x1="13" y1="24" x2="19" y2="24" />
    </svg>,
    /* 3 — Audit Readiness */
    <svg key="audit" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="16" cy="16" r="10" />
      <path d="M24 24l6 6" />
      <path d="M12 16l3 3 5-5" />
    </svg>,
    /* 4 — Controlled Area Access */
    <svg key="access" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="8" y="16" width="20" height="16" rx="2" />
      <path d="M12 16v-5a6 6 0 0 1 12 0v5" />
      <circle cx="18" cy="24" r="2.5" />
      <line x1="18" y1="26.5" x2="18" y2="29" />
    </svg>,
    /* 5 — Temp Workforce Flux */
    <svg key="flux" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="13" cy="11" r="5" />
      <circle cx="23" cy="11" r="5" />
      <path d="M4 32c0-5.523 4.03-10 9-10h10c4.97 0 9 4.477 9 10" />
      <polyline points="26,6 29,9 26,12" />
    </svg>,
  ];
  return icons[index] ?? null;
}
