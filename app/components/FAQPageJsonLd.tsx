import { jsonLdScriptProps } from "@/app/lib/jsonLd";

export type FAQItem = {
  question: string;
  // answer: string;
  answer: string | React.ReactNode; // ✅ Allow both string and JSX

};

type Props = {
  items: FAQItem[];
};

export default function FAQPageJsonLd({ items }: Props) {
  const payload = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return <script {...jsonLdScriptProps(payload)} />;
}
