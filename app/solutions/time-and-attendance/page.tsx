"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SolutionModulePanel from "@/app/components/SolutionModulePanel";

const timeAttendanceProductImage = "/WhatsApp Image 2026-04-27 at 3.53.36 PM.jpeg";
const optiCamSolutionImage =
  "/Gemini_Generated_Image_mqj0sxmqj0sxmqj0.png";

const authAccessGalleryImages = [
  {
    src: "/images/biometric-attendance-system.jpg",
    alt: "Wall-mounted biometric attendance terminal with keypad and display",
    width: 900,
    height: 600,
  },
  {
    src: "/images/434829.png",
    alt: "Industrial access control and gate hardware",
    width: 900,
    height: 600,
  },
  {
    src: "/images/Face-Recognition-Temperature-Terminal-RFID-IC-Card-Reader-Flap-Turnstile-Gate-Access-Control-Face-Recognition-Camera.avif",
    alt: "Face recognition terminal with flap turnstile gate and RFID access",
    width: 900,
    height: 600,
  },
] as const;

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const benefits = [
  { label: "Streamline Payroll", color: "bg-violet-500", icon: "payroll" },
  { label: "It Averts Lawsuits", color: "bg-pink-500", icon: "law" },
  { label: "Precise Time Tracking", color: "bg-amber-500", icon: "clock" },
  { label: "Lessen Paper Usage", color: "bg-yellow-500", icon: "docs" },
  { label: "Prevention of Tax Issues", color: "bg-emerald-500", icon: "tax" },
  { label: "Boosts Employee Satisfaction", color: "bg-cyan-500", icon: "satisfaction" },
];

const featuresAndBenefits = [
  {
    title: "Biometric Recognition",
    circleColor: "bg-amber-500",
    description: "Our device utilizes advanced biometric recognition technology, such as fingerprint scanning or facial recognition, ensuring precise identification of employees.",
    sub: { title: "Improved Accuracy", text: "By eliminating manual entry and relying on biometric authentication, our device ensures accurate attendance records, reducing errors and fraud." },
  },
  {
    title: "Cloud-Based System",
    circleColor: "bg-pink-500",
    description: "Enjoy the flexibility of accessing attendance data from anywhere via a secure cloud-based system, facilitating remote workforce management.",
    sub: { title: "Cost Savings", text: "Efficient workforce management leads to cost savings by reducing payroll errors, eliminating buddy punching, and optimizing staffing levels based on actual attendance data." },
  },
  {
    title: "Integration Compatibility",
    circleColor: "bg-yellow-500",
    description: "Seamlessly integrate our device with existing HR and payroll systems, eliminating data duplication and streamlining administrative processes.",
    sub: { title: "Employee Accountability", text: "Encourage accountability among employees with transparent attendance tracking, fostering a culture of punctuality and responsibility within the organization." },
  },
  {
    title: "Shift Scheduling",
    circleColor: "bg-teal-500",
    description: "Simplify shift scheduling and optimize workforce allocation by creating customizable schedules based on employee availability and business requirements.",
    sub: { title: "Flexible Remote Management", text: "With cloud-based accessibility, manage workforce attendance remotely, allowing for efficient monitoring and intervention regardless of location." },
  },
  {
    title: "Real-time Monitoring",
    circleColor: "bg-emerald-500",
    description: "Gain real-time insights into employee attendance with instant updates and notifications, allowing managers to address attendance issues promptly.",
    sub: { title: "Enhanced Productivity", text: "Streamlined attendance tracking minimizes time spent on administrative tasks, allowing employees to focus on their core responsibilities, thus increasing overall productivity." },
  },
  {
    title: "Customizable Reporting",
    circleColor: "bg-sky-400",
    description: "Generate detailed reports tailored to your business needs, including attendance summaries, late arrivals, and absenteeism patterns, for informed decision-making.",
    sub: { title: "Compliance Assurance", text: "Stay compliant with labor regulations and policies effortlessly as our device provides thorough documentation of attendance records for audits and compliance purposes." },
  },
  {
    title: "Geolocation Tracking",
    circleColor: "bg-blue-500",
    description: "Ensure attendance accuracy by incorporating geolocation tracking, preventing unauthorized clock-ins and enhancing security measures.",
    sub: { title: "Time Savings", text: "Automated attendance tracking saves valuable time for HR personnel and managers, enabling them to allocate resources more effectively towards strategic initiatives." },
  },
  {
    title: "User-Friendly Interface",
    circleColor: "bg-blue-700",
    description: "Our device features an intuitive and user-friendly interface, making it easy for employees to clock in/out and for administrators to manage attendance records efficiently.",
    sub: { title: "Scalability", text: "Our solution scales with your business, accommodating growth and evolving needs without compromising efficiency or performance." },
  },
];

const powerfulServices = [
  { title: "Integrated Applications For Enterprise", icon: "document", color: "bg-rose-500" },
  { title: "Access Control System", icon: "card", color: "bg-rose-500" },
  { title: "Canteen Management System", icon: "tray", color: "bg-rose-500" },
  { title: "Biometric Attendance System", icon: "id", color: "bg-violet-500" },
  { title: "Visitor Management System", icon: "person", color: "bg-violet-500" },
  { title: "Contract Management System", icon: "document-pen", color: "bg-violet-500" },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ServiceIcon({ icon, className }: { icon: string; className?: string }) {
  const c = "h-6 w-6";
  return (
    <span className={className}>
      {icon === "document" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
      {icon === "card" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
      {icon === "tray" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
      {icon === "id" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>}
      {icon === "person" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
      {icon === "document-pen" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
    </span>
  );
}

export default function TimeAndAttendancePage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        <section className="mt-10 border-t border-gray-200 bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase }}
              >
                <span className="inline-flex rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                  CCTV based attendance solution
                </span>
                <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                  <span className="text-slate-900">
                    Attendance <br />
                  </span>
                  <span className="text-[color:var(--inops-blue)]">
                    Without Devices.
                  </span>
                  <br />
                  <span className="italic text-slate-900">Powered by AI.</span>
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                  Turn your existing CCTV infrastructure into a real-time, hardware-free attendance system with computer vision. No queues, no contact, no excuses.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-[color:var(--inops-blue)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--inops-navy)]"
                  >
                    Book a Live Demo
                    <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                  >
                    Calculate ROI
                  </Link>
                </div>

                {/* <div className="mt-6 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((dot) => (
                      <span
                        key={dot}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-[10px] font-semibold text-emerald-600"
                      >
                        ✓
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600">
                    Trusted by <span className="font-semibold text-slate-900">500+ Enterprises</span> globally.
                  </p>
                </div> */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 }}
                className="relative"
              >
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={timeAttendanceProductImage}
                      alt="CCTV attendance device and dashboard preview"
                      fill
                      className="object-cover scale-101"
                      sizes="(max-width: 1024px) 100vw, 100vw"
                    />
                  </div>
                </div>
                {/* <div className="absolute -bottom-6 right-0 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-xl">
                  <p className="text-4xl font-bold text-slate-900">99.8%</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Facial Recognition Accuracy
                  </p>
                </div> */}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-[#f8fafc] py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-[color:var(--inops-blue)] sm:text-5xl">
                The Hidden Cost of Traditional Biometrics
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500 sm:text-xl">
                Legacy hardware systems are failing modern enterprises with hidden costs and systemic inefficiencies.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Endless Queues",
                  description: "Employees spend average 8 minutes daily waiting at biometric checkpoints during peak hours.",
                  icon: "clock",
                },
                {
                  title: "Buddy Punching",
                  description: "Time theft through shared cards or fingerprints costs businesses up to 2% of annual payroll.",
                  icon: "users",
                },
                {
                  title: "High Capex",
                  description: "Proprietary hardware devices require frequent maintenance, licenses, and replacement.",
                  icon: "briefcase",
                },
                {
                  title: "Data Gaps",
                  description: "Multi-location enterprises struggle with fragmented data and delayed sync between sites.",
                  icon: "globe",
                },
              ].map((item, i) => (
                <motion.article
                  key={item.title}
                  className="rounded-2xl bg-transparent p-1"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: smoothEase, delay: i * 0.05 }}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-400">
                    {item.icon === "clock" && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
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
                    {item.icon === "briefcase" && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <rect x="3" y="7" width="18" height="12" rx="2" />
                        <path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2" />
                      </svg>
                    )}
                    {item.icon === "globe" && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <circle cx="12" cy="12" r="9" />
                        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
                      </svg>
                    )}
                  </span>
                  <h3 className="mt-5 text-3xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-slate-500">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={optiCamSolutionImage}
                    alt="OptiCam attendance dashboard on a tablet-style interface"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-[color:var(--inops-blue)] sm:text-5xl">
                  The OptiCam Solution
                </h2>

                <div className="mt-6 space-y-6">
                  {[
                    {
                      title: "Existing IP Cameras",
                      description:
                        "No new hardware required. OptiCam integrates directly with your existing CCTV network via ONVIF/RTSP.",
                      icon: "camera",
                    },
                    {
                      title: "Real-Time Detection",
                      description:
                        "AI detects faces as they walk through entrances. No stopping, no touching, just natural movement.",
                      icon: "bolt",
                    },
                    {
                      title: "Centralized Control",
                      description:
                        "Manage attendance across 100+ locations from a single cloud-based dashboard with instant HRMS sync.",
                      icon: "grid",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                        {item.icon === "camera" && (
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <path d="M4 7h4l2-2h4l2 2h4v12H4z" />
                            <circle cx="12" cy="13" r="3" />
                          </svg>
                        )}
                        {item.icon === "bolt" && (
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
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
                      </span>
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-lg leading-relaxed text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-[#f8fafc] py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Seamless Deployment Cycle
              </h2>
              <p className="mt-4 text-lg font-medium text-[color:var(--inops-blue)] sm:text-xl">
                Go from zero to fully automated attendance in less than 48 hours.
              </p>
            </motion.div>

            <div className="relative mt-10">
              <div className="pointer-events-none absolute left-0 right-0 top-[38px] hidden h-px bg-slate-200 md:block" aria-hidden />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-5 xl:gap-4">
                {[
                  {
                    step: "01",
                    title: "Connect Cameras",
                    description: "Plug in your RTSP feeds into the OptiCam cloud portal.",
                    icon: "monitor",
                  },
                  {
                    step: "02",
                    title: "Enroll Staff",
                    description: "Bulk upload employee photos or sync with existing HR records.",
                    icon: "users",
                  },
                  {
                    step: "03",
                    title: "AI Detection",
                    description: "Edge-compute nodes identify faces with sub-second latency.",
                    icon: "chip",
                  },
                  {
                    step: "04",
                    title: "Log Attendance",
                    description: "Encrypted logs are generated automatically for each entry.",
                    icon: "database",
                  },
                  {
                    step: "05",
                    title: "HRMS Sync",
                    description: "Data is pushed to SAP, Workday, or your custom ERP system.",
                    icon: "check",
                  },
                ].map((item, i) => (
                  <motion.article
                    key={item.title}
                    className="relative text-center"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.45, ease: smoothEase, delay: i * 0.05 }}
                  >
                    <span className="absolute left-1/2 top-0 z-10 -translate-x-[34px] -translate-y-2 rounded-md bg-slate-900 px-1.5 py-0.5 text-[11px] font-semibold text-white">
                      {item.step}
                    </span>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm">
                      {item.icon === "monitor" && (
                        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <rect x="3" y="4" width="18" height="12" rx="2" />
                          <path d="M8 20h8M12 16v4" />
                        </svg>
                      )}
                      {item.icon === "users" && (
                        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <circle cx="9" cy="8" r="3" />
                          <circle cx="17" cy="9" r="2" />
                          <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
                          <path d="M15 18c0-1.8 1.2-3.3 2.9-3.8" />
                        </svg>
                      )}
                      {item.icon === "chip" && (
                        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <rect x="7" y="7" width="10" height="10" rx="1.5" />
                          <path d="M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3" />
                        </svg>
                      )}
                      {item.icon === "database" && (
                        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <ellipse cx="12" cy="6" rx="7" ry="3" />
                          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
                        </svg>
                      )}
                      {item.icon === "check" && (
                        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M8.5 12.5l2.5 2.5 4.5-5" />
                        </svg>
                      )}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-lg leading-relaxed text-slate-500">{item.description}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                The Standard for Modern Enterprise
              </h2>
              <p className="mt-4 text-lg text-slate-500 sm:text-xl">
                Why the world&apos;s most innovative offices are switching to OptiCam.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 overflow-hidden rounded-2xl border border-slate-200"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 }}
            >
              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50">
                <div className="px-4 py-4 text-left text-sm font-semibold text-slate-700 sm:px-6 sm:text-base">Feature</div>
                <div className="px-4 py-4 text-left text-sm font-semibold italic text-slate-500 sm:px-6 sm:text-base">Traditional Biometrics</div>
                <div className="px-4 py-4 text-left text-sm font-semibold text-slate-800 sm:px-6 sm:text-base">OptiCam AI</div>
              </div>

              {[
                {
                  feature: "Setup Cost",
                  traditional: "$5,000+ per device",
                  opticam: "$0 (Existing Hardware)",
                },
                {
                  feature: "Deployment Speed",
                  traditional: "2-4 Weeks (Wiring/Installation)",
                  opticam: "48 Hours (Software Config)",
                },
                {
                  feature: "User Experience",
                  traditional: "Queues & Physical Contact",
                  opticam: "Zero Contact / Natural Walk",
                },
                {
                  feature: "Scalability",
                  traditional: "Linear Cost per Location",
                  opticam: "Infinite Cloud Scaling",
                },
              ].map((row, idx) => (
                <div key={row.feature} className={`grid grid-cols-3 ${idx !== 3 ? "border-b border-slate-200" : ""}`}>
                  <div className="px-4 py-4 text-sm font-semibold text-slate-800 sm:px-6 sm:text-base">{row.feature}</div>
                  <div className="px-4 py-4 text-sm text-slate-600 sm:px-6 sm:text-base">{row.traditional}</div>
                  <div className="bg-slate-50/70 px-4 py-4 text-sm font-semibold text-slate-800 sm:px-6 sm:text-base">{row.opticam}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="border-t border-slate-800 bg-gradient-to-r from-[#0e1016] via-[#12141b] to-[#0e1016] py-12 lg:py-16">
          <h2 className="text-3xl text-center font-bold tracking-tight text-white sm:text-5xl mb-5">
            Measurable ROI for Your Infrastructure
          </h2>
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-10">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                {/* <h2 className="text-3xl text-center font-bold tracking-tight text-white sm:text-5xl">
                  Measurable ROI for Your Infrastructure
                </h2> */}
                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    { value: "45%", label: "Reduction in Hardware TCO", icon: "trend" },
                    { value: "100%", label: "Elimination of Buddy Punching", icon: "chart" },
                    { value: "SOC2", label: "Enterprise Data Security", icon: "shield" },
                    { value: "99%", label: "Employee Satisfaction Rate", icon: "users" },
                  ].map((item, idx) => (
                    <motion.article
                      key={item.value + item.label}
                      className="rounded-xl border border-slate-700 bg-slate-800/65 p-5"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.05 }}
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center text-slate-300">
                        {item.icon === "trend" && (
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <path d="M4 16l6-6 4 4 6-6" />
                            <path d="M14 8h6v6" />
                          </svg>
                        )}
                        {item.icon === "chart" && (
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <path d="M4 19h16M7 16V8M12 16V5M17 16v-4" />
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
                      </span>
                      <p className="mt-3 text-4xl font-bold text-white">{item.value}</p>
                      <p className="mt-1 text-lg text-slate-400">{item.label}</p>
                    </motion.article>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="min-w-0 rounded-2xl border border-slate-300 bg-white p-6 shadow-xl mt-7"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.07 }}
              >
                <h3 className="text-3xl font-bold text-slate-900">Enterprise Deployment Readiness</h3>
                <ul className="mt-5 space-y-8">
                  {[
                    "Supports H.264, H.265, and MJPEG video codecs.",
                    "GDPR & PDPA compliant data anonymization.",
                    "Native integration with SAP, Workday, and Oracle.",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 text-lg text-slate-600">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-slate-500">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                          <path d="M6 12l4 4 8-8" />
                        </svg>
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[color:var(--inops-blue)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--inops-navy)]"
                >
                  Request Implementation Plan
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-[#f8fafc] py-12 lg:py-16">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[color:var(--inops-blue)] sm:text-6xl">
                Upgrade your attendance system without changing your infrastructure.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-2xl">
                Stop investing in plastic boxes and start investing in intelligence. Experience the future of workforce operations with OptiCam today.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-w-[200px] items-center justify-center rounded-xl bg-[color:var(--inops-blue)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--inops-navy)]"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-w-[200px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Talk to an Expert
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
