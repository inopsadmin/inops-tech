"use client";

import Image from "next/image";
import { enlargedMarqueeLogoSrcs, industryLeaderClientLogos, logoAltFromSrc } from "@/app/lib/industryLeaderClientLogos";

function LogoCard({ src }: { src: string }) {
  const large = enlargedMarqueeLogoSrcs.has(src);
  return (
    <div
      className={`group relative flex flex-shrink-0 items-center justify-center rounded-xl px-3 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 sm:px-4 ${
        large ? "h-24 min-w-[150px] sm:min-w-[180px]" : "h-20 min-w-[120px] sm:min-w-[150px]"
      }`}
    >
      <Image
        src={src}
        alt={logoAltFromSrc(src)}
        width={large ? 200 : 140}
        height={large ? 80 : 56}
        className={`w-auto object-contain object-center opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 ${
          large
            ? "h-14 max-w-[13.5rem] sm:h-16 sm:max-w-[15rem]"
            : "h-12 max-w-[120px]"
        }`}
        sizes={large ? "200px" : "140px"}
        unoptimized={src.endsWith(".svg")}
      />
    </div>
  );
}

export default function BrandsSlider() {
  return (
    <section className="relative overflow-x-hidden border-y border-gray-100 bg-white py-6 sm:py-8 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-40" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600/80">Trusted by industry leaders</p>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Teams rely on our platform for consistent, compliant, and efficient operations.
          </p>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-blue-500/80" aria-hidden />
        </div>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200/80 bg-white py-6 shadow-depth backdrop-blur">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white via-white/90 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white via-white/90 to-transparent" aria-hidden />

          <div className="relative flex">
            <div className="flex animate-marquee gap-0 motion-reduce:animate-none">
              {industryLeaderClientLogos.map((src, i) => (
                <LogoCard key={`a-${i}`} src={src} />
              ))}
            </div>
            <div className="flex animate-marquee gap-0 motion-reduce:animate-none" aria-hidden>
              {industryLeaderClientLogos.map((src, i) => (
                <LogoCard key={`b-${i}`} src={src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
