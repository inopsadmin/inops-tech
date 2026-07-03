import type { BlogPost } from "@/app/lib/blogPosts";
import { jsonLdScriptProps } from "@/app/lib/jsonLd";
import { FOUNDER, SITE_NAME, absoluteUrl, getSiteUrl, siteIconUrl } from "@/app/lib/site";

type Props = {
  post: BlogPost;
};

export default function BlogPostingJsonLd({ post }: Props) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  const siteUrl = getSiteUrl();
  const isResearch = post.type === "research";

  const author = post.personAuthor
    ? {
        "@type": "Person",
        name: post.author,
        jobTitle: FOUNDER.jobTitle,
        url: FOUNDER.url,
        worksFor: { "@id": `${siteUrl}/#organization` },
      }
    : {
        "@type": "Organization",
        name: SITE_NAME,
        url: siteUrl,
      };

  const base = {
    "@context": "https://schema.org",
    "@type": isResearch ? "ScholarlyArticle" : "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [post.image],
    datePublished: post.dateIso,
    dateModified: post.dateModifiedIso ?? post.dateIso,
    author,
    publisher: {
      "@id": `${siteUrl}/#organization`,
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: siteIconUrl() },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    ...(isResearch && post.dataSource
      ? {
          about: {
            "@type": "Dataset",
            name: post.title,
            description: post.dataSource,
            creator: { "@id": `${siteUrl}/#organization` },
          },
        }
      : {}),
  };

  return <script {...jsonLdScriptProps(base)} />;
}
