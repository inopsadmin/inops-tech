import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import ProductJsonLd from "@/app/components/ProductJsonLd";

type FaqEntry = { question: string; answer: string };

type Props = {
  path: string;
  faqItems?: FaqEntry[];
};

export default function ProductSchemaInjector({ path, faqItems }: Props) {
  return (
    <>
      <BreadcrumbJsonLd path={path} faqItems={faqItems} />
      <ProductJsonLd path={path} />
    </>
  );
}
