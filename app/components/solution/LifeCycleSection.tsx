"use client";

import { FlyInText } from "@/app/components/FlyInText";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import { Fragment } from "react";

export type LifecycleStep = {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  iconBg?: string;
  iconColor?: string;
};

export type LifecycleSectionProps = {
  heading: string;
  subheading: string;
  steps: LifecycleStep[];
  variant?: "default" | "connected" | "boxed";
};

const Arrow = ({ className = "" }: { className?: string }) => (
  <div className={`flex shrink-0 items-center justify-center text-gray-300 ${className}`}>
    <svg className="h-4 w-4 sm:hidden" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
    <svg className="hidden h-4 w-4 sm:block" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

export default function LifecycleSection({
  heading,
  subheading,
  steps,
  variant = "default",
}: LifecycleSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-14 text-center">
          <FlyInText as="h2" direction="up"
            className={`text-3xl font-extrabold text-gray-900 sm:text-4xl ${
              variant === "boxed" ? "font-black" : ""
            }`}
          >
            {heading}
          </FlyInText>
          <FlyInText as="p" direction="up" delay={0.07} className="mt-3 text-sm text-gray-500 max-w-xl mx-auto"
          >
            {subheading}
          </FlyInText>
        </div>
        {variant === "default" && (
          <div className="relative px-4">
            <div className="absolute top-8 left-0 right-8 h-px bg-gray-200 hidden sm:block" style={{ top: "112px" }} />
            <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
              {steps.map((step, i) => (
                <AnimateOnScroll
                  key={step.label}
                  variant="fade-up"
                  delay={i * 90}
                  className="flex flex-col items-center text-center flex-1 w-full"
                >
                  <div
                    className={`mb-6 flex items-center justify-center rounded-2xl ${step.iconBg ?? "bg-gray-50"} h-24 w-full max-w-40 sm:max-w-none`}
                    style={{ color: step.iconColor }}
                  >
                    {step.icon}
                  </div>
                  <p className="text-sm font-bold text-gray-900">{step.label}</p>
                  <p className="mt-1.5 text-xs text-gray-400 leading-snug max-w-40">{step.sublabel}</p>
                </AnimateOnScroll>
              ))}
              <div className="hidden sm:flex items-start pt-8 shrink-0 text-gray-300 pl-1">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {variant === "connected" && (
          <div className="relative px-4">
            <div
              className="absolute top-8 left-8 right-8 hidden h-px bg-blue-100 sm:block"
              aria-hidden
            />

            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              {steps.map((step, i) => (
                <AnimateOnScroll
                  key={step.label}
                  variant="fade-up"
                  delay={i * 90}
                  className="relative z-10 flex flex-col items-center text-center flex-1"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-100 bg-white shadow-sm"
                    style={{ color: "#2563eb" }}
                  >
                    {step.icon}
                  </div>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-gray-900">
                    {step.label}
                  </p>
                  <p className="mt-1 text-xs text-gray-400 leading-snug max-w-25">
                    {step.sublabel}
                  </p>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        )}

        {variant === "boxed" && (
          <div className="border border-dashed border-gray-200 bg-gray-50/60 px-6 py-10 sm:px-10">
            <div className="flex flex-col gap-0 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
              {steps.map((step, i) => (
                <Fragment key={step.label}>
                  <AnimateOnScroll
                    variant="fade-up"
                    delay={i * 90}
                    className="flex flex-col items-center text-center flex-1"
                  >
                    <div className="mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 border border-blue-100">
                      <div className="h-7 w-7 text-gray-900! [&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-gray-900!">
                        {step.icon}
                      </div>
                    </div>
                    <p className="text-sm font-bold text-gray-900 leading-tight">
                      {step.label}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400 leading-snug">
                      {step.sublabel}
                    </p>
                  </AnimateOnScroll>
                  {i < steps.length - 1 && <Arrow className="py-3 sm:py-0 sm:mt-4" />}
                </Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}