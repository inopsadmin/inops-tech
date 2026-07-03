import { jsonLdScriptProps } from "@/app/lib/jsonLd";

export type HowToStep = {
  name: string;
  text: string;
  image?: string;
  url?: string;
};

type Props = {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration e.g. "PT30M", "P1D"
  estimatedCost?: { currency: string; value: string };
  steps: HowToStep[];
};

export default function HowToJsonLd({ name, description, totalTime, estimatedCost, steps }: Props) {
  const payload: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime ? { totalTime } : {}),
    ...(estimatedCost
      ? { estimatedCost: { "@type": "MonetaryAmount", currency: estimatedCost.currency, value: estimatedCost.value } }
      : {}),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.image ? { image: { "@type": "ImageObject", url: s.image } } : {}),
      ...(s.url ? { url: s.url } : {}),
    })),
  };

  return <script {...jsonLdScriptProps(payload)} />;
}
