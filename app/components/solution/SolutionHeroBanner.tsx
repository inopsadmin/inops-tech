"use client";

import Link from "next/link";
import { FlyInText } from "@/app/components/FlyInText";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import Image from "next/image";
import { IconUserTrust } from "./Icons";

export type HeroButton = {
  label: string;
  href: string;
  variant: "primary" | "outline";
};

export type HeroProps = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;          
  titleLine3?: string;
  description: string;
  buttons: HeroButton[];
  trustText: React.ReactNode | string;
  trustAvatars?: (string | null)[]; 
  imageSrc?: string;      
  imageAlt?: string;
  rightContent?: React.ReactNode; 
};

export default function HeroSection({
  eyebrow,
  titleLine1,
  titleLine2,
  titleLine3,
  description,
  buttons,
  trustText,
  trustAvatars = [null, null, null, null], 
  rightContent,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-28 sm:pb-20 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          <div className="max-w-xl">
            <FlyInText as="span" direction="up" delay={0} className="inline-block rounded-full border border-blue-100 bg-[#f4f8ff] px-4 py-1.5 text-xs font-bold text-[#0066FF] mb-6"
            >
              {eyebrow}
            </FlyInText>
            
            <FlyInText  as="h1" direction="up" delay={0.05} className="text-[2.75rem] font-black leading-[1.1] text-gray-900 sm:text-5xl lg:text-[4rem] tracking-tight"
            >
              {titleLine1}
              <br />
              <span className="text-[#0066FF]">{titleLine2}</span>
              {titleLine3 && (
                <>
                  <br />
                  {titleLine3}
                </>
              )}
            </FlyInText>
          
            <FlyInText as="p" direction="up" delay={0.12} className="mt-6 text-base leading-relaxed text-gray-600 sm:text-[1.1rem] max-w-[90%]"
            >
              {description}
            </FlyInText>
            
            <AnimateOnScroll variant="fade-up" delay={200} className="mt-8 flex flex-wrap items-center gap-4">
              {buttons.map((btn) =>
                btn.variant === "primary" ? (
                  <Link
                    key={btn.label}
                    href={btn.href}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#0066FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_0_rgba(0,102,255,0.39)] transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-blue-500"
                  >
                    {btn.label}
                  </Link>
                ) : (
                  <Link
                    key={btn.label}
                    href={btn.href}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-[#0066FF] transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-blue-500"
                  >
                    {btn.label}
                  </Link>
                )
              )}
            </AnimateOnScroll>
            <hr className="mt-12 mb-6 border-gray-200" />
            <AnimateOnScroll variant="fade" delay={350} className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {trustAvatars.map((avatar, i) => (
                  <div
                    key={i}
                    className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-gray-100 shadow-sm"
                  >
                    {avatar ? (
                      <Image
                        src={avatar}
                        alt={`Trusted user ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <IconUserTrust className="text-gray-300" />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 font-medium">
                {trustText}
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll variant="slide-left" delay={100}className="relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0 w-full">
            <div className="w-full max-w-140">
              {rightContent}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

