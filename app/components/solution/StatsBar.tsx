"use client";

import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import AnimatedCounter from "@/app/components/AnimatedCounter";

export type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  change?: string;       
  changePositive?: boolean;
};

export type StatsBarProps = {
  heading: string;
  subheading?: string;
  stats: StatItem[];
};

export default function StatsBar({ heading, subheading, stats }: StatsBarProps) {
  return (
    <section className="bg-black/85 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fade-up" className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
          {subheading && (
            <p className="mt-2 text-sm text-gray-400">{subheading}</p>
          )}
        </AnimateOnScroll>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimateOnScroll
              key={stat.label}
              variant="fade-up"
              delay={i * 80}
              className="rounded-lg border bg-gray-100 p-5 backdrop-blur-sm"
            >
              <p className="text-xs font-medium text-gray-500 tracking-wide mb-2">
                {stat.label}
              </p>
              <p className="font-extrabold text-[var(--inops-blue)] leading-none">
                {stat.prefix}
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix ?? ""}
                  duration={1.4}
                  delay={0.2 + i * 0.1}
                  className="text-2xl"
                />
              </p>
              {stat.change && (
                <p
                  className={`mt-2 !text-xs font-medium ${
                    stat.changePositive !== false ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {stat.change}
                </p>
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}