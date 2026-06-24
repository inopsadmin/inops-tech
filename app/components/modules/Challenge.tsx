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

interface Props {
  data: ModuleData;
}

export default function ChallengeSection({ data }: Props) {
  return (
    <section className="border-t border-gray-100 bg-white py-16 md:py-24 overflow-hidden">
      <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <AnimatedHeading as="h2" className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              The challenge
            </AnimatedHeading>
            <AnimatedParagraph className="mt-3 max-w-2xl text-base leading-relaxed text-gray-500">
              Enterprises operating at scale face compounding workforce risks
              that manual processes and fragmented systems cannot resolve in
              time.
            </AnimatedParagraph>
          </div>
          
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-max shrink-0 text-sm font-semibold uppercase tracking-wider text-blue-500/80"
          >
            Why it matters
          </motion.span>
        </div>
        <AnimatedCardGrid className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatedCardItem direction="bottom" className="h-full">
            <div className="flex h-full flex-col justify-center rounded-3xl border border-gray-100 bg-linear-to-br from-gray-50 to-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <strong className="text-xl font-semibold leading-snug text-gray-900 md:text-2xl">
                {data.description}
              </strong>
            </div>
          </AnimatedCardItem>
          <AnimatedCardItem direction="bottom" className="h-full">
            <div className="flex h-full flex-col rounded-4xl border border-gray-100 bg-linear-to-bl from-gray-50 to-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <p className="mb-6 text-xs font-bold uppercase tracking-wider text-gray-400">
                Key operational challenges
              </p>  
              <div className="flex flex-wrap gap-2.5">
                {data.challenges.map((challenge, i) => (
                  <motion.span
                    key={challenge}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.05), type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="cursor-default rounded-full border px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-shadow hover:shadow"
                    style={{
                      background: "color-mix(in srgb, #0F7FFF 8%, #FAFAFA)",
                      borderColor: "color-mix(in srgb, #0F7FFF 20%, #EAEAEA)",
                    }}
                  >
                    {challenge}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedCardItem>

        </AnimatedCardGrid>
      </AnimatedSection>
    </section>
  );
}