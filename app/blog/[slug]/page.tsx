import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import BlogPostingJsonLd from "@/app/components/BlogPostingJsonLd";
import { blogPosts, getBlogPost, getBlogPostHref } from "@/app/lib/blogPosts";
import { routeMetadata } from "@/app/lib/seoMetadata";
import { SITE_NAME } from "@/app/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found" };

  return routeMetadata({
    title: `${post.title} | ${SITE_NAME} Blog`,
    description: post.description,
    path: `/blog/${post.slug}`,
    extraKeywords: [post.category, "workforce blog", "InOps insights"],
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="min-h-screen bg-[#eef4f8] text-slate-950">
      <BlogPostingJsonLd post={post} />
      <BreadcrumbJsonLd path={`/blog/${post.slug}`} />

      <header className="border-b border-slate-200/80 bg-white px-4 pt-24 pb-10 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="text-sm font-semibold text-[color:var(--inops-blue)] transition hover:underline"
          >
            ← Back to blog
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--inops-blue)]">
            {post.category}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            <time dateTime={post.dateIso}>{post.date}</time>
            <span aria-hidden> · </span>
            {post.readMinutes} min read
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
        <div className="relative -mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-0">
        {post.sections.map((section, i) => (
          <section key={i} className="mb-8">
            {section.heading ? (
              <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
            ) : null}
            {section.paragraphs.map((p, j) => (
              <p key={j} className="mt-4 text-base leading-8 text-slate-600">
                {p}
              </p>
            ))}
          </section>
        ))}

        {related.length > 0 ? (
          <aside className="mt-14 border-t border-slate-200 pt-10">
            <h2 className="text-lg font-semibold text-slate-900">More from the journal</h2>
            <ul className="mt-6 space-y-4">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={getBlogPostHref(item.slug)}
                    className="group block rounded-xl border border-slate-200/80 bg-white p-4 transition hover:border-[color:var(--inops-blue)]/40 hover:shadow-md"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--inops-blue)]">
                      {item.category}
                    </p>
                    <p className="mt-2 font-semibold text-slate-900 group-hover:text-[color:var(--inops-blue)]">
                      {item.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
    </article>
  );
}
