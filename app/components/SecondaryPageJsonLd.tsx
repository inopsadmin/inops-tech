import { jsonLdScriptProps } from "@/app/lib/jsonLd";
import { absoluteUrl, getSiteUrl } from "@/app/lib/site";

type BreadcrumbItem = { name: string; path: string };

type FaqEntry = { question: string; answer: string };

type Props = {
  path: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  faqItems?: FaqEntry[];
};

/**
 * WebPage + BreadcrumbList (+ optional FAQPage) for inner routes.
 * All entities share one @graph so only one <script> tag is emitted —
 * avoiding Next.js App Router inline-script deduplication stripping FAQPage.
 */
export default function SecondaryPageJsonLd({
  path,
  title,
  description,
  breadcrumbs,
  faqItems,
}: Props) {
  const siteUrl = getSiteUrl();
  const pageUrl = absoluteUrl(path);
  const crumbs: BreadcrumbItem[] = breadcrumbs ?? [
    { name: "Home", path: "/" },
    { name: title, path },
  ];

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteUrl}/#website` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
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
      "@id": `${pageUrl}#faqpage`,
      mainEntity: faqItems.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    });
  }

  return <script {...jsonLdScriptProps({ "@context": "https://schema.org", "@graph": graph })} />;
}
