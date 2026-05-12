"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const smoothEase = [0.33, 1, 0.68, 1] as const;
/** `amount` kept low so corner tiles beside overflow parents still reliably intersect on load. */
const popupViewport = { once: true, amount: 0.08 };

type AccentKey = "emerald" | "blue" | "violet" | "amber" | "sky" | "rose" | "cyan";

const accentMap: Record<AccentKey, { ping: string; dot: string; iconBg: string; iconText: string; ring: string }> = {
  emerald: {
    ping: "bg-emerald-400",
    dot: "bg-emerald-500",
    iconBg: "bg-emerald-50",
    iconText: "text-emerald-600",
    ring: "ring-emerald-500/20",
  },
  blue: {
    ping: "bg-blue-400",
    dot: "bg-blue-500",
    iconBg: "bg-blue-50",
    iconText: "text-blue-600",
    ring: "ring-blue-500/20",
  },
  violet: {
    ping: "bg-violet-400",
    dot: "bg-violet-500",
    iconBg: "bg-violet-50",
    iconText: "text-violet-600",
    ring: "ring-violet-500/20",
  },
  amber: {
    ping: "bg-amber-400",
    dot: "bg-amber-500",
    iconBg: "bg-amber-50",
    iconText: "text-amber-600",
    ring: "ring-amber-500/20",
  },
  sky: {
    ping: "bg-sky-400",
    dot: "bg-sky-500",
    iconBg: "bg-sky-50",
    iconText: "text-sky-600",
    ring: "ring-sky-500/20",
  },
  rose: {
    ping: "bg-rose-400",
    dot: "bg-rose-500",
    iconBg: "bg-rose-50",
    iconText: "text-rose-600",
    ring: "ring-rose-500/20",
  },
  cyan: {
    ping: "bg-cyan-400",
    dot: "bg-cyan-500",
    iconBg: "bg-cyan-50",
    iconText: "text-cyan-600",
    ring: "ring-cyan-500/20",
  },
};

type IconKey =
  | "scan"
  | "check"
  | "shield"
  | "person"
  | "lock"
  | "bolt"
  | "spark"
  | "phone"
  | "wallet"
  | "qr"
  | "camera"
  | "id"
  | "chart"
  | "clock"
  | "fingerprint"
  | "meal"
  | "door";

const iconPaths: Record<IconKey, ReactNode> = {
  scan: (
    <>
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M3 12h18" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  shield: <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" />,
  person: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  spark: (
    <>
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <path d="m5.6 5.6 2.1 2.1" />
      <path d="m16.3 16.3 2.1 2.1" />
      <path d="m5.6 18.4 2.1-2.1" />
      <path d="m16.3 7.7 2.1-2.1" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M16 12h3" />
      <path d="M3 9h18" />
    </>
  ),
  qr: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3h-3z" />
      <path d="M19 14v7" />
      <path d="M14 19h7" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l2-2h6l2 2h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  id: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="12" r="2.2" />
      <path d="M14 10h4" />
      <path d="M14 14h3" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 16V11" />
      <path d="M12 16V8" />
      <path d="M16 16v-3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  fingerprint: (
    <>
      <path d="M6.5 9a6 6 0 0 1 11 3" />
      <path d="M9 9a3.5 3.5 0 0 1 6 2.5" />
      <path d="M12 11v3" />
      <path d="M9.5 18c.4-1.2.6-2.5.6-3.7" />
      <path d="M15 17.5c.5-1 .8-2 .9-3" />
    </>
  ),
  meal: (
    <>
      <path d="M5 11a7 7 0 0 1 14 0" />
      <path d="M3 13h18" />
      <path d="M5 17h14" />
    </>
  ),
  door: (
    <>
      <path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" />
      <path d="M3 21h18" />
      <circle cx="14" cy="12" r="0.8" fill="currentColor" />
    </>
  ),
};

type PositionKey = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const positionMap: Record<PositionKey, string> = {
  "top-left": "top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8",
  "top-right": "top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8",
  "bottom-left": "bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8",
  "bottom-right": "bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8",
};

export type VideoLivePopupItem = {
  position: PositionKey;
  /**
   * When true, animates on mount (good for hero tiles above the fold). Default uses `whileInView`
   * so tiles replay when scrolled back into view.
   */
  animateOnMount?: boolean;
  /** Tiny uppercase label above the title. Defaults to "Live". */
  label?: string;
  title: string;
  /** Optional secondary line beneath the title. */
  subtitle?: string;
  /** Use a pulsing dot ("pulse") or a solid icon. Default is "pulse". */
  variant?: "pulse" | "icon";
  icon?: IconKey;
  accent?: AccentKey;
  /** Animation delay in seconds. */
  delay?: number;
  /** Hide on small screens to avoid crowding. Default true. */
  hideOnMobile?: boolean;
  /** When set, replaces default corner inset utilities from `position` (avoids conflicting `top-*`/`bottom-*` in one class string). */
  className?: string;
};

export type VideoLivePopupsProps = {
  popups: VideoLivePopupItem[];
};

/**
 * Floating "Live" status tiles to overlay a video frame. Tiles fly in from below
 * each time they enter the viewport, then settle into their absolute position.
 *
 * Place as a **sibling** of the media layer (not inside `overflow-hidden`), inside a
 * `relative` wrapper that matches the video aspect box ,  otherwise corner popups get clipped.
 */
export default function VideoLivePopups({ popups }: VideoLivePopupsProps) {
  return (
    <>
      {popups.map((p, i) => {
        const accent = accentMap[p.accent ?? "emerald"];
        const variant = p.variant ?? "pulse";
        const showOnMobile = p.hideOnMobile === false;
        const baseClass =
          "pointer-events-none absolute z-20 items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-[0_18px_48px_-22px_rgba(15,23,42,0.45)] backdrop-blur";
        const visibilityClass = showOnMobile ? "flex" : "hidden sm:flex";
        /** When `className` sets inset offsets, skip preset corners so Tailwind does not emit conflicting `bottom-*` / `right-*` utilities. */
        const positionClass = p.className?.trim() ? "" : positionMap[p.position];
        const customClass = p.className ?? "";

        const transition = {
          duration: 0.7,
          ease: smoothEase,
          delay: p.delay ?? 0.18 + i * 0.1,
        };

        return (
          <motion.div
            key={`${p.position}-${i}-${p.title}`}
            className={`${baseClass} ${visibilityClass} ${positionClass} ${customClass}`}
            initial={{ opacity: 0, y: 56 }}
            {...(p.animateOnMount
              ? { animate: { opacity: 1, y: 0 } }
              : { whileInView: { opacity: 1, y: 0 }, viewport: popupViewport })}
            transition={transition}
          >
            {variant === "pulse" ? (
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full ${accent.ping} opacity-70`}
                  aria-hidden
                />
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${accent.dot}`}
                  aria-hidden
                />
              </span>
            ) : (
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-xl ${accent.iconBg} ${accent.iconText} ring-1 ${accent.ring}`}
                aria-hidden
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {iconPaths[p.icon ?? "check"]}
                </svg>
              </span>
            )}
            <div className="leading-tight">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                {p.label ?? "Live"}
              </p>
              <p className="text-sm font-semibold text-slate-900">{p.title}</p>
              {p.subtitle ? (
                <p className="mt-0.5 text-[11px] font-medium text-slate-500">{p.subtitle}</p>
              ) : null}
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
