"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const smoothEase = [0.33, 1, 0.68, 1] as const;

/** Industrial / workforce hero visual — matches solution landing reference. */
export const DEFAULT_SOLUTION_HERO_IMAGE =
  "https://images.unsplash.com/photo-1504917595217-d4dc17ebe806?w=1800&q=85";

export type SolutionLandingHeroProps = {
  title: ReactNode;
  subtitle: ReactNode;
  badge?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Appended to the section (e.g. taller min-height for imagery-heavy heroes). */
  sectionClassName?: string;
  /** Overrides default `object-*` on the background image. */
  imageClassName?: string;
  /** Replaces the default `absolute inset-0` image wrapper (include positioning + overflow). */
  imageWrapperClassName?: string;
  /** Passed to next/image `sizes` when the image column is narrower than the viewport. */
  imageSizes?: string;
  /** Overrides default left→right text legibility gradient. */
  gradientClassName?: string;
  /** Mobile-only stack gradient; pass `""` to omit. Defaults to a light top/bottom veil. */
  mobileStackGradientClassName?: string | null;
  /** Drawn above the photo and below the text scrim — e.g. corner / edge opacity fades. */
  imageEdgeFadeClassName?: string;
};

export default function SolutionLandingHero({
  title,
  subtitle,
  badge,
  imageSrc = DEFAULT_SOLUTION_HERO_IMAGE,
  imageAlt = "Industrial worker in safety gear at a facility — enterprise workforce operations",
  primaryCta = { label: "Get In Touch", href: "/contact" },
  secondaryCta = { label: "Calculate ROI", href: "/contact" },
  sectionClassName,
  imageClassName,
  imageWrapperClassName,
  imageSizes,
  gradientClassName,
  mobileStackGradientClassName,
  imageEdgeFadeClassName,
}: SolutionLandingHeroProps) {
  const bgImageClass =
    imageClassName ??
    "object-cover object-[center_30%] sm:object-[center_25%] lg:object-[center_20%]";
  const bgGradientClass =
    gradientClassName ??
    "pointer-events-none absolute inset-0 bg-gradient-to-r from-white from-0% via-white/[0.97] via-[38%] to-transparent to-[58%] sm:via-[42%] sm:to-[62%] lg:via-[44%] lg:to-[68%]";
  const mobileVeilClass =
    mobileStackGradientClassName === null || mobileStackGradientClassName === ""
      ? null
      : mobileStackGradientClassName ??
        "pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white/30 sm:hidden";

  const sectionShell =
    "relative overflow-hidden border-b border-slate-200/80 bg-white";
  const defaultHeights = "min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]";
  const imageWrapClass = imageWrapperClassName ?? "absolute inset-0 overflow-hidden";

  return (
    <motion.section
      className={`${sectionShell} ${sectionClassName ?? defaultHeights}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <div className={imageWrapClass}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={bgImageClass}
          sizes={imageSizes ?? "100vw"}
          priority
        />
      </div>
      {imageEdgeFadeClassName ? (
        <div className={`pointer-events-none absolute inset-0 ${imageEdgeFadeClassName}`} aria-hidden />
      ) : null}
      <div className={bgGradientClass} aria-hidden />
      {mobileVeilClass ? <div className={mobileVeilClass} aria-hidden /> : null}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-16">
        {badge ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
          >
            {badge}
          </motion.div>
        ) : null}

        <motion.h1
          className={`max-w-2xl text-3xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-[2.65rem] lg:leading-[1.1] ${badge ? "mt-4 sm:mt-5" : ""}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: smoothEase, delay: 0.08 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-[1.05rem]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: smoothEase, delay: 0.12 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: smoothEase, delay: 0.16 }}
        >
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/30"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-blue-900/25"
          >
            {secondaryCta.label}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
