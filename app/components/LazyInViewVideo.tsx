"use client";

import { useEffect, useRef, useState } from "react";

type LazyInViewVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  /** When false, video stays paused until near viewport (saves main-thread + bandwidth). */
  playWhenVisible?: boolean;
};

/**
 * Defers autoplay until the video enters the viewport — cuts initial payload decode and TBT.
 */
export default function LazyInViewVideo({
  playWhenVisible = true,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  preload = "none",
  className,
  ...rest
}: LazyInViewVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!playWhenVisible) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [playWhenVisible]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !autoPlay) return;
    if (!playWhenVisible || visible) {
      void el.play().catch(() => undefined);
    }
  }, [visible, autoPlay, playWhenVisible]);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay={false}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload={preload}
      {...rest}
    />
  );
}
