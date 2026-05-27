import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import ProductJsonLd from "@/app/components/ProductJsonLd";

type Props = {
  path: string;
};

export default function ProductSchemaInjector({ path }: Props) {
  return (
    <>
      <BreadcrumbJsonLd path={path} />
      <ProductJsonLd path={path} />
    </>
  );
}
