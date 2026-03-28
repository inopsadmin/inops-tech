"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.08, margin: "0px 0px -12% 0px" } as const;

const featuresLeft = [
  {
    title: "Advanced Facial Recognition Technology",
    color: "text-amber-500",
    points: [
      "Utilizes sophisticated algorithms to accurately identify individuals based on facial features.",
      { label: "Enhanced Security:", text: "Provides a high level of security by utilizing biometric data that is unique to each individual, reducing the risk of unauthorized access." },
    ],
  },
  {
    title: "Anti-Spoofing Measures",
    color: "text-pink-500",
    points: [
      "Incorporates anti-spoofing techniques to prevent unauthorized access using photos or videos.",
      { label: "Speed and Efficiency:", text: "Streamlines access management processes with fast and accurate identification, improving overall operational efficiency." },
    ],
  },
  {
    title: "User-Friendly Interface",
    color: "text-yellow-500",
    points: [
      "Intuitive interface for easy operation and user enrollment.",
      { label: "Compliance:", text: "Helps organizations meet regulatory requirements by providing an auditable record of access events." },
    ],
  },
  {
    title: "Integration Capabilities",
    color: "text-blue-500",
    points: [
      "Compatible with existing access control systems for seamless integration.",
      { label: "Cost-Effective:", text: "Reduces the costs associated with managing and replacing physical credentials such as cards or keys." },
    ],
  },
];

const featuresRight = [
  {
    title: "High-Speed Processing",
    color: "text-emerald-500",
    points: [
      "Offers rapid authentication, allowing authorized personnel to access secured areas without delays.",
      { label: "Convenience:", text: "Eliminates the need for physical credentials such as keys or cards, offering a more convenient and user-friendly access control solution." },
    ],
  },
  {
    title: "Wide Angle Recognition",
    color: "text-teal-500",
    points: [
      "Capable of capturing facial images from various angles for reliable identification.",
      { label: "Adaptability:", text: "Suitable for various environments and lighting conditions, offering reliable performance in diverse settings." },
    ],
  },
  {
    title: "High-Resolution Fingerprint Scanning",
    color: "text-blue-600",
    points: [
      "Captures detailed fingerprint images for accurate identification.",
      { label: "Durability:", text: "Built to withstand heavy usage and harsh environmental conditions, ensuring long-term reliability." },
    ],
  },
  {
    title: "Tamper Detection",
    color: "text-violet-500",
    points: [
      "Detects and alerts administrators to tampering attempts to ensure system integrity.",
      { label: "Compliance:", text: "Helps organizations comply with data protection regulations by securely storing biometric data and providing audit trails of access events." },
    ],
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const deviceCallouts = [
  "Long distance verification",
  "Low Light Verification",
  "Auto Focus",
  "Identifies colour fingerprints",
];

const powerfulServices = [
  { title: "Integrated Applications For Enterprise", icon: "document" },
  { title: "Access Control System", icon: "card" },
  { title: "Canteen Management System", icon: "tray" },
  { title: "Biometric Attendance System", icon: "id" },
  { title: "Visitor Management System", icon: "person" },
  { title: "Contract Management System", icon: "document-pen" },
];

export default function BiometricAccessControlPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero section - dark blue-grey with illustrations */}
        <section className="relative min-h-[320px] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gray-900" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          {/* Abstract hero illustrations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-32 h-40 rounded-lg bg-amber-900/30 border border-amber-700/20" aria-hidden />
            <div className="absolute right-[20%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
              <div className="w-16 h-20 rounded-lg bg-gray-700/40 border border-gray-600/30 flex flex-col items-center justify-center p-1">
                <div className="w-full h-6 rounded bg-gray-600/50 text-[8px] text-gray-600 flex items-center justify-center font-mono">ACCESS</div>
                <div className="w-full flex-1 rounded bg-emerald-500/20 text-[8px] text-emerald-300 flex items-center justify-center font-mono mt-1">COMPLETE</div>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-1 h-8 bg-blue-400/20 rounded-full" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
            <div className="absolute right-[8%] top-1/3 w-24 h-16 rounded bg-gray-700/30 border border-gray-600/20" aria-hidden />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-transparent to-gray-800/60" />
          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: smoothEase }}
            >
              Biometric Access Control
            </motion.h1>
            <motion.nav
              className="mt-4 text-sm text-white/90"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: smoothEase }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-blue-300 font-medium">Biometric Access Control</span>
            </motion.nav>
          </div>
        </section>

        {/* Main content - two columns: device image left, text + CTAs right */}
        <section className="py-6 lg:py-10 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14 lg:items-center">
              {/* Left: biometric device image */}
              <motion.div
                className="relative order-2 lg:order-1 lg:col-span-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-2xl lg:aspect-[5/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85"
                    alt="Biometric access control device with face recognition and keypad"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </motion.div>

              {/* Right: heading, description, CTAs */}
              <motion.div
                className="order-1 lg:order-2 lg:col-span-6 lg:pl-2 xl:pl-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl xl:text-[3rem] xl:leading-[1.1]">
                  Biometric Access Control
                </h2>
                <p className="mt-6 max-w-none text-gray-600 leading-relaxed text-lg sm:text-xl lg:text-xl xl:text-[1.35rem] xl:leading-relaxed sm:mt-8">
                  InOps offers a comprehensive range of biometric access control products, including Face Reader, Fingerprint Reader, and Card Reader solutions, designed to provide robust security and streamlined access management for various environments. Here are the features and benefits of each:
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4 lg:gap-x-10">
                  <Link
                    href="#"
                    className="inline-flex min-h-11 items-center font-semibold text-blue-600 transition-colors hover:text-blue-500 sm:min-h-12 text-base sm:text-lg uppercase tracking-wide"
                  >
                    Download Brochure
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-11 items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-500 sm:min-h-12 text-base sm:text-lg"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex min-h-11 items-center gap-2.5 font-semibold text-blue-600 transition-colors hover:text-blue-500 sm:min-h-12 text-base sm:text-lg"
                  >
                    <svg className="h-6 w-6 flex-shrink-0 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch Video
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-6 lg:py-10 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-center text-2xl font-bold text-gray-900 sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Features & Benefits
            </motion.h2>
            <motion.div
              className="mx-auto mt-2 h-1 w-20 rounded-full bg-blue-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, ease: smoothEase }}
            />
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6">
              {/* Left column */}
              <div className="space-y-6">
                {featuresLeft.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.05 }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center">
                      <CheckIcon className={`h-6 w-6 ${item.color}`} />
                    </span>
                    <div className="space-y-2">
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                        {item.points.map((p, j) =>
                          typeof p === "string" ? (
                            <li key={j}>{p}</li>
                          ) : (
                            <li key={j}>
                              <span className="font-semibold text-blue-300">{p.label}</span> {p.text}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Right column */}
              <div className="space-y-6">
                {featuresRight.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.05 }}
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center">
                      <CheckIcon className={`h-6 w-6 ${item.color}`} />
                    </span>
                    <div className="space-y-2">
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                        {item.points.map((p, j) =>
                          typeof p === "string" ? (
                            <li key={j}>{p}</li>
                          ) : (
                            <li key={j}>
                              <span className="font-semibold text-blue-300">{p.label}</span> {p.text}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Introduction – full paragraph (full content width) */}
        <section className="py-6 lg:py-8 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-center text-2xl font-bold text-blue-500 sm:text-3xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Biometric Access Control
            </motion.h2>
            <div
              className="mx-auto mt-2 h-0.5 w-16 rounded-full bg-blue-500"
              aria-hidden
            />
            <motion.p
              className="mt-6 w-full max-w-none text-left text-gray-600 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
            >
              InOps Company&apos;s biometric access control products, including Face Reader, Fingerprint Reader, and Card Reader solutions, offer a combination of advanced technology, convenience, and security features to meet the diverse access management needs of modern organizations. Whether it&apos;s facial recognition for high-security environments, fingerprint scanning for precise authentication, or card readers for convenience and scalability, our products provide reliable access control solutions tailored to the unique requirements of each organization.
            </motion.p>
          </div>
        </section>

        {/* Biometric device features – image + callouts (scaled to match hero proportions) */}
        <section className=" py-8 lg:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <motion.div
              className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10 xl:gap-14"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              {/* On lg+, image fills column height to match Key capabilities block */}
              <div className="w-full min-h-0 lg:col-span-6 lg:h-full">
                <div className="relative aspect-[4/3] w-full min-h-[14rem] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-xl lg:aspect-auto lg:h-full lg:min-h-[18rem] lg:shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85"
                    alt="Biometric device with face recognition and fingerprint"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 lg:pl-2 xl:pl-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-base lg:mb-6 lg:text-lg">
                  Key capabilities
                </p>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
                  {deviceCallouts.map((label) => (
                    <li key={label}>
                      <div className="flex h-full min-h-[4.5rem] items-center gap-3 rounded-2xl border border-gray-200/90 bg-white px-4 py-4 text-left shadow-md shadow-slate-900/[0.04] sm:min-h-[5rem] sm:gap-4 sm:px-5 sm:py-4 lg:min-h-[5.5rem] lg:gap-5 lg:px-6 lg:py-5">
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white shadow-md shadow-blue-500/25 sm:h-11 sm:w-11 lg:h-14 lg:w-14">
                          <svg className="h-5 w-5 lg:h-6 lg:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="text-sm font-semibold leading-snug text-gray-900 sm:text-base lg:text-lg">{label}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Powerful Services for Your Business */}
        <section className="py-6 lg:py-10 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-center text-2xl font-bold text-blue-500 sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Powerful Services for Your Business
            </motion.h2>
            <div className="mx-auto mt-2 h-0.5 w-20 rounded-full bg-blue-500" />
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {powerfulServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-blue-200/70 hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.22, ease: smoothEase } }}
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-500">
                    {service.icon === "document" && (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    )}
                    {service.icon === "card" && (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                    )}
                    {service.icon === "tray" && (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    )}
                    {service.icon === "id" && (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                    )}
                    {service.icon === "person" && (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    )}
                    {service.icon === "document-pen" && (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    )}
                  </span>
                  <h3 className="font-semibold text-gray-900">{service.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Empowering Workplaces & Mobile App */}
        <section className="py-6 lg:py-10 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 lg:items-center">
              <motion.div
                className="lg:pr-8"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase }}
              >
                <h2 className="text-2xl font-bold text-blue-500 sm:text-3xl">
                  Empowering Smarter Workplaces Across all Industries.
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                  InOps Tech empowers smarter workplaces across diverse industries by providing innovative technology solutions tailored to optimize efficiency, collaboration, and productivity.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-600"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
              >
                {/* Phone mockup with My Attendance app */}
                <div className="relative w-[280px] rounded-[2.5rem] border-[10px] border-gray-200 bg-gray-100 p-2 shadow-2xl">
                  <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-100" aria-hidden />
                  <div className="overflow-hidden rounded-[1.5rem] bg-gray-100 border border-gray-200">
                    <div className="bg-gray-100/80 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                      <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                      <span className="font-semibold text-gray-900 text-sm">My Attendance</span>
                      <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <div className="flex gap-1 p-2 border-b border-gray-200">
                      <button type="button" className="flex-1 rounded-lg bg-blue-500/20 py-2 text-xs font-medium text-blue-300">PREV</button>
                      <button type="button" className="flex-1 rounded-lg bg-gray-100 py-2 text-xs font-medium text-gray-500">NEXT</button>
                    </div>
                    <div className="px-3 py-2 text-xs text-gray-500 font-medium">12-Jul-2018 - 18-Jul-2018</div>
                    <div className="px-3 pb-2 space-y-2">
                      {["10:00", "09:50", "08:50"].map((time, i) => (
                        <div key={time} className="flex items-center justify-between text-sm">
                          <span className="text-gray-700">{time}</span>
                          <span className={`text-xs font-medium ${i === 0 ? "text-emerald-400" : "text-gray-500"}`}>{i === 0 ? "Present" : "—"}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-gray-200">
                      <button type="button" className="w-full rounded-lg bg-emerald-500 py-3 text-sm font-semibold text-white">CHECK IN</button>
                      <p className="mt-2 text-center text-xs text-gray-500">Total Hours: 35.43</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
