"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { featuresSliderImages } from "@/app/lib/serviceImagery";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const slides = [
  {
    title: "Built for Enterprises That Can't Afford Gaps",
    summary:
      "Designed to keep operations connected, compliant, and scalable across every site.",
    features: [
      "Single Source of Truth Across Systems",
      "Real-Time Visibility & Control",
      "Compliance-First Architecture",
      "Scalable Across Locations & Workforce Types",
      "Hardware + Software Integrated",
    ],
    imageUrl: featuresSliderImages.clms,
  },
  
];

export default function FeaturesSlider() {
  const current = 0;
  const slide = slides[current];

  return (
    <section className="relative isolate border-y border-slate-200/80 bg-white py-10 lg:py-12">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="group overflow-hidden rounded-2xl border border-blue-100/90 bg-white/95 shadow-lg shadow-blue-900/[0.06] backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-blue-200/80 hover:shadow-xl hover:shadow-blue-900/10">
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

              <motion.p
                key={`summary-${current}`}
                className="mt-4 text-sm leading-relaxed text-gray-600 lg:text-base"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: smoothEase, delay: 0.08 }}
              >
                {slide.summary}
              </motion.p>

              <motion.ul
                key={current}
                className="mt-5 space-y-4"
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
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-button transition-colors duration-300 ease-out group-hover:bg-blue-600 group-hover:text-white">
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
              className="group relative w-full flex-shrink-0 overflow-hidden border-t border-slate-200/80 bg-slate-50/80 md:w-[46%] lg:w-[44%] md:border-t-0 md:border-l md:border-slate-200/80"
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
                  sizes="(max-width: 768px) 100vw, 86vw"
                  priority={current === 0}
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
