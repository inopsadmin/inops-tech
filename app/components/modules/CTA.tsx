import { ModuleData } from "@/app/lib/module";

export default function CTASection({ data }: { data: ModuleData }) {
  return (
    <>
      {/* Benefits section */}
      <section className="border-t border-gray-100 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section head */}
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Built for every stakeholder
              </h2>
              <p className="mt-2 max-w-prose text-sm text-gray-500">
                Designed to serve the full enterprise buying committee — from
                plant operations and HR to finance, compliance, and executive
                leadership.
              </p>
            </div>
            <span className="w-max shrink-0 text-sm text-gray-400">
              Cross-functional value
            </span>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[18px] border border-gray-100 bg-gray-50 p-5 shadow-sm"
              >
                <h3 className="mb-2 text-sm font-bold text-gray-900">
                  {benefit.split(" ")[0]} outcome
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="flex flex-col gap-6 rounded-[22px] border border-gray-100 p-8 shadow-sm md:flex-row md:items-center md:justify-between md:p-10"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, #232425 9%, #FAFAFA), color-mix(in srgb, #0F7FFF 12%, #FAFAFA))",
            }}
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Ready to take control?
              </h2>
              <p className="mt-2 text-base text-gray-500">{data.cta}</p>
              <p className="mt-2 text-sm text-gray-400">
                Request a live demo tailored to your sites, workforce scale, and
                compliance requirements.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <button className="rounded-xl bg-linear-to-br from-gray-900 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90">
                Request a Demo
              </button>
              <button className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:bg-gray-50">
                Explore the platform
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}