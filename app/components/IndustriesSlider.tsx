"use client";

import Image from "next/image";
import { industriesImagery } from "@/app/lib/serviceImagery";

const industries = industriesImagery.map((row) => ({ ...row }));

function IndustryCard({ name, imageUrl }: { name: string; imageUrl: string }) {
  return (
    <div className="industry-card group relative h-[320px] w-[320px] flex-shrink-0 overflow-hidden bg-slate-800 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Image
        src={imageUrl}
        alt={name}
        fill
        unoptimized
        className="object-cover object-center transition duration-500 group-hover:scale-105"
        sizes="320px"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-heading text-white drop-shadow-md">{name}</h3>
      </div>
    </div>
  );
}

export default function IndustriesSlider() {
  return (
    <section className="relative overflow-x-hidden py-8 lg:py-10 bg-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center">
          <span className="section-badge border-blue-200 bg-blue-50 text-blue-600">
            Industries
          </span>
          <h2 className="mt-4 text-center text-blue-600">Industries We Serve</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Trusted across manufacturing, electronics, logistics, construction, and more
          </p>
        </div>
      </div>
      <div className="hover-pause relative mt-8 w-screen max-w-[100vw] -translate-x-1/2 left-1/2 overflow-hidden">
        <div className="flex w-max gap-0 animate-marquee-slow" style={{ willChange: "transform" }}>
          {[...industries, ...industries].map((ind, i) => (
            <IndustryCard key={`${ind.name}-${i}`} name={ind.name} imageUrl={ind.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}
