import { ModuleData } from "@/app/lib/module";

export default function RoiSection({ data }: { data: ModuleData }) {
  return (
    <section className="border-t border-gray-100 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section head */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Measurable outcomes
            </h2>
            <p className="mt-2 max-w-prose text-sm text-gray-500">
              Organisations using this platform report significant reductions in
              operational risk, manual effort, and compliance exposure — with
              returns visible within the first quarter.
            </p>
          </div>
          <span className="w-max shrink-0 text-sm text-gray-400">
            Proven enterprise value
          </span>
        </div>

        {/* ROI cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.roi.map((item) => (
            <div
              key={item.title}
              className="rounded-[18px] border border-gray-100 bg-gray-50 p-5 shadow-sm"
            >
              <div className="mb-2 text-3xl font-black leading-none text-gray-900">
                {item.title.split(" ")[0]}
              </div>
              <h3 className="mb-1.5 text-base font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}