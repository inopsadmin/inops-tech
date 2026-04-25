"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const inOpsPillars = [
  {
    category: "Core Platform",
    pillarIcon: "governance" as const,
    title: "Workforce Governance",
    description:
      "Eliminate cost leakages and ensure 100% audit readiness with automated compliance and labor management.",
    features: [
      {
        rowIcon: "userCog" as const,
        name: "Contract Employee Governance (CLMS)",
        blurb: "Manage lifecycle, onboarding, and compliance.",
        href: "/solutions/payroll-solutions",
      },
      {
        rowIcon: "database" as const,
        name: "HR Information System (HRIS)",
        blurb: "Centralized records and role-based access.",
        href: "/solutions/labour-management",
      },
    ],
  },
  {
    category: "Security & Tracking",
    pillarIcon: "lock" as const,
    title: "Identity & Access",
    description:
      "Unified identity management using state-of-the-art biometric and vision systems across all enterprise sites.",
    features: [
      {
        rowIcon: "faceId" as const,
        name: "Face Recognition",
        blurb: "High-accuracy touchless attendance.",
        href: "/product/biometric-access-control",
      },
      {
        rowIcon: "cctv" as const,
        name: "CCTV Attendance",
        blurb: "Automated workforce tracking via vision AI.",
        href: "/solutions/time-and-attendance",
      },
      {
        rowIcon: "mobile" as const,
        name: "Mobile App",
        blurb: "Self-service and field force management.",
        href: "/contact",
      },
    ],
  },
  {
    category: "Facility Management",
    pillarIcon: "bolt" as const,
    title: "Operations",
    description:
      "Streamline secondary facility operations and visitor tracking to improve onsite efficiency and safety.",
    features: [
      {
        rowIcon: "canteen" as const,
        name: "Canteen & Visitor Management",
        blurb: "Digital meal coupons and visitor approvals.",
        href: "/solutions/canteen-management",
      },
      {
        rowIcon: "usersGroup" as const,
        name: "Enterprise Operations",
        blurb: "Consolidated visibility across all facilities.",
        href: "/solutions/visitor-management",
      },
    ],
  },
  {
    category: "Workforce Wellness",
    pillarIcon: "walletMain" as const,
    title: "Financial",
    description:
      "Empower your workforce with financial tools that reduce attrition and improve operational transparency.",
    features: [
      {
        rowIcon: "walletRow" as const,
        name: "Earned Wage Access (EWA)",
        blurb: "Real-time wage visibility and NBFC disbursement.",
        href: "/contact",
      },
    ],
    footnote:
      "Integrating EWA has shown to reduce contract worker turnover by up to 25% across manufacturing sites.",
  },
] as const;

function PillarCardMainIcon({ name }: { name: (typeof inOpsPillars)[number]["pillarIcon"] }) {
  const c = "h-7 w-7 text-violet-600";
  if (name === "governance") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (name === "lock") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    );
  }
  if (name === "bolt") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
}

function PillarFeatureRowIcon({ name }: { name: (typeof inOpsPillars)[number]["features"][number]["rowIcon"] }) {
  const c = "h-4 w-4 shrink-0 text-violet-500";
  if (name === "userCog") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    );
  }
  if (name === "database") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    );
  }
  if (name === "faceId") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2" />
      </svg>
    );
  }
  if (name === "cctv") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    );
  }
  if (name === "mobile") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    );
  }
  if (name === "canteen") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    );
  }
  if (name === "usersGroup") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
}

export default function FourPillarsSection() {
  return (
    <section
      className="border-t border-slate-200/80 bg-white py-14 lg:py-16"
      aria-labelledby="four-pillars-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: smoothEase }}
        >
          <h2
            id="four-pillars-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            The Four Pillars of InOps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore how our integrated modules work together to solve complex enterprise workforce challenges.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {inOpsPillars.map((pillar, i) => (
            <motion.article
              key={pillar.title}
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-violet-200/80 hover:shadow-md sm:p-7"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(i * 0.06, 0.18) }}
            >
              <span className="absolute right-5 top-5 max-w-[11rem] rounded-full bg-violet-50 px-2.5 py-1 text-center text-[10px] font-semibold uppercase leading-tight tracking-wide text-violet-700 ring-1 ring-violet-100 sm:right-6 sm:top-6 sm:max-w-none sm:text-xs">
                {pillar.category}
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100 text-violet-700 ring-1 ring-violet-200/80">
                <PillarCardMainIcon name={pillar.pillarIcon} />
              </div>
              <h3 className="mt-5 pr-24 text-xl font-bold text-slate-900 sm:pr-28">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{pillar.description}</p>
              <ul className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-6">
                {pillar.features.map((f) => (
                  <li key={f.name}>
                    <Link
                      href={f.href}
                      className="group flex gap-3 rounded-lg outline-none transition-colors hover:bg-slate-50/80 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 ring-1 ring-slate-100">
                        <PillarFeatureRowIcon name={f.rowIcon} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-1.5 font-semibold text-slate-900">
                          {f.name}
                          <span className="text-violet-400 transition group-hover:translate-x-0.5" aria-hidden>
                            →
                          </span>
                        </span>
                        <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{f.blurb}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              {"footnote" in pillar && pillar.footnote ? (
                <p className="mt-5 rounded-xl bg-violet-50/90 px-4 py-3 text-sm italic leading-relaxed text-violet-900 ring-1 ring-violet-100">
                  *{pillar.footnote}
                </p>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
