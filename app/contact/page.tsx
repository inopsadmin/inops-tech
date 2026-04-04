"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

/** Hero background — `public/images/contact-header.jpg` */
const contactHeroBg = "/images/contact-header.jpg";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const contactInfo = [
  {
    label: "Location:",
    value: "No.18, 4th 'C' Cross, 1st Main Rd, Koramangala Industrial Layout, 5th Block, Bengaluru, Karnataka 560095.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Email:",
    value: "contact@inops.tech",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Call:",
    value: "+91 8088602602",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero — contact-header.jpg + overlays (CSS background for reliable load) */}
        <motion.section
          className="relative flex min-h-[340px] flex-col items-center justify-center overflow-hidden sm:min-h-[380px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-slate-900 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${contactHeroBg}")` }}
            aria-hidden
          />
          {/* <div className="absolute inset-0 z-[1] bg-gray-900/55" aria-hidden /> */}
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-gray-900/50 via-gray-900/65 to-gray-900/80"
            aria-hidden
          />
          <div
            className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_90%_65%_at_50%_25%,rgba(56,189,248,0.12),transparent)]"
            aria-hidden
          />
          <div className="relative z-10 px-6 text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            >
              Contact
            </motion.h1>
            <motion.nav
              className="mt-3 text-sm text-white/90"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.25 }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-blue-300 font-medium">Contact</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* Contact info + form + map */}
        <section className="border-t border-gray-100/80 bg-gradient-to-b from-slate-50/60 to-white py-6 lg:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            {/* Two columns: contact info (left) + form (right) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              {/* Left: contact info with map pattern background */}
              <motion.div
                className="relative rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-gray-300 hover:shadow-md lg:p-10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.75, ease: smoothEase }}
                whileHover={{ y: -3, transition: { duration: 0.22, ease: smoothEase } }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
                <div className="relative space-y-8">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="group flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.5, ease: smoothEase, delay: 0.1 * i }}
                      whileHover={{ x: 4, transition: { duration: 0.2, ease: smoothEase } }}
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white shadow-md shadow-blue-500/25 transition-transform duration-300 group-hover:scale-105">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                        <p className="mt-1 text-gray-600 leading-relaxed">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right: contact form */}
              <motion.div
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-blue-200/60 hover:shadow-lg lg:p-10"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.75, ease: smoothEase, delay: 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.22, ease: smoothEase } }}
              >
                <motion.h2
                  className="text-xl font-bold text-gray-900 sm:text-2xl"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.2 }}
                >
                  Send us a message
                </motion.h2>
                <motion.p
                  className="mt-2 text-gray-600"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.28 }}
                >
                  Whether you need Reliable Access Control Systems, attendance, or payroll support—fill out the form below and we&apos;ll get back to you soon.
                </motion.p>
                <ContactForm />
              </motion.div>
            </div>

            {/* Embedded map */}
            <motion.div
              className="mt-12 overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-gray-300 hover:shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease: smoothEase }}
              whileHover={{ y: -2, transition: { duration: 0.22, ease: smoothEase } }}
            >
              <iframe
                title="InOps Solutions location - Koramangala, Bengaluru"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.016988!2d77.6242!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e3e5c14749%3A0x1b7756b2e58d8d8!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709123456789"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
