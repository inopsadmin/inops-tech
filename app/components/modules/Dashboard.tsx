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

const TONE_PILL: Record<"ok" | "warn" | "err", string> = {
  ok: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/20",
  warn: "bg-amber-500/20 text-amber-300 border border-amber-500/20",
  err: "bg-red-500/20 text-red-300 border border-red-500/20",
};

const TONE_DOT: Record<"ok" | "warn" | "err", string> = {
  ok: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]",
  warn: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]",
  err: "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]",
};

export default function Dashboard({ data }: { data: ModuleData }) {
  const { analytics, kpis, feed } = data.dashboard;

  return (
    <section className="relative w-full overflow-hidden bg-[#071a34] py-16 md:py-20 xl:py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-125 w-125 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-100 w-100 rounded-full bg-emerald-600/10 blur-[120px]" />

      <AnimatedSection className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between xl:mb-12">
          <div>
            <AnimatedHeading as="h2" className="text-3xl font-bold tracking-tight text-white md:text-4xl xl:text-5xl">
              Live command dashboard
            </AnimatedHeading>
            <AnimatedParagraph className="mt-3 max-w-2xl text-base leading-relaxed text-[#c7d8ea]/80 xl:mt-4 xl:text-lg">
              Real-time operational intelligence with exception-first alerts,
              compliance indicators, and workflow status — accessible across
              sites and roles.
            </AnimatedParagraph>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c7d8ea]/60 md:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            Always-on visibility
          </motion.div>
        </div>
        <AnimatedCardGrid className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
          
          <AnimatedCardItem direction="bottom" className="h-full">
            <div
              className="flex h-full flex-col rounded-3xl border border-white/10 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl md:p-6 xl:rounded-4xl xl:p-8"
              style={{ background: "linear-gradient(180deg, rgba(7,20,36,0.8) 0%, rgba(13,31,52,0.9) 100%)" }}
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4 xl:mb-6">
                <div className="text-xs font-bold text-white/90 md:text-sm">
                  {data.title} • Live Console
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-300 md:px-3 md:py-1.5 md:text-[11px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Operational live
                </span>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner backdrop-blur-md xl:p-5">
                  <h4 className="mb-4 text-[10px] font-bold uppercase tracking-wider text-[#aac6dd] md:text-xs">
                    Analytics overview
                  </h4>
                  <div className="flex h-32 items-end gap-1.5 mt-auto md:gap-2 xl:h-40 xl:gap-2.5">
                    {analytics.map((bar, i) => {
                      return (
                        <motion.div
                          key={bar.label || i}
                          initial={{ height: 0, opacity: 0 }}
                          whileInView={{ height: `${bar.value}%`, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                          className={`flex-1 rounded-t-lg transition-all duration-300 hover:brightness-125 xl:rounded-t-xl`}
                          style={{ background: "linear-gradient(180deg,#31d4ff,#276dff)" }}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    {kpis.map((kpi, i) => (
                      <motion.div
                        key={kpi.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="group rounded-2xl border border-white/10 bg-white/5 p-3 transition-all hover:bg-white/10 xl:p-4"
                      >
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-[#aac6dd] md:text-[11px]">
                          {kpi.label}
                        </div>
                        <div className="mt-1 text-xl font-bold text-white transition-colors group-hover:text-blue-300 xl:text-2xl">
                          {kpi.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-linear-to-b from-[#f7fbff] to-[#ebf5ff] p-2.5 xl:p-3">
                    <div className="rounded-xl bg-white p-2.5 text-[#0d1f34] shadow-sm xl:p-3">
                      <div className="mb-2.5 flex justify-between text-[9px] font-bold uppercase tracking-wide md:text-[10px]">
                        <span className="text-gray-500">Mobile app</span>
                        <span className="text-blue-600 animate-pulse">Live</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 xl:gap-2">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + i * 0.05 }}
                            className="h-8 rounded-lg border border-[#d9eaf6] bg-linear-to-br from-[#e6f1f9] to-[#f4f9fd] xl:h-10"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex-1 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md xl:p-5">
                <h4 className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#aac6dd] md:text-xs xl:mb-4">
                  Alert and workflow feed
                </h4>
                <ul className="space-y-2 xl:space-y-2.5">
                  {feed.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="group flex cursor-default items-center justify-between gap-2 rounded-xl border border-transparent bg-white/5 px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/10 hover:shadow-lg xl:px-4 xl:py-3"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`h-1.5 w-1.5 shrink-0 rounded-full md:h-2 md:w-2 ${TONE_DOT[item.tone]} animate-pulse`} />
                        <span className="text-xs font-medium text-white/90 transition-colors group-hover:text-white md:text-sm">
                          {item.label}
                        </span>
                      </div>
                      <span className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider md:px-3 md:text-[10px] ${TONE_PILL[item.tone]}`}>
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedCardItem>
          <AnimatedCardItem direction="bottom" className="h-full">
            <div
              className="flex h-full flex-col rounded-3xl border border-white/10 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl md:p-6 xl:rounded-4xl xl:p-8"
              style={{ background: "linear-gradient(180deg, rgba(7,20,36,0.8) 0%, rgba(13,31,52,0.9) 100%)" }}
            >
              <h3 className="mb-5 text-xl font-bold text-white xl:mb-6 xl:text-2xl">
                Alerts and compliance signals
              </h3>

              <div className="flex flex-col gap-2.5 xl:gap-3">
                {[
                  { text: "Document expiry approaching", tone: "warn", status: "Warning" },
                  { text: "AI insight pushed to manager", tone: "ok", status: "Automated" },
                  { text: "Rule breach requires approval", tone: "err", status: "Priority" },
                ].map((alert, i) => (
                  <motion.div
                    key={alert.text}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="group flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 transition-all hover:bg-white/10 hover:shadow-md xl:px-4 xl:py-4"
                  >
                    <span className="text-xs font-medium text-white/80 transition-colors group-hover:text-white md:text-sm">
                      {alert.text}
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider md:px-3 md:text-[10px] ${TONE_PILL[alert.tone as "ok" | "warn" | "err"]}`}>
                      {alert.status}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/5 xl:mt-auto xl:pt-8 xl:border-none">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#aac6dd] md:text-xs">
                  System Capabilities
                </p>
                <div className="flex flex-wrap gap-2 xl:gap-2.5">
                  {[
                    "Mobile access",
                    "Workflow status",
                    "KPI tracking",
                    "AI insight feed",
                    "Site-level view",
                  ].map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="cursor-default rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-[#c7d8ea] shadow-sm transition-colors hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white xl:px-3.5 xl:py-2 xl:text-xs"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCardItem>
        </AnimatedCardGrid>
      </AnimatedSection>
    </section>
  );
}