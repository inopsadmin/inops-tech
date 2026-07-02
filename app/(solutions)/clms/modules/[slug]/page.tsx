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
    <main className="pt-[calc(var(--home-nav-offset)+var(--module-nav-height,0px))]">
      <ModuleSwitcher activeSlug={slug}/>
      <ModuleTemplate data={selectedModule} />
    </main>
  )
}