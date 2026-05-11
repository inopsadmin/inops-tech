"use client";

import Image from "next/image";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const LG_PX = 1024;

type GalleryItem = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type BaseProps = {
  title: string;
  intro: string;
  bullets: string[];
  workflow: string;
  closing: string;
  accentBarClassName?: string;
};

export type SolutionModulePanelProps = BaseProps &
  (
    | {
        imageSrc: string;
        imageAlt: string;
        imageWidth: number;
        imageHeight: number;
        imageGallery?: undefined;
      }
    | {
        imageGallery: GalleryItem[];
        imageSrc?: undefined;
        imageAlt?: undefined;
        imageWidth?: undefined;
        imageHeight?: undefined;
      }
  );

const defaultGalleryW = 900;
const defaultGalleryH = 600;

function TextBlock({
  title,
  intro,
  bullets,
  workflow,
  closing,
  accentBarClassName,
  textRef,
}: BaseProps & { textRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={textRef} className="min-w-0">
      <h2 className="text-gray-900">{title}</h2>
      <div className={`mt-2 h-0.5 w-14 rounded-full ${accentBarClassName}`} aria-hidden />
      <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">{intro}</p>
      <ul className="mt-5 list-none space-y-2.5">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 text-sm text-gray-700 sm:text-base">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
        <span className="font-semibold text-gray-800">System workflow. </span>
        {workflow}
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">{closing}</p>
    </div>
  );
}

export default function SolutionModulePanel(props: SolutionModulePanelProps) {
  const {
    title,
    intro,
    bullets,
    workflow,
    closing,
    accentBarClassName = "bg-gradient-to-r from-blue-600 to-cyan-600",
  } = props;

  const textRef = useRef<HTMLDivElement>(null);
  const [galleryHeightPx, setGalleryHeightPx] = useState<number | null>(null);

  const syncGalleryHeight = useCallback(() => {
    const el = textRef.current;
    if (!el || typeof window === "undefined") return;
    if (window.innerWidth < LG_PX) {
      setGalleryHeightPx(null);
      return;
    }
    const h = el.offsetHeight;
    if (h > 0) setGalleryHeightPx(h);
  }, []);

  useLayoutEffect(() => {
    if (!("imageGallery" in props) || !props.imageGallery?.length) return;

    const el = textRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const scheduleSync = () => {
      requestAnimationFrame(() => requestAnimationFrame(syncGalleryHeight));
    };

    scheduleSync();
    const ro = new ResizeObserver(() => scheduleSync());
    ro.observe(el);
    window.addEventListener("resize", syncGalleryHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncGalleryHeight);
    };
  }, [props, syncGalleryHeight]);

  if ("imageGallery" in props && props.imageGallery?.length) {
    const gallery = props.imageGallery;
    return (
      <section className="border-t border-gray-200 bg-slate-50 py-8 lg:py-12">
        <div className="mx-auto w-full max-w-[min(100%,90rem)] px-4 sm:px-5 lg:pl-4 lg:pr-8 xl:pl-5 xl:pr-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: smoothEase }}
            className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] lg:items-start lg:gap-5 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] xl:gap-6 2xl:grid-cols-[minmax(0,28rem)_minmax(0,1fr)]"
          >
            {/* Images: left column width scales up at xl / 2xl; below text on mobile */}
            <div
              className="order-2 flex w-full min-w-0 flex-col gap-3 lg:order-1 lg:min-h-0 lg:w-full lg:max-w-none lg:justify-self-start lg:gap-2"
              style={
                galleryHeightPx != null
                  ? { height: galleryHeightPx, maxHeight: galleryHeightPx }
                  : undefined
              }
            >
              {gallery.map((item) => (
                <div
                  key={item.src}
                  className="relative aspect-[5/4] w-full shrink-0 overflow-hidden ring-slate-950/[0.04] lg:aspect-auto lg:min-h-0 lg:flex-1"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 21rem, (max-width: 1535px) 24rem, 28rem"
                    unoptimized={item.src.endsWith(".avif")}
                  />
                </div>
              ))}
            </div>

            <div className="order-1 min-w-0 lg:order-2 lg:pl-1">
              <TextBlock
                title={title}
                intro={intro}
                bullets={bullets}
                workflow={workflow}
                closing={closing}
                accentBarClassName={accentBarClassName}
                textRef={textRef}
              />
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-gray-200 bg-slate-50 py-8 lg:py-12">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease: smoothEase }}
        >
          <TextBlock
            title={title}
            intro={intro}
            bullets={bullets}
            workflow={workflow}
            closing={closing}
            accentBarClassName={accentBarClassName}
            textRef={textRef}
          />
          {"imageSrc" in props && props.imageSrc && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-md ring-1 ring-slate-950/[0.04]">
              <Image
                src={props.imageSrc}
                alt={props.imageAlt}
                width={props.imageWidth}
                height={props.imageHeight}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 56rem"
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
