"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  ease?: "easeOut" | "easeIn" | "linear" | "easeInOut";
};

export default function AnimatedCounter({
  value,
  duration = 1.2,
  delay = 0,
  suffix = "",
  prefix = "",
  className = "",
  ease = "easeOut",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  // SSR initial value = real number so crawlers read actual stats, not 0
  const [display, setDisplay] = useState(value);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const timeout = window.setTimeout(() => {
      controlsRef.current = animate(0, value, {
        duration,
        ease,
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
    }, delay * 1000);
    return () => {
      window.clearTimeout(timeout);
      controlsRef.current?.stop();
    };
  }, [inView, value, duration, delay, ease]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
