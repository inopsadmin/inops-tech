import { ModuleData } from "@/app/lib/module";

export default function WorkflowSection({ data }: { data: ModuleData }) {
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
            <h2 className="text-2xl font-bold">How it works</h2>
            <p className="mt-2 max-w-prose text-sm text-blue-200/80">
              A structured, end-to-end workflow that connects data capture to
              governed action — with full visibility at every stage.
            </p>
          </div>
          <span className="w-max shrink-0 text-sm text-blue-300/60">
            End-to-end process
          </span>
        </div>

        {/* Workflow steps grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.workflow.map((step, index) => (
            <div
              key={step}
              className="relative rounded-[18px] p-4"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Step number */}
              <div
                className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl font-extrabold text-white"
                style={{
                  background:
                    "linear-gradient(135deg,#232425,#0F7FFF)",
                }}
              >
                {index + 1}
              </div>

              <b className="mb-2 block text-sm font-bold text-blue-50">
                {step}
              </b>
              <p className="text-xs leading-relaxed text-blue-200/70">
                Validated data flows forward automatically, triggering the next
                governed action without manual handoff.
              </p>

              {/* Connector arrow (except last) */}
              {index < data.workflow.length - 1 && (
                <span className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-blue-400/40 lg:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}