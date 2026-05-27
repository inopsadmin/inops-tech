import type { BlogPost } from "@/app/lib/blogPosts";
import { jsonLdScriptProps } from "@/app/lib/jsonLd";
import { SITE_NAME, absoluteUrl, getSiteUrl, siteIconUrl } from "@/app/lib/site";

type Props = {
  post: BlogPost;
};

export default function BlogPostingJsonLd({ post }: Props) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  const siteUrl = getSiteUrl();

  const payload = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [post.image],
    datePublished: post.dateIso,
    dateModified: post.dateIso,
    author: {
      "@type": "Organization",
      name: post.author === "admin" ? SITE_NAME : post.author,
    },
    publisher: {
      "@id": `${siteUrl}/#organization`,
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: siteIconUrl(),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  };

  return <script {...jsonLdScriptProps(payload)} />;
}
