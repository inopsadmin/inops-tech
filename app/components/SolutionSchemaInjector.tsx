import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import SoftwareApplicationJsonLd from "@/app/components/SoftwareApplicationJsonLd";
import { solutionSchemaByPath } from "@/app/lib/solutionSchema";

type Props = {
  path: string;
};

export default function SolutionSchemaInjector({ path }: Props) {
  const data = solutionSchemaByPath[path];
  return (
    <>
      <BreadcrumbJsonLd path={path} />
      {data ? <SoftwareApplicationJsonLd name={data.name} description={data.description} path={path} /> : null}
    </>
  );
}
