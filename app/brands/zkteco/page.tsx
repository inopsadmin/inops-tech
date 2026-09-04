"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
import { ThroughputMetricCard } from "@/app/components/ThroughputMetricCard";
import { inopsUi } from "@/app/lib/inopsUi";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.08, margin: "0px 0px -12% 0px" } as const;

/* ─── Accent system ─── */
type FeatureAccent = "amber" | "violet" | "emerald" | "indigo" | "fuchsia" | "cyan";

const accentVisual: Record<
  FeatureAccent,
  { card: string; miniCell: string; topBar: string; orb: string; iconShell: string }
> = {
  amber: {
    card: "border-amber-200/45 bg-gradient-to-br from-amber-50/95 via-white to-orange-50/35 shadow-[0_22px_56px_-32px_rgba(245,158,11,0.45)] ring-1 ring-amber-400/15 hover:ring-amber-400/30 hover:shadow-[0_28px_64px_-28px_rgba(245,158,11,0.4)]",
    miniCell: "border-amber-200/40 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/15 shadow-[0_14px_40px_-22px_rgba(245,158,11,0.35)] ring-1 ring-amber-400/12",
    topBar: "from-amber-400 via-orange-500 to-rose-500",
    orb: "bg-amber-400/25",
    iconShell: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-600/35 ring-2 ring-white/25",
  },
  violet: {
    card: "border-violet-200/45 bg-gradient-to-br from-violet-50/95 via-white to-fuchsia-50/30 shadow-[0_22px_56px_-32px_rgba(139,92,246,0.38)] ring-1 ring-violet-400/15 hover:ring-violet-400/30",
    miniCell: "border-violet-200/40 bg-gradient-to-br from-violet-50/80 via-white to-fuchsia-50/15 shadow-[0_14px_40px_-22px_rgba(139,92,246,0.3)] ring-1 ring-violet-400/12",
    topBar: "from-violet-400 via-fuchsia-500 to-pink-500",
    orb: "bg-violet-400/22",
    iconShell: "bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-600/35 ring-2 ring-white/25",
  },
  emerald: {
    card: "border-emerald-200/45 bg-gradient-to-br from-emerald-50/95 via-white to-teal-50/35 shadow-[0_22px_56px_-32px_rgba(16,185,129,0.38)] ring-1 ring-emerald-400/15 hover:ring-emerald-400/30",
    miniCell: "border-emerald-200/40 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/15 shadow-[0_14px_40px_-22px_rgba(16,185,129,0.3)] ring-1 ring-emerald-400/12",
    topBar: "from-emerald-400 via-teal-500 to-cyan-500",
    orb: "bg-emerald-400/22",
    iconShell: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-600/35 ring-2 ring-white/25",
  },
  indigo: {
    card: "border-indigo-200/45 bg-gradient-to-br from-indigo-50/95 via-white to-sky-50/30 shadow-[0_22px_56px_-32px_rgba(99,102,241,0.38)] ring-1 ring-indigo-400/15 hover:ring-indigo-400/30",
    miniCell: "border-indigo-200/40 bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/15 shadow-[0_14px_40px_-22px_rgba(99,102,241,0.3)] ring-1 ring-indigo-400/12",
    topBar: "from-indigo-400 via-blue-500 to-sky-500",
    orb: "bg-indigo-400/22",
    iconShell: "bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-600/35 ring-2 ring-white/25",
  },
  fuchsia: {
    card: "border-fuchsia-200/45 bg-gradient-to-br from-fuchsia-50/95 via-white to-rose-50/30 shadow-[0_22px_56px_-32px_rgba(217,70,239,0.35)] ring-1 ring-fuchsia-400/15 hover:ring-fuchsia-400/30",
    miniCell: "border-fuchsia-200/40 bg-gradient-to-br from-fuchsia-50/80 via-white to-rose-50/15 shadow-[0_14px_40px_-22px_rgba(217,70,239,0.28)] ring-1 ring-fuchsia-400/12",
    topBar: "from-fuchsia-400 via-rose-500 to-orange-400",
    orb: "bg-fuchsia-400/20",
    iconShell: "bg-gradient-to-br from-fuchsia-500 to-rose-600 text-white shadow-lg shadow-fuchsia-600/35 ring-2 ring-white/25",
  },
  cyan: {
    card: "border-cyan-200/45 bg-gradient-to-br from-cyan-50/95 via-white to-sky-50/40 shadow-[0_22px_56px_-32px_rgba(6,182,212,0.38)] ring-1 ring-cyan-400/15 hover:ring-cyan-400/30",
    miniCell: "border-cyan-200/40 bg-gradient-to-br from-cyan-50/80 via-white to-sky-50/20 shadow-[0_14px_40px_-22px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/12",
    topBar: "from-cyan-400 via-sky-500 to-blue-600",
    orb: "bg-cyan-400/22",
    iconShell: "bg-gradient-to-br from-cyan-500 to-sky-600 text-white shadow-lg shadow-cyan-600/35 ring-2 ring-white/25",
  },
};

/* ─── Platform cards (5 device categories) ─── */
type PlatformTone = "sky" | "indigo" | "emerald" | "violet" | "amber";

const platformThroughput: Record<PlatformTone, { accentBar: string; iconWrap: string; hoverGlow: string }> = {
  sky: { accentBar: "from-sky-500 via-cyan-400 to-teal-400", iconWrap: "bg-sky-50 text-sky-600 ring-sky-500/20 group-hover:bg-sky-500 group-hover:text-white group-hover:ring-sky-400/40", hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(14,165,233,0.35)]" },
  indigo: { accentBar: "from-indigo-500 via-violet-500 to-purple-400", iconWrap: "bg-indigo-50 text-indigo-600 ring-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white group-hover:ring-indigo-400/40", hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(99,102,241,0.32)]" },
  emerald: { accentBar: "from-emerald-500 via-teal-400 to-cyan-400", iconWrap: "bg-emerald-50 text-emerald-600 ring-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white group-hover:ring-emerald-400/40", hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(16,185,129,0.32)]" },
  violet: { accentBar: "from-violet-500 via-fuchsia-500 to-pink-400", iconWrap: "bg-violet-50 text-violet-600 ring-violet-500/20 group-hover:bg-violet-600 group-hover:text-white group-hover:ring-violet-400/40", hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(139,92,246,0.35)]" },
  amber: { accentBar: "from-amber-500 via-orange-500 to-red-400", iconWrap: "bg-amber-50 text-amber-700 ring-amber-500/20 group-hover:bg-amber-500 group-hover:text-white group-hover:ring-amber-400/40", hoverGlow: "hover:shadow-[0_24px_56px_-28px_rgba(245,158,11,0.38)]" },
};

const deviceCards = [
  { title: "Face Recognition Terminals", description: "Sub-second visible-light recognition with liveness detection. Outdoor-rated for high-throughput plant gates and shift-change crowding.", tag: "Touchless", tone: "sky" as PlatformTone, icon: "face" as const },
  { title: "Fingerprint Terminals", description: "Optical and capacitive readers for indoor gates, offices and lower-throughput points. Entry-level cost per lane.", tag: "Workhorse", tone: "indigo" as PlatformTone, icon: "fingerprint" as const },
  { title: "Face + Fingerprint Hybrid", description: "Multi-modal terminals with face, fingerprint, RFID and PIN. Flexible fallback and dual-factor for high-security gates.", tag: "Multi-modal", tone: "emerald" as PlatformTone, icon: "hybrid" as const },
  { title: "Access Control Panels", description: "Single and multi-door controllers for networked deployments, integrating readers, electric strikes and turnstiles.", tag: "Networked", tone: "violet" as PlatformTone, icon: "panel" as const },
  { title: "Turnstiles & Flap Barriers", description: "Tripod, flap and full-height options with any ZKTeco reader mounted to the lane. Physical enforcement at the gate.", tag: "Secure", tone: "amber" as PlatformTone, icon: "turnstile" as const },
] as const;

type DeviceIcon = (typeof deviceCards)[number]["icon"];

function DeviceGlyph({ name, className }: { name: DeviceIcon; className: string }) {
  const c = `h-6 w-6 ${className}`;
  if (name === "face")
    return <svg className={c} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
  if (name === "fingerprint")
    return <svg className={c} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3-1 5-3 7M12 8c2 0 3 2 3 5v2M8 14c0 2 1 4 2 5M16 14v2c0-2-1-3-2-4M9 4c2-1 4-1 6 0" /></svg>;
  if (name === "hybrid")
    return <svg className={c} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
  if (name === "panel")
    return <svg className={c} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><rect x="5" y="11" width="14" height="10" rx="2" /><path strokeLinecap="round" d="M8 11V8a4 4 0 018 0v3" /></svg>;
  return <svg className={c} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><rect x="3" y="4" width="5" height="16" rx="1" /><rect x="16" y="4" width="5" height="16" rx="1" /><path strokeLinecap="round" d="M8 12h8" /></svg>;
}

/* ─── Why InOps feature cards ─── */
const differentiators: { title: string; detail: string; icon: "shield" | "bolt" | "chip" | "users" | "layers"; accent: FeatureAccent }[] = [
  { title: "Site survey before selection", detail: "Device choice matched to gate conditions, throughput and environment. Wrong selections are the most common cause of year-one failure.", icon: "shield", accent: "emerald" },
  { title: "Installation & commissioning", detail: "Civil coordination, mounting, networking, wiring and post-install punch verification. We own the outcome, not just the hardware supply.", icon: "bolt", accent: "amber" },
  { title: "Integration with attendance & payroll", detail: "ZKTeco devices feed InOps labour management and HR software — punches become attendance, payroll and statutory records automatically.", icon: "chip", accent: "indigo" },
  { title: "AMC with spares in India", detail: "Preventive maintenance, remote health monitoring, firmware management and on-site engineers — spares held locally, not imported per incident.", icon: "layers", accent: "violet" },
  { title: "Mixed estates — no brand silos", detail: "ZKTeco alongside eSSL and Realtime on one attendance engine. One worker identity across every device in the estate.", icon: "users", accent: "cyan" },
];

function DiffGlyph({ name, accent }: { name: "shield" | "bolt" | "chip" | "users" | "layers"; accent: FeatureAccent }) {
  const shell = `inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${accentVisual[accent].iconShell}`;
  const c = "h-6 w-6";
  return (
    <span className={shell} aria-hidden>
      {name === "shield" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" /></svg>}
      {name === "bolt" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></svg>}
      {name === "chip" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="7" y="7" width="10" height="10" rx="1" /><path d="M7 10H4M7 14H4M20 10h-3M20 14h-3M10 7V4M14 7V4M10 20v-3M14 20v-3" /></svg>}
      {name === "users" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" /><path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" /><path d="M15 18c0-1.8 1.2-3.3 2.9-3.8" /></svg>}
      {name === "layers" && <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>}
    </span>
  );
}

/* ─── Device model catalogue ─── */
const deviceCategories = [
  {
    category: "Face Recognition Terminals",
    accentBar: "from-sky-400 via-blue-500 to-indigo-500",
    iconBg: "bg-sky-50 text-sky-600",
    img: "/ZKTeco/man-with-digital-facial-recognition.jpg",
    description: "Sub-second visible-light facial recognition with liveness detection and anti-spoofing. Suitable for outdoor plant entrances and high-throughput shift-change gates.",
    models: [
      { name: "SpeedFace Series", spec: "Face + fingerprint + card, outdoor-rated, large capacity" },
      { name: "ProFace X", spec: "Touchless face terminal, wide-angle recognition, deep learning AI" },
      { name: "ZKFACE 800/900", spec: "Industrial face reader, IP65-rated, suited for dusty environments" },
    ],
  },
  {
    category: "Fingerprint Terminals",
    accentBar: "from-violet-400 via-fuchsia-500 to-pink-500",
    iconBg: "bg-violet-50 text-violet-600",
    img: "/ZKTeco/fingerprint-Terminals.jpg",
    description: "Optical and capacitive fingerprint readers for indoor gates, offices and lower-throughput entry points. Entry-level cost per lane.",
    models: [
      { name: "K40/K50 Series", spec: "Fingerprint + card + PIN, high user capacity, indoor rated" },
      { name: "UA860/UA880", spec: "Fingerprint + face, dual-mode authentication" },
      { name: "F18/F22", spec: "Compact fingerprint reader, low-throughput indoor use" },
    ],
  },
  {
    category: "Face + Fingerprint Hybrid",
    accentBar: "from-emerald-400 via-teal-500 to-cyan-500",
    iconBg: "bg-emerald-50 text-emerald-600",
    img: "/ZKTeco/face-hingerprint-hybrid.avif",
    description: "Multi-modal terminals combining face, fingerprint, RFID and PIN. Suited to sites requiring flexible fallback or high-security dual-factor entry.",
    models: [
      { name: "SpeedFace V5L", spec: "Face + fingerprint + card, multi-modal, 50,000 face capacity" },
      { name: "UFace Series", spec: "Hybrid terminal with visible-light face and optical fingerprint" },
    ],
  },
  {
    category: "Access Control Panels & Controllers",
    accentBar: "from-indigo-400 via-blue-500 to-sky-500",
    iconBg: "bg-indigo-50 text-indigo-600",
    img: "/ZKTeco/access-control-panels-ontrollers.webp",
    description: "Single and multi-door controllers for networked access control deployments. Integrates with readers, electric strikes, and turnstiles.",
    models: [
      { name: "C3 Series", spec: "1/2/4-door controllers, TCP/IP, Wiegand and RS485" },
      { name: "inBio Series", spec: "Web-based access panel, up to 4 doors, anti-passback" },
    ],
  },
  {
    category: "Turnstiles & Flap Barriers",
    accentBar: "from-amber-400 via-orange-500 to-rose-500",
    iconBg: "bg-amber-50 text-amber-700",
    img: "/ZKTeco/turnstiles-Flap-Barriers.jpg",
    description: "Tripod turnstiles, flap barriers and full-height turnstiles with reader mounts for any ZKTeco biometric terminal. Physical access enforcement at the lane.",
    models: [
      { name: "TS2000/TS3000", spec: "Tripod turnstile, reader-agnostic, compact footprint" },
      { name: "FBL Series", spec: "Flap barrier lane, fast-swing, pedestrian-friendly" },
      { name: "FHT Series", spec: "Full-height turnstile, perimeter and high-security gates" },
    ],
  },
] as const;

/* ─── FAQ ─── */
const faqItems = [
  { q: "What is ZKTeco used for?", a: "ZKTeco devices are used for time and attendance capture and physical access control — face recognition and fingerprint terminals at gates and entry points, plus turnstiles and controllers for door and lane control." },
  { q: "Which ZKTeco device is best for a factory gate?", a: "Face terminals for high-throughput and dusty or oily environments; fingerprint terminals for indoor and lower-volume points. Outdoor gates need environment-rated models. Selection follows a site survey." },
  { q: "Do you supply ZKTeco devices across India?", a: "Yes — supply, installation and maintenance across Indian industrial sites, with engineer coverage for multi-site estates." },
  { q: "Can ZKTeco devices integrate with attendance and payroll software?", a: "Yes. InOps integrates ZKTeco devices with its own attendance and contract labour platform, so punches become attendance, payroll and statutory records automatically rather than sitting in device logs." },
  { q: "Do you provide AMC for ZKTeco devices?", a: "Yes — including devices supplied by other vendors. See biometric AMC for full scope." },
  { q: "Are spares available in India?", a: "Yes, spares are held and supported locally rather than imported per incident, minimising downtime at your site." },
  { q: "Can we mix ZKTeco with our existing eSSL or Realtime devices?", a: "Yes. Mixed-brand estates run on one attendance engine under one worker identity, which is the normal situation for plants that added hardware over several years." },
  { q: "How is ZKTeco firmware managed?", a: "Firmware versions are tracked across the fleet and updated on a managed schedule under AMC — ageing firmware is a common cause of both device failure and security exposure, and it is rarely anyone's internal responsibility." },
] as const;

export default function ZKTecoPage() {
  return (
    <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">

      {/* ══════════════════════════════════════════
          HERO — split image/copy
      ══════════════════════════════════════════ */}
      <motion.section
        className="relative w-full overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/95 via-white to-sky-50/35 pt-8 sm:pt-10 lg:pt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-300/[0.18] blur-3xl" />
          <div className="absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-blue-400/[0.12] blur-3xl" />
        </div>

        <motion.div
          className="relative w-full overflow-hidden"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: smoothEase, delay: 0.06 }}
        >
          <div className={`relative min-h-[340px] w-full sm:min-h-[390px] lg:min-h-[430px] ${SPLIT_HERO_MOBILE_STACK}`}>
            <SolutionHeroWaveDecor className="z-[1]" />

            {/* Media */}
            <div className={`relative z-[2] mt-10 h-52 w-full sm:h-60 ${SPLIT_HERO_MOBILE_MEDIA_ORDER} lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 ${SPLIT_HERO_MEDIA_MR}`}>
              <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-400/25 via-blue-500/15 to-indigo-600/20 blur-2xl lg:block lg:rounded-l-[2rem] lg:rounded-r-none" aria-hidden />
              <div className="relative h-full overflow-hidden lg:h-full">
                <Image
                  src="/ZKTeco/Linkedin newsletter Banner.jpg"
                  alt="ZKTeco biometric devices at industrial facility gate — face recognition terminals and access control"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-12 lg:block lg:w-32 lg:from-white lg:via-white/90" aria-hidden />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/[0.06] to-transparent lg:hidden" aria-hidden />
              </div>
              {/* <VideoLivePopups
                popups={[
                  { position: "top-left", label: "Live", className: "top-10 -left-10 sm:-top-10 sm:-left-10 lg:-top-10 lg:-left-10 xl:top-7 xl:-left-15", title: "Access secured", accent: "emerald" },
                  { position: "bottom-right", className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-0 xl:-right-2", label: "Verified", title: "ZKTeco · eSSL · Realtime", subtitle: "3,000+ devices managed", variant: "icon", icon: "fingerprint", accent: "blue" },
                ]}
              /> */}
            </div>

            {/* Copy */}
            <div className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 ${SPLIT_HERO_MOBILE_COPY_ORDER}`}>
              <div className={`max-w-3xl px-2 py-8 sm:px-4 sm:py-10 lg:max-w-xl lg:py-16 lg:pr-8 ${SPLIT_HERO_COPY_ML}`}>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-800 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/10 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" aria-hidden />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]" aria-hidden />
                    </span>
                    ZKTeco supply &amp; AMC · India since 2014
                  </span>
                </motion.div>

                <motion.h1
                  className="home-display-heading inops-type-hero mt-5 text-slate-900 sm:mt-6"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
                >
                  ZKTeco Biometric Devices for{" "}
                  <span className="font-semibold text-[color:var(--inops-blue)]">
                    Indian Industrial Sites
                  </span>
                </motion.h1>

                <motion.p
                  className={`mt-5 max-w-xl ${inopsUi.sectionSubtitle}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.14 }}
                >
                  Face terminals, fingerprint readers, turnstiles and access controllers — supplied, installed and maintained across India. Every device connects to one attendance engine. 3,000+ devices, 70+ sites since 2014.
                </motion.p>

                <motion.div
                  className="mt-8 flex flex-wrap gap-3 sm:mt-9"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/30 transition hover:bg-blue-700 hover:-translate-y-0.5"
                  >
                    Enquire about ZKTeco devices
                  </Link>
                  <Link
                    href="/biometric-devices"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-600 bg-white px-8 py-3.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                  >
                    All biometric devices
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ══════════════════════════════════════════
          5 device category cards (ThroughputMetricCard)
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-slate-200/90 bg-gradient-to-b from-slate-50/95 via-white to-white py-10 lg:py-12" aria-labelledby="zkteco-devices-heading">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-400/[0.11] blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-indigo-400/[0.09] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800 shadow-sm ring-1 ring-blue-500/10 backdrop-blur-sm">
              Device categories
            </span>
            <h2 id="zkteco-devices-heading" className="mt-4 text-balance text-slate-900">ZKTeco devices we deploy</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Actual selection follows a site survey — throughput, modality and environment rating matched to your gate conditions.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 lg:mt-12 lg:gap-6">
  {deviceCards.map((card, i) => {
    const t = platformThroughput[card.tone];
    return (
      <div key={card.title} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
        <ThroughputMetricCard
          title={card.title}
          description={card.description}
          chip={card.tag}
          metric={String(i + 1).padStart(2, "0")}
          accentBar={t.accentBar}
          iconWrap={t.iconWrap}
          hoverGlow={t.hoverGlow}
          index={i}
          icon={<DeviceGlyph name={card.icon} className="text-current" />}
        />
      </div>
    );
  })}
</div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          What is ZKTeco? — image split section
      ══════════════════════════════════════════ */}
      <section className="border-t border-slate-200/80 bg-white py-10 lg:py-14" aria-labelledby="what-is-zkteco-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left image */}
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-slate-200/80 shadow-[0_30px_80px_-44px_rgba(15,23,42,0.3)] ring-1 ring-slate-900/5"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/zkteco/zkteco-face-terminal.jpg"
                  alt="ZKTeco face recognition biometric terminal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" aria-hidden />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/15">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden /> Deployed across 70+ Indian industrial sites
                  </span>
                </div>
              </div>
              {/* Stats below image */}
              <div className="grid grid-cols-2 divide-x divide-slate-100 border-t border-slate-100">
                {[
                  { label: "Face recognition", stat: "< 1 sec" },
                  { label: "Face capacity", stat: "50,000+" },
                ].map((item) => (
                  <div key={item.label} className="px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{item.label}</p>
                    <p className="mt-1 text-xl font-bold text-slate-900">{item.stat}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right copy */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
            >
              <span className="inline-flex rounded-full border border-blue-200/90 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 shadow-sm ring-1 ring-blue-500/10">
                Background
              </span>
              <h2 id="what-is-zkteco-heading" className="mt-5 text-slate-900">What is ZKTeco?</h2>
              <div className="mt-2 h-1 w-14 rounded-full bg-blue-600" aria-hidden />
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                ZKTeco is a global manufacturer of biometric identification and access control hardware, widely deployed across Indian industry for attendance and physical security. Their face and fingerprint terminals are among the most common devices in Indian factory estates — which also makes them the most common devices we take over under maintenance contracts.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                The distinction that matters: most ZKTeco buyers in India buy a box. What fails eighteen months later isn&apos;t the box — it&apos;s that nobody owned the firmware, the enrolment hygiene, or the integration.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "IP65 rated", sub: "Dust & humidity outdoor models" },
                  { label: "Mixed estates", sub: "ZKTeco + eSSL + Realtime" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-4">
                    <p className="text-base font-bold text-slate-900">{item.label}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{item.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          Device catalogue — image + model cards
      ══════════════════════════════════════════ */}
      <section className="border-t border-slate-200/80 bg-gradient-to-b from-slate-50/60 via-white to-white py-10 lg:py-14" aria-labelledby="catalogue-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex rounded-full border border-blue-200/90 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 shadow-sm ring-1 ring-blue-500/10">
              Model catalogue
            </span>
            <h2 id="catalogue-heading" className="mt-4 text-slate-900">ZKTeco models we deploy</h2>
            <div className="mt-2 h-1 w-14 rounded-full bg-blue-600" aria-hidden />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Representative models across each category — actual selection follows a site survey.
            </p>
          </motion.div>

          <div className="mt-10 space-y-6">
            {deviceCategories.map((cat, i) => (
              <motion.div
                key={cat.category}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-950/[0.04]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: i * 0.06 }}
              >
                <div className={`h-[3px] w-full bg-gradient-to-r ${cat.accentBar}`} aria-hidden />
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
                  {/* Category image */}
                  <div className="relative hidden h-full min-h-[180px] overflow-hidden lg:block">
                    <Image
                      src={cat.img}
                      alt={cat.category}
                      fill
                      className="object-cover"
                      sizes="280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/60" aria-hidden />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                      <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${cat.iconBg}`} aria-hidden>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                          {cat.category === "Face Recognition Terminals" && <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                          {cat.category === "Fingerprint Terminals" && <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3-1 5-3 7M12 8c2 0 3 2 3 5v2M8 14c0 2 1 4 2 5M16 14v2c0-2-1-3-2-4M9 4c2-1 4-1 6 0" />}
                          {cat.category === "Face + Fingerprint Hybrid" && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                          {cat.category === "Access Control Panels & Controllers" && <><rect x="5" y="11" width="14" height="10" rx="2" /><path strokeLinecap="round" d="M8 11V8a4 4 0 018 0v3" /></>}
                          {cat.category === "Turnstiles & Flap Barriers" && <><rect x="3" y="4" width="5" height="16" rx="1" /><rect x="16" y="4" width="5" height="16" rx="1" /><path strokeLinecap="round" d="M8 12h8" /></>}
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-slate-900">{cat.category}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{cat.description}</p>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {cat.models.map((model) => (
                        <div key={model.name} className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/60 p-3">
                          <span className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M20 6L9 17l-5-5" /></svg>
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{model.name}</p>
                            <p className="mt-0.5 text-xs text-slate-500">{model.spec}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700">
                        Enquire about {cat.category.toLowerCase()}
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          Why InOps — feature cards (face page pattern)
      ══════════════════════════════════════════ */}
      <section className="border-t border-slate-200/80 bg-white py-10 lg:py-14" aria-labelledby="why-inops-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <span className="inline-flex rounded-full border border-blue-200/90 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 shadow-sm ring-1 ring-blue-500/10">
              Why InOps
            </span>
            <h2 id="why-inops-heading" className="mt-4 text-slate-900">Why source ZKTeco through InOps rather than a reseller</h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {differentiators.map((item, idx) => {
              const v = accentVisual[item.accent];
              return (
                <motion.div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 ${v.card}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.05 }}
                >
                  <div className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${v.topBar}`} aria-hidden />
                  <div className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl ${v.orb}`} aria-hidden />
                  <div className="relative flex gap-4">
                    <DiffGlyph name={item.icon} accent={item.accent} />
                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-base font-semibold leading-snug tracking-tight text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600/95">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WDMS & device management — image + checklist
      ══════════════════════════════════════════ */}
      <section className="border-t border-slate-200/80 bg-gradient-to-b from-slate-50/60 via-white to-white py-10 lg:py-14" aria-labelledby="wdms-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 shadow-sm ring-1 ring-blue-500/10">
                Fleet management
              </span>
              <h2 id="wdms-heading" className="mt-4 text-slate-900">ZKTeco device management &amp; WDMS</h2>
              <div className="mt-2 h-1 w-14 rounded-full bg-blue-600" aria-hidden />
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                ZKTeco&apos;s WDMS (Workforce Device Management System) enables centralised management of device fleets across multiple sites — firmware push, health monitoring, real-time status, and remote enrolment sync.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                InOps operates WDMS across client estates under AMC. Firmware versions are tracked and updated on a managed schedule rather than left to age on individual devices. Ageing firmware is a common cause of both device failure and security exposure, and it is rarely anyone&apos;s internal responsibility without a managed AMC.
              </p>

              {/* Image below copy */}
              <motion.div
                className="relative mt-8 overflow-hidden rounded-2xl border border-slate-200/80 shadow-md"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: 0.08 }}
              >
                <div className="relative aspect-[16/7]">
                  <Image
                    src="/images/zkteco/zkteco-access-gate.jpg"
                    alt="Industrial access gate with ZKTeco biometric reader"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" aria-hidden />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm ring-1 ring-white/15">
                      Centralised fleet across every site
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-3 lg:pt-16"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
            >
              {[
                { label: "Centralised fleet dashboard", detail: "All ZKTeco devices across every site on one management console." },
                { label: "Remote firmware push", detail: "Firmware updates pushed across the fleet on a managed schedule, no site visits required." },
                { label: "Real-time device health", detail: "Online/offline status, error logs and alert escalation for every device." },
                { label: "Remote enrolment sync", detail: "New worker enrolments distributed to every device across all sites without manual per-device registration." },
                { label: "Takeover AMC", detail: "Existing ZKTeco estates taken over under AMC — even devices supplied by other vendors." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white" aria-hidden>
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                    <p className="mt-0.5 text-sm text-slate-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          Related pages
      ══════════════════════════════════════════ */}
      <section className="border-t border-slate-200/80 bg-white py-10 lg:py-12" aria-labelledby="zkteco-related-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.4, ease: smoothEase }}
          >
            <h2 id="zkteco-related-heading" className="text-xl font-bold text-slate-900">Related</h2>
          </motion.div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "All biometric devices", href: "/biometric-devices", desc: "Face, fingerprint, RFID and turnstiles across all brands.", img: "/images/zkteco/zkteco-fingerprint.jpg" },
              { label: "Face recognition attendance", href: "/face-recognition-attendance", desc: "Industrial face terminals for factory gates.", img: "/images/zkteco/zkteco-face-terminal.jpg" },
              { label: "Access control & turnstiles", href: "/turnstiles-access", desc: "Physical gate enforcement with any reader type.", img: "/images/zkteco/zkteco-access-gate.jpg" },
              { label: "Biometric AMC", href: "/services/biometric-amc", desc: "Maintenance contracts for ZKTeco and mixed estates.", img: "/images/zkteco/zkteco-hero-industrial.jpg" },
            ].map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.38, ease: smoothEase, delay: i * 0.05 }}
              >
                <Link href={link.href} className="group block overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/60 transition hover:border-blue-300 hover:shadow-md">
                  <div className="relative aspect-[16/7] overflow-hidden">
                    <Image src={link.img} alt={link.label} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="(max-width: 640px) 100vw, 25vw" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-blue-700">{link.label} →</p>
                    <p className="mt-1 text-xs text-slate-500">{link.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ — details/summary accordion (face page style)
      ══════════════════════════════════════════ */}
      <section aria-labelledby="zkteco-faq-heading" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 id="zkteco-faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Common questions about ZKTeco devices, supply, integration and AMC in India.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.35)]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
          >
            <div className="divide-y divide-slate-200">
              {faqItems.map((item, index) => (
                <details key={item.q} className="group bg-white/70 px-5 py-5 open:bg-white sm:px-7 sm:py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left marker:hidden">
                    <span className="flex min-w-0 gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold tabular-nums text-blue-700 ring-1 ring-blue-100">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-semibold leading-snug text-slate-950 sm:text-lg">{item.q}</span>
                    </span>
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg leading-none text-slate-600 transition group-open:rotate-45 group-open:border-blue-200 group-open:text-blue-700" aria-hidden>+</span>
                  </summary>
                  <p className="mt-4 pl-12 text-sm leading-relaxed text-slate-600 sm:text-base">{item.a}</p>
                </details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SolutionPageClosingCta
        headingId="zkteco-final-cta-heading"
        heading={<>ZKTeco devices — <span className="font-semibold text-sky-100">supplied, installed and maintained</span> across India</>}
        description="Site survey to AMC, across ZKTeco, eSSL and Realtime. One partner from enquiry to ongoing maintenance."
        primaryLabel="Enquire now"
        secondaryLabel="Talk to sales"
      />
    </div>
  );
}
