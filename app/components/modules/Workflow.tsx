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

export default function WorkflowSection({ data }: { data: ModuleData }) {
  return (
    <section
      className="relative overflow-hidden border-t border-white/5 py-16 md:py-24"
      style={{
        background: "linear-gradient(180deg,#0b1626,#102033)",
        color: "#eef6ff",
      }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-100 w-200 -translate-x-1/2 rounded-full opacity-10 blur-[100px]"
        style={{ background: "radial-gradient(circle, #0F7FFF 0%, transparent 70%)" }}
      />

      <AnimatedSection className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <AnimatedHeading as="h2" className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              How it works
            </AnimatedHeading>
            <AnimatedParagraph className="mt-3 max-w-2xl text-base leading-relaxed text-blue-200/70">
              A structured, end-to-end workflow that connects data capture to
              governed action — with full visibility at every stage.
            </AnimatedParagraph>
          </div>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-max shrink-0 text-sm font-semibold uppercase tracking-wider text-blue-400/60"
          >
            End-to-end process
          </motion.span>
        </div>
        <AnimatedCardGrid className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.workflow.map((step, index) => (
            <div key={step.title} className="relative">
              <AnimatedCardItem direction="bottom" className="h-full">
                <div
                  className="group flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(15,127,255,0.1)]"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl font-extrabold text-white shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(15,127,255,0.4)]"
                    style={{
                      background: "linear-gradient(135deg,#1e293b,#0F7FFF)",
                    }}
                  >
                    {index + 1}
                  </div>

                  <b className="mb-3 block text-base font-bold text-white transition-colors group-hover:text-blue-300">
                    {step.title}
                  </b>
                  <p className="text-sm leading-relaxed text-blue-200/60">
                    {step.description}
                  </p>
                </div>
              </AnimatedCardItem>
              {index < data.workflow.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + (index * 0.2) }} 
                  className="absolute -right-4 top-1/2 z-20 hidden -translate-y-1/2 lg:block"
                >
                  <motion.span 
                    animate={{ x: [0, 6, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.2 
                    }}
                    className="block text-2xl text-blue-400/80"
                  >
                    →
                  </motion.span>
                </motion.div>
              )}
            </div>
          ))}
        </AnimatedCardGrid>
      </AnimatedSection>
    </section>
  );
}