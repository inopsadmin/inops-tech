"use client";

import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

type LenisClass = (typeof import("lenis"))["default"];
type LenisInstance = InstanceType<LenisClass>;

function getReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export default function SmoothScroll({ children }: Props) {
  useEffect(() => {
    if (getReducedMotion()) return;

    let lenis: LenisInstance | null = null;
    let rafId = 0;
    let mounted = true;
    let onClick: ((e: MouseEvent) => void) | null = null;
    const syncWindowScroll = () => window.dispatchEvent(new Event("scroll"));

    const setup = async () => {
      try {
        const { default: Lenis } = await import("lenis");
        if (!mounted) return;

        lenis = new Lenis({
          lerp: 0.1,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.25,
        });

        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = window.requestAnimationFrame(raf);
        };
        rafId = window.requestAnimationFrame(raf);

        lenis.on("scroll", syncWindowScroll);

        onClick = (e: MouseEvent) => {
          const target = e.target as HTMLElement | null;
          const anchor = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
          if (!anchor) return;

          const href = anchor.getAttribute("href");
          if (!href || href === "#") return;

          const id = href.slice(1);
          if (!id) return;

          const el = document.getElementById(id);
          if (!el) return;

          e.preventDefault();
          lenis?.scrollTo(el, { offset: -80, duration: 1.05 });
          history.pushState(null, "", href);
        };

        document.addEventListener("click", onClick, { capture: true });

        const initialHash = window.location.hash;
        if (initialHash && initialHash !== "#") {
          const el = document.getElementById(initialHash.slice(1));
          if (el) {
            lenis.scrollTo(el, { offset: -80, immediate: true });
          }
        }
      } catch (error) {
        // Keep app usable if optional smooth-scroll chunk fails.
        console.warn("SmoothScroll disabled: failed to load Lenis.", error);
      }
    };

    void setup();

    return () => {
      mounted = false;
      lenis?.off("scroll", syncWindowScroll);
      if (onClick) {
        document.removeEventListener("click", onClick, { capture: true } as AddEventListenerOptions);
      }
      window.cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return children;
}

