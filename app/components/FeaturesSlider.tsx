"use client";

import { motion } from "framer-motion";
import { FlyInText } from "@/app/components/FlyInText";
import { featuresSliderImages } from "@/app/lib/serviceImagery";
import VideoLivePopups from "@/app/components/VideoLivePopups";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const slides = [
  {
    title: "Not Just Tools. A Connected Ecosystem.",
    summary:
      "Designed to keep operations connected, compliant, and scalable across every site.",
    features: [
      "Single Source of Truth Across Systems",
      "Real-Time Visibility & Control",
      "Compliance-First Architecture",
      "Scalable Across Locations & Workforce Types",
      "Hardware + Software Integrated",
    ],
    videoSrc: "/make_video_form_this_image_202605062236.mp4",
    posterSrc: featuresSliderImages.clms,
  },
] as const;

export default function FeaturesSlider() {
  const current = 0;
  const slide = slides[current];

  return (
    <section
      id="solutions"
      className="relative isolate border-y border-slate-200/80 bg-white py-10 lg:py-12"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="group overflow-hidden rounded-2xl border border-blue-100/90 bg-white/95 shadow-lg shadow-blue-900/[0.06] backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-blue-200/80 hover:shadow-xl hover:shadow-blue-900/10">
          <div className="grid grid-cols-1 items-stretch gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,46%)] lg:grid-cols-[minmax(0,1fr)_minmax(0,44%)]">
            <div className="p-8 lg:p-12">
              <FlyInText as="h2" direction="left" className="text-gray-900">
                {slide.title}
              </FlyInText>

              <FlyInText as="p" direction="left" delay={0.06} className="mt-4 text-sm leading-relaxed text-gray-600 lg:text-base">
                {slide.summary}
              </FlyInText>

              <ul className="mt-5 space-y-4">
                {slide.features.map((text, i) => (
                  <FlyInText
                    key={`${current}-${i}`}
                    as="li"
                    direction={i % 2 === 0 ? "left" : "right"}
                    delay={0.1 + i * 0.07}
                    className="flex gap-3"
                  >
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-button text-blue-600 transition-colors duration-300 ease-out group-hover:bg-blue-600 group-hover:text-white">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed text-gray-600 lg:text-base">{text}</span>
                  </FlyInText>
                ))}
              </ul>
            </div>

            <motion.div
              className="group relative flex h-full min-h-[15rem] w-full flex-col overflow-hidden border-t border-slate-200/80 bg-slate-100/90 md:min-h-0 md:border-l md:border-t-0 md:border-slate-200/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
            >
              {/* object-contain + 16:9 frame avoids top/bottom crop from object-cover */}
              <div className="relative mx-auto flex w-full flex-1 items-center justify-center px-2 py-3 sm:px-3 sm:py-4 md:mx-0 md:min-h-[min(22rem,36vh)] md:px-3 md:py-5 lg:min-h-[min(26rem,40vh)]">
                <div className="relative aspect-video w-full max-h-[min(34rem,58vw)] max-w-full sm:max-h-[min(38rem,52vw)] md:max-h-[min(42rem,48vh)] lg:max-h-[min(44rem,46vh)]">
                  <video
                    className="absolute inset-0 h-full w-full object-contain object-center"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={slide.posterSrc}
                    aria-label="Product preview video: enterprise operations and workforce platform"
                  >
                    <source src={slide.videoSrc} type="video/mp4" />
                  </video>
                  <VideoLivePopups
                    popups={[
                      {
                        position: "top-left",
                        className: "!top-0 sm:!top-10 lg:!-top-18 !left-0 sm:!left-10 lg:!-left-5",
                        label: "Live",
                        title: "Platform online",
                        accent: "emerald",
                      },
                      {
                        position: "bottom-right",
                        className: "!bottom-0 sm:!bottom-10 lg:!-bottom-15 !right-0 sm:!right-10 lg:!-right-5",
                        label: "Sync",
                        title: "Real-time data",
                        variant: "icon",
                        icon: "spark",
                        accent: "blue",
                      },
                    ]}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
