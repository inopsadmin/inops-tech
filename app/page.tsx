"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import "./home-visual.css";
import HeroBackgroundSlider from "./components/HeroBackgroundSlider";
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from "./components/AnimatedSection";
import BusinessImpactSection from "./components/BusinessImpactSection";
import FeaturesSlider from "./components/FeaturesSlider";
import IndustriesSlider from "./components/IndustriesSlider";
import { FlyInText } from "./components/FlyInText";
import SectionFade from "./components/SectionFade";
import CollaborateCtaBand from "./components/CollaborateCtaBand";
import VideoLivePopups, { type VideoLivePopupItem } from "./components/VideoLivePopups";
import { enlargedMarqueeLogoSrcs, industryLeaderClientLogos, logoAltFromSrc } from "@/app/lib/industryLeaderClientLogos";
import { heroSlides, whySectionCardImages } from "@/app/lib/serviceImagery";
import { inopsUi } from "@/app/lib/inopsUi";

const heroLogoVisualScale: Record<string, string> = {
  "/clients/ashok-leyland.svg": "scale-[0.9]",
  "/clients/automotive-axle.svg": "scale-[0.92]",
  "/clients/bfw.svg": "scale-[0.92]",
  "/clients/bhel.svg": "scale-[0.84]",
  "/clients/foxconn.svg": "scale-[0.88]",
  "/clients/hal.svg": "scale-[0.94]",
  "/clients/midhani.svg": "scale-[0.92]",
  "/clients/seg.svg": "scale-[0.92]",
  "/clients/skf.svg": "scale-[0.9]",
  "/clients/wheels-india.svg": "scale-[0.9]",
};

type DashboardCard = {
  title: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  badgeClass: string;
  footerTag: string;
  videoSrc?: string;
  livePopups?: VideoLivePopupItem[];
};

const dashboardCards: DashboardCard[] = [
  {
    title: "Manager Dashboard",
    badge: "Team view",
    imageSrc: "/image-1024x692.png",
    videoSrc: "/genrate_this_image_video_202605062242.mp4",
    imageAlt: "Manager dashboard",
    description:
      "Real-time visibility into workforce attendance, productivity, and on-ground operations. Make faster decisions with actionable insights at a team level.",
    badgeClass: "border-blue-200 bg-blue-50 text-blue-700",
    footerTag: "Unified command center",
    livePopups: [
      { position: "top-left", label: "Live", title: "Team activity", accent: "emerald" },
      {
        position: "bottom-right",
        label: "Synced",
        title: "Attendance updated",
        variant: "icon",
        icon: "check",
        accent: "blue",
      },
    ],
  },
  {
    title: "CXO Dashboard",
    badge: "Enterprise view",
    imageSrc: "/1_r5bfwbn5H6UK8ZnAJ1kufA.jpg",
    videoSrc: "/images/genrate_a_video_form_image_202605062313.mp4",
    imageAlt: "CXO dashboard",
    description:
      "A unified view of workforce, compliance, and operational performance across the organization. Drive strategic decisions with a single source of truth and enterprise-level insights.",
    badgeClass: "border-violet-200 bg-violet-50 text-violet-700",
    footerTag: "Executive command center",
    livePopups: [
      { position: "top-right", label: "Live", title: "Cross-site KPIs", accent: "violet" },
      {
        position: "bottom-left",
        label: "Insight",
        title: "Productivity +12%",
        variant: "icon",
        icon: "chart",
        accent: "blue",
      },
    ],
  },
  {
    title: "HR Dashboard",
    badge: "People ops",
    imageSrc: "/images/improve-hiring-quality.jpg",
    videoSrc: "/images/genrate_this_part_video_202605062315.mp4",
    imageAlt: "HR dashboard",
    description:
      "Centralized control over employee data, compliance, and lifecycle management. Ensure accuracy, visibility, and seamless workforce governance across systems.",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
    footerTag: "People operations control",
    livePopups: [
      { position: "top-left", label: "Live", title: "People ops", accent: "emerald" },
      {
        position: "bottom-right",
        label: "Audit",
        title: "Compliance OK",
        variant: "icon",
        icon: "shield",
        accent: "emerald",
      },
    ],
  },
];

const heroSolutionHrefByTitle: Record<string, string> = {
  "Building Financial Resilience for the Workforce": "/solutions/ewa",
  "Face Recognition That Works Across Mobile, CCTV & On-Ground Devices": "/solutions/mobile-app",
  /** Matches homepage “Contract workforce governance” → payroll / CLMS governance page */
  "Single Source of Truth for Workforce Governance": "/solutions/payroll-solutions",
};

type WhyCard = {
  title: string;
  text: string;
  badge?: string;
  imageUrl: string;
  icon?: "chart" | "lock" | "gear" | "integration" | "doc";
};

const whyCards: WhyCard[] = [
  {
    title: "Identity solution",
    badge: "Face + access",
    imageUrl: whySectionCardImages[0],
    text: "Cut queues and stop buddy punching with fast, accurate identity verification across devices and cameras.",
    icon: "lock",
  },
  {
    title: "HRIS",
    badge: "HR platform",
    imageUrl: whySectionCardImages[1],
    text: "Centralise attendance, shifts, compliance, and reporting so operations stays audit-ready without spreadsheets.",
    icon: "gear",
  },
  {
    title: "Contract workforce governance",
    badge: "Workforce system",
    imageUrl: whySectionCardImages[2],
    text: "Real-time dashboards for plant, HR, and leadership, so every team sees the same source of truth.",
    icon: "chart",
  },
  {
    title: "Logistics Solutions",
    badge: "Enterprise solutions",
    imageUrl: whySectionCardImages[3],
    text: "Roll out across multiple sites with controls, logs, and workflows designed for large industrial operations.",
    icon: "integration",
  },
  {
    title: "EWA",
    badge: "Financial wellness",
    imageUrl: whySectionCardImages[4],
    text: "Give employees flexible access to earned wages while keeping payroll controls and compliance intact.",
    icon: "doc",
  },
];

export default function Home() {
  const [heroDarkPhase, setHeroDarkPhase] = useState(true);
  const [whyOrder, setWhyOrder] = useState(() => whyCards.map((c) => c.title));
  const selectedWhyCard = whyCards.find((c) => c.title === whyOrder[0]) ?? whyCards[0];

  const swapFeaturedWith = (title: string) => {
    setWhyOrder((prev) => {
      const current = prev.length ? prev : whyCards.map((c) => c.title);
      const idx = current.indexOf(title);
      if (idx <= 0) return current;
      const next = [...current];
      [next[0], next[idx]] = [next[idx], next[0]];
      return next;
    });
  };
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const activeHeroSolutionHref =
    heroSolutionHrefByTitle[heroSlides[activeHeroIndex]?.title ?? ""] ?? "/solutions/payroll-solutions";
  return (
    <div className="home-page home-section-gap relative min-h-screen bg-white text-gray-900 perspective-page">
      {/* Hero: on home, navbar is static above this block; after hero, navbar is fixed + white */}
      <SectionFade>
        <section
          id="home-hero"
          className="relative -mt-[var(--home-nav-offset)] flex min-h-[calc(100svh-1rem)] flex-col items-center justify-center overflow-hidden bg-white pt-[6.25rem] sm:pt-[7rem] noise-overlay"
        >
          {/* Brand gradient + decorative blobs / grid (non-interactive) */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0c1929]/95 via-[#0f2744]/88 to-[#0d3d5c]/85"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-500/15 via-blue-600/10 to-transparent"
            aria-hidden
          />
          <div
            className="home-hero__blob home-hero__blob--a pointer-events-none absolute -left-[20%] top-[10%] h-[min(85vw,520px)] w-[min(85vw,520px)] rounded-full bg-cyan-400/25 blur-[100px]"
            aria-hidden
          />
          <div
            className="home-hero__blob home-hero__blob--b pointer-events-none absolute -right-[15%] bottom-[5%] h-[min(70vw,440px)] w-[min(70vw,440px)] rounded-full bg-blue-500/30 blur-[110px]"
            aria-hidden
          />
          <div
            className="home-hero__grid-pan pointer-events-none absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(29,95,191,0.1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden
          />
          <HeroBackgroundSlider onPhaseChange={setHeroDarkPhase} onSlideChange={setActiveHeroIndex} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/48" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_65%_at_50%_18%,rgba(56,189,248,0.22),transparent_58%)]" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-900/25 via-transparent to-cyan-500/15" aria-hidden />
          <div className="relative z-[1] mx-auto flex min-h-[calc(100svh-var(--home-nav-offset))] w-full max-w-5xl flex-col items-center justify-center px-5 pb-16 text-center sm:px-8 sm:pb-24 lg:px-12">
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
                {/* <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 12 } }} transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}>
                  <span className="inline-flex max-w-[min(100%,22rem)] items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-md sm:max-w-none sm:px-5 sm:tracking-[0.22em] sm:text-[11px]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" aria-hidden />
                    Contract Labour Management
                  </span>
                </motion.div> */}
                <motion.div
                  variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 40 } }}
                  transition={{ duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
                  className="relative mt-7 sm:mt-8"
                >
                  <div
                    className="home-hero__glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[min(120%,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-gradient-to-r from-blue-500/45 via-cyan-400/35 to-blue-600/40 blur-[56px]"
                    aria-hidden
                  />
                  <h1 className="home-display-heading relative mx-auto max-w-[min(100%,44rem)] bg-gradient-to-br from-white via-sky-100 to-cyan-100 bg-clip-text px-2 font-heading-bold text-transparent drop-shadow-[0_2px_14px_rgba(0,0,0,0.42)] lg:max-w-[58rem] antialiased">
                    {heroSlides[activeHeroIndex]?.title}
                  </h1>
                </motion.div>
                
                <motion.div
                  variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 28 } }}
                  transition={{ duration: 0.58, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
                  className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-11 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
                >
                  <motion.div whileHover={{ scale: 1.04, y: -4 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/contact"
                      className={`${inopsUi.btnPrimary} w-full shadow-lg shadow-blue-900/25 sm:w-auto`}
                    >
                      Get In Touch
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04, y: -4 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={activeHeroSolutionHref}
                      className={`${inopsUi.btnGhostDark} w-full sm:w-auto`}
                    >
                      Our Solutions
                    </Link>
                  </motion.div>
                </motion.div>

                {/* <motion.div
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
                </motion.div> */}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </SectionFade>

      <section
        aria-labelledby="hero-trusted-clients-heading"
        className="relative overflow-x-hidden border-b border-gray-100 bg-white pt-4 pb-1.5 sm:pt-5 sm:pb-2 lg:pt-6 lg:pb-2.5"
      >
        <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <FlyInText
              as="h2"
              id="hero-trusted-clients-heading"
              direction="up"
              className="font-heading-bold tracking-tight text-slate-900 lg:tracking-wide"
            >
              Trusted by leading manufacturing &amp; infrastructure companies
            </FlyInText>
            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-blue-500/80" aria-hidden />
          </div>
          <motion.div
            className="hero-trusted-marquee relative mt-5 -mx-4 overflow-hidden bg-white pt-3 pb-2 sm:-mx-6 sm:pt-4 sm:pb-2 lg:-mx-12"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-white via-white/90 to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-white via-white/90 to-transparent" aria-hidden />
            <div className="brand-marquee-group relative flex motion-reduce:overflow-x-auto">
              <div
                className="brand-marquee-track flex animate-marquee gap-0 motion-reduce:animate-none"
                role="list"
                aria-label="Client logos"
              >
                {industryLeaderClientLogos.map((src, i) => {
                  const large = enlargedMarqueeLogoSrcs.has(src);
                  return (
                    <div
                      key={`hero-logo-a-${i}`}
                      role="listitem"
                      className={`relative flex flex-shrink-0 items-center justify-center px-3 py-4 sm:px-4 ${
                        large
                          ? "h-24 min-w-[168px] sm:h-[5.5rem] sm:min-w-[200px]"
                          : "h-20 min-w-[140px] sm:min-w-[160px]"
                      }`}
                    >
                      <span
                        className={`flex items-center justify-center ${
                          large
                            ? "h-14 w-44 overflow-visible sm:h-16 sm:w-52"
                            : "h-12 w-36 overflow-hidden sm:h-[3.25rem] sm:w-40"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={logoAltFromSrc(src)}
                          width={large ? 200 : 140}
                          height={large ? 80 : 56}
                          className={`object-contain object-center opacity-100 ${
                            large
                              ? "max-h-[3.75rem] max-w-[12rem] sm:max-h-[4.5rem] sm:max-w-[14.5rem] scale-100"
                              : `max-h-[2.5rem] max-w-[7.8rem] sm:max-h-[2.8rem] sm:max-w-[8.4rem] ${heroLogoVisualScale[src] ?? "scale-[0.92]"}`
                          }`}
                          sizes={large ? "200px" : "140px"}
                          unoptimized={src.endsWith(".svg")}
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="brand-marquee-track flex animate-marquee gap-0 motion-reduce:animate-none" aria-hidden>
                {industryLeaderClientLogos.map((src, i) => {
                  const large = enlargedMarqueeLogoSrcs.has(src);
                  return (
                    <div
                      key={`hero-logo-b-${i}`}
                      className={`relative flex flex-shrink-0 items-center justify-center px-3 py-4 sm:px-4 ${
                        large
                          ? "h-24 min-w-[168px] sm:h-[5.5rem] sm:min-w-[200px]"
                          : "h-20 min-w-[140px] sm:min-w-[160px]"
                      }`}
                    >
                      <span
                        className={`flex items-center justify-center ${
                          large
                            ? "h-14 w-44 overflow-visible sm:h-16 sm:w-52"
                            : "h-12 w-36 overflow-hidden sm:h-[3.25rem] sm:w-40"
                        }`}
                      >
                        <Image
                          src={src}
                          alt=""
                          width={large ? 200 : 140}
                          height={large ? 80 : 56}
                          className={`object-contain object-center opacity-100 ${
                            large
                              ? "max-h-[3.75rem] max-w-[12rem] sm:max-h-[4.5rem] sm:max-w-[14.5rem] scale-100"
                              : `max-h-[2.5rem] max-w-[7.8rem] sm:max-h-[2.8rem] sm:max-w-[8.4rem] ${heroLogoVisualScale[src] ?? "scale-[0.92]"}`
                          }`}
                          sizes={large ? "200px" : "140px"}
                          unoptimized={src.endsWith(".svg")}
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why InOps
      <AnimatedSection id="about" className="relative bg-white py-8 lg:py-11">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <FlyInText
              as="span"
              direction="left"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-label uppercase tracking-wider text-blue-700"
            >
              What we do
            </FlyInText>
            <motion.div
              className="mt-6"
              style={{ transformOrigin: "center top", perspective: 900 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <FlyInText
                  as="h2"
                  direction="up"
                  delay={0.06}
                  className="home-display-heading text-3xl font-heading-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  Workforce Governance In One Platform.
                </FlyInText>
              </motion.div>
            </motion.div>
          </div>

          <PlatformShowcaseDevice />
        </div>
      </AnimatedSection> */}


  {/* Why InOps */}
  <AnimatedSection id="about" className="relative bg-slate-50/60 py-12 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-35" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-label uppercase tracking-wider text-blue-700">
              What we do
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
                <AnimatedHeading as="h2" className="home-display-heading text-gray-900">
                  Workforce governance
                </AnimatedHeading>
              </motion.div>
            </motion.div>
            <AnimatedParagraph className="mx-auto mt-6 max-w-2xl font-body text-gray-600">
              Built for factories and industrial sites: one platform for visibility, compliance, and secure access, so operations teams spend less time on paperwork and more time running the floor.
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
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_16px_38px_-30px_rgba(15,23,42,0.34)] ring-1 ring-transparent transition-all duration-300 ease-out hover:border-slate-300/80 hover:shadow-[0_24px_56px_-30px_rgba(15,23,42,0.38)] hover:ring-blue-400/10"
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
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
                          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-label uppercase tracking-wide text-blue-700 transition-colors duration-150 ease-out group-hover:border-blue-300 group-hover:bg-blue-100">
                            {selectedWhyCard.badge ?? "Capability"}
                          </div>
                          <h3 className="mt-4 text-gray-900 transition-colors duration-150 ease-out">
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
                    whileHover={{ y: -4, scale: 1.015 }}
                    className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_14px_34px_-28px_rgba(15,23,42,0.4)] backdrop-blur transition-all duration-300 ease-out hover:border-slate-300/90 hover:shadow-[0_22px_52px_-30px_rgba(15,23,42,0.42)]"
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



      {/* Product story: capabilities → connected stack → who it serves → outcomes → deep dive */}
      <SectionFade className="border-t border-gray-100">
        <FeaturesSlider />
      </SectionFade>

      <SectionFade className="border-t border-gray-100">
        <IndustriesSlider />
      </SectionFade>

      <BusinessImpactSection />

      {/* Feature cards ,  blog-post style (per reference image) */}

      {/* Feature cards + logo strip (single bordered container) */}
      <SectionFade>
        <section className="border-t border-slate-100 bg-slate-50/50 py-8 lg:py-11">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-7 max-w-2xl lg:mb-9">
              <FlyInText
                as="p"
                direction="left"
                className="inline-flex w-fit items-center rounded-full bg-[color:var(--inops-blue)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm"
              >
                Command dashboards
              </FlyInText>
              <FlyInText as="h2" direction="up" delay={0.05} className="mt-2 text-slate-900">
                One view for managers, leadership, and HR
              </FlyInText>
              <FlyInText as="p" direction="up" delay={0.1} className="mt-2 text-sm text-slate-600 sm:text-base">
                Live data across attendance, compliance, productivity, and executive KPIs.
              </FlyInText>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Attendance", "Compliance", "Productivity", "Executive KPIs"].map((label, i) => (
                  <FlyInText
                    key={label}
                    as="span"
                    direction="up"
                    delay={0.12 + i * 0.05}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    {label}
                  </FlyInText>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:gap-14 xl:gap-16">
              {dashboardCards.map((card, cardIndex) => {
                const textFirst = cardIndex === 1;

                const mediaBlock = (
                  <div className="relative w-full min-w-0 md:flex-1 md:max-w-[50%]">
                    {/* Popups sit outside the overflow-hidden frame so corner tiles are not clipped */}
                    <div className="relative aspect-video w-full overflow-visible">
                      <div className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_50px_-38px_rgba(15,23,42,0.35)] ring-1 ring-white">
                        {card.videoSrc ? (
                          <video
                            className="absolute inset-0 h-full w-full object-cover object-center"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            poster={card.imageSrc}
                            aria-label={card.imageAlt}
                          >
                            <source src={card.videoSrc} type="video/mp4" />
                          </video>
                        ) : (
                          <Image
                            src={card.imageSrc}
                            alt={card.imageAlt}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        )}
                        {card.videoSrc ? (
                          <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent"
                            aria-hidden
                          />
                        ) : null}
                      </div>
                      {card.videoSrc && card.livePopups ? (
                        <VideoLivePopups popups={card.livePopups} />
                      ) : null}
                    </div>
                  </div>
                );

                const textBlock = (
                  <div className="flex min-w-0 flex-col justify-center md:flex-1 md:max-w-[50%]">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <FlyInText as="h3" direction={textFirst ? "right" : "left"} className="text-slate-900">
                        {card.title}
                      </FlyInText>
                      <FlyInText
                        as="span"
                        direction="up"
                        delay={0.04}
                        className={`w-fit rounded-md border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${card.badgeClass}`}
                      >
                        {card.badge}
                      </FlyInText>
                    </div>
                    <FlyInText as="p" direction="up" delay={0.08} className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                      {card.description}
                    </FlyInText>
                    <FlyInText as="div" direction="up" delay={0.12} className="mt-4">
                      <span className="inline-flex items-center rounded-full bg-[color:var(--inops-blue)] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                        {card.footerTag}
                      </span>
                    </FlyInText>
                  </div>
                );

                return (
                  <article
                    key={card.title}
                    data-no-site-hover
                    className="dashboard-feature-row flex flex-col gap-8 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.22)] md:flex-row md:items-center md:gap-10 lg:gap-16 lg:p-8"
                  >
                    {textFirst ? (
                      <>
                        {textBlock}
                        {mediaBlock}
                      </>
                    ) : (
                      <>
                        {mediaBlock}
                        {textBlock}
                      </>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </SectionFade>
      {/* <SectionFade><BrandsSlider /></SectionFade> */}

      <SectionFade className="relative bg-white pb-6 pt-8 lg:pb-8 lg:pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <CollaborateCtaBand />
        </div>
      </SectionFade>

      
     
    </div>
  );
}
