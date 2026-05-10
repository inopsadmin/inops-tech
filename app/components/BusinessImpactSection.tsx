"use client";

import { motion } from "framer-motion";
import SectionFade from "@/app/components/SectionFade";

export default function BusinessImpactSection() {
  return (
    <SectionFade>
      <section className="relative overflow-hidden border-t border-slate-100 bg-white py-12 lg:py-18">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-30" aria-hidden />
        <div
          className="pointer-events-none absolute -left-24 top-14 h-72 w-72 rounded-full bg-gradient-to-br from-sky-400/18 via-blue-500/10 to-transparent blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-400/14 via-cyan-300/10 to-transparent blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-700 shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden />
                Business impact
              </span>
              <h2 className="home-display-heading mt-5 text-3xl font-heading-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
                Proven Business{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Impact</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
                Drive measurable financial savings, operational efficiency, and workforce transparency through intelligent automation and real-time visibility.
              </p>
              <ul className="mt-7 grid gap-3 sm:mt-8" aria-label="Business impact highlights">
                {[
                  "90% reduction in manual reconciliation",
                  "3–5% immediate fraud elimination",
                  "100% automated audit logging",
                  "Real-time visibility across all vendors",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 shadow-[0_10px_24px_-22px_rgba(15,23,42,0.28)] backdrop-blur"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm" aria-hidden>
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold leading-relaxed text-slate-800 sm:text-[15px]">{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="grid gap-4 mt-17"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="group flex h-full flex-col rounded-3xl border border-emerald-200/80 bg-white p-6 shadow-[0_14px_44px_-34px_rgba(5,150,105,0.35)] ring-1 ring-transparent transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 hover:-translate-y-1 hover:scale-[1.02] hover:border-emerald-300/90 hover:shadow-[0_22px_54px_-32px_rgba(5,150,105,0.42)] hover:ring-emerald-400/15">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-500/25 transition-all duration-300 ease-out group-hover:bg-emerald-600 group-hover:text-white group-hover:ring-emerald-400/50 group-hover:shadow-md group-hover:shadow-emerald-600/25">
                    <svg
                      className="h-6 w-6"
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
                  <h3 className="mt-4 text-lg font-heading-bold tracking-tight text-slate-900">OT &amp; Night Shift Management</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    Automate overtime tracking, night shift handling, approvals, compliance, and accurate payroll
                    processing.
                  </p>
                </div>

                <div className="group flex h-full flex-col rounded-3xl border border-sky-200/80 bg-white p-6 shadow-[0_14px_44px_-34px_rgba(14,165,233,0.32)] ring-1 ring-transparent transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 hover:-translate-y-1 hover:scale-[1.02] hover:border-sky-300/90 hover:shadow-[0_22px_54px_-32px_rgba(14,165,233,0.4)] hover:ring-sky-400/18">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-700 ring-1 ring-sky-500/25 transition-all duration-300 ease-out group-hover:bg-sky-600 group-hover:text-white group-hover:ring-sky-400/50 group-hover:shadow-md group-hover:shadow-sky-600/25">
                    <svg
                      className="h-6 w-6"
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
                  <h3 className="mt-4 text-lg font-heading-bold tracking-tight text-slate-900">Reduce Cost Leakages</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    Automated invoice cross-verification typically recovers 10–15% in previously undetected billing
                    errors.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 divide-y divide-slate-200/90 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_14px_44px_-32px_rgba(15,23,42,0.22)] ring-1 ring-transparent transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 hover:-translate-y-1 hover:scale-[1.01] hover:border-slate-300/95 hover:shadow-[0_24px_56px_-28px_rgba(29,95,191,0.14)] hover:ring-blue-400/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                <div className="group/stat pb-6 transition-colors duration-300 sm:pb-0 sm:pr-6 sm:hover:bg-blue-50/40">
                  <p className="text-2xl font-heading-bold tracking-tight text-blue-600 transition duration-300 group-hover/stat:text-blue-700 sm:text-[1.65rem]">
                    ₹2–3 Cr
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">Annual savings per 1000 contractors</p>
                </div>
                <div className="group/stat pt-6 transition-colors duration-300 sm:pt-0 sm:pl-6 sm:hover:bg-slate-50/80">
                  <p className="text-2xl font-heading-bold tracking-tight text-slate-900 transition duration-300 group-hover/stat:text-slate-950 sm:text-[1.65rem]">
                    30–60 Days
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">Typical deployment timeframe</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionFade>
  );
}
