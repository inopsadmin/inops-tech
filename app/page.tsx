import type { Metadata } from "next";
import HomePageClient from "@/app/HomePageClient";
import FAQPageJsonLd from "@/app/components/FAQPageJsonLd";
import HomePageJsonLd from "@/app/components/HomePageJsonLd";
import { homeFaqItems } from "@/app/lib/homeFaqItems";
import { HOME_PAGE_TITLE } from "@/app/lib/site";

export const metadata: Metadata = {
  title: HOME_PAGE_TITLE,
};

/**
 * Server shell: homepage metadata comes from root `layout.tsx`;
 * JSON-LD for the home `WebPage` + primary `SoftwareApplication` is emitted here for indexing.
 */
export default function HomePage() {
  return (
    <>
      <HomePageJsonLd />
      <FAQPageJsonLd items={homeFaqItems} />
      <HomePageClient />
    </>
  );
}
