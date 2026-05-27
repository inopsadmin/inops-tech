import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/lib/blogPosts";
import { getSiteUrl, SITEMAP_LAST_MODIFIED } from "@/app/lib/site";

const siteUrl = getSiteUrl();

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

const routes: { path: string; priority: number; changeFrequency: ChangeFreq }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.95, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
  { path: "/brochures", priority: 0.8, changeFrequency: "monthly" },
  { path: "/product/biometric-access-control", priority: 0.92, changeFrequency: "monthly" },
  { path: "/product/turnstiles", priority: 0.85, changeFrequency: "monthly" },
  { path: "/product/accessories", priority: 0.75, changeFrequency: "monthly" },
  { path: "/solutions/time-and-attendance", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/canteen-management", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/payroll-solutions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/labourmanagement", priority: 0.98, changeFrequency: "weekly" },
  { path: "/solutions/mobile-app", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/enterprise-solution", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/ewa", priority: 0.95, changeFrequency: "weekly" },
  { path: "/solutions/visitor-management", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/fixed-asset-management", priority: 0.85, changeFrequency: "monthly" },
];

const blogRoutes = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  priority: 0.75,
  changeFrequency: "monthly" as ChangeFreq,
  lastModified: post.dateIso,
}));

function resolveLastModified(path: string, blogDateIso?: string): Date {
  if (blogDateIso) return new Date(blogDateIso);
  const iso = SITEMAP_LAST_MODIFIED[path];
  if (iso) return new Date(iso);
  return new Date("2026-01-15");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: resolveLastModified(path),
    changeFrequency,
    priority,
  }));

  const blogEntries = blogRoutes.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${siteUrl}${path}`,
    lastModified: resolveLastModified(path, lastModified),
    changeFrequency,
    priority,
  }));

  return [...staticEntries, ...blogEntries];
}
