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

export default function RoiSection({ data }: { data: ModuleData }) {
  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-white py-16 md:py-20 xl:py-24">
      <div className="pointer-events-none absolute -right-40 top-0 h-150 w-150 -translate-y-1/4 rounded-full bg-blue-50/50 blur-[100px]" />

      <AnimatedSection className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between xl:mb-16">
          <div>
            <AnimatedHeading as="h2" className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl xl:text-5xl">
              Measurable outcomes
            </AnimatedHeading>
            <AnimatedParagraph className="mt-3 max-w-2xl text-base leading-relaxed text-gray-500 xl:mt-4 xl:text-lg">
              Organisations using this platform report significant reductions in
              operational risk, manual effort, and compliance exposure — with
              returns visible within the first quarter.
            </AnimatedParagraph>
          </div>
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-max shrink-0 text-xs font-semibold uppercase tracking-wider text-blue-500/80 md:text-sm"
          >
            Proven enterprise value
          </motion.span>
        </div>
        <AnimatedCardGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {data.roi.map((item, i) => {
            const primaryMetric = item.title.split(" ")[0];
            
            return (
              <AnimatedCardItem key={item.title} direction="bottom" className="h-full">
                <div className="group flex h-full flex-col justify-between rounded-3xl border border-gray-100 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_10px_30px_rgba(15,127,255,0.06)] xl:p-8"
                     style={{ background: "linear-gradient(135deg, #ffffff 0%, rgba(249,250,251,0.8) 100%)" }}
                >
                  <div>
                    <motion.div 
                      className="mb-4 text-5xl font-black leading-none tracking-tighter text-transparent bg-clip-text transition-transform duration-300 group-hover:scale-105 group-hover:origin-left xl:mb-5 xl:text-6xl"
                      style={{ backgroundImage: "linear-gradient(135deg, #0F7FFF, #31d4ff)" }}
                    >
                      {primaryMetric}
                    </motion.div>
                    
                    <h3 className="mb-2 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-900 xl:text-xl">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 xl:text-base">
                    {item.description}
                  </p>
                </div>
              </AnimatedCardItem>
            );
          })}
        </AnimatedCardGrid>
      </AnimatedSection>
    </section>
  );
}