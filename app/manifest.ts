import type { MetadataRoute } from "next";
import { DEFAULT_DESCRIPTION, SITE_ICON_PATH, SITE_NAME, getSiteUrl } from "@/app/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  const base = getSiteUrl();
  return {
    name: SITE_NAME,
    short_name: "InOps",
    description: DEFAULT_DESCRIPTION.slice(0, 160),
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#1d5fbf",
    icons: [
      {
        src: SITE_ICON_PATH,
        type: "image/png",
        sizes: "any",
        purpose: "any",
      },
    ],
    lang: "en-IN",
    id: base,
  };
}
