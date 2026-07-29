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

export default function FeaturesSection({ data }: { data: ModuleData }) {
  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-white py-16 md:py-24">
      <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <AnimatedHeading as="h2" className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Platform capabilities
            </AnimatedHeading>
            <AnimatedParagraph className="mt-3 max-w-2xl text-base leading-relaxed text-gray-500">
              Purpose-built for industrial workforce operations — every feature
              is designed to reduce risk, improve visibility, and enforce
              compliance at enterprise scale.
            </AnimatedParagraph>
          </div>
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-max shrink-0 text-sm font-semibold uppercase tracking-wider text-blue-500/80"
          >
            What&apos;s included
          </motion.span>
        </div>
        <AnimatedCardGrid className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatedCardItem direction="bottom" className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-linear-to-br from-white to-gray-50/80 p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Iddion RegX Core capabilities
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-500">
                A comprehensive suite of tools built for complex, multi-site
                industrial environments.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {data.features.map((feature, i) => (
                  <motion.span
                    key={feature}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.05), type: "spring" }}
                    whileHover={{ scale: 1.05, y: -2, borderColor: "#93c5fd" }}
                    className="cursor-default rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-colors hover:text-blue-600"
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedCardItem>
          <AnimatedCardItem direction="bottom" className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-linear-to-bl from-white to-gray-50/80 p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">
                  Live operational metrics
                </h3>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "98.4%", label: "compliance visibility" },
                  { val: "24/7", label: "workflow monitoring" },
                  { val: "31", label: "sites benchmarked" },
                  { val: "AI", label: "priority insights" },
                ].map(({ val, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="group rounded-2xl border border-blue-100/50 p-4 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5"
                    style={{ background: "color-mix(in srgb, #0F7FFF 4%, #FFFFFF)" }}
                  >
                    <div className="text-2xl font-black tracking-tight text-gray-900 transition-colors group-hover:text-blue-600">
                      {val}
                    </div>
                    <div className="mt-1 text-xs font-medium text-gray-500">{label}</div>
                  </motion.div>
                ))}
              </div>
              <div
                className="relative mt-5 h-24 overflow-hidden rounded-2xl border border-gray-100"
                style={{ background: "linear-gradient(180deg,color-mix(in srgb,#0F7FFF 8%,transparent),transparent)" }}
              >
                <svg
                  viewBox="0 0 260 88"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full drop-shadow-[0_4px_6px_rgba(15,127,255,0.3)]"
                >
                  <motion.path
                    d="M0 58 C24 54,38 48,54 50 S84 70,110 52 S146 24,170 34 S204 74,232 48 S252 40,260 26"
                    fill="none"
                    stroke="#0F7FFF"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
                  />
                  <path
                    d="M0 74 H260"
                    stroke="#E5E7EB"
                    strokeDasharray="4 5"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
          </AnimatedCardItem>

        </AnimatedCardGrid>
      </AnimatedSection>
    </section>
  );
}