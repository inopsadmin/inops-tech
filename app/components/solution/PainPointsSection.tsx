"use client";

import Image from "next/image";
import { FlyInText } from "@/app/components/FlyInText";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import { ReactNode } from "react";

export type PainPoint = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export type HighlightBadge = {
  value: string;
  label: string;
  colorClass?: string;
};

export type PainPointsSectionProps = {
  layout?: "split" | "grid";
  heading: string;
  description: string;
  points: PainPoint[];
  highlightBadges?: HighlightBadge[];
  imageSrc?: string;   
  imageSrc2?: string; 
  imageAlt?: string;
  imageAlt2?: string;
};
export default function PainPointsSection({
  layout = "split",
  heading,
  description,
  points,
  highlightBadges = [],
  imageSrc,
  imageSrc2,
  imageAlt = "Operational context",
  imageAlt2 = "Warehouse automation",
}: PainPointsSectionProps) {
  if (layout === "grid") {
    return (
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FlyInText
              as="h2"
              direction="up"
              className="text-3xl font-extrabold text-gray-900 sm:text-[2.5rem] leading-tight tracking-tight"
            >
              {heading}
            </FlyInText>
            <FlyInText
              as="p"
              direction="up"
              delay={0.06}
              className="mt-4 text-base text-gray-600 sm:text-lg leading-relaxed"
            >
              {description}
            </FlyInText>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {points.map((p, i) => (
              <AnimateOnScroll
                key={p.title}
                variant="fade-up"
                delay={i * 100}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0f2]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#d92d20"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" d="M12 8v4" />
                    <path strokeLinecap="round" d="M12 16h.01" />
                  </svg>
              </div>
                <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {p.description}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <FlyInText
              as="h2"
              direction="up"
              className="text-3xl font-extrabold text-gray-900 sm:text-[2.5rem] leading-tight tracking-tight"
            >
              {heading}
            </FlyInText>
            <FlyInText
              as="p"
              direction="up"
              delay={0.06}
              className="mt-4 text-base text-gray-600 sm:text-lg leading-relaxed max-w-lg"
            >
              {description}
            </FlyInText>

            <ul className="mt-10 space-y-3">
              {points.map((p, i) => (
                <AnimateOnScroll
                  key={p.title}
                  variant="slide-right"
                  delay={i * 80}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0f2]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#d92d20"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" d="M12 8v4" />
                    <path strokeLinecap="round" d="M12 16h.01" />
                  </svg>
              </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">{p.title}</p>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>

          <AnimateOnScroll variant="slide-left" delay={120}>
            <div className="grid grid-cols-2 gap-4 h-130">

              <div className="flex flex-col gap-4">
                <div className="relative flex-1 overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-100">
                      <span className="text-xs text-gray-400">Image 1</span>
                    </div>
                  )}
                </div>

                {/* Badge A — blue, -45% */}
                {highlightBadges[1] && (
                  <div className="shrink-0 rounded-2xl bg-[#1751d4] px-5 py-5 shadow-lg">
                    <p className="text-[2rem] font-black leading-none text-white">
                      {highlightBadges[1].value}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-snug text-blue-100">
                      {highlightBadges[1].label}
                    </p>
                  </div>
                )}
              </div>

              {/* ── Col B ─── */}
              <div className="flex flex-col gap-4">
                {/* Badge B — white/light, +30% */}
                {highlightBadges[0] && (
                  <div className="shrink-0 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-5 shadow-sm">
                    <p className="text-[2rem] font-black leading-none text-gray-900">
                      {highlightBadges[0].value}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-snug text-gray-500">
                      {highlightBadges[0].label}
                    </p>
                  </div>
                )}

                <div className="relative flex-1 overflow-hidden rounded-2xl bg-gray-200 shadow-md">
                  {imageSrc2 ? (
                    <Image
                      src={imageSrc2}
                      alt={imageAlt2}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-100">
                      <span className="text-xs text-gray-400">Image 2</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}