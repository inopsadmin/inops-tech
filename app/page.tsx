"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import HeroBackgroundSlider from "./components/HeroBackgroundSlider";
import { FadeUp, StaggerContainer, StaggerItem } from "./components/MotionSection";
import { AnimatedSection, AnimatedHeading, AnimatedParagraph, AnimatedCardGrid, AnimatedCardItem } from "./components/AnimatedSection";
import FeaturesSlider from "./components/FeaturesSlider";
import ModulesSlider from "./components/ModulesSlider";
import IndustriesSlider from "./components/IndustriesSlider";
import BrandsSlider from "./components/BrandsSlider";
import ContactForm from "./components/ContactForm";
import TiltCard from "./components/TiltCard";
import SectionFade from "./components/SectionFade";
import AnimatedCounter from "./components/AnimatedCounter";
import { whySectionCardImages } from "@/app/lib/serviceImagery";

const whyCards = [
  {
    icon: "chart",
    title: "Decisions Powered by Real‑Time Data",
    text:
      "Turn raw workforce data into clear, actionable insights. Live dashboards, geo-tagged attendance, and AI-based pattern detection help you boost productivity and spot issues before they become problems.",
    badge: "Real-time insights",
    imageUrl: whySectionCardImages[0],
  },
  {
    icon: "lock",
    title: "Security & Compliance You Can Trust",
    text:
      "Built for strict labour and statutory compliance from day one. InOps centralises records, enforces policy rules, and gives you clean, audit-ready trails that keep regulators and internal teams aligned.",
    badge: "Security first",
    imageUrl: whySectionCardImages[1],
  },
  {
    icon: "gear",
    title: "Designed to Scale With You",
    text:
      "Start with one site or go enterprise-wide. Cloud, on‑premise, or hybrid—InOps adapts to your infra, connects to your existing systems, and grows smoothly as your workforce and contractor base expands.",
    badge: "Built to scale",
    imageUrl: whySectionCardImages[2],
  },
  {
    icon: "integration",
    title: "Hardware + Software That Just Works",
    text:
      "Biometric devices, access control, turnstiles, and CLMS all in sync. InOps plugs into HRMS, payroll, and ERP so attendance, access, and payouts stay perfectly aligned without spreadsheets.",
    badge: "Seamless integration",
    imageUrl: whySectionCardImages[3],
  },
  {
    icon: "image",
    title: "A Single View of Your Workforce",
    text:
      "See sites, contractors, and shifts at a glance with a clean, visual dashboard that lets you drill into the details only when you need to.",
    badge: "Workforce view",
    imageUrl: whySectionCardImages[4],
  },
  {
    icon: "doc",
    title: "Compliance on Autopilot",
    text:
      "Standardise onboarding, attendance, wage calculation, and document collection in one place. InOps automates reminders, expiries, and reports so your teams spend less time chasing paperwork.",
    badge: "Audit-ready",
    imageUrl: whySectionCardImages[5],
  },
];

export default function Home() {
  const [heroDarkPhase, setHeroDarkPhase] = useState(true);
  const [whyOrder, setWhyOrder] = useState<string[]>(() => {
    const preferred = "A Single View of Your Workforce";
    const titles = whyCards.map((c) => c.title);
    if (!titles.includes(preferred)) return titles;
    return [preferred, ...titles.filter((t) => t !== preferred)];
  });

  const selectedWhyTitle = whyOrder[0] ?? whyCards[0]?.title;
  const selectedWhyCard = whyCards.find((c) => c.title === selectedWhyTitle) ?? whyCards[0];

  const swapFeaturedWith = (title: string) => {
    setWhyOrder((prev) => {
      const idx = prev.indexOf(title);
      if (idx <= 0) return prev;
      const next = [...prev];
      [next[0], next[idx]] = [next[idx], next[0]];
      return next;
    });
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900 perspective-page">
      {/* Hero: on home, navbar is static above this block; after hero, navbar is fixed + white */}
      <SectionFade>
        <section
          id="home-hero"
          className="relative -mt-[4.5rem] flex min-h-[88vh] flex-col items-center justify-center overflow-hidden pt-[6.25rem] sm:pt-[7rem] noise-overlay"
        >
          <HeroBackgroundSlider onPhaseChange={setHeroDarkPhase} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/50" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_20%,rgba(59,130,246,0.12),transparent_55%)]" aria-hidden />
          <div className="relative z-[1] mx-auto flex min-h-[90vh] w-full max-w-5xl flex-col items-center justify-center px-6 pb-24 text-center sm:px-8 lg:px-12">
            <motion.div
              className="flex flex-col items-center"
              initial={false}
              animate={{
                opacity: heroDarkPhase ? 0 : 1,
                y: heroDarkPhase ? 16 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
              }}
              style={{ pointerEvents: heroDarkPhase ? "none" : "auto" }}
            >
              <motion.div
                className="flex flex-col items-center"
                initial={false}
                animate={heroDarkPhase ? "hidden" : "visible"}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
                  },
                  hidden: {
                    transition: { staggerChildren: 0.03, staggerDirection: -1 },
                  },
                }}
              >
                <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 12 } }} transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}>
                  <span className="inline-flex max-w-[min(100%,22rem)] items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-md sm:max-w-none sm:px-5 sm:tracking-[0.22em] sm:text-[11px]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" aria-hidden />
                    Contract Labour Management
                  </span>
                </motion.div>
                <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 16 } }} transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }} className="mt-7 sm:mt-8">
                  <h1 className="mx-auto max-w-[min(100%,40rem)] font-sans text-[1.35rem] font-heading-bold leading-[1.22] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.55)] sm:text-3xl sm:leading-[1.2] lg:max-w-[55rem] lg:text-4xl lg:leading-[1.18] xl:text-[2.68rem] xl:leading-[1.22] antialiased">
                    <span className="text-sky-100">InOps Solutions</span>{" "}
                    <span className="text-white">
                      delivers advanced <br /> workforce management and authentication systems designed for industrial <br />environments.
                    </span>
                  </h1>
                </motion.div>
                <div className="relative mt-8 w-full max-w-2xl sm:mt-10">
                  <div
                    className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-white/20 via-white/[0.06] to-transparent opacity-90"
                    aria-hidden
                  />
                  <div className="relative overflow-hidden rounded-3xl border border-white/[0.12] bg-slate-950/[0.42] px-6 py-6 shadow-[0_28px_90px_-24px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:px-8 sm:py-7">
                    <div
                      className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent sm:inset-x-8"
                      aria-hidden
                    />
                    <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 12 } }} transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}>
                      <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-white/95 sm:text-base sm:leading-relaxed">
                        Our platform combines biometric technology, real-time tracking, and automated compliance to help organizations manage contract workers efficiently and securely.
                      </p>
                    </motion.div>
                    <motion.div
                      variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }}
                      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                      className="mt-5 border-t border-white/[0.08] pt-5"
                    >
                      <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-base sm:leading-relaxed">
                        With seamless integration of attendance, payroll, and access control, InOps ensures accurate workforce visibility, reduced manual errors, and improved operational efficiency across factories and industrial sites.
                      </p>
                    </motion.div>
                    <motion.div
                      variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 8 } }}
                      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
                      className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
                    >
                      {[
                        "CLMS software",
                        "Biometric attendance",
                        "Access control",
                        "Contract compliance",
                        "Payroll integration",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-white/75 shadow-sm backdrop-blur-sm sm:text-[11px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 14 } }}
                  transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                  className="mt-11 flex flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-4"
                >
                  <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="#contact"
                      className="btn-primary btn-glow inline-flex items-center justify-center rounded-2xl bg-gradient-to-b from-blue-500 to-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-[0_12px_40px_-8px_rgba(37,99,235,0.55)] ring-1 ring-white/15 transition hover:from-blue-600 hover:to-blue-700 hover:shadow-[0_16px_48px_-10px_rgba(37,99,235,0.6)]"
                    >
                      Get In Touch
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="#solutions"
                      className="btn-secondary inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/[0.08] px-8 py-3.5 text-base font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-md transition hover:border-white/35 hover:bg-white/[0.14] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)]"
                    >
                      Our Solutions
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </SectionFade>

      {/* Why InOps */}
      <AnimatedSection id="about" className="relative bg-white py-10 lg:py-12">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-50" aria-hidden />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-24 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-200/55 via-sky-200/30 to-transparent blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-[18rem] w-[18rem] rounded-full bg-gradient-to-tr from-indigo-200/45 via-blue-200/20 to-transparent blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-label uppercase tracking-wider text-blue-700">
              Why InOps
            </span>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 34, rotateX: 14 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "center top", perspective: 900 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <AnimatedHeading as="h2" className="text-3xl font-heading-bold tracking-tight text-gray-900 sm:text-4xl">
                  Built for Enterprises That Can’t Afford Compliance Gaps
                </AnimatedHeading>
              </motion.div>
            </motion.div>
            <AnimatedParagraph className="mx-auto mt-6 max-w-2xl font-body text-gray-600">
              Built for factories and industrial sites: one platform for visibility, compliance, and secure access—so operations teams spend less time on paperwork and more time running the floor.
            </AnimatedParagraph>
          </div>

          {/* Screenshot-inspired layout: featured card + compact grid */}
          <motion.div
            className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.95fr] lg:items-start"
            initial={{ opacity: 0, y: 42, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Left: featured */}
            <motion.div
              className="group relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white shadow-sm transition-shadow duration-150 ease-out hover:shadow-[0_18px_46px_-22px_rgba(15,23,42,0.42)]"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "center center" }}
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-sky-400 to-transparent transition-transform duration-300 group-hover:scale-x-100" />

              {/* Click left card => swap with first right card */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setWhyOrder((prev) => {
                        if (prev.length < 2) return prev;
                        return [...prev.slice(1), prev[0]]; 
                      })
                    }
                    className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label="Switch featured card"
                  >
                    <motion.div
                      key={selectedWhyCard.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr]"
                    >
                  <div className="relative min-h-[220px] lg:min-h-[360px]">
                    <Image
                      src={selectedWhyCard.imageUrl}
                      alt={selectedWhyCard.title}
                      fill
                      className="object-cover transition-transform duration-150 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/20 to-transparent" />
                    <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-body-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                      {selectedWhyCard.badge ?? "Dashboard view"}
                    </div>
                  </div>

                  <div className="relative flex flex-col justify-between p-6 transition-colors duration-150 ease-out sm:p-8">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-label uppercase tracking-wider text-blue-700 transition-colors duration-150 ease-out group-hover:border-blue-300 group-hover:bg-blue-100">
                        Why teams choose us
                      </div>
                      <h3 className="mt-4 text-xl font-heading-bold leading-tight tracking-tight text-gray-900 transition-colors duration-150 ease-out sm:text-2xl">
                        {selectedWhyCard.title}
                      </h3>
                      <p className="mt-3 text-sm font-body leading-relaxed text-gray-600 transition-colors duration-150 ease-out group-hover:text-gray-700 sm:text-[15px]">
                        {selectedWhyCard.text}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <span className="btn-primary btn-glow inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm text-white shadow-md transition-colors duration-150 ease-out group-hover:bg-blue-700">
                        View all Solutions
                      </span>
                      <span className="text-xs font-body text-gray-500">Click to switch cards</span>
                    </div>

                    <div className="mt-6 h-px w-20 bg-gradient-to-r from-gray-200 to-transparent" aria-hidden />
                  </div>
                    </motion.div>
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right: compact grid (like resource cards) */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {whyOrder.slice(1).map((title, index) => {
                const card = whyCards.find((c) => c.title === title);
                if (!card) return null;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/70 shadow-sm backdrop-blur transition duration-300 hover:border-blue-300 hover:bg-white hover:shadow-[0_0_0_3px_rgba(59,130,246,0.16),0_18px_55px_-28px_rgba(2,132,199,0.45)]"
                  >
                    <div className="pointer-events-none absolute inset-x-5 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-sky-400 to-transparent transition-transform duration-300 group-hover:scale-x-100" />

                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.15 + index * 0.05 }}
                    >
                      <button
                        type="button"
                        onClick={() => swapFeaturedWith(card.title)}
                        className="w-full p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        aria-label={`Show ${card.title}`}
                      >
                        <div className="flex gap-3">
                        <div className="relative h-14 w-16 flex-none overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
                          <Image src={card.imageUrl} alt="" fill className="object-cover transition duration-700 group-hover:scale-[1.07]" sizes="64px" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-white text-blue-700 ring-1 ring-blue-100 shadow-sm">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                {card.icon === "chart" && <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2Zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2" />}
                                {card.icon === "lock" && (
                                  <>
                                    <path d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z" />
                                    <path d="M18 9V7a6 6 0 1 0-12 0v2" />
                                  </>
                                )}
                                {card.icon === "gear" && (
                                  <>
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065Z" />
                                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                  </>
                                )}
                                {card.icon === "integration" && <path d="M11 4a2 2 0 1 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a2 2 0 1 0 0 4h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a2 2 0 1 0-4 0v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H4a2 2 0 1 1 0-4h1a1 1 0 0 0 1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V4Z" />}
                                {card.icon === "doc" && <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />}
                              </svg>
                            </div>
                          </div>

                          <div className="mt-2 line-clamp-2 text-sm font-heading leading-snug text-gray-900">{card.title}</div>
                          <div className="mt-2 inline-flex items-center gap-2 text-xs font-body-medium text-blue-700/90">
                            <span className="relative">
                              Click to swap
                              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
                            </span>
                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                              <path d="M5 12h14" />
                              <path d="M13 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                        </div>
                      </button>
                    </motion.div>
                  </motion.div>
                );
                })}
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <SectionFade className="border-t border-gray-100"><FeaturesSlider /></SectionFade>
      <SectionFade className="border-t border-gray-100"><ModulesSlider /></SectionFade>

      {/* Smart Contract Labour — full-bleed background (per reference) */}
      <SectionFade>
        <section className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.035 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1800&q=85"
              alt="Worker at access control"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/40" />
          </motion.div>

          <div className="relative mx-auto flex min-h-[min(72vh,38rem)] max-w-7xl flex-col items-center justify-center px-6 py-10 text-center text-white lg:px-12">
            <motion.div
              className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-depth-xl backdrop-blur-md sm:px-10 sm:py-12"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
            <motion.span
              className="text-sm font-body-medium tracking-wide text-white/75"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            >
              We are always ahead
            </motion.span>

            <motion.h2
              className="mt-3 text-center text-3xl font-heading-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Professional solutions for your business.
            </motion.h2>

            <motion.p
              className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-white/75 sm:text-base"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            >
              We provide premium customer support and affordable programs to roll out CLMS, attendance, and access—site by site, at your pace.
            </motion.p>

            <motion.div
              className="mx-auto mt-6 flex gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.22 }}
            >
              <div className="h-1 w-10 rounded-full bg-emerald-400" />
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
            >
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#contact"
                  className="btn-primary btn-glow inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-2.5 text-sm text-white shadow-md transition hover:bg-blue-600"
                >
                  Start A Project
                </Link>
              </motion.div>
              <motion.a
                href="tel:08027745220"
                className="btn-secondary inline-flex items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                aria-label="Call us"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Call Us: 08027745220
              </motion.a>
              <span className="text-xs font-body text-white/70">For any question</span>
            </motion.div>

            <motion.div
              className="mt-10 grid w-full grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:gap-0"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
            >
              <div className="sm:px-8">
                <div className="text-5xl font-heading-bold tracking-tight text-white drop-shadow">
                  <AnimatedCounter value={856} duration={1.3} delay={0} />
                </div>
                <div className="mt-2 text-xs font-body-medium uppercase tracking-[0.22em] text-white/70">Satisfied Clients</div>
                <div className="mt-1 text-xs font-body text-white/55">Merits-leading experience</div>
              </div>
              <div className="relative sm:px-8">
                <div className="pointer-events-none absolute inset-y-2 -left-px hidden w-px bg-white/12 sm:block" aria-hidden />
                <div className="pointer-events-none absolute inset-y-2 -right-px hidden w-px bg-white/12 sm:block" aria-hidden />
                <div className="text-5xl font-heading-bold tracking-tight text-white drop-shadow">
                  <AnimatedCounter value={238} duration={1.3} delay={0.1} />
                </div>
                <div className="mt-2 text-xs font-body-medium uppercase tracking-[0.22em] text-white/70">Successful Investments</div>
                <div className="mt-1 text-xs font-body text-white/55">Merits-leading experience</div>
              </div>
              <div className="sm:px-8">
                <div className="text-5xl font-heading-bold tracking-tight text-white drop-shadow">
                  <AnimatedCounter value={341} duration={1.3} delay={0.2} />
                </div>
                <div className="mt-2 text-xs font-body-medium uppercase tracking-[0.22em] text-white/70">Satisfied Clients</div>
                <div className="mt-1 text-xs font-body text-white/55">Merits-leading experience</div>
              </div>
            </motion.div>
            </motion.div>
          </div>
        </section>
      </SectionFade>

      {/* Scroll to top */}
      <motion.a
        href="#"
        className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition hover:bg-blue-600 hover:shadow-xl btn-glow"
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.a>

      <SectionFade className="border-t border-gray-100"><IndustriesSlider /></SectionFade>

      {/* Feature cards — blog-post style (per reference image) */}
   
      {/* Feature cards + logo strip (single bordered container) */}
      <SectionFade effect="3d">
        <div className="max-w-full">
          <div className="overflow-hidden rounded-3xl border-2 border-b-0 border-blue-200 bg-white shadow-depth-lg mr-[-5] shadow-gray-900/5">
            {/* Feature cards — 3-up layout (per reference image) */}
            <section className="bg-white py-8 lg:py-10">
              <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <motion.div
                  className="grid grid-cols-1 gap-6 lg:grid-cols-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={{
                    hidden: { opacity: 1 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
                  }}
                >
                  {/* Card 01 */}
                  <motion.article
                    className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md will-change-transform"
                    variants={{
                      hidden: { opacity: 0, y: 18, scale: 0.985 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { type: "spring", stiffness: 140, damping: 22, mass: 0.9 },
                      },
                    }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.8 }}
                  >
                    <div className="relative overflow-hidden">
                      <TiltCard className="block">
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                          <Image
                            src="/Ghost employees.png"
                            alt="Worker at biometric gate"
                            fill
                            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        </div>
                      </TiltCard>
                      <div className="pointer-events-none absolute bottom-4 left-4 text-4xl font-heading-bold tracking-tight text-white">
                        01
                      </div>
                    </div>

                    <div className="px-6 pb-7 pt-6">
                      <div className="text-xs font-body italic text-gray-500">Workforce verification</div>
                      <h2 className="mt-2 text-lg font-heading-bold leading-snug tracking-tight text-gray-900 sm:text-xl">
                        No More Ghost Employees — <br /> Just Verified Workforce
                      </h2>
                      <p className="mt-3 text-sm font-body leading-relaxed text-gray-600">
                        Eliminate ghost employees with biometric authentication, real-time tracking, and geofencing. Automated payroll and audit trails ensure accurate records, prevent fraud, and keep your workforce fully compliant.
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                          <Link
                            href="#contact"
                            className="btn-primary btn-glow inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-2.5 text-sm text-white shadow-md transition hover:bg-blue-600"
                          >
                            Start A Project
                          </Link>
                        </motion.div>
                        <motion.a
                          href="tel:08027745220"
                          className="btn-secondary inline-flex items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                          aria-label="Call us"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Call Us: 08027745220
                        </motion.a>
                        <span className="text-xs font-body text-gray-500">For any question</span>
                      </div>

                      <div className="mt-6 h-px w-14 bg-gray-200" aria-hidden />
                    </div>
                  </motion.article>

                  {/* Card 02 */}
                  <motion.article
                    className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md will-change-transform"
                    variants={{
                      hidden: { opacity: 0, y: 18, scale: 0.985 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { type: "spring", stiffness: 140, damping: 22, mass: 0.9 },
                      },
                    }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.8 }}
                  >
                    <div className="relative overflow-hidden">
                      <TiltCard className="block">
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                          <Image
                            src="/Pilferage.png"
                            alt="Worker with tablet"
                            fill
                            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        </div>
                      </TiltCard>
                      <div className="pointer-events-none absolute bottom-4 left-4 text-4xl font-heading-bold tracking-tight text-white">
                        02
                      </div>
                    </div>

                    <div className="px-6 pb-7 pt-6">
                      <div className="text-xs font-body italic text-gray-500">Access intelligence</div>
                      <h2 className="mt-2 text-lg font-heading-bold leading-snug tracking-tight text-gray-900 sm:text-xl">
                        Prevent Pilferage With Smart <br /> Access Control
                      </h2>
                      <p className="mt-3 text-sm font-body leading-relaxed text-gray-600">
                        Ensure only authorized personnel access your premises with real-time movement tracking and intelligent, contract-based entry rules. Our system helps prevent pilferage, reduce theft, and eliminate misuse of resources.
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                          <Link
                            href="#contact"
                            className="btn-primary btn-glow inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-2.5 text-sm text-white shadow-md transition hover:bg-blue-600"
                          >
                            Start A Project
                          </Link>
                        </motion.div>
                        <motion.a
                          href="tel:08027745220"
                          className="btn-secondary inline-flex items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                          aria-label="Call us"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Call Us: 08027745220
                        </motion.a>
                        <span className="text-xs font-body text-gray-500">For any question</span>
                      </div>

                      <div className="mt-6 h-px w-14 bg-gray-200" aria-hidden />
                    </div>
                  </motion.article>

                  {/* Card 03 */}
                  <motion.article
                    className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md will-change-transform"
                    variants={{
                      hidden: { opacity: 0, y: 18, scale: 0.985 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { type: "spring", stiffness: 140, damping: 22, mass: 0.9 },
                      },
                    }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.8 }}
                  >
                    <div className="relative overflow-hidden">
                      <TiltCard className="block">
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                          <Image
                            src="/ESG-Aligned Compliance.png"
                            alt="Workers reviewing documents"
                            fill
                            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        </div>
                      </TiltCard>
                      <div className="pointer-events-none absolute bottom-4 left-4 text-4xl font-heading-bold tracking-tight text-white">
                        03
                      </div>
                    </div>

                    <div className="px-6 pb-7 pt-6">
                      <div className="text-xs font-body italic text-gray-500">ESG compliance</div>
                      <h2 className="mt-2 text-lg font-heading-bold leading-snug tracking-tight text-gray-900 sm:text-xl">
                        Driving ESG-Aligned <br /> Compliance
                      </h2>
                      <p className="mt-3 text-sm font-body leading-relaxed text-gray-600">
                        Stay aligned with region-specific compliance norms and labor laws while fostering a safe and transparent workplace. The system supports ethical labor practices and reinforces the Social and Governance pillars of your ESG commitments.
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                          <Link
                            href="#contact"
                            className="btn-primary btn-glow inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-2.5 text-sm text-white shadow-md transition hover:bg-blue-600"
                          >
                            Start A Project
                          </Link>
                        </motion.div>
                        <motion.a
                          href="tel:08027745220"
                          className="btn-secondary inline-flex items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                          aria-label="Call us"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Call Us: 08027745220
                        </motion.a>
                        <span className="text-xs font-body text-gray-500">For any question</span>
                      </div>

                      <div className="mt-6 h-px w-14 bg-gray-200" aria-hidden />
                    </div>
                  </motion.article>
                </motion.div>
              </div>
            </section>
            <SectionFade><BrandsSlider /></SectionFade>
         
          </div>
        </div>
      </SectionFade>
      {/* <SectionFade><BrandsSlider /></SectionFade> */}

      {/* Contact */}
      <SectionFade id="contact" className="relative py-10 lg:py-14">
        <div className="relative">
          <div className="grid overflow-hidden lg:grid-cols-[57%_43%]">
            {/* Left image (separate from form component) */}
            <div className="relative min-h-[200px] w-full sm:min-h-[240px] lg:min-h-[min(28rem,50vh)]">
              <Image
                src="/Gemini_Generated_Image_jpzp25jpzp25jpzp.png"
                alt="Request a consultation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 57vw"
                priority={false}
              />
              {/* <div className="absolute inset-0 bg-black/20" aria-hidden /> */}
            </div>

            {/* Right form */}
            <div className="min-w-0 px-4 py-6 sm:px-6 sm:py-8 lg:p-12">
              <FadeUp>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Request a Free Consultation
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
                  Tell us about your sites, contractors, and gates—we will map attendance, payroll, and access to your workflow.
                </p>
                <div className="mt-5 h-1 w-10 rounded-full bg-emerald-500" aria-hidden />
                <FadeUp delay={0.1} className="mt-10">
                  <ContactForm />
                </FadeUp>
              </FadeUp>
            </div>
          </div>
        </div>
      </SectionFade>
    </div>
  );
}
