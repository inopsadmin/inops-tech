import { getBreadcrumbsForPath } from "@/app/lib/breadcrumbs";
import { jsonLdScriptProps } from "@/app/lib/jsonLd";
import { absoluteUrl } from "@/app/lib/site";

type FaqEntry = { question: string; answer: string };

type Props = {
  path: string;
  faqItems?: FaqEntry[];
};

export default function BreadcrumbJsonLd({ path, faqItems }: Props) {
  const crumbs = getBreadcrumbsForPath(path);
  if (crumbs.length < 2) return null;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    },
  ];

  if (faqItems && faqItems.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqItems.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    });
  }

  return <script {...jsonLdScriptProps({ "@context": "https://schema.org", "@graph": graph })} />;
}
