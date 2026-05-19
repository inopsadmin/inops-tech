"use client";

import ClientMarqueeLogo from "@/app/components/ClientMarqueeLogo";
import { CLIENT_LOGO_MARQUEE_TRACK, industryLeaderClientLogos } from "@/app/lib/industryLeaderClientLogos";
import { TRUSTED_BY_HEADLINE } from "@/app/lib/trustedClients";

export default function BrandsSlider() {
  return (
    <section className="relative overflow-x-hidden border-y border-gray-100 bg-white py-6 sm:py-8 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-40" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600/80">{TRUSTED_BY_HEADLINE}</p>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-blue-500/80" aria-hidden />
        </div>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200/80 bg-white py-6 shadow-depth backdrop-blur">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white via-white/90 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white via-white/90 to-transparent" aria-hidden />

          <div className={`relative ${CLIENT_LOGO_MARQUEE_TRACK}`}>
            <div className={`${CLIENT_LOGO_MARQUEE_TRACK} animate-marquee motion-reduce:animate-none`}>
              {industryLeaderClientLogos.map((src, i) => (
                <ClientMarqueeLogo
                  key={`a-${i}`}
                  src={src}
                  className="opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
            <div className={`${CLIENT_LOGO_MARQUEE_TRACK} animate-marquee motion-reduce:animate-none`} aria-hidden>
              {industryLeaderClientLogos.map((src, i) => (
                <ClientMarqueeLogo key={`b-${i}`} src={src} alt="" className="opacity-70 grayscale" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
