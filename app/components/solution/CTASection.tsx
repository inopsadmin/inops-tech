"use client";

import Link from "next/link";
import { FlyInText } from "@/app/components/FlyInText";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";

export type CTAButton = {
  label: string;
  href: string;
  variant: "white" | "outline-white";
};

export type CTASectionProps = {
  heading: string;
  subheading: string;
  buttons: CTAButton[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
  layout?: "split" | "centered";
  trustBadges?: {    
    icon?: React.ReactNode;
    label: string;
  }[];
};

export default function CTASection({
  heading,
  subheading,
  buttons,
  trustBadges,
}: CTASectionProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-8 py-14 sm:px-12 sm:py-20">

          <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-blue-500/40 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-blue-700/40 blur-3xl" />
            <div className="relative flex flex-col items-center text-center">
              <FlyInText as="h2" direction="up"
                className="text-4xl font-black text-white sm:text-5xl lg:text-6xl leading-tight max-w-3xl">
                {heading}
              </FlyInText>
              <FlyInText as="p" direction="up" delay={0.07}
                className="mt-5 text-base text-blue-100 leading-relaxed max-w-xl">
                {subheading}
              </FlyInText>
              <AnimateOnScroll variant="fade-up" delay={150} className="mt-10 flex flex-wrap items-center justify-center gap-4">
                {buttons.map((btn) =>
                  btn.variant === "white" ? (
                    <Link key={btn.label} href={btn.href}
                      className="inline-flex items-center rounded-xl bg-blue-500 px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-blue-400">
                      {btn.label}
                    </Link>
                  ) : (
                    <Link key={btn.label} href={btn.href}
                      className="inline-flex items-center rounded-xl border-2 border-white bg-white px-8 py-4 text-base font-bold text-gray-900 transition hover:bg-gray-50">
                      {btn.label}
                    </Link>
                  )
                )}
              </AnimateOnScroll>
              {trustBadges && trustBadges.length > 0 && (
                <AnimateOnScroll variant="fade-up" delay={250}
                  className="mt-10 flex flex-wrap items-center justify-center gap-6">
                  {trustBadges.map((badge) => (
                    <div key={badge.label} className="flex items-center gap-2 text-sm text-blue-200">
                      {badge.icon && <span className="text-blue-300">{badge.icon}</span>}
                      {badge.label}
                    </div>
                  ))}
                </AnimateOnScroll>
              )}
            </div>
        </div>
      </div>
    </section>
  );
}