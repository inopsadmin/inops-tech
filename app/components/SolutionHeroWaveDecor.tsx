"use client";

export type SolutionHeroWaveDecorProps = {
  /** Appended last (e.g. z-index, or `pt-*` / `sm:pt-*` to add space above blobs without fighting `inset-0`). */
  className?: string;
};

/** Bottom wave transition and soft blobs matching `solutions/labourmanagement` hero. */
export default function SolutionHeroWaveDecor({ className }: SolutionHeroWaveDecorProps) {
  return (
    <div
      className={["pointer-events-none absolute inset-0 box-border overflow-hidden", className].filter(Boolean).join(" ")}
      aria-hidden
    >
      <div className="absolute -left-[20%] top-0 h-[min(520px,85vw)] w-[min(680px,120vw)] rounded-full bg-gradient-to-br from-sky-300/45 via-slate-300/38 to-transparent blur-3xl" />
      <div className="absolute -right-[10%] top-[15%] h-[min(380px,70vw)] w-[min(520px,90vw)] rounded-full bg-gradient-to-bl from-indigo-300/22 via-transparent to-transparent blur-3xl" />
      <svg
        className="absolute bottom-0 left-0 right-0 h-20 w-full text-sky-400/35 sm:h-28"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0 80 C 180 40 360 100 540 70 C 720 40 900 95 1080 65 C 1260 35 1380 55 1440 45 L 1440 100 L 0 100 Z"
        />
      </svg>
      <svg
        className="absolute bottom-2 left-0 right-0 h-16 w-full text-slate-400/38 sm:h-24"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0 70 C 220 95 440 35 660 60 C 880 85 1100 30 1320 55 C 1380 62 1410 58 1440 52 L 1440 90 L 0 90 Z"
        />
      </svg>
    </div>
  );
}
