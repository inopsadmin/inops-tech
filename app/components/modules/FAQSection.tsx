"use client";

import { useState } from "react";
import { ModuleData } from "@/app/lib/module";
import { AnimatedSection, AnimatedHeading } from "../AnimatedSection";
import FAQPageJsonLd from "../FAQPageJsonLd";

export default function FAQSection({ data }: { data: ModuleData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!data.faq?.length) return null;

  return (
    <section className="border-t border-gray-100 bg-gray-50 py-16 md:py-24">
      <FAQPageJsonLd items={data.faq} />
      <AnimatedSection className="mx-auto max-w-3xl px-6 lg:px-8">
        <AnimatedHeading
          as="h2"
          className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl mb-10"
        >
          Frequently asked questions
        </AnimatedHeading>
        <dl className="flex flex-col divide-y divide-gray-200">
          {data.faq.map((item, i) => (
            <div key={item.question} className="py-5">
              <dt>
                <button
                  type="button"
                  className="flex w-full items-start justify-between text-left"
                  aria-expanded={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-base font-semibold text-gray-900">{item.question}</span>
                  <span className="ml-6 mt-0.5 flex-shrink-0 text-gray-400 select-none">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
              </dt>
              {openIndex === i && (
                <dd className="mt-3 text-sm leading-relaxed text-gray-600">{item.answer}</dd>
              )}
            </div>
          ))}
        </dl>
      </AnimatedSection>
    </section>
  );
}
