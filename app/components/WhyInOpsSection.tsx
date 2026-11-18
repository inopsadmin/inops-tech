"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedHeading, AnimatedParagraph, AnimatedSection } from "./AnimatedSection";
import { inopsUi } from "@/app/lib/inopsUi";
import { whySectionCardImages } from "@/app/lib/serviceImagery";

type WhyCard = {
  title: string;
  text: string;
  badge?: string;
  imageUrl: string;
  description?: string;
  href: string;
  icon?: "chart" | "lock" | "gear" | "integration" | "doc";
};

const whyCardHrefByTitle: Record<string, string> = {
  "Identity Solution": "/mobile-app-attendance",
  HRIS: "/hris",
  "Contract Workforce Governance": "/contract-labour-management",
  "Logistics Solutions": "/enterprise-solution",
  EWA: "/earned-wage-access",
};

const whyCards: WhyCard[] = [
  {
    title: "Contract Workforce Governance",
    badge: "CLMS platform",
    description: "Contract Workforce Governance",
    imageUrl: whySectionCardImages[2],
    href: whyCardHrefByTitle["Contract Workforce Governance"],
    text: "Real-time dashboards for plant, HR, and leadership, so every team sees the same source of truth.",
    icon: "chart",
  },
  {
    title: "HRIS",
    badge: "HR platform",
    description: "HR Information System",
    imageUrl: whySectionCardImages[1],
    href: whyCardHrefByTitle.HRIS,
    text: "Centralise attendance, shifts, compliance, and reporting so operations stays audit-ready without spreadsheets.",
    icon: "gear",
  },
  {
    title: "Identity Solution",
    badge: "Face + access",
    description: "Identity Solution",
    imageUrl: whySectionCardImages[0],
    href: whyCardHrefByTitle["Identity Solution"],
    text: "Cut queues and stop buddy punching with fast, accurate identity verification across devices and cameras.",
    icon: "lock",
  },
  {
    title: "Logistics Solutions",
    badge: "Logistics",
    description: "Delivery Management Solution",
    imageUrl: whySectionCardImages[3],
    href: whyCardHrefByTitle["Logistics Solutions"],
    text: "Roll out across multiple sites with controls, logs, and workflows designed for large industrial operations.",
    icon: "integration",
  },
  {
    title: "EWA",
    badge: "EWA",
    description: "Financial Wellness",
    imageUrl: whySectionCardImages[4],
    href: whyCardHrefByTitle.EWA,
    text: "Give employees flexible access to earned wages while keeping payroll controls and compliance intact.",
    icon: "doc",
  },
];

function whyCardNumber(title: string): string {
  const idx = whyCards.findIndex((c) => c.title === title);
  if (idx < 0) return "00";
  return String(idx + 1).padStart(2, "0");
}

export default function WhyInOpsSection() {
  const selectedWhyCard = whyCards[0];

  return (
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
              <AnimatedHeading as="h2" className="home-display-heading text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Automated Contract Labour Management Workflows
              </AnimatedHeading>
            </motion.div>
          </motion.div>
          <AnimatedParagraph className={`mx-auto mt-6 max-w-2xl ${inopsUi.typeBody}`}>
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

            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
                <div
                    className="grid h-full grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch"
                  >
                    <div className="relative min-h-[220px] w-full overflow-hidden bg-slate-900 lg:min-h-full lg:h-full">
                      <Image
                        src={selectedWhyCard.imageUrl}
                        alt={selectedWhyCard.title}
                        fill
                        className="object-cover object-center transition-transform duration-150 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
                      <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-body-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                        {selectedWhyCard.badge ?? "Dashboard view"}
                      </div>
                    </div>

                    <div className="relative flex flex-col justify-between p-6 transition-colors duration-150 ease-out sm:p-8">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-label uppercase tracking-wide text-blue-700 transition-colors duration-150 ease-out group-hover:border-blue-300 group-hover:bg-blue-100">
                          {selectedWhyCard.badge ?? "Capability"}
                        </div>
                        <h3 className={`mt-4 ${inopsUi.typeCardTitle} transition-colors duration-150 ease-out`}>
                          {selectedWhyCard.title}
                        </h3>
                        <p className={`mt-3 ${inopsUi.typeBody} transition-colors duration-150 ease-out group-hover:text-gray-700`}>
                          {selectedWhyCard.text}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <Link
                          href={selectedWhyCard.href}
                          className="btn-primary btn-glow inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm text-white shadow-md transition-colors duration-150 ease-out hover:bg-blue-700 group-hover:bg-blue-700"
                        >
                          View all Solutions
                        </Link>
                      </div>

                      <div className="mt-6 h-px w-20 bg-gradient-to-r from-gray-200 to-transparent" aria-hidden />
                      <span
                        className="pointer-events-none absolute bottom-4 right-4 select-none text-4xl font-semibold tabular-nums leading-none tracking-tight text-slate-200/75 transition-colors duration-300 group-hover:text-slate-300/90 sm:bottom-5 sm:right-5 sm:text-5xl lg:bottom-6 lg:right-7 lg:text-6xl"
                        aria-hidden
                      >
                        {whyCardNumber(selectedWhyCard.title)}
                      </span>
                    </div>
                </div>
            </motion.div>
          </motion.div>

          {/* Right: compact grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:h-full lg:grid-cols-2 lg:grid-rows-2">
            {whyCards.slice(1).map((card, index) => (
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

                    <Link
                      href={card.href}
                      className="block h-full w-full p-4 pb-14 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:p-5 sm:pb-16"
                      aria-label={`Learn about ${card.title}`}
                    >
                      <div className="flex h-full gap-3 sm:gap-3.5">
                        <div className="relative h-14 w-16 flex-none overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:h-[3.7rem] sm:w-[4.2rem]">
                          <Image src={card.imageUrl} alt={card.description?.trim() || card.title} fill className="object-cover transition duration-700 group-hover:scale-[1.07]" sizes="64px" />
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

                          <div className="mt-2 inline-flex w-fit rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-blue-700">
                            {card.badge ?? "Capability"}
                          </div>
                          <div className={`mt-1.5 line-clamp-2 ${inopsUi.typeCardTitle} leading-snug`}>{card.title}</div>
                        </div>
                      </div>
                    </Link>
                  <span
                    className="pointer-events-none absolute bottom-3 right-3 select-none text-3xl font-semibold tabular-nums leading-none tracking-tight text-slate-200/75 transition-colors duration-300 group-hover:text-slate-300/90 sm:bottom-4 sm:right-4 sm:text-4xl"
                    aria-hidden
                  >
                    {whyCardNumber(card.title)}
                  </span>
                </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
