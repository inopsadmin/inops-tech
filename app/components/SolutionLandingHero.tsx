"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import VideoLivePopups, { type VideoLivePopupItem } from "./VideoLivePopups";

const smoothEase = [0.33, 1, 0.68, 1] as const;

/** Pull `rounded-*` onto the inner clip layer so the outer shell can stay overflow-visible for popups. */
const ROUNDED_TOKEN = /\brounded(?:-[#\w\[\]%,.]+)*\b/g;

function stripOverflowHidden(className: string): string {
  return className
    .replace(/\boverflow-hidden\b/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function mediaClipInnerClass(full: string): string {
  const rounded = full.match(ROUNDED_TOKEN)?.join(" ") ?? "";
  return ["absolute inset-0 overflow-hidden", rounded].filter(Boolean).join(" ");
}

/** Industrial / workforce hero visual ,  matches solution landing reference. */
export const DEFAULT_SOLUTION_HERO_IMAGE =
  "https://images.unsplash.com/photo-1504917595217-d4dc17ebe806?w=1800&q=85";

export type SolutionLandingHeroProps = {
  title: ReactNode;
  subtitle: ReactNode;
  badge?: ReactNode;
  /** Rendered below primary/secondary CTAs (e.g. trust badges, micro-stats). */
  children?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Overrides default primary button styles (Tailwind classes). */
  primaryCtaClassName?: string;
  /** Overrides default secondary button styles when `secondaryCta` is set. */
  secondaryCtaClassName?: string;
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
  /** Drawn above the photo and below the text scrim ,  e.g. corner / edge opacity fades. */
  imageEdgeFadeClassName?: string;
  /** Floating "Live" status tiles to overlay on the video. Defaults to a single
   *  "Live · Detection running" tile when `videoSrc` is provided. Pass `null` to
   *  hide the default tile, or an array to fully customise. */
  livePopups?: VideoLivePopupItem[] | null;
};

const defaultHeroPopups: VideoLivePopupItem[] = [
  {
    position: "top-right",
    
    label: "Live",
    title: "Detection running",
    accent: "emerald",
  },
];

export default function SolutionLandingHero({
  title,
  subtitle,
  badge,
  imageSrc = DEFAULT_SOLUTION_HERO_IMAGE,
  imageAlt = "Industrial worker in safety gear at a facility ,  enterprise workforce operations",
  videoSrc,
  primaryCta = { label: "Get In Touch", href: "/contact" },
  secondaryCta,
  children,
  primaryCtaClassName,
  secondaryCtaClassName,
  sectionClassName,
  imageClassName,
  imageWrapperClassName,
  imageSizes,
  gradientClassName,
  mobileStackGradientClassName,
  imageEdgeFadeClassName,
  livePopups,
}: SolutionLandingHeroProps) {
  const popupsToRender =
    livePopups === null
      ? null
      : livePopups && livePopups.length > 0
        ? livePopups
        : videoSrc
          ? defaultHeroPopups
          : null;
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

  /** `overflow-visible` so corner `livePopups` with negative offsets are not clipped; media stays clipped by inner shell. */
  const sectionShell =
    "relative overflow-visible border-b border-slate-200/80 bg-white";
  const defaultHeights = "min-h-[20rem] sm:min-h-[22.5rem] lg:min-h-[25rem] xl:min-h-[27rem] 2xl:min-h-[29rem]";
  const imageWrapClass = imageWrapperClassName ?? "absolute inset-0 mt-10 overflow-hidden";
  const hadOverflowHidden = /\boverflow-hidden\b/.test(imageWrapClass);
  const mediaShellClass = hadOverflowHidden ? stripOverflowHidden(imageWrapClass) : imageWrapClass;

  return (
    <motion.section
      className={`${sectionShell} ${sectionClassName ?? defaultHeights}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <div className={`${mediaShellClass} z-0`}>
        {hadOverflowHidden ? (
          <div className={mediaClipInnerClass(imageWrapClass)}>
            {videoSrc ? (
              <video
                className={`absolute inset-0 h-full w-full ${bgImageClass}`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={imageSrc}
                aria-label={typeof imageAlt === "string" ? imageAlt : "Solution hero video"}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className={bgImageClass}
                sizes={imageSizes ?? "100vw"}
                priority
              />
            )}
          </div>
        ) : videoSrc ? (
          <video
            className={`absolute inset-0 h-full w-full ${bgImageClass}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={imageSrc}
            aria-label={typeof imageAlt === "string" ? imageAlt : "Solution hero video"}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={bgImageClass}
            sizes={imageSizes ?? "100vw"}
            priority
          />
        )}
      </div>
      {imageEdgeFadeClassName ? (
        <div
          className={`pointer-events-none absolute inset-0 z-[1] ${imageEdgeFadeClassName}`}
          aria-hidden
        />
      ) : null}
      <div className={`${bgGradientClass} z-[1]`} aria-hidden />
      {mobileVeilClass ? <div className={`${mobileVeilClass} z-[1]`} aria-hidden /> : null}
      {popupsToRender ? (
        <div className={`${mediaShellClass} pointer-events-none z-[5]`}>
          <VideoLivePopups popups={popupsToRender} />
        </div>
      ) : null}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-16 xl:py-18 2xl:py-20">
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
          className={`max-w-2xl tracking-tight text-slate-900 ${badge ? "mt-4 sm:mt-5" : ""}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: smoothEase, delay: 0.08 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-slate-600"
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
            className={
              primaryCtaClassName ??
              "inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/30"
            }
          >
            {primaryCta.label}
          </Link>
          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className={
                secondaryCtaClassName ??
                "inline-flex items-center justify-center rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-blue-900/25"
              }
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </motion.div>
        {children}
      </div>
    </motion.section>
  );
}
