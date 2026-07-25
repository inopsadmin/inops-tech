"use client";

import { ModuleData } from "@/app/lib/module";
import { AnimatedSection, AnimatedHeading } from "../AnimatedSection";

export default function ContentSectionsSection({ data }: { data: ModuleData }) {
  if (!data.contentSections?.length) return null;

  return (
    <section className="border-t border-gray-100 bg-white py-16 md:py-24">
      <AnimatedSection className="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col gap-14">
        {data.contentSections.map((section) => (
          <div key={section.h2}>
            <AnimatedHeading
              as="h2"
              className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl"
            >
              {section.h2}
            </AnimatedHeading>
            <p
              className="mt-4 text-base leading-relaxed text-gray-600"
              dangerouslySetInnerHTML={{ __html: section.body }}
            />
          </div>
        ))}
      </AnimatedSection>
    </section>
  );
}
