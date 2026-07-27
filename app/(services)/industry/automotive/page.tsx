"use client";

import Image from "next/image";
import Link from "next/link";

type IconProps = { className?: string };

function CheckIcon({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden>
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

function UsersIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ScanIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7 12h10" />
    </svg>
  );
}

function ClockIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function ShieldIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function FileIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8" />
    </svg>
  );
}

function GridIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function ZapIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
    </svg>
  );
}

function ChartIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path d="M4 19V5M8 17v-6M13 17V7M18 17v-9M3 19h18" />
    </svg>
  );
}

const painPoints = [
  {
    title: "Tier-2 Vendor Visibility",
    desc: "Loss of control over sub-contracted labor quality and compliance.",
    icon: <UsersIcon />,
  },
  {
    title: "Gate Inefficiencies",
    desc: "Manual entry checks causing shift-start delays on high-speed lines.",
    icon: <ScanIcon />,
  },
  {
    title: "Overtime Leakage",
    desc: "Unmanaged shifts leading to excessive overtime costs and fatigue risks.",
    icon: <ClockIcon />,
  },
  {
    title: "Audit Liability",
    desc: "Fragmented records causing non-compliance during surprise labor inspections.",
    icon: <ShieldIcon />,
  },
  {
    title: "Contract Invoicing Errors",
    desc: "Discrepancies between manual attendance and vendor billings.",
    icon: <FileIcon />,
  },
  {
    title: "Supply Chain Latency",
    desc: "Workforce shortages impacting JIT delivery schedules.",
    icon: <GridIcon />,
  },
] as const;

const solutionItems = [
  {
    title: "Contractor Lifecycle Management",
    desc: "Automate the entire journey from vendor onboarding and document KYC to offboarding, ensuring 100% statutory readiness.",
    icon: <UsersIcon />,
  },
  {
    title: "Production Area Access",
    desc: "Biometric and facial recognition entry gates mapped to real-time skill certifications and work permits.",
    icon: <ShieldIcon />,
  },
  {
    title: "Shift Compliance Governance",
    desc: "Real-time monitoring of shift timing, breaks, and maximum work hours to prevent regulatory violations.",
    icon: <ClockIcon />,
  },
  {
    title: "Attendance Intelligence",
    desc: "Automated muster-roll generation that eliminates ghost workers and manual log errors.",
    icon: <ScanIcon />,
  },
  {
    title: "Invoicing & Billing Verification",
    desc: "One-click reconciliation of vendor invoices against verified attendance data to eliminate over-billing.",
    icon: <FileIcon />,
  },
  {
    title: "Vendor Performance Analytics",
    desc: "Scorecards based on compliance, worker quality, and fulfilment rates across your supply chain.",
    icon: <ChartIcon />,
  },
] as const;

const impactStats = [
  { value: "99.9%", label: "Production Continuity", icon: <ZapIcon /> },
  { value: "+22%", label: "Labor Utilization", icon: <UsersIcon /> },
  { value: "100%", label: "Compliance Score", icon: <ShieldIcon /> },
  { value: "-15%", label: "Overtime Reduced", icon: <ClockIcon /> },
] as const;

const integrationCards = [
  {
    title: "Deep ERP Sync",
    desc: "Native connectors for SAP S/4HANA, Oracle NetSuite, and Microsoft Dynamics 365 for bi-directional data flow.",
    icon: <GridIcon />,
  },
  {
    title: "Audit-Ready Trail",
    desc: "Every worker action and compliance verification is timestamped and cryptographically secured for internal or government audits.",
    icon: <ScanIcon />,
  },
  {
    title: "Multi-Site Command",
    desc: "Unified visibility across globally distributed manufacturing plants with localized regulatory rule engines.",
    icon: <GridIcon />,
  },
] as const;

export default function AutomotiveIndustryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative min-h-[540px] overflow-hidden bg-slate-100 text-white">
        <Image
          src="/images/manufacturing-shop-floor-generated.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011d38] from-[0%] via-[#073b68]/88 via-[48%] to-white/18 to-[100%]" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a33]/95 from-[0%] via-[#0067b1]/35 via-[58%] to-white/25 to-[100%]" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06284a]/30 via-transparent to-[#011d38]/25" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-12 py-16 sm:px-16 lg:px-24">
          <div className="lg:grid lg:grid-cols-2">
          <div>
            <span className="inline-flex bg-teal-500/25 px-3 py-1 text-[0.56rem] font-bold uppercase tracking-wider text-teal-100 ring-1 ring-teal-400/40">
              Industry Focus: Automotive
            </span>
            <h1 className="mt-7 max-w-[40rem] text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[3.6rem]">
              Contract Labour Management for{" "}
              <span className="block text-teal-400">Automotive Manufacturing</span>
            </h1>
            <p className="mt-8 max-w-[29rem] text-base leading-relaxed text-blue-50">
              Ensure the right worker with the right skills is on the assembly line at the right time. Iddion RegX
              digitizes contractor ecosystems to match the precision of Just-In-Time production.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex min-w-48 items-center justify-center gap-3 bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Request Sector Audit <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-w-36 justify-center border border-white/60 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                View Solutions
              </Link>
            </div>

            <div className="mt-8 grid max-w-[34rem] grid-cols-3 border-t border-white/20 pt-8">
              {[
                { value: "JIT", label: "Compliance Speed" },
                { value: "0%", label: "Access Leakage" },
                { value: "24/7", label: "Shift Visibility" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-bold tracking-wider text-teal-300">{stat.value}</p>
                  <p className="mt-2 text-[0.54rem] font-bold uppercase tracking-[0.24em] text-blue-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -bottom-7 -left-7 h-24 w-24 bg-blue-50" aria-hidden />
              <div className="absolute -right-7 -top-7 h-28 w-28 border-r-2 border-t-2 border-teal-300" aria-hidden />
              <div className="relative border border-slate-200 bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <Image
                  src="/images/automotive-assembly-line.jpg"
                  alt="Automotive assembly line with robotic arms"
                  width={1024}
                  height={682}
                  className="aspect-[4/3] w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-blue-600">
              Manufacturing Excellence
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight text-slate-900">
              Synchronizing Labor with Just-In-Time Production
            </h2>
            <div className="mt-5 h-[3px] w-16 bg-blue-600" />
            <div className="mt-8 max-w-lg space-y-6 text-base leading-relaxed text-slate-600">
              <p>
                Automotive assembly lines operate on razor-thin margins and strict temporal windows. Any disruption
                in contractor availability or compliance bottlenecks can halt multi-million dollar production cycles.
              </p>
              <p>
                Iddion RegX introduces <strong className="font-bold text-slate-700">Automated Workforce Synchronization</strong>,
                aligning contractor lifecycle management with your production planning system (PPS) to ensure
                continuous, compliant operation.
              </p>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-5 sm:grid-cols-2">
              {["Skill-based Line Deployment", "Safety Certification Tracking", "Vendor SLA Management", "Dynamic Shift Compliance"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-teal-500 text-teal-600">
                    <CheckIcon className="h-2.5 w-2.5" />
                  </span>
                  <span className="text-xs font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.24em] text-blue-600">Critical Vulnerabilities</p>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900">
              Navigating the Complexities of Automotive Labor
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-500">
              Manual management of thousands of contractors across multi-tier vendors creates invisible risks that
              manifest as production delays and regulatory penalties.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Image
                src="/images/Hardware Integration.jpg"
                alt="Automotive access governance checkpoint"
                width={500}
                height={500}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="bg-[#04284d] p-6 text-white">
                <div className="flex items-start gap-4">
                  <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <div>
                    <p className="text-sm font-bold">Risk Alert: Access Governance</p>
                    <p className="mt-2 text-xs leading-relaxed text-blue-100">
                      74% of manufacturing security breaches stem from unauthorized or unverified third-party access
                      to production zones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
              {painPoints.map((item) => (
                <div key={item.title} className="bg-white p-6">
                  <div className="text-blue-600">{item.icon}</div>
                  <h3 className="mt-5 text-xs font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-[0.68rem] leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.24em] text-blue-600">The Solution Framework</p>
              <h2 className="mt-4 max-w-md text-2xl font-bold leading-tight text-slate-900">
                Comprehensive Governance for the Global Assembly Line
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-600">
                Iddion RegX provides a modular suite designed to integrate with existing manufacturing execution
                systems (MES), digitizing the entire human layer of your plant.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center border border-blue-600 px-5 text-xs font-bold text-blue-600 transition hover:bg-blue-50"
            >
              Download Technical Whitepaper
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 border border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {solutionItems.map((item) => (
              <div key={item.title} className="min-h-56 border-b border-slate-200 p-8 sm:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0">
                <div className="flex h-10 w-10 items-center justify-center bg-blue-50 text-blue-600">{item.icon}</div>
                <h3 className="mt-8 text-sm font-bold leading-tight text-slate-900">{item.title}</h3>
                <p className="mt-4 text-[0.68rem] leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06284a] py-24 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.24em] text-teal-300">Quantifiable Impact</p>
            <h2 className="mt-4 max-w-md text-2xl font-bold leading-tight">Measurable Excellence for Operational Leaders</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-blue-100">Transform workforce management from a cost center into a competitive advantage through data-driven governance.</p>

            <div className="mt-10 grid w-full grid-cols-2 gap-4">
              {impactStats.map((stat) => (
                <div key={stat.label} className="flex flex-col justify-center gap-3 rounded-sm bg-[#071028] p-6 shadow-sm ring-1 ring-white/5">
                  <div className="text-teal-300">{stat.icon}</div>
                  <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-[0.58rem] font-bold uppercase tracking-widest text-blue-200">{stat.label}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-4">
              {[
                'Real-time Accountability: Instant headcount mapping to specific assembly line stations.',
                'Payroll Integrity: Eliminate manual reconciliation between plant sites and finance.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white/5 px-4 py-3 text-[0.68rem] leading-relaxed text-blue-50">
                  <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[680px]">
              <Image
                src="/images/workforce-analytics-dashboard.jpg"
                alt="Workforce analytics and compliance dashboard"
                width={900}
                height={600}
                className="aspect-[16/9] w-full rounded-sm object-cover shadow-lg"
              />

              <div className="absolute right-4 top-6 w-44 rounded-sm bg-white px-5 py-4 text-slate-900 shadow-2xl">
                <p className="text-[0.56rem] font-bold uppercase tracking-widest text-slate-400">Site Compliance</p>
                <p className="mt-1 text-xl font-extrabold text-[#06284a]">100.0%</p>
                <div className="mt-3 h-[2px] w-20 bg-teal-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.24em] text-blue-600">Enterprise Architecture</p>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900">
              Seamless Integration with Global ERP Ecosystems
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              RegX is not an island. It acts as the intelligent human-governance layer that bridges your corporate ERP
              with the real-time activity on the shop floor.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            {integrationCards.map((item) => (
              <div key={item.title} className="border border-slate-200 bg-slate-50 p-8">
                <div className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-blue-600">
                  {item.icon}
                </div>
                <h3 className="mt-7 text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-[0.68rem] leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-10 border-t border-slate-200 pt-10">
            {[ "ISO 27001", "GDPR COMPLIANT"].map((cert) => (
              <span key={cert} className="text-sm font-extrabold italic text-slate-400">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b69b3] py-16 text-white">
        <Image
          src="/images/manufacturing-shop-floor-generated.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
          aria-hidden
        />
        <div className="absolute inset-0 bg-blue-700/80"/>
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <h2 className="max-w-sm text-3xl font-bold leading-tight">
              Ready to synchronize your workforce with your production?
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-blue-100">
              Join leading automotive OEMs and Tier-1 suppliers using Iddion RegX to secure their labor supply chain.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:col-span-7 lg:justify-center">
            <Link
              href="/contact"
              className="inline-flex min-w-56 items-center justify-center bg-white px-8 py-4 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Book a Deep-Dive Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-w-48 items-center justify-center border border-white/50 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
