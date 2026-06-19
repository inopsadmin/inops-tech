import { ModuleData } from "@/app/lib/module";

const TONE_PILL: Record<"ok" | "warn" | "err", string> = {
  ok: "bg-emerald-400/15 text-emerald-300",
  warn: "bg-amber-400/15 text-amber-300",
  err: "bg-red-400/15 text-red-300",
};

const TONE_DOT: Record<"ok" | "warn" | "err", string> = {
  ok: "bg-emerald-400",
  warn: "bg-amber-400",
  err: "bg-red-400",
};

export default function Dashboard({ data }: { data: ModuleData }) {
  const { analytics, kpis, feed } = data.dashboard;

  return (
  <section className="w-full bg-[#071a34] py-16">
    <div className="mx-auto max-w-7xl px-4 md:px-8">

      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-4xl font-bold text-white">
            Live command dashboard
          </h2>

          <p className="mt-3 max-w-2xl text-[#c7d8ea]">
            Real-time operational intelligence with exception-first alerts,
            compliance indicators, and workflow status — accessible across
            sites and roles.
          </p>
        </div>

        <div className="text-[#c7d8ea]">
          Always-on visibility
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">

        <div
          className="rounded-3xl border border-white/10 p-6 text-[#edf7ff] shadow-[0_14px_24px_rgba(6,15,26,0.26)]"
          style={{
            background:
              "linear-gradient(180deg,#071424 0%,#0d1f34 100%)",
          }}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm font-bold">
              {data.title} • Live Console
            </div>

            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">
              Operational live
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="mb-4 text-sm font-semibold">
                Analytics overview
              </h4>

              <div className="flex h-40 items-end gap-3">
                {analytics.map((bar) => (
                  <div
                    key={bar.label}
                    className="flex-1 rounded-t-xl"
                    style={{
                      height: `${bar.value}%`,
                      background:
                        "linear-gradient(180deg,#31d4ff,#276dff)",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">

              <div className="grid grid-cols-2 gap-3">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-xs text-[#aac6dd]">
                      {kpi.label}
                    </div>

                    <div className="mt-2 text-2xl font-bold">
                      {kpi.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl bg-linear-to-b from-[#f7fbff] to-[#ebf5ff] p-4">
                <div className="rounded-2xl bg-white p-3 text-[#0d1f34]">
                  <div className="mb-3 flex justify-between text-xs">
                    <span>Mobile app</span>
                    <span>Live</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-12 rounded-xl border border-[#d9eaf6] bg-[#e6f1f9]"
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <h4 className="mb-3 text-sm font-semibold">
              Alert and workflow feed
            </h4>

            <ul className="space-y-3">
              {feed.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${TONE_DOT[item.tone]}`}
                    />
                    <span>{item.label}</span>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs ${TONE_PILL[item.tone]}`}
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="rounded-3xl border border-white/10 p-6 text-[#edf7ff] shadow-[0_14px_24px_rgba(6,15,26,0.26)]"
          style={{
            background:
              "linear-gradient(180deg,#071424 0%,#0d1f34 100%)",
          }}
        >
          <h3 className="mb-5 text-2xl font-bold">
            Alerts and compliance signals
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <span>Document expiry approaching</span>

              <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs text-amber-300">
                Warning
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <span>AI insight pushed to manager</span>

              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">
                Automated
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <span>Rule breach requires approval</span>

              <span className="rounded-full bg-red-400/15 px-3 py-1 text-xs text-red-300">
                Priority
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Mobile access",
              "Workflow status",
              "KPI tracking",
              "AI insight feed",
              "Site-level view",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)};