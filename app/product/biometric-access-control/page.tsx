"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.08, margin: "0px 0px -12% 0px" } as const;

const smartAccessShowcaseImage =
  "/WhatsApp Image 2026-04-29 at 3.18.32 PM.jpeg";
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
      <div className="min-h-screen bg-white text-gray-900">
        <motion.section
          className="w-full border-b border-slate-100 bg-white pt-8 sm:pt-10 lg:pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.06 }}
          >
            <div className="relative min-h-[340px] w-full bg-white sm:min-h-[390px] lg:min-h-[430px]">
              <div className="relative mt-10 h-52 w-full sm:h-60 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                <Image
                  src={smartAccessShowcaseImage}
                  alt="Enterprise biometric access devices in a modern secure facility"
                  fill
                  className="object-cover object-[center_35%] sm:object-center lg:object-[center_40%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white to-transparent lg:block"
                  aria-hidden
                />
              </div>
              <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                <div className="max-w-3xl px-2 py-8 sm:px-4 sm:py-10 lg:max-w-xl lg:py-16 lg:pr-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                      Face based attendance
                    </span>
                  </motion.div>
                  <motion.h1
                    className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:mt-5 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
                  >
                    Smart access. <span className="text-blue-700">Secure workforce.</span>
                  </motion.h1>
                  <motion.p
                    className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-[1.05rem]"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.14 }}
                  >
                    Advanced biometric devices engineered for high-precision attendance, access control, and seamless
                    workforce management across industrial environments.
                  </motion.p>
                  <motion.div
                    className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/30"
                    >
                      Request Demo
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
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Device Categories</h2>
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
                      <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{card.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section> */}

        <section className="border-t border-gray-200 py-8 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Built for Speed, Accuracy, and Reliability
              </h2>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Fast Face Recognition",
                  description: "Proprietary algorithms deliver sub-second authentication for seamless movement.",
                  icon: "face",
                },
                {
                  title: "Multi-mode Authentication",
                  description: "Support for face, fingerprint, RFID, QR, and PIN in a single unified system.",
                  icon: "grid",
                },
                {
                  title: "Anti-spoofing Tech",
                  description: "Liveness detection prevents unauthorized access via photos or 3D masks.",
                  icon: "shield",
                },
                {
                  title: "High User Capacity",
                  description: "Storage for up to 100,000 users and millions of transaction logs locally.",
                  icon: "users",
                },
                {
                  title: "Intuitive UI",
                  description: "Crisp touchscreen interfaces with multi-language support and visual feedback.",
                  icon: "monitor",
                },
                {
                  title: "Extreme Durability",
                  description: "Operational in low-light, high-humidity, and industrial dust environments.",
                  icon: "chart",
                },
              ].map((item, idx) => (
                <motion.article
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.05 }}
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600">
                      {item.icon === "face" && (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <rect x="4" y="4" width="16" height="16" rx="3" />
                          <circle cx="9" cy="10" r="1" />
                          <circle cx="15" cy="10" r="1" />
                          <path d="M8 15c1.1.9 2.3 1.2 4 1.2s2.9-.3 4-1.2" />
                        </svg>
                      )}
                      {item.icon === "grid" && (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <rect x="4" y="4" width="6" height="6" />
                          <rect x="14" y="4" width="6" height="6" />
                          <rect x="4" y="14" width="6" height="6" />
                          <rect x="14" y="14" width="6" height="6" />
                        </svg>
                      )}
                      {item.icon === "shield" && (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
                        </svg>
                      )}
                      {item.icon === "users" && (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <circle cx="9" cy="8" r="3" />
                          <circle cx="17" cy="9" r="2" />
                          <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
                          <path d="M15 18c0-1.8 1.2-3.3 2.9-3.8" />
                        </svg>
                      )}
                      {item.icon === "monitor" && (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <rect x="3" y="4" width="18" height="12" rx="2" />
                          <path d="M8 20h8M12 16v4" />
                        </svg>
                      )}
                      {item.icon === "chart" && (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M4 19h16M7 16V8M12 16V5M17 16v-4" />
                        </svg>
                      )}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-600">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.description}</p>
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
                <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.05rem] lg:leading-[1.1]">
                  Touchless face recognition for{" "}
                  <span className="text-blue-600">secure &amp; fast access</span>
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                  Visible light facial recognition with advanced anti-spoofing and high-speed authentication for modern access control.
                </p>
              </motion.div>

              <motion.div
                className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.05 }}
              >
                <div className="pointer-events-none absolute -right-4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-200/35 blur-3xl sm:h-80 sm:w-80 lg:-right-8" aria-hidden />
                <div className="pointer-events-none absolute -left-6 top-8 h-40 w-40 rounded-full bg-sky-100/50 blur-2xl" aria-hidden />
                <div
                  className="relative md:absolute md:right-0 md:top-15 border-rounded-xl isolate mx-auto w-full max-w-[18rem] sm:max-w-sm md:max-w-md lg:max-w-xl [mask-image:radial-gradient(ellipse_92%_92%_at_50%_50%,#000_52%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_92%_92%_at_50%_50%,#000_52%,transparent_100%)]"
                >
                  <Image
                    src={touchlessFaceReaderShowcaseImage}
                    alt="Touchless face recognition terminal on display with secure access branding"
                    width={720}
                    height={540}
                    className="h-auto w-full object-contain object-center rounded-xl"
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 360px, 520px"
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-14 grid w-full grid-cols-1 gap-y-8 md:ml-0 md:mr-auto md:w-max md:max-w-full md:grid-cols-2 md:gap-x-6 md:justify-items-start lg:gap-x-8">
              {readerSpecHighlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.35, ease: smoothEase, delay: idx * 0.04 }}
                >
                  <ReaderFeatureGlyph name={item.featureIcon} />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-slate-600">{item.text}</p>
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
                  <h3 className="text-base font-bold uppercase tracking-[0.12em] text-blue-600 sm:text-lg">Specifications</h3>
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
                  <h3 className="text-base font-bold uppercase tracking-[0.12em] text-white sm:text-lg">Advanced capabilities</h3>
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

        <section className="border-t border-gray-200 py-8 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Seamless System Flow
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:text-lg">
                Integrated authentication that bridges hardware and workforce management software.
              </p>
            </motion.div>

            <motion.div
              className="relative mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
            >
              <div className="pointer-events-none absolute left-0 right-0 top-[58px] hidden h-px bg-gray-200 md:block" aria-hidden />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
                {[
                  { step: "01", title: "User Authentication" },
                  { step: "02", title: "Identity Verification" },
                  { step: "03", title: "Access Granted" },
                  { step: "04", title: "Synced to System" },
                  { step: "05", title: "Reporting & Dashboard" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.step}
                    className="relative text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.35, ease: smoothEase, delay: idx * 0.05 }}
                  >
                    <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-400 bg-white text-sm font-semibold text-gray-800">
                      {item.step}
                    </span>
                    <p className="mx-auto mt-3 max-w-[120px] text-sm font-semibold leading-snug text-gray-700">
                      {item.title}
                    </p>
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
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Deployment Environments
              </h2>
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
                    <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-1 text-sm text-white/85">{card.subtitle}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-200 py-8 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Universal Device Excellence
              </h2>
            </motion.div>

            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  title: "Rugged Industrial Design",
                  description:
                    "Encased in aircraft-grade aluminum and impact-resistant glass, our devices are IP65 rated for dust and humidity protection.",
                },
                {
                  title: "High-Speed Processing",
                  description:
                    "Equipped with dedicated NPU (Neural Processing Unit) cores for lightning-fast biometric template matching.",
                },
                {
                  title: "Enterprise Capacity",
                  description:
                    "Designed for massive deployments, managing distributed data across thousands of devices from a central hub.",
                },
              ].map((item, idx) => (
                <motion.article
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.05 }}
                >
                  <h3 className="text-xl font-semibold text-slate-900">• {item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-200 py-8 lg:py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Seamlessly Connected to Your Systems
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
                  Modern APIs and native integrations ensure your data moves where you need it, when you need it.
                </p>

                <ul className="mt-6 space-y-4">
                  {[
                    {
                      title: "API-Based Integration",
                      description: "RESTful APIs for custom software hooks.",
                    },
                    {
                      title: "Real-time Data Sync",
                      description: "Zero-latency updates for immediate attendance visibility.",
                    },
                    {
                      title: "Centralized Dashboard",
                      description: "Manage all hardware globally from a single browser interface.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-500">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                          <path d="M6 12l4 4 8-8" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-base font-semibold text-slate-900">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
              >
                <div className="relative grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-gray-200 bg-white p-5 text-center">
                    <span className="mx-auto inline-flex h-8 w-8 items-center justify-center text-gray-600" aria-hidden>
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="12" rx="2" />
                        <path d="M8 20h8M12 16v4" />
                      </svg>
                    </span>
                    <p className="mt-1 text-xs font-bold tracking-wide text-gray-500">DEVICES</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-5 text-center">
                    <span className="mx-auto inline-flex h-8 w-8 items-center justify-center text-gray-600" aria-hidden>
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                    </span>
                    <p className="mt-1 text-xs font-bold tracking-wide text-gray-500">ATTENDANCE</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-5 text-center">
                    <span className="mx-auto inline-flex h-8 w-8 items-center justify-center text-gray-600" aria-hidden>
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="6" width="18" height="12" rx="2" />
                        <path d="M3 10h18" />
                      </svg>
                    </span>
                    <p className="mt-1 text-xs font-bold tracking-wide text-gray-500">HRMS/PAYROLL</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-5 text-center">
                    <span className="mx-auto inline-flex h-8 w-8 items-center justify-center text-gray-600" aria-hidden>
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 19h16M7 16V8M12 16V5M17 16v-4" />
                      </svg>
                    </span>
                    <p className="mt-1 text-xs font-bold tracking-wide text-gray-500">REPORTS</p>
                  </div>
                  <span className="pointer-events-none absolute left-1/2 top-1/2 inline-flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                    →
                  </span>
                </div>
              </motion.div>
            </div>
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
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Why Choose InOps?
              </h2>
            </motion.div>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Improved Security",
                  description:
                    "Eliminate buddy punching and unauthorized access with ironclad biometric verification.",
                  icon: "shield",
                },
                {
                  title: "Accurate Tracking",
                  description:
                    "Capture precise time-stamps down to the second for fair and accurate payroll processing.",
                  icon: "clock",
                },
                {
                  title: "Reduced Manual Work",
                  description:
                    "Automate the entire logging process, freeing up HR teams for more strategic initiatives.",
                  icon: "bolt",
                },
                {
                  title: "Global Scalability",
                  description:
                    "Easily deploy across multiple locations and manage everything via a centralized cloud hub.",
                  icon: "users",
                },
              ].map((item, idx) => (
                <motion.article
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.05 }}
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center text-gray-600">
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
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="mt-10 overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-r from-[#101724] to-[#0c111b] p-7 sm:p-9"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
            >
              <h3 className="text-3xl font-bold text-white sm:text-4xl">Designed for Every Environment</h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                From climate-controlled executive offices to the dusty floors of manufacturing plants, our hardware is engineered to perform without compromise.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {["Corporate Offices", "Industrial Plants", "Large Warehouses"].map((label) => (
                  <div key={label} className="rounded-lg border border-slate-700 bg-slate-900/35 px-4 py-3 text-center text-sm font-semibold text-slate-100">
                    {label}
                  </div>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {["Indoor & Outdoor Support", "Multi-location Networking", "Battery Backup Ready"].map((label) => (
                  <div key={label} className="rounded-lg border border-slate-700 bg-slate-900/35 px-4 py-3 text-center text-sm font-semibold text-slate-100">
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-gray-200 py-10 lg:py-14 bg-white">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
                Upgrade to Intelligent Access
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-500 sm:text-2xl">
                Choose the right combination of biometric devices based on your unique operational needs. Our experts are ready to help you design the perfect system.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Request a Demo
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-xl border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                >
                  Talk to an Expert
                </Link>
              </div>

              {/* <div className="mt-10 flex items-center justify-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((avatar) => (
                    <span
                      key={avatar}
                      className="relative inline-flex h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm"
                    >
                      <Image
                        src="/images/image.png"
                        alt="Prashanth K."
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 sm:text-base">
                  Join <span className="font-semibold text-gray-700">2,500+ enterprises</span> who trust BioSecure.
                </p>
              </div> */}
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
