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
  gradientCenter?: string; 
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleAccentClassName?: string; 
  description: string;
  badges?: HeroBadge[];
  buttons: HeroButton[];
  liveBadge?: HeroLiveBadge;
  rightContent: React.ReactNode;
  rightContentWidthClassName?: string; 
  showWave?: boolean;
};

export default function SolutionHeroBanner({
  bgImage,
  bgImageAlt,
  bgPosition = "68% 50%",
  gradientCenter = "20% 20%",
  eyebrow,
  titleLine1,
  titleLine2,
  titleAccentClassName = "text-[#0052FF]",
  description,
  badges = [],
  buttons,
  liveBadge,
  rightContent,
  rightContentWidthClassName = "w-[54%] sm:w-[42%] lg:w-[36%] max-w-[440px]",
  showWave = true,
}: SolutionHeroBannerProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[560px] sm:min-h-[640px] lg:min-h-[700px]">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={bgImage}
              alt={bgImageAlt}
              fill
              priority
              className="object-cover"
              style={{ objectPosition: bgPosition }}
            />
          </motion.div>
        </motion.div>
        
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 78% 85% at ${gradientCenter}, white 0%, white 32%, rgba(255,255,255,0.88) 46%, rgba(255,255,255,0.45) 62%, rgba(255,255,255,0) 82%)`,
          }}
        />

      </div>

      {showWave && (
        <svg
          className="absolute bottom-0 left-0 w-full h-20 sm:h-28 text-blue-50/70 pointer-events-none"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L0,120Z"
          />
        </svg>
      )}

      <div className="absolute inset-0 z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-xl pt-24 sm:pt-28 lg:pt-32">
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

          {badges.length > 0 && (
            <div className="mt-12 flex flex-col gap-4 max-w-sm">
              {badges.map((item, idx) => (
                <AnimateOnScroll
                  key={item.label}
                  variant="fade-up"
                  delay={220 + idx * 60}
                  className="flex items-center gap-3 rounded-xl bg-white/85 backdrop-blur-sm px-3 py-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] w-fit"
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${item.bg} ${item.fg}`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-gray-800">{item.label}</span>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>

        {liveBadge && (
          <AnimateOnScroll
            variant="fade-up"
            delay={260}
            className="absolute top-8 right-6 sm:right-10 lg:right-16 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 shadow-lg border border-gray-100"
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
        <AnimateOnScroll
          variant="slide-left"
          delay={140}
          className={`absolute right-6 sm:right-10 lg:right-16 top-1/2 -translate-y-[42%] ${rightContentWidthClassName}`}
        >
          {rightContent}
        </AnimateOnScroll>
      </div>
    </section>
  );
}