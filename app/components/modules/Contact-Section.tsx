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

export default function ContactSection({ data }: { data: ModuleData }) {
  return (
    <>
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
                Request an Iddion RegX live demo tailored to your sites, workforce scale, and
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