"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/app/lib/serviceImagery";

const SLIDE_INTERVAL_MS = 4500;
const easeSmooth = [0.32, 0.72, 0, 1] as const;
const transition = { duration: 1.85, ease: easeSmooth, type: "tween" as const };

const slideVariants = {
  initial: { opacity: 0, scale: 1.08 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1 },
};

type HeroBackgroundSliderProps = {
  onPhaseChange?: (isDark: boolean) => void;
};

export default function HeroBackgroundSlider({ onPhaseChange }: HeroBackgroundSliderProps) {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  const phaseStartRef = useRef(0);

  indexRef.current = index;

  useEffect(() => {
    phaseStartRef.current = Date.now();
  }, []);

  useEffect(() => {
    onPhaseChange?.(false);
  }, [onPhaseChange]);

  useEffect(() => {
    const id = setInterval(() => {
      const elapsed = Date.now() - phaseStartRef.current;
      if (elapsed >= SLIDE_INTERVAL_MS) {
        const next = (indexRef.current + 1) % heroSlides.length;
        indexRef.current = next;
        phaseStartRef.current = Date.now();
        setIndex(next);
      }
    }, 100);
    return () => clearInterval(id);
  }, []);

  const slideKey = `hero-${index}`;

  return (
    <div className="absolute inset-0 overflow-hidden bg-zinc-950">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={slideKey}
          className="absolute inset-0 z-0 will-change-[opacity,transform]"
          initial={slideVariants.initial}
          animate={slideVariants.animate}
          exit={slideVariants.exit}
          transition={transition}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-[-6%]">
            <Image
              src={heroSlides[index].src}
              alt={heroSlides[index].alt}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50" aria-hidden />
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              indexRef.current = i;
              phaseStartRef.current = Date.now();
              setIndex(i);
            }}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              i === index ? "scale-110 bg-white" : "border-2 border-white/80 bg-transparent"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
