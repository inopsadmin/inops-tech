import { notFound } from "next/navigation";

import ModuleTemplate from "@/app/components/modules/ModuleTemplate";
import { modules } from "@/app/lib/module";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  console.log("Requested slug:", slug);
  console.log("Available slugs:", modules.map(m => m.slug));

  const selectedModule = modules.find(
    (item) => item.slug === slug
  );

  if (!selectedModule) {
    notFound();
  }

  return <ModuleTemplate data={selectedModule} />;
}