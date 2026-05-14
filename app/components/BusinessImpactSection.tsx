"use client";

import { motion } from "framer-motion";
import SectionFade from "@/app/components/SectionFade";

const easeOut = [0.22, 1, 0.36, 1] as const;

const checklist = [
  "90% reduction in manual reconciliation",
  "3–5% immediate fraud elimination",
  "100% automated audit logging",
  "Real-time visibility across all vendors",
] as const;

export default function BusinessImpactSection() {
  return (
    <SectionFade>
      <section className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-slate-50/90 via-white to-white p-10 sm:py-12 lg:py-14">
        
        {/* Background */}
        <div
          className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-[0.22]"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-emerald-400/12 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-7xl pl-3 pr-4 sm:pl-4 sm:pr-6 lg:pl-4 lg:pr-8 xl:pr-10">
          
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0 xl:gap-x-12">

            {/* LEFT SIDE */}
            <motion.div
              className="text-left lg:col-span-5 lg:max-w-xl lg:pr-2 xl:pr-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 shadow-sm">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                  aria-hidden
                />
                Business impact
              </span>

              {/* Heading */}
              <h2 className="home-display-heading mt-4 text-balance text-slate-900 sm:mt-5">
                Proven Business{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Impact
                </span>
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-prose text-sm leading-relaxed text-slate-600 sm:text-base">
                Drive measurable financial savings, operational efficiency,
                and workforce transparency through intelligent automation
                and real-time visibility.
              </p>

              {/* Checklist */}
              <ul
                className="mt-8 space-y-2.5 sm:mt-9"
                aria-label="Business impact highlights"
              >
                {checklist.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 rounded-xl py-3 pl-3 pr-3.5 border-b border-slate-200 transition-colors hover:border-slate-300 hover:bg-white sm:pl-3.5"
                  >
                    <span
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--inops-blue)] text-white shadow-sm"
                      aria-hidden
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>

                    <span className="text-sm font-semibold leading-snug text-slate-800 sm:text-base">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              className="flex w-full flex-col gap-5 lg:col-span-7 mt-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                ease: easeOut,
                delay: 0.05,
              }}
            >

              {/* TOP CARDS */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 lg:gap-x-8">

                {/* CARD 1 */}
                <article className="relative flex flex-col rounded-2xl border border-emerald-200/85 bg-white p-5 shadow-[0_12px_40px_-28px_rgba(5,150,105,0.35)] ring-1 ring-slate-900/[0.03] transition-shadow hover:shadow-[0_18px_48px_-26px_rgba(5,150,105,0.38)] sm:p-5">

                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-4">

                    {/* Left Icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/12 text-emerald-700 ring-1 ring-emerald-500/20">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.75}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>

                    {/* Right Badge */}
                    <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />

                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-700">
                        Automated
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 text-base font-heading-bold tracking-tight text-slate-900 sm:text-lg">
                    OT &amp; Night Shift Management
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    Intelligently automate overtime tracking and night shift
                    workflows—streamline approvals, ensure compliance, and
                    deliver precise payroll processing every cycle.
                  </p>
                </article>

                {/* CARD 2 */}
                <article className="relative flex flex-col rounded-2xl border border-sky-200/85 bg-white p-5 shadow-[0_12px_40px_-28px_rgba(14,165,233,0.32)] ring-1 ring-slate-900/[0.03] transition-shadow hover:shadow-[0_18px_48px_-26px_rgba(14,165,233,0.36)] sm:p-5">

                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-4">

                    {/* Left Icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/12 text-sky-700 ring-1 ring-sky-500/20">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.75}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M4 19h16" />
                        <path d="M4 19V5" />
                        <path d="m6 8 4 6 4-3 6 7" />
                      </svg>
                    </div>

                    {/* Right Badge */}
                    <div className="flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-sky-500" />

                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-700">
                        Analytics
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 text-base font-heading-bold tracking-tight text-slate-900 sm:text-lg">
                    Eliminate Cost Leakages
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    Intelligent invoice verification catches billing
                    discrepancies in real-time. Organizations typically recover
                    10–15% in previously hidden costs.
                  </p>
                </article>
              </div>

              {/* STATS CARD */}
              <article className="relative overflow-hidden grid grid-cols-1 divide-y divide-slate-200/90 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_12px_40px_-30px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/[0.03] sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:p-6">

                {/* Background Glow */}
                <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-blue-100/40 blur-3xl" />

                {/* LEFT STAT */}
                <div className="relative pb-5 sm:pb-0 sm:pr-6">

                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-4">

                    {/* Left Content */}
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-blue-500" />

                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-700">
                          Savings
                        </span>
                      </div>

                      <p className="mt-4 text-xl font-heading-bold tracking-tight text-[color:var(--inops-blue)] sm:text-2xl">
                        ₹2–3 Cr
                      </p>
                    </div>

                    {/* Right Mini UI */}
                    <div className="flex flex-col items-end">
                      <div className="rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-2 shadow-sm">
                        <div className="flex items-end gap-1">
                          <span className="h-4 w-2 rounded-full bg-blue-300" />
                          <span className="h-6 w-2 rounded-full bg-blue-400" />
                          <span className="h-8 w-2 rounded-full bg-blue-500" />
                        </div>
                      </div>

                      <span className="mt-2 text-[11px] font-medium text-slate-500">
                        Growth
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Annual savings per 1000 contractors
                  </p>

                  {/* Bottom Progress */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-2 w-16 rounded-full bg-blue-100">
                      <div className="h-2 w-12 rounded-full bg-blue-500" />
                    </div>

                    <span className="text-xs font-medium text-slate-500">
                      85% optimized
                    </span>
                  </div>
                </div>

                {/* RIGHT STAT */}
                <div className="relative pt-5 sm:pt-0 sm:pl-6">

                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-4">

                    {/* Left Content */}
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />

                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-700">
                          Deployment
                        </span>
                      </div>

                      <p className="mt-4 text-xl font-heading-bold tracking-tight text-slate-900 sm:text-2xl">
                        30–60 Days
                      </p>
                    </div>

                    {/* Right Mini UI */}
                    <div className="flex flex-col items-end">
                      <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 px-3 py-2 shadow-sm">
                        <div className="flex items-center gap-1">
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </div>
                      </div>

                      <span className="mt-2 text-[11px] font-medium text-slate-500">
                        Fast Setup
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Rapid deployment to full production
                  </p>

                  {/* Bottom Status */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    </div>

                    <span className="text-xs font-medium text-slate-500">
                      Fast onboarding
                    </span>
                  </div>
                </div>
              </article>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionFade>
  );
}