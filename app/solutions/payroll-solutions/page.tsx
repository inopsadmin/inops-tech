"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

/** Hero + feature grid — contract workforce / CLMS narrative */
const clmsHeroImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=85";

const comprehensiveControlCards = [
  {
    title: "Digital Onboarding",
    description:
      "Verify identities, run background checks, and digitize paperwork so every contractor is cleared and audit-ready before day one.",
    icon: "onboarding" as const,
  },
  {
    title: "Attendance & Shift Tracking",
    description:
      "Capture biometrics and shift rules at the gate, then feed clean hours straight into payroll and vendor billing.",
    icon: "clock" as const,
  },
  {
    title: "Wage & Compliance",
    description:
      "Automate minimum wage, overtime, statutory deductions, and policy checks so payouts stay defensible on every cycle.",
    icon: "scale" as const,
  },
  {
    title: "Invoice Reconciliation",
    description:
      "Match contractor invoices to verified headcount and hours—spot leakage before it hits the finance close.",
    icon: "invoice" as const,
  },
  {
    title: "Contractor Management",
    description:
      "Track licenses, renewals, and performance signals across vendors without losing sight of site-level accountability.",
    icon: "contractor" as const,
  },
] as const;

const whyInopsCards = [
  {
    title: "Data-Driven Decision Making",
    description:
      "Leverage real-time analytics and AI-driven insights to optimize workforce productivity and operational efficiency. AI-driven attendance monitoring, geo-tagging, and facial recognition ensure accurate contractor management.",
    icon: "chart" as const,
  },
  {
    title: "Security & Compliance First",
    description:
      "We ensure high security and compliance with regulatory standards, making workforce tracking seamless while maintaining legal transparency.",
    icon: "security" as const,
  },
  {
    title: "Scalable & Customizable",
    description:
      "Our solutions cater to businesses of all sizes-whether you need on-premise, cloud, or hybrid deployment, InOps adapts to your needs.",
    icon: "scalable" as const,
  },
  {
    title: "Advanced Hardware & Software Integration",
    description:
      "Seamlessly integrate our biometric devices, access control, and attendance tracking with HRMS, payroll, and ERP systems.",
    icon: "integration" as const,
  },
  {
    title: "End-to-End Compliance Automation",
    description:
      "Streamline contractor onboarding, payroll, attendance, and compliance reporting-all in one platform.",
    icon: "compliance" as const,
  },
] as const;

/** Horizontal “Our Module” carousel — image, title, description per slide */
const ourModulesSlides = [
  {
    title: "Time Attendance and Leave",
    description:
      "Track attendance in real time, apply shift and leave policies automatically, and push verified hours directly to payroll.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=85",
    alt: "Team planning attendance and leave schedules",
  },
  {
    title: "Wage/Payroll",
    description:
      "Calculate wages, statutory deductions, and overtime with audit trails that stay compliant across every pay cycle.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=85",
    alt: "Payroll and compensation dashboard",
  },
  {
    title: "Contractor Management",
    description:
      "Manage vendor profiles, manpower allocation, renewals, and site-level accountability from one centralized view.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85",
    alt: "Contractors and supervisors on an industrial site",
  },
  {
    title: "CXO Dashboard",
    description:
      "Give leadership real-time visibility into headcount, productivity, compliance posture, and cost leakages.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85",
    alt: "Executive dashboard with operations KPIs",
  },
  {
    title: "Background Verification",
    description:
      "Verify contractor identity and documents before onboarding, with complete records ready for audits and renewals.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=85",
    alt: "Document and background verification process",
  },
  {
    title: "AI Assistance",
    description:
      "Use AI to flag anomalies, predict risks, and suggest next actions across attendance, compliance, and billing workflows.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=85",
    alt: "AI workforce analytics and assistance",
  },
  {
    title: "Compliance Report",
    description:
      "Generate ready-to-submit compliance reports for labor laws, statutory filings, and internal governance reviews.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85",
    alt: "Compliance reports and governance analytics",
  },
  {
    title: "Challan Reconciliation",
    description:
      "Reconcile challans with attendance and wage data to detect mismatches early and prevent financial leakage.",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=85",
    alt: "Invoice and challan reconciliation review",
  },
] as const;

function useModulesPerView() {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerView(3);
      else if (w >= 640) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return perView;
}

const MODULES_AUTOPLAY_MS = 5500;

function OurModulesCarousel() {
  const perView = useModulesPerView();
  const maxStart = Math.max(0, ourModulesSlides.length - perView);
  const [start, setStart] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setReduceMotion(mq.matches);
    read();
    mq.addEventListener("change", read);
    return () => mq.removeEventListener("change", read);
  }, []);

  useEffect(() => {
    setStart((s) => Math.min(s, maxStart));
  }, [maxStart]);

  useEffect(() => {
    if (reduceMotion || maxStart <= 0 || hoverPaused) return;
    const id = window.setInterval(() => {
      setStart((s) => (s >= maxStart ? 0 : s + 1));
    }, MODULES_AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [maxStart, hoverPaused, reduceMotion]);

  const goPrev = useCallback(() => {
    setStart((s) => (s <= 0 ? maxStart : s - 1));
  }, [maxStart]);

  const goNext = useCallback(() => {
    setStart((s) => (s >= maxStart ? 0 : s + 1));
  }, [maxStart]);

  const visible = ourModulesSlides.slice(start, start + perView);

  return (
    <section
      className="border-t border-slate-200/80 bg-slate-100/60 py-14 lg:py-16"
      aria-labelledby="our-modules-heading"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <motion.h2
          id="our-modules-heading"
          className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease: smoothEase }}
        >
          Our Module
        </motion.h2>

        <p className="sr-only">
          Carousel advances automatically. Hover to pause. Use previous and next buttons to move slides.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {visible.map((slide) => (
            <motion.article
              key={slide.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md shadow-slate-900/5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: smoothEase }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-6 pt-5 text-center sm:px-6">
                <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-lg">{slide.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{slide.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-indigo-600 shadow-sm transition hover:bg-slate-50"
            aria-label="Previous modules"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-indigo-600 shadow-sm transition hover:bg-slate-50"
            aria-label="Next modules"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function ComprehensiveControlIcon({ name }: { name: (typeof comprehensiveControlCards)[number]["icon"] }) {
  const c = "h-6 w-6";
  if (name === "onboarding") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    );
  }
  if (name === "clock") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (name === "scale") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    );
  }
  if (name === "invoice") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function WhyInopsIcon({ name }: { name: (typeof whyInopsCards)[number]["icon"] }) {
  const c = "h-7 w-7";
  if (name === "chart") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 2 2 5-5m2 10H5a2 2 0 01-2-2V5m14 0h4v4m0-4l-7 7" />
      </svg>
    );
  }
  if (name === "security") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a3 3 0 100-6 3 3 0 000 6zm0 0v2m0 4h.01M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41M12 2v2m0 16v2" />
      </svg>
    );
  }
  if (name === "scalable") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-6h-2M6 12H4m12.95 6.95l-1.41-1.41M8.46 8.46L7.05 7.05m9.9 0l-1.41 1.41M8.46 15.54l-1.41 1.41M12 9a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    );
  }
  if (name === "integration") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7a3 3 0 116 0m-9 9a3 3 0 116 0m6-9a3 3 0 11-6 0m0 0v6m-3-3h6m-9 6h12" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

export default function PayrollSolutionsPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero — platform solutions, contract workforce governance */}
        <motion.section
          className="hero-tight border-b border-slate-100 bg-white pt-0 lg:pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <div className="pt-8 lg:pt-0">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
              <motion.nav
                className="text-sm text-slate-500"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: smoothEase, delay: 0.04 }}
                aria-label="Breadcrumb"
              >
                {/* <Link href="/" className="text-slate-600 transition-colors hover:text-indigo-600">
                  Home
                </Link>
                <span className="mx-2 text-slate-400">/</span>
                <span className="font-medium text-slate-900">Payroll Solutions</span> */}
              </motion.nav>
            </div>

            <motion.div
              className="relative mt-6 overflow-hidden rounded-none border border-slate-200/70 sm:mt-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.08 }}
            >
              <div className="relative min-h-[340px] sm:min-h-[390px] lg:min-h-[430px]">
                <Image
                  src="/image.jpg"
                  alt="Site supervisor standing in a factory floor"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority
                />
                <div
                  className=""
                  aria-hidden
                />
                <div className="relative z-10 max-w-3xl px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16 ml-10">
                  <motion.h1
                    className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem]"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
                  >
                    Turn Compliance Challenges into Opportunities with Automated CLMS and Eliminate Manual Effort
                  </motion.h1>
                  <motion.p
                    className="mt-6 text-sm text-slate-600 sm:text-base"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.14 }}
                  >
                    One Unified Platform for Complete Control
                  </motion.p>
                  <motion.div
                    className="mt-7 flex flex-wrap items-center gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/25 transition hover:bg-sky-600"
                    >
                      Get In Touch
                    </Link>
                    <Link
                      href="/blog"
                      className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:bg-blue-700"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <div className="mx-auto mt-15 max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase }}
              >
                <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">Why Inops?</h2>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {whyInopsCards.slice(0, 1).map((card, i) => (
                  <motion.div
                    key={card.title}
                    className="group rounded-2xl bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200 p-px transition-all duration-300 hover:from-indigo-500 hover:via-violet-500 hover:to-sky-500 hover:shadow-lg hover:shadow-indigo-500/20"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(i * 0.05, 0.2) }}
                  >
                    <article className="h-full rounded-2xl bg-slate-100 p-6 transition-transform duration-300 group-hover:-translate-y-1 sm:p-7">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-100">
                        <WhyInopsIcon name={card.icon} />
                      </div>
                      <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900">{card.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.description}</p>
                    </article>
                  </motion.div>
                ))}

                <motion.div
                  className="group rounded-2xl bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200 p-px transition-all duration-300 hover:from-indigo-500 hover:via-violet-500 hover:to-sky-500 hover:shadow-lg hover:shadow-indigo-500/20"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
                >
                  <div className="relative min-h-[340px] sm:min-h-[390px] lg:min-h-[300px] overflow-hidden rounded-2xl bg-slate-100 transition-transform duration-300 group-hover:-translate-y-1">
                    <Image
                      src="/f0068b65-0c95-43aa-9c59-65cf6c5dea47.jpg"
                      alt="Site supervisor standing with safety gear"
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>

                {whyInopsCards.slice(1, 2).map((card, i) => (
                  <motion.div
                    key={card.title}
                    className="group rounded-2xl bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200 p-px transition-all duration-300 hover:from-indigo-500 hover:via-violet-500 hover:to-sky-500 hover:shadow-lg hover:shadow-indigo-500/20"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.45, ease: smoothEase, delay: Math.min((i + 2) * 0.05, 0.2) }}
                  >
                    <article className="h-full rounded-2xl bg-slate-100 p-6 transition-transform duration-300 group-hover:-translate-y-1 sm:p-7">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-100">
                        <WhyInopsIcon name={card.icon} />
                      </div>
                      <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900">{card.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.description}</p>
                    </article>
                  </motion.div>
                ))}

                {whyInopsCards.slice(2).map((card, i) => (
                  <motion.div
                    key={card.title}
                    className="group rounded-2xl bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200 p-px transition-all duration-300 hover:from-indigo-500 hover:via-violet-500 hover:to-sky-500 hover:shadow-lg hover:shadow-indigo-500/20"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.45, ease: smoothEase, delay: Math.min((i + 3) * 0.05, 0.25) }}
                  >
                    <article className="h-full rounded-2xl bg-slate-100 p-6 transition-transform duration-300 group-hover:-translate-y-1 sm:p-7">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-100">
                        <WhyInopsIcon name={card.icon} />
                      </div>
                      <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900">{card.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.description}</p>
                    </article>
                  </motion.div>
                ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Comprehensive Control — CLMS touchpoints
        <section
          className="border-t border-slate-200/80 bg-slate-50 py-14 lg:py-16"
          aria-labelledby="comprehensive-control-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2
                id="comprehensive-control-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
              >
                Comprehensive Control
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                Our CLMS covers every touchpoint of your contract labor operations.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {comprehensiveControlCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="group rounded-2xl bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200 p-px shadow-sm transition-all duration-300 hover:from-indigo-500 hover:via-violet-500 hover:to-sky-500 hover:shadow-lg hover:shadow-indigo-500/20"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(i * 0.05, 0.2) }}
                >
                  <div className="flex h-full flex-col rounded-2xl bg-white p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-indigo-600 ring-1 ring-indigo-100/80">
                      <ComprehensiveControlIcon name={card.icon} />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-violet-300 bg-violet-50/90 p-6 text-center shadow-sm sm:col-span-2 lg:col-span-1"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: 0.15 }}
              >
                <h3 className="text-lg font-bold text-slate-900">Need Custom Integration?</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
                  We sync with SAP, Oracle, and legacy ERP systems.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
                >
                  Talk to Tech Support
                  <span aria-hidden>→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section> */}

        <OurModulesCarousel />

        {/* Real-time access governance — split visual + dark copy */}
        <section
          id="access-governance"
          className="border-t border-slate-200"
          aria-labelledby="access-governance-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              className="relative min-h-[280px] bg-slate-900 sm:min-h-[360px] lg:min-h-[min(100vh,520px)]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase }}
            >
              <Image
                src="/images/Hardware Integration.jpg"
                alt="Contract worker using an industrial turnstile with integrated biometric access hardware"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              className="flex flex-col justify-center bg-black px-6 py-12 sm:px-10 sm:py-14 lg:min-h-[min(100vh,520px)] lg:px-14 lg:py-16"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase, delay: 0.05 }}
            >
              <h2
                id="access-governance-heading"
                className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.125rem] lg:leading-snug"
              >
                Real-Time Entry, Exit &amp; Access Governance
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/88 sm:text-lg">
                Manage your contract workforce efficiently with our software that seamlessly integrates with biometric
                hardware—including face, card, and fingerprint readers. The system works effortlessly with access control
                solutions like turnstiles and flap barriers to ensure only authorized personnel enter your premises.
                Track real-time attendance, manage shifts, and generate contractor-wise reports—all from a single
                platform. Get automated alerts for early exits, overstays, and unauthorized access, enhancing both
                security and compliance.
              </p>
              <div className="mt-10 h-1 w-14 rounded-full bg-blue-500" aria-hidden />
            </motion.div>
          </div>
        </section>

        {/* Proven Business Impact */}
        <section
          className="border-t border-slate-200 bg-white py-12 lg:py-16"
          aria-labelledby="proven-impact-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="overflow-hidden rounded-3xl bg-violet-100/90 px-6 py-10 shadow-sm ring-1 ring-violet-200/60 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase }}
                >
                  <h2
                    id="proven-impact-heading"
                    className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem]"
                  >
                    Proven Business <span className="text-blue-600">Impact</span>
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                    InOps CLMS isn&apos;t just about management; it&apos;s about measurable financial and operational
                    excellence.
                  </p>
                  <ul className="mt-8 space-y-4">
                    {[
                      "90% reduction in manual reconciliation",
                      "3–5% immediate fraud elimination",
                      "100% automated audit logging",
                      "Real-time visibility across all vendors",
                    ].map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-snug text-slate-800 sm:text-base">
                        <span
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white"
                          aria-hidden
                        >
                          <CheckIcon className="h-3.5 w-3.5 text-white" />
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/90 p-5 shadow-sm sm:p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600/15 text-emerald-700">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-4 text-base font-bold text-slate-900 sm:text-lg">Eliminate Ghost Workers</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        Aadhaar-linked biometric verification ensures every worker on site is legitimate and verified.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-violet-200/80 bg-violet-50/90 p-5 shadow-sm sm:p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600/15 text-violet-700">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-4 text-base font-bold text-slate-900 sm:text-lg">Reduce Cost Leakages</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        Automated invoice cross-verification typically recovers 10–15% in previously undetected billing
                        errors.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0">
                      <div className="border-b border-slate-200 pb-6 text-center sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
                        <p className="text-2xl font-bold tabular-nums text-blue-600 sm:text-3xl">₹2–3 Cr</p>
                        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500 sm:text-sm sm:normal-case sm:tracking-normal">
                          Annual savings per 1000 contractors
                        </p>
                      </div>
                      <div className="text-center sm:pl-6">
                        <p className="text-2xl font-bold tabular-nums text-slate-800 sm:text-3xl">30–60 Days</p>
                        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500 sm:text-sm sm:normal-case sm:tracking-normal">
                          Typical deployment timeframe
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CLMS CTA */}
        <section className="mt-10 border-t border-slate-200 bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <motion.h2
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.125rem] lg:leading-snug"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Ready to take control of your contract workforce?
            </motion.h2>
            <motion.p
              className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
            >
              Join leading enterprises who have digitized their workforce governance with InOps. Book a personalized
              walkthrough of the CLMS platform today.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase, delay: 0.1 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
              >
                Request a Demo
              </Link>
              <Link
                href="/brochures"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
              >
                Download Brochure
              </Link>
            </motion.div>
            <motion.p
              className="mt-8 text-xs leading-relaxed text-slate-500 sm:text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, delay: 0.12 }}
            >
              Trusted by Fortune 500 manufacturing, logistics, and infrastructure giants.
            </motion.p>
          </div>
        </section>
      </div>
    </>
  );
}
