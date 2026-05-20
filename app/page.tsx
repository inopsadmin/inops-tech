import HomePageClient from "@/app/HomePageClient";
import HomePageJsonLd from "@/app/components/HomePageJsonLd";

/**
 * Server shell: homepage metadata comes from root `layout.tsx`;
 * JSON-LD for the home `WebPage` + primary `SoftwareApplication` is emitted here for indexing.
 */
export default function HomePage() {
  return (
    <>
      <HomePageJsonLd />
      <HomePageClient />
    </>
  );
}
