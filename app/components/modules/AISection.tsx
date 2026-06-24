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

export default function AISection({ data }: { data: ModuleData }) {
  const promptSuggestions = [
    "Show workers with expired documents",
    "Which vendors have billing mismatches",
    "Generate PF compliance report",
    "Summarise site risk by shift",
  ];

  return (
    <section
      className="relative overflow-hidden border-t border-white/5 py-16 md:py-20 xl:py-24"
      style={{
        background: "linear-gradient(180deg,#0b1626,#102033)",
        color: "#eef6ff",
      }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-150 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.15] blur-[120px]"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
      />

      <AnimatedSection className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between xl:mb-12">
          <div>
            <AnimatedHeading as="h2" className="text-3xl font-bold tracking-tight text-white md:text-4xl xl:text-5xl">
              AI-powered intelligence
            </AnimatedHeading>
            <AnimatedParagraph className="mt-3 max-w-2xl text-base leading-relaxed text-blue-200/80 xl:mt-4 xl:text-lg">
              Embedded AI surfaces exceptions, generates narratives, and
              recommends actions — so your teams respond faster and with greater
              confidence.
            </AnimatedParagraph>
          </div>
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-max shrink-0 text-xs font-semibold uppercase tracking-wider text-blue-400/80 md:text-sm"
          >
            Intelligent automation
          </motion.span>
        </div>
        <AnimatedCardGrid className="grid grid-cols-1 gap-6 md:grid-cols-2">
          
          <AnimatedCardItem direction="bottom" className="h-full">
            <div
              className="flex h-full flex-col rounded-3xl p-6 shadow-[0_14px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl xl:rounded-4xl xl:p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="mb-5 flex items-center gap-2 xl:mb-6">
                <motion.div 
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="text-indigo-400"
                >
                  ✦
                </motion.div>
                <h3 className="text-base font-bold text-white xl:text-lg">
                  AI-generated insights
                </h3>
              </div>
              
              <div className="flex flex-col gap-3.5 xl:gap-4">
                {data.aiInsights.map((insight, i) => (
                  <motion.div
                    key={insight}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.15) }}
                    className="rounded-2xl p-4 text-sm leading-relaxed text-blue-100 shadow-sm transition-colors hover:bg-white/5 xl:text-base"
                    style={{
                      background: "color-mix(in srgb, #8b5cf6 8%, rgba(255,255,255,0.02))",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {insight}
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedCardItem>
          <AnimatedCardItem direction="bottom" className="h-full">
            <div
              className="flex h-full flex-col rounded-3xl p-6 shadow-[0_14px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl xl:rounded-4xl xl:p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="mb-5 text-base font-bold text-white xl:mb-6 xl:text-lg">
                Ask the platform
              </h3>
              
              <div className="flex flex-col gap-3 xl:gap-4">
                {promptSuggestions.map((prompt, i) => (
                  <motion.div
                    key={prompt}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="group flex cursor-pointer items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-blue-200 transition-all hover:-translate-y-0.5 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white xl:py-4 xl:text-base"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px dashed rgba(255,255,255,0.15)",
                    }}
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &quot;{prompt}&quot;
                    </span>
                    <span className="opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-3 text-indigo-400">
                      →
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedCardItem>

        </AnimatedCardGrid>
      </AnimatedSection>
    </section>
  );
}