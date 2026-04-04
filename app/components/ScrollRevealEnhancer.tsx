"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const directions = ["left", "right", "top", "bottom"] as const;

function isLikelyHeroSection(el: Element): boolean {
  const cls = el.getAttribute("class") || "";
  if (/relative/.test(cls) && /min-h-\[(?:88vh|280px|300px|320px|340px|360px|380px|400px)\]/.test(cls)) {
    return true;
  }
  const p = el.parentElement;
  if (p?.classList.contains("min-h-screen") && p.firstElementChild === el) {
    return true;
  }
  return false;
}

export default function ScrollRevealEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const main = document.querySelector("main");
    if (!main) return;

    const sections = Array.from(main.querySelectorAll("section")).filter(
      (el) => !el.classList.contains("no-site-reveal") && !isLikelyHeroSection(el),
    );

    let ioIndex = 0;
    const cleanups: Array<() => void> = [];
    const imgs: HTMLImageElement[] = [];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const t = entry.target as HTMLElement;
          t.classList.add("site-reveal-visible");
          io.unobserve(t);
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: [0, 0.08, 0.15] },
    );

    sections.forEach((el, i) => {
      const html = el as HTMLElement;
      html.setAttribute("data-site-reveal-from", directions[i % 4]);
      html.classList.add("site-reveal-pending");

      const rect = html.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > -48;

      if (inView) {
        html.classList.add("site-reveal-visible");
      } else {
        html.style.transitionDelay = `${Math.min(ioIndex * 0.05, 0.45)}s`;
        ioIndex += 1;
        io.observe(html);
      }

      cleanups.push(() => {
        io.unobserve(html);
        html.classList.remove("site-reveal-pending", "site-reveal-visible");
        html.removeAttribute("data-site-reveal-from");
        html.style.transitionDelay = "";
      });
    });

    main.querySelectorAll("section img").forEach((node) => {
      const img = node as HTMLImageElement;
      if (img.closest("[data-no-site-hover]")) return;
      const alt = img.getAttribute("alt");
      if (alt === "") return;
      img.classList.add("site-img-hover");
      imgs.push(img);
    });

    return () => {
      io.disconnect();
      cleanups.forEach((fn) => fn());
      imgs.forEach((img) => img.classList.remove("site-img-hover"));
    };
  }, [pathname]);

  return null;
}
