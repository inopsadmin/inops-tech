"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FlyInText } from "@/app/components/FlyInText";
import { platformShowcaseSlides } from "@/app/lib/platformShowcaseSlides";

const AUTO_MS = 5200;

export default function PlatformShowcaseDevice() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setTimeout(() => {
      setActiveIndex((i) => (i + 1) % platformShowcaseSlides.length);
    }, AUTO_MS);
    return () => window.clearTimeout(id);
  }, [activeIndex, reduceMotion]);

  const slide = platformShowcaseSlides[activeIndex];

  return (
    <div className="relative mx-auto mt-10 max-w-5xl px-0 sm:px-2">
      <div
        className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-transparent to-blue-600/15 blur-2xl sm:-inset-4 sm:rounded-[2.25rem]"
        aria-hidden
      />

      {/* Device chrome ,  tablet frame with InOps branding */}
      <div className="relative rounded-[1.45rem] border border-slate-600/40 bg-gradient-to-b from-slate-600 via-slate-800 to-slate-950 p-[9px] shadow-[0_32px_80px_-20px_rgba(15,23,42,0.72),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_0_0_1px_rgba(255,255,255,0.06)] sm:rounded-[1.75rem] sm:p-[11px] md:p-3">
        <div className="flex items-center justify-between gap-3 px-1 pb-2 pt-1 sm:px-1.5 sm:pb-2.5 sm:pt-1.5">
          <div className="flex min-w-0 flex-1 items-center pl-0.5 sm:pl-1">
            <div className="relative h-9 w-9 shrink-0 sm:h-10 sm:w-10 md:h-11 md:w-11">
              <Image
                src="/logo.png"
                alt="InOps"
                fill
                sizes="(max-width: 768px) 36px, 44px"
                className="rounded-md object-contain opacity-95"
              />
            </div>
          </div>
          <div className="pointer-events-none flex flex-1 justify-center" aria-hidden>
            <div className="h-1 w-[4.5rem] rounded-full bg-slate-950/80 ring-1 ring-white/10 sm:h-1.5 sm:w-[5.25rem]" />
          </div>
          <div className="flex min-w-0 flex-1 justify-end pr-0.5 sm:pr-1">
            <FlyInText
              as="span"
              direction="left"
              className="hidden text-xs font-medium text-slate-400 sm:inline sm:text-xs"
            >
              Live preview
            </FlyInText>
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.05rem] border border-slate-950/50 bg-white shadow-[inset_0_0_0_1px_rgba(15,23,42,0.04)] sm:rounded-[1.2rem]">
          {/* Tab bar ,  BeeForce-style */}
          <div
            className="border-b border-slate-200/90 bg-gradient-to-b from-slate-50 to-white px-2 pt-2 sm:px-3"
            role="tablist"
            aria-label="Platform capabilities"
          >
            <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide [-webkit-overflow-scrolling:touch]">
              {platformShowcaseSlides.map((s, i) => {
                const active = i === activeIndex;
                return (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    id={`platform-tab-${s.id}`}
                    aria-controls={`platform-panel-${s.id}`}
                    onClick={() => setActiveIndex(i)}
                    className={`shrink-0 rounded-lg px-2.5 py-2 text-xs font-semibold transition-colors duration-200 sm:px-3 sm:text-xs md:text-sm ${
                      active
                        ? "bg-sky-100 text-sky-900 ring-1 ring-sky-200/80"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {s.tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Auto-advance progress */}
            <div className="relative h-0.5 overflow-hidden bg-slate-100" aria-hidden>
              {!reduceMotion ? (
                <motion.div
                  key={activeIndex}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-500 to-blue-600"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                />
              ) : null}
            </div>
          </div>

          {/* Screen content */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.id}
              id={`platform-panel-${slide.id}`}
              role="tabpanel"
              aria-labelledby={`platform-tab-${slide.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr]"
            >
              <div className="relative aspect-[4/3] min-h-[300px] w-full bg-slate-100 sm:min-h-[360px] md:aspect-auto md:min-h-[420px] lg:min-h-[500px] xl:min-h-[450px]">
                <Image
                  src={slide.imageUrl}
                  alt={slide.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 58vw"
                  priority={activeIndex === 0}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/10 md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-slate-950/25" />
                <FlyInText
                  as="div"
                  direction="up"
                  className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:left-5 sm:top-5 sm:text-xs"
                >
                  {slide.badge}
                </FlyInText>
              </div>

              <div className="flex flex-col justify-between gap-6 border-t border-slate-100 bg-white p-5 sm:p-6 md:border-l md:border-t-0 lg:p-8">
                <div>
                  <FlyInText as="p" direction="left" className="text-xs font-bold tracking-[0.12em] text-slate-400 sm:text-xs">
                    {slide.badge}
                  </FlyInText>
                  <FlyInText as="h3" direction="up" delay={0.05} className="mt-3 text-slate-900">
                    {slide.title}
                  </FlyInText>
                  <FlyInText as="p" direction="up" delay={0.1} className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {slide.text}
                  </FlyInText>
                </div>
                <FlyInText as="div" direction="up" delay={0.14} className="flex flex-wrap items-center gap-3">
                  <Link
                    href={slide.href}
                    className="btn-primary inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 sm:px-6 sm:py-3"
                  >
                    View solution
                  </Link>
                  <Link
                    href="/#solutions"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:px-5 sm:py-3"
                  >
                    All solutions
                  </Link>
                </FlyInText>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2 border-t border-white/5 px-2 pb-1 pt-2 sm:mt-2.5 sm:gap-2.5 sm:pb-1.5 sm:pt-2.5">
          <div className="relative h-7 w-7 shrink-0 sm:h-8 sm:w-8" aria-hidden>
            <Image
              src="/logo.png"
              alt=""
              fill
              sizes="32px"
              className="rounded object-contain opacity-90"
            />
          </div>
          <FlyInText as="p" direction="up" className="text-xs font-medium tracking-wide text-slate-400 sm:text-xs">
            Platform overview
          </FlyInText>
        </div>
      </div>
    </div>
  );
}
