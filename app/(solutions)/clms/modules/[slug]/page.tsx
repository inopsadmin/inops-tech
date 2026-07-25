import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ModuleTemplate from "@/app/components/modules/ModuleTemplate";
import { modules } from "@/app/lib/module";
import ModuleSwitcher from "@/app/components/modules/ModuleSwitcher";
import { routeMetadata } from "@/app/lib/seoMetadata";

export async function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mod = modules.find((m) => m.slug === slug);
  if (!mod) return {};
  return routeMetadata({
    title: mod.seoTitle ?? `${mod.badge} | CLMS Module — InOps Solutions`,
    description: mod.description,
    path: `/clms/modules/${slug}`,
    extraKeywords: mod.seoKeywords ?? ["CLMS module", "contract labour software India", mod.badge],
  });
}

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