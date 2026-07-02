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

export default function CTASection({ data }: { data: ModuleData }) {
  return (
    <>
      <section className="relative overflow-hidden border-t border-gray-100 bg-white py-16 md:py-20 xl:py-24">
        <div className="pointer-events-none absolute -left-40 top-0 h-150 w-150 -translate-y-1/4 rounded-full bg-blue-50/60 blur-[100px]" />

        <AnimatedSection className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between xl:mb-16">
            <div>
              <AnimatedHeading as="h2" className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl xl:text-5xl">
                Built for every stakeholder
              </AnimatedHeading>
              <AnimatedParagraph className="mt-3 max-w-2xl text-base leading-relaxed text-gray-500 xl:mt-4 xl:text-lg">
                Designed to serve the full enterprise buying committee — from
                plant operations and HR to finance, compliance, and executive
                leadership.
              </AnimatedParagraph>
            </div>
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-max shrink-0 text-xs font-semibold uppercase tracking-wider text-blue-500/80 md:text-sm"
            >
              Cross-functional value
            </motion.span>
          </div>
          <AnimatedCardGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {data.benefits.map((benefit) => (
              <AnimatedCardItem key={benefit} direction="bottom" className="h-full">
                <div className="group flex h-full flex-col rounded-3xl border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_10px_30px_rgba(15,127,255,0.08)] xl:p-8"
                     style={{ background: "linear-gradient(135deg, #ffffff 0%, rgba(249,250,251,0.8) 100%)" }}
                >
                  <div className="mb-3 flex items-center gap-2 xl:mb-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100/50 text-blue-600 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 transition-colors group-hover:text-blue-700 xl:text-xs">
                      {benefit.split(" ")[0]} outcome
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500 xl:text-base">
                    {benefit}
                  </p>
                </div>
              </AnimatedCardItem>
            ))}
          </AnimatedCardGrid>
        </AnimatedSection>
      </section>
      <section className="relative bg-white pb-16 md:pb-20 xl:pb-24">
        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col gap-8 overflow-hidden rounded-4xl border border-gray-100 p-8 shadow-xl md:flex-row md:items-center md:justify-between md:p-12 xl:p-16"
            style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)",
            }}
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-400/10 blur-[60px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl xl:text-5xl">
                Ready to take control?
              </h2>
              <p className="mt-4 text-base font-medium text-gray-700 xl:text-lg">
                {data.cta}
              </p>
              <p className="mt-2 text-sm text-gray-500 xl:mt-3 xl:text-base">
                Request a live demo tailored to your sites, workforce scale, and
                compliance requirements.
              </p>
            </div>

            <div className="relative z-10 flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap md:flex-col lg:flex-row">
              <button className="group relative overflow-hidden rounded-xl bg-[var(--inops-blue)] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 xl:px-8 xl:py-4 xl:text-base">
                <span className="relative z-10">Request a Demo</span>
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
              </button>
              
              <button className="group flex items-center justify-center gap-2 rounded-xl border border-blue-200/60 bg-white/80 px-6 py-3.5 text-sm font-bold text-gray-700 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white xl:px-8 xl:py-4 xl:text-base">
                Explore the platform
                <span className="text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </motion.div>
          
        </AnimatedSection>
      </section>
    </>
  );
}