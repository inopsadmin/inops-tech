"use client";

import { useState } from "react";
import { ModuleData } from "@/app/lib/module";
import { AnimatedSection, AnimatedHeading } from "../AnimatedSection";

export default function FAQSection({ data }: { data: ModuleData }) {
  const [showAll, setShowAll] = useState(false);

  const INITIAL_FAQ_COUNT = 5;
  const faqItems = data.faq || [];
  const hasMoreThanFive = faqItems.length > INITIAL_FAQ_COUNT;

  if (!faqItems.length) return null;

  return (
    <section className="border-t border-gray-100 bg-gray-50 py-16 md:py-24">
      <AnimatedSection className="mx-auto max-w-3xl px-6 lg:px-8">
        <AnimatedHeading
          as="h2"
          className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl mb-10"
        >
          Frequently asked questions
        </AnimatedHeading>
        <dl className="flex flex-col divide-y divide-gray-200">
          {faqItems.map((item, i) => (
            <details key={item.question} className={`group py-5${!showAll && i >= INITIAL_FAQ_COUNT ? " hidden" : ""}`}>
              <summary className="flex w-full cursor-pointer list-none items-start justify-between text-left marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="text-base font-semibold text-gray-900">{item.question}</span>
                <span className="ml-6 mt-0.5 flex-shrink-0 text-gray-400 select-none transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <dd className="mt-3 text-sm leading-relaxed text-gray-600">{item.answer}</dd>
            </details>
          ))}
        </dl>

        {hasMoreThanFive && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              ) : (
                <>
                  Show All {faqItems.length} Questions
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </AnimatedSection>
    </section>
  );
}