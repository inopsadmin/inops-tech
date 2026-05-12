"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FourPillarsSection from "@/app/components/FourPillarsSection";
import SolutionLandingHero from "@/app/components/SolutionLandingHero";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";

/** Hero visual ,  industrial equipment / fixed assets (`public/images/masshin.jpg`) */
const fixedAssetHeroImage = "/images/masshin.jpg";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const unifiedEcosystemBullets = [
  "Eliminate ghost workers with biometric validation",
  "Automate invoice reconciliation with contractor data",
  "Ensure 100% compliance with local labor laws",
  "Real-time visibility across multiple geographic sites",
] as const;

const unifiedEcosystemBackdrop =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function FixedAssetManagementPage() {
  return (
    <>
      <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">
        <SolutionLandingHero
          badge={
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Platform Solutions
            </span>
          }
          title={
            <>
              Comprehensive workforce solutions for{" "}
              <span className="text-blue-600">enterprise control</span>
            </>
          }
          subtitle="Our platform brings together identity, compliance, operations, and financial systems into a unified ecosystem designed for large-scale workforce management."
          imageSrc={fixedAssetHeroImage}
          imageAlt="Industrial machinery and fixed assets on a manufacturing floor, representing enterprise asset control"
        />

        <FourPillarsSection />

        {/* One Unified Ecosystem */}
        <section
          className="border-t border-slate-200/80 py-10 lg:py-12 bg-white"
          aria-labelledby="unified-ecosystem-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <h2 id="unified-ecosystem-heading" className="text-slate-900">
                  One Unified Ecosystem
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  Most enterprises struggle with fragmented data across HR, Finance, and Security. This platform bridges
                  these silos by creating a single source of truth for every contract worker.
                </p>
                <ul className="mt-8 space-y-4">
                  {unifiedEcosystemBullets.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm leading-relaxed text-slate-700 sm:text-base">{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:bg-blue-700"
                >
                  Explore Enterprise Integration
                  <span aria-hidden>→</span>
                </Link>
              </motion.div>

              <motion.div
                className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
              >
                <div className="relative min-h-[300px] overflow-hidden rounded-2xl sm:min-h-[380px] lg:min-h-[420px]">
                  <Image
                    src={unifiedEcosystemBackdrop}
                    alt="Modern office interior, softly blurred behind the analytics preview"
                    fill
                    className="scale-105 object-cover blur-sm"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-slate-900/25" aria-hidden />
                  <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-10 sm:px-10 sm:py-12">
                    <div className="relative w-full max-w-[340px] rounded-xl border-[10px] border-slate-700 bg-slate-800 shadow-2xl shadow-slate-900/40 sm:max-w-[380px]">
                      <div className="rounded-b-md bg-white px-4 pb-4 pt-3 sm:px-5 sm:pt-4">
                        <p className="text-center text-xs font-bold text-slate-800 sm:text-sm">Workforce Analytics</p>
                        <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                          <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 py-4 ring-1 ring-slate-100">
                            <div className="relative h-16 w-16">
                              <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90" aria-hidden>
                                <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgb(226 232 240)" strokeWidth="4" />
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="15.5"
                                  fill="none"
                                  stroke="rgb(37 99 235)"
                                  strokeWidth="4"
                                  strokeDasharray="97 100"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-800">
                                75%
                              </span>
                            </div>
                          </div>
                          <div className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-100">
                            <p className="text-[10px] font-semibold text-slate-600">Job Proficiency Breakdown</p>
                            <div className="mt-2 flex h-14 items-end justify-between gap-1">
                              {[40, 70, 55, 85, 50].map((h, i) => (
                                <div
                                  key={i}
                                  className="w-full max-w-[18%] rounded-t bg-blue-500/90"
                                  style={{ height: `${h}%` }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                          <div className="rounded-md bg-slate-100 py-2">
                            <p className="text-lg font-bold text-slate-900">12</p>
                            <p className="text-[9px] text-slate-500">Active</p>
                          </div>
                          <div className="rounded-md bg-slate-100 py-2">
                            <p className="text-lg font-bold text-slate-900">3</p>
                            <p className="text-[9px] text-slate-500">Alerts</p>
                          </div>
                          <div className="rounded-md bg-slate-100 py-2">
                            <p className="text-lg font-bold text-slate-900">52%</p>
                            <p className="text-[9px] text-slate-500">Efficiency</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-5 left-5 z-20 max-w-[240px] rounded-lg bg-blue-600 px-4 py-3 text-xs font-semibold leading-snug text-white shadow-lg sm:bottom-8 sm:left-8 sm:max-w-[260px] sm:text-sm">
                      15% Average cost savings for enterprises using the unified platform layer.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <SolutionPageClosingCta
          heading="Ready to take control of your workforce operations?"
          description="Join 25+ leading enterprises that have optimized their contract labor governance on this platform."
          primaryLabel="Request a Custom Demo"
          secondaryLabel="Contact Sales Team"
        />
      </div>
    </>
  );
}
