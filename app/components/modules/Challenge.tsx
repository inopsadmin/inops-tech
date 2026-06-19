import { ModuleData } from "@/app/lib/module";

interface Props {
  data: ModuleData;
}

export default function ChallengeSection({ data }: Props) {
  return (
    <section className="border-t border-gray-100 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section head */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">The challenge</h2>
            <p className="mt-2 max-w-prose text-sm text-gray-500">
              Enterprises operating at scale face compounding workforce risks
              that manual processes and fragmented systems cannot resolve in
              time.
            </p>
          </div>
          <span className="w-max shrink-0 text-sm text-gray-400">
            Why it matters
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-[18px] border border-gray-100 bg-gray-50 p-5 shadow-sm">
            <strong className="mb-2 block text-lg font-semibold text-gray-900">
              {data.description}
            </strong>
          </div>
          <div className="rounded-[18px] border border-gray-100 bg-gray-50 p-5 shadow-sm">
            <p className="mb-4 text-sm font-bold text-gray-800">
              Key operational challenges
            </p>
            <div className="flex flex-wrap gap-2">
              {data.challenges.map((challenge) => (
                <span
                  key={challenge}
                  className="rounded-full border px-3.5 py-2 text-sm text-gray-600"
                  style={{
                    background:
                      "color-mix(in srgb, #0F7FFF 10%, #FAFAFA)",
                    borderColor:
                      "color-mix(in srgb, #0F7FFF 28%, #EAEAEA)",
                  }}
                >
                  {challenge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}