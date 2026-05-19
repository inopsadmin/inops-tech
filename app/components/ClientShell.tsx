"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const SmoothScroll = dynamic(() => import("./SmoothScroll"), { ssr: false });
const ScrollRevealEnhancer = dynamic(() => import("./ScrollRevealEnhancer"), { ssr: false });

type Props = {
  children: ReactNode;
};

export default function ClientShell({ children }: Props) {
  return (
    <SmoothScroll>
      {children}
      <ScrollRevealEnhancer />
    </SmoothScroll>
  );
}
