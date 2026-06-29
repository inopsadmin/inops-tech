import Link from "next/link";

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
  return (
    <div
      className="sticky z-40 w-full"
      style={{ top: "var(--home-nav-offset)" }}
    >
      <div className="border-b border-slate-200/80 bg-white/95 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.10)] backdrop-blur-md">
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
                      ? "border-blue-200 bg-blue-50 shadow-[0_2px_8px_-2px_rgba(59,130,246,0.25)] ring-1 ring-blue-300/40"
                      : "border-slate-200 bg-white shadow-sm hover:border-blue-200/70 hover:bg-blue-50/40 hover:shadow-[0_4px_12px_-4px_rgba(59,130,246,0.15)]",
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