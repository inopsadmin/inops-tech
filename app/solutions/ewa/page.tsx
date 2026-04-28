"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

export default function EwaPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="mt-10 border-t border-gray-200 bg-[#f6f7fc] py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: smoothEase }}
          >
            <span className="inline-flex rounded-full border border-indigo-100 bg-white px-3 py-1 text-xs font-semibold text-indigo-600">
              Early wage access
            </span>
            <h1 className="mt-4 text-[2.6rem] font-bold leading-[1.02] tracking-tight text-gray-900 sm:text-[4rem] lg:text-[4.4rem]">
              Instant Access to
              <br />
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text italic text-transparent">
                Earned Wages
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-[1.1rem]">
              Enable your workforce to access wages they&apos;ve already earned powered by real-time
              attendance and payroll data.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-md active:scale-95"
              >
                Request Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-xl border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-md active:scale-95"
              >
                See How It Works
              </Link>
            </div>
            {/* <p className="mt-6 text-sm font-medium text-gray-500">No loans. No paperwork. Just earned wage access.</p> */}
            <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-2.5 text-sm font-semibold text-orange-700">
              <span>1L+ workers on platform</span>
              <span className="text-orange-400">|</span>
              <span>3000+ device deployed</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: smoothEase, delay: 0.05 }}
            className="relative overflow-hidden"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/Gemini_Generated_Image_po31j8po31j8po31.png"
                alt="Early wage access dashboard and mobile screen"
                fill
                className=""
                sizes="(max-width: 1024px) 100vw, 82vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              The Financial Gap in Workforce Operations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-xl">
              Traditional monthly payroll cycles create unnecessary stress for workers and operational
              headaches for management.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Wages Locked",
                description:
                  "Earnings are trapped in rigid 30-day cycles, leaving workers without cash flow for daily essentials.",
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v5l3 2" />
                  </svg>
                ),
              },
              {
                title: "Emergency Needs",
                description:
                  "Medical bills or urgent repairs often force workers to seek high-interest predatory loans.",
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <path d="m13 2-7 10h5l-1 10 8-12h-5l0-8Z" />
                  </svg>
                ),
              },
              {
                title: "Informal Borrowing",
                description:
                  "Reliance on informal lenders creates a cycle of debt that directly impacts workplace performance.",
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <path d="M5 15l4-4 3 3 7-7" />
                    <path d="M19 10V6h-4" />
                  </svg>
                ),
              },
              {
                title: "High Attrition",
                description:
                  "Financial instability leads to higher turnover rates and constant requests for salary advances.",
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <circle cx="9" cy="8" r="3" />
                    <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
                    <path d="M16 9h5" />
                    <path d="M18.5 6.5v5" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-xl border border-gray-200 bg-[#f8fbff] p-5 shadow-[0_10px_28px_-22px_rgba(15,23,42,0.25)]"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={viewport}
                transition={{ duration: 0.42, ease: smoothEase, delay: index * 0.04 }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-500">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:text-base">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7fb] py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              A Smarter Way to Access Earned Wages
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-xl">
              A data-driven platform embedded into your workforce system, providing liquidity without
              the liability.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {[
              {
                title: "Real-time wage visibility",
                description:
                  "Workers can track exactly how much they've earned after every shift, reinforcing the value of their labor instantly.",
                cardClass: "bg-[#ddd7fb] border-[#cfc7fa]",
                iconClass: "bg-indigo-600 text-white",
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
                title: "On-demand access",
                description:
                  "Empower workers to withdraw a percentage of their earned income 24/7 through a seamless mobile interface.",
                cardClass: "bg-[#c9f4f2] border-[#afeceb]",
                iconClass: "bg-cyan-500 text-white",
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <rect x="7" y="3" width="10" height="18" rx="2" />
                    <path d="M11 18h2" />
                  </svg>
                ),
              },
              {
                title: "Payroll-integrated system",
                description:
                  "Automated reconciliation ensures zero manual work for HR teams during monthly payroll disbursement.",
                cardClass: "bg-[#f7e5d0] border-[#f0d5b8]",
                iconClass: "bg-amber-500 text-white",
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
                className={`rounded-2xl border p-6 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.35)] ${item.cardClass}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={viewport}
                transition={{ duration: 0.42, ease: smoothEase, delay: index * 0.04 }}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${item.iconClass}`}>
                  {item.icon}
                </div>
                <h3 className="mt-5 text-[1.9rem] font-semibold leading-tight text-gray-900 sm:text-[2rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d131c] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">How It Works</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-xl">
              Fully automated. Secure. Completed in minutes.
            </p>
          </motion.div>

          <div className="mt-12 hidden md:block">
            <div className="relative">
              <div className="pointer-events-none absolute left-[6%] right-[6%] top-5 h-px bg-white/50" aria-hidden />
              <div className="relative grid grid-cols-5 gap-6">
                {[
                  "Biometric or app-based check-ins recorded.",
                  "Real-time computation based on shift data.",
                  "One-tap withdrawal via mobile app interface.",
                  "Instant transfer to verified bank accounts.",
                  "Deducted automatically from next payroll cycle.",
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    className="text-center"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.42, ease: smoothEase, delay: index * 0.05 }}
                  >
                    <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold text-white shadow-[0_0_0_4px_rgba(99,102,241,0.14)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="mx-auto mt-8 max-w-[12rem] text-sm leading-relaxed text-slate-300">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:hidden">
            {[
              "Biometric or app-based check-ins recorded.",
              "Real-time computation based on shift data.",
              "One-tap withdrawal via mobile app interface.",
              "Instant transfer to verified bank accounts.",
              "Deducted automatically from next payroll cycle.",
            ].map((step, index) => (
              <motion.div
                key={step}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.38, ease: smoothEase, delay: index * 0.04 }}
              >
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7fb] py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Powered by a Connected Ecosystem
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-xl">
              WageStream doesn&apos;t just work in isolation. It deeply integrates into your existing
              enterprise stack.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
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
            ].map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-[0_10px_24px_-20px_rgba(15,23,42,0.24)]"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={viewport}
                transition={{ duration: 0.42, ease: smoothEase, delay: index * 0.04 }}
              >
                <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 sm:text-2xl">{item.title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
              className="rounded-2xl border border-slate-800 bg-[#111722] p-5 shadow-[0_24px_56px_-34px_rgba(15,23,42,0.55)] sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white sm:text-xl">Live Data Verification</h3>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  System Online
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Attendance Sync", value: "99.9%", valueClass: "bg-indigo-500 text-white" },
                  { label: "Identity Check", value: "Verified", valueClass: "bg-slate-600 text-slate-100" },
                  { label: "Disbursement Speed", value: "< 2m", valueClass: "bg-cyan-500 text-white" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-slate-100">{row.label}</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${row.valueClass}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg border border-slate-700 bg-slate-900/70 p-3">
                <div className="h-1.5 w-full rounded-full bg-slate-700">
                  <div className="h-1.5 w-[84%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  <span>Data Arc</span>
                  <span>Sync Complete</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.04 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Built on Verified Workforce Data
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-xl">
                Decisions are never based on credit scores, but on the immutable reality of work
                performed.
              </p>

              <div className="mt-8 space-y-5">
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
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} aria-hidden>
                        <path d="M12 3 5 6v6c0 5 3.5 7.8 7 9 3.5-1.2 7-4 7-9V6l-7-3Z" />
                        <path d="m9.5 12 1.7 1.7 3.3-3.4" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-500 sm:text-base">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7fb] py-14 lg:py-18">
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
                  <span className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                    {column.badge}
                  </span>
                  <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
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

      <section className="bg-white py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Results
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Impact Across the Organization
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-xl">
              The ROI of financial wellness is visible from the factory floor to the boardroom.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                value: "40%",
                label: "Stability",
                description: "Reduction in workforce churn rate across all departments.",
                valueClass: "text-indigo-600",
              },
              {
                value: "15%",
                label: "Productivity",
                description: "Increase in shift fulfillment and overtime willingness.",
                valueClass: "text-cyan-500",
              },
              {
                value: "Zero",
                label: "Risk",
                description: "Platform handles all disbursement and collection risks.",
                valueClass: "text-amber-500",
              },
              {
                value: "Scale",
                label: "Financial Inclusion",
                description: "Bring enterprise-grade banking to your unbanked staff.",
                valueClass: "text-gray-900",
              },
            ].map((item, index) => (
              <motion.article
                key={item.label}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-[0_10px_24px_-20px_rgba(15,23,42,0.2)]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={viewport}
                transition={{ duration: 0.4, ease: smoothEase, delay: index * 0.04 }}
              >
                <p className={`text-5xl font-bold tracking-tight ${item.valueClass}`}>{item.value}</p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 sm:text-2xl">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:text-base">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Enable Financial Wellness for Your Workforce
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-indigo-100 sm:text-2xl">
              Transform how your workforce accesses and manages earnings. Start your pilot program in
              less than 7 days.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-w-[210px] items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-indigo-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-md active:scale-95"
              >
                Request Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-w-[210px] items-center justify-center rounded-xl border border-white/70 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-md active:scale-95"
              >
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
