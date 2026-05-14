"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const defaultViewport = { once: true, amount: 0.2 } as const;
const hoverLift = { y: -6, scale: 1.01 } as const;

function isTwoDigitOrdinal(s: string) {
  return /^\d{2}$/.test(s.trim());
}

export type ThroughputMetricCardProps = {
  title: string;
  description: string;
  /** Upper pill (e.g. category label) */
  chip: string;
  /** Stat pill (e.g. "~8 min") or two-digit ordinal "01" when used as the large numeral only */
  metric: string;
  accentBar: string;
  iconWrap: string;
  hoverGlow: string;
  icon: ReactNode;
  /** Stagger delay index when using default whileInView animation */
  index?: number;
  /** Parent-driven stagger (use with `variants` on parent + initial="hidden" whileInView="visible") */
  motionVariants?: Variants;
  /** Outer 1px gradient shell; defaults to accentBar */
  borderGradient?: string;
  /** Large top-right numeral; defaults from metric if two digits, else from index */
  step?: string;
  /** Footer link (enterprise module cards) */
  cta?: { href: string; label?: string };
};

export function ThroughputMetricCard({
  title,
  description,
  chip,
  metric,
  accentBar,
  iconWrap,
  hoverGlow,
  icon,
  index = 0,
  motionVariants,
  borderGradient,
  step,
  cta,
}: ThroughputMetricCardProps) {
  const metricTrimmed = metric.trim();
  const metricIsOrdinal = isTwoDigitOrdinal(metricTrimmed);
  const bigStep =
    step?.trim() ??
    (metricIsOrdinal ? metricTrimmed : String(index + 1).padStart(2, "0"));
  const showStatPill = metricTrimmed !== "" && !metricIsOrdinal;

  const outerGradient = borderGradient ?? accentBar;

  return (
    <motion.div
      variants={motionVariants}
      {...(motionVariants
        ? {}
        : {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: defaultViewport,
            transition: { duration: 0.45, ease: smoothEase, delay: index * 0.05 },
          })}
      whileHover={hoverLift}
      className={`rounded-2xl bg-gradient-to-br p-px shadow-[0_18px_44px_-28px_rgba(15,23,42,0.14)] transition-shadow duration-200 ${outerGradient} ${hoverGlow}`}
    >
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[0.95rem] border border-white/70 bg-white/95 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-sm sm:rounded-[1rem] sm:p-6">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 overflow-hidden rounded-t-[0.9rem] sm:rounded-t-[0.95rem]"
          aria-hidden
        >
          <div className={`h-full w-full bg-gradient-to-r ${accentBar}`} />
        </div>

        <span
          className={`pointer-events-none absolute -right-0.5 top-3 bg-gradient-to-r bg-clip-text font-mono text-[3.25rem] font-black leading-none tracking-tighter text-transparent opacity-[0.72] sm:right-1 sm:top-4 sm:text-[3.5rem] sm:opacity-[0.78] ${accentBar}`}
          aria-hidden
        >
          {bigStep}
        </span>

        <div className="relative flex flex-wrap items-center gap-2">
          <div
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-current [&_svg]:h-4 [&_svg]:w-4 ${iconWrap}`}
          >
            {icon}
          </div>
          <span className="rounded-full border border-slate-200/90 bg-slate-50/90 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            {chip}
          </span>
          {showStatPill ? (
            <span className="rounded-full border border-slate-200/90 bg-white/90 px-2.5 py-0.5 text-xs font-semibold tabular-nums tracking-wide text-slate-700">
              {metricTrimmed}
            </span>
          ) : null}
        </div>

        <h3 className="relative mt-4 text-base font-semibold tracking-tight text-slate-900 sm:text-lg">{title}</h3>
        <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>

        {cta ? (
          <Link
            href={cta.href}
            className="relative mt-6 inline-flex items-center gap-1.5 self-start rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_22px_-10px_rgba(37,99,235,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-[0_12px_28px_-12px_rgba(37,99,235,0.4)] active:scale-[0.98] group/link"
          >
            {cta.label ?? "Explore module"}
            <svg
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        ) : null}
      </article>
    </motion.div>
  );
}
