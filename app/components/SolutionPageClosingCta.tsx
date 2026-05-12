"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { inopsUi } from "@/app/lib/inopsUi";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

export type SolutionPageClosingCtaProps = {
  /** Used for `aria-labelledby` on the section */
  headingId?: string;
  heading: ReactNode;
  description: ReactNode;
  primaryLabel: string;
  secondaryLabel: string;
  primaryHref?: string;
  secondaryHref?: string;
  footnote?: ReactNode;
  /** Only the blue card ,  no outer white band (use when a parent section already provides layout). */
  embedded?: boolean;
  /** Optional extra classes on the outer `<section>` (non-embedded). */
  sectionClassName?: string;
};

export default function SolutionPageClosingCta({
  headingId = "solution-page-closing-cta-heading",
  heading,
  description,
  primaryLabel,
  secondaryLabel,
  primaryHref = "/contact",
  secondaryHref = "/contact",
  footnote,
  embedded = false,
  sectionClassName,
}: SolutionPageClosingCtaProps) {
  const secondaryIsSpecialProtocol =
    secondaryHref.startsWith("tel:") || secondaryHref.startsWith("mailto:");

  const ctaCard = (
    <motion.div
      className="solution-cta relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--inops-blue)] via-blue-700 to-[color:var(--inops-navy)] px-6 py-12 text-center shadow-lg shadow-blue-900/25 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, ease: smoothEase }}
    >
      <div
        className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/18"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-white/16"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 id={headingId} className="solution-cta__heading tracking-tight text-white">
          {heading}
        </h2>
        <div className="solution-cta__desc mx-auto mt-4 max-w-2xl leading-relaxed text-blue-50">
          {description}
        </div>
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link href={primaryHref} className={inopsUi.btnOnDarkPrimary}>
            {primaryLabel}
          </Link>
          {secondaryIsSpecialProtocol ? (
            <a href={secondaryHref} className={inopsUi.btnOnDarkSecondary}>
              {secondaryLabel}
            </a>
          ) : (
            <Link href={secondaryHref} className={inopsUi.btnOnDarkSecondary}>
              {secondaryLabel}
            </Link>
          )}
        </div>
        {footnote ? (
          <p className="mt-8 text-sm leading-relaxed text-blue-50/95">{footnote}</p>
        ) : null}
      </div>
    </motion.div>
  );

  if (embedded) {
    return (
      <div className="w-full" aria-labelledby={headingId}>
        {ctaCard}
      </div>
    );
  }

  return (
    <section
      className={`border-t border-slate-200/80 bg-white px-4 pb-16 pt-10 sm:px-6 lg:px-12 lg:pb-20${sectionClassName ? ` ${sectionClassName}` : ""}`}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-7xl">{ctaCard}</div>
    </section>
  );
}
