"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCounter from "../components/AnimatedCounter";
const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const aboutHeroOfficeImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=85";

const aboutHeroStats = [
  {
    value: "1L+",
    label: "Verified workers",
    icon: "users" as const,
  },
  {
    value: "25+",
    label: "Enterprise clients",
    icon: "building" as const,
  },
  {
    value: "3000+",
    label: "Devices deployed",
    icon: "chip" as const,
  },
  {
    value: "₹5 Cr+",
    label: "Enterprise revenue",
    icon: "trend" as const,
  },
];

function AboutHeroStatIcon({ name }: { name: (typeof aboutHeroStats)[number]["icon"] }) {
  const c = "h-7 w-7 text-white/95";
  if (name === "users") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M13 7a4 4 0 11-8 0 4 4 0 018 0zm6 6v2M21 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }
  if (name === "building") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    );
  }
  if (name === "chip") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

const cultureCards: { title: string; imageSrc: string }[] = [
  { title: "Optisecure 5K", imageSrc: "/images/optisecure-5k.png" },
  { title: "Optisecure T7", imageSrc: "/images/optisecure-t7.png" },
  { title: "Biosense", imageSrc: "/images/biosense.png" },
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
  },
  {
    year: "2021",
    side: "left",
    title: "Biometric & Hardware Solutions",
    description: "Securing the perimeter with advanced identity tech.",
    icon: "shield",
  },
  {
    year: "2022",
    side: "right",
    title: "Attendance & Workforce Systems",
    description: "Bridging the gap between physical and digital records.",
    icon: "users",
  },
  {
    year: "2023",
    side: "left",
    title: "Canteen & Visitor Management",
    description: "Extending governance to secondary facility operations.",
    icon: "building",
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
  },
];

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

const techIcons = [
  { name: "Cloud", path: "M3 15a4 4 0 004 4h10a4 4 0 004-4V9a4 4 0 00-4-4H7a4 4 0 00-4 4v6zm0 0h4v4" },
  { name: "Gear", path: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { name: "Server", path: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
  { name: "Lock", path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { name: "Chart", path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { name: "Document", path: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { name: "Wifi", path: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" },
  { name: "Device", path: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
];

export default function AboutPage() {
  const [expertiseIndex, setExpertiseIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setExpertiseIndex((prev) => (prev === expertiseSlides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero — two-column intro + stats strip */}
        <motion.section
          className="border-b border-slate-100 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:px-12 lg:pb-14 lg:pt-14">
            <motion.nav
              className="text-sm text-slate-500"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
              aria-label="Breadcrumb"
            >
              {/* <Link href="/" className="text-slate-600 transition-colors hover:text-indigo-600">
                Home
              </Link>
              <span className="mx-2 text-slate-400">/</span>
              <span className="font-medium text-slate-900">About us</span> */}
            </motion.nav>

            <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:mt-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
              <div className="ml-0 lg:ml-10">
                <motion.span
                  className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-800"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
                >
                  About InOps
                </motion.span>
                <motion.h1
                  className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: smoothEase, delay: 0.12 }}
                >
                  Bringing{" "}
                  <span className="text-indigo-600">Control &amp; Transparency</span> to Enterprise
                  Operations.
                </motion.h1>
                <motion.p
                  className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                >
                  InOps is a workforce technology platform built to optimize enterprise workforce
                  operations. We unify identity, compliance, and financial layers into a single,
                  seamless ecosystem.
                </motion.p>
              </div>

              <motion.div
                className="relative mx-auto w-full max-w-lg lg:ml-auto lg:mr-0 lg:max-w-[34rem]"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
              >
                <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-lg shadow-slate-200/60">
                  <Image
                    src={aboutHeroOfficeImage}
                    alt="Modern enterprise office — glass meeting spaces and collaborative workspace"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </motion.div>
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

        {/* Full-stack governance — leadership message */}
        <section
          className="relative overflow-hidden border-t border-slate-100 bg-gradient-to-b from-slate-50 via-white to-slate-50/40 py-14 lg:py-20"
          aria-labelledby="governance-platform-heading"
        >
          <div
            className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-8 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.45)] ring-1 ring-slate-100/80 sm:p-10 lg:p-12"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              <div
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/70 to-transparent sm:inset-x-12"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-sky-500 to-indigo-400/30 opacity-90 sm:w-1.5 sm:rounded-l-3xl"
                aria-hidden
              />

              <div className="relative w-full sm:pl-2">
              <motion.p
                className="w-full max-w-none text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-600/90"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
              >
                Leadership perspective
              </motion.p>
              <motion.h2
                id="governance-platform-heading"
                className="mt-4 w-full max-w-none text-center text-2xl font-bold tracking-tight text-balance text-slate-900 sm:text-3xl lg:text-4xl lg:leading-tight"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
              >
                A Full-Stack Workforce Governance Platform
              </motion.h2>
              <motion.div
                className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-stretch lg:gap-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.12 }}
              >
                <p className="flex-1 text-left text-base leading-[1.75] text-slate-600 sm:text-lg lg:pr-10 lg:leading-[1.72]">
                  Starting with identity and access control systems, InOps has evolved into a comprehensive
                  system enabling enterprises to manage contract labor at scale with real-time visibility
                  and compliance assurance.
                </p>

                <motion.div
                  className="flex flex-col justify-center border-t border-slate-200/90 pt-8 lg:w-[min(100%,22rem)] lg:shrink-0 lg:self-stretch lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:w-96"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.16 }}
                >
                  <div className="flex h-full min-h-0 flex-col items-center justify-center gap-5 text-center sm:gap-6">
                    <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full ring-[5px] ring-indigo-50 shadow-xl shadow-slate-900/15 sm:h-40 sm:w-40 lg:h-44 lg:w-44">
                      <Image
                        src="/Gemini_Generated_Image_fze4eqfze4eqfze4.png"
                        alt="Prashanth K., Chief Executive Officer, InOps"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 144px, 176px"
                      />
                    </div>
                    <div className="min-w-0 max-w-[16rem]">
                      <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Satish Sinha</p>
                      <p className="mt-2 text-sm font-medium leading-snug text-slate-600 sm:text-base">
                        Founder
                      </p>
                      {/* <p className="mt-1.5 text-sm font-medium text-slate-500">InOps</p> */}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Evolution — vertical timeline */}
        <section
          className="border-t border-slate-200/80 bg-slate-50 py-14 lg:py-20"
          aria-labelledby="our-evolution-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2
                id="our-evolution-heading"
                className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                Our Evolution
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                A decade of engineering excellence and workforce transformation.
              </p>
            </motion.div>

            <div className="relative mx-auto mt-14 max-w-4xl">
              {/* Center rail (desktop) */}
              <div
                className="absolute left-8 top-2 bottom-2 hidden w-px bg-slate-300 md:left-1/2 md:block md:-translate-x-1/2"
                aria-hidden
              />
              {/* Mobile line */}
              <div className="absolute left-8 top-2 bottom-2 w-px bg-slate-300 md:hidden" aria-hidden />

              <ul className="relative space-y-10 sm:space-y-12">
                {evolutionMilestones.map((m, i) => (
                  <li key={m.year} className="relative">
                    {/* Node on the line */}
                    <div
                      className="absolute left-8 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-2 border-indigo-500 bg-white text-indigo-600 shadow-md md:left-1/2"
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
                              className={`rounded-2xl border p-6 shadow-md transition-shadow duration-300 hover:shadow-lg ${
                                m.highlight
                                  ? "border-indigo-200/80 bg-violet-50/90"
                                  : "border-slate-200/90 bg-white"
                              }`}
                            >
                              <div className="flex flex-wrap items-baseline gap-2 md:justify-end">
                                <span className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
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
                              className={`rounded-2xl border p-6 shadow-md transition-shadow duration-300 hover:shadow-lg ${
                                m.highlight
                                  ? "border-indigo-200/80 bg-violet-50/90"
                                  : "border-slate-200/90 bg-white"
                              }`}
                            >
                              <div className="flex flex-wrap items-baseline gap-2">
                                <span className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
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
        <section className="relative overflow-x-hidden border-t border-slate-200/70 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.22),transparent_42%),radial-gradient(circle_at_80%_18%,rgba(14,165,233,0.2),transparent_36%),linear-gradient(180deg,#f5f9ff_0%,#e9f2ff_100%)] py-12 lg:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/65 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.5),transparent_40%,rgba(255,255,255,0.35))]" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center">
              <motion.span
                className="inline-flex items-center rounded-full border border-blue-200/80 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700/90 shadow-[0_8px_24px_-18px_rgba(30,64,175,0.75)] backdrop-blur"
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
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200/90">Product</p>
                    <h3 className="mt-1 text-base font-semibold leading-snug text-white sm:text-xl">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Stats + Vision + Mission + CTA */}
        <section className="relative border-t border-slate-100/80 bg-[radial-gradient(circle_at_18%_12%,rgba(59,130,246,0.09),transparent_45%),radial-gradient(circle_at_82%_85%,rgba(14,165,233,0.08),transparent_45%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] py-14 lg:py-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto mb-9 max-w-3xl text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase }}
            >
              <div className="inline-flex items-center rounded-full border border-blue-200/80 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700 shadow-[0_10px_26px_-20px_rgba(37,99,235,0.9)] backdrop-blur">
                Impact at Scale
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Trusted by teams running critical workforce operations
              </h3>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              {[
                { value: 2500, suffix: "+", label: "Hardware Managed" },
                { value: 75, suffix: "+", label: "Plants Covered" },
                { value: 25, suffix: "+", label: "Manufacturing Enterprises" },
                { value: 1, suffix: "L+", label: "Workers on Platform" },
              ].map((stat) => (
                <div key={stat.label} className="group relative overflow-hidden rounded-2xl border border-white/65 bg-white/80 px-4 py-5 text-center shadow-[0_26px_60px_-40px_rgba(15,23,42,0.5)] ring-1 ring-slate-200/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1.5px_rgba(56,189,248,0.95),0_0_0_3px_rgba(99,102,241,0.55),0_0_0_5px_rgba(16,185,129,0.38),0_34px_70px_-42px_rgba(30,64,175,0.45)] sm:px-5 sm:py-6">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_80%_85%,rgba(99,102,241,0.12),transparent_42%)]" aria-hidden />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400/0 via-indigo-400/0 to-emerald-400/0 opacity-0 transition-opacity duration-300 group-hover:from-sky-400/20 group-hover:via-indigo-400/16 group-hover:to-emerald-400/20 group-hover:opacity-100" aria-hidden />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent opacity-80" aria-hidden />
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1.25}
                    className="relative text-[1.95rem] font-heading-bold tracking-tight text-slate-900 sm:text-[2.1rem]"
                  />
                  <div className="relative mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="mt-11 grid grid-cols-1 gap-5 lg:grid-cols-2"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease: smoothEase, delay: 0.05 }}
            >
              <div className="group relative overflow-hidden rounded-3xl border border-blue-100/90 bg-[linear-gradient(160deg,#ffffff_0%,#eef5ff_100%)] p-7 shadow-[0_24px_60px_-36px_rgba(30,64,175,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1.5px_rgba(59,130,246,0.95),0_0_0_3px_rgba(56,189,248,0.5),0_0_0_5px_rgba(99,102,241,0.35),0_30px_70px_-38px_rgba(30,64,175,0.42)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(59,130,246,0.09),transparent_45%)]" aria-hidden />
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/0 via-sky-400/0 to-indigo-400/0 opacity-0 transition-opacity duration-300 group-hover:from-blue-400/16 group-hover:via-sky-400/14 group-hover:to-indigo-400/16 group-hover:opacity-100" aria-hidden />
                <div className="relative inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
                  Vision
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-slate-700 sm:text-base lg:text-[1.02rem]">
                  To build the most trusted workforce ecosystem—where work, identity, and financial access seamlessly come together.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-emerald-100/90 bg-[linear-gradient(160deg,#ffffff_0%,#effcf6_100%)] p-7 shadow-[0_24px_60px_-38px_rgba(5,150,105,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1.5px_rgba(16,185,129,0.95),0_0_0_3px_rgba(34,197,94,0.45),0_0_0_5px_rgba(6,182,212,0.35),0_30px_70px_-40px_rgba(5,150,105,0.4)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(16,185,129,0.08),transparent_45%)]" aria-hidden />
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400/0 via-cyan-400/0 to-green-400/0 opacity-0 transition-opacity duration-300 group-hover:from-emerald-400/16 group-hover:via-cyan-400/14 group-hover:to-green-400/16 group-hover:opacity-100" aria-hidden />
                <div className="relative inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
                  Mission
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-slate-700 sm:text-base lg:text-[1.02rem]">
                  To help enterprises digitize and control workforce operations through unified governance and verified data, and extend this foundation to enable earned wage access and a curated marketplace of financial and worker-focused services.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.06 }}
            >
              <div className="rounded-3xl bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-600 p-[1.5px] shadow-[0_30px_90px_-52px_rgba(29,78,216,0.75)]">
                <div className="relative overflow-hidden rounded-[calc(theme(borderRadius.3xl)-1.5px)] bg-[linear-gradient(145deg,#f8fbff_0%,#f1f7ff_48%,#eef8ff_100%)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_88%_78%,rgba(99,102,241,0.16),transparent_42%)]" aria-hidden />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/55 to-white/85" aria-hidden />
                  <div className="relative flex flex-col items-center justify-center gap-5 px-6 py-8 text-center sm:px-10 sm:py-10">
                    <div className="max-w-2xl">
                      <div className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                        Ready to collaborate or learn more?
                      </div>
                      <div className="mt-2 text-base leading-relaxed text-slate-600 sm:text-lg">
                        Reach out to us and let’s create impactful solutions together.
                      </div>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
                      <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_35px_-20px_rgba(37,99,235,0.95)] transition hover:from-blue-700 hover:to-indigo-700"
                      >
                        Book a Demo
                      </Link>
                      <a
                        href="tel:08027745220"
                        className="inline-flex items-center justify-center rounded-xl border border-slate-300/80 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white"
                      >
                        Get a Call Back
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us: tech tree visual + Expertise card */}
        <section className="border-t border-gray-100/80 bg-white pb-0 pt-4 lg:pb-0 lg:pt-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-center text-2xl font-bold text-gray-900 sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Why Choose Us
            </motion.h2>
            <motion.div
              className="mx-auto mt-1.5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, ease: smoothEase }}
            />

            <div className="mt-4 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:items-center lg:gap-5 xl:gap-6">
              {/* Left: illustrative image */}
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-white lg:col-span-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase }}
              >
                <div className="relative min-h-[23rem] w-full sm:min-h-[28rem] lg:min-h-[34rem]">
                  <Image
                    src="/t2-removed.png"
                    alt="Why choose us visual"
                    fill
                    className="object-contain object-center px-4 pt-4sm:p-6"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </motion.div>

              {/* Right: Expertise card with slider */}
              <motion.div
                className="relative rounded-2xl border border-gray-200 bg-slate-50 p-6 shadow-sm sm:p-7 lg:col-span-6 lg:min-h-[34rem] lg:p-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase }}
              >
                <div className="mx-auto flex min-h-[18rem] max-w-xl flex-col items-center justify-center text-center sm:min-h-[20rem] lg:min-h-[22rem]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={expertiseIndex}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.3, ease: smoothEase }}
                      className="flex flex-col items-center"
                    >
                      <h4 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        {expertiseSlides[expertiseIndex].title}
                      </h4>
                      <p className="mt-4 max-w-[32rem] text-base leading-relaxed text-gray-600 sm:text-lg">
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
                        onClick={() => setExpertiseIndex(i)}
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          i === expertiseIndex ? "scale-110 bg-blue-600" : "bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 flex gap-1.5">
                  <button
                    onClick={() => setExpertiseIndex((prev) => (prev === 0 ? expertiseSlides.length - 1 : prev - 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-gray-600 transition hover:border-gray-400 hover:bg-white active:scale-95"
                    aria-label="Previous"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setExpertiseIndex((prev) => (prev === expertiseSlides.length - 1 ? 0 : prev + 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-gray-600 transition hover:border-gray-400 hover:bg-white active:scale-95"
                    aria-label="Next"
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
