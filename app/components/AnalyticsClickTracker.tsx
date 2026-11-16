"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsClickTracker() {
  const pathname = usePathname();

  // Fire page_view on client-side route changes so GA4 never shows "(not set)" landing pages
  useEffect(() => {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (!gtag) return;
    gtag("event", "page_view", {
      page_location: window.location.href,
      page_path: pathname,
    });
  }, [pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const a = (e.target as Element).closest("a");
      if (!a) return;

      const href = a.getAttribute("href") ?? "";
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
      if (!gtag) return;

      if (href.startsWith("tel:")) {
        gtag("event", "phone_click", {
          phone_number: href.replace("tel:", "").trim(),
        });
      } else if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        gtag("event", "whatsapp_click", {
          link_url: href,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
