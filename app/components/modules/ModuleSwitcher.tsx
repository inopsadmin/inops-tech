"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const MODULE_TABS = [
  {
    slug: "attendance-leave",
    label: "Time Attendance and Leave",
    accent: "Fraud-proof visibility",
  },
  {
    slug: "wage-payroll",
    label: "Wage/Payroll",
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
] as const;

interface ModuleSwitcherProps {
  activeSlug: string;
}

export default function ModuleSwitcher({ activeSlug }: ModuleSwitcherProps) {

  const navRef = useRef<HTMLDivElement>(null);

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

  return (
      <div
        ref={navRef}
        className="fixed left-0 right-0 z-[100] top-(--home-nav-offset)"
      >
       <div className="border-b border-blue-100 bg-gradient-to-r from-blue-50/95 via-white/95 to-blue-50/95 backdrop-blur-xl shadow-lg">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {MODULE_TABS.map((tab) => {
              const isActive = tab.slug === activeSlug;
              return (
                <Link
                  key={tab.slug}
                  href={`/clms/modules/${tab.slug}`}
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
    </div>
  );
}