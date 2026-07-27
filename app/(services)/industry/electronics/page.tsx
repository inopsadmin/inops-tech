"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.15 };

// ─── Data ────────────────────────────────────────────────────────────────────

const heroStats = [
  { value: "95%", label: "ESD Compliance" },
  { value: "0%", label: "ID Substitution" },
  { value: "2Hr", label: "Onboarding TAT" },
];

const contextCheckItems = [
  "Rapid Batch Onboarding",
  "Cleanroom Entry Logs",
  "ESD Training Verification",
  "Vendor Compliance Scores",
];

const painPoints = [
  {
    title: "High Seasonal Attrition",
    desc: "Difficulties in maintaining a compliant workforce during peak smartphone and consumer electronics production cycles.",
  },
  {
    title: "Cleanroom Restrictions",
    desc: "Security lapses allowing unverified or untrained personnel into sensitive Class 100/1000 manufacturing environments.",
  },
  {
    title: "Temp Workforce Bloat",
    desc: "Excessive administrative overhead in managing thousands of temporary ID cards and biometric profiles manually.",
  },
  {
    title: "Shift Start Latency",
    desc: "Massive queues at factory gates during shift changes impacting JIT assembly schedules and total productive maintenance (TPM).",
  },
  {
    title: "Statutory Blind Spots",
    desc: "Failure to track real-time PF, ESI and labor law compliance for transient contractor populations across multiple vendors.",
  },
  {
    title: "Skill Mismatch Risks",
    desc: "Deploying contractors to precision soldering or testing stations without verified technical certifications.",
  },
];

const solutionListFeatures = [
  {
    title: "Digital Contractor Onboarding",
    desc: "KYC and document verification in minutes. Automated background checks and induction training integrated into the flow.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Precision Access Control",
    desc: "Biometric and Facial Recognition gates that verify station-specific skills and medical fitness before allowing cleanroom entry.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Attendance Automation",
    desc: "Zero-touch muster roll generation. Eliminate manual logbooks and 'ghost workers' through real-time gate-to-floor sync.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const solutionCardFeatures = [
  {
    title: "Compliance Tracking",
    desc: "Real-time auditing of labor law adherence, minimum wage, and statutory payments across all tier-1 and tier-2 vendors.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Workforce Analytics",
    desc: "Actionable insights into turnover rates, shift productivity, and labor cost leverage via high-fidelity dashboards.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "ERP & MES Integration",
    desc: "Seamless data exchange with SAP, Oracle, and Manufacturing Execution Systems for holistic plant governance.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const resultStats = [
  { value: "+40%", label: "Deployment Speed" },
  { value: "65%", label: "Admin Reduction" },
  { value: "100%", label: "Compliance Score" },
  { value: "99.9%", label: "Billing Accuracy" },
];

const resultBullets = [
  "Real-time Audit Trail: Every worker entry and document verification is timestamped and ready for inspection.",
  "Seamless Reconciliation: Automatically verify vendor invoices against verified attendance logs.",
];

const platformCards = [
  {
    title: "Hardware Agnostic",
    desc: "Support for existing biometric readers, facial recognition terminals, and mobile-based field verification tools.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Centralized KYC Vault",
    desc: "Unified repository for worker documentation, ensuring consistent compliance standards across all global sites.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "High-Availability Sync",
    desc: "Real-time data synchronization ensuring gate operations continue even during network interruptions.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden>
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const certBadges = [ "SOC2 Type II", "ISO 27001"];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ElectronicsIndustryPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-gray-900">

        {/* ── S1 HERO ── */}
        <section className="relative min-h-[540px] overflow-hidden bg-slate-100 text-white">
          <Image
            src="/images/electronics-cleanroom-workers.jpg"
            alt="Electronics cleanroom manufacturing floor"
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
                Industry Focus: Electronics &amp; EMS
              </span>

              <h1 className="mt-7 max-w-[40rem] text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[3.6rem]">
                Contract Labour Management for{" "}
                <span className="block text-teal-400">Electronics Manufacturing</span>
              </h1>

              <p className="mt-8 max-w-[29rem] text-base leading-relaxed text-blue-50">
                Precision Contract Labour Management for high-turnover environments. Digitize onboarding, enforce cleanroom
                access, and automate compliance to match the speed of global electronics supply chains.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-w-48 items-center justify-center gap-3 bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  Request EMS Audit <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-w-36 justify-center border border-white/60 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  View Solutions
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
                    src="/images/electronics-fingerprint-scan.jpg"
                    alt="Biometric fingerprint access control for cleanroom entry"
                    width={1024}
                    height={682}
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
                Market Context
              </p>
              <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight text-slate-900">
                Navigating High-Volume EMS Turnover
              </h2>
              <div className="mt-5 h-[3px] w-16 bg-blue-600" />

              <div className="mt-8 max-w-lg space-y-6 text-base leading-relaxed text-slate-600">
                <p>
                  The Electronics Manufacturing Services (EMS) sector faces unique labor challenges: massive seasonal
                  spikes, rapid temporary workforce shifts, and the critical need for technical cleanroom discipline.
                </p>
                <p>
                  Iddion RegX eliminates the admin friction of high-volume hiring. We provide a single source of truth for{" "}
                  <strong className="font-bold text-slate-700">Turnover Analytics, Compliance Monitoring, and Secure Zone Access</strong>,
                  ensuring your lines never stop.
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
            {/* Header */}
            <div className="text-center mb-14">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-[#1b52d6] mb-4">
                Industry Friction
              </span>
              <h2 className="text-[clamp(1.6rem,3.5vw,2.1rem)] font-extrabold leading-tight tracking-tight text-[#111827] max-w-[600px] mx-auto mb-4">
                Overcoming the Complexity of Scaled Electronics Labor
              </h2>
              <p className="text-[0.93rem] text-[#5a6a7e] leading-[1.75] max-w-[520px] mx-auto">
                Fragmented data and manual gate-checks lead to assembly bottlenecks and regulatory liability.
                RegX addresses the specific vulnerabilities of the high-tech shop floor.
              </p>
            </div>

            {/* Cards */}
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
                  The RegX Framework
                </p>
                <h2 className="text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight text-gray-900 mb-4">
                  Intelligent Governance for the Precision Shop Floor
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our modular suite is purpose-built to integrate with MES and ERP systems, digitizing every worker
                  touchpoint from the gate to the assembly station.
                </p>
              </div>
              <div className="flex-shrink-0 mt-1">
                <Link
                  href="/contact"
                  className="inline-block border border-blue-600 text-blue-600 text-xs font-bold uppercase tracking-wide px-5 py-2.5 hover:bg-blue-600 hover:text-white transition-colors whitespace-nowrap"
                >
                  Request Technical Blueprint
                </Link>
              </div>
            </div>

            {/* Middle: features list + image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-8">

              {/* Left: stacked feature rows */}
              <motion.div
                className="divide-y divide-gray-100 border-t border-b border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase }}
              >
                {[
                  {
                    title: "Digital Contractor Onboarding",
                    desc: "KYC and document verification in minutes. Automated background checks and induction training integrated into the flow.",
                    icon: (
                      <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <circle cx="10" cy="7" r="3.5" />
                        <path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" />
                        <path d="M15 4l1.5 1.5 3-3" strokeWidth={2} />
                      </svg>
                    ),
                  },
                  {
                    title: "Precision Access Control",
                    desc: "Biometric and Facial Recognition gates that verify station-specific skills and medical fitness before allowing cleanroom entry.",
                    icon: (
                      <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M10 2l7 3.5v6c0 4-3 7-7 8.5-4-1.5-7-4.5-7-8.5V5.5L10 2z" />
                        <path d="M7 10.5l2 2 4-4" />
                      </svg>
                    ),
                  },
                  {
                    title: "Attendance Automation",
                    desc: "Zero-touch muster roll generation. Eliminate manual logbooks and 'ghost workers' through real-time gate-to-floor sync.",
                    icon: (
                      <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <rect x="3" y="4" width="14" height="13" rx="1.5" />
                        <path d="M3 8h14M7 2v4M13 2v4" />
                        <path d="M7 12l2 2 4-4" />
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

              {/* Right: image */}
              <motion.div
                className="w-full aspect-[4/3] overflow-hidden bg-slate-200 relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
              >
                <Image
                  src="/images/electronics-factory-workers-a.jpg"
                  alt="Electronics assembly line workers"
                  fill
                  className="object-cover object-center"
                />
              </motion.div>
            </div>

            {/* Bottom: 3 cards — gap-px trick for 1px dividers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
              {[
                {
                  title: "Compliance Tracking",
                  desc: "Real-time auditing of labor law adherence, minimum wage, and statutory payments across all tier-1 and tier-2 vendors.",
                  icon: (
                    <svg className="text-blue-600" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="4" y="2" width="12" height="16" rx="1.5" />
                      <path d="M7 7h6M7 10h6M7 13h4" />
                    </svg>
                  ),
                },
                {
                  title: "Workforce Analytics",
                  desc: "Actionable insights into turnover rates, shift productivity, and labor cost leakage via high-fidelity dashboards.",
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
                  title: "ERP & MES Integration",
                  desc: "Seamless data exchange with SAP, Oracle, and Manufacturing Execution Systems for holistic plant governance.",
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
                Proven ROI
              </p>
              <h2 className="mt-4 max-w-md text-2xl font-bold leading-tight">
                Measurable Excellence for Operational Leadership
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-blue-100">
                Transform your labor management from an administrative burden into a data-driven competitive edge.
              </p>

              {/* 2×2 stat grid */}
              <div className="mt-10 grid w-full grid-cols-2 gap-4">
                {[
                  {
                    value: "+40%", label: "Deployment Speed",
                    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden><path d="M10 17V4M4 10l6-6 6 6" /></svg>,
                  },
                  {
                    value: "65%", label: "Admin Reduction",
                    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden><circle cx="10" cy="7" r="3.5" /><path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" /></svg>,
                  },
                  {
                    value: "100%", label: "Compliance Score",
                    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden><path d="M10 2l7 3.5v6c0 4-3 7-7 8.5C7 18.5 3 16 3 11.5V5.5L10 2z" /><path d="M7 10.5l2 2 4-4" /></svg>,
                  },
                  {
                    value: "99.9%", label: "Billing Accuracy",
                    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden><rect x="3" y="4" width="14" height="13" rx="1.5" /><path d="M3 8h14M7 2v4M13 2v4" /><path d="M7 12l2 2 4-4" /></svg>,
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
                  "Real-time Audit Trail: Every worker entry and document verification is timestamped and ready for inspection.",
                  "Seamless Reconciliation: Automatically verify vendor invoices against verified attendance logs.",
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
                  alt="Workforce analytics and compliance dashboard"
                  width={900}
                  height={600}
                  className="aspect-[16/9] w-full rounded-sm object-cover shadow-lg"
                />
                <div className="absolute right-4 top-6 w-44 rounded-sm bg-white px-5 py-4 text-slate-900 shadow-2xl">
                  <p className="text-[0.56rem] font-bold uppercase tracking-widest text-slate-400">Compliance Rating</p>
                  <p className="mt-1 text-xl font-extrabold text-[#06284a]">100.0%</p>
                  <div className="mt-3 h-[2px] w-20 bg-teal-400" />
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── S6 PLATFORM ── */}
        <section className="border-b border-slate-200 bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Centered header */}
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.24em] text-blue-600">
                Enterprise Grade
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900">
                Built for the Rigors of Global EMS Operations
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-slate-500">
                Iddion RegX provides a secure, scalable, and audit-ready layer that connects your distributed factory
                floors to central corporate governance.
              </p>
            </motion.div>

            {/* Cards — sharp, no radius */}
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

            {/* Cert badges row */}
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
            src="/images/electronics-circuit-board.jpg"
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
                Secure your labor supply chain today
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-blue-100">
                Join leading electronics OEMs using Iddion RegX to synchronize their workforce with
                high-precision production demands.
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
                Book a Strategy Demo
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
    /* 0 — High Seasonal Attrition */
    <svg key="attrition" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="18" cy="11" r="6" />
      <path d="M6 32c0-6.627 5.373-12 12-12s12 5.373 12 12" />
      <line x1="28" y1="20" x2="32" y2="16" />
      <line x1="32" y1="20" x2="28" y2="16" />
    </svg>,
    /* 1 — Cleanroom Restrictions */
    <svg key="cleanroom" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 4l12 5v10c0 7.5-5 13-12 15C11 32 6 26.5 6 19V9l12-5z" />
      <path d="M13 19l3.5 3.5L24 14" />
    </svg>,
    /* 2 — Temp Workforce Bloat */
    <svg key="bloat" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="13" cy="11" r="5" />
      <circle cx="23" cy="11" r="5" />
      <path d="M4 32c0-5.523 4.03-10 9-10h10c4.97 0 9 4.477 9 10" />
    </svg>,
    /* 3 — Shift Start Latency */
    <svg key="latency" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="18" cy="18" r="12" />
      <polyline points="18,10 18,18 23,23" />
    </svg>,
    /* 4 — Statutory Blind Spots */
    <svg key="statutory" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="8" y="4" width="20" height="28" rx="2" />
      <line x1="13" y1="12" x2="23" y2="12" />
      <line x1="13" y1="18" x2="23" y2="18" />
      <line x1="13" y1="24" x2="19" y2="24" />
      <circle cx="25" cy="27" r="4" fill="none" />
      <line x1="25" y1="25.5" x2="25" y2="27.8" strokeWidth={1.8} />
      <circle cx="25" cy="29.2" r="0.7" fill="currentColor" stroke="none" />
    </svg>,
    /* 5 — Skill Mismatch Risks */
    <svg key="skill" className="h-[22px] w-[22px]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="13" cy="13" r="5" />
      <path d="M4 30c0-4.97 4.03-9 9-9h2" />
      <path d="M21 20l2 2 6-6" />
      <path d="M21 28l2 2 6-6" />
    </svg>,
  ];
  return icons[index] ?? null;
}
