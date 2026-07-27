"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MODULE_TABS = [
  {
    slug: "attendance-leave",
    label: "Time Attendance and Leave",
    accent: "Fraud-proof visibility",
  },
  {
    slug: "wage-payroll",
    label: "Wage & Invoice",
    accent: "Finance automation",
  },
  {
    slug: "contractor-management",
    label: "Contractor Management",
    accent: "Command center",
  },
  {
    slug: "cxo-dashboard",
    label: "CXO Dashboard",
    accent: "Boardroom visibility",
  },
  {
    slug: "background-verification",
    label: "Background Verification",
    accent: "3-hour onboarding",
  },
  {
    slug: "ai-assistance",
    label: "AI Assistance",
    accent: "Future-ready copilot",
  },
  {
    slug: "compliance-report",
    label: "Compliance Report",
    accent: "Audit-ready India stack",
  },
  {
    slug: "challan-reconciliation",
    label: "Challan Reconciliation",
    accent: "PF / ESI validation",
  },
  {
    slug: "gate-compliance",
    label: "Gate Compliance",
    accent: "Compliance at the gate",
  },
  {
    slug: "onboarding-offboarding",
    label: "Onboarding & Offboarding",
    accent: "Full lifecycle management",
  },
] as const;

interface ModuleSwitcherProps {
  activeSlug: string;
}

export default function ModuleSwitcher({ activeSlug }: ModuleSwitcherProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const activeTab = MODULE_TABS.find((tab) => tab.slug === activeSlug);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const setHeightVar = () => {
      document.documentElement.style.setProperty(
        "--module-nav-height",
        `${el.offsetHeight}px`
      );
    };
    setHeightVar();
    const resizeObserver = new ResizeObserver(setHeightVar);
    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  return (
    <div
      ref={navRef}
      className="fixed left-0 right-0 z-[100] top-(--home-nav-offset)"
    >
      <div className="hidden sm:block border-b border-blue-100 bg-gradient-to-r from-blue-50/95 via-white/95 to-blue-50/95 backdrop-blur-xl shadow-lg">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {MODULE_TABS.map((tab) => {
              const isActive = tab.slug === activeSlug;
              return (
                <Link
                  key={tab.slug}
                  href={`/contract-labour-management/modules/${tab.slug}`}
                  className={[
                    "group relative rounded-xl border px-4 py-4 text-left",
                    "transition-all duration-200 ease-out hover:-translate-y-px",
                    isActive
                      ? "border-blue-300 bg-white shadow-lg ring-1 ring-blue-300/40"
                      : "border-slate-200 bg-white/80 shadow-sm hover:border-blue-200/70 hover:bg-blue-50/40 hover:shadow-[0_4px_12px_-4px_rgba(59,130,246,0.15)]",
                  ].join(" ")}
                >
                  {isActive && (
                    <span
                      className="pointer-events-none absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-gradient-to-r from-blue-500 to-blue-400"
                      aria-hidden
                    />
                  )}
                  <span
                    className={[
                      "block text-sm font-bold leading-snug",
                      isActive
                        ? "text-blue-700"
                        : "text-slate-800 group-hover:text-blue-700",
                    ].join(" ")}
                  >
                    {tab.label}
                  </span>
                  <span
                    className={[
                      "mt-1 block text-xs leading-snug",
                      isActive
                        ? "text-blue-500"
                        : "text-slate-400 group-hover:text-blue-400",
                    ].join(" ")}
                  >
                    {tab.accent}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="sm:hidden border-b border-blue-100 bg-white/95 backdrop-blur-xl shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-slate-800">
              {activeTab ? activeTab.label : "Services"}
            </p>
            {activeTab && (
              <p className="truncate text-xs text-blue-500">
                {activeTab.accent}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls="module-switcher-popup"
            className="flex shrink-0 items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-3.5 py-2 text-sm font-semibold text-blue-700 shadow-sm active:scale-[0.97] transition-transform"
          >
            Services
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4"
              aria-hidden
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <button
            type="button"
            aria-label="Close services menu"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[110] bg-slate-900/50 backdrop-blur-[1px] animate-in fade-in duration-150"
          />
          <div
            id="module-switcher-popup"
            role="dialog"
            aria-modal="true"
            aria-label="Services"
            className="fixed inset-x-0 top-(--home-nav-offset) z-[120] max-h-[calc(100vh-var(--home-nav-offset))] overflow-y-auto rounded-b-2xl border-b border-blue-100 bg-white shadow-2xl animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <span className="text-sm font-bold text-slate-800">
                Services
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 active:scale-95 transition"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <path
                    d="M5 5L15 15M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 px-4 py-4 sm:grid-cols-5">
              {MODULE_TABS.map((tab) => {
                const isActive = tab.slug === activeSlug;
                return (
                  <Link
                    key={tab.slug}
                    href={`/contract-labour-management/modules/${tab.slug}`}
                    onClick={() => setIsOpen(false)}
                    className={[
                      "group relative rounded-xl border px-4 py-4 text-left",
                      "transition-all duration-200 ease-out active:scale-[0.98]",
                      isActive
                        ? "border-blue-300 bg-white shadow-lg ring-1 ring-blue-300/40"
                        : "border-slate-200 bg-white/80 shadow-sm",
                    ].join(" ")}
                  >
                    {isActive && (
                      <span
                        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-gradient-to-r from-blue-500 to-blue-400"
                        aria-hidden
                      />
                    )}
                    <span
                      className={[
                        "block text-sm font-bold leading-snug",
                        isActive ? "text-blue-700" : "text-slate-800",
                      ].join(" ")}
                    >
                      {tab.label}
                    </span>
                    <span
                      className={[
                        "mt-1 block text-xs leading-snug",
                        isActive ? "text-blue-500" : "text-slate-400",
                      ].join(" ")}
                    >
                      {tab.accent}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}