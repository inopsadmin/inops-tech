"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FourPillarsSection from "@/app/components/FourPillarsSection";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const labourHeroMetrics = [
  { value: "1L+", label: "Workers verified" },
  { value: "100%", label: "Audit ready" },
  { value: "3000+", label: "Active devices" },
] as const;

const comprehensiveHrCards = [
  {
    icon: "lifecycle" as const,
    title: "Employee Lifecycle Management",
    description:
      "Automate the journey from digital onboarding and background verification to shift assignments and final settlement. Reduce manual intervention by up to 80%.",
  },
  {
    icon: "document" as const,
    title: "Document & Compliance Tracking",
    description:
      "A centralized digital locker for all statutory documents. Automatically track expiry dates for licenses, medical certificates, and police clearances with instant alerts.",
  },
  {
    icon: "sync" as const,
    title: "Payroll & ERP Integration",
    description:
      "Seamless bi-directional sync with SAP, Oracle, and Tally. Eliminate manual data entry and ensure that payroll is based on verified attendance data.",
  },
  {
    icon: "shield" as const,
    title: "Role-Based Access Control",
    description:
      "Enterprise-grade security that ensures data privacy. Define granular permissions for contractors, site managers, HR admins, and finance teams.",
  },
] as const;

const hireToExitSteps = [
  {
    icon: "onboarding" as const,
    title: "Onboarding",
    description: "Digital profile creation with biometric registration.",
  },
  {
    icon: "verification" as const,
    title: "Verification",
    description: "Automated document check and KYC validation.",
  },
  {
    icon: "activation" as const,
    title: "Activation",
    description: "Role mapping and site access granting.",
  },
  {
    icon: "settlement" as const,
    title: "Settlement",
    description: "Final pay calculation and clearance processing.",
  },
  {
    icon: "exit" as const,
    title: "Exit",
    description: "Digital de-boarding and access revocation.",
  },
] as const;

const integrationConnectBullets = [
  "RESTful APIs for custom platform connectivity",
  "Direct database connectors for legacy systems",
  "Automated CSV/Excel export for manual workflows",
  "Real-time webhooks for instant notifications",
] as const;

const integrationPartners = [
  { name: "SAP ERP", icon: "stack" as const },
  { name: "Oracle", icon: "database" as const },
  { name: "MS Dynamics", icon: "layers" as const },
  { name: "Workday", icon: "person" as const },
  { name: "Biometric Hub", icon: "shield" as const },
  { name: "Payroll Engine", icon: "wallet" as const },
] as const;

function ComprehensiveHrCardIcon({ name }: { name: (typeof comprehensiveHrCards)[number]["icon"] }) {
  const c = "h-6 w-6";
  if (name === "lifecycle") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  }
  if (name === "document") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  }
  if (name === "sync") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function HireToExitStepIcon({ name }: { name: (typeof hireToExitSteps)[number]["icon"] }) {
  const c = "h-6 w-6";
  if (name === "onboarding") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    );
  }
  if (name === "verification") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    );
  }
  if (name === "activation") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    );
  }
  if (name === "settlement") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  );
}

function IntegrationPartnerIcon({ name }: { name: (typeof integrationPartners)[number]["icon"] }) {
  const c = "h-5 w-5 text-slate-500";
  if (name === "stack") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    );
  }
  if (name === "database") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    );
  }
  if (name === "layers") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    );
  }
  if (name === "person") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
}

/** Abstract dashboard + compliance card — matches HRIS-style hero reference */
function LabourHeroDashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none" aria-hidden>
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xl shadow-slate-300/40 sm:p-6"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: smoothEase, delay: 0.12 }}
      >
        <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <div className="ml-3 h-7 flex-1 max-w-[220px] rounded-md bg-slate-100" />
        </div>
        <div className="space-y-4 pb-16 sm:pb-20">
          <div className="h-3 w-2/5 max-w-[180px] rounded bg-slate-100" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-5 sm:gap-4">
            <div className="space-y-2 rounded-xl bg-slate-50 p-4 sm:col-span-3">
              <div className="flex h-28 items-end justify-between gap-2 rounded-lg bg-white px-3 pb-2 pt-3 ring-1 ring-slate-100 sm:h-32">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="w-full max-w-[14%] rounded-t bg-gradient-to-t from-blue-100 to-blue-200/90"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <div className="h-2 flex-1 rounded-full bg-slate-200" />
                <div className="h-2 flex-1 rounded-full bg-slate-200" />
              </div>
            </div>
            <div className="space-y-2 sm:col-span-2">
              {[72, 56, 64, 48].map((w, i) => (
                <div key={i} className="h-9 rounded-lg bg-slate-100" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
        </div>
        <motion.div
          className="absolute bottom-4 left-4 right-4 max-w-[280px] rounded-xl border border-slate-200 bg-white p-4 shadow-lg sm:bottom-6 sm:left-6"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: smoothEase, delay: 0.35 }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Compliance status</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <p className="text-sm font-bold text-slate-900">Verified & Active</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function LabourManagementPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero — HRIS-style: pill, headline, CTAs, metrics, dashboard preview */}
        <motion.section
          className="border-b border-slate-100 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-12 lg:pt-12">
            <motion.nav
              className="text-sm text-slate-500"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: smoothEase, delay: 0.04 }}
              aria-label="Breadcrumb"
            >
              {/* <Link href="/" className="text-slate-600 transition-colors hover:text-blue-600">
                Home
              </Link>
              <span className="mx-2 text-slate-400">/</span>
              <span className="font-medium text-slate-900">Labour Management</span> */}
            </motion.nav>

            <div className="grid grid-cols-1 items-center gap-10 py-10 lg:grid-cols-2 lg:gap-14 lg:py-14">
              <div>
                <motion.span
                  className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: smoothEase, delay: 0.06 }}
                >
                  HR Information System (HRIS)
                </motion.span>
                <motion.h1
                  className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
                >
                  The Digital Core for Your{" "}
                  <span className="text-blue-600">Global Workforce</span>
                </motion.h1>
                <motion.p
                  className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.14 }}
                >
                  Centralize every employee record, automate complex workflows, and maintain full compliance across your
                  contract and permanent workforce from gate to payroll.
                </motion.p>
                <motion.div
                  className="mt-8 flex flex-wrap items-center gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:bg-blue-700"
                  >
                    Request a Demo
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Talk to an Expert
                  </Link>
                </motion.div>

                <motion.div
                  className="mt-10 flex flex-col gap-6 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:gap-0 sm:divide-x sm:divide-slate-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.22 }}
                >
                  {labourHeroMetrics.map((m, i) => (
                    <div
                      key={m.label}
                      className={
                        i > 0 ? "max-sm:border-t max-sm:border-slate-100 max-sm:pt-6 sm:px-8" : "sm:pr-8"
                      }
                    >
                      <p className="text-2xl font-bold tabular-nums text-slate-900 sm:text-[1.65rem]">{m.value}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{m.label}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              <LabourHeroDashboardPreview />
            </div>
          </div>
        </motion.section>

        {/* Comprehensive HR Management — feature grid */}
        <section
          className="border-t border-slate-200/80 bg-white py-14 lg:py-16"
          aria-labelledby="comprehensive-hr-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2
                id="comprehensive-hr-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
              >
                Comprehensive HR Management
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Built for the unique complexities of large-scale contract labor and enterprise workforce operations.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
              {comprehensiveHrCards.map((card, i) => (
                <motion.article
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-indigo-200 hover:shadow-md"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(i * 0.06, 0.18) }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-indigo-600 ring-1 ring-violet-200/80">
                    <ComprehensiveHrCardIcon name={card.icon} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{card.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* The Hire-to-Exit Workflow — horizontal timeline */}
        <section
          className="border-t border-slate-200/80 bg-slate-50/80 py-14 lg:py-16"
          aria-labelledby="hire-exit-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2
                id="hire-exit-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
              >
                The Hire-to-Exit Workflow
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                A streamlined, automated process that ensures every worker is compliant before they step onto your site.
              </p>
            </motion.div>

            <div className="relative mx-auto mt-14 max-w-6xl">
              <div
                className="pointer-events-none absolute left-[8%] right-[8%] top-7 hidden h-px bg-indigo-200 lg:block"
                aria-hidden
              />
              <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-5 lg:gap-4">
                {hireToExitSteps.map((step, i) => (
                  <motion.li
                    key={step.title}
                    className="relative flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(i * 0.07, 0.28) }}
                  >
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-indigo-100 bg-white text-indigo-600 shadow-sm ring-4 ring-slate-50/80">
                      <HireToExitStepIcon name={step.icon} />
                    </div>
                    <h3 className="mt-5 text-base font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* <FourPillarsSection /> */}

        {/* Integrations — existing stack */}
        <section
          className="border-t border-slate-200/80 bg-white py-14 lg:py-16"
          aria-labelledby="integrations-stack-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <h2
                  id="integrations-stack-heading"
                  className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-snug"
                >
                  Fits Seamlessly into Your Existing Stack
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  InOps doesn&apos;t operate in a vacuum. Our HRIS platform acts as a bridge between your ground-level
                  operations and your corporate enterprise resource planning (ERP) systems.
                </p>
                <ul className="mt-8 space-y-4">
                  {integrationConnectBullets.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm leading-relaxed text-slate-700 sm:text-base">{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  View Integration Directory
                  <span aria-hidden>→</span>
                </Link>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
              >
                {integrationPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-slate-300 hover:shadow-md sm:px-4 sm:py-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                      <IntegrationPartnerIcon name={partner.icon} />
                    </span>
                    <span className="text-sm font-semibold text-slate-900">{partner.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA — workforce operations */}
        <section className="mt-10 border-t border-slate-200/80 bg-slate-50/80 px-4 pb-16 pt-2 sm:px-6 lg:px-12 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-lg shadow-blue-900/10 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase }}
            >
              <div
                className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-blue-800/35"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-blue-500/40"
                aria-hidden
              />
              <div className="relative z-10 mx-auto max-w-3xl">
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2rem]">
                  Ready to transform your workforce operations?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
                  Join 25+ enterprises who have centralized their contractor management and saved up to 15% in
                  operational costs.
                </p>
                <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-slate-50"
                  >
                    Request a Free Demo
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-slate-50"
                  >
                    Contact Sales Team
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
