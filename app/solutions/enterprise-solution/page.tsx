"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FlyInText } from "@/app/components/FlyInText";
import SolutionLandingHero from "@/app/components/SolutionLandingHero";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };
const hoverLift = { y: -6, scale: 1.01 };

const modulesGridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
} as const;

const modulesCard = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.46, ease: smoothEase },
  },
} as const;

const platformFlowContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
} as const;

const platformFlowItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.44, ease: smoothEase },
  },
} as const;

const nexusUnifiedFlowSteps = [
  {
    stage: "Ingestion",
    title: "Assets & Inventory",
    iconGlow: "from-blue-500 to-indigo-600 shadow-blue-500/30",
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
    iconGlow: "from-sky-500 to-cyan-600 shadow-sky-500/25",
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
    iconGlow: "from-violet-500 to-indigo-600 shadow-violet-500/25",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path d="m13 2-7 10h5l-1 10 8-12h-5l0-8Z" />
      </svg>
    ),
  },
  {
    stage: "Control",
    title: "Unified Dashboard",
    iconGlow: "from-indigo-500 to-blue-700 shadow-indigo-500/25",
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
    iconGlow: "from-emerald-500 to-teal-600 shadow-emerald-500/25",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path d="M4 19h16" />
        <path d="M7 16V9" />
        <path d="M12 16V5" />
        <path d="M17 16v-7" />
      </svg>
    ),
  },
] as const;

export default function EnterpriseSolutionPage() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/solutions/enterprise-solution") return;

    const scrollToHashTarget = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const el = document.getElementById(decodeURIComponent(id));
      if (!el) return;
      const run = () => el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.requestAnimationFrame(() => {
        run();
        window.setTimeout(run, 100);
      });
    };

    window.setTimeout(scrollToHashTarget, 0);
    window.addEventListener("hashchange", scrollToHashTarget);
    return () => window.removeEventListener("hashchange", scrollToHashTarget);
  }, [pathname]);

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
      step: "01",
      tag: "Capital & uptime",
      title: "Asset Management",
      description:
        "Full lifecycle visibility—from procurement to retirement—with utilization, maintenance, and compliance aligned across every site.",
      href: "#asset-management",
      borderGradient: "from-blue-600 via-indigo-500 to-violet-600",
      topBarGradient: "from-blue-500 via-indigo-500 to-sky-400",
      iconWrap:
        "from-blue-600 via-blue-500 to-indigo-600 shadow-[0_10px_28px_-10px_rgba(37,99,235,0.55)] ring-1 ring-white/25",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
          <path d="m12 3 7 4v10l-7 4-7-4V7l7-4Z" />
          <path d="m12 3 7 4-7 4-7-4" />
          <path d="M12 11v10" />
        </svg>
      ),
    },
    {
      step: "02",
      tag: "Fleet & miles",
      title: "Route Optimization",
      description:
        "Dispatch and paths that respond to traffic, SLAs, and capacity in real time—fewer empty miles, less idle time, lower fuel spend.",
      href: "#route-optimization",
      borderGradient: "from-cyan-500 via-teal-500 to-emerald-600",
      topBarGradient: "from-cyan-400 via-teal-500 to-emerald-500",
      iconWrap:
        "from-sky-500 via-cyan-500 to-teal-600 shadow-[0_10px_28px_-10px_rgba(14,165,233,0.45)] ring-1 ring-white/25",
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
      step: "03",
      tag: "Throughput",
      title: "Warehouse Management",
      description:
        "Inventory, slotting, and flows tuned for velocity—accurate stock and smarter space use without slowing pick, pack, or ship.",
      href: "#warehouse-management",
      borderGradient: "from-violet-600 via-fuchsia-500 to-indigo-600",
      topBarGradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      iconWrap:
        "from-violet-600 via-indigo-600 to-blue-700 shadow-[0_10px_28px_-10px_rgba(109,40,217,0.45)] ring-1 ring-white/25",
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

  const enterpriseClientLogos = [
  
    { src: "/clients/samsung.svg", alt: "Samsung" },
    { src: "/clients/ibm.svg", alt: "IBM" },
    { src: "/clients/volvo.svg", alt: "Volvo" },
    { src: "/clients/yara.svg", alt: "Yara" },
    { src: "/clients/dtc.svg", alt: "DTC" },
    { src: "/clients/sap.svg", alt: "SAP" },
  ] as const;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SolutionLandingHero
        badge={
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            The future of operations
          </span>
        }
        title={
          <>
            Connected operations.{" "}
            <span className="text-blue-600">Intelligent control.</span>
          </>
        }
        subtitle="Manage assets, logistics, and warehouse operations through a unified platform with real-time visibility and AI-driven automation."
        videoSrc="/videos/Enterprise_Solutions_digitizing_202605062212.mp4"
        imageAlt="Warehouse and logistics operations — enterprise visibility"
        livePopups={[
          {
            position: "top-left",
            className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:top-9 xl:left-130",
            label: "Live",
            title: "Operations connected",
            accent: "emerald",
          },
          {
            position: "bottom-right",
            className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-0 xl:-right-2",
            label: "Synced",
            title: "Asset & inventory feed",
            subtitle: "Across all sites",
            variant: "icon",
            icon: "chart",
            accent: "blue",
          },
        ]}
      />

      <section
        className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-slate-50/90 via-white to-blue-50/25 py-14 lg:py-20"
        aria-labelledby="core-modules-heading"
      >
        <div
          className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-400/15 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-400/12 blur-[90px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:56px_56px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center lg:max-w-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" aria-hidden />
              Three pillars
            </span>
            <h2
              id="core-modules-heading"
              className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.55rem] lg:leading-[1.1]"
            >
              Core operational{" "}
              <span className="font-semibold text-[color:var(--inops-blue)]">
                modules
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Asset intelligence, fleet routing, and warehouse execution—three connected surfaces that
              share data so enterprise ops stay aligned from yard to shelf.
            </p>
          </motion.div>

          <motion.div
            className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-7"
            variants={modulesGridContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div
              className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent md:block"
              aria-hidden
            />

            {coreModules.map((module) => (
              <motion.div
                key={module.title}
                variants={modulesCard}
                whileHover={hoverLift}
                className={`rounded-[1.35rem] bg-gradient-to-br p-[1px] shadow-[0_24px_56px_-34px_rgba(15,23,42,0.18)] ${module.borderGradient}`}
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.3rem] border border-white/70 bg-white/95 p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-sm sm:p-8">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[3px] overflow-hidden rounded-t-[1.25rem]"
                    aria-hidden
                  >
                    <div
                      className={`h-full w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-x-100 ${module.topBarGradient}`}
                    />
                  </div>

                  <span
                    className="pointer-events-none absolute -right-1 top-4 font-mono text-[4.5rem] font-black leading-none tracking-tighter text-slate-100 sm:right-2 sm:top-5 sm:text-[5rem]"
                    aria-hidden
                  >
                    {module.step}
                  </span>

                  <div className="relative flex flex-wrap items-center gap-2">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white ${module.iconWrap}`}
                    >
                      {module.icon}
                    </div>
                    <span className="rounded-full border border-slate-200/90 bg-slate-50/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {module.tag}
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-[1.45rem] font-bold leading-snug tracking-tight text-slate-900 sm:text-[1.6rem]">
                    {module.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
                    {module.description}
                  </p>

                  <Link
                    href={module.href}
                    className="relative mt-8 inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_-12px_rgba(15,23,42,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:from-slate-800 hover:to-slate-700 hover:shadow-[0_14px_36px_-14px_rgba(59,130,246,0.35)] active:scale-[0.98] group/link"
                  >
                    Explore module
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </article>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="asset-management"
        className="scroll-mt-24 bg-white py-12 lg:py-16 lg:scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, ease: smoothEase }}
            >
              <FlyInText
                as="span"
                direction="up"
                duration={0.55}
                className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
              >
                Module 01
              </FlyInText>

              <FlyInText
                as="h2"
                direction="up"
                delay={0.06}
                duration={0.62}
                className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              >
                Asset Management
              </FlyInText>

              <FlyInText
                as="p"
                direction="left"
                delay={0.11}
                duration={0.58}
                className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg"
              >
                Maintain full lifecycle visibility of your physical infrastructure. NexusOps provides
                real-time telemetry and predictive insights to maximize asset lifespan and ROI.
              </FlyInText>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "Real-time IoT tracking",
                  "Utilization monitoring",
                  "Maintenance scheduling",
                  "Lifecycle management",
                ].map((point, i) => (
                  <FlyInText
                    key={point}
                    as="div"
                    direction="up"
                    delay={0.14 + i * 0.05}
                    duration={0.5}
                    className="flex items-center gap-2.5 text-sm font-medium text-gray-700 sm:text-base"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-gray-500">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 10 3 3 7-7" />
                      </svg>
                    </span>
                    {point}
                  </FlyInText>
                ))}
              </div>

              <FlyInText as="div" direction="up" delay={0.34} duration={0.55} className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-md active:scale-95"
                >
                  Explore Asset Features
                </Link>
              </FlyInText>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={hoverLift}
              viewport={viewport}
              transition={{ duration: 0.4, ease: smoothEase, delay: 0.05 }}
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-cover bg-center shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)]"
                style={{ backgroundImage: `url(${moduleVisuals.sensorStatus})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-900/15 to-slate-100/15" aria-hidden />

                <div className="relative aspect-[16/9]">
                  <FlyInText
                    direction="left"
                    delay={0.1}
                    duration={0.65}
                    className="absolute left-4 top-4 rounded-xl border border-gray-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:left-6 sm:top-6"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Sensor Status
                    </p>
                    <p className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                      12,482 Active Nodes
                    </p>
                  </FlyInText>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="route-optimization"
        className="scroll-mt-24 bg-white py-12 lg:py-16 lg:scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={hoverLift}
              viewport={viewport}
              transition={{ duration: 0.4, ease: smoothEase }}
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-blue-200/40 bg-cover bg-center shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)]"
                style={{ backgroundImage: `url(${moduleVisuals.efficiencyGain})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/20 to-transparent" aria-hidden />
                <div className="relative aspect-[16/9] p-4 sm:p-6">
                  <div className="h-full w-full rounded-xl border border-white/20 bg-white/5 backdrop-blur-[1px]" />
                  <FlyInText
                    direction="up"
                    delay={0.12}
                    duration={0.65}
                    className="absolute bottom-6 right-6 rounded-xl border border-gray-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Efficiency Gain
                    </p>
                    <p className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                      +24% Faster Delivery
                    </p>
                  </FlyInText>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={hoverLift}
              viewport={viewport}
              transition={{ duration: 0.4, ease: smoothEase, delay: 0.05 }}
            >
              <FlyInText
                as="span"
                direction="up"
                duration={0.55}
                className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
              >
                Module 02
              </FlyInText>

              <FlyInText
                as="h2"
                direction="up"
                delay={0.06}
                duration={0.62}
                className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              >
                Route Optimization
              </FlyInText>

              <FlyInText
                as="p"
                direction="right"
                delay={0.11}
                duration={0.58}
                className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg"
              >
                Eliminate inefficiency in your logistics network. NexusOps uses dynamic AI algorithms
                to re-route vehicles based on live traffic, weather, and service priorities.
              </FlyInText>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "Smart route planning",
                  "Real-time vehicle tracking",
                  "Dynamic adjustments",
                  "Fuel & cost optimization",
                ].map((point, i) => (
                  <FlyInText
                    key={point}
                    as="div"
                    direction="up"
                    delay={0.14 + i * 0.05}
                    duration={0.5}
                    className="flex items-center gap-2.5 text-sm font-medium text-gray-700 sm:text-base"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-gray-500">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 10 3 3 7-7" />
                      </svg>
                    </span>
                    {point}
                  </FlyInText>
                ))}
              </div>

              <FlyInText as="div" direction="up" delay={0.34} duration={0.55} className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-md active:scale-95"
                >
                  Optimize Fleet
                </Link>
              </FlyInText>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="warehouse-management"
        className="scroll-mt-24 bg-white py-12 lg:py-16 lg:scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, ease: smoothEase }}
            >
              <FlyInText
                as="span"
                direction="up"
                duration={0.55}
                className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
              >
                Module 03
              </FlyInText>

              <FlyInText
                as="h2"
                direction="up"
                delay={0.06}
                duration={0.62}
                className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              >
                Warehouse Management
              </FlyInText>

              <FlyInText
                as="p"
                direction="left"
                delay={0.11}
                duration={0.58}
                className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg"
              >
                Synchronize your supply chain with precision inventory control. From automated
                receiving to intelligent picking paths, NexusOps keeps your warehouse moving at high
                speed.
              </FlyInText>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "SKU-level inventory tracking",
                  "Full stock visibility",
                  "Internal movement tracking",
                  "Storage space optimization",
                ].map((point, i) => (
                  <FlyInText
                    key={point}
                    as="div"
                    direction="up"
                    delay={0.14 + i * 0.05}
                    duration={0.5}
                    className="flex items-center gap-2.5 text-sm font-medium text-gray-700 sm:text-base"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-gray-500">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 10 3 3 7-7" />
                      </svg>
                    </span>
                    {point}
                  </FlyInText>
                ))}
              </div>

              <FlyInText as="div" direction="up" delay={0.34} duration={0.55} className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:scale-95"
                >
                  Streamline Inventory
                </Link>
              </FlyInText>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, ease: smoothEase, delay: 0.05 }}
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-cover bg-center shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)]"
                style={{ backgroundImage: `url(${moduleVisuals.inventoryAccuracy})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-900/15 to-transparent" aria-hidden />
                <div className="relative aspect-[16/9]">
                  <FlyInText
                    direction="right"
                    delay={0.12}
                    duration={0.65}
                    className="absolute right-4 top-4 rounded-xl border border-gray-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:right-6 sm:top-6"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Inventory Accuracy
                    </p>
                    <p className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                      99.9% Reliable Tracking
                    </p>
                  </FlyInText>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-10 pt-2 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="rounded-2xl border border-gray-200 bg-white px-5 py-7 shadow-[0_14px_35px_-28px_rgba(15,23,42,0.35)] sm:px-7"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45, ease: smoothEase }}
          >
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Deployed Across Enterprises
            </p>
            <div className="mt-6 grid grid-cols-2 items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
              {enterpriseClientLogos.map((logo) => (
                <div key={logo.src} className="flex h-12 items-center justify-center opacity-80 transition-opacity duration-200 hover:opacity-100">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={46}
                    className="h-9 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-white" aria-labelledby="unified-platform-flow-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center lg:max-w-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center rounded-full border border-slate-200/90 bg-slate-50/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">
              End-to-end flow
            </span>
            <h2
              id="unified-platform-flow-heading"
              className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
            >
              Unified Platform{" "}
              <span className="font-semibold text-[color:var(--inops-blue)]">
                Flow
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-xl">
              NexusOps connects every facet of your physical operations into a single, cohesive
              digital nervous system.
            </p>
          </motion.div>

          <motion.div
            className="relative mt-14 hidden md:block"
            variants={platformFlowContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div
              className="pointer-events-none absolute left-[4%] right-[4%] top-[2.125rem] h-[3px] rounded-full bg-gradient-to-r from-blue-100 via-indigo-200 to-emerald-100 opacity-90"
              aria-hidden
            />

            <div className="relative flex items-start justify-center gap-0 lg:gap-1">
              {nexusUnifiedFlowSteps.map((step, index) => (
                <Fragment key={step.title}>
                  <motion.div
                    variants={platformFlowItem}
                    className="group relative z-[1] flex min-w-0 flex-1 flex-col items-center px-1 text-center sm:px-2"
                  >
                    <div className="mx-auto rounded-2xl bg-gradient-to-br from-white to-slate-50 p-[3px] shadow-[0_12px_32px_-18px_rgba(15,23,42,0.2)] ring-1 ring-slate-200/70 transition-transform duration-300 group-hover:-translate-y-1">
                      <div
                        className={`flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-[0.85rem] bg-gradient-to-br text-white ${step.iconGlow}`}
                      >
                        {step.icon}
                      </div>
                    </div>
                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:text-[11px]">
                      {step.stage}
                    </p>
                    <p className="mt-1.5 text-xs font-semibold leading-snug text-slate-900 sm:text-sm lg:text-base">
                      {step.title}
                    </p>
                  </motion.div>

                  {index < nexusUnifiedFlowSteps.length - 1 ? (
                    <motion.div
                      variants={platformFlowItem}
                      className="hidden shrink-0 self-start pt-[2.75rem] text-slate-500 lg:flex lg:w-6 lg:items-center lg:justify-center"
                      aria-hidden
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
                      </svg>
                    </motion.div>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 md:hidden"
            variants={platformFlowContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {nexusUnifiedFlowSteps.map((step) => (
              <motion.article
                key={step.title}
                variants={platformFlowItem}
                className="flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-[0_8px_28px_-22px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.02] transition-shadow duration-300 hover:shadow-[0_14px_36px_-24px_rgba(59,130,246,0.12)]"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white ${step.iconGlow}`}
                >
                  {step.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{step.stage}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{step.title}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 flex justify-center sm:mt-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45, ease: smoothEase, delay: 0.08 }}
          >
            <span className="inline-flex max-w-xl text-center rounded-full border border-indigo-100 bg-gradient-to-r from-slate-50 to-blue-50/70 px-6 py-2.5 text-sm font-medium leading-snug text-slate-600 shadow-sm">
              All operations connected through a single intelligent system
            </span>
          </motion.div>
        </div>
      </section>

      <section
        className="relative overflow-hidden border-b border-white/10 bg-slate-950 py-16 text-white lg:py-24"
        aria-labelledby="nexus-platform-capabilities-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-40%,rgba(59,130,246,0.45),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/2 h-[min(42rem,90vw)] w-[min(42rem,90vw)] -translate-y-1/2 rounded-full bg-indigo-600/25 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[80px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.09)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:items-end lg:gap-14">
            <motion.div
              className="lg:pb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
                </span>
                Enterprise platform
              </span>
              <h2
                id="nexus-platform-capabilities-heading"
                className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
              >
                Platform capabilities for{" "}
                <span className="font-semibold text-slate-300">
                  resilience at scale
                </span>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
                Built for multi-site complexity—single pane of glass, consistent governance, and
                integrations that keep pace with how large operators actually run day to day.
              </p>
              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(59,130,246,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_-14px_rgba(99,102,241,0.55)] active:scale-[0.98]"
              >
                Plan a capability review
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4">
              {[
                {
                  title: "Centralized Dashboard",
                  subtitle: "One command center for every site, role, and SLA.",
                  span: "lg:col-span-7",
                  glow: "from-sky-500/30 via-blue-500/10 to-transparent",
                  iconWrap: "from-sky-400/25 to-blue-600/20 text-sky-200 ring-sky-400/25",
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
                  subtitle: "Roll out visibility and policy across regions without silos.",
                  span: "lg:col-span-5",
                  glow: "from-cyan-500/25 via-teal-500/10 to-transparent",
                  iconWrap: "from-cyan-400/25 to-teal-600/15 text-cyan-200 ring-cyan-400/20",
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
                  subtitle: "Live telemetry and alerts—not yesterday's batch report.",
                  span: "lg:col-span-5",
                  glow: "from-violet-500/30 via-fuchsia-500/10 to-transparent",
                  iconWrap: "from-violet-400/30 to-fuchsia-600/15 text-violet-200 ring-violet-400/25",
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                      <path d="m13 2-7 10h5l-1 10 8-12h-5l0-8Z" />
                    </svg>
                  ),
                },
                {
                  title: "System Integrations",
                  subtitle: "API-first hooks into ERP, WMS, HRIS, and custom stacks.",
                  span: "lg:col-span-7",
                  glow: "from-amber-500/20 via-orange-500/10 to-transparent",
                  iconWrap: "from-amber-400/20 to-orange-600/15 text-amber-200 ring-amber-400/20",
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
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-[box-shadow,transform] duration-300 hover:border-white/20 hover:shadow-[0_24px_64px_-28px_rgba(59,130,246,0.35)] sm:p-6 ${item.span}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={hoverLift}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: index * 0.05 }}
                >
                  <div
                    className={`pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${item.glow} blur-2xl`}
                    aria-hidden
                  />
                  <span
                    className="pointer-events-none absolute right-4 top-3 font-mono text-5xl font-black tabular-nums leading-none text-white/[0.06]"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={`relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg ring-1 ${item.iconWrap}`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="relative mt-4 text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-400 sm:text-[0.97rem]">
                    {item.subtitle}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/80 py-16 lg:py-24"
        aria-labelledby="nexus-operational-benefits-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_15%_20%,rgba(59,130,246,0.09),transparent),radial-gradient(ellipse_70%_50%_at_85%_75%,rgba(139,92,246,0.07),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-[min(28%,18rem)] top-0 h-[28rem] w-[28rem] rotate-12 rounded-[3rem] border border-slate-200/60 bg-gradient-to-bl from-white/80 to-slate-100/40 shadow-inner"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-8 left-8 hidden h-24 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent lg:block"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-8 right-8 hidden h-24 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent lg:block"
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
            <span className="inline-flex items-center rounded-full border border-slate-200/90 bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.12)] backdrop-blur-sm">
              Outcomes
            </span>
            <h2
              id="nexus-operational-benefits-heading"
              className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
            >
              Operational benefits you can{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-[color:var(--inops-blue)]">
                  measure
                </span>
                <span
                  className="absolute -bottom-1 left-0 right-0 z-0 h-3 rounded-full bg-[color:var(--inops-blue)]/15 blur-[2px]"
                  aria-hidden
                />
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Benchmark-style deltas teams report after wiring NexusOps across assets, logistics, and
              fulfillment—fewer blind spots, faster cycles, sharper calls on the floor.
            </p>
          </motion.div>

          <div className="relative mt-14">
            <div
              className="pointer-events-none absolute left-[8%] right-[8%] top-[52%] hidden h-px bg-gradient-to-r from-transparent via-slate-300/90 to-transparent xl:block"
              aria-hidden
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
              {[
                {
                  value: "+35%",
                  label: "Asset Utilization",
                  description: "Raise yield from fleets and fixed assets with utilization intelligence.",
                  ring: "from-emerald-400 via-teal-500 to-cyan-600",
                  iconTint: "from-emerald-500/15 to-teal-600/10 text-emerald-700 ring-emerald-200/60",
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
                  description: "Less fuel burn, detention, and dead miles through smarter routing and yards.",
                  ring: "from-amber-400 via-orange-500 to-rose-600",
                  iconTint: "from-amber-500/15 to-orange-600/10 text-amber-800 ring-amber-200/70",
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
                  value: "-15%",
                  label: "Cycle Times",
                  description: "Shorter dock-to-door lead time with orchestrated handoffs.",
                  ring: "from-sky-400 via-blue-500 to-indigo-600",
                  iconTint: "from-sky-500/15 to-indigo-600/10 text-blue-800 ring-sky-200/70",
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
                  description: "Fewer fire drills—operators align on one trusted operational picture.",
                  ring: "from-violet-400 via-purple-500 to-fuchsia-600",
                  iconTint: "from-violet-500/15 to-fuchsia-600/10 text-violet-800 ring-violet-200/70",
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                      <path d="M12 3 5 6v6c0 5 3.5 7.8 7 9 3.5-1.2 7-4 7-9V6l-7-3Z" />
                      <path d="m9.5 12 1.7 1.7 3.3-3.4" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className={`rounded-[1.35rem] bg-gradient-to-br p-[1px] shadow-[0_20px_50px_-28px_rgba(15,23,42,0.18)] ${item.ring}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: index * 0.06 }}
                >
                  <motion.article
                    className="relative h-full overflow-hidden rounded-[1.3rem] bg-white/95 p-6 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-sm transition-[box-shadow] duration-300 hover:shadow-[0_28px_60px_-32px_rgba(59,130,246,0.2)]"
                    whileHover={hoverLift}
                  >
                    <span
                      className="pointer-events-none absolute -left-1 top-6 font-mono text-[4.5rem] font-black leading-none tracking-tighter text-slate-100"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={`relative mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br shadow-sm ring-1 ${item.iconTint}`}
                    >
                      {item.icon}
                    </div>
                    <p className="relative mt-5 text-5xl font-black tracking-tight text-slate-900">
                      {item.value}
                    </p>
                    <h3 className="relative mt-2 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                      {item.label}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-slate-600 sm:text-[0.97rem]">
                      {item.description}
                    </p>
                  </motion.article>
                </motion.div>
              ))}
            </div>
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

      <SolutionPageClosingCta
        headingId="enterprise-final-cta-heading"
        heading="Transform Enterprise Operations with a Unified Platform"
        description={
          <>
            Join the world&apos;s most efficient companies. Schedule a personalized walkthrough of the nexusOps
            environment today.
          </>
        }
        primaryLabel="Request Free Demo"
        secondaryLabel="Contact Sales"
        footnote="No commitment required. 15-minute introductory call."
      />
    </div>
  );
}
