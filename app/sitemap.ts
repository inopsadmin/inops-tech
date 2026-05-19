import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/lib/blogPosts";
import { getSiteUrl } from "@/app/lib/site";

const siteUrl = getSiteUrl();

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

const routes: { path: string; priority: number; changeFrequency: ChangeFreq }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.95, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
  { path: "/brochures", priority: 0.8, changeFrequency: "monthly" },
  { path: "/product/biometric-access-control", priority: 0.85, changeFrequency: "monthly" },
  { path: "/product/turnstiles", priority: 0.85, changeFrequency: "monthly" },
  { path: "/product/accessories", priority: 0.75, changeFrequency: "monthly" },
  { path: "/solutions/time-and-attendance", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/canteen-management", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/payroll-solutions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/labourmanagement", priority: 0.95, changeFrequency: "monthly" },
  { path: "/solutions/mobile-app", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/enterprise-solution", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/ewa", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/visitor-management", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/fixed-asset-management", priority: 0.85, changeFrequency: "monthly" },
];

const blogRoutes = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  priority: 0.75,
  changeFrequency: "monthly" as ChangeFreq,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [...routes, ...blogRoutes].map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
