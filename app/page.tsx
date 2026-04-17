"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import HeroBackgroundSlider from "./components/HeroBackgroundSlider";
import { FadeUp, StaggerContainer, StaggerItem } from "./components/MotionSection";
import { AnimatedSection, AnimatedHeading, AnimatedParagraph, AnimatedCardGrid, AnimatedCardItem } from "./components/AnimatedSection";
import FeaturesSlider from "./components/FeaturesSlider";
import IndustriesSlider from "./components/IndustriesSlider";
import BrandsSlider from "./components/BrandsSlider";
import ContactForm from "./components/ContactForm";
import TiltCard from "./components/TiltCard";
import SectionFade from "./components/SectionFade";
import { heroSlides, whySectionCardImages } from "@/app/lib/serviceImagery";

const whyCards = [
  {
    icon: "chart",
    title: "Workforce Governance",
    text:
      "A single source of truth for managing your entire workforce ecosystem. Streamline HR operations, contract labour management, and workplace services with complete visibility and compliance.",
    badge: "Governance",
    imageUrl: whySectionCardImages[1],
  },
  {
    icon: "lock",
    title: "Face Solutions",
    text:
      "AI-powered face recognition across mobile, CCTV, and on-ground devices. Enable secure, touchless attendance and real-time workforce tracking across locations.",
    badge: "Face recognition",
    imageUrl: whySectionCardImages[0],
  },
  {
    icon: "gear",
    title: "Financial Wellness (EWA)",
    text:
      "Empowering employees with access to earned wages, when they need it. Improve financial well-being while helping organizations drive retention and productivity.",
    badge: "EWA",
    imageUrl: whySectionCardImages[5],
  },
  {
    icon: "integration",
    title: "Enterprise Solutions",
    text:
      "Digitizing operations across assets, logistics, and warehouses. Improve efficiency with real-time tracking, automation, and data-driven decision-making.",
    badge: "Enterprise scale",
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
];

export default function Home() {
  const [heroDarkPhase, setHeroDarkPhase] = useState(true);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
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
          className="relative -mt-[4.5rem] flex min-h-[calc(100svh-1rem)] flex-col items-center justify-center overflow-hidden pt-[6.25rem] sm:pt-[7rem] noise-overlay"
        >
          <HeroBackgroundSlider onPhaseChange={setHeroDarkPhase} onSlideChange={setActiveHeroIndex} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/50" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_20%,rgba(59,130,246,0.12),transparent_55%)]" aria-hidden />
          <div className="relative z-[1] mx-auto flex min-h-[calc(100svh-4.5rem)] w-full max-w-5xl flex-col items-center justify-center px-5 pb-16 text-center sm:px-8 sm:pb-24 lg:px-12">
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
                  <h1 className="mx-auto max-w-[min(100%,44rem)] font-sans text-[clamp(1.55rem,5.4vw,2.15rem)] font-heading-bold leading-[1.12] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.55)] sm:text-3xl sm:leading-[1.12] lg:max-w-[58rem] lg:text-[2.65rem] lg:leading-[1.1] xl:text-[3.1rem] xl:leading-[1.1] antialiased">
                    {heroSlides[activeHeroIndex]?.title}
                  </h1>
                </motion.div>
                <div className="relative mt-6 w-full max-w-2xl sm:mt-9">
                  <div
                    className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-white/20 via-white/[0.06] to-transparent opacity-90"
                    aria-hidden
                  />
                  <div className="relative overflow-hidden rounded-3xl border border-white/[0.14] bg-slate-950/[0.38] px-5 py-4 shadow-[0_26px_85px_-28px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:px-8 sm:py-7">
                    <div
                      className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent sm:inset-x-8"
                      aria-hidden
                    />
                    <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 12 } }} transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}>
                      <p className="mx-auto max-w-xl text-[14px] leading-relaxed text-white/90 sm:text-[16px] sm:leading-relaxed">
                        {heroSlides[activeHeroIndex]?.description}
                      </p>
                    </motion.div>
                    {/* <motion.div
                      variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }}
                      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                      className="mt-5 border-t border-white/[0.08] pt-5"
                    >
                      <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-base sm:leading-relaxed">
                        With seamless integration of attendance, payroll, and access control, InOps ensures accurate workforce visibility, reduced manual errors, and improved operational efficiency across factories and industrial sites.
                      </p>
                    </motion.div> */}
                  </div>
                </div>
                <motion.div
                  variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 14 } }}
                  transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                  className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-11 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
                >
                  <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="#contact"
                      className="btn-primary btn-glow inline-flex h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-b from-blue-500 to-blue-600 px-6 text-[15px] font-semibold text-white shadow-[0_12px_40px_-8px_rgba(37,99,235,0.55)] ring-1 ring-white/15 transition hover:from-blue-600 hover:to-blue-700 hover:shadow-[0_16px_48px_-10px_rgba(37,99,235,0.6)] sm:w-auto sm:px-8 sm:text-base"
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
                      className="btn-secondary inline-flex h-12 w-full items-center justify-center rounded-2xl border border-white/25 bg-white/[0.08] px-6 text-[15px] font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-md transition hover:border-white/35 hover:bg-white/[0.14] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)] sm:w-auto sm:px-8 sm:text-base"
                    >
                      Our Solutions
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }}
                  transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1], delay: 0.04 }}
                  className="mt-10 flex items-center justify-center gap-2 text-xs font-medium tracking-wide text-white/70 sm:mt-11"
                >
                  <span className="h-1 w-10 rounded-full bg-white/15" aria-hidden />
                  <span>Scroll to explore</span>
                  <svg className="h-4 w-4 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 5v14" />
                    <path d="M19 12l-7 7-7-7" />
                  </svg>
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
            className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.95fr] lg:items-stretch"
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:h-full lg:grid-cols-2 lg:grid-rows-2">
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
                    className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/80 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.5)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/80 hover:from-white hover:to-blue-50/40 hover:shadow-[0_0_0_2px_rgba(59,130,246,0.12),0_22px_55px_-26px_rgba(30,64,175,0.35)]"
                  >
                    <div className="pointer-events-none absolute inset-x-5 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-sky-400 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-blue-100/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.15 + index * 0.05 }}
                    >
                      <button
                        type="button"
                        onClick={() => swapFeaturedWith(card.title)}
                        className="h-full w-full p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:p-5"
                        aria-label={`Show ${card.title}`}
                      >
                        <div className="flex h-full gap-3 sm:gap-3.5">
                        <div className="relative h-14 w-16 flex-none overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:h-[3.7rem] sm:w-[4.2rem]">
                          <Image src={card.imageUrl} alt="" fill className="object-cover transition duration-700 group-hover:scale-[1.07]" sizes="64px" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
                        </div>

                        <div className="min-w-0 flex flex-1 flex-col justify-between">
                          <div className="flex items-start justify-between gap-2">
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-white text-blue-700 ring-1 ring-blue-100 shadow-sm">
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
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

                          <div className="mt-2 inline-flex w-fit rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700">
                            {card.badge ?? "Capability"}
                          </div>
                          <div className="mt-1.5 line-clamp-2 text-[1rem] font-heading-semibold leading-snug text-slate-900">{card.title}</div>
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

      {/* Operational challenges matrix — premium table layout */}
      <SectionFade>
        <section className="relative overflow-hidden py-2">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.035 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/image.png"
              alt="Operational dashboard and workforce management"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-slate-900/68" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#101b34]/85 via-[#15203b]/75 to-[#0f1a31]/88" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.22),transparent_40%),radial-gradient(circle_at_82%_80%,rgba(56,189,248,0.16),transparent_40%)]" />
          </motion.div>

          <div className="relative mx-auto flex min-h-[min(72vh,38rem)] max-w-7xl flex-col justify-center px-6 py-10 text-white lg:px-12">
            <motion.div
              className="w-full rounded-[2rem] border border-white/20 bg-[linear-gradient(130deg,rgba(255,255,255,0.11),rgba(255,255,255,0.05)_45%,rgba(148,163,184,0.05))] px-5 py-8 shadow-[0_40px_100px_-36px_rgba(15,23,42,0.95)] ring-1 ring-white/10 backdrop-blur-2xl sm:px-8 sm:py-10 lg:px-10"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
              >
                <span className="inline-flex items-center rounded-full border border-blue-200/35 bg-blue-400/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                  Solutions
                </span>
                <h2 className="mt-4 bg-gradient-to-b from-white via-blue-100 to-slate-200 bg-clip-text text-2xl font-heading-bold tracking-tight text-transparent sm:text-3xl lg:text-[2.2rem]">
                  Solving Real Operational Challenges
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-blue-100/75 sm:text-base">
                  A practical matrix that maps daily operational risks to measurable, automated outcomes.
                </p>
              </motion.div>

              <motion.div
                className="mt-8 overflow-hidden rounded-2xl border border-white/20 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.55),rgba(15,23,42,0.42))] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_26px_60px_-36px_rgba(15,23,42,0.95)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                <div className="grid grid-cols-2 border-b border-white/15 bg-white/[0.06]">
                  <div className="px-4 py-3.5 sm:px-6">
                    <div className="mx-auto w-full max-w-[22rem] text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      Problem
                    </div>
                  </div>
                  <div className="border-l border-white/10 px-4 py-3.5 sm:px-6">
                    <div className="mx-auto w-full max-w-[22rem] text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      InOps Solution
                    </div>
                  </div>
                </div>

                {[
                  ["Fragmented workforce data", "Unified platform"],
                  ["Compliance risks", "Automated tracking & alerts"],
                  ["Workers has no access to formal credit", "Earned Wage Access"],
                  ["Proxy attendance", "Face recognition"],
                  ["Manual operations", "Automation & analytics"],
                ].map(([problem, solution], idx) => (
                  <div
                    key={problem}
                    className={`group grid min-h-[56px] grid-cols-2 items-center transition-colors duration-200 hover:bg-blue-400/[0.07] ${
                      idx !== 4 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <div className="px-4 py-3.5 sm:px-6">
                      <div className="mx-auto flex w-full max-w-[22rem] items-center gap-2.5 text-left text-sm leading-relaxed text-white/85 sm:text-[15px]">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-300/80 transition-colors group-hover:bg-blue-200" />
                        {problem}
                      </div>
                    </div>
                    <div className="border-l border-white/10 px-4 py-3.5 sm:px-6">
                      <div className="mx-auto flex w-full max-w-[22rem] items-center gap-2 text-left text-sm font-semibold leading-relaxed text-blue-100 sm:text-[15px]">
                        <svg className="h-4 w-4 shrink-0 text-cyan-300/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="m5 12 5 5L20 7" />
                        </svg>
                        {solution}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
              >
                {["Data Integrity", "Compliance Automation", "Face Recognition", "EWA Ready", "Enterprise Scale"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/25 bg-white/[0.08] px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition hover:-translate-y-0.5 hover:bg-white/[0.14]"
                  >
                    {tag}
                  </span>
                ))}
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
                    className="group relative overflow-hidden rounded-3xl border border-transparent bg-white shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)] ring-1 ring-slate-200/80 transition will-change-transform hover:shadow-[0_30px_70px_-40px_rgba(15,23,42,0.55)] hover:ring-blue-200/70"
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
                    <div
                      className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/70 via-sky-200/30 to-transparent" />
                    </div>
                    <div className="relative px-6 pb-7 pt-6">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-heading-bold tracking-tight text-gray-900">
                          Manager Dashboard
                        </h3>
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-slate-600">
                          Team view
                        </span>
                      </div>
                      <TiltCard className="mt-4 block">
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                          <Image
                            src="/image-1024x692.png"
                            alt="Manager dashboard"
                            fill
                            className="object-cover object-center transition duration-500 group-hover:scale-[1.035]"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/50" aria-hidden />
                        </div>
                      </TiltCard>
                      <div className="mt-5 h-px w-16 bg-gradient-to-r from-slate-200 to-transparent" aria-hidden />
                      <p className="mt-4 text-sm font-body leading-relaxed text-gray-600">
                        Real-time visibility into workforce attendance, productivity, and on-ground operations. Make faster decisions with actionable insights at a team level.
                      </p>
                    </div>
                  </motion.article>

                  {/* Card 02 */}
                  <motion.article
                    className="group relative overflow-hidden rounded-3xl border border-transparent bg-white shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)] ring-1 ring-slate-200/80 transition will-change-transform hover:shadow-[0_30px_70px_-40px_rgba(15,23,42,0.55)] hover:ring-blue-200/70"
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
                    <div
                      className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/60 via-blue-200/25 to-transparent" />
                    </div>
                    <div className="relative px-6 pb-7 pt-6">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-heading-bold tracking-tight text-gray-900">
                          CXO Dashboard
                        </h3>
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-slate-600">
                          Enterprise view
                        </span>
                      </div>
                      <TiltCard className="mt-4 block">
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                          <Image
                            src="/1_r5bfwbn5H6UK8ZnAJ1kufA.jpg"
                            alt="CXO dashboard"
                            fill
                            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/50" aria-hidden />
                        </div>
                      </TiltCard>
                      <div className="mt-5 h-px w-16 bg-gradient-to-r from-slate-200 to-transparent" aria-hidden />
                      <p className="mt-4 text-sm font-body leading-relaxed text-gray-600">
                        A unified view of workforce, compliance, and operational performance across the organization. Drive strategic decisions with a single source of truth and enterprise-level insights.
                      </p>
                    </div>
                  </motion.article>

                  {/* Card 03 */}
                  <motion.article
                    className="group relative overflow-hidden rounded-3xl border border-transparent bg-white shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)] ring-1 ring-slate-200/80 transition will-change-transform hover:shadow-[0_30px_70px_-40px_rgba(15,23,42,0.55)] hover:ring-blue-200/70"
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
                    <div
                      className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-200/55 via-emerald-200/20 to-transparent" />
                    </div>
                    <div className="relative px-6 pb-7 pt-6">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-heading-bold tracking-tight text-gray-900">
                          HR Dashboard
                        </h3>
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-slate-600">
                          People ops
                        </span>
                      </div>
                      <TiltCard className="mt-4 block">
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                          <Image
                            src="/hr_kpi_dashboard.png"
                            alt="HR dashboard"
                            fill
                            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/50" aria-hidden />
                        </div>
                      </TiltCard>
                      <div className="mt-5 h-px w-16 bg-gradient-to-r from-slate-200 to-transparent" aria-hidden />
                      <p className="mt-4 text-sm font-body leading-relaxed text-gray-600">
                        Centralized control over employee data, compliance, and lifecycle management. Ensure accuracy, visibility, and seamless workforce governance across systems.
                      </p>
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
