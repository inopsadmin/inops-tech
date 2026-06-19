import { ModuleData } from "@/app/lib/module";

export default function FeaturesSection({ data }: { data: ModuleData }) {

  return (
    <section className="border-t border-gray-100 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section head */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Platform capabilities
            </h2>
            <p className="mt-2 max-w-prose text-sm text-gray-500">
              Purpose-built for industrial workforce operations — every feature
              is designed to reduce risk, improve visibility, and enforce
              compliance at enterprise scale.
            </p>
          </div>
          <span className="w-max shrink-0 text-sm text-gray-400">
            What&apos;s included
          </span>
        </div>

        {/* Two-column feature cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Core capabilities card */}
          <div className="rounded-[18px] border border-gray-100 bg-gray-50 p-5 shadow-sm">
            <h3 className="mb-1.5 text-base font-bold text-gray-900">
              Core capabilities
            </h3>
            <p className="text-sm text-gray-500">
              A comprehensive suite of tools built for complex, multi-site
              industrial environments.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Live metrics card */}
          <div className="rounded-[18px] border border-gray-100 bg-gray-50 p-5 shadow-sm">
            <h3 className="mb-3 text-base font-bold text-gray-900">
              Live operational metrics
            </h3>

            {/* 2×2 analytics boxes */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { val: "98.4%", label: "compliance visibility" },
                { val: "24/7", label: "workflow monitoring" },
                { val: "31", label: "sites benchmarked" },
                { val: "AI", label: "priority insights" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-gray-200 p-3"
                  style={{
                    background: "color-mix(in srgb, #0F7FFF 8%, #FAFAFA)",
                  }}
                >
                  <div className="text-xl font-extrabold text-gray-900">
                    {val}
                  </div>
                  <div className="text-xs text-gray-500">{label}</div>
                </div>
              ))}
            </div>

            {/* Sparkline */}
            <div
              className="relative mt-3 h-20 overflow-hidden rounded-xl border border-gray-200"
              style={{
                background:
                  "linear-gradient(180deg,color-mix(in srgb,#0F7FFF 14%,transparent),transparent)",
              }}
            >
              <svg
                viewBox="0 0 260 88"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                <path
                  d="M0 58 C24 54,38 48,54 50 S84 70,110 52 S146 24,170 34 S204 74,232 48 S252 40,260 26"
                  fill="none"
                  stroke="#0F7FFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M0 74 H260"
                  stroke="#F2F2F2"
                  strokeDasharray="4 5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}