import { ModuleData } from "@/app/lib/module";

export default function AISection({ data }: { data: ModuleData }) {
  const promptSuggestions = [
    "Show workers with expired documents",
    "Which vendors have billing mismatches",
    "Generate PF compliance report",
    "Summarise site risk by shift",
  ];

  return (
    <section
      className="border-t border-white/5 py-16 md:py-20"
      style={{
        background: "linear-gradient(180deg,#0b1626,#102033)",
        color: "#eef6ff",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section head */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">AI-powered intelligence</h2>
            <p className="mt-2 max-w-prose text-sm text-blue-200/80">
              Embedded AI surfaces exceptions, generates narratives, and
              recommends actions — so your teams respond faster and with greater
              confidence.
            </p>
          </div>
          <span className="w-max shrink-0 text-sm text-blue-300/60">
            Intelligent automation
          </span>
        </div>

        {/* Two-column AI zone */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* AI-generated insights */}
          <div
            className="rounded-[18px] p-5"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 className="mb-4 text-base font-bold text-blue-50">
              AI-generated insights
            </h3>
            <div className="flex flex-col gap-3">
              {data.aiInsights.map((insight) => (
                <div
                  key={insight}
                  className="rounded-2xl p-3.5 text-sm leading-relaxed text-blue-100"
                  style={{
                    background:
                      "color-mix(in srgb, #0F7FFF 8%, rgba(255,255,255,0.03))",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {insight}
                </div>
              ))}
            </div>
          </div>

          {/* Ask the platform */}
          <div
            className="rounded-[18px] p-5"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 className="mb-4 text-base font-bold text-blue-50">
              Ask the platform
            </h3>
            <div className="flex flex-col gap-2.5">
              {promptSuggestions.map((prompt) => (
                <div
                  key={prompt}
                  className="cursor-pointer rounded-xl px-4 py-3 text-sm text-blue-200 transition hover:bg-white/10"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px dashed rgba(255,255,255,0.16)",
                  }}
                >
                  {prompt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}