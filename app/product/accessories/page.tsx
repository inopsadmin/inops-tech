"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const cardShell =
  "group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white text-left shadow-sm shadow-slate-900/5 ring-1 ring-slate-950/[0.04] transition-[border-color,box-shadow] duration-300 ease-out hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/10 hover:ring-slate-950/[0.06]";

const cardGrid =
  "grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:gap-x-10 lg:gap-y-10";

const cardImageTop =
  "relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-100";

const cardBody = "flex min-h-0 flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6";

function CardEnquireLink() {
  return (
    <div className="mt-auto border-t border-slate-100 pt-5">
      <Link
        href="/contact"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
      >
        Enquire now
        <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

const accessories = [
  {
    name: "Wireless Exit Button",
    model: "WS3X3",
    description:
      "InOps Touchless request-to-exit (RTE) switch or motion sensor exit switch, is a device used in access control systems to allow individuals to exit a secured area without physically touching a switch or button.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=85",
    imageAlt: "Wireless Exit Button - touchless request-to-exit switch",
  },
  {
    name: "Exit Push Button",
    model: "PB3X3",
    description: [
      "InOps' specially designed push button used on doors, gates or anywhere there is the access control system. Wide range of options such as push button size, color exists.",
      "This request to exit (REx) device allows you to open a locked door to exit without needing credentials.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=85",
    imageAlt: "Exit Push Button - request to exit device",
  },
];

const fpSensorAndRfCards = [
  {
    title: "FP Sensor",
    subtitle: "Fingerprint Sensor",
    description:
      "InOps' fingerprint sensors integrates to enhance security and provide a convenient and reliable method for allowing or denying entry to secure areas. Access control systems with fingerprint sensors are widely used in various environments, including offices, government facilities, healthcare facilities, data centers, and more.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85",
    imageAlt: "Fingerprint sensor device for access control",
  },
  {
    title: "RF Cards",
    subtitle: "Proximity & MIFARE",
    description:
      "This card supports ISO Format proximity technology at both 125KHz and 13.56MHz frequencies. It is lightweight at 9 grams and can be printed on both sides. Common applications include access control, time and attendance, employee ID cards, ticketing, visitor management, and more.",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=85",
    imageAlt: "RF card with access control terminal",
  },
];

const electroMagneticLocks = [
  {
    model: "SL-600",
    title: "Single Leaf Electro Magnetic Lock",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85",
    imageAlt: "SL-600 Single Leaf Electro Magnetic Lock",
    specs: [
      "Operating Voltage : Power DC 12V",
      "Holding Force : 600 LBS",
      "Suitable For : Wooden door, Glass door, Metal door, Fireproof door. Etc",
    ],
  },
  {
    model: "DL-600",
    title: "Double Leaf Electro Magnetic Lock",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=85",
    imageAlt: "DL-600 Double Leaf Electro Magnetic Lock",
    specs: [
      "Operating Voltage : Power DC 12V-24V",
      "Holding Force : 600 LBS *2",
      "Suitable For : Wooden door, Glass door, Metal door, Fireproof door. Etc..",
    ],
  },
];

export default function AccessoriesPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero – dark background with overlay */}
        <motion.section
          className="relative min-h-[320px] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gray-900/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(6,182,212,0.15),transparent)]" />
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            >
              Accessories
            </motion.h1>
            <motion.nav
              className="mt-4 text-sm text-white/90"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.25 }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-blue-600 font-medium">Accessories</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* Main content – section title + two products */}
        <section className="border-t border-slate-200/80 bg-white py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Accessories
            </motion.h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-blue-600" aria-hidden />
            <div className={`mt-10 ${cardGrid}`}>
              {accessories.map((product, i) => (
                <motion.article
                  key={product.name}
                  className={cardShell}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.08 }}
                >
                  <div className={cardImageTop}>
                    <Image
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      fill
                      className="object-cover object-center transition duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 36rem"
                    />
                  </div>
                  <div className={cardBody}>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">{product.name}</h3>
                    <span className="mt-2 inline-flex w-fit rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 ring-1 ring-inset ring-blue-600/15">
                      {product.model}
                    </span>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                      {Array.isArray(product.description) ? (
                        product.description.map((para, j) => <p key={j}>{para}</p>)
                      ) : (
                        <p>{product.description}</p>
                      )}
                    </div>
                    <CardEnquireLink />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* FP Sensor & RF Cards */}
        <section className="border-t border-slate-200/80 bg-slate-50/80 py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase }}
            >
              Sensors &amp; credentials
            </motion.h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              Fingerprint readers and RF cards for integrated access control deployments.
            </p>
            <div className={`mt-8 ${cardGrid}`}>
              {fpSensorAndRfCards.map((product, i) => (
                <motion.article
                  key={product.title}
                  className={cardShell}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.22, ease: smoothEase } }}
                >
                  <div className={cardImageTop}>
                    <Image
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      fill
                      className="object-cover object-center transition duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 36rem"
                    />
                  </div>
                  <div className={cardBody}>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">{product.title}</h3>
                    <p className="mt-2 text-sm font-medium text-blue-600">{product.subtitle}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{product.description}</p>
                    <CardEnquireLink />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Electro-Magnetic Locks – SL-600 & DL-600 */}
        <section className="border-t border-slate-200/80 bg-white py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: smoothEase }}
            >
              Electromagnetic locks
            </motion.h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              High holding force maglocks for single and double leaf openings.
            </p>
            <div className={`mt-8 ${cardGrid}`}>
              {electroMagneticLocks.map((product, i) => (
                <motion.article
                  key={product.model}
                  className={cardShell}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.22, ease: smoothEase } }}
                >
                  <div className={cardImageTop}>
                    <Image
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      fill
                      className="object-cover object-center transition duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 36rem"
                    />
                  </div>
                  <div className={cardBody}>
                    <span className="inline-flex w-fit rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 ring-1 ring-inset ring-blue-600/15">
                      {product.model}
                    </span>
                    <h3 className="mt-3 text-base font-semibold leading-snug text-slate-900 sm:text-lg">{product.title}</h3>
                    <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600" role="list">
                      {product.specs.map((spec, j) => (
                        <li key={j} className="flex gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                    <CardEnquireLink />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
