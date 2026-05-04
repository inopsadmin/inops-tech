"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const labourHeroRightBackground = "/WhatsApp Image 2026-05-04 at 12.24.11 PM.jpeg";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const painPointCards = [
  {
    icon: "database" as const,
    title: "Data Silos",
    description: "Employee records scattered across dozens of spreadsheets and old systems.",
  },
  {
    icon: "alert" as const,
    title: "Payroll Leakage",
    description: "Manual attendance leads to significant overpayment and clerical errors.",
  },
  {
    icon: "grid" as const,
    title: "No Visibility",
    description: "Lack of real-time reporting makes strategic workforce decisions impossible.",
  },
  {
    icon: "shieldCheck" as const,
    title: "Compliance Risk",
    description: "Staying up-to-date with changing labor laws and tax regulations is a nightmare.",
  },
] as const;

const platformControlCards = [
  {
    icon: "userPlus" as const,
    title: "Employee Data Management",
    description:
      "Centralized database acting as a single source of truth for all HR profiles, documents, and historical data.",
  },
  {
    icon: "clock" as const,
    title: "Time & Attendance",
    description:
      "Biometric integration and mobile clock-in for tracking working hours, shifts, and leave in real time.",
  },
  {
    icon: "creditCard" as const,
    title: "Payroll Automation",
    description:
      "One-click salary processing with automated tax deductions, social security, and direct bank transfers.",
  },
  {
    icon: "userCheck" as const,
    title: "Self-Service Portal",
    description:
      "Empower employees to update personal info, view payslips, and request leave without HR intervention.",
  },
  {
    icon: "lightning" as const,
    title: "Workflow Automation",
    description: "Automate repetitive tasks like onboarding checklists, approval chains, and automated reminders.",
  },
  {
    icon: "chartBar" as const,
    title: "Advanced Analytics",
    description:
      "Deep insights into turnover rates, department costs, and workforce performance with 50+ pre-built reports.",
  },
] as const;

const workforceWorkflowSteps = [
  {
    num: "01",
    title: "Capture Data",
    description: "Onboard employees once into the centralized secure database.",
  },
  {
    num: "02",
    title: "Track Time",
    description: "Automated logs capture every minute worked across all locations.",
  },
  {
    num: "03",
    title: "Process Pay",
    description: "Payroll engine calculates gross-to-net instantly with zero errors.",
  },
  {
    num: "04",
    title: "Get Insights",
    description: "Download compliance-ready reports and strategic visual insights.",
  },
] as const;

const efficiencyBenefitBullets = [
  "Real-time visibility into workforce trends and costs",
  "99%+ accuracy in complex multi-country payroll",
  "Reduce manual admin effort by up to 70%",
  "Built-in compliance monitoring for local labor laws",
  "Scalable infrastructure that grows with your business",
] as const;

const efficiencyHighlightCards = [
  {
    icon: "trendUp" as const,
    title: "Fast Setup",
    description: "Go live in as little as 14 days with our migration tools.",
    tone: "sky" as const,
    staggerClass: "" as const,
  },
  {
    icon: "cloud" as const,
    title: "Cloud-Native",
    description: "Access your data securely from anywhere, anytime.",
    tone: "slate" as const,
    staggerClass: "lg:translate-y-6" as const,
  },
  {
    icon: "shieldCheck" as const,
    title: "Enterprise Grade",
    description: "SOC2 Type II & GDPR compliant.",
    tone: "outlined" as const,
    staggerClass: "lg:translate-y-2" as const,
  },
  {
    icon: "userBadge" as const,
    title: "Employee First",
    description: "Mobile app with 4.9/5 user rating.",
    tone: "sky" as const,
    staggerClass: "lg:translate-y-8" as const,
  },
] as const;

const businessImpactStats = [
  { value: "90%", label: "Reduction in payroll errors", badge: "+25% Accuracy" },
  { value: "70%", label: "Admin time saved weekly", badge: "~40hrs Saved" },
  { value: "15x", label: "Faster payroll processing", badge: "Instant Sync" },
  { value: "100%", label: "Compliance confidence", badge: "Audit Ready" },
] as const;

const ecosystemStackMarks = [
  { name: "SAP", id: "sap" as const },
  { name: "Snowflake", id: "snowflake" as const },
  { name: "Microsoft 365", id: "grid" as const },
  { name: "Workday", id: "workday" as const },
  { name: "Oracle NetSuite", id: "chain" as const },
  { name: "ServiceNow", id: "orbit" as const },
] as const;

function PainPointIcon({ name }: { name: (typeof painPointCards)[number]["icon"] }) {
  const c = "h-6 w-6 text-red-600";
  if (name === "database") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    );
  }
  if (name === "alert") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    );
  }
  if (name === "grid") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function PlatformControlIcon({ name }: { name: (typeof platformControlCards)[number]["icon"] }) {
  const c = "h-6 w-6";
  if (name === "userPlus") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    );
  }
  if (name === "clock") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (name === "creditCard") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    );
  }
  if (name === "userCheck") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17l2 2 4-4" />
      </svg>
    );
  }
  if (name === "lightning") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function EfficiencyHighlightIcon({ name }: { name: (typeof efficiencyHighlightCards)[number]["icon"] }) {
  const c = "h-7 w-7 text-blue-600";
  if (name === "trendUp") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    );
  }
  if (name === "cloud") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    );
  }
  if (name === "shieldCheck") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

function EcosystemStackMark({ id }: { id: (typeof ecosystemStackMarks)[number]["id"] }) {
  const c = "h-8 w-[4.5rem] text-slate-400 sm:h-9 sm:w-[5rem]";
  if (id === "sap") {
    return (
      <svg className={c} viewBox="0 0 72 32" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
        <path strokeLinecap="round" d="M12 8h18M12 16h24M12 24h14" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M44 6l14 10-14 10V6z" />
      </svg>
    );
  }
  if (id === "snowflake") {
    return (
      <svg className={c} viewBox="0 0 72 32" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
        <path strokeLinecap="round" d="M36 6v20M28 10l16 12M44 10L28 22M31 8l10 16M41 8L31 24" />
      </svg>
    );
  }
  if (id === "grid") {
    return (
      <svg className={c} viewBox="0 0 72 32" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
        <rect x="22" y="8" width="7" height="7" rx="1" />
        <rect x="32.5" y="8" width="7" height="7" rx="1" />
        <rect x="22" y="17.5" width="7" height="7" rx="1" />
        <rect x="32.5" y="17.5" width="7" height="7" rx="1" />
      </svg>
    );
  }
  if (id === "workday") {
    return (
      <svg className={c} viewBox="0 0 72 32" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 24l8-16 8 16M30 12l8 16" />
      </svg>
    );
  }
  if (id === "chain") {
    return (
      <svg className={c} viewBox="0 0 72 32" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
        <circle cx="28" cy="16" r="6" />
        <circle cx="44" cy="16" r="6" />
        <path strokeLinecap="round" d="M34 16h4" />
      </svg>
    );
  }
  return (
    <svg className={c} viewBox="0 0 72 32" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
      <circle cx="36" cy="16" r="9" />
      <path strokeLinecap="round" d="M36 10v12M30 14c2 4 4 6 6 6s4-2 6-6" />
    </svg>
  );
}

export default function LabourManagementPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        <motion.section
          className="w-full border-b border-slate-100 bg-white pt-8 sm:pt-10 lg:pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.06 }}
          >
            <div className="relative min-h-[340px] w-full bg-white sm:min-h-[390px] lg:min-h-[430px]">
              <div className="relative h-52 w-full sm:h-60 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                <Image
                  src={labourHeroRightBackground}
                  alt="InOps labour management and HRIS — unified workforce, attendance, and payroll"
                  fill
                  className="object-cover object-[center_35%] sm:object-center lg:object-[center_40%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white to-transparent lg:block"
                  aria-hidden
                />
              </div>
              <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                <div className="max-w-3xl px-2 py-8 sm:px-4 sm:py-10 lg:max-w-xl lg:py-16 lg:pr-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
                  >
                    <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      HR Information System (HRIS)
                    </span>
                  </motion.div>
                  <motion.h1
                    className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:mt-5 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
                  >
                    TotalWorkforce <br />
                    Management. <br />
                    <span className="text-blue-600">Simplified.</span>
                  </motion.h1>
                  <motion.p
                    className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-[1.05rem]"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.14 }}
                  >
                    Manage employee data, attendance, payroll, and workforce operations all in one unified platform built
                    for speed and compliance.
                  </motion.p>
                  <motion.div
                    className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/30"
                    >
                      Request a Free Demo
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-blue-900/25"
                    >
                      Calculate ROI
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Pain points — disconnected systems */}
        <section
          className="border-t border-slate-200/80 bg-white py-14 lg:py-16"
          aria-labelledby="labour-pain-points-heading"
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
                id="labour-pain-points-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
              >
                Disconnected Systems. Manual Work. Costly Errors.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Stop wasting hours on manual spreadsheets and fragmented HR tools. It&apos;s time for a single source of
                truth.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {painPointCards.map((card, i) => (
                <motion.article
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(i * 0.06, 0.18) }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <PainPointIcon name={card.icon} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{card.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* One platform — complete workforce control */}
        <section
          className="border-t border-slate-200/80 bg-sky-50/80 py-14 lg:py-16"
          aria-labelledby="labour-platform-control-heading"
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
                id="labour-platform-control-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
              >
                One Platform. Complete Workforce Control.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Everything you need to hire, manage, and pay your team in record time.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {platformControlCards.map((card, i) => (
                <motion.article
                  key={card.title}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(i * 0.05, 0.2) }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 ring-1 ring-blue-200/80">
                    <PlatformControlIcon name={card.icon} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900 sm:text-lg">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{card.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Simple workflow — four steps */}
        <section
          className="border-t border-slate-200/80 bg-white py-14 lg:py-16"
          aria-labelledby="labour-workflow-steps-heading"
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
                id="labour-workflow-steps-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
              >
                Simple. Automated. Accurate.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Our 4-step workflow ensures your workforce operations run like clockwork.
              </p>
            </motion.div>

            <div className="relative mx-auto mt-14 max-w-6xl">
              <div
                className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-px bg-slate-200 lg:block"
                aria-hidden
              />
              <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-6">
                {workforceWorkflowSteps.map((step, i) => (
                  <motion.li
                    key={step.num}
                    className="relative flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(i * 0.08, 0.24) }}
                  >
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold tracking-tight text-white shadow-sm ring-4 ring-white">
                      {step.num}
                    </div>
                    <h3 className="mt-5 text-base font-bold text-slate-900 sm:text-lg">{step.title}</h3>
                    <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-slate-600 sm:text-base">
                      {step.description}
                    </p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Built for efficiency — split layout */}
        <section
          className="border-t border-slate-200/80 bg-white py-14 lg:py-16"
          aria-labelledby="labour-efficiency-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <h2
                  id="labour-efficiency-heading"
                  className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-snug"
                >
                  Built for Efficiency and Control
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  Designed for modern HR leaders who value accuracy over paperwork.
                </p>
                <ul className="mt-8 space-y-4">
                  {efficiencyBenefitBullets.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm leading-relaxed text-slate-700 sm:text-base">{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-9 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25"
                >
                  Learn More About Benefits
                </Link>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
              >
                {efficiencyHighlightCards.map((card, i) => {
                  const toneClass =
                    card.tone === "sky"
                      ? "border-transparent bg-sky-50/90 shadow-sm"
                      : card.tone === "slate"
                        ? "border-transparent bg-slate-100/90 shadow-sm"
                        : "border border-slate-200 bg-white shadow-sm";
                  return (
                    <motion.article
                      key={card.title}
                      className={`rounded-2xl p-6 transition-transform duration-300 ${card.staggerClass} ${toneClass}`}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(0.08 + i * 0.06, 0.28) }}
                    >
                      <EfficiencyHighlightIcon name={card.icon} />
                      <h3 className="mt-4 text-base font-bold text-slate-900 sm:text-lg">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{card.description}</p>
                    </motion.article>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Business impact — metrics */}
        <section
          className="border-t border-slate-200/80 bg-slate-950 py-14 text-white lg:py-16"
          aria-labelledby="labour-business-impact-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <h2 id="labour-business-impact-heading" className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                  See the Business Impact
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                  Companies that switch to InOps report significant improvements across every core HR metric within the
                  first quarter.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm sm:w-auto"
                >
                  Download Impact Report
                </Link>
              </motion.div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
              {businessImpactStats.map((stat, i) => (
                <motion.article
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-lg shadow-black/20"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(i * 0.07, 0.21) }}
                >
                  <p className="text-3xl font-bold tracking-tight text-sky-400 sm:text-[2rem]">{stat.value}</p>
                  <p className="mt-3 text-sm font-medium leading-snug text-white sm:text-base">{stat.label}</p>
                  <p className="mt-4 inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10">
                    {stat.badge}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem & integrations — logo strip */}
        <section
          className="border-t border-slate-200/80 bg-white py-12 lg:py-14"
          aria-labelledby="labour-ecosystem-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Ecosystem &amp; Integrations</p>
              <h2
                id="labour-ecosystem-heading"
                className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem]"
              >
                Works Seamlessly With Your Stack
              </h2>
            </motion.div>
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-12 lg:gap-x-14"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 }}
            >
              {ecosystemStackMarks.map((partner) => (
                <div key={partner.name} className="flex flex-col items-center gap-2">
                  <EcosystemStackMark id={partner.id} />
                  <span className="text-center text-[11px] font-medium uppercase tracking-wide text-slate-400">
                    {partner.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Designed for simplicity — UI previews */}
        <section
          className="border-t border-slate-200/80 bg-slate-50 py-14 lg:py-16"
          aria-labelledby="labour-simplicity-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2
                id="labour-simplicity-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
              >
                Designed for Simplicity
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Complex operations behind an intuitive, elegant interface that anyone can use.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              <motion.div
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
              >
                <h3 className="text-sm font-bold text-slate-900 sm:text-base">Employee Directory</h3>
                <ul className="mt-5 space-y-4" aria-label="Sample directory rows">
                  {[
                    { initials: "AK", hue: "bg-sky-100 text-sky-700" },
                    { initials: "MR", hue: "bg-violet-100 text-violet-700" },
                    { initials: "LS", hue: "bg-emerald-100 text-emerald-700" },
                  ].map((row) => (
                    <li key={row.initials} className="flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${row.hue}`}
                      >
                        {row.initials}
                      </span>
                      <div className="min-w-0 flex-1 space-y-2">
                        <div className="h-2.5 w-[min(100%,7.5rem)] rounded-full bg-slate-200" />
                        <div className="h-2 w-20 rounded-full bg-slate-100" />
                      </div>
                      <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-500">
                        Active
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: 0.1 }}
              >
                <h3 className="text-sm font-bold text-slate-900 sm:text-base">Attendance Logs</h3>
                <div className="mt-5 overflow-x-auto rounded-lg border border-slate-100">
                  <table className="w-full min-w-[260px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50/80">
                        <th className="px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                          Date
                        </th>
                        <th className="px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                          Clock in
                        </th>
                        <th className="px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {[
                        { date: "Oct 24", clockIn: "09:00 AM", status: "On Time", late: false },
                        { date: "Oct 23", clockIn: "09:15 AM", status: "Late", late: true },
                        { date: "Oct 22", clockIn: "08:55 AM", status: "On Time", late: false },
                        { date: "Oct 21", clockIn: "09:00 AM", status: "On Time", late: false },
                      ].map((row) => (
                        <tr key={row.date}>
                          <td className="whitespace-nowrap px-3 py-2.5 font-medium text-slate-900">{row.date}</td>
                          <td className="whitespace-nowrap px-3 py-2.5 text-slate-600">{row.clockIn}</td>
                          <td className="px-3 py-2.5">
                            <span
                              className={
                                row.late
                                  ? "font-medium text-amber-700"
                                  : "font-medium text-emerald-700"
                              }
                            >
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: 0.15 }}
              >
                <h3 className="text-sm font-bold text-slate-900 sm:text-base">Payroll Summary</h3>
                <div className="mt-6 flex flex-1 flex-col items-center">
                  <div className="relative flex h-36 w-36 items-center justify-center">
                    <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36" aria-hidden>
                      <circle
                        cx="18"
                        cy="18"
                        r="15.915"
                        fill="none"
                        className="stroke-slate-200"
                        strokeWidth="3"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.915"
                        fill="none"
                        className="stroke-blue-500"
                        strokeWidth="3"
                        strokeDasharray="75 25"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-xl font-bold tracking-tight text-slate-900">75%</span>
                  </div>
                  <p className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.65rem]">$452,300</p>
                  <p className="mt-1 text-center text-xs text-slate-500 sm:text-sm">Total Net Pay Disbursed</p>
                </div>
                <button
                  type="button"
                  className="mt-6 w-full rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-700"
                >
                  View Batch Details
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="border-t border-slate-200/80 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 py-16 text-white sm:py-20 lg:py-24"
          aria-labelledby="labour-final-cta-heading"
        >
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2
                id="labour-final-cta-heading"
                className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl"
              >
                Take Control of Your Workforce Today
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                Join 10,000+ companies that have transformed their HR operations with InOps. Start your 14-day free
                trial or book a custom demo.
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-blue-600 shadow-md"
                >
                  Book a Live Demo
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-md"
                >
                  Get Free Consultation
                </Link>
              </div>
              <p className="mt-10 text-sm italic text-white/80">
                No credit card required • GDPR Ready • Cancel anytime
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
