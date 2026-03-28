"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const slides = [
  {
    title: "Transform Contract Labour Management With Smart Automation",
    features: [
      "Automated Alerts & Escalations — timely email notifications for compliance.",
      "Self-Service Contractor Portal — onboard, verify, and manage workers independently.",
      "Multi-Language Support — seamless workforce communication.",
      "e-KYC & Digital Documentation — paperless onboarding with Aadhaar, PAN, bank verification.",
      "Seamless ERP & Payroll Integration — sync with HRMS, ERP, and payroll systems.",
      "PF & ESIC Compliance — auto-tracks contributions and statutory submissions.",
      "Secure Cloud-Based Storage — encrypted, high-availability workforce records.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=85",
  },
  {
    title: "Real-Time Visibility & Control Across Your Workforce",
    features: [
      "Live dashboards for attendance and deployment.",
      "Biometric & geo-tagged check-in/out.",
      "Automated wage calculations.",
      "Compliance-ready audit reports.",
      "Smart shift & workforce allocation tools.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85",
  },
];

export default function FeaturesSlider() {
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slide = slides[current];

  return (
    <section className="relative isolate py-8 lg:py-10 bg-gradient-to-b from-blue-50 via-sky-50/80 to-blue-100/40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(59,130,246,0.12),transparent_55%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="overflow-hidden rounded-2xl border border-blue-100/90 bg-white/95 shadow-lg shadow-blue-900/[0.06] backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-blue-200/80 hover:shadow-xl hover:shadow-blue-900/10">
          <div className="flex flex-col items-stretch md:flex-row md:min-h-[min(28rem,75vh)]">
            <motion.div
              className="flex-1 p-8 lg:p-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease: smoothEase }}
            >
              <motion.h2
                className="text-2xl lg:text-3xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase, delay: 0.05 }}
              >
                {slide.title}
              </motion.h2>

              <motion.ul
                key={current}
                className="mt-6 space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
                  },
                }}
              >
                {slide.features.map((text, i) => (
                  <motion.li
                    key={`${current}-${i}`}
                    className="flex gap-3"
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5, ease: smoothEase }}
                  >
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-button">
                      ✓
                    </span>
                    <span className="text-gray-600 text-sm lg:text-base leading-relaxed">
                      {text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className="group relative w-full flex-shrink-0 overflow-hidden border-t border-blue-100/80 bg-blue-100/20 md:w-[46%] lg:w-[44%] md:border-t-0 md:border-l"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease: smoothEase, delay: 0.15 }}
            >
              <div className="relative aspect-[5/4] w-full min-h-[17rem] md:absolute md:inset-0 md:aspect-auto md:min-h-0">
                <Image
                  src={slide.imageUrl}
                  alt="Dashboard Preview"
                  fill
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 46vw"
                  priority={current === 0}
                />
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-between border-t border-blue-100/80 bg-blue-50/50 px-6 py-4">
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-blue-500"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={goPrev}
                className="h-9 w-9 rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 active:scale-95"
              >
                ‹
              </button>
              <button
                onClick={goNext}
                className="h-9 w-9 rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 active:scale-95"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
