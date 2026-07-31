import SecondaryPageJsonLd from "@/app/components/SecondaryPageJsonLd";
import SoftwareApplicationJsonLd from "@/app/components/SoftwareApplicationJsonLd";
import { solutionSchemaByPath } from "@/app/lib/solutionSchema";

type FaqEntry = { question: string; answer: string };

type Props = {
  path: string;
  pageTitle?: string;
  pageDescription?: string;
  faqItems?: FaqEntry[];
};

export default function SolutionSchemaInjector({ path, pageTitle, pageDescription, faqItems }: Props) {
  const data = solutionSchemaByPath[path];
  const title = pageTitle ?? data?.name ?? path;
  const description = pageDescription ?? data?.description ?? "";

  return (
    <>
      <SecondaryPageJsonLd path={path} title={title} description={description} faqItems={faqItems} />
      {data ? (
        <SoftwareApplicationJsonLd name={data.name} description={data.description} path={path} />
      ) : null}
    </>
  );
}
