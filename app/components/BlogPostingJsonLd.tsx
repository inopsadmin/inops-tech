import type { BlogPost } from "@/app/lib/blogPosts";
import { SITE_NAME, absoluteUrl } from "@/app/lib/site";

type Props = {
  post: BlogPost;
};

export default function BlogPostingJsonLd({ post }: Props) {
  const url = absoluteUrl(`/blog/${post.slug}`);
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
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
