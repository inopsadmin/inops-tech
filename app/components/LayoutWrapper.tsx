"use client";

import dynamic from "next/dynamic";
import SmoothScroll from "./SmoothScroll";
import ScrollRevealEnhancer from "./ScrollRevealEnhancer";
import Navbar from "./Navbar";

const Footer = dynamic(() => import("./Footer"), { ssr: true });

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <SmoothScroll>
      <div className="site-shell relative flex min-h-screen w-full flex-col">
        <div className="brand-shape-canvas" aria-hidden>
          <div className="brand-shape brand-shape--top-left" />
          <div className="brand-shape brand-shape--top-right" />
          <div className="brand-shape brand-shape--mid-right" />
          <div className="brand-shape brand-shape--bottom-left" />
        </div>

        <Navbar />

        <main className="inops-template relative z-[1] min-w-0 flex-1 font-sans">
          {children}
          <ScrollRevealEnhancer />
        </main>

        <div className="relative z-[1]">
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}
