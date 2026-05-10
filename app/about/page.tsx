"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import AnimatedCounter from "../components/AnimatedCounter";
import CollaborateCtaBand from "../components/CollaborateCtaBand";
import VideoLivePopups from "@/app/components/VideoLivePopups";
const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const visionMissionStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
} as const;

const visionMissionFadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: smoothEase },
  },
} as const;

const visionMissionCards = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.12 },
  },
} as const;

const visionMissionCardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: smoothEase },
  },
} as const;

const cardHoverLift = { y: -6, transition: { duration: 0.28, ease: smoothEase } } as const;

const aboutHeroOfficeImage = "/WhatsApp Image 2026-05-05 at 8.15.34 PM.jpeg";

const cultureCards: { title: string; imageSrc: string }[] = [
  { title: "Face Recognition System", imageSrc: "/images/7a6a2a07-b8a7-48d1-ac83-4201e948805e.png" },
  { title: "HR Information System", imageSrc: "/hrinfromationsystem.jpeg" },
  { title: "Contract Workforce Governance System", imageSrc: "/contractworkforcemanagemtsystem.jpeg" },
  { title: "EWA", imageSrc: "/ewa.jpeg" },
  { title: "Enterprise Solution", imageSrc: "/enterprise-solution.png" },
  { title: "CCTV Solution", imageSrc: "/cctvsolution.png" },
  { title: "Mobile Application", imageSrc: "/mobile-application.png" },
  { title: "Canteen & Visitor Management", imageSrc: "/canteen-visitor-management.png" },
];

// const differentiators = [
//   {
//     title: "Dedicated Partnership",
//     text: "We are committed to building lasting client partnerships. Our team works closely with you to understand your unique challenges and deliver tailored solutions that drive real business outcomes.",
//   },
//   {
//     title: "End-to-End Automation Expertise",
//     text: "From attendance and access automation to integrated hardware and software, we specialize in comprehensive project management. We bring together the best tools and processes to streamline your operations.",
//   },
//   {
//     title: "Excellence in Technology Solutions",
//     text: "Our expertise spans networking, security, cloud services, and enterprise applications. We help organizations leverage technology to innovate, scale, and stay ahead in a digital-first world.",
//   },
// ];

const expertiseSlides = [
  {
    title: "CLMS & Workforce Management",
    text: "Deep experience in contract labour management systems, attendance, and compliance automation.",
  },
  {
    title: "Biometric & Access Control",
    text: "Integration of face, fingerprint, and card-based systems with your existing HR and payroll workflows.",
  },
  {
    title: "Cloud & Enterprise IT",
    text: "Secure, scalable cloud solutions and enterprise-grade networking and security implementations.",
  },
  {
    title: "Compliance & Reporting",
    text: "Statutory compliance, PF, ESIC, and automated reporting to keep you audit-ready.",
  },
  {
    title: "Custom Integrations",
    text: "Seamless connections between your ERP, HRMS, and our platforms for a unified operations view.",
  },
];

type EvolutionMilestone = {
  year: string;
  side: "left" | "right";
  title: string;
  description: string;
  icon: "grid" | "shield" | "users" | "building" | "layers" | "trend";
  highlight?: boolean;
  badge?: string;
};

const evolutionMilestones: EvolutionMilestone[] = [
  {
    year: "2014",
    side: "right",
    title: "Enterprise IT & Product Services",
    description: "The foundation of our engineering excellence.",
    icon: "grid",
    highlight: true,
  },
  {
    year: "2021",
    side: "left",
    title: "Biometric & Hardware Solutions",
    description: "Securing the perimeter with advanced identity tech.",
    icon: "shield",
    highlight: true,
  },
  {
    year: "2022",
    side: "right",
    title: "Attendance & Workforce Systems",
    description: "Bridging the gap between physical and digital records.",
    icon: "users",
    highlight: true,
  },
  {
    year: "2023",
    side: "left",
    title: "Canteen & Visitor Management",
    description: "Extending governance to secondary facility operations.",
    icon: "building",
    highlight: true,
  },
  {
    year: "2025",
    side: "right",
    title: "CLMS Platform",
    description: "The launch of our flagship Labour Management System.",
    icon: "layers",
    highlight: true,
  },
  {
    year: "2026",
    side: "left",
    title: "Financial Layer (EWA)",
    description: "Empowering workers with Earned Wage Access.",
    icon: "trend",
    badge: "Roadmap",
    highlight: true,
  },
];

const impactStatItems = [
  {
    value: 3000,
    suffix: "+",
    label: "Hardware Managed",
    stripe: "from-sky-400 via-blue-500 to-indigo-600",
    wash: "from-sky-400/[0.08] via-white to-white",
  },
  {
    value: 75,
    suffix: "+",
    label: "Plants Covered",
    stripe: "from-emerald-400 via-teal-500 to-cyan-600",
    wash: "from-emerald-400/[0.07] via-white to-white",
  },
  {
    value: 25,
    suffix: "+",
    label: "Manufacturing Enterprises",
    stripe: "from-amber-400 via-orange-500 to-rose-600",
    wash: "from-amber-400/[0.06] via-white to-white",
  },
  {
    value: 1,
    suffix: "L+",
    label: "Workers on Platform",
    stripe: "from-violet-400 via-fuchsia-500 to-indigo-600",
    wash: "from-violet-400/[0.08] via-white to-white",
  },
] as const;

function EvolutionTimelineIcon({ name }: { name: EvolutionMilestone["icon"] }) {
  const c = "h-5 w-5";
  if (name === "grid") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (name === "users") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  }
  if (name === "building") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    );
  }
  if (name === "layers") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3L2 8l10 5 10-5-10-5zM2 13l10 5 10-5M2 18l10 5 10-5" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8M14 7h7v7" />
    </svg>
  );
}

export default function AboutPage() {
  const [expertiseIndex, setExpertiseIndex] = useState(0);
  const evolutionRailRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: evolutionRailProgress } = useScroll({
    target: evolutionRailRef,
    offset: ["start 85%", "end 25%"],
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setExpertiseIndex((prev) => (prev === expertiseSlides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-[#eef4f8] text-slate-950">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(57,189,232,0.16),transparent_26%),radial-gradient(circle_at_88%_5%,rgba(29,95,191,0.12),transparent_24%),linear-gradient(180deg,#eef4f8_0%,#f8fbfd_48%,#eef4f8_100%)]"
          aria-hidden
        />
        {/* Hero — split layout like solutions/time-and-attendance: copy left, media right + live tiles */}
        <motion.section
          className="w-full overflow-x-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#f7fbfd] via-[#f4f9fc] to-[#eef4f8] pt-6 sm:pt-8 lg:pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <div className="relative w-full">
            <div className="relative min-h-[280px] w-full bg-transparent sm:min-h-[340px] lg:flex lg:min-h-[400px] lg:items-stretch">
              <div className="relative mt-5 h-48 w-full sm:mt-7 sm:h-56 lg:order-2 lg:mt-0 lg:h-auto lg:min-h-[400px] lg:w-1/2 lg:flex-shrink-0">
                <Image
                  src={aboutHeroOfficeImage}
                  alt="About Us - team and workforce operations landing image"
                  fill
                  className="object-cover object-[center_35%] sm:object-[center_30%] lg:object-[center_40%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#f6fbfd] to-transparent sm:w-28 lg:block"
                  aria-hidden
                />
                <VideoLivePopups
                  popups={[
                    {
                      position: "top-left",
                      animateOnMount: true,
                      label: "Trust",
                      title: "1L+ verified workers on platform",
                      accent: "emerald",
                      className: "!top-2 !-left-2 sm:!top-4 sm:!-left-4 lg:!top-8 lg:!-left-45",
                    },
                    {
                      position: "bottom-right",
                      animateOnMount: true,
                      label: "Enterprise",
                      title: "25+ active client programs",
                      variant: "icon",
                      icon: "chart",
                      accent: "blue",
                      className: "!bottom-3 !right-2 sm:!bottom-5 sm:!right-4 lg:!-bottom-4 lg:!right-0",
                    },
                  ]}
                />
              </div>

              <div className="relative z-10 mx-auto flex max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-12 lg:order-1 lg:w-1/2">
                <div className="max-w-3xl px-0 py-8 sm:py-10 lg:max-w-xl lg:py-14 lg:pr-8">
                  <motion.span
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                    About InOps
                  </motion.span>
                  <motion.h1
                    className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:mt-5 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: smoothEase, delay: 0.12 }}
                  >
                    Bringing{" "}
                    <span className="font-semibold text-[color:var(--inops-blue)]">Control &amp; Transparency</span> to
                    Enterprise Operations.
                  </motion.h1>
                  <motion.p
                    className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-[1.05rem]"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                  >
                    A workforce technology platform built to optimize enterprise workforce operations. We unify identity,
                    compliance, and financial layers into a single, seamless ecosystem.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Company story */}
        {/* <section className="border-t border-gray-100/80 bg-white py-10 lg:py-14">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-12">
            <motion.h2
              className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              One Platform. Complete Workforce, Financial &amp; Operational Control
            </motion.h2>
            <motion.p
              className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
            >
              InOps IT Solutions enables enterprises to manage workforce operations, financial access,
              and business processes through a unified platform. From workforce governance and
              face-based identity solutions to earned wage access and enterprise operations, InOps
              brings visibility, compliance, and control into one system. Designed for large,
              distributed organizations, it integrates seamlessly with existing infrastructure while
              improving efficiency, reducing risk, and driving productivity at scale.
            </motion.p>
          </div>
        </section> */}

        {/* Impact — stats — soft lift above shell */}
        <section
          className="relative border-t border-slate-200/80 bg-white/45 py-16 lg:py-24 backdrop-blur-[1px]"
          aria-labelledby="impact-stats-heading"
        >
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <motion.div
              className="mx-auto max-w-[36rem] text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-600 shadow-sm backdrop-blur-sm">
                <span className="h-2 w-8 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
                At a glance
              </span>
              <h2
                id="impact-stats-heading"
                className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-snug"
              >
                Trusted where{" "}
                <span className="font-semibold text-[color:var(--inops-blue)]">enterprise operations</span> run at scale
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Hardware deployments, manufacturing locations, client organizations, and verified workers—consolidated on
                one operational foundation.
              </p>
            </motion.div>

            <motion.div
              className="mx-auto mt-12 max-w-5xl lg:mt-14"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.52, ease: smoothEase, delay: 0.05 }}
            >
              <div className="rounded-[1.15rem] bg-gradient-to-br from-sky-200/40 via-white/90 to-violet-200/35 p-[1px] shadow-[0_8px_40px_-20px_rgba(59,130,246,0.25)]">
                <div className="overflow-hidden rounded-[1.1rem] border border-white/80 bg-white/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95)] backdrop-blur-[2px]">
                  <div className="grid grid-cols-2 divide-x divide-y divide-slate-100/90 lg:grid-cols-4 lg:divide-y-0">
                    {impactStatItems.map((stat) => (
                      <div
                        key={stat.label}
                        className={`relative flex flex-col items-center justify-center bg-gradient-to-b px-4 py-9 text-center sm:px-8 sm:py-11 lg:py-12 ${stat.wash}`}
                      >
                        <div
                          className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${stat.stripe}`}
                          aria-hidden
                        />
                        <span
                          className={`mb-4 inline-flex h-2 w-2 rounded-full bg-gradient-to-r shadow-sm ${stat.stripe}`}
                          aria-hidden
                        />
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          duration={1.35}
                          className="block text-[1.75rem] font-semibold tabular-nums tracking-[-0.04em] text-slate-900 sm:text-[2rem] lg:text-[2.125rem]"
                        />
                        <p className="mt-3 max-w-[11rem] text-[10px] font-medium uppercase leading-snug tracking-[0.2em] text-slate-600 sm:text-[11px] sm:tracking-[0.22em]">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Full-stack governance — split: narrative + founder */}
        <section
          className="relative border-t border-slate-200/80 bg-white/45 py-14 lg:py-20 backdrop-blur-[1px]"
          aria-labelledby="governance-platform-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.52, ease: smoothEase }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700">
                  Who we are
                </span>
                <h2
                  id="governance-platform-heading"
                  className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-[var(--inops-navy)] sm:text-4xl lg:text-[2.65rem]"
                >
                  A full-stack workforce governance platform
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-[1.05rem]">
                  Starting with identity and access control, we evolved into a comprehensive system that helps enterprises
                  manage contract labour at scale—with real-time visibility, compliance assurance, and one connected data layer.
                </p>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-white p-6 shadow-[0_22px_65px_-48px_rgba(15,47,87,0.45)] ring-1 ring-slate-900/[0.04] sm:p-8 lg:col-span-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.52, ease: smoothEase, delay: 0.06 }}
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#39bde8]/14 blur-3xl" aria-hidden />
                <div className="relative flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-slate-200 shadow-md ring-4 ring-white sm:h-[5.25rem] sm:w-[5.25rem]">
                    <Image
                      src="/Gemini_Generated_Image_fze4eqfze4eqfze4.png"
                      alt="Satish Sinha, Founder"
                      fill
                      className="object-cover object-top"
                      sizes="84px"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Satish Sinha</p>
                    <p className="mt-0.5 text-sm font-medium text-slate-500">Founder</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      Building long-term partnerships with enterprises that depend on reliable workforce operations every single day.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Evolution — vertical timeline (inherits page shell bg + gradients) */}
        <section
          className="relative border-y border-slate-200/80 bg-transparent py-14 lg:py-20"
          aria-labelledby="our-evolution-heading"
        >
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
                Timeline
              </div>
              <h2
                id="our-evolution-heading"
                className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem]"
              >
                Our Evolution
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                A decade of engineering excellence and workforce transformation.
              </p>
              <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
            </motion.div>

            <div ref={evolutionRailRef} className="relative mx-auto mt-14 max-w-4xl">
              {/* Center rail (desktop) */}
              <div
                className="absolute left-8 top-2 bottom-2 z-0 hidden w-[4px] rounded-full bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 opacity-90 shadow-[0_0_0_1px_rgba(148,163,184,0.25)] md:left-1/2 md:block md:-translate-x-1/2"
                aria-hidden
              />
              <motion.div
                className="absolute left-8 top-2 bottom-2 z-[1] hidden w-[4px] origin-top rounded-full bg-gradient-to-b from-blue-600 via-sky-500 to-cyan-400 md:left-1/2 md:block md:-translate-x-1/2"
                style={{ scaleY: evolutionRailProgress }}
                aria-hidden
              />
              {/* Mobile line */}
              <div className="absolute left-8 top-2 bottom-2 z-0 w-[4px] rounded-full bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 opacity-90 shadow-[0_0_0_1px_rgba(148,163,184,0.25)] md:hidden" aria-hidden />
              <motion.div
                className="absolute left-8 top-2 bottom-2 z-[1] w-[4px] origin-top rounded-full bg-gradient-to-b from-blue-600 via-sky-500 to-cyan-400 md:hidden"
                style={{ scaleY: evolutionRailProgress }}
                aria-hidden
              />

              <ul className="relative z-10 space-y-10 sm:space-y-12">
                {evolutionMilestones.map((m, i) => (
                  <li key={m.year} className="relative">
                    {/* Node on the line */}
                    <div
                      className="absolute left-8 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[color:var(--inops-blue)] shadow-[0_16px_40px_-28px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/80 md:left-1/2"
                      aria-hidden
                    >
                      <EvolutionTimelineIcon name={m.icon} />
                    </div>

                    <motion.div
                      className={`pl-20 md:grid md:grid-cols-2 md:gap-10 md:pl-0 ${
                        m.side === "left" ? "" : ""
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(i * 0.04, 0.2) }}
                    >
                      {m.side === "left" ? (
                        <>
                          <div className="md:col-start-1 md:row-start-1 md:pr-10 md:text-right">
                            <div
                              className={`rounded-3xl border p-6 shadow-[0_18px_55px_-36px_rgba(15,47,87,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_70px_-40px_rgba(15,47,87,0.55)] ${
                                m.highlight
                                  ? "border-slate-200/90 bg-white/90 ring-1 ring-slate-200/80 backdrop-blur"
                                  : "border-slate-200/90 bg-white"
                              }`}
                            >
                              <div className="flex flex-wrap items-center gap-2 md:justify-end">
                                <span className="inline-flex items-center rounded-full bg-[color:var(--inops-blue)] px-3 py-1 text-sm font-semibold text-white shadow-sm">
                                  {m.year}
                                </span>
                                {m.badge ? (
                                  <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-600">
                                    {m.badge}
                                  </span>
                                ) : null}
                              </div>
                              <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">{m.title}</h3>
                              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                                {m.description}
                              </p>
                            </div>
                          </div>
                          <div className="hidden md:col-start-2 md:block" aria-hidden />
                        </>
                      ) : (
                        <>
                          <div className="hidden md:col-start-1 md:block" aria-hidden />
                          <div className="md:col-start-2 md:row-start-1 md:pl-10">
                            <div
                              className={`rounded-3xl border p-6 shadow-[0_18px_55px_-36px_rgba(15,47,87,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_70px_-40px_rgba(15,47,87,0.55)] ${
                                m.highlight
                                  ? "border-slate-200/90 bg-white/90 ring-1 ring-slate-200/80 backdrop-blur"
                                  : "border-slate-200/90 bg-white"
                              }`}
                            >
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center rounded-full bg-[color:var(--inops-blue)] px-3 py-1 text-sm font-semibold text-white shadow-sm">
                                  {m.year}
                                </span>
                                {m.badge ? (
                                  <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-600">
                                    {m.badge}
                                  </span>
                                ) : null}
                              </div>
                              <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">{m.title}</h3>
                              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                                {m.description}
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Product Range — premium marquee strip */}
        <section className="relative overflow-x-hidden border-t border-slate-200/70 bg-white/70 py-12 backdrop-blur lg:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/65 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.5),transparent_40%,rgba(255,255,255,0.35))]" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center">
              <motion.span
                className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm backdrop-blur"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase }}
              >
                Product Showcase
              </motion.span>
              <motion.h2
                className="mt-3 text-center text-[2rem] font-heading-bold tracking-tight text-slate-900 sm:text-[2.35rem]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                Product Range
              </motion.h2>
              <motion.p
                className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
              >
                Smart devices and enterprise tools curated for workforce visibility, governance, and operational control.
              </motion.p>
            </div>
          </div>
          <motion.div
            className="hover-pause relative mt-8 w-screen max-w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden py-2"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: smoothEase }}
          >
            <div className="flex w-max gap-0 animate-marquee-slow" style={{ willChange: "transform" }}>
              {[...cultureCards, ...cultureCards, ...cultureCards].map((card, i) => (
                <div
                  key={`${card.title}-${i}`}
                  className="group relative h-[250px] w-[420px] flex-shrink-0 overflow-hidden border-r border-white/15 bg-slate-900/95 shadow-[0_30px_85px_-48px_rgba(15,23,42,0.85)] transition duration-300 hover:z-[1] hover:-translate-y-1.5"
                >
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="scale-110 object-cover object-center opacity-35 blur-[1.5px]"
                    sizes="(max-width: 640px) 85vw, 390px"
                  />
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="object-contain object-center p-2.5 transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 85vw, 420px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-950/20 to-transparent" aria-hidden />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-75" aria-hidden />
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-60" aria-hidden />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">Product</p>
                    <h3 className="mt-1 text-base font-semibold leading-snug text-white sm:text-xl">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Vision + Mission + CTA */}
        <section className="relative overflow-hidden border-t border-slate-200/80 bg-transparent py-16 lg:py-24">
          <motion.div
            className="pointer-events-none absolute left-1/2 top-8 h-48 w-[min(100%,42rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_72%)]"
            aria-hidden
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 1, ease: smoothEase }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-0 right-[12%] h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl"
            aria-hidden
            animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              variants={visionMissionStagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.span
                variants={visionMissionFadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm backdrop-blur-sm"
              >
                <motion.span
                  className="relative flex h-2 w-2"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400/50 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--inops-blue)]" />
                </motion.span>
                Purpose
              </motion.span>
              <motion.h3
                variants={visionMissionFadeUp}
                className="mt-5 text-[1.65rem] font-semibold leading-[1.15] tracking-[-0.03em] text-slate-900 sm:text-3xl lg:text-[2.25rem]"
              >
                Vision and{" "}
                <span className="font-semibold text-[color:var(--inops-blue)]">mission</span>
              </motion.h3>
              <motion.div variants={visionMissionFadeUp} className="mx-auto mt-4 max-w-xl">
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  What we are building—and how we show up for enterprises and workers.
                </p>
                <motion.div
                  className="mx-auto mt-6 h-1 w-14 rounded-full bg-[color:var(--inops-blue)]"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.65, ease: smoothEase, delay: 0.35 }}
                  style={{ originX: 0.5 }}
                  aria-hidden
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-7"
              variants={visionMissionCards}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.article
                variants={visionMissionCardItem}
                whileHover={cardHoverLift}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/90 border-l-[3px] border-l-[color:var(--inops-blue)] bg-white/50 px-6 py-7 shadow-[0_14px_44px_-32px_rgba(15,23,42,0.12)] backdrop-blur-[2px] transition-[box-shadow,border-color] duration-300 hover:border-slate-300 hover:shadow-[0_24px_56px_-36px_rgba(15,23,42,0.14)] sm:px-8 sm:py-8"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-sky-400/15 blur-2xl" />
                </div>
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">Vision</p>
                <p className="relative mt-4 text-[15px] leading-[1.65] text-slate-700 sm:text-base">
                  To build the most trusted workforce ecosystem—where work, identity, and financial access seamlessly come together.
                </p>
              </motion.article>
              <motion.article
                variants={visionMissionCardItem}
                whileHover={cardHoverLift}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/90 border-l-[3px] border-l-emerald-600 bg-white/50 px-6 py-7 shadow-[0_14px_44px_-32px_rgba(15,23,42,0.12)] backdrop-blur-[2px] transition-[box-shadow,border-color] duration-300 hover:border-emerald-200 hover:shadow-[0_24px_56px_-36px_rgba(16,185,129,0.18)] sm:px-8 sm:py-8"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                >
                  <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-emerald-400/15 blur-2xl" />
                </div>
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">Mission</p>
                <p className="relative mt-4 text-[15px] leading-[1.65] text-slate-700 sm:text-base">
                  To help enterprises digitize and control workforce operations through unified governance and verified data, and extend this foundation to enable earned wage access and a curated marketplace of financial and worker-focused services.
                </p>
              </motion.article>
            </motion.div>

            <motion.div
              className="mt-12 lg:mt-14"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
            >
              <CollaborateCtaBand />
            </motion.div>
          </div>
        </section>

        {/* Expertise — section intro, then visuals + carousel */}
        <section
          className="section-flush-footer relative border-t border-slate-200/80 bg-slate-50/90 pb-8 pt-14 lg:pb-10 lg:pt-20"
          aria-labelledby="why-choose-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mx-auto mb-10 max-w-3xl border-b border-slate-200/90 pb-10 text-center lg:mb-12 lg:pb-12"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.48, ease: smoothEase }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">Expertise</span>
              <h2
                id="why-choose-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                Why choose us
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Workforce systems, biometrics, cloud, and compliance—engineered for enterprise scale and audit-ready
                operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 sm:gap-7 lg:grid-cols-12 lg:items-stretch lg:gap-8 xl:gap-10">
              <motion.div
                className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_60px_-40px_rgba(15,47,87,0.35)] lg:col-span-6"
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.65, ease: smoothEase }}
              >
                <div className="relative min-h-[20rem] w-full sm:min-h-[26rem] lg:min-h-[32rem]">
                  <Image
                    src="/t2-removed.png"
                    alt="Why choose us visual"
                    fill
                    className="object-contain object-center px-4 pt-4 sm:p-6"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </motion.div>

              <motion.div
                className="relative flex min-h-[20rem] overflow-hidden rounded-[1.75rem] border border-white bg-white/95 p-6 shadow-[0_24px_80px_-48px_rgba(15,47,87,0.45)] ring-1 ring-slate-900/[0.05] backdrop-blur sm:p-7 lg:col-span-6 lg:min-h-[32rem] lg:p-8"
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.65, ease: smoothEase }}
              >
                <div className="mx-auto flex w-full min-h-[16rem] max-w-xl flex-col items-center justify-center text-center sm:min-h-[18rem] lg:min-h-[20rem] lg:pt-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={expertiseIndex}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.3, ease: smoothEase }}
                      className="flex flex-col items-center px-1"
                    >
                      <h4 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-[1.65rem]">
                        {expertiseSlides[expertiseIndex].title}
                      </h4>
                      <p className="mt-4 max-w-[32rem] text-sm leading-relaxed text-slate-600 sm:text-base lg:text-[1.05rem]">
                        {expertiseSlides[expertiseIndex].text}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="absolute inset-x-0 bottom-6 flex items-center justify-center">
                  <div className="flex gap-2.5">
                    {expertiseSlides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setExpertiseIndex(i)}
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          i === expertiseIndex ? "scale-110 bg-[color:var(--inops-blue)]" : "bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setExpertiseIndex((prev) => (prev === 0 ? expertiseSlides.length - 1 : prev - 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 text-slate-600 transition hover:border-slate-400 hover:bg-white active:scale-95"
                    aria-label="Previous expertise slide"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setExpertiseIndex((prev) => (prev === expertiseSlides.length - 1 ? 0 : prev + 1))
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 text-slate-600 transition hover:border-slate-400 hover:bg-white active:scale-95"
                    aria-label="Next expertise slide"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Professional solutions CTA block (same as home section)
        <section className="relative overflow-hidden border-t border-gray-100">
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
              className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.6)] backdrop-blur-md sm:px-10 sm:py-12"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="text-sm tracking-wide text-white/75"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              >
                We are always ahead
              </motion.span>

              <motion.h2
                className="mt-3 text-center text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
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
                    className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-2.5 text-sm text-white shadow-md transition hover:bg-blue-600"
                  >
                    Start A Project
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:08027745220"
                  className="inline-flex items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                  aria-label="Call us"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Call Us: 08027745220
                </motion.a>
                <span className="text-xs text-white/70">For any question</span>
              </motion.div>

              <motion.div
                className="mt-10 grid w-full grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:gap-0"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
              >
                <div className="sm:px-8">
                  <div className="text-5xl font-bold tracking-tight text-white drop-shadow">856</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/70">Satisfied Clients</div>
                  <div className="mt-1 text-xs text-white/55">Merits-leading experience</div>
                </div>
                <div className="relative sm:px-8">
                  <div className="pointer-events-none absolute inset-y-2 -left-px hidden w-px bg-white/12 sm:block" aria-hidden />
                  <div className="pointer-events-none absolute inset-y-2 -right-px hidden w-px bg-white/12 sm:block" aria-hidden />
                  <div className="text-5xl font-bold tracking-tight text-white drop-shadow">238</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/70">Successful Investments</div>
                  <div className="mt-1 text-xs text-white/55">Merits-leading experience</div>
                </div>
                <div className="sm:px-8">
                  <div className="text-5xl font-bold tracking-tight text-white drop-shadow">341</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/70">Satisfied Clients</div>
                  <div className="mt-1 text-xs text-white/55">Merits-leading experience</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section> */}
      </div>
    </>
  );
}
