"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const defaultViewport = { once: true, amount: 0.2 } as const;

export type ThroughputMetricCardProps = {
  title: string;
  description: string;
  /** Upper pill (e.g. category label) */
  chip: string;
  /** Short stat or index (e.g. "~8 min", "01") */
  metric: string;
  accentBar: string;
  iconWrap: string;
  hoverGlow: string;
  icon: ReactNode;
  /** Stagger delay index when using default whileInView animation */
  index?: number;
  /** Parent-driven stagger (use with `variants` on parent + initial="hidden" whileInView="visible") */
  motionVariants?: Variants;
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
}: ThroughputMetricCardProps) {
  return (
    <motion.article
      variants={motionVariants}
      {...(motionVariants
        ? {}
        : {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: defaultViewport,
            transition: { duration: 0.45, ease: smoothEase, delay: index * 0.05 },
          })}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_12px_40px_-28px_rgba(15,23,42,0.22)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300/90 ${hoverGlow}`}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${accentBar}`} aria-hidden />
      <div className="flex flex-1 flex-col p-6 pt-5">
        <div className="flex items-start justify-between gap-3">
          <span
            className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 transition-all duration-300 ${iconWrap}`}
          >
            {icon}
          </span>
          <div className="flex flex-col items-end gap-1.5 text-right">
            <span className="rounded-full border border-slate-200/90 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
              {chip}
            </span>
            <span className="text-xs font-semibold tabular-nums text-slate-900">{metric}</span>
          </div>
        </div>

        <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight text-slate-900 sm:text-xl">{title}</h3>
        <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-600 sm:text-sm">{description}</p>
      </div>
    </motion.article>
  );
}
