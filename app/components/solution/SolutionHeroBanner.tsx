"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FlyInText } from "@/app/components/FlyInText";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";


export type HeroButton = {
  label: string;
  href: string;
  variant: "primary" | "outline";
};

export type HeroBadge = {
  label: string;
  icon: React.ReactNode;
  bg: string; 
  fg: string; 
};

export type HeroLiveBadge = {
  label: string; 
  sublabel: string; 
};

export type SolutionHeroBannerProps = {
  bgImage: string;
  bgImageAlt: string;
  bgPosition?: string; 
  gradientCenter?: string; // kept for prop-compatibility, unused in this layout
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleAccentClassName?: string; 
  description: string;
  badges?: HeroBadge[]; // intentionally not rendered in this layout
  buttons: HeroButton[];
  liveBadge?: HeroLiveBadge;
};

export default function SolutionHeroBanner({
  bgImage,
  bgImageAlt,
  bgPosition = "50% 50%",
  eyebrow,
  titleLine1,
  titleLine2,
  titleAccentClassName = "text-[#0052FF]",
  description,
  buttons,
  liveBadge,
}: SolutionHeroBannerProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex items-center">
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-10 lg:px-16 py-20 sm:py-24 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left: text content */}
          <div className="w-full lg:w-[42%] shrink-0">
            <FlyInText
              as="span"
              direction="up"
              delay={0}
              className="inline-block rounded-full bg-blue-100 px-3.5 py-1.5 text-xs font-bold text-[#0052FF] mb-6 border border-blue-200"
            >
              {eyebrow}
            </FlyInText>

            <FlyInText
              as="h1"
              direction="up"
              delay={0.05}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black leading-tight text-gray-900 tracking-tight"
            >
              {titleLine1} <span className={titleAccentClassName}>{titleLine2}</span>
            </FlyInText>

            <FlyInText
              as="p"
              direction="up"
              delay={0.12}
              className="mt-5 max-w-md text-base sm:text-lg leading-relaxed text-gray-700"
            >
              {description}
            </FlyInText>

            <AnimateOnScroll variant="fade-up" delay={180} className="mt-9 flex flex-wrap items-center gap-4">
              {buttons.map((btn) =>
                btn.variant === "primary" ? (
                  <Link
                    key={btn.label}
                    href={btn.href}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#0052FF] px-7 py-3.5 text-sm font-bold text-white shadow-[0_4px_14px_0_rgba(0,82,255,0.3)] transition hover:bg-blue-700 hover:-translate-y-0.5"
                  >
                    {btn.label}
                  </Link>
                ) : (
                  <Link
                    key={btn.label}
                    href={btn.href}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white/80 backdrop-blur px-7 py-3.5 text-sm font-bold text-[#0052FF] transition hover:bg-blue-50 hover:-translate-y-0.5"
                  >
                    {btn.label}
                  </Link>
                )
              )}
            </AnimateOnScroll>
          </div>

          {/* Right: image */}
          <div className="relative w-full lg:w-[58%] aspect-[16/11] sm:aspect-[16/10] lg:aspect-auto lg:h-[520px]">
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src={bgImage}
                  alt={bgImageAlt}
                  fill
                  priority
                  className="object-contain sm:object-cover"
                  style={{ objectPosition: bgPosition }}
                />
              </motion.div>

              {/* minimal linear gradient blending the image into the white section, left edge only */}
              <div
                className="absolute inset-y-0 left-0 w-1/4 pointer-events-none hidden lg:block"
                style={{
                  background:
                    "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.35) 55%, rgba(255,255,255,0) 100%)",
                }}
              />
            </motion.div>

            {liveBadge && (
              <AnimateOnScroll
                variant="fade-up"
                delay={220}
                className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 shadow-lg border border-gray-100 z-20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <div className="leading-tight">
                  <p className="text-[10px]! font-bold text-gray-400 uppercase tracking-widest">{liveBadge.label}</p>
                  <p className="text-xs! font-bold text-gray-900">{liveBadge.sublabel}</p>
                </div>
              </AnimateOnScroll>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}