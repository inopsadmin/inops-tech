"use client";

import { motion } from "framer-motion";
import { ModuleData } from "@/app/lib/module";
import {
  AnimatedSection,
  AnimatedHeading,
  AnimatedParagraph,
  AnimatedCardGrid,
  AnimatedCardItem,
} from "../AnimatedSection";
import AnimatedCounter from "../AnimatedCounter";

interface Props {
  data: ModuleData;
}

export default function HeroSection({ data }: Props) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-gray-50 to-white">
      <div
        className="pointer-events-none absolute right-0 top-0 h-125 w-125 rounded-full opacity-30 blur-[80px]"
        style={{
          background: "radial-gradient(circle, #0F7FFF 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-24 lg:px-8 relative z-10">
        <AnimatedSection className="flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex w-max items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            {data.badge}
          </motion.div>

          <AnimatedHeading as="h1" className="text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 md:text-5xl">
            {data.title}
          </AnimatedHeading>

          <AnimatedParagraph className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg">
            {data.description}
          </AnimatedParagraph>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button className="group rounded-xl bg-linear-to-br from-gray-900 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:to-blue-500">
              Request a Demo
            </button>
            <button className="group flex items-center gap-2 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm px-5 py-3 text-sm font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:-translate-y-0.5 hover:border-blue-200">
              See How It Works
              <span className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-blue-600">→</span>
            </button>
          </motion.div>

          <AnimatedCardGrid className="mt-10 grid grid-cols-3 gap-3">
            {data.metrics.map((metric, idx) => {
              const parts = metric.split(" ");
              const num = parts[0];
              const label = parts.slice(1).join(" ");
              return (
                <AnimatedCardItem key={metric} direction="bottom">
                  <div className="h-full rounded-2xl border border-gray-100 bg-white/60 backdrop-blur-md px-3 py-4 shadow-sm transition-shadow hover:shadow-md">
                    <div className="text-xl font-extrabold text-gray-900">
                      {num}
                    </div>
                    <div className="mt-1 text-xs text-gray-500">{label}</div>
                  </div>
                </AnimatedCardItem>
              );
            })}
          </AnimatedCardGrid>
        </AnimatedSection>

        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="w-full max-w-md ..."
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-md rounded-[18px] border border-white/10 bg-linear-to-b from-[#071424] to-[#0d1f34] p-4 text-white shadow-2xl backdrop-blur-xl"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold text-blue-100">
                  Live Console
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-1 text-[11px] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Operational live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-3 shadow-inner">
                  <h4 className="mb-3 text-[11px] font-bold text-blue-200">
                    Analytics overview
                  </h4>
                  <div className="flex h-20 items-end gap-1.5">
                    {[66, 42, 78, 58, 88, 62].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: `${h}%`, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                        className={`flex-1 rounded-t-lg`}
                        style={{
                          background: "linear-gradient(180deg,#31d4ff,#276dff)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-2.5 hover:bg-white/10 transition-colors">
                      <div className="text-[10px] text-blue-300">Workforce</div>
                      <div className="mt-1 text-lg font-extrabold text-white">
                        <AnimatedCounter value={6482} delay={0.3} duration={2} />
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-2.5 hover:bg-white/10 transition-colors">
                      <div className="text-[10px] text-blue-300">Exceptions</div>
                      <div className="mt-1 text-lg font-extrabold text-white">
                        <AnimatedCounter value={173} delay={0.5} duration={1.5} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-xl border border-white/10 bg-linear-to-b from-[#f7fbff] to-[#ebf5ff] p-2">
                    <div className="mb-1.5 flex justify-between text-[9px] text-blue-900">
                      <span>Mobile app</span>
                      <span className="font-semibold text-blue-600 animate-pulse">Live</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + (i * 0.05) }}
                          className="h-7 rounded-lg border border-blue-100 bg-linear-to-b from-[#dff3ff] to-[#f5fbff]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-3">
                <h4 className="mb-2 text-[11px] font-bold text-blue-200">
                  Alert and workflow feed
                </h4>
                <div className="flex flex-col gap-1.5">
                  {[
                    { label: "Shift Coverage", status: "Active", color: "emerald" },
                    { label: "Leave Status", status: "Updated", color: "emerald" },
                    { label: "Attendance Anomaly", status: "Flagged", color: "amber" },
                  ].map(({ label, status, color }, index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 + (index * 0.15) }}
                      className="flex items-center justify-between rounded-xl bg-white/5 px-2.5 py-2 text-[11px] text-blue-50 transition-colors hover:bg-white/10"
                    >
                      <span>{label}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] ${
                        color === 'emerald' 
                          ? 'bg-emerald-500/20 text-emerald-300' 
                          : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        {status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}