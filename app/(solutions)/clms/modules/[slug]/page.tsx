import { notFound } from "next/navigation";
import ModuleTemplate from "@/app/components/modules/ModuleTemplate";
import { modules } from "@/app/lib/module";
import ModuleSwitcher from "@/app/components/modules/ModuleSwitcher";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const selectedModule = modules.find(
    (item) => item.slug === slug
  );

  if (!selectedModule) {
    notFound();
  }

  return(
    <main>
      <ModuleSwitcher activeSlug={slug}/>
      <ModuleTemplate data={selectedModule} />
    </main>
  )
}