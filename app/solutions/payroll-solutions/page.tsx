"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const payrollHeroRightBackground = "/WhatsApp Image 2026-05-04 at 12.41.37 PM.jpeg";

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

const painPoints = [
  {
    title: "Ghost Workers & Time Theft",
    stat: "~3–5% of spend",
    description: "Buddy punching and manual attendance fraud.",
  },
  {
    title: "Compliance Violations",
    stat: "₹50K–₹1L per violation",
    description: "Extra OT violations, blocking, incident management, wage violations.",
  },
  {
    title: "Invoice Chaos",
    stat: "25–30% discrepancy rate",
    description: "Finance spends 80–120 hrs./month reconciling.",
  },
  {
    title: "System Fragmentation",
    stat: "Data chaos",
    description: "Biometric, Excel, SAP—nothing communicates.",
  },
  {
    title: "ESI PF Reconciliation & true up",
    stat: "Manual checks",
    description:
      "Leads to errors and time lost. Excel-based checks create real challenges for compliance.",
  },
] as const;

/** Row-major 3×2 grid: five pain-point cards + photo in the center (top-middle). */
const whyInopsGridSlots = [
  { kind: "pain" as const, painIndex: 0 },
  { kind: "image" as const },
  { kind: "pain" as const, painIndex: 1 },
  { kind: "pain" as const, painIndex: 2 },
  { kind: "pain" as const, painIndex: 3 },
  { kind: "pain" as const, painIndex: 4 },
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

const MODULES_AUTOPLAY_MS = 3500;

function OurModulesCarousel() {
  const perView = useModulesPerView();
  const maxStart = Math.max(0, ourModulesSlides.length - perView);
  const [start, setStart] = useState(0);
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
    if (reduceMotion || maxStart <= 0) return;
    const id = window.setInterval(() => {
      setStart((s) => (s >= maxStart ? 0 : s + 1));
    }, MODULES_AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [maxStart, reduceMotion]);

  const goPrev = useCallback(() => {
    setStart((s) => (s <= 0 ? maxStart : s - 1));
  }, [maxStart]);

  const goNext = useCallback(() => {
    setStart((s) => (s >= maxStart ? 0 : s + 1));
  }, [maxStart]);

  return (
    <section
      className="border-t border-slate-200/80 py-14 lg:py-16 bg-white"
      aria-labelledby="our-modules-heading"
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

        <div className="mt-10 overflow-hidden">
          <motion.div
            className="flex will-change-transform"
            animate={{ x: `-${(start * 100) / perView}%` }}
            transition={{ duration: 0.4, ease: smoothEase }}
          >
            {ourModulesSlides.map((slide) => (
              <article
                key={slide.title}
                className="flex shrink-0"
                style={{ width: `${100 / perView}%` }}
              >
                <div className="flex w-full flex-col overflow-hidden border border-slate-100 bg-white shadow-md shadow-slate-900/5">
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
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-sm transition hover:bg-slate-50"
            aria-label="Previous modules"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-sm transition hover:bg-slate-50"
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

function WithInOpsBenefitIcon({ variant }: { variant: "ghost" | "invoice" | "visibility" | "compliance" }) {
  const c = "h-[1.05rem] w-[1.05rem] sm:h-[1.125rem] sm:w-[1.125rem]";
  if (variant === "ghost") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="m17 8 5 5M22 8l-5 5" />
      </svg>
    );
  }
  if (variant === "invoice") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h6" />
      </svg>
    );
  }
  if (variant === "visibility") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
      <path d="M14 2v6h6" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function ImpactKpiIcon({ variant }: { variant: "leakage" | "payback" | "savings" }) {
  const c = "h-5 w-5";
  if (variant === "leakage") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect width="20" height="12" x="2" y="6" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    );
  }
  if (variant === "payback") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
      <path d="M16 7h6v6" />
    </svg>
  );
}

export default function PayrollSolutionsPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        <motion.section
          className="w-full border-b border-slate-100 bg-white pt-8 sm:pt-10 lg:pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.06 }}
          >
            <div className="relative min-h-[340px] w-full bg-white sm:min-h-[390px] lg:min-h-[430px]">
              {/* Right-half hero background (full width on small screens, then locked to the right on lg) */}
              <div className="relative h-52 w-full sm:h-60 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                <Image
                  src={payrollHeroRightBackground}
                  alt="Payroll and contract workforce operations"
                  fill
                  className="object-cover object-[center_35%] sm:object-center lg:object-[center_40%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white to-transparent lg:block"
                  aria-hidden
                />
              </div>
              <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                <div className="max-w-3xl px-2 py-8 sm:px-4 sm:py-10 lg:max-w-xl lg:py-16 lg:pr-6">
                  <motion.h1
                    className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
                  >
                    Redefining Contract <br />
                    Workforce Governance <br />
                    system
                  </motion.h1>
                  <motion.p
                    className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-[1.05rem]"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.14 }}
                  >
                    One Unified Platform for Complete Control
                  </motion.p>
                  <motion.div
                    className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/30"
                    >
                      Get In Touch
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-blue-900/25"
                    >
                      Calculate ROI
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* <section
          className="w-full border-b border-slate-200 bg-black"
          aria-labelledby="clms-hardware-heading"
        >
          <div className="grid min-h-0 grid-cols-1 lg:grid-cols-2 lg:min-h-[min(520px,85vh)]">
            <div className="relative min-h-[260px] w-full bg-slate-200 sm:min-h-[320px] lg:min-h-full">
              <Image
                src="/images/payroll-clms-hardware-split.png"
                alt="Contract worker at a secured turnstile with biometric terminal and access hardware callouts"
                fill
                className="object-cover object-[center_40%] lg:object-[center_35%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:px-16">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <h2
                  id="clms-hardware-heading"
                  className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.05rem] lg:leading-snug xl:text-[2.25rem]"
                >
                  Smart Contract Labour Management With Integrated Hardware
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                  Bring software and devices together: face, card, and fingerprint readers, turnstiles, and flap
                  barriers—wired into one CLMS so attendance is real time, access rules hold at the gate, and your
                  teams get reports and alerts that keep sites secure and audit ready.
                </p>
                <div className="mt-8 h-0.5 w-14 rounded-full bg-blue-500" aria-hidden />
              </motion.div>
            </div>
          </div>
        </section> */}

        <div className="border-b border-slate-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase }}
              >
                <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">Why Inops?</h2>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {whyInopsGridSlots.map((slot, idx) => {
                    if (slot.kind === "image") {
                      return (
                        <motion.div
                          key="why-inops-center-photo"
                          className="group rounded-2xl bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200 p-px transition-all duration-300 hover:from-blue-500 hover:via-blue-500 hover:to-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={viewport}
                          transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(idx * 0.05, 0.25) }}
                        >
                          <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-slate-100 transition-transform duration-300 group-hover:-translate-y-1 sm:min-h-[320px] lg:min-h-[300px]">
                            <Image
                              src="/f0068b65-0c95-43aa-9c59-65cf6c5dea47.jpg"
                              alt="Site supervisor standing with safety gear"
                              fill
                              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                        </motion.div>
                      );
                    }
                    const card = painPoints[slot.painIndex];
                    const n = slot.painIndex + 1;
                    return (
                      <motion.div
                        key={card.title}
                        className="group rounded-2xl bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200 p-px transition-all duration-300 hover:from-blue-500 hover:via-blue-500 hover:to-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(idx * 0.05, 0.25) }}
                      >
                        <article className="flex h-full flex-col rounded-2xl bg-slate-100 p-6 transition-transform duration-300 group-hover:-translate-y-1 sm:p-7">
                          <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-base font-bold tabular-nums text-blue-600 transition-colors duration-300 group-hover:bg-blue-100 sm:h-[3.25rem] sm:w-[3.25rem] sm:text-lg">
                            {n}
                          </div>
                          <h3 className="mt-5 text-2xl font-bold leading-snug text-blue-600 sm:text-[1.75rem] lg:text-[1.85rem] lg:leading-tight">
                            {card.title}
                          </h3>
                          <p className="mt-3 text-base font-semibold leading-snug text-slate-900 sm:text-lg">{card.stat}</p>
                          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">{card.description}</p>
                        </article>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
          </div>
        </div>

        {/* Comprehensive Control — CLMS touchpoints
        <section
          className="border-t border-slate-200/80 py-14 lg:py-16 bg-white"
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
                  className="group rounded-2xl bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200 p-px shadow-sm transition-all duration-300 hover:from-blue-500 hover:via-blue-500 hover:to-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(i * 0.05, 0.2) }}
                >
                  <div className="flex h-full flex-col rounded-2xl bg-white p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100/80">
                      <ComprehensiveControlIcon name={card.icon} />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/90 p-6 text-center shadow-sm sm:col-span-2 lg:col-span-1"
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
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
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
          className="border-t border-slate-200 bg-white"
          aria-labelledby="access-governance-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              className="relative min-h-[280px] bg-black sm:min-h-[360px] lg:min-h-[min(100vh,520px)]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase }}
            >
              <Image
                src="/images/77913ee0-6e66-4c3b-bdad-da60ad90e710.jpg"
                alt="Contract worker using an industrial turnstile with integrated biometric access hardware"
                fill
                quality={200}
                className=" object-contain"
                sizes="(max-width: 768px) 100vw, 100vw"
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

        {/* Contractor leakage snapshot — replaces Proven Business Impact */}
        <section
          className="border-t border-slate-200  py-12 lg:py-16"
          aria-labelledby="contractor-leakage-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex max-w-[95vw] items-center justify-center rounded-full border border-blue-200 bg-white px-4 py-2 text-center text-[10px] font-semibold uppercase leading-snug tracking-wide text-blue-700 shadow-sm sm:text-[11px] sm:tracking-wider">
                Cost leakage is silent. Savings don&apos;t have to be.
              </span>
              <h2
                id="contractor-leakage-heading"
                className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.25rem] lg:leading-tight"
              >
                Stop Losing{" "}
                <span className="text-blue-600">Crores</span> in Contractor Leakage
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Hidden inefficiencies in contractor management can drain{" "}
                <strong className="font-semibold text-slate-800">8–12%</strong> of your annual spend — without you even
                knowing.
              </p>
            </motion.div>

            {/* Snapshot + losses — equal card heights on large screens */}
            <div className="relative mt-10 flex flex-col items-stretch gap-6 lg:flex-row lg:items-stretch lg:gap-0">
              <motion.div
                className="flex min-h-0 flex-1 flex-col rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-xl ring-1 ring-white/10 sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300">Your leakage snapshot</p>
                <p className="mt-1 text-lg font-semibold text-white">Typical Enterprise Scenario</p>
                <div className="mt-6 flex flex-1 flex-col justify-start space-y-3">
                  {[
                    {
                      label: "Number of Contractors",
                      value: "1,000",
                      icon: (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                    },
                    {
                      label: "Avg Monthly Cost per Contractor",
                      value: "₹15,000",
                      icon: (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                    },
                    {
                      label: "Number of Locations",
                      value: "6",
                      icon: (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                    },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky-200">
                        {row.icon}
                      </div>
                      <p className="min-w-0 flex-1 text-sm text-white/85">{row.label}</p>
                      <div className="shrink-0 rounded-lg bg-sky-400 px-3 py-1.5 text-sm font-bold tabular-nums text-slate-900 shadow-sm">
                        {row.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex flex-col gap-1 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60">Annual spend</span>
                  <span className="text-3xl font-bold tabular-nums text-sky-400 sm:text-4xl">₹18 Cr</span>
                </div>
              </motion.div>

              <div
                className="relative z-10 hidden h-14 w-14 shrink-0 items-center justify-center self-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-lg lg:flex lg:self-center"
                aria-hidden
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <motion.div
                className="flex min-h-0 flex-1 flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
              >
                <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-800">Where you lose money</p>
                <ul className="mt-5 flex flex-1 flex-col space-y-3">
                  {[
                    { label: "Ghost Workers (3%)", amount: "₹54 Lakhs", icon: "user-x" as const },
                    { label: "Billing Errors (2%)", amount: "₹36 Lakhs", icon: "doc" as const },
                    { label: "OT Fraud (1%)", amount: "₹18 Lakhs", icon: "clock" as const },
                    { label: "Compliance Penalties", amount: "₹50 Lakhs", icon: "alert" as const },
                    { label: "Admin Inefficiencies", amount: "₹40 Lakhs", icon: "stack" as const },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
                        {item.icon === "user-x" && (
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11a4 4 0 100-8 4 4 0 000 8zM5 21a7 7 0 0114 0M21 12h-4m0 0l2-2m-2 2l2 2" />
                          </svg>
                        )}
                        {item.icon === "doc" && (
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        )}
                        {item.icon === "clock" && (
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {item.icon === "alert" && (
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        )}
                        {item.icon === "stack" && (
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        )}
                      </div>
                      <span className="min-w-0 flex-1 text-sm font-medium text-slate-700">{item.label}</span>
                      <span className="shrink-0 text-sm font-bold tabular-nums text-slate-900">{item.amount}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col gap-1 rounded-2xl bg-rose-50 px-4 py-4 ring-1 ring-rose-100 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs font-bold uppercase tracking-wide text-rose-800">Total leakage</span>
                  <span className="text-xl font-bold tabular-nums text-rose-600 sm:text-2xl">₹1.98 Cr / year</span>
                </div>
              </motion.div>
            </div>

            {/* With InOps + impact — flex rows, ~60/40, matches reference alignment */}
            <motion.div
              className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-md sm:p-8 lg:p-10"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 }}
            >
              <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-0">
                <div className="flex min-w-0 flex-col lg:flex-[1.2] lg:border-r lg:border-slate-200 lg:pr-8 xl:pr-10">
                  <h3 className="shrink-0 text-left text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    With InOps
                  </h3>
                  <div className="mt-5 grid grid-cols-2 gap-3 md:flex md:flex-nowrap md:items-stretch md:gap-3">
                    {(
                      [
                        { line: "Eliminate ghost workers", icon: "ghost" as const },
                        { line: "99%+ invoice accuracy", icon: "invoice" as const },
                        { line: "Real-time workforce visibility", icon: "visibility" as const },
                        { line: "Compliance built-in", icon: "compliance" as const },
                      ] as const
                    ).map(({ line, icon }) => (
                      <div
                        key={line}
                        className="flex min-h-[5.5rem] min-w-0 flex-1 flex-col items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-2 py-3.5 text-center shadow-sm sm:min-h-[6rem] sm:px-2.5"
                      >
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-blue-700"
                          aria-hidden
                        >
                          <WithInOpsBenefitIcon variant={icon} />
                        </span>
                        <span className="text-xs font-medium leading-snug text-slate-900 sm:text-[13px]">{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex min-w-0 flex-col border-t border-slate-200 pt-10 lg:flex-1 lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-10">
                  <h3 className="shrink-0 text-left text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    The impact
                  </h3>
                  <div className="mt-5 flex min-h-0 w-full flex-1 flex-col divide-y divide-slate-200 md:flex-row md:divide-x md:divide-y-0">
                    {(
                      [
                        { k: "Leakage prevented", v: "₹1.98 Cr / year", icon: "leakage" as const },
                        { k: "Payback period", v: "~3 months", icon: "payback" as const },
                        { k: "Net annual savings", v: "₹19 Lakhs", icon: "savings" as const },
                      ] as const
                    ).map((row) => (
                      <div
                        key={row.k}
                        className="flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center px-3 py-6 text-center lg:px-4"
                      >
                        <span
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm"
                          aria-hidden
                        >
                          <ImpactKpiIcon variant={row.icon} />
                        </span>
                        <p className="mt-3.5 max-w-[14rem] text-[10px] font-semibold uppercase leading-snug tracking-wide text-slate-500 sm:mt-4 sm:text-[11px]">
                          {row.k}
                        </p>
                        <p className="mt-2 text-base font-bold tabular-nums text-slate-900 sm:text-lg">{row.v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase, delay: 0.08 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
              >
                Calculate your savings
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-600 bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
              >
                Book a demo
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CLMS CTA */}
        <section className="mt-10 border-t border-slate-200 py-14 lg:py-16 bg-white">
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
