"use client";

import Image from "next/image";
import { FlyInText } from "@/app/components/FlyInText";

const steps = [
  {
    id: "entry",
    label: "Worker Entry",
    imageSrc: "/ecosystem-icons/worker-entry.png",
    imageAlt: "Notebook and pencil ,  worker entry and records",
  },
  {
    id: "attendance",
    label: "Attendance Capture",
    imageSrc: "/ecosystem-icons/attendance-capture.png",
    imageAlt: "Checklist ,  attendance capture",
  },
  {
    id: "workforce",
    label: "Workforce System",
    imageSrc: "/ecosystem-icons/workforce-system.png",
    imageAlt: "Team at workstations ,  workforce system",
  },
  {
    id: "compliance",
    label: "Compliance & Payroll",
    imageSrc: "/ecosystem-icons/compliance-payroll.png",
    imageAlt: "Handshake ,  compliance and payroll",
  },
  {
    id: "finance",
    label: "Ops & Finance",
    imageSrc: "/ecosystem-icons/ops-finance.png",
    imageAlt: "Growth chart ,  operations and finance",
  },
] as const;

export default function ConnectedEcosystemSection() {
  return (
    <section className="relative bg-white py-12 lg:py-16" aria-labelledby="connected-ecosystem-heading">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <FlyInText
            as="h2"
            id="connected-ecosystem-heading"
            direction="up"
            className="text-gray-900"
          >
            Not Just Tools. A Connected Ecosystem.
          </FlyInText>
          <FlyInText as="p" direction="up" delay={0.07} className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Data flows seamlessly across modules, ensuring that an event at the gate automatically updates compliance,
            operations, and financial records.
          </FlyInText>
        </div>

        <div className="mx-auto mt-10 max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <ol className="flex list-none flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-1 sm:gap-y-6 lg:flex-nowrap lg:items-start lg:justify-between lg:gap-x-2">
            {steps.map((step, index) => (
              <li key={step.id} className="flex w-full flex-col items-center sm:w-auto sm:flex-row sm:items-center lg:flex-1 lg:justify-center">
                <div className="group flex w-[10.5rem] flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-blue-200/80 bg-white p-1.5 transition-all duration-200 sm:h-[4.25rem] sm:w-[4.25rem] sm:p-2">
                    <Image
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      width={72}
                      height={72}
                      className="h-full w-full object-contain"
                      sizes="72px"
                      unoptimized
                    />
                  </div>
                  <FlyInText
                    as="p"
                    direction="up"
                    delay={0.05 + index * 0.06}
                    className="mt-3 min-h-[2.8rem] text-[10px] font-bold uppercase leading-tight tracking-wide text-slate-800 sm:text-[11px]"
                  >
                    {step.label}
                  </FlyInText>
                </div>
                {index < steps.length - 1 ? (
                  <>
                    <span className="mt-4 hidden text-slate-300 sm:mt-0 sm:mx-2 sm:inline-flex md:mx-3 lg:mx-3" aria-hidden>
                      <svg className="h-5 w-5 shrink-0 lg:h-6 lg:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="mt-2 flex text-slate-300 sm:hidden" aria-hidden>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
