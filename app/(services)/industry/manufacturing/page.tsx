"use client";
import Image from "next/image";
import Link from "next/link";


// ─── SVG Icons ────────────────────────────────────────────────────────────────
function UsersIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function ShieldIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
function LockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}
function ClockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function DocumentIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
function EyeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}
function CheckCircleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}
function ArrowUpIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  );
}
function ServerIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  );
}
function LinkIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}
function FingerPrintIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
    </svg>
  );
}
function BadgeCheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}
function UserGroupIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ManufacturingIndustryPage() {
  return (
      <div className="min-h-screen bg-white text-gray-900">

        {/* ══════════════════════════════════════════════════════════════
            SECTION 1 — HERO
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[520px] overflow-hidden bg-[#041a33] text-white">
          <Image
            src="/images/manufacturing-hero-robots.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#011d38] from-[0%] via-[#073b68]/88 via-[48%] to-[#041a33]/12 to-[100%]" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001a33]/95 from-[0%] via-[#0067b1]/35 via-[58%] to-[#041a33]/25 to-[100%]" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06284a]/30 via-transparent to-[#011d38]/25" aria-hidden />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-12 py-16 sm:px-16 lg:px-24">
          <div className="lg:grid lg:grid-cols-2">
          <div>
            {/* Badge pill */}
            <span className="inline-flex items-center rounded-full border border-blue-400/50 bg-blue-500/15 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-blue-300">
              Manufacturing Solutions
            </span>

            {/* H1 */}
            <h1 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.65rem]">
              Contract Labour Management
              <br />
              Software for{" "}
              <span className="text-blue-400">Manufacturing</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-md text-sm leading-relaxed text-blue-50">
              Digitise your entire contractor ecosystem. From onboarding to payroll, ensure 100% statutory
              compliance and operational transparency across your manufacturing units.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-[0.7rem] font-bold text-white shadow-lg transition hover:bg-blue-500"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md border border-white/35 px-5 py-3 text-[0.7rem] font-bold text-white transition hover:bg-white/10"
              >
                Talk to an Expert
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-9 flex flex-wrap items-center gap-0">
              {[
                { value: "500k+", label: "Workforce Managed" },
                { value: "100%", label: "Stat Plant" },
                { value: "38%", label: "Cost Saved" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col pr-6 ${i > 0 ? "border-l border-white/20 pl-6" : ""}`}
                >
                  <span className="text-2xl font-bold leading-none text-white lg:text-3xl">{stat.value}</span>
                  <span className="mt-2 text-[0.6rem] uppercase tracking-wide text-blue-200">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 2 — INDUSTRY CONTEXT
        ══════════════════════════════════════════════════════════════ */}
        <section className="w-full border-y border-slate-200 bg-slate-50 py-12 lg:py-14" aria-label="Industry Context">
          <div
            className="mx-auto max-w-7xl px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
              {/* Left col */}
              <div className="lg:col-span-4">
                <p className="text-[0.625rem] font-bold uppercase tracking-widest text-blue-600">
                  Industry Context
                </p>
                <h2 className="mt-3 max-w-xs text-2xl font-bold leading-tight text-slate-900 lg:text-[1.7rem]">
                  The New Era of <br className="hidden sm:block" />
                  Workforce Governance
                </h2>
                <div className="mt-4 h-[3px] w-10 bg-blue-600" />
              </div>

              {/* Right col */}
              <div className="lg:col-span-8">
                <div className="max-w-2xl space-y-4">
                  <p className="text-sm leading-relaxed text-slate-600">
                    As manufacturing scales, the reliance on contract labour increases exponentially.
                    However, manual processes often lead to fragmented data, compliance blind spots,
                    and operational leakages.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    InOps RegX provides a unified framework for{" "}
                    <strong className="font-semibold text-slate-900">Workforce Governance</strong>,
                    enabling enterprises to transition from reactive management to proactive,
                    data-driven control over their distributed labour force.
                  </p>
                </div>

                <ul className="mt-6 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
                  {["Statutory Compliance Assurance", "Near-Real Operational Visibility"].map((item) => (
                    <li
                      key={item}
                      className="flex min-h-11 items-center gap-3 border border-slate-200 bg-white px-4 py-3 shadow-sm"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-teal-200 bg-teal-50 text-teal-600">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <polyline points="20 6 9 17 4 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-xs font-semibold text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 3 — PAIN POINTS
        ══════════════════════════════════════════════════════════════ */}
        <section className="w-full border-y border-slate-200 bg-white py-14 lg:py-16" aria-label="Pain Points">
          <div
            className="mx-auto max-w-7xl px-6 lg:px-8"
          >
            {/* Header */}
            <div className="mx-auto max-w-xl text-center">
              <p className="text-[0.625rem] font-bold uppercase tracking-widest text-blue-600">
                Operational Pain Points
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900">
                The Hidden Risks of Manual Management
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Manufacturing units face critical vulnerabilities when managing large-scale contract
                workforces without specialised digital infrastructure.
              </p>
            </div>

            {/* Cards */}
            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <UsersIcon />,
                  title: "Fragmented Contractor Management",
                  desc: "Difficulties in coordinating across multiple vendors and documentation inconsistencies at scale.",
                },
                {
                  icon: <ShieldIcon />,
                  title: "Compliance Violations",
                  desc: "Inability to track real-time adherence to labor laws, PF/ESI contributions, and entry mandates.",
                },
                {
                  icon: <LockIcon />,
                  title: "Unauthorized Gate Entry",
                  desc: "Security gaps allowing non-verified, undocumented workers to access production zones.",
                },
                {
                  icon: <ClockIcon />,
                  title: "Attendance Inaccuracies",
                  desc: "Reliance on manual registers that hinder real-time decisions leading to inflated labour costs.",
                },
                {
                  icon: <DocumentIcon />,
                  title: "Complex Billing Validation",
                  desc: "Hours of manual reconciliation between attendance logs and vendor invoices.",
                },
                {
                  icon: <EyeIcon />,
                  title: "Zero Real-time Visibility",
                  desc: "No single source of truth for attendance, productivity, or compliance status across sites.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="min-h-[160px] border border-slate-200 bg-slate-50/70 p-6 shadow-none"
                >
                  <div className="flex h-8 w-8 items-center justify-center border border-slate-200 bg-white text-blue-600">
                    {card.icon}
                  </div>
                  <h3 className="mt-5 text-sm font-bold leading-snug text-slate-900">{card.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-500">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 4 — SOLUTION
        ══════════════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#f4f6f8] py-16 lg:py-20" aria-label="Solution">
          <div
            className="mx-auto max-w-7xl px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
              {/* Left: feature list */}
              <div className="lg:col-span-5">
                <p className="text-[0.625rem] font-bold uppercase tracking-widest text-blue-600">
                  The Solution
                </p>
                <h2 className="mt-3 max-w-sm text-2xl font-bold leading-tight text-slate-900 lg:text-[1.65rem]">
                  Smart Governance for the Shop Floor
                </h2>

                <ul className="mt-8 flex flex-col gap-5">
                  {[
                    {
                      title: "Digital Contractor Onboarding",
                      desc: "Automate KYC, document verification, and training certifications before site access.",
                    },
                    {
                      title: "Direct Gate Governance",
                      desc: "Biometric and facial recognition systems integrated with work permits for foolproof access control.",
                    },
                    {
                      title: "Attendance & Shift Intelligence",
                      desc: "AI-driven shift scheduling and automated muster-roll generation with zero manual touchpoints.",
                    },
                    {
                      title: "Compliance Automation",
                      desc: "Real-time tracking of statutory payments and expiry alerts for licenses and insurance.",
                    },
                    {
                      title: "Payroll & Billing",
                      desc: "One-click invoice validation against verified attendance data to eliminate over-billing.",
                    },
                    {
                      title: "Executive Dashboard",
                      desc: "360-degree view of workforce metrics, productivity, and risk profiles across the enterprise.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-blue-500/70 bg-blue-50 text-blue-600">
                        <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <polyline points="20 6 9 17 4 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs font-bold leading-snug text-slate-900">{item.title}</p>
                        <p className="mt-1 text-[0.68rem] leading-relaxed text-slate-600">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: generated shop-floor image */}
              <div className="lg:col-span-7 flex justify-center lg:justify-end">
                <div className="relative mx-auto max-w-md ">
                  <div className="absolute -left-5 -top-5 h-24 w-24 border-l-2 border-t-2 border-blue-300" aria-hidden />
                  <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-blue-100/45" aria-hidden />
                  <div className="relative border border-slate-200 bg-white p-3 shadow-[0_16px_45px_rgba(15,23,42,0.10)]">
                    <Image
                      src="/images/manufacturing-orange-robots.jpg"
                      alt="Industrial robotic arms on manufacturing production line"
                      width={960}
                      height={720}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 5 — RESULTS
        ══════════════════════════════════════════════════════════════ */}
        <section className="w-full bg-white py-16 lg:py-20" aria-label="Results">
          <div
            className="mx-auto max-w-7xl px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
              {/* Left: image with overlay badge */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md shadow-[0_20px_45px_rgba(15,23,42,0.18)] ">
                  <Image
                    src="/images/workforce-analytics-dashboard.jpg"
                    alt="Real-time site monitoring dashboard"
                    width={900}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute right-[-18px] top-12 flex items-center gap-2 bg-[#071a2f] px-4 py-3 text-white shadow-lg">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                      <ServerIcon className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-[0.55rem] font-bold uppercase tracking-widest text-blue-300">
                        Live Analytics
                      </p>
                      <p className="mt-0.5 text-[0.65rem] font-bold">Real-time Site Monitoring</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: eyebrow + H2 + stats grid + bullets */}
              <div className="lg:col-span-7">
                <p className="text-[0.625rem] font-bold uppercase tracking-widest text-blue-600">
                  Impact &amp; Outcomes
                </p>
                <h2 className="mt-3 max-w-md text-2xl font-bold leading-tight text-slate-900 lg:text-[1.65rem]">
                  Measurable Results for Industrial Leaders
                </h2>
                <div className="mt-3 h-[3px] w-10 bg-blue-600" />

                {/* 2x2 stats grid */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    { value: "65%", label: "Faster Onboarding" },
                    { value: "100%", label: "Risk Reduction" },
                    { value: "99.9%", label: "Billing Accuracy" },
                    { value: "18%", label: "Labor Savings" },
                  ].map((stat, idx) => (
                    <div
                      key={stat.label}
                      className="min-h-[126px] border border-slate-200 bg-slate-50/80 p-5"
                    >
                      <div className="flex h-5 w-5 items-center justify-center text-blue-600">
                        {idx % 2 === 0 ? (
                          <ArrowUpIcon className="h-4 w-4" />
                        ) : (
                          <ShieldIcon className="h-4 w-4" />
                        )}
                      </div>
                      <p className="mt-4 text-2xl font-bold leading-none text-slate-900">{stat.value}</p>
                      <p className="mt-1.5 text-xs text-slate-600">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className="mt-7 flex flex-col gap-3">
                  {[
                    "Audit-ready Records: Digital trails for every worker entry, payment, and compliance filing.",
                    "Instant Headcount: Know exactly who is on your shop floor at any given second.",
                  ].map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-[0.68rem] leading-relaxed text-slate-600">
                      <CheckCircleIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 6 — ENTERPRISE DARK
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="w-full bg-[#1d1f23] py-14 text-white lg:py-16"
          
        >
          <div
            className="mx-auto max-w-7xl px-6 lg:px-8"
          >
            {/* Center header */}
            <div className="mx-auto max-w-xl text-center">
              <p className="text-[0.55rem] font-bold uppercase tracking-widest text-blue-400">
                Enterprise Excellence
              </p>
              <h2 className="mt-3 text-xl font-bold leading-tight text-white lg:text-2xl">
                Purpose-Built for Compliance-Driven Industries
              </h2>
              <p className="mt-4 text-[0.68rem] leading-relaxed text-slate-300">
                RegX isn&apos;t just a workforce tool, it&apos;s a specialised governance platform designed to
                handle the unique complexities of large-scale manufacturing. We understand the high stakes
                of regulatory non-compliance and labor safety.
              </p>
            </div>

            {/* Capabilities */}
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:gap-12">
              {[
                {
                  icon: <ShieldIcon className="h-3.5 w-3.5" />,
                  title: "Zero Tolerance Policy",
                  desc: "Automated blockages for expired documents or blacklisted personnel.",
                },
                {
                  icon: <ServerIcon className="h-3.5 w-3.5" />,
                  title: "Scalable Architecture",
                  desc: "Proven to manage over 100,000+ workers across multi-location plants.",
                },
                {
                  icon: <LinkIcon className="h-3.5 w-3.5" />,
                  title: "Seamless Integration",
                  desc: "Deep connectors for SAP, Oracle, and legacy HRMS systems.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col items-center"
                >
                  <div className="flex h-8 w-8 items-center justify-center bg-slate-700 text-blue-400">
                    {card.icon}
                  </div>
                  <h3 className="mt-4 text-[0.7rem] font-bold text-white">{card.title}</h3>
                  <p className="mt-2 max-w-[13rem] text-[0.62rem] leading-relaxed text-slate-300">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 7 — PLATFORM
        ══════════════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#f4f6f8] py-16 lg:py-20" aria-label="Platform">
          <div
            className="mx-auto max-w-7xl px-6 lg:px-8"
          >
            <div className="border border-slate-200 bg-white px-8 py-10 shadow-[0_12px_35px_rgba(15,23,42,0.06)] sm:px-10 lg:px-12">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
                {/* Left: features + CTA */}
                <div className="lg:col-span-6">
                  <p className="inline-flex bg-blue-50 px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-widest text-blue-600">
                    All In One Engine
                  </p>
                  <h2 className="mt-4 max-w-sm text-2xl font-bold leading-tight text-slate-900 lg:text-[1.6rem]">
                    One Platform. Complete Workforce Governance.
                  </h2>

                  <ul className="mt-8 flex flex-col gap-5">
                    {[
                      {
                        icon: <FingerPrintIcon className="h-3.5 w-3.5" />,
                        title: "Multi-Modal Biometrics",
                        desc: "Support for facial recognition, fingerprints, and RFID scanners.",
                      },
                      {
                        icon: <BadgeCheckIcon className="h-3.5 w-3.5" />,
                        title: "Automated BGV",
                        desc: "Integrated background verification workflows for rapid onboarding.",
                      },
                      {
                        icon: <LinkIcon className="h-3.5 w-3.5" />,
                        title: "ERP Syncing",
                        desc: "Bi-directional data flow with your existing enterprise systems.",
                      },
                      {
                        icon: <UserGroupIcon className="h-3.5 w-3.5" />,
                        title: "Self-Service Portal",
                        desc: "Allow contractors to manage their own documents and shift logs.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-4">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                          {item.icon}
                        </span>
                        <div>
                          <p className="text-[0.7rem] font-bold leading-snug text-slate-900">{item.title}</p>
                          <p className="mt-1 text-[0.62rem] leading-relaxed text-slate-600">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-blue-600 px-5 py-3 text-[0.65rem] font-semibold text-white shadow transition hover:bg-blue-500"
                    >
                      Explore Technical Specifications
                    </Link>
                  </div>
                </div>

                {/* Right: certified standards panel */}
                <div className="lg:col-span-6">
                  <div className="mx-auto max-w-sm bg-slate-50 px-8 py-8 text-center">
                    <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
                      <Image
                        src="/images/electronics-fingerprint-scan.jpg"
                        alt="Biometric fingerprint access control"
                        width={220}
                        height={220}
                        className="h-32 w-32 object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-6 text-sm font-bold text-slate-900">
                      Certified Compliance Standards
                    </h3>
                    <p className="mx-auto mt-3 max-w-xs text-[0.62rem] leading-relaxed text-slate-600">
                      RegX is built on international security protocols ensuring your workforce data is protected,
                      encrypted, and audit-ready at all times.
                    </p>
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {["ISO 27001", "SOC 2", "CLRA"].map((cert) => (
                        <span key={cert} className="h-5 bg-slate-200 text-[0]">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 8 — CTA BANNER
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="w-full bg-[#0b69b3] py-12 lg:py-14"
          
        >
          <div
            className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 text-white sm:px-8 lg:grid-cols-12 lg:px-8"
          >
            <div className="lg:col-span-6">
              <h2 className="max-w-sm text-xl font-bold leading-tight text-white lg:text-2xl">
                Ready to digitize your shop floor labor management?
              </h2>
              <p className="mt-4 max-w-md text-[0.68rem] leading-relaxed text-blue-100">
                Join 100+ manufacturing enterprises optimising their workforce governance today.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:col-span-6 lg:justify-center">
              <Link
                href="/contact"
                className="inline-flex min-w-32 items-center justify-center bg-white px-5 py-3 text-[0.62rem] font-bold text-blue-700 shadow transition hover:bg-blue-50"
              >
                Get Started Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-w-32 items-center justify-center border border-white/50 px-5 py-3 text-[0.62rem] font-bold text-white transition hover:bg-white/10"
              >
                Request Case Studies
              </Link>
            </div>

          </div>
        </section>

      </div>
  );
}
