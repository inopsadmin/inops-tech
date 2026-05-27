import { getBreadcrumbsForPath } from "@/app/lib/breadcrumbs";
import { jsonLdScriptProps } from "@/app/lib/jsonLd";
import { absoluteUrl } from "@/app/lib/site";

type Props = {
  path: string;
};

export default function BreadcrumbJsonLd({ path }: Props) {
  const crumbs = getBreadcrumbsForPath(path);
  if (crumbs.length < 2) return null;

  const payload = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  return <script {...jsonLdScriptProps(payload)} />;
}
