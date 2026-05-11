"use client";

import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { FlyInText } from "@/app/components/FlyInText";
import { siSap, siSnowflake } from "simple-icons";
import ConnectedEcosystemSection from "@/app/components/ConnectedEcosystemSection";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";
import VideoLivePopups from "@/app/components/VideoLivePopups";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const labourHeroRightBackground = "/WhatsApp Image 2026-05-04 at 12.24.11 PM.jpeg";
const labourHeroRightVideo = "/genrate_this_image_video_202605080007.mp4";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const painPointCards = [
  {
    icon: "database" as const,
    title: "Data Silos",
    description: "Employee records scattered across dozens of spreadsheets and old systems.",
    tone: "rose" as const,
  },
  {
    icon: "alert" as const,
    title: "Payroll Leakage",
    description: "Manual attendance leads to significant overpayment and clerical errors.",
    tone: "amber" as const,
  },
  {
    icon: "grid" as const,
    title: "No Visibility",
    description: "Lack of real-time reporting makes strategic workforce decisions impossible.",
    tone: "violet" as const,
  },
  {
    icon: "shieldCheck" as const,
    title: "Compliance Risk",
    description: "Staying up-to-date with changing labor laws and tax regulations is a nightmare.",
    tone: "indigo" as const,
  },
] as const;

const platformControlCards = [
  {
    icon: "userPlus" as const,
    title: "Employee Data Management",
    description:
      "Centralized database acting as a single source of truth for all HR profiles, documents, and historical data.",
    tone: "indigo" as const,
    badge: "Foundation",
  },
  {
    icon: "clock" as const,
    title: "Time & Attendance",
    description:
      "Biometric integration and mobile clock-in for tracking working hours, shifts, and leave in real time.",
    tone: "sky" as const,
    badge: "Operations",
  },
  {
    icon: "creditCard" as const,
    title: "Payroll Automation",
    description:
      "One-click salary processing with automated tax deductions, social security, and direct bank transfers.",
    tone: "emerald" as const,
    badge: "Payroll",
  },
  {
    icon: "userCheck" as const,
    title: "Self-Service Portal",
    description:
      "Empower employees to update personal info, view payslips, and request leave without HR intervention.",
    tone: "violet" as const,
    badge: "Experience",
  },
  {
    icon: "lightning" as const,
    title: "Workflow Automation",
    description: "Automate repetitive tasks like onboarding checklists, approval chains, and automated reminders.",
    tone: "amber" as const,
    badge: "Automation",
  },
  {
    icon: "chartBar" as const,
    title: "Advanced Analytics",
    description:
      "Deep insights into turnover rates, department costs, and workforce performance with 50+ pre-built reports.",
    tone: "cyan" as const,
    badge: "Intelligence",
  },
] as const;

type PlatformCardTone = (typeof platformControlCards)[number]["tone"];

/** Left-edge hover sweep (top→bottom), tone-matched gradients */
const platformToneLeftSweep: Record<PlatformCardTone, string> = {
  indigo: "bg-gradient-to-b from-indigo-500 via-blue-500 to-sky-400",
  sky: "bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-500",
  emerald: "bg-gradient-to-b from-emerald-400 via-teal-500 to-cyan-500",
  violet: "bg-gradient-to-b from-violet-400 via-purple-500 to-fuchsia-500",
  amber: "bg-gradient-to-b from-amber-400 via-orange-500 to-rose-500",
  cyan: "bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600",
};

const platformToneIconSurface: Record<PlatformCardTone, string> = {
  indigo:
    "bg-gradient-to-br from-indigo-500/18 via-white to-white text-indigo-600 ring-indigo-200/75 shadow-indigo-500/10",
  sky: "bg-gradient-to-br from-sky-400/18 via-white to-white text-sky-600 ring-sky-200/75 shadow-sky-500/10",
  emerald:
    "bg-gradient-to-br from-emerald-500/18 via-white to-white text-emerald-600 ring-emerald-200/75 shadow-emerald-500/10",
  violet:
    "bg-gradient-to-br from-violet-500/18 via-white to-white text-violet-600 ring-violet-200/75 shadow-violet-500/10",
  amber: "bg-gradient-to-br from-amber-400/18 via-white to-white text-amber-600 ring-amber-200/75 shadow-amber-500/10",
  cyan: "bg-gradient-to-br from-cyan-400/18 via-white to-white text-cyan-600 ring-cyan-200/75 shadow-cyan-500/10",
};

function platformControlBentoSpan(index: number): string {
  if (index === 0) return "lg:col-span-7";
  if (index === 1) return "lg:col-span-5";
  if (index >= 2 && index <= 4) return "lg:col-span-4";
  return "lg:col-span-12";
}

const workforceWorkflowSteps = [
  {
    num: "01",
    title: "Capture Data",
    description: "Onboard employees once into the centralized secure database.",
    accent: "indigo" as const,
  },
  {
    num: "02",
    title: "Track Time",
    description: "Automated logs capture every minute worked across all locations.",
    accent: "sky" as const,
  },
  {
    num: "03",
    title: "Process Pay",
    description: "Payroll engine calculates gross-to-net instantly with zero errors.",
    accent: "emerald" as const,
  },
  {
    num: "04",
    title: "Get Insights",
    description: "Download compliance-ready reports and strategic visual insights.",
    accent: "violet" as const,
  },
] as const;

type WorkflowAccent = (typeof workforceWorkflowSteps)[number]["accent"];

const workflowBadgeSurface: Record<WorkflowAccent, string> = {
  indigo:
    "bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-[0_16px_40px_-12px_rgba(79,70,229,0.55)] ring-2 ring-white/90",
  sky: "bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-[0_16px_40px_-12px_rgba(14,165,233,0.5)] ring-2 ring-white/90",
  emerald:
    "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-[0_16px_40px_-12px_rgba(16,185,129,0.5)] ring-2 ring-white/90",
  violet:
    "bg-gradient-to-br from-violet-600 to-purple-700 text-white shadow-[0_16px_40px_-12px_rgba(124,58,237,0.5)] ring-2 ring-white/90",
};

/** Vertical rail segment color (mobile): gradient from this step toward the next */
const workflowRailToNext: Record<WorkflowAccent, string> = {
  indigo: "from-indigo-400 via-sky-400 to-sky-400",
  sky: "from-sky-400 via-emerald-400 to-emerald-400",
  emerald: "from-emerald-400 via-violet-400 to-violet-400",
  violet: "from-violet-400 to-transparent",
};

const efficiencyBenefitBullets = [
  "Real-time visibility into workforce trends and costs",
  "99%+ accuracy in complex multi-country payroll",
  "Reduce manual admin effort by up to 70%",
  "Built-in compliance monitoring for local labor laws",
  "Scalable infrastructure that grows with your business",
] as const;

const efficiencyHighlightCards = [
  {
    icon: "trendUp" as const,
    title: "Fast Setup",
    description: "Go live in as little as 14 days with our migration tools.",
    accent: "blue" as const,
    staggerClass: "" as const,
  },
  {
    icon: "cloud" as const,
    title: "Cloud-Native",
    description: "Access your data securely from anywhere, anytime.",
    accent: "cyan" as const,
    staggerClass: "lg:translate-y-6" as const,
  },
  {
    icon: "shieldCheck" as const,
    title: "Enterprise Grade",
    description: "SOC2 Type II & GDPR compliant.",
    accent: "indigo" as const,
    staggerClass: "lg:translate-y-2" as const,
  },
  {
    icon: "userBadge" as const,
    title: "Employee First",
    description: "Mobile app with 4.9/5 user rating.",
    accent: "violet" as const,
    staggerClass: "lg:translate-y-8" as const,
  },
] as const;

type EfficiencyHighlightAccent = (typeof efficiencyHighlightCards)[number]["accent"];

const efficiencyHighlightTopBar: Record<EfficiencyHighlightAccent, string> = {
  blue: "before:bg-gradient-to-r before:from-blue-500 before:via-indigo-500 before:to-blue-600",
  cyan: "before:bg-gradient-to-r before:from-cyan-400 before:via-sky-500 before:to-blue-600",
  indigo: "before:bg-gradient-to-r before:from-indigo-500 before:via-violet-500 before:to-indigo-600",
  violet: "before:bg-gradient-to-r before:from-violet-500 before:via-fuchsia-500 before:to-purple-600",
};

const efficiencyHighlightIconTile: Record<EfficiencyHighlightAccent, string> = {
  blue: "bg-gradient-to-br from-blue-500/14 via-white to-white text-blue-600 ring-blue-200/85 shadow-blue-500/10",
  cyan: "bg-gradient-to-br from-cyan-500/14 via-white to-white text-cyan-600 ring-cyan-200/85 shadow-cyan-500/10",
  indigo: "bg-gradient-to-br from-indigo-500/14 via-white to-white text-indigo-600 ring-indigo-200/85 shadow-indigo-500/10",
  violet: "bg-gradient-to-br from-violet-500/14 via-white to-white text-violet-600 ring-violet-200/85 shadow-violet-500/10",
};

const businessImpactStats = [
  { value: "90%", label: "Reduction in payroll errors", badge: "+25% Accuracy", accent: "sky" as const },
  { value: "70%", label: "Admin time saved weekly", badge: "~40hrs Saved", accent: "cyan" as const },
  { value: "15x", label: "Faster payroll processing", badge: "Instant Sync", accent: "amber" as const },
  { value: "100%", label: "Compliance confidence", badge: "Audit Ready", accent: "emerald" as const },
] as const;

type ImpactStatAccent = (typeof businessImpactStats)[number]["accent"];

const impactStatAccentTop: Record<ImpactStatAccent, string> = {
  sky: "before:from-sky-400 before:via-cyan-300 before:to-transparent",
  cyan: "before:from-cyan-400 before:via-sky-400 before:to-transparent",
  amber: "before:from-amber-400 before:via-orange-400 before:to-transparent",
  emerald: "before:from-emerald-400 before:via-teal-300 before:to-transparent",
};

const impactStatValueColor: Record<ImpactStatAccent, string> = {
  sky: "text-sky-300 group-hover:text-sky-200",
  cyan: "text-cyan-300 group-hover:text-cyan-200",
  amber: "text-amber-300 group-hover:text-amber-200",
  emerald: "text-emerald-300 group-hover:text-emerald-200",
};

const impactStatOrb: Record<ImpactStatAccent, string> = {
  sky: "bg-sky-400/25",
  cyan: "bg-cyan-400/25",
  amber: "bg-amber-400/20",
  emerald: "bg-emerald-400/22",
};

const impactStatBadgeStyle: Record<ImpactStatAccent, string> = {
  sky: "bg-sky-500/25 text-sky-50 ring-sky-400/45 group-hover:bg-sky-500/35 group-hover:ring-sky-300/55",
  cyan: "bg-cyan-500/25 text-cyan-50 ring-cyan-400/45 group-hover:bg-cyan-500/35 group-hover:ring-cyan-300/55",
  amber: "bg-amber-500/25 text-amber-50 ring-amber-400/40 group-hover:bg-amber-500/35 group-hover:ring-amber-300/50",
  emerald: "bg-emerald-500/25 text-emerald-50 ring-emerald-400/45 group-hover:bg-emerald-500/35 group-hover:ring-emerald-300/55",
};

const ecosystemStackMarks = [
  { name: "SAP", id: "sap" as const },
  { name: "Snowflake", id: "snowflake" as const },
  { name: "Microsoft 365", id: "grid" as const },
  { name: "Workday", id: "workday" as const },
  { name: "Oracle NetSuite", id: "chain" as const },
  { name: "ServiceNow", id: "orbit" as const },
] as const;

/** Top-edge hover sweep (L→R) — gradient strip on ::before */
const painPointToneTopStrip: Record<(typeof painPointCards)[number]["tone"], string> = {
  rose: "before:bg-gradient-to-r before:from-rose-500 before:via-rose-400 before:to-pink-400",
  amber: "before:bg-gradient-to-r before:from-amber-500 before:via-orange-400 before:to-amber-300",
  violet: "before:bg-gradient-to-r before:from-violet-500 before:via-purple-400 before:to-fuchsia-400",
  indigo: "before:bg-gradient-to-r before:from-indigo-500 before:via-blue-500 before:to-sky-400",
};

const painPointToneIconSurface: Record<(typeof painPointCards)[number]["tone"], string> = {
  rose: "bg-gradient-to-br from-rose-500/[0.14] via-white to-white ring-rose-200/85",
  amber: "bg-gradient-to-br from-amber-500/[0.14] via-white to-white ring-amber-200/85",
  violet: "bg-gradient-to-br from-violet-500/[0.14] via-white to-white ring-violet-200/85",
  indigo: "bg-gradient-to-br from-indigo-500/[0.14] via-white to-white ring-indigo-200/85",
};

const painPointToneIconColor: Record<(typeof painPointCards)[number]["tone"], string> = {
  rose: "text-rose-600",
  amber: "text-amber-600",
  violet: "text-violet-600",
  indigo: "text-indigo-600",
};

const painPointToneIconHover: Record<(typeof painPointCards)[number]["tone"], string> = {
  rose: "hover:text-rose-700 hover:ring-rose-300/90",
  amber: "hover:text-amber-700 hover:ring-amber-300/90",
  violet: "hover:text-violet-700 hover:ring-violet-300/90",
  indigo: "hover:text-indigo-700 hover:ring-indigo-300/90",
};

function PainPointIcon({ name, className }: { name: (typeof painPointCards)[number]["icon"]; className: string }) {
  const c = `h-6 w-6 ${className}`;
  if (name === "database") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    );
  }
  if (name === "alert") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    );
  }
  if (name === "grid") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function PlatformControlIcon({
  name,
  className = "h-6 w-6 text-current",
}: {
  name: (typeof platformControlCards)[number]["icon"];
  className?: string;
}) {
  const c = className;
  if (name === "userPlus") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    );
  }
  if (name === "clock") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (name === "creditCard") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    );
  }
  if (name === "userCheck") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17l2 2 4-4" />
      </svg>
    );
  }
  if (name === "lightning") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function EfficiencyHighlightIcon({
  name,
  className = "h-7 w-7 text-current",
}: {
  name: (typeof efficiencyHighlightCards)[number]["icon"];
  className?: string;
}) {
  const c = className;
  if (name === "trendUp") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    );
  }
  if (name === "cloud") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    );
  }
  if (name === "shieldCheck") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

function EcosystemStackMark({ id }: { id: (typeof ecosystemStackMarks)[number]["id"] }) {
  const c = "h-10 w-[6rem] sm:h-11 sm:w-[6.8rem] lg:h-12 lg:w-[7.4rem]";
  if (id === "sap") {
    return (
      <svg className={c} viewBox="0 0 24 24" fill="currentColor" aria-hidden style={{ color: `#${siSap.hex}` }}>
        <path d={siSap.path} />
      </svg>
    );
  }
  if (id === "snowflake") {
    return (
      <svg className={c} viewBox="0 0 24 24" fill="currentColor" aria-hidden style={{ color: `#${siSnowflake.hex}` }}>
        <path d={siSnowflake.path} />
      </svg>
    );
  }
  if (id === "grid") {
    return (
      <svg className={c} viewBox="0 0 96 32" fill="none" aria-hidden>
        <rect x="22" y="8" width="7" height="7" rx="1.3" fill="#F25022" />
        <rect x="31.5" y="8" width="7" height="7" rx="1.3" fill="#7FBA00" />
        <rect x="22" y="17.5" width="7" height="7" rx="1.3" fill="#00A4EF" />
        <rect x="31.5" y="17.5" width="7" height="7" rx="1.3" fill="#FFB900" />
        <text x="48" y="20" fill="#64748B" fontSize="8" fontWeight="700" fontFamily="Arial, sans-serif">
          365
        </text>
      </svg>
    );
  }
  if (id === "workday") {
    return (
      <svg className={c} viewBox="0 0 96 32" fill="none" aria-hidden>
        <path d="M25 20 32 9l7 11" stroke="#F38B00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 9.5c2.4-3 5.9-4.5 10-4.5s7.6 1.5 10 4.5" stroke="#F38B00" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "chain") {
    return (
      <svg className={c} viewBox="0 0 112 32" fill="none" aria-hidden>
        <circle cx="26" cy="16" r="6" stroke="#C74634" strokeWidth="2.2" />
        <circle cx="40" cy="16" r="6" stroke="#C74634" strokeWidth="2.2" />
        <path d="M32 16h2" stroke="#C74634" strokeWidth="2.2" strokeLinecap="round" />
        <text x="52" y="20" fill="#64748B" fontSize="7.5" fontWeight="700" fontFamily="Arial, sans-serif">
          NETSUITE
        </text>
      </svg>
    );
  }
  return (
    <svg className={c} viewBox="0 0 96 32" fill="none" aria-hidden>
      <circle cx="28" cy="16" r="8" stroke="#1BB8F1" strokeWidth="2.2" />
      <path d="M28 11v10M23 14.5c1.8 3 3.5 4.5 5 4.5s3.2-1.5 5-4.5" stroke="#1BB8F1" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function LabourHeroDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-[20%] top-0 h-[min(520px,85vw)] w-[min(680px,120vw)] rounded-full bg-gradient-to-br from-sky-100/90 via-blue-50/50 to-transparent blur-3xl" />
      <div className="absolute -right-[10%] top-[15%] h-[min(380px,70vw)] w-[min(520px,90vw)] rounded-full bg-gradient-to-bl from-indigo-100/35 via-transparent to-transparent blur-3xl" />
      <svg
        className="absolute bottom-0 left-0 right-0 h-20 w-full text-sky-200/45 sm:h-28"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0 80 C 180 40 360 100 540 70 C 720 40 900 95 1080 65 C 1260 35 1380 55 1440 45 L 1440 100 L 0 100 Z"
        />
      </svg>
      <svg
        className="absolute bottom-2 left-0 right-0 h-16 w-full text-blue-100/50 sm:h-24"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0 70 C 220 95 440 35 660 60 C 880 85 1100 30 1320 55 C 1380 62 1410 58 1440 52 L 1440 90 L 0 90 Z"
        />
      </svg>
    </div>
  );
}

export default function LabourManagementPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">
        <motion.section
          className="relative w-full border-b border-slate-100 bg-white pt-6 sm:pt-8 lg:pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <LabourHeroDecor />
          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.06 }}
          >
            <div className="relative min-h-[400px] w-full sm:min-h-[420px] lg:min-h-[min(520px,85vh)]">
              <div className="relative mt-8 h-56 w-full sm:h-64 sm:mt-10 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-[52%]">
                {/* Inner clip for rounded corners; popups stay outside so they are not clipped (see VideoLivePopups). */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-[0_24px_60px_-38px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70 lg:rounded-none lg:shadow-none lg:ring-0">
                  <video
                    className="absolute inset-0 h-full w-full scale-[1.01] object-cover object-[center_35%] mt-15 sm:object-center lg:object-[center_38%]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={labourHeroRightBackground}
                    aria-label="Labour management and HRIS — unified workforce, attendance, and payroll"
                  >
                    <source src={labourHeroRightVideo} type="video/mp4" />
                  </video>
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/[0.03] via-transparent to-sky-900/[0.04]"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-32 lg:block lg:w-44 xl:w-52"
                    aria-hidden
                  />
                </div>
               
                <VideoLivePopups
                  popups={[
                    {
                      position: "top-left",
                      label: "Live",
                      title: "Workforce sync",
                      
                      accent: "emerald",
                      animateOnMount: true,
                    },
                    {
                      position: "bottom-right",
                      label: "Today",
                      title: "Roster updated",
                      // subtitle: "All sites reporting",
                      className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-10 xl:-right-2",
                      variant: "icon",
                      icon: "person",
                      accent: "blue",
                      animateOnMount: true,
                    },
                  ]}
                />
              </div>
              <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                <div className="max-w-3xl px-1 py-8 sm:px-3 sm:py-10 lg:max-w-[26rem] xl:max-w-xl lg:py-[4.25rem] lg:pr-8">
                  <FlyInText
                    as="span"
                    trigger="mount"
                    direction="down"
                    duration={0.55}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-800 shadow-sm backdrop-blur-sm"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
                    HR Information System (HRIS)
                  </FlyInText>

                  <FlyInText
                    as="h1"
                    trigger="mount"
                    direction="left"
                    delay={0.06}
                    duration={0.68}
                    className="mt-4 flex flex-col gap-1 text-slate-900 sm:mt-5 sm:gap-1.5"
                  >
                    <span className="text-slate-900 whitespace-nowrap">
                      Total Workforce  <br /> Management                     <span className="text-[color:var(--inops-blue)]">Simplified.</span>

                    </span>
                  </FlyInText>

                  <FlyInText
                    as="p"
                    trigger="mount"
                    direction="up"
                    delay={0.12}
                    duration={0.62}
                    className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-[1.06rem]"
                  >
                    One platform for employee records, attendance, payroll, and day-to-day workforce ops—fast to run and
                    structured for compliance.
                  </FlyInText>

                  <FlyInText
                    as="div"
                    trigger="mount"
                    direction="up"
                    delay={0.18}
                    duration={0.58}
                    className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
                  >
                    <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-[color:var(--inops-blue)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,95,191,0.55)] transition-[background-color,box-shadow] duration-300 hover:bg-[color:var(--inops-navy)] hover:shadow-[0_14px_32px_-10px_rgba(15,47,87,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--inops-blue)]"
                      >
                        Request a Free Demo
                      </Link>
                    </motion.div>
                  </FlyInText>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <ConnectedEcosystemSection />

        {/* Pain points — disconnected systems */}
        <section
          className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24"
          aria-labelledby="labour-pain-points-heading"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-rose-100/35 blur-3xl" />
            <div className="absolute -right-32 top-1/3 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-violet-100/30 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-px w-full max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center lg:max-w-4xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm backdrop-blur-sm">
                The hidden cost
              </span>
              <h2 id="labour-pain-points-heading" className="mt-5 text-balance text-slate-900">
                <span className="block sm:inline">Disconnected Systems.</span>{" "}
                <span className="block sm:inline">Manual Work.</span>{" "}
                <span className="mt-1 block font-semibold text-rose-900 sm:mt-0 sm:inline">
                  Costly Errors.
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Stop losing hours to spreadsheets and fragmented HR tools. Unify data and decisions in{" "}
                <span className="font-semibold text-slate-800">one source of truth</span>—before errors become audits.
              </p>
            </motion.div>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-7">
              {painPointCards.map((card, i) => (
                <motion.article
                  key={card.title}
                  className={`group relative flex min-h-[220px] flex-col overflow-hidden rounded-[1.35rem] border border-slate-200/75 bg-white/95 p-6 shadow-[0_22px_56px_-32px_rgba(15,23,42,0.2)] ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-[3px] before:origin-left before:scale-x-0 before:transition-transform before:duration-700 before:ease-[cubic-bezier(0.33,1,0.68,1)] before:content-[''] group-hover:before:scale-x-100 sm:min-h-[240px] sm:p-7 ${painPointToneTopStrip[card.tone]}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.48, ease: smoothEase, delay: Math.min(i * 0.07, 0.24) }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 32px 70px -36px rgba(15, 23, 42, 0.26)",
                    transition: { duration: 0.32, ease: smoothEase },
                  }}
                >
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 z-0 h-36 w-36 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                    style={{
                      background:
                        card.tone === "rose"
                          ? "radial-gradient(circle, rgba(244,63,94,0.12) 0%, transparent 70%)"
                          : card.tone === "amber"
                            ? "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)"
                            : card.tone === "violet"
                              ? "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)"
                              : "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
                    }}
                  />
                  <div className="relative z-[2] flex items-start justify-between gap-3">
                    <span
                      className={`relative inline-flex h-14 w-14 shrink-0 cursor-default items-center justify-center rounded-2xl ring-1 ${painPointToneIconSurface[card.tone]} ${painPointToneIconColor[card.tone]} ${painPointToneIconHover[card.tone]} shadow-sm transition-[transform,box-shadow,color] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.06] group-hover:shadow-[0_12px_28px_-14px_rgba(15,23,42,0.28)] group-hover:ring-2`}
                    >
                      <PainPointIcon name={card.icon} className="text-current" />
                    </span>
                    <span
                      className="rounded-full border border-slate-200/90 bg-slate-50/90 px-2.5 py-1 text-[11px] font-bold tabular-nums text-slate-500 ring-1 ring-slate-100"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="relative mt-5 text-slate-900">{card.title}</h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    {card.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* One platform — complete workforce control */}
        <section
          className="relative overflow-hidden border-t border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-20 lg:py-24"
          aria-labelledby="labour-platform-control-heading"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-20 top-0 h-[32rem] w-[32rem] rounded-full bg-indigo-600/20 blur-[100px]" />
            <div className="absolute -right-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[100px]" />
            <div className="absolute bottom-0 left-1/2 h-64 w-[min(90%,56rem)] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center lg:max-w-4xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 shadow-lg shadow-slate-950/30 backdrop-blur-sm">
                Unified platform
              </span>
              <h2 id="labour-platform-control-heading" className="mt-5 text-balance text-white">
                One Platform.{" "}
                <span className="font-semibold text-slate-300">
                  Complete Workforce Control.
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Everything you need to hire, manage, and pay your team in record time—modules that connect out of the
                box, not another pile of integrations.
              </p>
            </motion.div>

            <div className="mt-14 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-6">
              {platformControlCards.map((card, i) => {
                const isLead = i === 0;
                const isWide = i === 5;
                const iconBox =
                  isLead ? "h-16 w-16 rounded-2xl shadow-lg" : isWide ? "h-[4.5rem] w-[4.5rem] rounded-2xl shadow-lg" : "h-14 w-14 rounded-2xl shadow-md";
                const iconSvg =
                  isLead ? "h-8 w-8 text-current" : isWide ? "h-9 w-9 text-current" : "h-6 w-6 text-current";

                return (
                  <motion.article
                    key={card.title}
                    className={`group relative flex overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.97] p-6 shadow-[0_28px_80px_-36px_rgba(0,0,0,0.65)] ring-1 ring-white/40 sm:p-7 ${platformControlBentoSpan(i)} ${isWide ? "lg:flex-row lg:items-center lg:gap-10 lg:p-8 xl:p-10" : "flex-col"} ${isLead ? "lg:min-h-[280px]" : ""}`}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, ease: smoothEase, delay: Math.min(i * 0.06, 0.28) }}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 36px 90px -40px rgba(0, 0, 0, 0.55)",
                      transition: { duration: 0.32, ease: smoothEase },
                    }}
                  >
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 z-[25] w-[4px] overflow-hidden rounded-l-[1.35rem]"
                      aria-hidden
                    >
                      <div
                        className={`h-full w-full origin-top scale-y-0 rounded-l-[1.35rem] transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-y-100 ${platformToneLeftSweep[card.tone]}`}
                      />
                    </div>
                    <div
                      className={`pointer-events-none absolute -right-10 -top-10 z-0 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                      style={{
                        background:
                          card.tone === "indigo"
                            ? "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)"
                            : card.tone === "sky"
                              ? "radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)"
                              : card.tone === "emerald"
                                ? "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)"
                                : card.tone === "violet"
                                  ? "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)"
                                  : card.tone === "amber"
                                    ? "radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)"
                                    : "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
                      }}
                      aria-hidden
                    />
                    <div
                      className={`relative z-10 flex shrink-0 ${isWide ? "lg:w-auto" : ""} ${isWide ? "" : "items-start justify-between gap-4"} ${!isWide ? "w-full" : ""}`}
                    >
                      <span
                        className={`relative inline-flex ${iconBox} items-center justify-center ring-1 ${platformToneIconSurface[card.tone]} transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105`}
                      >
                        <PlatformControlIcon name={card.icon} className={iconSvg} />
                      </span>
                      {!isWide ? (
                        <span className="rounded-full border border-slate-200/90 bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          {card.badge}
                        </span>
                      ) : null}
                    </div>
                    <div className={`relative z-10 mt-5 flex flex-1 flex-col ${isWide ? "lg:mt-0 lg:min-w-0 lg:flex-1" : ""}`}>
                      {isWide ? (
                        <span className="mb-2 inline-flex w-fit rounded-full border border-cyan-200/90 bg-cyan-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-700">
                          {card.badge}
                        </span>
                      ) : null}
                      <h3 className="font-bold tracking-tight text-slate-900">
                        {card.title}
                      </h3>
                      <p
                        className={`mt-3 leading-relaxed text-slate-600 ${isLead ? "text-[15px] sm:text-base" : isWide ? "text-base sm:text-[17px] lg:max-w-3xl" : "text-sm sm:text-[15px]"}`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Simple workflow — four steps */}
        <section
          className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-white via-slate-50/90 to-sky-50/50 py-16 sm:py-20 lg:py-24"
          aria-labelledby="labour-workflow-steps-heading"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-200/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center lg:max-w-4xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm backdrop-blur-sm">
                End-to-end flow
              </span>
              <h2 id="labour-workflow-steps-heading" className="mt-5 text-balance text-slate-900">
                <span className="text-slate-900">Simple.</span>{" "}
                <span className="font-semibold text-[color:var(--inops-blue)]">
                  Automated.
                </span>{" "}
                <span className="text-slate-900">Accurate.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                A four-step pipeline from first record to payroll insight—designed to run{" "}
                <span className="font-semibold text-slate-800">without manual rework</span>.
              </p>
            </motion.div>

            {/* Desktop / lg: horizontal pipeline */}
            <div className="relative mx-auto mt-16 hidden max-w-6xl lg:mt-20 lg:block xl:max-w-7xl">
              <div
                className="pointer-events-none absolute left-[10%] right-[10%] top-[2.125rem] z-0 h-[4px] rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 via-emerald-400 to-violet-500 opacity-75 shadow-[0_0_24px_rgba(99,102,241,0.25)]"
                aria-hidden
              />
              <ol className="relative z-10 grid grid-cols-4 gap-6 xl:gap-8">
                {workforceWorkflowSteps.map((step, i) => (
                  <motion.li
                    key={step.num}
                    className="group flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.48, ease: smoothEase, delay: Math.min(i * 0.09, 0.27) }}
                  >
                    <div
                      className={`relative flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-2xl text-base font-bold tabular-nums tracking-tight transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110 group-hover:-translate-y-1 ${workflowBadgeSurface[step.accent]}`}
                    >
                      {step.num}
                      <span
                        className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60"
                        style={{
                          background:
                            step.accent === "indigo"
                              ? "linear-gradient(135deg, rgba(99,102,241,0.5), rgba(59,130,246,0.4))"
                              : step.accent === "sky"
                                ? "linear-gradient(135deg, rgba(14,165,233,0.5), rgba(37,99,235,0.4))"
                                : step.accent === "emerald"
                                  ? "linear-gradient(135deg, rgba(16,185,129,0.5), rgba(20,184,166,0.4))"
                                  : "linear-gradient(135deg, rgba(124,58,237,0.5), rgba(168,85,247,0.4))",
                        }}
                        aria-hidden
                      />
                    </div>
                    <h3 className="mt-7 text-slate-900">{step.title}</h3>
                    <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-slate-600 xl:max-w-[260px] xl:text-[15px]">
                      {step.description}
                    </p>
                  </motion.li>
                ))}
              </ol>
            </div>

            {/* Mobile / tablet: vertical timeline */}
            <ol className="relative mx-auto mt-14 max-w-lg space-y-0 lg:hidden">
              {workforceWorkflowSteps.map((step, i) => {
                const isLast = i === workforceWorkflowSteps.length - 1;
                return (
                  <motion.li
                    key={step.num}
                    className="relative flex gap-5 pb-12 last:pb-0 sm:gap-6"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.48, ease: smoothEase, delay: Math.min(i * 0.07, 0.21) }}
                  >
                    <div className="flex w-[4.25rem] shrink-0 flex-col items-center sm:w-[4.5rem]">
                      <div
                        className={`relative flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-2xl text-base font-bold tabular-nums text-white shadow-lg sm:h-[4.5rem] sm:w-[4.5rem] ${workflowBadgeSurface[step.accent]}`}
                      >
                        {step.num}
                      </div>
                      {!isLast ? (
                        <div
                          className={`mt-3 min-h-[3.5rem] w-[3px] flex-1 rounded-full bg-gradient-to-b ${workflowRailToNext[step.accent]}`}
                          aria-hidden
                        />
                      ) : null}
                    </div>
                    <div className="min-w-0 flex-1 pb-12 pt-1 last:pb-0 sm:pt-2">
                      <h3 className="text-slate-900">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{step.description}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Built for efficiency — split layout */}
        <section className="border-t border-slate-200/80 bg-white py-14 lg:py-16" aria-labelledby="labour-efficiency-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
              <motion.div
                className="border-l-2 border-[color:var(--inops-blue)]/25 pl-5 sm:pl-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <h2 id="labour-efficiency-heading" className="text-slate-900">
                  Built for{" "}
                  <span className="text-[color:var(--inops-blue)]">Efficiency</span> and Control
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  Designed for HR leaders who want accuracy without the busywork—clear workflows, defensible numbers, and
                  teams that move faster.
                </p>
                <ul className="mt-8 space-y-4">
                  {efficiencyBenefitBullets.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[color:var(--inops-blue)] ring-1 ring-blue-200/90 ring-offset-1 ring-offset-white">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm leading-relaxed text-slate-700 sm:text-base">{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-9 inline-flex items-center justify-center rounded-xl bg-[color:var(--inops-blue)] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-900/15 transition-[background-color,box-shadow] hover:bg-[color:var(--inops-navy)] hover:shadow-lg hover:shadow-blue-900/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--inops-blue)]"
                >
                  Learn More About Benefits
                </Link>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
              >
                {efficiencyHighlightCards.map((card, i) => (
                  <motion.article
                    key={card.title}
                    className={`group relative flex min-h-[200px] flex-col overflow-hidden rounded-[1.35rem] border border-slate-200/75 bg-white/95 p-6 shadow-[0_22px_56px_-34px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:content-[''] sm:min-h-[210px] sm:p-7 ${efficiencyHighlightTopBar[card.accent]} ${card.staggerClass}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.46, ease: smoothEase, delay: Math.min(0.06 + i * 0.07, 0.28) }}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 28px 64px -36px rgba(15, 23, 42, 0.22)",
                      transition: { duration: 0.3, ease: smoothEase },
                    }}
                  >
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          card.accent === "blue"
                            ? "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)"
                            : card.accent === "cyan"
                              ? "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)"
                              : card.accent === "indigo"
                                ? "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)"
                                : "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
                      }}
                      aria-hidden
                    />
                    <span
                      className={`relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105 ${efficiencyHighlightIconTile[card.accent]}`}
                    >
                      <EfficiencyHighlightIcon name={card.icon} className="h-7 w-7 text-current" />
                    </span>
                    <h3 className="relative z-10 mt-5 text-slate-900">{card.title}</h3>
                    <p className="relative z-10 mt-2 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                      {card.description}
                    </p>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Business impact — metrics */}
        <section
          className="relative overflow-hidden border-t border-slate-800 bg-slate-950 py-14 text-white lg:py-16"
          aria-labelledby="labour-business-impact-heading"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-sky-600/15 blur-[100px]" />
            <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-600/12 blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(56,189,248,0.12),transparent_55%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Proof points</p>
                <h2 id="labour-business-impact-heading" className="mt-3">
                  See the{" "}
                  <span className="font-semibold text-slate-300">
                    Business Impact
                  </span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                  Companies that switch to our platform report significant improvements across every core HR metric within
                  the first quarter.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-[0_14px_40px_-16px_rgba(255,255,255,0.35)] ring-1 ring-white/30 transition-[background-color,box-shadow,transform] duration-300 hover:bg-sky-50 hover:shadow-[0_18px_50px_-14px_rgba(56,189,248,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:w-auto"
                >
                  Download Impact Report
                </Link>
              </motion.div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
              {businessImpactStats.map((stat, i) => (
                <motion.article
                  key={stat.label}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:opacity-60 before:transition-opacity before:duration-300 before:content-[''] group-hover:before:opacity-100 ${impactStatAccentTop[stat.accent]}`}
                  initial={{ opacity: 0, y: 26, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={viewport}
                  transition={{
                    duration: 0.52,
                    ease: smoothEase,
                    delay: Math.min(i * 0.09, 0.27),
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 28px 60px -24px rgba(15, 23, 42, 0.85), 0 0 0 1px rgba(56, 189, 248, 0.15)",
                    transition: { duration: 0.32, ease: smoothEase },
                  }}
                >
                  <div
                    className={`pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${impactStatOrb[stat.accent]}`}
                    aria-hidden
                  />
                  <motion.p
                    className={`relative text-3xl font-bold tabular-nums transition-[color,filter] duration-300 sm:text-[2rem] ${impactStatValueColor[stat.accent]} group-hover:drop-shadow-[0_0_22px_rgba(255,255,255,0.12)]`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{
                      duration: 0.45,
                      ease: smoothEase,
                      delay: Math.min(0.12 + i * 0.08, 0.32),
                    }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="relative mt-3 text-sm font-medium leading-snug text-white/95 transition-colors duration-300 group-hover:text-white sm:text-base">
                    {stat.label}
                  </p>
                  <p
                    className={`relative mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 transition-all duration-300 ${impactStatBadgeStyle[stat.accent]}`}
                  >
                    {stat.badge}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem & integrations — logo strip */}
        <section
          className="border-t border-slate-200/80 bg-white py-12 lg:py-14"
          aria-labelledby="labour-ecosystem-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-[0.95rem]">
                Ecosystem &amp; Integrations
              </p>
              <h2
                id="labour-ecosystem-heading"
                className="mt-3 text-[2rem] font-bold tracking-tight text-slate-900 sm:text-[2.25rem] lg:text-[2.5rem]"
              >
                Works Seamlessly With Your Stack
              </h2>
            </motion.div>
            <motion.div
              className="mt-11 flex flex-wrap items-center justify-center gap-x-12 gap-y-9 sm:gap-x-14 lg:gap-x-16"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 }}
            >
              {ecosystemStackMarks.map((partner) => (
                <div key={partner.name} className="flex flex-col items-center gap-2.5">
                  <EcosystemStackMark id={partner.id} />
                  <span className="text-center text-xs font-medium uppercase tracking-wide text-slate-400 sm:text-[0.84rem]">
                    {partner.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Designed for simplicity — UI previews */}
        <section
          className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-slate-100/90 via-white to-[#f0f9ff] py-20 lg:py-24"
          aria-labelledby="labour-simplicity-heading"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 0v72M0 36h72' stroke='%2394a3b8' stroke-opacity='0.06' stroke-width='1'/%3E%3C/svg%3E")` }} />
            <div className="absolute left-[15%] top-0 h-[28rem] w-[28rem] rounded-full bg-blue-200/35 blur-[120px]" />
            <div className="absolute bottom-0 right-[12%] h-[26rem] w-[26rem] rounded-full bg-indigo-200/30 blur-[110px]" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/25 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-2xl text-center lg:max-w-3xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.52, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--inops-blue)] shadow-[0_8px_32px_-16px_rgba(29,95,191,0.35)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--inops-blue)] shadow-[0_0_8px_rgba(29,95,191,0.8)]" />
                Product preview
              </span>
              <h2 id="labour-simplicity-heading" className="mt-5 text-slate-900">
                Designed for{" "}
                <span className="font-semibold text-[color:var(--inops-blue)]">
                  Simplicity
                </span>
              </h2>
              <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-[color:var(--inops-blue)] via-sky-400 to-cyan-400 opacity-90 shadow-sm shadow-sky-500/30" />
              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Complex operations behind an intuitive, elegant interface that anyone can use.
              </p>
            </motion.div>

            <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-3 lg:gap-8">
              <motion.div
                className="group/card relative flex flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/70 p-6 shadow-[0_32px_72px_-44px_rgba(15,23,42,0.28)] ring-1 ring-white/80 backdrop-blur-xl before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-sky-400 before:via-blue-500 before:to-indigo-600 before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:rounded-[1.5rem] after:shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-7"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.05 }}
                whileHover={{
                  y: -10,
                  scale: 1.01,
                  boxShadow: "0 36px 80px -40px rgba(15, 23, 42, 0.35)",
                  transition: { duration: 0.38, ease: smoothEase },
                }}
              >
                <div className="pointer-events-none absolute -right-20 top-20 h-48 w-48 rounded-full bg-gradient-to-br from-sky-400/20 to-blue-600/5 blur-3xl transition-opacity duration-700 group-hover/card:opacity-100" aria-hidden />
                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">People</p>
                    <h3 className="mt-1 text-slate-900">Employee Directory</h3>
                  </div>
                  <span className="flex shrink-0 items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50/90 px-2.5 py-1 shadow-sm ring-1 ring-emerald-500/10 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-emerald-800">Live</span>
                  </span>
                </div>
                <ul className="relative mt-7 space-y-2.5" aria-label="Sample directory rows">
                  {[
                    {
                      initials: "AK",
                      hue: "bg-gradient-to-br from-sky-400 to-blue-700 text-white shadow-lg shadow-sky-500/30 ring-2 ring-white/90",
                      name: "Arjun Kumar",
                      role: "Senior Analyst",
                      bar: "from-sky-400 to-blue-600",
                    },
                    {
                      initials: "MR",
                      hue: "bg-gradient-to-br from-violet-400 to-purple-700 text-white shadow-lg shadow-violet-500/30 ring-2 ring-white/90",
                      name: "Meera Rao",
                      role: "HR Specialist",
                      bar: "from-violet-400 to-fuchsia-600",
                    },
                    {
                      initials: "LS",
                      hue: "bg-gradient-to-br from-emerald-400 to-teal-700 text-white shadow-lg shadow-emerald-500/30 ring-2 ring-white/90",
                      name: "Laksh Singh",
                      role: "Payroll Ops",
                      bar: "from-emerald-400 to-cyan-600",
                    },
                  ].map((row, i) => (
                    <motion.li
                      key={row.initials}
                      className={`group/row relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-100/90 bg-gradient-to-r from-white to-slate-50/90 px-3 py-3 shadow-sm ring-1 ring-slate-900/[0.03] transition-all duration-300 hover:border-sky-200/90 hover:shadow-md hover:shadow-sky-500/10`}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.42, ease: smoothEase, delay: 0.1 + i * 0.07 }}
                    >
                      <span
                        className={`pointer-events-none absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b opacity-0 transition-opacity duration-300 group-hover/row:opacity-100 ${row.bar}`}
                        aria-hidden
                      />
                      <span
                        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold ${row.hue}`}
                      >
                        {row.initials}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold tracking-tight text-slate-900">{row.name}</p>
                        <p className="truncate text-xs font-medium text-slate-500">{row.role}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-gradient-to-r from-sky-500/12 to-blue-600/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-sky-800 ring-1 ring-sky-300/50 backdrop-blur-[2px]">
                        Active
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="group/card relative flex flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/70 p-6 shadow-[0_32px_72px_-44px_rgba(15,23,42,0.28)] ring-1 ring-white/80 backdrop-blur-xl before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-emerald-400 before:via-teal-500 before:to-cyan-500 before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:rounded-[1.5rem] after:shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-7"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.08 }}
                whileHover={{
                  y: -10,
                  scale: 1.01,
                  boxShadow: "0 36px 80px -40px rgba(15, 23, 42, 0.35)",
                  transition: { duration: 0.38, ease: smoothEase },
                }}
              >
                <div className="pointer-events-none absolute -left-16 bottom-8 h-44 w-44 rounded-full bg-gradient-to-tr from-emerald-400/25 to-transparent blur-3xl transition-opacity duration-700 group-hover/card:opacity-100" aria-hidden />
                <div className="relative">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Time</p>
                  <h3 className="mt-1 text-slate-900">Attendance Logs</h3>
                </div>
                <div className="relative mt-7 overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-[inset_0_2px_12px_rgba(248,250,252,0.9),0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-slate-100/80">
                  <table className="w-full min-w-[260px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 bg-gradient-to-r from-slate-50/95 via-white to-sky-50/50 backdrop-blur-sm">
                        <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                          Date
                        </th>
                        <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                          Clock in
                        </th>
                        <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100/90 text-slate-700">
                      {[
                        { date: "Oct 24", clockIn: "09:00 AM", status: "On Time", late: false },
                        { date: "Oct 23", clockIn: "09:15 AM", status: "Late", late: true },
                        { date: "Oct 22", clockIn: "08:55 AM", status: "On Time", late: false },
                        { date: "Oct 21", clockIn: "09:00 AM", status: "On Time", late: false },
                      ].map((row) => (
                        <tr
                          key={row.date}
                          className="transition-colors duration-200 hover:bg-gradient-to-r hover:from-sky-50/90 hover:to-white"
                        >
                          <td className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">{row.date}</td>
                          <td className="whitespace-nowrap px-4 py-3 tabular-nums text-slate-600">{row.clockIn}</td>
                          <td className="px-4 py-3">
                            <span
                              className={
                                row.late
                                  ? "inline-flex rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-2.5 py-1 text-xs font-semibold text-amber-900 ring-1 ring-amber-300/70 shadow-sm"
                                  : "inline-flex rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 px-2.5 py-1 text-xs font-semibold text-emerald-900 ring-1 ring-emerald-300/70 shadow-sm"
                              }
                            >
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.div
                className="group/card relative flex flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/70 p-6 shadow-[0_32px_72px_-44px_rgba(15,23,42,0.28)] ring-1 ring-white/80 backdrop-blur-xl before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-blue-600 before:via-indigo-600 before:to-violet-600 before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:rounded-[1.5rem] after:shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-7"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.12 }}
                whileHover={{
                  y: -10,
                  scale: 1.01,
                  boxShadow: "0 36px 80px -40px rgba(15, 23, 42, 0.35)",
                  transition: { duration: 0.38, ease: smoothEase },
                }}
              >
                <div className="pointer-events-none absolute -right-16 top-28 h-44 w-44 rounded-full bg-gradient-to-bl from-blue-500/25 via-indigo-500/10 to-transparent blur-3xl" aria-hidden />
                <div className="relative">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Payroll</p>
                  <h3 className="mt-1 text-slate-900">Payroll Summary</h3>
                </div>
                <div className="relative mt-6 flex flex-1 flex-col items-center">
                  <div className="relative flex h-[10rem] w-[10rem] items-center justify-center">
                    <div className="pointer-events-none absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-blue-400/25 via-cyan-400/15 to-transparent blur-2xl" aria-hidden />
                    <svg className="relative h-full w-full -rotate-90 drop-shadow-[0_4px_24px_rgba(37,99,235,0.25)]" viewBox="0 0 36 36" aria-hidden>
                      <defs>
                        <linearGradient id="labourPayrollRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1d4ed8" />
                          <stop offset="50%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                      </defs>
                      <circle cx="18" cy="18" r="15.915" fill="none" className="stroke-slate-100" strokeWidth="3.2" />
                      <motion.circle
                        cx="18"
                        cy="18"
                        r="15.915"
                        fill="none"
                        stroke="url(#labourPayrollRingGrad)"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeDasharray="100 100"
                        initial={{ strokeDashoffset: 100 }}
                        whileInView={{ strokeDashoffset: 25 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1.15, ease: smoothEase, delay: 0.12 }}
                      />
                    </svg>
                    <motion.span
                      className="absolute text-2xl font-bold tracking-tight text-slate-900"
                      initial={{ opacity: 0, scale: 0.82 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.4 }}
                    >
                      75%
                    </motion.span>
                  </div>
                  <p className="mt-6 tabular-nums text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.7rem]">
                    <span className="text-slate-900">
                      Rs. 452,300
                    </span>
                  </p>
                  <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Total Net Pay Disbursed
                  </p>
                </div>
                <button
                  type="button"
                  className="relative mt-7 w-full overflow-hidden rounded-xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-3.5 text-sm font-semibold text-white shadow-[0_12px_36px_-16px_rgba(15,23,42,0.55)] ring-1 ring-white/10 transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100 hover:shadow-[0_16px_44px_-14px_rgba(29,95,191,0.55)] hover:ring-sky-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                  <span className="relative">View Batch Details</span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        <SolutionPageClosingCta
          headingId="labour-final-cta-heading"
          heading="Run labour and HR with less friction"
          description={
            <>
              Teams across industries use this platform to tighten scheduling, stay compliant, and pay people on time.
              Start your 14-day trial at no cost—or book a live walkthrough mapped to how you actually work.
            </>
          }
          primaryLabel="Book a tailored demo"
          secondaryLabel="Get a free consultation"
          footnote="No credit card to start · GDPR-ready · Cancel anytime"
        />
      </div>
    </MotionConfig>
  );
}
