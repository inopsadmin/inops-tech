"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "@/app/components/AnimatedCounter";

type TrustStripMetricProps = {
  value: string;
  label: string;
  index: number;
};

const metricClassName =
  "text-[clamp(2.05rem,5.25vw,3.35rem)] font-bold leading-none tracking-tight text-[color:var(--inops-blue)] tabular-nums";

export default function TrustStripMetric({ value, label, index }: TrustStripMetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35, margin: "0px 0px -8% 0px" });
  const isSoc2 = value === "SOC2";
  const match = value.match(/^(\d+)%$/);
  const num = match ? parseInt(match[1], 10) : null;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: index * 0.06 }}
    >
      <p className="min-h-[1.2em]">
        {isSoc2 ? (
          <motion.span
            className={`inline-block ${metricClassName}`}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.65, delay: index * 0.16 + 0.1, ease: [0.33, 1, 0.68, 1] }}
          >
            SOC2
          </motion.span>
        ) : num !== null ? (
          <AnimatedCounter
            value={num}
            suffix="%"
            duration={2.35}
            delay={index * 0.16}
            ease="easeOut"
            className={metricClassName}
          />
        ) : (
          <span className={metricClassName}>{value}</span>
        )}
      </p>
      <p className="mt-3 max-w-[13rem] text-sm font-normal leading-snug text-slate-600 sm:mt-3.5 sm:max-w-none sm:text-base">
        {label}
      </p>
    </motion.div>
  );
}
