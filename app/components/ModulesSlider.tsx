"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { moduleCarouselImages } from "@/app/lib/serviceImagery";

const CARD_WIDTH = 320;
const CARD_GAP = 0;
const AUTO_SCROLL_INTERVAL_MS = 4000;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

const modules = [
  {
    title: "Time, Attendance & Leave",
    description:
      "Record clock-in and clock-out, approve leave, and see daily attendance in one place—so payroll and compliance stay accurate.",
    imageUrl: moduleCarouselImages[0],
  },
  {
    title: "KYE — Employee verification",
    description:
      "Know Your Employee (KYE): verify IDs and documents digitally, store contractor records safely, and pull reports when you need proof for audits.",
    imageUrl: moduleCarouselImages[1],
  },
  {
    title: "Visitor Management",
    description:
      "Register visitors, issue passes, and track who is on site—replacing messy paper registers with a clear, searchable log.",
    imageUrl: moduleCarouselImages[2],
  },
  {
    title: "Contractor & Payroll",
    description:
      "Handle contract workers from onboarding to payout: attendance links to wages, and statutory rules are applied consistently.",
    imageUrl: moduleCarouselImages[3],
  },
  {
    title: "Compliance & Reporting",
    description:
      "Auto-build PF, ESIC, and labour-law reports with supporting data—less spreadsheet work and calmer inspection days.",
    imageUrl: moduleCarouselImages[4],
  },
  {
    title: "Access Control & Security",
    description:
      "Grant entry only to authorised people using biometrics or cards. Every attempt is logged so security teams can review access.",
    imageUrl: moduleCarouselImages[5],
  },
  {
    title: "Shift & Roster Management",
    description:
      "Plan who works which shift, fill gaps, and track overtime—so floors are staffed correctly without last-minute confusion.",
    imageUrl: moduleCarouselImages[6],
  },
  {
    title: "Analytics & Dashboards",
    description:
      "See attendance, cost, and compliance trends on simple dashboards—spot problems early instead of after month-end.",
    imageUrl: moduleCarouselImages[7],
  },
];

function ModuleCard({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="group relative h-[320px] w-[320px] flex-shrink-0 overflow-hidden bg-slate-800 shadow-md shadow-slate-900/10 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover object-center transition duration-500 group-hover:scale-105"
        sizes="320px"
        unoptimized
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-transparent transition-opacity duration-300 group-hover:from-black/92" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 p-4 pt-12 sm:pt-14">
        <h3 className="text-sm font-heading leading-tight text-white drop-shadow-sm sm:text-base">{title}</h3>
        <p className="mt-1.5 text-[11px] leading-relaxed text-white/90 line-clamp-3 group-hover:line-clamp-none sm:text-xs">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ModulesSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -SCROLL_STEP : SCROLL_STEP, behavior: "smooth" });
  };

  // Auto-slide every few seconds; loop back when near end
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const id = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      if (scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });
      }
    }, AUTO_SCROLL_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="solutions" className="relative py-8 lg:py-10">
      <div className="relative mx-auto max-w-full lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
          {/* Left: text block */}
          <div className="flex flex-shrink-0 flex-col justify-center items-center text-center lg:items-start lg:text-left lg:w-[28%] xl:w-[26%]">
            <span className="section-badge border-blue-200 bg-blue-50 text-blue-600">
              Solutions
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-blue-600 sm:text-3xl">
              Our Modules
            </h2>
            <p className="mt-3 max-w-sm text-slate-600 mx-auto lg:mx-0 text-sm leading-relaxed sm:text-[15px]">
              Each module maps to a real operations job—time capture, gates, visitors, payroll, and compliance—with plain-language detail on every card.
            </p>
            <div className="mt-4 h-0.5 w-12 rounded-full bg-blue-600" />
            <a
              href="#solutions"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              View all modules
              <span className="inline-block h-px flex-1 max-w-[80px] bg-gray-300" aria-hidden />
            </a>
          </div>

          {/* Right: slider with reduced width */}
          <div className="relative flex-1 min-w-0 lg:max-w-[72%] xl:max-w-[72%]">
            <div className="relative flex items-center">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:bg-gray-50 hover:border-blue-200 hover:text-blue-600 sm:left-2"
                aria-label="Previous"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div ref={scrollRef} className="flex gap-0 overflow-x-auto scroll-smooth py-2 pl-1 pr-1 sm:pl-2 sm:pr-2 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {modules.map((mod, i) => (
                  <ModuleCard
                    key={`${mod.title}-${i}`}
                    title={mod.title}
                    description={mod.description}
                    imageUrl={mod.imageUrl}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => scroll("right")}
                className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:bg-gray-50 hover:border-blue-200 hover:text-blue-600 sm:right-2"
                aria-label="Next"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
