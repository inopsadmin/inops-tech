"use client";

import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.25 };

const steps = [
  { id: "entry", label: "Worker Entry", icon: "turnstile" as const },
  { id: "attendance", label: "Attendance Capture", icon: "face" as const },
  { id: "workforce", label: "Workforce System", icon: "user" as const },
  { id: "compliance", label: "Compliance & Payroll", icon: "shield" as const },
  { id: "finance", label: "Ops & Finance", icon: "wallet" as const },
] as const;

function FlowIcon({ name }: { name: (typeof steps)[number]["icon"] }) {
  const c = "h-6 w-6 sm:h-7 sm:w-7";
  if (name === "turnstile") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v14M12 5v14M16 5v14M6 3h12v2H6V3zm0 16h12v2H6v-2z" />
      </svg>
    );
  }
  if (name === "face") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <rect x="5" y="4" width="14" height="16" rx="2" strokeWidth={2} />
        <circle cx="12" cy="11" r="2.5" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 16c.8 1.2 2.2 1.8 3 1.8s2.2-.6 3-1.8" />
      </svg>
    );
  }
  if (name === "user") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
}

export default function ConnectedEcosystemSection() {
  return (
    <section className="relative bg-white py-12 lg:py-16" aria-labelledby="connected-ecosystem-heading">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: smoothEase }}
        >
          <h2
            id="connected-ecosystem-heading"
            className="text-2xl font-heading-bold tracking-tight text-gray-900 sm:text-3xl lg:text-[2rem] lg:leading-snug"
          >
            Not Just Tools. A Connected Ecosystem.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Data flows seamlessly across modules, ensuring that an event at the gate automatically updates compliance,
            operations, and financial records.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
        >
          <ol className="flex list-none flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-1 sm:gap-y-6 lg:flex-nowrap lg:justify-between lg:gap-x-2">
            {steps.map((step, index) => (
              <li key={step.id} className="flex flex-col items-center sm:flex-row sm:items-center">
                <div className="flex max-w-[11rem] flex-col items-center text-center sm:max-w-[9.5rem] lg:max-w-[10.5rem]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-blue-200/80 bg-white text-blue-600 sm:h-16 sm:w-16">
                    <FlowIcon name={step.icon} />
                  </div>
                  <p className="mt-3 text-[10px] font-bold uppercase leading-tight tracking-wide text-slate-800 sm:text-[11px]">
                    {step.label}
                  </p>
                </div>
                {index < steps.length - 1 ? (
                  <>
                    <span className="mt-4 hidden text-slate-300 sm:mt-0 sm:mx-2 sm:inline-flex md:mx-3 lg:mx-4" aria-hidden>
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
        </motion.div>
      </div>
    </section>
  );
}
