"use client";

import { motion, useReducedMotion } from "framer-motion";
import SolutionLandingHero from "@/app/components/SolutionLandingHero";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const verifiedRightVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
} as const;

const verifiedFadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: smoothEase } },
} as const;

const verifiedListParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
} as const;

const verifiedListItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: smoothEase },
  },
} as const;

const verifiedStatParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
} as const;

const verifiedStatRow = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: smoothEase } },
} as const;

const impactMetricsContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
} as const;

const impactMetricsCard = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: smoothEase },
  },
} as const;

const costWaitingContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
} as const;

const costWaitingCard = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: smoothEase },
  },
} as const;

const ewaCostOfWaitingChallenges = [
  {
    step: "01",
    title: "Wages locked",
    description:
      "Earnings sit behind fixed 30-day cycles — everyday essentials wait while liquidity stays out of reach.",
    rail: "from-blue-500 via-blue-400 to-indigo-600",
    watermark: "text-blue-100/90 group-hover:text-blue-100",
    iconWrap: "from-blue-100 to-indigo-50 text-blue-700 ring-blue-200/80",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v5l3 2" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Emergency pressure",
    description:
      "Medical bills and urgent repairs push people toward high-interest credit when savings aren’t enough.",
    rail: "from-amber-500 via-orange-400 to-rose-500",
    watermark: "text-amber-100/90 group-hover:text-amber-100",
    iconWrap: "from-amber-100 to-orange-50 text-amber-900 ring-amber-200/80",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path d="m13 2-7 10h5l-1 10 8-12h-5l0-8Z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Informal borrowing",
    description:
      "Local lenders and ad-hoc debt erode focus and trust — performance and attendance suffer in silence.",
    rail: "from-fuchsia-500 via-violet-400 to-indigo-600",
    watermark: "text-fuchsia-100/90 group-hover:text-fuchsia-100",
    iconWrap: "from-fuchsia-100 to-violet-50 text-violet-900 ring-fuchsia-200/70",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path d="M5 15l4-4 3 3 7-7" />
        <path d="M19 10V6h-4" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "High attrition",
    description:
      "Financial stress drives turnover and endless salary-advance requests — a hidden tax on operations.",
    rail: "from-sky-500 via-cyan-400 to-blue-600",
    watermark: "text-sky-100/90 group-hover:text-sky-100",
    iconWrap: "from-sky-100 to-cyan-50 text-sky-900 ring-sky-200/70",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <circle cx="9" cy="8" r="3" />
        <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
        <path d="M16 9h5" />
        <path d="M18.5 6.5v5" />
      </svg>
    ),
  },
] as const;

const ewaHowItWorksSteps = [
  "Biometric or app-based check-ins recorded.",
  "Real-time computation based on shift data.",
  "One-tap withdrawal via mobile app interface.",
  "Instant transfer to verified bank accounts.",
  "Deducted automatically from next payroll cycle.",
] as const;

const ewaEcosystemIntegrations = [
  {
    title: "Workforce Platform (CLMS)",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <circle cx="9" cy="8" r="3" />
        <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
        <path d="M16 9h5" />
        <path d="M18.5 6.5v5" />
      </svg>
    ),
  },
  {
    title: "Worker Mobile App",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: "NBFC / Banking Partner",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path d="m3 9 9-5 9 5" />
        <path d="M4 10v9h16v-9" />
        <path d="M9 19v-5h6v5" />
      </svg>
    ),
  },
  {
    title: "Payroll System",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M16 10h3" />
        <path d="M16 14h3" />
      </svg>
    ),
  },
] as const;

const ewaImpactMetrics = [
  {
    value: "40%",
    label: "Stability",
    description: "Reduction in workforce churn rate across all departments.",
    iconTint: "from-blue-500/25 to-indigo-600/15 text-blue-700 ring-blue-200/70",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "15%",
    label: "Productivity",
    description: "Increase in shift fulfillment and overtime willingness.",
    iconTint: "from-sky-500/25 to-cyan-600/15 text-sky-800 ring-sky-200/70",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </svg>
    ),
  },
  {
    value: "Zero",
    label: "Risk",
    description: "Platform handles all disbursement and collection risks.",
    iconTint: "from-amber-500/25 to-orange-600/15 text-amber-900 ring-amber-200/70",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    value: "Scale",
    label: "Financial Inclusion",
    description: "Bring enterprise-grade banking to your unbanked staff.",
    iconTint: "from-violet-500/25 to-indigo-600/15 text-violet-800 ring-violet-200/70",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10" />
      </svg>
    ),
  },
] as const;

export default function EwaPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">
      <SolutionLandingHero
        badge={
          <span className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold text-blue-600">
            Early wage access
          </span>
        }
        title={
          <>
            Instant access to <span className="text-blue-600">earned wages</span>
          </>
        }
        subtitle="Enable your workforce to access wages they've already earned—powered by real-time attendance and payroll data."
        videoSrc="/videos/genrate_this_image_in_video_202605080131.mp4"
        imageSrc="/images/ewa-hero.png"
        imageAlt="Workforce on site — earned wage access aligned to verified attendance"
        imageWrapperClassName="relative mt-25 rounded-2xl  h-52 w-full overflow-hidden sm:h-60 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
        imageClassName="object-cover object-[center_35%] sm:object-center lg:object-[center_40%]"
        gradientClassName="pointer-events-none absolute inset-0 bg-gradient-to-r from-white from-0% via-white/[0.98] via-[42%] to-transparent to-[62%] lg:via-[44%] lg:to-[68%]"
        imageSizes="(max-width: 1024px) 100vw, 50vw"
        livePopups={[
          {
            position: "top-left",
            className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:-top-5 xl:-left-20",
            label: "Live",
            title: "Wages unlocked",
            accent: "emerald",
          },
          {
            position: "bottom-right",
            label: "Approved",
            title: "Earned-wage withdrawal",
            subtitle: "Linked to attendance",
            className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-20 xl:-right-0",
            variant: "icon",
            icon: "wallet",
            accent: "blue",
          },
        ]}
      />

      <section
        className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/40 to-white py-16 lg:py-24"
        aria-labelledby="ewa-cost-of-waiting-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(105deg,transparent_0%,transparent_40%,rgba(59,130,246,0.04)_50%,transparent_60%,transparent_100%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm backdrop-blur-sm">
              The cost of waiting
            </span>
            <h2 id="ewa-cost-of-waiting-heading" className="mt-6 text-gray-900">
              The financial gap in{" "}
              <span className="font-semibold text-[color:var(--inops-blue)]">
                workforce operations
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Rigid monthly payroll cycles strain workers who need liquidity between paydays — and
              consume HR with advances, exceptions, and churn that could be prevented.
            </p>
          </motion.div>

          <div className="relative mt-14 lg:mt-16">
            <div
              className="pointer-events-none absolute left-[6%] right-[6%] top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent xl:block"
              aria-hidden
            />

            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5"
              variants={costWaitingContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {ewaCostOfWaitingChallenges.map((item) => (
                <motion.article
                  key={item.title}
                  variants={costWaitingCard}
                  className="group relative flex min-h-[14rem] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 py-6 pl-6 pr-5 shadow-[0_14px_44px_-32px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.03] backdrop-blur-[2px] transition-[transform,box-shadow,border-color] duration-300 sm:min-h-[15rem] sm:pl-7 sm:pr-6 sm:py-7 hover:-translate-y-1.5 hover:border-slate-300/90 hover:shadow-[0_22px_48px_-28px_rgba(59,130,246,0.18)]"
                >
                  <span
                    className={`pointer-events-none absolute right-1 top-1 font-mono text-[4.25rem] font-black leading-none tracking-tighter transition-colors duration-300 sm:right-2 sm:top-2 sm:text-[5rem] ${item.watermark}`}
                    aria-hidden
                  >
                    {item.step}
                  </span>
                  <div
                    className={`pointer-events-none absolute inset-y-5 left-0 w-1 rounded-full bg-gradient-to-b ${item.rail}`}
                    aria-hidden
                  />

                  <div className="relative z-10 flex items-start gap-3">
                    <div
                      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm ring-1 ${item.iconWrap}`}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <p className="font-mono text-[11px] font-bold tracking-widest text-slate-400">
                        <span className="text-slate-300">#</span>
                        {item.step}
                      </p>
                      <h3 className="mt-1 text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="relative z-10 mt-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[0.97rem] sm:leading-relaxed">
                    {item.description}
                  </p>

                  <div
                    className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-16 lg:py-24">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[min(80rem,100vw)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.09),transparent_68%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/4 translate-y-1/4 rounded-full bg-blue-100/40 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm backdrop-blur-sm">
              The platform
            </span>
            <h2 className="mt-6 text-slate-900">
              A smarter way to access{" "}
              <span className="font-semibold text-[color:var(--inops-blue)]">
                earned wages
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              A data-driven layer inside your workforce stack — unlock liquidity for employees with
              controls and reconciliation built for payroll, not patchwork spreadsheets.
            </p>
          </motion.div>

          <div className="relative mt-14 lg:mt-16">
            <div
              className="pointer-events-none absolute left-[10%] right-[10%] top-12 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block"
              aria-hidden
            />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              {[
                {
                  tag: "Live ledger",
                  title: "Real-time wage visibility",
                  description:
                    "After every shift, workers see earnings update in one clear view — motivation and trust stay tied to work performed, not guesswork.",
                  accentBar: "from-blue-500 to-indigo-500",
                  iconBg: "from-blue-600 to-indigo-600 shadow-blue-500/25",
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                      <path d="M4 19h16" />
                      <path d="M8 16V9" />
                      <path d="M12 16V6" />
                      <path d="M16 16v-4" />
                    </svg>
                  ),
                },
                {
                  tag: "Always on",
                  title: "On-demand access",
                  description:
                    "Withdraw a governed share of already-earned pay anytime — mobile-first flows that feel as simple as checking a bank balance.",
                  accentBar: "from-sky-400 to-blue-500",
                  iconBg: "from-sky-500 to-blue-600 shadow-sky-500/25",
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                      <rect x="7" y="3" width="10" height="18" rx="2" />
                      <path d="M11 18h2" />
                    </svg>
                  ),
                },
                {
                  tag: "Payroll-safe",
                  title: "Payroll-integrated system",
                  description:
                    "Withdrawals reconcile automatically against your run — HR skips manual tallying, exceptions shrink, and month-end stays predictable.",
                  accentBar: "from-amber-400 to-orange-500",
                  iconBg: "from-amber-500 to-orange-600 shadow-amber-500/25",
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                      <ellipse cx="12" cy="6" rx="5" ry="2.5" />
                      <path d="M7 6v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V6" />
                      <path d="M7 10v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.article
                  key={item.title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/[0.04] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(59,130,246,0.22)]"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: index * 0.06 }}
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[3px] overflow-hidden rounded-t-2xl"
                    aria-hidden
                  >
                    <div
                      className={`h-full w-full origin-left scale-x-0 bg-gradient-to-r ${item.accentBar} transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-x-100`}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.iconBg} text-white shadow-lg`}
                    >
                      {item.icon}
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[0.98rem]">
                    {item.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="h-1 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" aria-hidden />
                    <span>Built into your stack</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden border-y border-white/[0.06] bg-slate-950 py-16 lg:py-24"
        aria-labelledby="ewa-how-it-works-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,rgba(37,99,235,0.28),transparent_58%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_42%_at_100%_85%,rgba(59,130,246,0.14),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:52px_52px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-3xl lg:text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              How it works
            </span>
            <h2 id="ewa-how-it-works-heading" className="mt-5 text-white">
              Five steps.{" "}
              <span className="font-semibold text-slate-300">
                Zero payroll friction.
              </span>
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start">
              {(
                [
                  {
                    label: "Fully automated",
                    tone: "border-emerald-500/30 bg-emerald-500/[0.12] text-emerald-100/95",
                    dot: "bg-emerald-400",
                  },
                  {
                    label: "Secure",
                    tone: "border-sky-500/30 bg-sky-500/[0.12] text-sky-50/95",
                    dot: "bg-sky-400",
                  },
                  {
                    label: "Completed in minutes",
                    tone: "border-indigo-500/30 bg-indigo-500/[0.12] text-indigo-100/95",
                    dot: "bg-indigo-400",
                  },
                ] as const
              ).map((chip) => (
                <span
                  key={chip.label}
                  className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold tracking-tight sm:text-sm ${chip.tone}`}
                >
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${chip.dot}`} aria-hidden />
                  {chip.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Mobile — vertical rail */}
          <div className="relative mt-12 md:hidden">
            <div
              className="pointer-events-none absolute left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/50 via-slate-600/70 to-slate-700/30"
              aria-hidden
            />
            <ol className="relative list-none space-y-5 p-0">
              {ewaHowItWorksSteps.map((step, index) => (
                <motion.li
                  key={step}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.42, ease: smoothEase, delay: index * 0.05 }}
                >
                  <div className="relative z-[1] flex shrink-0 flex-col items-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-blue-500/35 to-indigo-600/25 text-sm font-bold tabular-nums tracking-tight text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] ring-2 ring-slate-950">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.08] to-white/[0.02] px-4 py-3.5 shadow-[0_16px_48px_-32px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.05] backdrop-blur-sm">
                    <p className="text-[0.9375rem] font-medium leading-snug text-slate-200">{step}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* md+ — pipeline cards */}
          <div className="relative mt-14 hidden md:block">
            <div
              className="pointer-events-none absolute left-[4%] right-[4%] top-[22px] hidden h-px bg-gradient-to-r from-transparent via-blue-400/35 to-transparent lg:block"
              aria-hidden
            />
            <ol className="relative grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
              {ewaHowItWorksSteps.map((step, index) => (
                <motion.li
                  key={step}
                  className="group relative flex flex-col"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: index * 0.06 }}
                >
                  <div className="flex flex-col items-center text-center lg:items-stretch lg:text-left">
                    <div className="relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-blue-500/35 to-indigo-600/25 text-sm font-bold tabular-nums text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] ring-2 ring-slate-950 transition-[transform,box-shadow] duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_28px_-12px_rgba(59,130,246,0.45)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-5 flex min-h-[7.5rem] flex-1 flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-4 shadow-[0_20px_50px_-36px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.05] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 group-hover:border-blue-400/25 group-hover:shadow-[0_24px_56px_-32px_rgba(59,130,246,0.22)] lg:min-h-[8.25rem]">
                      <p className="text-left text-[13px] font-medium leading-snug text-slate-200 sm:text-sm lg:text-[0.9375rem] lg:leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden border-y border-slate-200/70 bg-gradient-to-b from-slate-50/95 via-white to-white py-16 lg:py-24"
        aria-labelledby="ewa-ecosystem-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_-15%,rgba(59,130,246,0.09),transparent_58%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_38%_at_100%_100%,rgba(99,102,241,0.06),transparent_50%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:56px_56px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm backdrop-blur-sm">
              Integration stack
            </span>
            <h2 id="ewa-ecosystem-heading" className="mt-5 text-slate-900">
              Powered by a{" "}
              <span className="font-semibold text-[color:var(--inops-blue)]">
                connected ecosystem
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              WageStream doesn&apos;t just work in isolation. It deeply integrates into your existing
              enterprise stack.
            </p>
          </motion.div>

          <div className="relative mt-14">
            <div
              className="pointer-events-none absolute left-[6%] right-[6%] top-7 hidden h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent xl:block"
              aria-hidden
            />
            <ul className="relative grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
              {ewaEcosystemIntegrations.map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: index * 0.06 }}
                >
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-[0_14px_44px_-32px_rgba(15,23,42,0.22)] ring-1 ring-slate-900/[0.03] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-blue-300/60 hover:shadow-[0_22px_50px_-28px_rgba(59,130,246,0.22)]">
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[3px] overflow-hidden rounded-t-2xl"
                      aria-hidden
                    >
                      <div className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-x-100" />
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 ring-1 ring-blue-500/20 transition-transform duration-300 group-hover:scale-[1.03]">
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <h3 className="text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </article>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#111722] p-5 shadow-[0_24px_56px_-34px_rgba(15,23,42,0.55)] sm:p-6"
            >
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/15 blur-3xl"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.8, ease: smoothEase }}
              />
              <div className="relative mb-4 flex items-center justify-between gap-3">
                <motion.h3
                  className="text-lg font-semibold text-white sm:text-xl"
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, ease: smoothEase }}
                >
                  Live Data Verification
                </motion.h3>
                <motion.span
                  className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewport}
                  transition={{ delay: 0.15, duration: 0.35 }}
                >
                  {reduceMotion ? (
                    <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                  ) : (
                    <motion.span className="relative flex h-2 w-2 shrink-0" aria-hidden>
                      <motion.span
                        className="absolute inset-0 rounded-full bg-emerald-400/45 blur-[3px]"
                        animate={{ opacity: [0.45, 0.9, 0.45], scale: [1, 1.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.span
                        className="relative block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.span>
                  )}
                  System Online
                </motion.span>
              </div>

              <motion.div
                className="relative space-y-3"
                variants={verifiedStatParent}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {[
                  { label: "Attendance Sync", value: "99.9%", valueClass: "bg-blue-500 text-white" },
                  { label: "Identity Check", value: "Verified", valueClass: "bg-slate-600 text-slate-100" },
                  { label: "Disbursement Speed", value: "< 2m", valueClass: "bg-blue-500 text-white" },
                ].map((row) => (
                  <motion.div
                    key={row.label}
                    variants={verifiedStatRow}
                    className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 transition-colors duration-300 hover:border-slate-600 hover:bg-slate-800"
                  >
                    <span className="text-sm font-medium text-slate-100">{row.label}</span>
                    <motion.span
                      className={`rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${row.valueClass}`}
                      initial={false}
                      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    >
                      {row.value}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="relative mt-5 overflow-hidden rounded-lg border border-slate-700 bg-slate-900/70 p-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: 0.35, duration: 0.45, ease: smoothEase }}
              >
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-700">
                  <motion.div
                    className="h-1.5 rounded-full bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "84%" }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: reduceMotion ? 0.15 : 1.2,
                      ease: smoothEase,
                      delay: reduceMotion ? 0 : 0.45,
                    }}
                  />
                </div>
                {!reduceMotion ? (
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute bottom-3 left-3 top-3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
                    initial={{ x: "-30%" }}
                    whileInView={{ x: ["-30%", "120%"], opacity: [0, 0.35, 0] }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.8, ease: "easeInOut", delay: 1.35 }}
                  />
                ) : null}
                <motion.div
                  className="mt-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewport}
                  transition={{ delay: reduceMotion ? 0.2 : 1.05, duration: 0.35 }}
                >
                  <span>Data Arc</span>
                  <span>Sync Complete</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={verifiedRightVariants}
            >
              <motion.h2 variants={verifiedFadeUp} className="text-gray-900">
                Built on Verified Workforce Data
              </motion.h2>
              <motion.p
                variants={verifiedFadeUp}
                className="mt-4 text-base leading-relaxed text-gray-500 sm:text-xl"
              >
                Decisions are never based on credit scores, but on the immutable reality of work
                performed.
              </motion.p>

              <motion.div className="mt-8 space-y-5" variants={verifiedListParent}>
                {[
                  {
                    title: "Attendance-based wage calculation",
                    description: "Directly linked to biometric clock-ins for 100% accuracy.",
                  },
                  {
                    title: "Real-time income visibility",
                    description: "Dynamic ledger updates as shifts are completed.",
                  },
                  {
                    title: "Identity-backed verification",
                    description: "Secure KYC ensures funds always reach the right recipient.",
                  },
                  {
                    title: "Behavior-based eligibility",
                    description: "Intelligent limits based on historical attendance patterns.",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    variants={verifiedListItem}
                    className="group flex items-start gap-3 rounded-xl border border-transparent px-1 py-0.5 transition-colors duration-300 hover:border-slate-200/90 hover:bg-slate-50/80"
                  >
                    <motion.span
                      className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-500 ring-1 ring-blue-100/80 transition-colors group-hover:bg-blue-100 group-hover:ring-blue-200/90"
                      whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 380, damping: 18 }}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} aria-hidden>
                        <path d="M12 3 5 6v6c0 5 3.5 7.8 7 9 3.5-1.2 7-4 7-9V6l-7-3Z" />
                        <path d="m9.5 12 1.7 1.7 3.3-3.4" />
                      </svg>
                    </motion.span>
                    <div>
                      <h3 className="text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-500 sm:text-base">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_16px_36px_-28px_rgba(15,23,42,0.25)]">
            <div className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
              {[
                {
                  badge: "For Workers",
                  title: "Empowerment & Wellness",
                  cardClass: "bg-white",
                  points: [
                    "Instant access to earned wages 24/7",
                    "Zero dependence on high-interest credit",
                    "Significant reduction in financial stress",
                    "Improved dignity and financial control",
                  ],
                },
                {
                  badge: "For Employers",
                  title: "Retention & Efficiency",
                  cardClass: "bg-[#f7f6ff]",
                  points: [
                    "Drastic reduction in salary advance requests",
                    "Up to 40% improvement in worker retention",
                    "No financial liability or capital expenditure",
                    "Fully automated compliance and accounting",
                  ],
                },
              ].map((column, index) => (
                <motion.article
                  key={column.title}
                  className={`${column.cardClass} p-7 sm:p-8`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.42, ease: smoothEase, delay: index * 0.05 }}
                >
                  <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    {column.badge}
                  </span>
                  <h2 className="mt-4 text-gray-900">
                    {column.title}
                  </h2>

                  <ul className="mt-7 space-y-0">
                    {column.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 border-t border-gray-200 py-3.5">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-gray-500">
                          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                            <circle cx="10" cy="10" r="7.2" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="m7.2 10.1 1.9 1.9 3.8-3.8" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium text-gray-700 sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden border-t border-slate-100 bg-white py-16 lg:py-24"
        aria-labelledby="ewa-impact-heading"
      >
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center lg:max-w-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-slate-50/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">
              Results
            </span>
            <h2 id="ewa-impact-heading" className="mt-5 text-gray-900">
              Impact Across the{" "}
              <span className="font-semibold text-[color:var(--inops-blue)]">
                Organization
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              The ROI of financial wellness is visible from the factory floor to the boardroom.
            </p>
          </motion.div>

          <div className="relative mt-14">
            <div
              className="pointer-events-none absolute left-[5%] right-[5%] top-[2.25rem] hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent xl:block"
              aria-hidden
            />
            <motion.ul
              className="relative grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6"
              variants={impactMetricsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {ewaImpactMetrics.map((item) => (
                <motion.li key={item.label} variants={impactMetricsCard} className="relative">
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_12px_40px_-30px_rgba(15,23,42,0.14)] ring-1 ring-slate-900/[0.03] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-blue-200/90 hover:shadow-[0_24px_52px_-28px_rgba(59,130,246,0.22)] sm:p-7">
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[3px] overflow-hidden rounded-t-2xl"
                      aria-hidden
                    >
                      <div className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-x-100" />
                    </div>

                    <div className="relative flex items-start justify-between gap-3">
                      <span
                        className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm ring-1 ${item.iconTint}`}
                      >
                        {item.icon}
                      </span>
                    </div>

                    <p
                      className={`relative mt-6 font-bold tabular-nums tracking-tight text-slate-900 ${item.value === "Scale" ? "text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-none" : "text-4xl sm:text-5xl lg:text-[3.15rem] lg:leading-none"}`}
                    >
                      {item.value}
                    </p>

                    <h3 className="relative mt-2 text-slate-900">
                      {item.label}
                    </h3>
                    <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
                      {item.description}
                    </p>
                  </article>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      <SolutionPageClosingCta
        headingId="ewa-final-cta-heading"
        heading="Enable Financial Wellness for Your Workforce"
        description="Transform how your workforce accesses and manages earnings. Start your pilot program in less than 7 days."
        primaryLabel="Request Demo"
        secondaryLabel="Talk to Sales"
      />
    </div>
  );
}
