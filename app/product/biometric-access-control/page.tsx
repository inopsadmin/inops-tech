"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";
import VideoLivePopups from "@/app/components/VideoLivePopups";
const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.08, margin: "0px 0px -12% 0px" } as const;

const smartAccessShowcaseImage =
  "/WhatsApp Image 2026-04-29 at 3.18.32 PM.jpeg";
const smartAccessShowcaseVideo = "/genrate_image_in_video_202605080051.mp4";
const deviceCategoryCards = [
  {
    title: "Face Recognition",
    description: "Sub-second 3D facial authentication with anti-spoofing technology for touchless entry.",
    image:
      "/face reconiging.png",
    icon: "face",
  },
  {
    title: "Fingerprint Systems",
    description: "High-capacity optical sensors for reliable biometric logging in high-traffic zones.",
    image:
      "/fingerprintsystem.png",
    icon: "finger",
  },
  {
    title: "RFID & Card Access",
    description: "Standard proximity and smart card readers for quick, legacy-compatible entry points.",
    image:
      "/REID card.png",
    icon: "card",
  },
  {
    title: "Integrated Kiosks",
    description: "Multimodal pedestals combining face, QR, and thermal sensing for lobby management.",
    image:
      "/KIOSK.png",
    icon: "kiosk",
  },
] as const;

const touchlessFaceReaderShowcaseImage = "/images/Screenshot 2026-05-04 220326.png";
const touchlessFaceReaderShowcaseVideo = "/genrate_this_image_in_video_202605080054.mp4";

const readerSpecHighlights = [
  { title: "Ultra-fast recognition", text: "Recognition speed ≤ 1 second with high accuracy.", featureIcon: "bolt" as const },
  { title: "Smart fill light", text: "Adaptive brightness for low-light environments.", featureIcon: "bulb" as const },
  { title: "Advanced anti-spoofing", text: "Detects photo, video, and 3D mask attacks.", featureIcon: "shield" as const },
  { title: "Multi-card support", text: "Supports 125 kHz EM card and 13.56 MHz IC card.", featureIcon: "idcard" as const },
  { title: "Wide pose angle", text: "Accurate recognition up to 15° face angle.", featureIcon: "faceframe" as const },
  { title: "Multiple auth modes", text: "Face / card / password / fingerprint.", featureIcon: "fingerprint" as const },
  { title: "Flexible connectivity", text: "TCP/IP, WiFi, Wiegand, and RS485.", featureIcon: "wifi" as const },
] as const;

const readerSpecificationColumns = [
  { label: "Display", value: '2.8" / 5" / 7" touch options', specIcon: "monitor" as const },
  { label: "Face capacity", value: "Up to 10,000 (expandable)", specIcon: "users" as const },
  { label: "Transactions", value: "Up to 200,000 logs", specIcon: "chart" as const },
  { label: "Recognition type", value: "Visible light facial recognition", specIcon: "face" as const },
  { label: "Operating system", value: "Linux-based", specIcon: "chip" as const },
  { label: "Authentication", value: "Face / card / password / fingerprint", specIcon: "lock" as const },
] as const;

const readerAdvancedCapabilities = [
  "Conditional user access control",
  "Geo-fenced mobile app integration",
  "Custom firmware support",
  "CCTV system integration",
] as const;

const systemFlowSteps = [
  { step: "01", title: "User Authentication", gradient: "from-sky-500 to-blue-600" },
  { step: "02", title: "Identity Verification", gradient: "from-blue-600 to-indigo-600" },
  { step: "03", title: "Access Granted", gradient: "from-indigo-600 to-violet-600" },
  { step: "04", title: "Synced to System", gradient: "from-violet-600 to-purple-600" },
  { step: "05", title: "Reporting & Dashboard", gradient: "from-emerald-500 to-teal-600" },
] as const;

function ReaderFeatureGlyph({ name }: { name: (typeof readerSpecHighlights)[number]["featureIcon"] }) {
  const ring =
    "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-blue-200 bg-white text-blue-600 shadow-sm";
  const c = "h-5 w-5";
  return (
    <span className={ring} aria-hidden>
      {name === "bolt" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      )}
      {name === "bulb" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 3-2 5-3 6v1H8v-1c-1-1-3-3-3-6a7 7 0 017-7z" />
        </svg>
      )}
      {name === "shield" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        </svg>
      )}
      {name === "idcard" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <circle cx="9" cy="11" r="2" />
          <path d="M13 10h4M13 14h4" />
        </svg>
      )}
      {name === "faceframe" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <circle cx="10" cy="11" r="1" />
          <circle cx="14" cy="11" r="1" />
          <path d="M9 15c.8.7 1.8 1 3 1s2.2-.3 3-1" />
        </svg>
      )}
      {name === "fingerprint" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 11c0 3-1 5-3 7M12 8c2 0 3 2 3 5v2M8 14c0 2 1 4 2 5M16 14v2c0 2-1 3-2 4M9 4c2-1 4-1 6 0" />
        </svg>
      )}
      {name === "wifi" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12.55a11 11 0 0114.08 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
        </svg>
      )}
    </span>
  );
}

function ReaderSpecColumnGlyph({ name }: { name: (typeof readerSpecificationColumns)[number]["specIcon"] }) {
  const wrap = "mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600";
  const c = "h-5 w-5";
  return (
    <span className={wrap} aria-hidden>
      {name === "monitor" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      )}
      {name === "users" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2" />
          <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
          <path d="M15 18c0-1.8 1.2-3.3 2.9-3.8" />
        </svg>
      )}
      {name === "chart" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19h16M7 16V9M12 16V5M17 16v-5" />
        </svg>
      )}
      {name === "face" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="10" r="3" />
          <path d="M6 18c0-3.3 3-6 6-6s6 2.7 6 6" />
        </svg>
      )}
      {name === "chip" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="7" y="7" width="10" height="10" rx="1" />
          <path d="M7 10H4M7 14H4M20 10h-3M20 14h-3M10 7V4M14 7V4M10 20v-3M14 20v-3" />
        </svg>
      )}
      {name === "lock" && (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 018 0v3" />
        </svg>
      )}
    </span>
  );
}

export default function BiometricAccessControlPage() {
  return (
    <>
      <div className="solution-product-section-gap min-h-screen bg-white text-gray-900">
        <motion.section
          className="relative w-full overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/95 via-white to-sky-50/35 pt-8 sm:pt-10 lg:pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-300/[0.18] blur-3xl" />
            <div className="absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-blue-400/[0.12] blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-px w-[min(90%,56rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />
          </div>

          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.06 }}
          >
            <div className="relative min-h-[340px] w-full sm:min-h-[390px] lg:min-h-[430px]">
              <div className="relative mt-10 h-52 w-full sm:h-60 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2">
                <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-400/25 via-blue-500/15 to-indigo-600/20 blur-2xl lg:block lg:rounded-l-[2rem] lg:rounded-r-none" aria-hidden />
                <div className="relative h-full overflow-hidden lg:h-full lg:rounded-l-[2rem]">
                  <video
                    className="absolute inset-0 h-full w-full object-cover mt-20 object-[center_35%] sm:object-center lg:object-[center_40%]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={smartAccessShowcaseImage}
                    aria-label="Enterprise biometric access devices in a modern secure facility"
                  >
                    <source src={smartAccessShowcaseVideo} type="video/mp4" />
                  </video>
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-12 lg:block lg:w-32 lg:from-white lg:via-white/90"
                    aria-hidden
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/[0.06] to-transparent lg:hidden" aria-hidden />
                </div>
                <VideoLivePopups
                  popups={[
                    {
                      position: "top-left",
                      label: "Live",
                      className: "top-10 -left-10 sm:-top-10 sm:-left-10 md:-top-10 md:-left-10 lg:-top-10 lg:-left-10 xl:top-7 xl:-left-15",
                      title: "Access secured",
                      accent: "emerald",
                    },
                    {
                      position: "bottom-right",
                      className: "bottom-10 right-10 sm:-bottom-10 sm:-right-10 md:-bottom-10 md:-right-10 lg:-bottom-10 lg:-right-10 xl:bottom-0 xl:-right-2",
                      label: "Verified",
                      title: "Face + fingerprint",
                      subtitle: "Anti-spoof active",
                      variant: "icon",
                      icon: "fingerprint",
                      accent: "blue",
                    },
                  ]}
                />
              </div>
              <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                <div className="max-w-3xl px-2 py-8 sm:px-4 sm:py-10 lg:max-w-xl lg:py-16 lg:pr-8">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-800 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/10 backdrop-blur-md">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" aria-hidden />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]" aria-hidden />
                      </span>
                      Face based attendance
                    </span>
                  </motion.div>
                  <motion.h1 className="mt-5 text-slate-900 sm:mt-6"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
                  >
                    Smart access.{" "}
                    <span className="font-semibold text-[color:var(--inops-blue)]">
                      Secure workforce.
                    </span>
                  </motion.h1>
                  <motion.p
                    className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base lg:text-[1.0625rem]"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.14 }}
                  >
                    Advanced biometric devices engineered for high-precision attendance, access control, and seamless
                    workforce management across industrial environments.
                  </motion.p>
                  <motion.div
                    className="mt-8 sm:mt-9"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                  >
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 ring-1 ring-white/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Request Demo
                      <svg
                        className="h-4 w-4 transition group-hover:translate-x-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* <section id="device-categories" className="border-t border-gray-200 py-8 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-slate-900">Device Categories</h2>
              <p className="mt-3 text-base text-gray-500 sm:text-lg">
                Flexible authentication methods designed for different operational needs.
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {deviceCategoryCards.map((card, idx) => (
                <motion.article
                  key={card.title}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.05 }}
                >
                  <div className="relative h-44 bg-gray-50 sm:h-48">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain object-center p-2"
                      sizes="(max-width: 1280px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center text-gray-500">
                        {card.icon === "face" && (
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <rect x="4" y="4" width="16" height="16" rx="3" />
                            <circle cx="9" cy="10" r="1" />
                            <circle cx="15" cy="10" r="1" />
                            <path d="M8 15c1.1.9 2.3 1.2 4 1.2s2.9-.3 4-1.2" />
                          </svg>
                        )}
                        {card.icon === "finger" && (
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <path d="M12 3a3 3 0 013 3v5M8.5 8V7a3.5 3.5 0 017 0v6M5 12v2a7 7 0 0014 0v-2" />
                          </svg>
                        )}
                        {card.icon === "card" && (
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <rect x="3" y="6" width="18" height="12" rx="2" />
                            <path d="M3 10h18" />
                          </svg>
                        )}
                        {card.icon === "kiosk" && (
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <rect x="7" y="3" width="10" height="18" rx="2" />
                            <path d="M10 7h4M10 11h4M10 15h4" />
                          </svg>
                        )}
                      </span>
                      <h3 className="text-slate-900">{card.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{card.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section> */}

        <section className="relative overflow-hidden border-t border-slate-200/90 bg-gradient-to-b from-slate-50/95 via-white to-white py-12 lg:py-16">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-400/[0.11] blur-3xl" />
            <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-indigo-400/[0.09] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-800 shadow-sm shadow-blue-500/5 ring-1 ring-blue-500/10 backdrop-blur-sm">
                Platform strengths
              </span>
              <h2 className="mt-4 text-slate-900">
                <span className="text-slate-900">
                  Built for Speed, Accuracy, and Reliability
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Enterprise-grade biometrics tuned for throughput, trust, and uptime on the ground.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-7">
              {[
                {
                  title: "Fast Face Recognition",
                  description: "Proprietary algorithms deliver sub-second authentication for seamless movement.",
                  icon: "face",
                  tile: "from-sky-500 to-blue-600",
                  glow: "from-sky-400 to-blue-500",
                },
                {
                  title: "Multi-mode Authentication",
                  description: "Support for face, fingerprint, RFID, QR, and PIN in a single unified system.",
                  icon: "grid",
                  tile: "from-indigo-500 to-violet-600",
                  glow: "from-indigo-400 to-violet-500",
                },
                {
                  title: "Anti-spoofing Tech",
                  description: "Liveness detection prevents unauthorized access via photos or 3D masks.",
                  icon: "shield",
                  tile: "from-emerald-500 to-teal-600",
                  glow: "from-emerald-400 to-teal-500",
                },
                {
                  title: "High User Capacity",
                  description: "Storage for up to 100,000 users and millions of transaction logs locally.",
                  icon: "users",
                  tile: "from-violet-500 to-purple-600",
                  glow: "from-violet-400 to-purple-500",
                },
                {
                  title: "Intuitive UI",
                  description: "Crisp touchscreen interfaces with multi-language support and visual feedback.",
                  icon: "monitor",
                  tile: "from-cyan-500 to-blue-600",
                  glow: "from-cyan-400 to-blue-500",
                },
                {
                  title: "Extreme Durability",
                  description: "Operational in low-light, high-humidity, and industrial dust environments.",
                  icon: "chart",
                  tile: "from-amber-500 to-orange-600",
                  glow: "from-amber-400 to-orange-500",
                },
              ].map((item, idx) => (
                <motion.article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/85 bg-white/90 p-5 shadow-md shadow-slate-900/[0.04] ring-1 ring-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200/90 hover:shadow-xl hover:shadow-blue-500/10 sm:p-6"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.42, ease: smoothEase, delay: idx * 0.05 }}
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${item.glow} opacity-0 blur-2xl transition duration-500 group-hover:opacity-25`}
                    aria-hidden
                  />
                  <div className="relative flex flex-col gap-4">
                    <span
                      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.tile} text-white shadow-lg shadow-slate-900/15 ring-2 ring-white`}
                    >
                      {item.icon === "face" && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <rect x="4" y="4" width="16" height="16" rx="3" />
                          <circle cx="9" cy="10" r="1" />
                          <circle cx="15" cy="10" r="1" />
                          <path d="M8 15c1.1.9 2.3 1.2 4 1.2s2.9-.3 4-1.2" />
                        </svg>
                      )}
                      {item.icon === "grid" && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <rect x="4" y="4" width="6" height="6" />
                          <rect x="14" y="4" width="6" height="6" />
                          <rect x="4" y="14" width="6" height="6" />
                          <rect x="14" y="14" width="6" height="6" />
                        </svg>
                      )}
                      {item.icon === "shield" && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
                        </svg>
                      )}
                      {item.icon === "users" && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <circle cx="9" cy="8" r="3" />
                          <circle cx="17" cy="9" r="2" />
                          <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
                          <path d="M15 18c0-1.8 1.2-3.3 2.9-3.8" />
                        </svg>
                      )}
                      {item.icon === "monitor" && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <rect x="3" y="4" width="18" height="12" rx="2" />
                          <path d="M8 20h8M12 16v4" />
                        </svg>
                      )}
                      {item.icon === "chart" && (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M4 19h16M7 16V8M12 16V5M17 16v-4" />
                        </svg>
                      )}
                    </span>
                    <div>
                      <h3 className="text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="reader-specs"
          className="border-t  border-gray-200 py-12 lg:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/40"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-12 ">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <motion.div
                className="text-left"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-700 shadow-sm">
                  <svg className="h-3.5 w-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
                  </svg>
                  Face recognition device
                </span>
                <h2 className="mt-5 text-slate-900">
                  Touchless face recognition for{" "}
                  <span className="text-blue-600">secure &amp; fast access</span>
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                  Visible light facial recognition with advanced anti-spoofing and high-speed authentication for modern access control.
                </p>
              </motion.div>

              <motion.div
                className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.05 }}
              >
                <div
                  className="pointer-events-none absolute -right-8 top-10 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl sm:h-80 sm:w-80"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -left-8 bottom-6 h-44 w-44 rounded-full bg-sky-100/55 blur-2xl"
                  aria-hidden
                />

                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_30px_80px_-44px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/5">
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-sky-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="relative aspect-[16/11] w-full bg-gradient-to-br from-slate-50 via-white to-sky-50/40">
                    <video
                      className="absolute inset-0 h-full w-full object-contain p-5 sm:p-7"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={touchlessFaceReaderShowcaseImage}
                      aria-label="Touchless face recognition terminal on display with secure access branding"
                    >
                      <source src={touchlessFaceReaderShowcaseVideo} type="video/mp4" />
                    </video>
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_55%_45%,rgba(59,130,246,0.14),transparent_60%)]" aria-hidden />
                    <VideoLivePopups
                      popups={[
                        {
                          position: "bottom-right",
                          label: "Anti-spoof",
                          title: "Visible-light scan",
                          className:
                            "bottom-8 right-8 sm:bottom-10 sm:right-10 lg:bottom-12 lg:right-12 xl:bottom-10 xl:right-10",
                          variant: "icon",
                          icon: "shield",
                          accent: "blue",
                        },
                      ]}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
              {readerSpecHighlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm shadow-slate-900/[0.04] transition-colors duration-300 hover:border-slate-300/80"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.35, ease: smoothEase, delay: idx * 0.04 }}
                >
                  <ReaderFeatureGlyph name={item.featureIcon} />
                  <div>
                    <h3 className="text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
              <motion.div
                className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase }}
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600" aria-hidden>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 4h4l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
                      <path d="M6 12h12" />
                    </svg>
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">Specifications</p>
                </div>
                <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                  {readerSpecificationColumns.map((row) => (
                    <div key={row.label} className="flex flex-col sm:items-start xl:items-center text-center sm:text-left xl:text-center">
                      <ReaderSpecColumnGlyph name={row.specIcon} />
                      <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">{row.label}</dt>
                      <dd className="mt-1 text-sm font-semibold leading-snug text-slate-900">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>

              <motion.div
                className="rounded-2xl bg-gradient-to-b from-blue-950 to-slate-900 p-6 text-white shadow-xl sm:p-8"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: 0.06 }}
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sky-300" aria-hidden>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-white">Advanced capabilities</p>
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-200">
                  {readerAdvancedCapabilities.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300" aria-hidden>
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.4, ease: smoothEase, delay: 0.08 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-9 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
              >
                Request a demo
                <span className="ml-2 text-base leading-none" aria-hidden>
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 bg-white px-9 py-3.5 text-xs font-bold uppercase tracking-widest text-blue-700 transition hover:bg-blue-50"
              >
                Contact sales
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-slate-200/90 bg-gradient-to-b from-white via-slate-50/60 to-sky-50/35 py-12 lg:py-16">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute left-[20%] top-24 h-56 w-56 rounded-full bg-blue-400/[0.09] blur-3xl" />
            <div className="absolute bottom-16 right-[15%] h-64 w-64 rounded-full bg-indigo-400/[0.08] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-800 shadow-sm ring-1 ring-blue-500/10 backdrop-blur-sm">
                End-to-end flow
              </span>
              <h2 className="mt-4">
                <span className="text-slate-900">Seamless System Flow</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Integrated authentication that bridges hardware and workforce management software.
              </p>
            </motion.div>

            <motion.div
              className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white/90 p-6 shadow-[0_24px_48px_-28px_rgba(15,23,42,0.12)] ring-1 ring-white backdrop-blur-md sm:p-8 lg:mt-12 lg:p-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.04)_0%,transparent_45%,rgba(99,102,241,0.05)_100%)]" aria-hidden />

              <div className="relative hidden lg:block">
                <div
                  className="pointer-events-none absolute left-[6%] right-[6%] top-[1.85rem] z-0 h-[3px] rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-500 opacity-55"
                  aria-hidden
                />
                <div className="relative z-10 grid grid-cols-5 gap-4">
                  {systemFlowSteps.map((item, idx) => (
                    <motion.div
                      key={item.step}
                      className="flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.38, ease: smoothEase, delay: idx * 0.06 }}
                    >
                      <span
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-sm font-bold tabular-nums text-white shadow-lg shadow-slate-900/15 ring-4 ring-white`}
                      >
                        {item.step}
                      </span>
                      <p className="mt-5 max-w-[9.5rem] text-sm font-semibold leading-snug text-slate-900">{item.title}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative space-y-0 lg:hidden">
                {systemFlowSteps.map((item, idx) => (
                  <motion.div
                    key={item.step}
                    className="relative flex gap-4 last:pb-0"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.38, ease: smoothEase, delay: idx * 0.05 }}
                  >
                    <div className="flex w-14 shrink-0 flex-col items-center">
                      <span
                        className={`relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-xs font-bold tabular-nums text-white shadow-md ring-4 ring-white`}
                      >
                        {item.step}
                      </span>
                      {idx < systemFlowSteps.length - 1 ? (
                        <div
                          className="mt-1 min-h-[2.25rem] w-[3px] flex-1 rounded-full bg-gradient-to-b from-blue-400 via-indigo-400 to-violet-500 opacity-70"
                          aria-hidden
                        />
                      ) : null}
                    </div>
                    <div className="min-w-0 pb-8 pt-1">
                      <p className="text-base font-semibold leading-snug text-slate-900">{item.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-gray-200 py-8 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-slate-900">Deployment Environments</h2>
              <p className="mt-3 text-base text-gray-500 sm:text-lg">
                Scalable solutions for every sector.
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {[
                {
                  title: "Entry & Exit Access Control",
                  subtitle: "Secure turnstiles and gates for mass workforce entry.",
                  image:
                    "/images/77820a_f483a36175aa4407b8e94126cafb9e71~mv2.avif",
                },
                {
                  title: "Workforce Attendance Tracking",
                  subtitle: "Automated logging for payroll and HR management.",
                  image:
                    "/Gemini_Generated_Image_qpp7k7qpp7k7qpp7.png",
                },
                {
                  title: "Restricted Area Access",
                  subtitle: "Multi-factor authentication for sensitive zones.",
                  image:
                    "/images/multifactor authentication hero.webp",
                },
                {
                  title: "High-Volume Environments",
                  subtitle: "Reliable performance for shift changes in logistics.",
                  image:
                    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
                },
              ].map((card, idx) => (
                <motion.article
                  key={card.title}
                  className="group relative overflow-hidden rounded-xl border border-gray-200"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: idx * 0.05 }}
                >
                  <div className="relative aspect-[16/8]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" aria-hidden />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h3 className="text-white">{card.title}</h3>
                    <p className="mt-1 text-sm text-white/85">{card.subtitle}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-slate-200/90 bg-gradient-to-b from-white via-slate-50/50 to-white py-12 lg:py-16">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute right-[12%] top-20 h-56 w-56 rounded-full bg-blue-400/[0.08] blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex rounded-full border border-slate-200/90 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-sm ring-1 ring-slate-900/5 backdrop-blur-sm">
                Hardware DNA
              </span>
              <h2 className="mt-4">
                <span className="text-slate-900">Universal Device Excellence</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Built for harsh floors, heavy traffic, and always-on operations—without sacrificing precision.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              {[
                {
                  title: "Rugged Industrial Design",
                  description:
                    "Encased in aircraft-grade aluminum and impact-resistant glass, our devices are IP65 rated for dust and humidity protection.",
                  gradient: "from-slate-600 to-slate-800",
                },
                {
                  title: "High-Speed Processing",
                  description:
                    "Equipped with dedicated NPU (Neural Processing Unit) cores for lightning-fast biometric template matching.",
                  gradient: "from-blue-600 to-indigo-700",
                },
                {
                  title: "Enterprise Capacity",
                  description:
                    "Designed for massive deployments, managing distributed data across thousands of devices from a central hub.",
                  gradient: "from-violet-600 to-purple-700",
                },
              ].map((item, idx) => (
                <motion.article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/85 bg-white/95 p-6 shadow-md shadow-slate-900/[0.04] ring-1 ring-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200/90 hover:shadow-xl"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.42, ease: smoothEase, delay: idx * 0.06 }}
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${item.gradient} opacity-[0.08] blur-2xl transition duration-500 group-hover:opacity-[0.14]`}
                    aria-hidden
                  />
                  <div className={`mb-4 inline-flex h-1.5 w-14 rounded-full bg-gradient-to-r ${item.gradient}`} aria-hidden />
                  <h3 className="text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-slate-200/90 bg-gradient-to-b from-sky-50/40 via-white to-white py-12 lg:py-16">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-16 bottom-24 h-72 w-72 rounded-full bg-indigo-400/[0.09] blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-14">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <span className="inline-flex rounded-full border border-blue-200/90 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-800 shadow-sm ring-1 ring-blue-500/10">
                  Integrations
                </span>
                <h2 className="mt-4 text-slate-900">
                  Seamlessly Connected to{" "}
                  <span className="font-semibold text-[color:var(--inops-blue)]">Your Systems</span>
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                  Modern APIs and native integrations ensure your data moves where you need it, when you need it.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    {
                      title: "API-Based Integration",
                      description: "RESTful APIs for custom software hooks.",
                      accent: "from-sky-500 to-blue-600",
                    },
                    {
                      title: "Real-time Data Sync",
                      description: "Zero-latency updates for immediate attendance visibility.",
                      accent: "from-indigo-500 to-violet-600",
                    },
                    {
                      title: "Centralized Dashboard",
                      description: "Manage all hardware globally from a single browser interface.",
                      accent: "from-emerald-500 to-teal-600",
                    },
                  ].map((item) => (
                    <li
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm ring-1 ring-white backdrop-blur-sm transition hover:border-blue-200/90 hover:shadow-md"
                    >
                      <span
                        className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-md ring-2 ring-white`}
                        aria-hidden
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                          <path d="M6 12l4 4 8-8" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <p className="text-base font-semibold text-slate-900">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="relative overflow-hidden mt-40 rounded-[1.75rem] border border-slate-200/90 bg-white/90 p-6 shadow-[0_24px_48px_-28px_rgba(15,23,42,0.14)] ring-1 ring-white backdrop-blur-md sm:p-8"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(59,130,246,0.06)_0%,transparent_55%)]" aria-hidden />
                <p className="relative text-center text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Data fabric</p>
                <div className="relative mt-6 grid grid-cols-2 gap-3">
                  {[
                    {
                      label: "DEVICES",
                      gradient: "from-sky-500 to-blue-600",
                      icon: (
                        <>
                          <rect x="3" y="4" width="18" height="12" rx="2" />
                          <path d="M8 20h8M12 16v4" />
                        </>
                      ),
                    },
                    {
                      label: "ATTENDANCE",
                      gradient: "from-indigo-500 to-violet-600",
                      icon: (
                        <>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </>
                      ),
                    },
                    {
                      label: "HRMS/PAYROLL",
                      gradient: "from-violet-500 to-purple-600",
                      icon: (
                        <>
                          <rect x="3" y="6" width="18" height="12" rx="2" />
                          <path d="M3 10h18" />
                        </>
                      ),
                    },
                    {
                      label: "REPORTS",
                      gradient: "from-emerald-500 to-teal-600",
                      icon: <path d="M4 19h16M7 16V8M12 16V5M17 16v-4" />,
                    },
                  ].map((node) => (
                    <div
                      key={node.label}
                      className="relative rounded-xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/90 px-4 py-5 text-center shadow-sm ring-1 ring-white transition hover:border-blue-200/90 hover:shadow-md"
                    >
                      <span
                        className={`mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${node.gradient} text-white shadow-lg ring-2 ring-white`}
                        aria-hidden
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          {node.icon}
                        </svg>
                      </span>
                      <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-600">{node.label}</p>
                    </div>
                  ))}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 opacity-25 blur-xl" aria-hidden />
                    <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-lg font-bold text-white shadow-xl shadow-indigo-500/40 ring-4 ring-white">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-slate-200/90 bg-white py-12 lg:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.06),transparent)]" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-sm">
                Why InOps
              </span>
              <h2 className="mt-4">
                <span className="text-slate-900">Why Choose InOps?</span>
              </h2>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
              {[
                {
                  title: "Improved Security",
                  description:
                    "Eliminate buddy punching and unauthorized access with ironclad biometric verification.",
                  icon: "shield",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  title: "Accurate Tracking",
                  description:
                    "Capture precise time-stamps down to the second for fair and accurate payroll processing.",
                  icon: "clock",
                  gradient: "from-sky-500 to-blue-600",
                },
                {
                  title: "Reduced Manual Work",
                  description:
                    "Automate the entire logging process, freeing up HR teams for more strategic initiatives.",
                  icon: "bolt",
                  gradient: "from-amber-500 to-orange-600",
                },
                {
                  title: "Global Scalability",
                  description:
                    "Easily deploy across multiple locations and manage everything via a centralized cloud hub.",
                  icon: "users",
                  gradient: "from-violet-500 to-indigo-600",
                },
              ].map((item, idx) => (
                <motion.article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/85 bg-white/95 p-6 shadow-md shadow-slate-900/[0.04] ring-1 ring-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200/90 hover:shadow-xl"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.42, ease: smoothEase, delay: idx * 0.05 }}
                >
                  <div
                    className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${item.gradient} opacity-[0.1] blur-2xl transition duration-500 group-hover:opacity-[0.18]`}
                    aria-hidden
                  />
                  <span
                    className={`relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg ring-2 ring-white`}
                  >
                    {item.icon === "shield" && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
                      </svg>
                    )}
                    {item.icon === "clock" && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                    )}
                    {item.icon === "bolt" && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                      </svg>
                    )}
                    {item.icon === "users" && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <circle cx="9" cy="8" r="3" />
                        <circle cx="17" cy="9" r="2" />
                        <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
                        <path d="M15 18c0-1.8 1.2-3.3 2.9-3.8" />
                      </svg>
                    )}
                  </span>
                  <h3 className="relative mt-4 text-slate-900">{item.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-950 via-[#0f172a] to-blue-950 p-8 shadow-[0_32px_64px_-28px_rgba(15,23,42,0.6)] ring-1 ring-white/10 sm:p-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
            >
              <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-indigo-600/25 blur-3xl" aria-hidden />
              <h3 className="relative text-white">Designed for Every Environment</h3>
              <p className="relative mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                From climate-controlled executive offices to the dusty floors of manufacturing plants, our hardware is engineered to perform without compromise.
              </p>

              <div className="relative mt-8 flex flex-wrap gap-2.5 sm:gap-3">
                {[
                  "Corporate Offices",
                  "Industrial Plants",
                  "Large Warehouses",
                  "Indoor & Outdoor Support",
                  "Multi-location Networking",
                  "Battery Backup Ready",
                ].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-100 shadow-sm backdrop-blur-sm transition hover:border-sky-400/40 hover:bg-white/[0.1] sm:text-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <SolutionPageClosingCta
          headingId="biometric-access-final-cta-heading"
          heading={
            <>
              Upgrade to <span className="font-semibold text-sky-100">intelligent access</span>
            </>
          }
          description="Choose the right combination of biometric devices based on your unique operational needs. Our experts are ready to help you design the perfect system."
          primaryLabel="Request a Demo"
          secondaryLabel="Talk to an Expert"
        />

      </div>
    </>
  );
}
