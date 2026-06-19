import { ModuleData } from "@/app/lib/module";

interface Props {
  data: ModuleData;
}

export default function HeroSection({ data }: Props) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-gray-50 to-white">
      <div
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #0F7FFF 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-24 lg:px-8">

        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-max items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            {data.badge}
          </span>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 md:text-5xl">
            {data.title}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg">
            {data.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-xl bg-linear-to-br from-gray-900 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90">
              Request a Demo
            </button>
            <button className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:bg-gray-50">
              See How It Works
            </button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3">
            {data.metrics.map((metric) => {
              const parts = metric.split(" ");
              const num = parts[0];
              const label = parts.slice(1).join(" ");
              return (
                <div
                  key={metric}
                  className="rounded-2xl border border-gray-100 bg-gray-50 px-3 py-4 shadow-sm"
                >
                  <div className="text-xl font-extrabold text-gray-900">
                    {num}
                  </div>
                  <div className="mt-1 text-xs text-gray-500">{label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-[18px] border border-white/10 bg-linear-to-b from-[#071424] to-[#0d1f34] p-4 text-white shadow-2xl">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold text-blue-100">
                Live Console
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[11px] text-emerald-300">
                Operational live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-white/8 bg-white/5 p-3">
                <h4 className="mb-3 text-[11px] font-bold text-blue-200">
                  Analytics overview
                </h4>
                <div className="flex h-20 items-end gap-1.5">
                  {[66, 42, 78, 58, 84, 62].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-lg"
                      style={{
                        height: `${h}%`,
                        background: "linear-gradient(180deg,#31d4ff,#276dff)",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-white/8 bg-white/5 p-2.5">
                    <div className="text-[10px] text-blue-300">Workforce</div>
                    <div className="mt-1 text-lg font-extrabold">6482</div>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-white/5 p-2.5">
                    <div className="text-[10px] text-blue-300">Exceptions</div>
                    <div className="mt-1 text-lg font-extrabold">173</div>
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-linear-to-b from-[#f7fbff] to-[#ebf5ff] p-2">
                  <div className="mb-1.5 flex justify-between text-[9px] text-blue-900">
                    <span>Mobile app</span>
                    <span>Live</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="h-7 rounded-lg border border-blue-100 bg-linear-to-b from-[#dff3ff] to-[#f5fbff]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2.5 rounded-xl border border-white/8 bg-white/5 p-3">
              <h4 className="mb-2 text-[11px] font-bold text-blue-200">
                Alert and workflow feed
              </h4>
              <div className="flex flex-col gap-1.5">
                {[
                  { label: "Shift Coverage", status: "Active" },
                  { label: "Leave Status", status: "Updated" },
                  { label: "Attendance Anomaly", status: "Flagged" },
                ].map(({ label, status }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-xl bg-white/4 px-2.5 py-2 text-[11px] text-blue-100"
                  >
                    <span>{label}</span>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}