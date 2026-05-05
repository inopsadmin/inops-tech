"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import "./home-visual.css";
import HeroBackgroundSlider from "./components/HeroBackgroundSlider";
import { FadeUp, StaggerContainer, StaggerItem } from "./components/MotionSection";
import { AnimatedSection, AnimatedHeading, AnimatedParagraph, AnimatedCardGrid, AnimatedCardItem } from "./components/AnimatedSection";
import ConnectedEcosystemSection from "./components/ConnectedEcosystemSection";
import FeaturesSlider from "./components/FeaturesSlider";
import IndustriesSlider from "./components/IndustriesSlider";
import BrandsSlider from "./components/BrandsSlider";
import ContactForm from "./components/ContactForm";
import TiltCard from "./components/TiltCard";
import SectionFade from "./components/SectionFade";
import { enlargedMarqueeLogoSrcs, industryLeaderClientLogos, logoAltFromSrc } from "@/app/lib/industryLeaderClientLogos";
import { heroSlides, whySectionCardImages } from "@/app/lib/serviceImagery";

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

const whyCards = [
  {
    icon: "chart",
    title: "Workforce System",
    text:
      "Modular HRIS capabilities for employee data, attendance, payroll, canteen, and visitors seamlessly. Reduce manual effort, eliminate errors, and gain real-time visibility.",
    badge: "HRIS",
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
    title: "Sites, Contractors & Shifts at a Glance",
    text:
      "See sites, contractors, and shifts at a glance with a clean, visual dashboard that lets you drill into the details only when you need to.",
    badge: "Workforce view",
    imageUrl: whySectionCardImages[4],
  },
];

const dashboardCards = [
  {
    title: "Manager Dashboard",
    badge: "Team view",
    imageSrc: "/image-1024x692.png",
    imageAlt: "Manager dashboard",
    description:
      "Real-time visibility into workforce attendance, productivity, and on-ground operations. Make faster decisions with actionable insights at a team level.",
    glowClass: "from-sky-300/55 via-blue-200/25 to-transparent",
    outlineClass: "from-sky-400/70 via-blue-500/60 to-indigo-500/65",
    badgeClass: "border-blue-200 bg-blue-50 text-blue-700",
    footerClass: "border-blue-200 bg-blue-50 text-blue-700",
    footerTag: "Unified command center",
  },
  {
    title: "CXO Dashboard",
    badge: "Enterprise view",
    imageSrc: "/1_r5bfwbn5H6UK8ZnAJ1kufA.jpg",
    imageAlt: "CXO dashboard",
    description:
      "A unified view of workforce, compliance, and operational performance across the organization. Drive strategic decisions with a single source of truth and enterprise-level insights.",
    glowClass: "from-indigo-300/55 via-blue-200/25 to-transparent",
    outlineClass: "from-indigo-400/75 via-violet-500/65 to-blue-500/65",
    badgeClass: "border-violet-200 bg-violet-50 text-violet-700",
    footerClass: "border-violet-200 bg-violet-50 text-violet-700",
    footerTag: "Executive command center",
  },
  {
    title: "HR Dashboard",
    badge: "People ops",
    imageSrc: "/images/improve-hiring-quality.jpg",
    imageAlt: "HR dashboard",
    description:
      "Centralized control over employee data, compliance, and lifecycle management. Ensure accuracy, visibility, and seamless workforce governance across systems.",
    glowClass: "from-cyan-300/55 via-emerald-200/25 to-transparent",
    outlineClass: "from-cyan-400/75 via-emerald-500/65 to-teal-500/65",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
    footerClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
    footerTag: "People operations control",
  },
] as const;

export default function Home() {
  const [heroDarkPhase, setHeroDarkPhase] = useState(true);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [whyOrder, setWhyOrder] = useState<string[]>(() => {
    const preferred = "Sites, Contractors & Shifts at a Glance";
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
    <div className="home-page relative min-h-screen bg-white text-gray-900 perspective-page">
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
                  variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 22 } }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="relative mt-7 sm:mt-8"
                >
                  <div
                    className="home-hero__glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[min(120%,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-gradient-to-r from-blue-500/45 via-cyan-400/35 to-blue-600/40 blur-[56px]"
                    aria-hidden
                  />
                  <h1 className="relative mx-auto max-w-[min(100%,44rem)] bg-gradient-to-br from-white via-sky-100 to-cyan-200 bg-clip-text px-2 font-sans text-[clamp(1.55rem,5.4vw,2.15rem)] font-heading-bold leading-[1.12] tracking-tight text-transparent drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-3xl sm:leading-[1.12] lg:max-w-[58rem] lg:text-[2.65rem] lg:leading-[1.1] xl:text-[3.15rem] xl:leading-[1.08] 2xl:text-[3.35rem] antialiased">
                    {heroSlides[activeHeroIndex]?.title}
                  </h1>
                </motion.div>
                
                <motion.div
                  variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 18 } }}
                  transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
                  className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-11 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
                >
                  <motion.div whileHover={{ scale: 1.04, y: -4 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="#contact"
                      className="btn-primary btn-glow inline-flex h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-blue-700 px-6 text-[15px] font-semibold text-white shadow-[0_12px_40px_-8px_rgba(37,99,235,0.55)] ring-1 ring-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:from-sky-400 hover:via-blue-600 hover:to-blue-800 hover:shadow-[0_20px_50px_-8px_rgba(56,189,248,0.45)] sm:w-auto sm:px-8 sm:text-base"
                    >
                      Get In Touch
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04, y: -4 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="#solutions"
                      className="btn-secondary inline-flex h-12 w-full items-center justify-center rounded-2xl border border-cyan-300/35 bg-gradient-to-br from-white/[0.12] to-white/[0.06] px-6 text-[15px] font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-200/50 hover:from-white/[0.18] hover:to-cyan-400/10 hover:shadow-[0_12px_40px_-10px_rgba(56,189,248,0.35)] sm:w-auto sm:px-8 sm:text-base"
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
        className="relative overflow-x-hidden border-b border-gray-100 bg-white py-5 sm:py-7 lg:py-9"
      >
        <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2
              id="hero-trusted-clients-heading"
              className="text-base font-heading-bold leading-snug tracking-tight text-slate-900 sm:text-lg lg:text-xl lg:tracking-wide xl:text-2xl"
            >
              Trusted by leading manufacturing &amp; infrastructure companies
            </h2>
            {/* <p className="mt-3 text-sm text-gray-600 sm:text-base">
              Teams rely on our platform for consistent, compliant, and efficient operations.
            </p> */}
            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-blue-500/80" aria-hidden />
          </motion.div>
          <motion.div
            className="relative mt-8 -mx-4 overflow-hidden bg-white py-5 sm:-mx-6 sm:py-6 lg:-mx-12"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-white via-white/90 to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-white via-white/90 to-transparent" aria-hidden />
            <div className="hover-pause relative flex motion-reduce:overflow-x-auto">
              <div
                className="flex animate-marquee gap-0 motion-reduce:animate-none"
                role="list"
                aria-label="Client logos"
              >
                {industryLeaderClientLogos.map((src, i) => {
                  const large = enlargedMarqueeLogoSrcs.has(src);
                  return (
                    <div
                      key={`hero-logo-a-${i}`}
                      role="listitem"
                      className={`group relative flex flex-shrink-0 items-center justify-center px-3 py-4 transition-all duration-300 hover:-translate-y-1 sm:px-4 ${
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
                          className={`object-contain object-center opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 ${
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
              <div className="flex animate-marquee gap-0 motion-reduce:animate-none" aria-hidden>
                {industryLeaderClientLogos.map((src, i) => {
                  const large = enlargedMarqueeLogoSrcs.has(src);
                  return (
                    <div
                      key={`hero-logo-b-${i}`}
                      className={`group relative flex flex-shrink-0 items-center justify-center px-3 py-4 transition-all duration-300 hover:-translate-y-1 sm:px-4 ${
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
                          className={`object-contain object-center opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 ${
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

      {/* Why InOps */}
      <AnimatedSection id="about" className="relative bg-white py-8 lg:py-11">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-50" aria-hidden />
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
                <AnimatedHeading
                  as="h2"
                  className="home-display-heading text-3xl font-heading-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  Workforce Governance In One Platform.
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
              className="group relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white shadow-sm ring-1 ring-transparent transition-all duration-300 ease-out hover:shadow-[0_22px_55px_-24px_rgba(15,23,42,0.45)] hover:ring-cyan-400/20"
              whileHover={{ y: -6, scale: 1.03 }}
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
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/80 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.5)] backdrop-blur transition-all duration-300 ease-out hover:border-blue-300/80 hover:from-white hover:to-blue-50/40 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_26px_60px_-28px_rgba(30,64,175,0.38)]"
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

      <SectionFade className="border-t border-gray-100">
        <ConnectedEcosystemSection />
      </SectionFade>

      <SectionFade className="border-t border-gray-100"><FeaturesSlider /></SectionFade>

      {/* Proven business impact — replaces former Solutions / operational challenges block */}
      <SectionFade>
        <section className="relative overflow-hidden py-11 lg:py-16">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-40" aria-hidden />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex items-center rounded-full border border-blue-200/80 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-700 shadow-sm backdrop-blur">
                  Business impact
                </span>
                <h2 className="home-display-heading mt-5 text-3xl font-heading-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
                  Proven Business{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Impact
                  </span>
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
                  InOps isn&apos;t just about management; it&apos;s about measurable financial and operational excellence.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "90% reduction in manual reconciliation",
                    "3–5% immediate fraud elimination",
                    "100% automated audit logging",
                    "Real-time visibility across all vendors",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm" aria-hidden>
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <span className="text-sm font-medium leading-relaxed text-slate-800 sm:text-[15px]">{line}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="grid gap-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="group flex h-full flex-col rounded-3xl border border-emerald-200/80 p-6 shadow-[0_12px_40px_-28px_rgba(5,150,105,0.45)] ring-1 ring-transparent transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 hover:-translate-y-1.5 hover:scale-[1.03] hover:border-emerald-400/90 hover:shadow-[0_22px_52px_-24px_rgba(5,150,105,0.55)] hover:ring-emerald-400/25">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-500/25 transition-all duration-300 ease-out group-hover:bg-emerald-600 group-hover:text-white group-hover:ring-emerald-400/50 group-hover:shadow-md group-hover:shadow-emerald-600/25">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-heading-bold tracking-tight text-slate-900">Eliminate Ghost Workers</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      Aadhaar-linked biometric verification ensures every worker on site is legitimate and verified.
                    </p>
                  </div>

                  <div className="group flex h-full flex-col rounded-3xl border border-sky-200/80 p-6 shadow-[0_12px_40px_-28px_rgba(14,165,233,0.4)] ring-1 ring-transparent transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 hover:-translate-y-1.5 hover:scale-[1.03] hover:border-sky-400/90 hover:shadow-[0_22px_52px_-24px_rgba(14,165,233,0.52)] hover:ring-sky-400/30">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-700 ring-1 ring-sky-500/25 transition-all duration-300 ease-out group-hover:bg-sky-600 group-hover:text-white group-hover:ring-sky-400/50 group-hover:shadow-md group-hover:shadow-sky-600/25">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M4 19h16" />
                        <path d="M4 19V5" />
                        <path d="m6 8 4 6 4-3 6 7" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-heading-bold tracking-tight text-slate-900">Reduce Cost Leakages</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      Automated invoice cross-verification typically recovers 10–15% in previously undetected billing errors.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 divide-y divide-slate-200/90 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_14px_44px_-32px_rgba(15,23,42,0.28)] ring-1 ring-transparent transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 hover:-translate-y-1 hover:scale-[1.02] hover:border-slate-300/95 hover:shadow-[0_24px_56px_-28px_rgba(29,95,191,0.18)] hover:ring-blue-400/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  <div className="group/stat pb-6 transition-colors duration-300 sm:pb-0 sm:pr-6 sm:hover:bg-blue-50/40">
                    <p className="text-2xl font-heading-bold tracking-tight text-blue-600 transition duration-300 group-hover/stat:text-blue-700 sm:text-[1.65rem]">₹2–3 Cr</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">Annual savings per 1000 contractors</p>
                  </div>
                  <div className="group/stat pt-6 transition-colors duration-300 sm:pt-0 sm:pl-6 sm:hover:bg-slate-50/80">
                    <p className="text-2xl font-heading-bold tracking-tight text-slate-900 transition duration-300 group-hover/stat:text-slate-950 sm:text-[1.65rem]">30–60 Days</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">Typical deployment timeframe</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </SectionFade>

      {/* Scroll to top */}
      <motion.a
        href="#"
        className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-0.5 hover:from-blue-600 hover:to-cyan-400 hover:shadow-xl hover:shadow-cyan-500/25 btn-glow"
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
          <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_30px_90px_-52px_rgba(15,23,42,0.35)]">
            <section className="relative overflow-hidden bg-white py-8 lg:py-10">
              <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <motion.div
                  className="relative mb-6 flex flex-col gap-4 rounded-3xl border border-blue-100/80 bg-white/80 px-5 py-5 shadow-[0_20px_45px_-34px_rgba(30,64,175,0.35)] backdrop-blur sm:px-6"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                        Command Dashboards
                      </div>
                      <h3 className="mt-2 text-2xl font-heading-bold tracking-tight text-slate-900 sm:text-[1.8rem]">
                        One view for managers, leadership, and HR
                      </h3>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                      Live data sync enabled
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      {
                        label: "Attendance",
                        icon: (
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M5 11h14M6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                          </svg>
                        ),
                      },
                      {
                        label: "Compliance",
                        icon: (
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 5 6v6c0 4 2.6 7.7 7 9 4.4-1.3 7-5 7-9V6l-7-3Z" />
                          </svg>
                        ),
                      },
                      {
                        label: "Productivity",
                        icon: (
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 15V9" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V6" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 15v-4" />
                          </svg>
                        ),
                      },
                      {
                        label: "Executive KPIs",
                        icon: (
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h6l2-3 4 6 2-3h4" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18" />
                          </svg>
                        ),
                      },
                    ].map((chip) => (
                      <span
                        key={chip.label}
                        className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-600 transition-colors duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        <span className="text-blue-600 transition-colors duration-200 group-hover:text-white">{chip.icon}</span>
                        {chip.label}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={{
                    hidden: { opacity: 1 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
                  }}
                >
                  {dashboardCards.map((card) => (
                    <motion.article
                      key={card.title}
                      className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_60px_-36px_rgba(15,23,42,0.38)] transition-all duration-300 hover:border-transparent"
                      variants={{
                        hidden: { opacity: 0, y: 18, scale: 0.99 },
                        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 145, damping: 22, mass: 0.9 } },
                      }}
                      whileHover={{ y: -5, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 240, damping: 22, mass: 0.8 }}
                    >
                      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.glowClass} opacity-25`} aria-hidden />
                      <div
                        className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r ${card.outlineClass} p-[1.5px] opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                        aria-hidden
                      >
                        <div className="h-full w-full rounded-3xl bg-white/95" />
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" aria-hidden />
                      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" aria-hidden />

                      <div className="relative flex h-full flex-col p-5 sm:p-6">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-xl font-heading-bold tracking-tight text-slate-900 sm:text-2xl">
                            {card.title}
                          </h3>
                          <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] shadow-sm ${card.badgeClass}`}>
                            {card.badge}
                          </span>
                        </div>

                        <TiltCard className="mt-4 block shrink-0">
                          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-[0_22px_48px_-32px_rgba(15,23,42,0.45)]">
                            <Image
                              src={card.imageSrc}
                              alt={card.imageAlt}
                              fill
                              className="object-cover object-center transition duration-700 group-hover:scale-[1.05]"
                              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" aria-hidden />
                            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/65" aria-hidden />
                          </div>
                        </TiltCard>

                        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                          {card.description}
                        </p>

                        <div className="mt-auto border-t border-slate-200/80 pt-4">
                          <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide ${card.footerClass}`}>
                            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" aria-hidden />
                            {card.footerTag}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </section>
            {/* <SectionFade><BrandsSlider /></SectionFade> */}

          </div>
        </div>
      </SectionFade>
      {/* <SectionFade><BrandsSlider /></SectionFade> */}

      {/* Contact */}
      <SectionFade id="contact" className="relative bg-white pt-10 pb-0 lg:pt-14 lg:pb-0">
        <div className="relative">
          <div className="grid overflow-hidden lg:grid-cols-[57%_43%]">
            {/* Left image (separate from form component) */}
            <div className="relative min-h-[200px] w-full sm:min-h-[240px] lg:min-h-[min(28rem,50vh)]">
              <Image
                src="/Gemini_Generated_Image_ydoe81ydoe81ydoe.png"
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
