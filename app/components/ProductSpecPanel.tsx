"use client";

import Image from "next/image";

export type SpecRow = { label: string; value: string };

type ProductSpecPanelProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  specs: SpecRow[];
};

/**
 * Professional image + specification list for Product and Solution pages.
 */
export default function ProductSpecPanel({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  specs,
}: ProductSpecPanelProps) {
  return (
    <section className="border-t border-slate-200 bg-slate-50/80 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-950/[0.04] lg:min-h-[320px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-slate-900">{title}</h2>
            {subtitle ? <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{subtitle}</p> : null}
            <dl className="mt-8 space-y-0 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
              {specs.map((row) => (
                <div key={row.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <dt className="text-sm font-semibold text-slate-800">{row.label}</dt>
                  <dd className="text-sm leading-relaxed text-slate-600 sm:max-w-[58%] sm:text-right">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
