"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { FlyInText } from "@/app/components/FlyInText";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";
import VideoLivePopups from "@/app/components/VideoLivePopups";
import SolutionHeroWaveDecor from "@/app/components/SolutionHeroWaveDecor";
import {
  SPLIT_HERO_COPY_ML,
  SPLIT_HERO_MEDIA_MR,
  SPLIT_HERO_MOBILE_COPY_ORDER,
  SPLIT_HERO_MOBILE_MEDIA_ORDER,
  SPLIT_HERO_MOBILE_STACK,
} from "@/app/lib/splitHeroWideInsets";
import { mediaVideos } from "@/app/lib/mediaAssets";
import { inopsUi } from "@/app/lib/inopsUi";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const ourModulesHeaderStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
} as const;

const ourModulesHeaderItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: smoothEase },
  },
} as const;

const ourModulesGridStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
} as const;

const ourModulesCardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
} as const;

const payrollHeroRightBackground = "/WhatsApp Image 2026-05-04 at 12.41.37 PM.jpeg";
const payrollHeroRightVideo = mediaVideos.payrollHeroDemo;
const accessGovernanceLeftVideo = mediaVideos.accessGovernanceDemo;

const comprehensiveControlCards = [
  {
    title: "Digital Onboarding",
    description:
      "Verify identities, run background checks, and digitize paperwork so every contractor is cleared and audit-ready before day one.",
    icon: "onboarding" as const,
  },
  {
    title: "Attendance & Shift Tracking",
    description:
      "Capture biometrics and shift rules at the gate, then feed clean hours straight into payroll and vendor billing.",
    icon: "clock" as const,
  },
  {
    title: "Wage & Compliance",
    description:
      "Automate minimum wage, overtime, statutory deductions, and policy checks so payouts stay defensible on every cycle.",
    icon: "scale" as const,
  },
  {
    title: "Invoice Reconciliation",
    description:
      "Match contractor invoices to verified headcount and hours, spot leakage before it hits the finance close.",
    icon: "invoice" as const,
  },
  {
    title: "Contractor Management",
    description:
      "Track licenses, renewals, and performance signals across vendors without losing sight of site-level accountability.",
    icon: "contractor" as const,
  },
] as const;

/** Matches standard cards elsewhere on this page (white surface, slate border, brand blue accents) */
const painPointTheme = {
  cardSurface:
    "border-slate-200/90 bg-white shadow-sm shadow-slate-900/[0.04] ring-1 ring-slate-900/[0.03] hover:border-blue-200/80 hover:shadow-md hover:shadow-slate-900/[0.06]",
  numBg: "bg-blue-50 text-[color:var(--inops-blue)] ring-1 ring-blue-100/80",
  iconBox: "bg-blue-50 text-blue-600 ring-1 ring-blue-100/80",
  statPill: "border border-blue-200/80 bg-blue-50/90 text-blue-800 ring-1 ring-blue-500/10",
  cornerBadge:
    "border border-blue-200/90 bg-blue-50/95 text-blue-800 ring-1 ring-blue-500/15",
} as const;

const painPoints = [
  {
    title: "Ghost workers & time theft",
    stat: "~3–5% of spend",
    cornerBadge: "Spend leak",
    description:
      "Buddy punching and proxy clock-ins hide real headcount, clean attendance data never reaches payroll.",
    icon: "users" as const,
  },
  {
    title: "Compliance violations",
    stat: "₹50K–₹1L per violation",
    cornerBadge: "Audit risk",
    description:
      "OT, wage, and incident gaps surface after the fact, audits and disputes land on your desk.",
    icon: "shield" as const,
  },
  {
    title: "Invoice chaos",
    stat: "25–30% discrepancy rate",
    cornerBadge: "Mismatch",
    description:
      "Finance burns 80–120 hrs./month matching invoices to gates and shifts instead of closing books.",
    icon: "invoice" as const,
  },
  {
    title: "System fragmentation",
    stat: "Data chaos",
    cornerBadge: "Siloed",
    description:
      "Biometrics, spreadsheets, and ERP live in silos, nothing reconciles without manual stitching.",
    icon: "layers" as const,
  },
  {
    title: "ESI / PF reconciliation & true-up",
    stat: "Manual checks",
    cornerBadge: "Filing gap",
    description:
      "Spreadsheet-driven statutory checks miss deltas until filings, errors compound across branches.",
    icon: "statutory" as const,
  },
] as const;

type PainIcon = (typeof painPoints)[number]["icon"];

function PainPointLeadIcon({ name, className }: { name: PainIcon; className?: string }) {
  const c = className ?? "h-5 w-5";
  switch (name) {
    case "users":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "shield":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "invoice":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      );
    case "layers":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
          <path d="m22 12.73-9.17 4.16a2 2 0 0 1-1.66 0L2 12.73" />
        </svg>
      );
    case "statutory":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      );
    default:
      return null;
  }
}

/** Original mosaic: row 1 = pain | photo | pain; row 2 = three pains. */
const whyInopsGridSlots = [
  { kind: "pain" as const, painIndex: 0 },
  { kind: "image" as const },
  { kind: "pain" as const, painIndex: 1 },
  { kind: "pain" as const, painIndex: 2 },
  { kind: "pain" as const, painIndex: 3 },
  { kind: "pain" as const, painIndex: 4 },
] as const;

type PainPointRow = (typeof painPoints)[number];

function WhyInopsMosaicPainCard({
  card,
  num,
  idx,
}: {
  card: PainPointRow;
  num: number;
  idx: number;
}) {
  const t = painPointTheme;
  return (
    <motion.article
      className={`group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border p-6 transition-[transform,box-shadow,border-color] duration-300 sm:min-h-[240px] sm:p-6 ${t.cardSurface}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.48, ease: smoothEase, delay: Math.min(idx * 0.05, 0.28) }}
      whileHover={{
        y: -4,
        transition: { duration: 0.3, ease: smoothEase },
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-1 rounded-t-2xl bg-[color:var(--inops-blue)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-3 top-3 z-30 sm:right-4 sm:top-4"
        aria-hidden
      >
        <span
          className={`inline-flex max-w-[9.5rem] items-center rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase leading-snug tracking-[0.14em] sm:max-w-[11rem] sm:text-[10px] sm:tracking-[0.16em] ${t.cornerBadge}`}
        >
          {card.cornerBadge}
        </span>
      </div>
      <div className="relative flex items-center gap-3 pr-16 sm:pr-20">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums ${t.numBg}`}
          aria-hidden
        >
          {num}
        </span>
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${t.iconBox}`}
        >
          <PainPointLeadIcon name={card.icon} className="h-5 w-5" />
        </span>
      </div>
      <h3 className="relative mt-5 font-semibold tracking-tight text-slate-900">{card.title}</h3>
      <span className={`relative mt-2.5 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold tabular-nums shadow-sm ${t.statPill}`}>
        {card.stat}
      </span>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-600">{card.description}</p>
    </motion.article>
  );
}

/** Horizontal “Our Module” carousel ,  image, title, description per slide */
const ourModulesSlides = [
  {
    title: "Time Attendance and Leave",
    description:
      "Track attendance in real time, apply shift and leave policies automatically, and push verified hours directly to payroll.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=85",
    alt: "Team planning attendance and leave schedules",
  },
  {
    title: "Wage/Payroll",
    description:
      "Calculate wages, statutory deductions, and overtime with audit trails that stay compliant across every pay cycle.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=85",
    alt: "Payroll and compensation dashboard",
  },
  {
    title: "Contractor Management",
    description:
      "Manage vendor profiles, manpower allocation, renewals, and site-level accountability from one centralized view.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=85",
    alt: "Contractors and supervisors on an industrial site",
  },
  {
    title: "CXO Dashboard",
    description:
      "Give leadership real-time visibility into headcount, productivity, compliance posture, and cost leakages.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85",
    alt: "Executive dashboard with operations KPIs",
  },
  {
    title: "Background Verification",
    description:
      "Verify contractor identity and documents before onboarding, with complete records ready for audits and renewals.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=85",
    alt: "Document and background verification process",
  },
  {
    title: "AI Assistance",
    description:
      "Use AI to flag anomalies, predict risks, and suggest next actions across attendance, compliance, and billing workflows.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=85",
    alt: "AI workforce analytics and assistance",
  },
  {
    title: "Compliance Report",
    description:
      "Generate ready-to-submit compliance reports for labor laws, statutory filings, and internal governance reviews.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=85",
    alt: "Compliance reports and governance analytics",
  },
  {
    title: "Challan Reconciliation",
    description:
      "Reconcile challans with attendance and wage data to detect mismatches early and prevent financial leakage.",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=85",
    alt: "Invoice and challan reconciliation review",
  },
  // {
  //   title: "Access Control & Gate Integration",
  //   description:
  //     "Connect biometrics, turnstiles, and gate events to attendance and payroll so only verified workers enter and every entry stays audit-ready.",
  //   image:
  //     "/images/77820a_f483a36175aa4407b8e94126cafb9e71~mv2.avif",
  //   hoverImage:
  //     // "/images/77820a_f483a36175aa4407b8e94126cafb9e71~mv2.avif",
  //     "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=85",

  //   alt: "Contract worker using biometric turnstile access at an industrial gate",
  // },
] as const;

/** Per-slide top accent for Capability map cards (matches `ourModulesSlides` order). */
const ourModuleCardPalettes = [
  { topBar: "from-blue-600 via-sky-500 to-cyan-500" },
  { topBar: "from-emerald-600 via-teal-500 to-cyan-500" },
  { topBar: "from-amber-500 via-orange-500 to-rose-500" },
  { topBar: "from-violet-600 via-fuchsia-500 to-pink-500" },
  { topBar: "from-cyan-500 via-sky-500 to-blue-600" },
  { topBar: "from-indigo-600 via-violet-500 to-purple-600" },
  { topBar: "from-sky-500 via-indigo-500 to-violet-600" },
  { topBar: "from-rose-500 via-amber-500 to-orange-500" },
] as const;

/** Cost leakage cards — width scales with viewport on all breakpoints. */
const leakageCardWidthClass = "w-[92vw] sm:w-[90vw] lg:w-[42vw] xl:w-[43vw] 2xl:w-[44vw]";

type LeakageSnapshotIcon =
  | "users"
  | "currency"
  | "location"
  | "vendor"
  | "clock"
  | "chart"
  | "building"
  | "clipboard"
  | "alert"
  | "leak";

const leakageSnapshotRows: ReadonlyArray<{
  label: string;
  value: string;
  icon: LeakageSnapshotIcon;
}> = [
  { label: "Number of Contractors", value: "1,000", icon: "users" },
  { label: "Avg Monthly Cost per Contractor", value: "₹15,000", icon: "currency" },
  { label: "Number of Locations", value: "6", icon: "location" },
  { label: "Active Vendor Partners", value: "24", icon: "vendor" },
  // { label: "Shifts Tracked per Day", value: "3", icon: "clock" },
  // { label: "Monthly Payroll Outflow", value: "₹1.5 Cr", icon: "chart" },
  // { label: "Avg Headcount per Site", value: "~167", icon: "building" },
  // { label: "Attendance Logs / Month", value: "~45,000", icon: "clipboard" },
  // { label: "Typical Leakage Band", value: "8–12%", icon: "alert" },
  // { label: "Projected Annual Leakage", value: "₹1.98 Cr", icon: "leak" },
];

const leakageBleedItems = [
  { label: "Ghost Workers (3%)", amount: "₹54 Lakhs", pct: 22, icon: "user-x" as const },
  { label: "Billing Errors (2%)", amount: "₹36 Lakhs", pct: 15, icon: "doc" as const },
  { label: "OT Fraud (1%)", amount: "₹18 Lakhs", pct: 8, icon: "clock" as const },
  { label: "Compliance Penalties", amount: "₹50 Lakhs", pct: 21, icon: "alert" as const },
  { label: "Admin Inefficiencies", amount: "₹40 Lakhs", pct: 17, icon: "stack" as const },
  // { label: "Duplicate Billing (0.8%)", amount: "₹14 Lakhs", pct: 6, icon: "doc" as const },
  // { label: "Rate Card Mismatches (1.2%)", amount: "₹22 Lakhs", pct: 9, icon: "stack" as const },
  // { label: "Gate–Attendance Gaps (0.5%)", amount: "₹9 Lakhs", pct: 4, icon: "user-x" as const },
] as const;

function LeakageSnapshotRowIcon({ name }: { name: LeakageSnapshotIcon }) {
  const c = "h-4 w-4";
  switch (name) {
    case "users":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "currency":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "location":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "vendor":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0h-8m8 0v2a4 4 0 01-4 4H8a4 4 0 01-4-4V6" />
        </svg>
      );
    case "clock":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case "building":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "clipboard":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case "alert":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
    case "leak":
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      );
    default:
      return null;
  }
}

type OurModuleSlide = (typeof ourModulesSlides)[number];
type OurModulePalette = (typeof ourModuleCardPalettes)[number];

function OurModuleCard({ slide, palette }: { slide: OurModuleSlide; palette: OurModulePalette }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      className="relative flex h-[19.5rem] w-full max-w-[17.5rem] flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] transition-[border-color,box-shadow] duration-300 hover:border-slate-300 hover:shadow-[0_14px_40px_-14px_rgba(15,23,42,0.22)] lg:max-w-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      whileHover={{
        y: -3,
        transition: { duration: 0.28, ease: smoothEase },
      }}
    >
      <motion.div
        className={`pointer-events-none absolute inset-x-0 top-0 z-20 h-1 rounded-t-xl bg-gradient-to-r ${palette.topBar}`}
        aria-hidden
      />
      <div className="relative w-full shrink-0 overflow-hidden bg-slate-100">
        <div className="relative h-[8.25rem] w-full shrink-0">
        <Image
          src={slide.image}
          alt=""
          fill
          className={`object-cover object-center transition-opacity duration-500 ease-out ${hovered ? "opacity-0" : "opacity-100"}`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
        />
        <Image
          src={slide.hoverImage}
          alt={slide.alt}
          fill
          className={`object-cover object-center transition-opacity duration-500 ease-out ${hovered ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
        />
        </div>
      </div>
      <div className="relative flex flex-1 flex-col px-3 pb-3 pt-3 text-center">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900">
          {slide.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-slate-600">
          {slide.description}
        </p>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-auto pt-3">
          <Link
            href="/contact"
            className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-[color:var(--inops-blue)] text-xs font-semibold text-white shadow-sm transition-[filter,box-shadow] duration-300 hover:brightness-110 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--inops-blue)]"
          >
            Know more
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}

function OurModulesCarousel() {
  return (
    <section
      className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-white !mt-0 pt-2 pb-5 sm:pt-3 sm:pb-6 lg:pt-3 lg:pb-6"
      aria-labelledby="our-modules-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-24 h-px w-[min(90%,56rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent blur-[1px]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(59,130,246,0.06),transparent_60%)]" aria-hidden />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-32 h-[min(16rem,40vw)] w-[min(80vw,40rem)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_68%)] lg:hidden"
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.9, ease: smoothEase }}
      />

      <motion.div className="relative mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">
        <motion.div
          className="mx-auto max-w-xl text-center lg:max-w-lg"
          variants={ourModulesHeaderStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span
            variants={ourModulesHeaderItem}
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/90 bg-blue-50/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-800 shadow-sm ring-1 ring-blue-500/20 backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]"
          >
            <motion.span
              className="relative flex h-1.5 w-1.5 shrink-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500/40 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--inops-blue)] shadow-[0_0_0_2px_rgba(29,95,191,0.22)]" />
            </motion.span>
            Capability map
          </motion.span>
          <motion.h2
            id="our-modules-heading"
            variants={ourModulesHeaderItem}
            className="mt-2 text-xl font-heading-bold tracking-tight sm:text-2xl"
          >
            <span className="text-slate-900">Our </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text font-semibold text-transparent">
              modules
            </span>
          </motion.h2>
          <motion.p
            variants={ourModulesHeaderItem}
            className="mx-auto mt-1.5 max-w-lg text-[10px] leading-snug text-slate-700 sm:text-[11px] sm:leading-relaxed"
          >
            End-to-end payroll and workforce capabilities, pick what you need, everything stays connected.
          </motion.p>
        </motion.div>

        <motion.ul
          className="mt-6 grid list-none grid-cols-2 gap-4 lg:mt-8 lg:grid-cols-4 lg:gap-4"
          variants={ourModulesGridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {ourModulesSlides.map((slide, si) => {
            const palette = ourModuleCardPalettes[si % ourModuleCardPalettes.length];
            return (
            <motion.li key={slide.title} variants={ourModulesCardVariant} className="flex w-full justify-center">
              <OurModuleCard slide={slide} palette={palette} />
            </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  );
}

function ComprehensiveControlIcon({ name }: { name: (typeof comprehensiveControlCards)[number]["icon"] }) {
  const c = "h-6 w-6";
  if (name === "onboarding") {
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
  if (name === "scale") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    );
  }
  if (name === "invoice") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function WithInOpsBenefitIcon({ variant, className }: { variant: "ghost" | "invoice" | "visibility" | "compliance"; className?: string }) {
  const c = className ?? "h-[1.05rem] w-[1.05rem] sm:h-[1.125rem] sm:w-[1.125rem]";
  if (variant === "ghost") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="m17 8 5 5M22 8l-5 5" />
      </svg>
    );
  }
  if (variant === "invoice") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h6" />
      </svg>
    );
  }
  if (variant === "visibility") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
      <path d="M14 2v6h6" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function ImpactKpiIcon({ variant }: { variant: "leakage" | "payback" | "savings" }) {
  const c = "h-5 w-5";
  if (variant === "leakage") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect width="20" height="12" x="2" y="6" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    );
  }
  if (variant === "payback") {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    );
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
      <path d="M16 7h6v6" />
    </svg>
  );
}

/** Video fills frame; live tiles sit outside overflow clip */
function AccessGovernanceVisual() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden bg-black mt-12">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/77913ee0-6e66-4c3b-bdad-da60ad90e710.jpg"
          aria-label="Contract worker using an industrial turnstile with integrated biometric access hardware"
        >
          <source src={accessGovernanceLeftVideo} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" aria-hidden />
      </div>

      <VideoLivePopups
        popups={[
          {
            position: "top-left",
            label: "Live",
            className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:-top-3 xl:-left-0",
            title: "Entry approved",
            accent: "emerald",
          },
          {
            position: "bottom-right",
            label: "Access",
            title: "Turnstile cleared",
            className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-10 xl:-right-2",
            variant: "icon",
            icon: "door",
            accent: "blue",
          },
        ]}
      />
    </>
  );
}

export default function PayrollSolutionsPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="payroll-solutions-section-gap min-h-screen bg-white text-gray-900">
        <motion.section
          className="relative mt-3 w-full border-b border-slate-100 bg-white pt-7 sm:pt-9 lg:pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.06 }}
          >
            <div className={`relative min-h-[340px] w-full bg-white sm:min-h-[390px] lg:min-h-[430px] ${SPLIT_HERO_MOBILE_STACK}`}>
              <SolutionHeroWaveDecor className="z-[1]" />
              {/* Right-half hero background (full width on small screens, then locked to the right on lg) */}
              <div
                className={`relative z-[2] mt-8 h-52 w-full sm:h-60 ${SPLIT_HERO_MOBILE_MEDIA_ORDER} lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 ${SPLIT_HERO_MEDIA_MR}`}
              >
                <video
                  className="absolute inset-0 h-full w-full object-cover object-[center_35%] sm:object-center lg:object-[center_40%]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={payrollHeroRightBackground}
                  aria-label="Payroll dashboard and contract workforce governance overview"
                >
                  <source src={payrollHeroRightVideo} type="video/mp4" />
                </video>
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white to-transparent lg:block"
                  aria-hidden
                />
                <VideoLivePopups
                  popups={[
                    {
                      position: "top-left",
                      label: "Live",
                      className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:-top-3 xl:-left-10",
                      title: "Sites synced",
                      accent: "emerald",
                      hideOnMobile: false,
                    },
                    {
                      position: "bottom-right",
                      label: "Compliance",
                      title: "Contractors cleared",
                      // subtitle: "Audit-ready",
                      className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-10 xl:-right-2",
                      variant: "icon",
                      icon: "shield",
                      accent: "blue",
                      hideOnMobile: false,
                    },
                  ]}
                />
              </div>
              <div className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 ${SPLIT_HERO_MOBILE_COPY_ORDER}`}>
                <div
                  className={`max-w-3xl px-2 py-6 pb-5 sm:px-4 sm:py-8 sm:pb-7 lg:max-w-xl lg:pt-10 lg:pb-5 lg:pr-6 ${SPLIT_HERO_COPY_ML}`}
                >
                  <FlyInText
                    as="span"
                    trigger="mount"
                    direction="down"
                    duration={0.55}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-800 shadow-sm backdrop-blur"
                  >
                    <span className="h-2 w-2 rounded-full bg-[color:var(--inops-blue)]" aria-hidden />
                    Payroll · Compliance · Contractor ops
                  </FlyInText>

                  <div className="-mx-2 overflow-x-auto pb-1 sm:mx-0 sm:overflow-visible sm:pb-0">
                    <FlyInText
                      as="h1"
                      trigger="mount"
                      direction="left"
                      delay={0.06}
                      duration={0.68}
                      className="home-display-heading inops-type-hero mt-4 whitespace-nowrap text-slate-900 lg:mt-5"
                    >
                      Unified{" "}
                      <span className="text-blue-800">payroll</span> & contract <br /> workforce governance
                    </FlyInText>
                  </div>

                  <FlyInText
                    as="p"
                    trigger="mount"
                    direction="up"
                    delay={0.12}
                    duration={0.62}
                    className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base"
                  >
                    Attendance, statutory compliance, and payouts on one platform, from gate logs to finance close.
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
                      <Link href="/contact" className={inopsUi.btnPrimary}>
                        Get In Touch
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                      <Link href="/contact" className={inopsUi.btnSecondary}>
                        Calculate ROI
                      </Link>
                    </motion.div>
                  </FlyInText>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* <section
          className="w-full border-b border-slate-200 bg-black"
          aria-labelledby="clms-hardware-heading"
        >
          <div className="grid min-h-0 grid-cols-1 lg:grid-cols-2 lg:min-h-[min(520px,85vh)]">
            <div className="relative min-h-[260px] w-full bg-slate-200 sm:min-h-[320px] lg:min-h-full">
              <Image
                src="/images/payroll-clms-hardware-split.png"
                alt="Contract worker at a secured turnstile with biometric terminal and access hardware callouts"
                fill
                className="object-cover object-[center_40%] lg:object-[center_35%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:px-16">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <h2
                  id="clms-hardware-heading"
                  className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.05rem] lg:leading-snug xl:text-[2.25rem]"
                >
                  Smart Contract Labour Management With Integrated Hardware
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                  Bring software and devices together: face, card, and fingerprint readers, turnstiles, and flap
                  barriers, wired into one CLMS so attendance is real time, access rules hold at the gate, and your
                  teams get reports and alerts that keep sites secure and audit ready.
                </p>
                <div className="mt-8 h-0.5 w-14 rounded-full bg-blue-500" aria-hidden />
              </motion.div>
            </div>
          </div>
        </section> */}

        <section
          id="why-inops"
          className="relative overflow-hidden border-t border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-white !mt-0 pt-4 pb-10 sm:pt-5 lg:pt-6 lg:pb-12"
          aria-labelledby="why-inops-heading"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgb(226_232_240/0.65)_1px,transparent_1px),linear-gradient(to_bottom,rgb(226_232_240/0.65)_1px,transparent_1px)] [background-size:48px_48px]"
            aria-hidden
          />

          <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-12 lg:pb-9 lg:pt-9">
            <motion.div
              className="mx-auto max-w-2xl text-center lg:max-w-3xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-blue-50/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-800 shadow-sm ring-1 ring-blue-500/20 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-xs">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--inops-blue)] shadow-[0_0_0_2px_rgba(29,95,191,0.22)]" aria-hidden />
                Operational gaps
              </span>
              <h2 id="why-inops-heading" className="mt-6">
                <span className=" text-black">Why Inops?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Where contract payroll breaks today, and what teams fix first when they standardize on one platform.
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-7">
              {whyInopsGridSlots.map((slot, idx) => {
                if (slot.kind === "image") {
                  return (
                    <motion.figure
                      key="why-inops-photo"
                      className={`group relative flex min-h-[240px] flex-col overflow-hidden rounded-2xl border sm:min-h-[260px] lg:min-h-[280px] ${painPointTheme.cardSurface}`}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.5, ease: smoothEase, delay: Math.min(idx * 0.05, 0.25) }}
                      whileHover={{ y: -4, transition: { duration: 0.35, ease: smoothEase } }}
                    >
                      <div className="relative flex min-h-[236px] flex-1 flex-col overflow-hidden rounded-2xl bg-slate-900 sm:min-h-[256px] lg:min-h-[276px]">
                      <div
                        className="pointer-events-none absolute inset-x-0 top-0 z-30 h-1 rounded-t-2xl bg-[color:var(--inops-blue)]"
                        aria-hidden
                      />
                      <div className="relative min-h-[220px] flex-1 sm:min-h-[240px]">
                        <Image
                          src="/f0068b65-0c95-43aa-9c59-65cf6c5dea47.jpg"
                          alt="Supervisor in safety helmet and vest at an industrial site"
                          fill
                          className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={false}
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/35 to-slate-900/10"
                          aria-hidden
                        />
                        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-6 pt-16 text-left">
                          <span className={`inline-flex !rounded-full !border !border-blue-200/90 !bg-blue-50/95 font-semibold !text-blue-800 !ring-1 !ring-blue-500/15 p-2 text-xs tracking-[0.18em]`}>
                            Field reality
                          </span>
                          <p className="mt-3 text-base font-semibold leading-snug text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-[1.05rem]">
                            Gate data and payroll runs rarely match, until systems align.
                          </p>
                        </figcaption>
                      </div>
                    </div>
                    </motion.figure>
                  );
                }
                const card = painPoints[slot.painIndex];
                const n = slot.painIndex + 1;
                return <WhyInopsMosaicPainCard key={card.title} card={card} num={n} idx={idx} />;
              })}
            </div>
          </div>
        </section>

        {/* Comprehensive Control ,  CLMS touchpoints
        <section
          className="border-t border-slate-200/80 py-14 lg:py-16 bg-white"
          aria-labelledby="comprehensive-control-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2
                id="comprehensive-control-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
              >
                Comprehensive Control
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                Our CLMS covers every touchpoint of your contract labor operations.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {comprehensiveControlCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="group rounded-2xl bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200 p-px shadow-sm transition-all duration-300 hover:from-blue-500 hover:via-blue-500 hover:to-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: Math.min(i * 0.05, 0.2) }}
                >
                  <div className="flex h-full flex-col rounded-2xl bg-white p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100/80">
                      <ComprehensiveControlIcon name={card.icon} />
                    </div>
                    <h3 className="mt-4 text-slate-900">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/90 p-6 text-center shadow-sm sm:col-span-2 lg:col-span-1"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: 0.15 }}
              >
                <h3 className="text-slate-900">Need Custom Integration?</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
                  We sync with SAP, Oracle, and legacy ERP systems.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Talk to Tech Support
                  <span aria-hidden>→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section> */}

        <OurModulesCarousel />

        {/* Real-time access governance */}
        <section
          id="access-governance"
          className="border-t border-slate-200 bg-white"
          aria-labelledby="access-governance-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[280px] bg-black sm:min-h-[360px] lg:min-h-[min(100vh,520px)]">
              <AccessGovernanceVisual />
            </div>
            <div className="flex flex-col justify-center bg-black px-6 py-8 sm:px-10 sm:py-10 lg:min-h-[min(100vh,520px)] lg:px-14 lg:py-12">
              <h2 id="access-governance-heading" className="text-white">
                Real-Time Entry, Exit &amp; Access Governance
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-white/88 sm:text-sm">
                Manage your contract workforce efficiently with our software that seamlessly integrates with biometric
                hardware, including face, card, and fingerprint readers. The system works effortlessly with access control
                solutions like turnstiles and flap barriers to ensure only authorized personnel enter your premises.
                Track real-time attendance, manage shifts, and generate contractor-wise reports, all from a single
                platform. Get automated alerts for early exits, overstays, and unauthorized access, enhancing both
                security and compliance.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-10 items-center justify-center rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Contact us
                </Link>
                <Link
                  href="/product/turnstiles"
                  className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  Gate hardware
                </Link>
              </div>
              <div className="mt-10 h-1 w-14 rounded-full bg-blue-500" aria-hidden />
            </div>
          </div>
        </section>

        {/* Contractor leakage + ROI ,  premium layout */}
        <section
          className="relative overflow-hidden border-t border-slate-200/80 bg-slate-50 !mt-0 pt-8 pb-12 sm:pt-10 lg:pt-12 lg:pb-16"
          aria-labelledby="contractor-leakage-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(to_right,rgb(226_232_240/0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgb(226_232_240/0.7)_1px,transparent_1px)] [background-size:52px_52px]"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/90 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute -left-40 top-1/4 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" aria-hidden />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-blue-50/90 px-3 py-1.5 text-center text-xs font-semibold uppercase leading-snug tracking-[0.18em] text-blue-800 shadow-sm ring-1 ring-[color:var(--inops-blue)]/20 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--inops-blue)] shadow-[0_0_0_2px_rgba(29,95,191,0.2)]" aria-hidden />
                Cost leakage is silent. Savings don&apos;t have to be.
              </span>
              <h2 id="contractor-leakage-heading" className="mt-7 text-slate-900">
                Stop Losing{" "}
                <span className="font-semibold text-[color:var(--inops-blue)]">Crores</span>{" "}
                in Contractor Leakage
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Hidden inefficiencies in contractor management can drain{" "}
                <strong className="font-semibold text-slate-800">8–12%</strong> of your annual spend ,  without you even
                knowing.
              </p>
            </motion.div>

            <div className="relative mx-auto mt-8 grid w-full grid-cols-1 justify-items-center gap-[3vw] lg:grid-cols-2 lg:gap-[2.5vw]">
              <div className="pointer-events-none absolute left-1/2 top-[42%] hidden -translate-x-1/2 lg:block" aria-hidden>
                <div className="flex h-24 w-px flex-col items-center bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                <motion.div
                  className="-mt-1 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-900/10 ring-4 ring-white"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </div>

              <motion.div
                className={`relative flex shrink-0 flex-col overflow-hidden rounded-2xl p-px shadow-[0_20px_60px_-28px_rgba(15,23,42,0.5)] ring-1 ring-white/10 ${leakageCardWidthClass}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 28px 72px -32px rgba(15, 23, 42, 0.5)",
                  transition: { duration: 0.35, ease: smoothEase },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/25 via-indigo-600/20 to-slate-900" aria-hidden />
                <div className="relative flex min-h-0 flex-1 flex-col rounded-[15px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4">
                  <div className="flex flex-wrap items-end justify-between gap-2 border-b border-white/10 pb-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Your leakage snapshot
                      </p>
                      <p className="mt-1 text-base font-semibold tracking-tight text-white">Typical Enterprise Scenario</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/70 ring-1 ring-white/10">
                      Illustrative model
                    </span>
                  </div>
                  <div className="mt-3 flex flex-1 flex-col divide-y divide-white/10">
                    {leakageSnapshotRows.map((row) => (
                      <div key={row.label} className="flex items-center gap-2.5 py-2 first:pt-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.08] text-sky-200 ring-1 ring-white/10">
                          <LeakageSnapshotRowIcon name={row.icon} />
                        </div>
                        <p className="min-w-0 flex-1 text-[11px] font-medium leading-snug text-white/88">{row.label}</p>
                        <div className="shrink-0 rounded-md bg-gradient-to-br from-sky-400 to-sky-500 px-2 py-1 text-[11px] font-bold tabular-nums text-slate-950 shadow-md shadow-sky-900/30">
                          {row.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 shrink-0 space-y-2 border-t border-white/10 pt-3">
                    <div className="flex flex-row items-end justify-between gap-1">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Annual spend</span>
                      <span className="text-2xl font-bold tabular-nums tracking-tight text-white">
                        ₹18{" "}
                        <span className="text-slate-200">Cr</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/[0.06] px-2.5 py-1.5 ring-1 ring-white/10">
                      <span className="text-[10px] font-medium text-white/60">Recoverable with CLMS (est.)</span>
                      <span className="text-xs font-bold tabular-nums text-emerald-300">₹1.4 Cr+ / yr</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`relative flex shrink-0 flex-col overflow-hidden rounded-2xl border border-rose-100/90 bg-white/90 p-4 shadow-[0_18px_50px_-30px_rgba(190,18,60,0.3)] ring-1 ring-rose-100/60 backdrop-blur-md ${leakageCardWidthClass}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 24px 60px -28px rgba(190, 24, 93, 0.4)",
                  transition: { duration: 0.35, ease: smoothEase },
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-rose-100/80 pb-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-900/80">Where you lose money</p>
                    <p className="mt-1 text-xs text-slate-600">Ranked by typical exposure in multi-site contractor ops</p>
                  </div>
                  <span className="rounded-lg bg-rose-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-rose-700 ring-1 ring-rose-100">
                    Annual bleed
                  </span>
                </div>
                <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                  {leakageBleedItems.map((item, barIdx) => (
                    <li key={item.label}>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-rose-50 to-white text-rose-600 ring-1 ring-rose-100/80">
                          {item.icon === "user-x" && (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11a4 4 0 100-8 4 4 0 000 8zM5 21a7 7 0 0114 0M21 12h-4m0 0l2-2m-2 2l2 2" />
                            </svg>
                          )}
                          {item.icon === "doc" && (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                          {item.icon === "clock" && (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          {item.icon === "alert" && (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          )}
                          {item.icon === "stack" && (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <span className="text-xs font-semibold text-slate-800">{item.label}</span>
                            <span className="text-xs font-bold tabular-nums text-slate-900">{item.amount}</span>
                          </div>
                          <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200/80">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-rose-400 to-rose-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.pct}%` }}
                              viewport={{ once: true, amount: 0.5 }}
                              transition={{
                                duration: 1.05,
                                ease: smoothEase,
                                delay: Math.min(barIdx * 0.07, 0.35),
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <motion.div
                  className="group mt-5 flex cursor-default flex-row items-center justify-between gap-1.5 rounded-xl bg-gradient-to-br from-rose-400 via-rose-400 to-rose-500 px-4 py-3.5 text-white shadow-lg shadow-rose-500/20 transition-[background-image,box-shadow] duration-300 ease-out hover:from-rose-600 hover:via-rose-600 hover:to-red-700 hover:shadow-rose-900/30"
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, ease: smoothEase }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/95 transition-colors duration-300 group-hover:text-white">
                    Total leakage
                  </span>
                  <span className="text-xl font-bold tabular-nums tracking-tight text-white transition-colors duration-300 group-hover:text-white">
                    ₹1.98 Cr / year
                  </span>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_32px_100px_-48px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 }}
              whileHover={{
                y: -4,
                boxShadow: "0 40px 120px -48px rgba(15, 23, 42, 0.42)",
                transition: { duration: 0.35, ease: smoothEase },
              }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent" aria-hidden />
              <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
                <div className="border-b border-slate-100 p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-white/40">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="inline-flex rounded-full border border-blue-200/90 bg-gradient-to-r from-blue-50 to-indigo-50/90 px-2.5 py-0.5 text-xs font-bold uppercase tracking-[0.22em] text-blue-800 shadow-sm ring-1 ring-blue-500/10">
                        With the platform
                      </p>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-700">
                        What changes when{" "}
                        <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text font-semibold text-transparent">
                          CLMS runs your contractor layer
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {(
                      [
                        {
                          line: "Eliminate ghost workers",
                          icon: "ghost" as const,
                          tag: "Identity",
                          topBar: "from-violet-600 via-fuchsia-500 to-pink-500",
                          cardSurface:
                            "border-violet-200/75 bg-gradient-to-br from-violet-50/95 via-white to-fuchsia-50/45 shadow-[0_12px_40px_-28px_rgba(139,92,246,0.16)] ring-1 ring-violet-500/[0.07] hover:border-violet-300/90 hover:shadow-[0_22px_48px_-28px_rgba(139,92,246,0.22)]",
                          iconBg: "from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/30 ring-2 ring-white/55",
                          tagBadge:
                            "border border-violet-200/90 bg-gradient-to-r from-violet-50 to-fuchsia-50/90 text-violet-950 shadow-sm ring-1 ring-violet-500/10",
                          orb: "from-fuchsia-400/25 to-violet-600/12",
                          footerRail: "from-violet-500 via-fuchsia-500 to-pink-500",
                          footerText: "font-medium text-violet-900/90",
                          checkTint: "text-violet-600",
                        },
                        {
                          line: "99%+ invoice accuracy",
                          icon: "invoice" as const,
                          tag: "Finance",
                          topBar: "from-emerald-500 via-teal-500 to-cyan-500",
                          cardSurface:
                            "border-emerald-200/75 bg-gradient-to-br from-emerald-50/95 via-white to-teal-50/42 shadow-[0_12px_40px_-28px_rgba(16,185,129,0.14)] ring-1 ring-emerald-500/[0.07] hover:border-emerald-300/90 hover:shadow-[0_22px_48px_-28px_rgba(20,184,166,0.2)]",
                          iconBg: "from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-600/28 ring-2 ring-white/55",
                          tagBadge:
                            "border border-emerald-200/90 bg-gradient-to-r from-emerald-50 to-teal-50/90 text-emerald-950 shadow-sm ring-1 ring-emerald-500/10",
                          orb: "from-teal-400/22 to-emerald-600/12",
                          footerRail: "from-emerald-500 via-teal-500 to-cyan-500",
                          footerText: "font-medium text-emerald-900/90",
                          checkTint: "text-emerald-600",
                        },
                        {
                          line: "Real-time workforce visibility",
                          icon: "visibility" as const,
                          tag: "Operations",
                          topBar: "from-sky-500 via-blue-500 to-indigo-600",
                          cardSurface:
                            "border-sky-200/75 bg-gradient-to-br from-sky-50/95 via-white to-blue-50/40 shadow-[0_12px_40px_-28px_rgba(14,165,233,0.14)] ring-1 ring-sky-500/[0.07] hover:border-sky-300/90 hover:shadow-[0_22px_48px_-28px_rgba(59,130,246,0.2)]",
                          iconBg: "from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-600/28 ring-2 ring-white/55",
                          tagBadge:
                            "border border-sky-200/90 bg-gradient-to-r from-sky-50 to-blue-50/90 text-sky-950 shadow-sm ring-1 ring-sky-500/10",
                          orb: "from-blue-400/22 to-indigo-600/12",
                          footerRail: "from-sky-500 via-blue-500 to-indigo-600",
                          footerText: "font-medium text-sky-950/90",
                          checkTint: "text-sky-600",
                        },
                        {
                          line: "Compliance built-in",
                          icon: "compliance" as const,
                          tag: "Governance",
                          topBar: "from-amber-500 via-orange-500 to-rose-600",
                          cardSurface:
                            "border-amber-200/75 bg-gradient-to-br from-amber-50/95 via-white to-orange-50/38 shadow-[0_12px_40px_-28px_rgba(245,158,11,0.12)] ring-1 ring-amber-500/[0.07] hover:border-amber-300/90 hover:shadow-[0_22px_48px_-28px_rgba(251,146,60,0.2)]",
                          iconBg: "from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-600/26 ring-2 ring-white/55",
                          tagBadge:
                            "border border-amber-200/90 bg-gradient-to-r from-amber-50 to-orange-50/90 text-amber-950 shadow-sm ring-1 ring-amber-500/10",
                          orb: "from-orange-400/22 to-rose-600/12",
                          footerRail: "from-amber-500 via-orange-500 to-rose-600",
                          footerText: "font-medium text-amber-950/90",
                          checkTint: "text-amber-600",
                        },
                      ] as const
                    ).map(({ line, icon, tag, topBar, cardSurface, iconBg, tagBadge, orb, footerRail, footerText, checkTint }, bIdx) => (
                      <motion.div
                        key={line}
                        className={`group relative flex flex-col overflow-hidden rounded-2xl border p-4 transition-[transform,box-shadow,border-color] duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0 hover:-translate-y-0.5 ${cardSurface}`}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.38, ease: smoothEase, delay: Math.min(bIdx * 0.06, 0.2) }}
                      >
                        <div
                          className={`pointer-events-none absolute inset-x-0 top-0 z-[2] h-1.5 rounded-t-2xl bg-gradient-to-r shadow-sm ${topBar}`}
                          aria-hidden
                        />
                        <div
                          className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${orb}`}
                          aria-hidden
                        />
                        <div className="relative flex min-h-0 flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <span
                              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${iconBg}`}
                            >
                              <WithInOpsBenefitIcon variant={icon} />
                            </span>
                            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.12em] shadow-sm sm:text-xs sm:tracking-[0.14em] ${tagBadge}`}>
                              {tag}
                            </span>
                          </div>
                          <p className="mt-3 text-lg font-semibold leading-snug text-slate-900">{line}</p>
                          <div className="mt-auto flex items-center gap-2 border-t border-slate-100/90 pt-2.5 text-left">
                            <span className={`h-0.5 w-6 shrink-0 rounded-full bg-gradient-to-r ${footerRail}`} aria-hidden />
                            <CheckIcon className={`h-3.5 w-3.5 shrink-0 ${checkTint}`} />
                            <span className={`text-xs leading-snug ${footerText}`}>
                              Included in unified CLMS rollout
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950/80 to-slate-950 p-8 lg:p-10 xl:p-12">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_20%_15%,rgba(52,211,153,0.14),transparent_50%),radial-gradient(ellipse_70%_50%_at_90%_80%,rgba(99,102,241,0.18),transparent_52%),radial-gradient(ellipse_90%_60%_at_80%_20%,rgba(56,189,248,0.1),transparent)]"
                    aria-hidden
                  />
                  <div className="relative">
                    <p className="inline-flex rounded-full border border-cyan-400/35 bg-gradient-to-r from-emerald-500/25 via-cyan-500/20 to-indigo-500/25 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100 shadow-sm ring-1 ring-cyan-400/25">
                      The impact
                    </p>
                    <p className="mt-3 max-w-xl bg-gradient-to-r from-white via-sky-100 to-cyan-100 bg-clip-text text-lg font-semibold leading-snug text-transparent sm:text-xl">
                      Measured outcomes on comparable deployments
                    </p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-3">
                      {(
                        [
                          {
                            k: "Leakage prevented",
                            v: "₹1.98 Cr / year",
                            icon: "leakage" as const,
                            topBar: "from-emerald-400 via-teal-400 to-cyan-400",
                            shell:
                              "relative overflow-hidden border border-emerald-400/35 bg-gradient-to-br from-emerald-500/[0.22] via-white/[0.06] to-cyan-600/[0.14] shadow-[0_16px_44px_-28px_rgba(16,185,129,0.35)] ring-1 ring-emerald-400/20 hover:border-emerald-300/55 hover:shadow-[0_22px_50px_-24px_rgba(52,211,153,0.35)]",
                            iconWrap:
                              "bg-gradient-to-br from-emerald-400/45 to-teal-500/30 text-emerald-50 ring-2 ring-emerald-300/30",
                            labelClass: "text-emerald-100/90",
                            valueGradient: "bg-gradient-to-br from-emerald-200 via-teal-100 to-cyan-200",
                          },
                          {
                            k: "Payback period",
                            v: "~3 months",
                            icon: "payback" as const,
                            topBar: "from-amber-400 via-orange-400 to-rose-500",
                            shell:
                              "relative overflow-hidden border border-amber-400/35 bg-gradient-to-br from-amber-500/[0.22] via-white/[0.06] to-rose-600/[0.12] shadow-[0_16px_44px_-28px_rgba(245,158,11,0.28)] ring-1 ring-amber-400/20 hover:border-amber-300/55 hover:shadow-[0_22px_50px_-24px_rgba(251,191,36,0.3)]",
                            iconWrap:
                              "bg-gradient-to-br from-amber-400/45 to-orange-500/30 text-amber-50 ring-2 ring-amber-300/30",
                            labelClass: "text-amber-100/90",
                            valueGradient: "bg-gradient-to-br from-amber-200 via-orange-100 to-rose-200",
                          },
                          {
                            k: "Net annual savings",
                            v: "₹19 Lakhs",
                            icon: "savings" as const,
                            topBar: "from-indigo-400 via-violet-400 to-fuchsia-500",
                            shell:
                              "relative overflow-hidden border border-violet-400/35 bg-gradient-to-br from-indigo-600/[0.28] via-white/[0.06] to-fuchsia-600/[0.14] shadow-[0_16px_44px_-28px_rgba(139,92,246,0.3)] ring-1 ring-violet-400/20 hover:border-violet-300/55 hover:shadow-[0_22px_50px_-24px_rgba(167,139,250,0.32)]",
                            iconWrap:
                              "bg-gradient-to-br from-indigo-400/45 to-fuchsia-500/30 text-violet-50 ring-2 ring-violet-300/30",
                            labelClass: "text-violet-100/90",
                            valueGradient: "bg-gradient-to-br from-indigo-200 via-violet-100 to-fuchsia-200",
                          },
                        ] as const
                      ).map((row, kIdx) => (
                        <motion.div
                          key={row.k}
                          className={`group flex flex-col mt-5 rounded-2xl px-4 py-5 text-center backdrop-blur-sm transition-[transform,box-shadow] duration-300 ${row.shell}`}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={viewport}
                          transition={{ duration: 0.42, ease: smoothEase, delay: Math.min(kIdx * 0.08, 0.24) }}
                          whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.28, ease: smoothEase } }}
                        >
                          <div
                            className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${row.topBar}`}
                            aria-hidden
                          />
                          <motion.span
                            className={`relative z-[1] mx-auto flex h-11 w-11 items-center justify-center rounded-full ${row.iconWrap}`}
                            aria-hidden
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 400, damping: 18 }}
                          >
                            <ImpactKpiIcon variant={row.icon} />
                          </motion.span>
                          <p
                            className={`relative z-[1] mt-4 text-xs font-semibold uppercase leading-snug tracking-wider sm:text-xs ${row.labelClass}`}
                          >
                            {row.k}
                          </p>
                          <p
                            className={`relative z-[1] mt-2 bg-clip-text text-lg font-bold tabular-nums tracking-tight text-transparent sm:text-xl ${row.valueGradient}`}
                          >
                            {row.v}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase, delay: 0.08 }}
            >
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className={`${inopsUi.btnSecondary} gap-2 !bg-blue-600 !text-white !border-blue-600 shadow-sm`}>
                Calculate your savings
                  <motion.span aria-hidden whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 450, damping: 24 }}>
                    →
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className={`${inopsUi.btnSecondary} gap-2 shadow-sm`}>
                  Book a demo
                  <motion.span aria-hidden whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 450, damping: 24 }}>
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <SolutionPageClosingCta
          heading="Ready to take control of your contract workforce?"
          description="Join leading enterprises who have digitized their workforce governance. Book a personalized walkthrough of the CLMS platform today."
          primaryLabel="Request a Demo"
          secondaryLabel="Download Brochure"
          secondaryHref="/brochures"
          footnote="Trusted by leading Indian manufacturers and infrastructure companies."
          sectionClassName="!pt-7 !pb-12 sm:!px-6 lg:!pb-14"
        />
      </div>
    </MotionConfig>
  );
}
