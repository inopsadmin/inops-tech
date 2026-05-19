import SoftwareApplicationJsonLd from "@/app/components/SoftwareApplicationJsonLd";
import { solutionSchemaByPath } from "@/app/lib/solutionSchema";

type Props = {
  path: string;
};

export default function SolutionSchemaInjector({ path }: Props) {
  const data = solutionSchemaByPath[path];
  if (!data) return null;
  return <SoftwareApplicationJsonLd name={data.name} description={data.description} path={path} />;
}
