"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };
const hoverLift = { y: -6, scale: 1.01 };

export default function EnterpriseSolutionPage() {
  const moduleVisuals = {
    sensorStatus:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
    efficiencyGain:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    inventoryAccuracy:
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1400",
  } as const;

  const industryVisuals = {
    Manufacturing:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
    Logistics:
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200",
    Warehousing:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    "Enterprise Ops":
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
  } as const;

  const coreModules = [
    {
      title: "Asset Management",
      description:
        "End-to-end tracking and maintenance for physical capital across global locations.",
      accent: "bg-blue-50 text-blue-500",
      href: "/contact",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
          <path d="m12 3 7 4v10l-7 4-7-4V7l7-4Z" />
          <path d="m12 3 7 4-7 4-7-4" />
          <path d="M12 11v10" />
        </svg>
      ),
    },
    {
      title: "Route Optimization",
      description:
        "Intelligent dispatch and navigation algorithms to maximize efficiency and reduce fuel costs.",
      accent: "bg-blue-50 text-blue-500",
      href: "/contact",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
          <path d="M6 6h12" />
          <path d="M6 12h8" />
          <path d="M6 18h12" />
          <circle cx="10" cy="6" r="1.25" fill="currentColor" stroke="none" />
          <circle cx="14" cy="12" r="1.25" fill="currentColor" stroke="none" />
          <circle cx="10" cy="18" r="1.25" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      title: "Warehouse Management",
      description:
        "Real-time inventory control and space utilization for high-velocity supply chains.",
      accent: "bg-blue-50 text-blue-500",
      href: "/contact",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        </svg>
      ),
    },
  ] as const;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="mt-10 border-t border-gray-200 py-10 lg:py-12 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1fr_1.08fr] lg:gap-12 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: smoothEase }}
          >
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              The Future of Operations
            </span>
            <h1 className="mt-4 text-[3rem] font-bold leading-[0.98] tracking-tight text-gray-900 sm:text-[4.2rem] lg:text-[3.4rem]">
              <span>Connected</span>{" "}
              <span>Operations.</span>
              <br />
              <span className="text-blue-500">Intelligent</span>{" "}
              <span className="text-blue-500">Control.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-[1.05rem] lg:text-[1.15rem]">
              Manage assets, logistics, and warehouse operations through a unified platform with real-time visibility and AI-driven automation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-xl bg-blue-500 px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-md active:scale-95"
              >
                Request Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-xl border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-md active:scale-95"
              >
                Explore Solutions
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((avatar) => (
                  <span
                    key={avatar}
                    className="relative inline-flex h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-sm"
                  >
                    <span className="flex h-full w-full items-center justify-center bg-blue-100 text-xs font-semibold text-blue-600">
                      T{avatar}
                    </span>
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 sm:text-base">
                Trusted by <span className="font-semibold text-gray-700">500+ enterprise logistics teams</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.42)] sm:p-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={hoverLift}
            viewport={viewport}
            transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
          >
            <div className="rounded-xl border border-gray-100 bg-[#fbfdff] p-3.5 sm:p-4">
              <div className="mb-3.5 grid grid-cols-3 gap-2.5">
                {[
                  { value: "428", label: "ACTIVE FLEET" },
                  { value: "98.2%", label: "ASSET HEALTH" },
                  { value: "4m 12s", label: "AVG. DELAY" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-gray-200 bg-white p-2.5 sm:p-3">
                    <p className="text-2xl font-bold leading-none text-gray-900">{item.value}</p>
                    <p className="mt-1 text-[9px] font-semibold tracking-[0.08em] text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mb-3.5 grid h-36 grid-cols-10 items-end gap-2 rounded-lg border border-gray-100 bg-white px-3 py-2 sm:h-40">
                {[6, 8, 5, 9, 7, 9, 6, 8, 10, 7].map((h, idx) => (
                  <span
                    key={`${h}-${idx}`}
                    className="rounded-t bg-blue-100/80"
                    style={{ height: `${h * 12}px` }}
                  />
                ))}
              </div>

              <div className="rounded-lg border border-gray-100 bg-white p-2.5 sm:p-3">
                <div className="mb-2 flex items-center justify-between text-[10px] font-semibold tracking-[0.06em] text-gray-500">
                  <span>LIVE OPERATIONS</span>
                  <span>See All</span>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Route optimization complete - Zone 4</span>
                    <span className="font-semibold text-green-600">SUCCESS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Fuel efficiency alert - Unit #402</span>
                    <span className="font-semibold text-amber-600">WARNING</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">New shipment inbound - Site A</span>
                    <span className="font-semibold text-blue-600">INFO</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Core Operational Modules
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              The NexusOps platform is built on three foundational pillars designed to handle the
              complexity of modern enterprise operations.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {coreModules.map((module, index) => (
              <motion.article
                key={module.title}
                className="rounded-xl border border-gray-200 bg-white p-7 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.24)]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={hoverLift}
                viewport={viewport}
                transition={{ duration: 0.48, ease: smoothEase, delay: index * 0.05 }}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${module.accent}`}>
                  {module.icon}
                </div>
                <h3 className="mt-5 text-[1.65rem] font-bold leading-tight text-gray-900 sm:text-[1.8rem]">
                  {module.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-[1.05rem]">
                  {module.description}
                </p>
                <Link
                  href={module.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-all duration-200 hover:gap-3 hover:text-blue-600"
                >
                  Learn more
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.52, ease: smoothEase }}
            >
              <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                Module 01
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Asset Management
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
                Maintain full lifecycle visibility of your physical infrastructure. NexusOps provides
                real-time telemetry and predictive insights to maximize asset lifespan and ROI.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "Real-time IoT tracking",
                  "Utilization monitoring",
                  "Maintenance scheduling",
                  "Lifecycle management",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-sm font-medium text-gray-700 sm:text-base">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-gray-500">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 10 3 3 7-7" />
                      </svg>
                    </span>
                    {point}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-md active:scale-95"
              >
                Explore Asset Features
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={hoverLift}
              viewport={viewport}
              transition={{ duration: 0.52, ease: smoothEase, delay: 0.05 }}
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-cover bg-center shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)]"
                style={{ backgroundImage: `url(${moduleVisuals.sensorStatus})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-900/15 to-slate-100/15" aria-hidden />

                <div className="relative aspect-[16/9]">
                  <div className="absolute left-4 top-4 rounded-xl border border-gray-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:left-6 sm:top-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Sensor Status
                    </p>
                    <p className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                      12,482 Active Nodes
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={hoverLift}
              viewport={viewport}
              transition={{ duration: 0.52, ease: smoothEase }}
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-blue-200/40 bg-cover bg-center shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)]"
                style={{ backgroundImage: `url(${moduleVisuals.efficiencyGain})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/20 to-transparent" aria-hidden />
                <div className="relative aspect-[16/9] p-4 sm:p-6">
                  <div className="h-full w-full rounded-xl border border-white/20 bg-white/5 backdrop-blur-[1px]" />
                  <div className="absolute bottom-6 right-6 rounded-xl border border-gray-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Efficiency Gain
                    </p>
                    <p className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                      +24% Faster Delivery
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={hoverLift}
              viewport={viewport}
              transition={{ duration: 0.52, ease: smoothEase, delay: 0.05 }}
            >
              <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                Module 02
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Route Optimization
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
                Eliminate inefficiency in your logistics network. NexusOps uses dynamic AI algorithms
                to re-route vehicles based on live traffic, weather, and service priorities.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "Smart route planning",
                  "Real-time vehicle tracking",
                  "Dynamic adjustments",
                  "Fuel & cost optimization",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-sm font-medium text-gray-700 sm:text-base">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-gray-500">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 10 3 3 7-7" />
                      </svg>
                    </span>
                    {point}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-md active:scale-95"
              >
                Optimize Fleet
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.52, ease: smoothEase }}
            >
              <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                Module 03
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Warehouse Management
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
                Synchronize your supply chain with precision inventory control. From automated
                receiving to intelligent picking paths, NexusOps keeps your warehouse moving at high
                speed.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "SKU-level inventory tracking",
                  "Full stock visibility",
                  "Internal movement tracking",
                  "Storage space optimization",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-sm font-medium text-gray-700 sm:text-base">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-gray-500">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 10 3 3 7-7" />
                      </svg>
                    </span>
                    {point}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:scale-95"
              >
                Streamline Inventory
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.52, ease: smoothEase, delay: 0.05 }}
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-cover bg-center shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)]"
                style={{ backgroundImage: `url(${moduleVisuals.inventoryAccuracy})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-900/15 to-transparent" aria-hidden />
                <div className="relative aspect-[16/9]">
                  <div className="absolute right-4 top-4 rounded-xl border border-gray-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:right-6 sm:top-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Inventory Accuracy
                    </p>
                    <p className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                      99.9% Reliable Tracking
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Unified Platform Flow
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-xl">
              NexusOps connects every facet of your physical operations into a single, cohesive
              digital nervous system.
            </p>
          </motion.div>

          <div className="mt-12">
            <div className="relative hidden md:block">
              <div className="pointer-events-none absolute left-0 right-0 top-8 h-px bg-gray-200" aria-hidden />
              <div className="relative grid grid-cols-5 gap-6">
                {[
                  {
                    stage: "Ingestion",
                    title: "Assets & Inventory",
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                        <ellipse cx="12" cy="6" rx="5" ry="2.5" />
                        <path d="M7 6v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V6" />
                        <path d="M7 10v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4" />
                      </svg>
                    ),
                  },
                  {
                    stage: "Sync",
                    title: "Real-Time Tracking",
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                        <circle cx="12" cy="12" r="8" />
                        <path d="M4 12h16" />
                        <path d="M12 4a12 12 0 0 1 0 16" />
                        <path d="M12 4a12 12 0 0 0 0 16" />
                      </svg>
                    ),
                  },
                  {
                    stage: "Compute",
                    title: "Optimization Engine",
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                        <path d="m13 2-7 10h5l-1 10 8-12h-5l0-8Z" />
                      </svg>
                    ),
                  },
                  {
                    stage: "Control",
                    title: "Unified Dashboard",
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                        <rect x="4" y="4" width="6" height="6" rx="1.5" />
                        <rect x="14" y="4" width="6" height="6" rx="1.5" />
                        <rect x="4" y="14" width="6" height="6" rx="1.5" />
                        <rect x="14" y="14" width="6" height="6" rx="1.5" />
                      </svg>
                    ),
                  },
                  {
                    stage: "Insight",
                    title: "Actionable Reports",
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                        <path d="M4 19h16" />
                        <path d="M7 16V9" />
                        <path d="M12 16V5" />
                        <path d="M17 16v-7" />
                      </svg>
                    ),
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.45, ease: smoothEase, delay: index * 0.05 }}
                  >
                    <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-500 shadow-[0_10px_28px_-16px_rgba(15,23,42,0.32)]">
                      {step.icon}
                    </div>
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                      {step.stage}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-800 sm:text-base">
                      {step.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
              {[
                { stage: "Ingestion", title: "Assets & Inventory" },
                { stage: "Sync", title: "Real-Time Tracking" },
                { stage: "Compute", title: "Optimization Engine" },
                { stage: "Control", title: "Unified Dashboard" },
                { stage: "Insight", title: "Actionable Reports" },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  className="rounded-xl border border-gray-200 bg-white p-4"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.42, ease: smoothEase, delay: index * 0.04 }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">{step.stage}</p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">{step.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45, ease: smoothEase, delay: 0.08 }}
          >
            <span className="inline-flex rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-gray-500">
              All operations connected through a single intelligent system
            </span>
          </motion.div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Platform Capabilities
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500 sm:text-xl">
                Our ecosystem is designed for the scale and complexity of Fortune 500 operations,
                providing the tools needed to maintain resilience and speed.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-md active:scale-95"
              >
                View Full Specs
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Centralized Dashboard",
                  subtitle: "One view for all sites",
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                      <rect x="4" y="4" width="6" height="6" rx="1.5" />
                      <rect x="14" y="4" width="6" height="6" rx="1.5" />
                      <rect x="4" y="14" width="6" height="6" rx="1.5" />
                      <rect x="14" y="14" width="6" height="6" rx="1.5" />
                    </svg>
                  ),
                },
                {
                  title: "Multi-location Support",
                  subtitle: "Seamless global nodes",
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                      <circle cx="12" cy="12" r="8" />
                      <path d="M4 12h16" />
                      <path d="M12 4a12 12 0 0 1 0 16" />
                      <path d="M12 4a12 12 0 0 0 0 16" />
                    </svg>
                  ),
                },
                {
                  title: "Real-time Insights",
                  subtitle: "Live telemetry stream",
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                      <path d="m13 2-7 10h5l-1 10 8-12h-5l0-8Z" />
                    </svg>
                  ),
                },
                {
                  title: "System Integrations",
                  subtitle: "API-first architecture",
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.03.03a2 2 0 1 1-2.83 2.83l-.03-.03A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1V21a2 2 0 1 1-4 0v-.05a1.7 1.7 0 0 0-.4-1 1.7 1.7 0 0 0-1-.55 1.7 1.7 0 0 0-1.87.34l-.03.03a2 2 0 1 1-2.83-2.83l.03-.03A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1-.4H3a2 2 0 1 1 0-4h.05a1.7 1.7 0 0 0 1-.4 1.7 1.7 0 0 0 .55-1 1.7 1.7 0 0 0-.34-1.87l-.03-.03a2 2 0 1 1 2.83-2.83l.03.03A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1V3a2 2 0 1 1 4 0v.05a1.7 1.7 0 0 0 .4 1 1.7 1.7 0 0 0 1 .55 1.7 1.7 0 0 0 1.87-.34l.03-.03a2 2 0 1 1 2.83 2.83l-.03.03A1.7 1.7 0 0 0 19.4 9c.24.3.42.64.52 1 .1.35.08.73-.02 1.08a1.7 1.7 0 0 0 .5 1.92" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.article
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-[#f8fbff] p-6 shadow-[0_10px_30px_-22px_rgba(15,23,42,0.28)]"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                whileHover={hoverLift}
                  viewport={viewport}
                  transition={{ duration: 0.42, ease: smoothEase, delay: index * 0.04 }}
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900 sm:text-2xl">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-gray-500 sm:text-base">{item.subtitle}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Operational Benefits
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-xl">
              Measure the impact of intelligence. NexusOps delivers quantifiable results across your
              entire value chain.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                value: "+35%",
                label: "Asset Utilization",
                description: "Maximize the value of every equipment investment.",
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
                value: "-22%",
                label: "Logistics Costs",
                description: "Significant reduction in fuel and idle time overhead.",
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <path d="M3 12h13" />
                    <path d="M14 8h2l3 3v4h-2" />
                    <circle cx="7" cy="16" r="2" />
                    <circle cx="17" cy="16" r="2" />
                    <path d="M5 16h10" />
                  </svg>
                ),
              },
              {
                value: "15%",
                label: "Cycle Times",
                description: "Faster throughput from receiving to final delivery.",
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v5l3 2" />
                  </svg>
                ),
              },
              {
                value: "99%",
                label: "Decision Precision",
                description: "Data-backed confidence for complex operations.",
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <path d="M12 3 5 6v6c0 5 3.5 7.8 7 9 3.5-1.2 7-4 7-9V6l-7-3Z" />
                    <path d="m9.5 12 1.7 1.7 3.3-3.4" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.article
                key={item.label}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-[0_10px_30px_-22px_rgba(15,23,42,0.24)]"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={hoverLift}
                viewport={viewport}
                transition={{ duration: 0.42, ease: smoothEase, delay: index * 0.04 }}
              >
                <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                  {item.icon}
                </div>
                <p className="mt-4 text-5xl font-bold tracking-tight text-blue-500">{item.value}</p>
                <h3 className="mt-3 text-2xl font-semibold text-gray-900">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:text-base">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Built for Every Industry
            </h2>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Manufacturing",
                accent: "from-blue-500/70 via-blue-700/55 to-slate-950/85",
                icon: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <path d="M3 20h18" />
                    <path d="M5 20V8l4-3v15" />
                    <path d="M9 11h10v9" />
                    <path d="M13 8h2" />
                    <path d="M16 8h2" />
                  </svg>
                ),
              },
              {
                title: "Logistics",
                accent: "from-blue-500/70 via-blue-700/55 to-slate-950/85",
                icon: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <path d="M3 12h13" />
                    <path d="M14 8h2l3 3v4h-2" />
                    <circle cx="7" cy="16" r="2" />
                    <circle cx="17" cy="16" r="2" />
                    <path d="M5 16h10" />
                  </svg>
                ),
              },
              {
                title: "Warehousing",
                accent: "from-blue-500/65 via-slate-700/55 to-slate-950/85",
                icon: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <path d="m3 9 9-5 9 5" />
                    <path d="M4 10v9h16v-9" />
                    <path d="M9 19v-5h6v5" />
                  </svg>
                ),
              },
              {
                title: "Enterprise Ops",
                accent: "from-slate-700/75 via-blue-900/60 to-slate-950/85",
                icon: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <circle cx="12" cy="12" r="8" />
                    <path d="M4 12h16" />
                    <path d="M12 4a12 12 0 0 1 0 16" />
                    <path d="M12 4a12 12 0 0 0 0 16" />
                  </svg>
                ),
              },
            ].map((card, index) => (
              <motion.article
                key={card.title}
                className="group relative overflow-hidden rounded-xl border border-gray-200 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.015 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: index * 0.04 }}
              >
                <div
                  className="relative aspect-[4/5] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${industryVisuals[card.title as keyof typeof industryVisuals]})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-black/20" aria-hidden />
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.accent}`} aria-hidden />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur">
                      {card.icon}
                    </span>
                    <h3 className="mt-3 text-3xl font-semibold text-white drop-shadow-sm sm:text-[2rem]">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-blue-50">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
              Transform Enterprise Operations with a Unified Platform
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-2xl">
              Join the world&apos;s most efficient companies. Schedule a personalized walkthrough
              of the nexusOps environment today.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-w-[210px] items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-blue-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-md active:scale-95"
              >
                Request Free Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-w-[210px] items-center justify-center rounded-xl border border-white/60 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-md active:scale-95"
              >
                Contact Sales
              </Link>
            </div>

            <p className="mt-8 text-sm font-medium text-blue-100 sm:text-base">
              No commitment required. 15-minute introductory call.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
