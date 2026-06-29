import HeroSection from "@/app/components/solution/SolutionHeroBanner";
import PainPointsSection from "@/app/components/solution/PainPointsSection";
import FeaturesSection from "@/app/components/solution/FeaturesSection";
import LifecycleSection from "@/app/components/solution/LifeCycleSection";
import CTASection from "@/app/components/solution/CTASection";
import { AnimatedSection } from "@/app/components/AnimatedSection";
import { FlyInText } from "@/app/components/FlyInText";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import {
  IconRoute,
  IconTruck,
  IconGps,
  IconCheckCircle,
  IconBox,
  IconShield,
  IconTag,
  IconUser,
  IconClock,
  IconUserTrust,
  IconGlobal,
} from "@/app/components/solution/Icons";
import Image from "next/image";
import AnimatedCounter from "@/app/components/AnimatedCounter";


const deliveryHeroRight = (
  <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-[0_24px_60px_-12px_rgba(0,0,0,0.25)]">
    <Image
      src="/images/solutions/Prdouct-delivery.jpg"
      alt="Live fleet navigation"
      fill
      className="object-cover brightness-[0.35]"
      priority
    />
    <div className="absolute top-5 left-5 rounded-xl bg-[#0f141f]/95 backdrop-blur-sm border border-white/10 p-3.5 w-45 shadow-lg">
      <div className="flex items-center gap-1.5 mb-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
        <p className="text-[10px]! font-bold text-green-400 uppercase tracking-widest leading-none">Live Fleet Status</p>
      </div>
      {[
        { id: "DX-204", pct: 65, color: "bg-blue-500" },
        { id: "DX-118", pct: 92, color: "bg-blue-500" },
        { id: "DX-092", pct: 40, color: "bg-orange-400" },
      ].map((truck) => (
        <div key={truck.id} className="mb-1.5">
          <div className="flex justify-between text-[10px] text-gray-300 mb-0.5">
            <span>{truck.id}</span>
            <span className={truck.pct < 50 ? "text-orange-400 font-bold" : "text-white"}>
              {truck.pct}%
            </span>
          </div>
          <div className="h-1 w-full rounded-full bg-white/10">
            <div className={`h-1 rounded-full ${truck.color}`} style={{ width: `${truck.pct}%` }} />
          </div>
        </div>
      ))}
    </div>

    <div className="absolute top-5 right-5 rounded-xl bg-[#0f141f]/95 backdrop-blur-sm border border-white/10 px-3.5 py-3 shadow-lg">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-teal-500/30 shrink-0">
          <IconRoute />
        </div>
        <p className="text-[10px] text-gray-400 whitespace-nowrap">Total Deliveries Today</p>
      </div>
        <p className="text-xl font-black text-white leading-none">1,284</p>
    </div>

    <div className="absolute top-1/2 right-1/2 -translate-x-1/4 -translate-y-1/4 flex flex-col items-center">
      <IconGps className="h-7 w-7 text-blue-600" />
      <div className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold text-gray-900 shadow-lg mb-1 whitespace-nowrap">
        HQ DISPATCH
      </div>
    </div>

    <div className="absolute bottom-5 right-5 rounded-xl bg-white px-4 py-3 shadow-2xl w-55">
      <div className="flex items-center gap-2.5 mb-2">
        <div className="h-8 w-8 rounded-full bg-gray-100 overflow-hidden shrink-0 flex items-center justify-center">
          <IconUserTrust className="text-gray-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1">
            <p className="text-xs! font-bold text-gray-900 truncate">Marcus Thompson</p>
            <span className="shrink-0 rounded-full bg-green-100 px-1.5 py-0.5 text-[9px] font-bold text-green-700">
              On-Time
            </span>
          </div>
          <p className="text-[10px]! text-gray-500 truncate">Route: North Sector B</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-[10px] text-gray-400 border-t border-gray-100 pt-2">
        <IconClock className="h-4 w-4"/>
        <span className="whitespace-nowrap">Next Stop: 12:45 PM • 1.4 miles</span>
      </div>
    </div>

  </div>
);


const heroData = {
  eyebrow: "Last-Mile Logistics Solution",
  titleLine1: "Delivery Management",
  titleLine2: "Perfected.",
  description:
    "Smart dispatch, live tracking, and digital proof-of-delivery for reliable last-mile operations that keep customers coming back.",
  buttons: [
    { label: "Request Demo", href: "#", variant: "primary" as const },
    { label: "Calculate ROI", href: "#", variant: "outline" as const },
  ],
  trustText: "Trusted by 500+ global carriers",
  rightContent: deliveryHeroRight,
};

const painData = {
  layout: "grid" as const,
  heading: "Stop Losing Margin to Last-Mile Chaos",
  description:
    "The most expensive part of your supply chain shouldn't be the most fragmented. Resolve your core logistics pain points.",
  points: [
    { title: "Inefficient Routing", description: "Manual planning leads to excessive fuel costs and driver fatigue." },
    { title: "Visibility Gaps", description: "No real-time insight into driver location or delivery status." },
    { title: "Dispatch Delays", description: "Bottlenecks in order management cause cascading service failures." },
    { title: "POD Disputes", description: "Lack of digital evidence leads to costly customer claims." },
  ],
  highlightBadges: [
    { value: "−28%", label: "Reduction in fuel costs", colorClass: "bg-gray-900 text-white" },
    { value: "+42%", label: "Customer satisfaction score", colorClass: "bg-blue-600 text-white" },
  ],
};

const featuresData = {
  eyebrow: "Core Capabilities",
  heading: "Engineered for Operational Excellence",
  description: "Powerful tools built for modern fleets that demand precision and real-time responsiveness.",
  ctaLabel: "Explore All Features",
  ctaHref: "/contact",
  cards: [
    {
      icon: <IconRoute />,
      title: "AI Route Optimization",
      description: "Our proprietary algorithms calculate thousands of variables to find the most efficient route in seconds.",
    },
    {
      icon: <IconTruck />,
      title: "Transport Management",
      description: "Centralize multi-modal shipments and carrier relations in a single, unified logistics dashboard.",
    },
    {
      icon: <IconGps />,
      title: "Real-Time Fleet Tracking",
      description: "Use GPS telemetry and breadcrumb mapping to provide total oversight of every asset on the road.",
    },
    {
      icon: <IconShield />,
      title: "Digital POD",
      description: "Capture signatures, photos, and geotagged timestamps to eliminate delivery dispute forever.",
    },
  ],
};

const lifecycleData = {
  heading: "The Seamless Delivery Lifecycle",
  subheading: "From click to customer, LogiStream orchestrates every micro-moment.",
  steps: [
    {
      icon: <IconBox className="h-6 w-6" />,
      label: "Order",
      sublabel: "Consolidation & validation",
    },
    {
      icon: <IconTag className="h-6 w-6" />,
      label: "Dispatch",
      sublabel: "Route assignment & fleet",
    },
    {
      icon: <IconRoute className="h-6 w-6" />,
      label: "Optimization",
      sublabel: "AI route sequencing",
    },
    {
      icon: <IconGps className="h-6 w-6" />,
      label: "Track",
      sublabel: "Live GPS monitoring",
    },
    {
      icon: <IconCheckCircle className="h-6 w-6" />,
      label: "Delivery & POD",
      sublabel: "Digital confirmation",
    },
  ],
};

const ctaData = {
  heading: "Deliver on Time, Every Time.",
  subheading:
    "Join the world's most efficient logistics operations. Scale your last-mile without scaling your overhead.",
  buttons: [
    { label: "Request a Demo", href: "#", variant: "white" as const },
    { label: "Calculate ROI", href: "#", variant: "outline-white" as const },
  ],
  layout: "centered" as const,
  trustBadges: [
    {
      icon: <IconGlobal />,
      label: "Global Deployment",
    },
    {
      icon: <IconShield />,
      label: "ISO 27001 Certified",
    },
    {
      icon: <IconClock />,
      label: "24/7 Priority Support",
    },
  ],
};


const deliveryStats = [
  { label: "On-Time Delivery %", value: 98.4, suffix: "%", change: "↑ 2.4% vs last month" },
  { label: "Avg Delivery Time",  value: 42,   suffix: " min", change: "↑ 12.1% vs last month" },
  { label: "Fleet Utilization",  value: 94.2, suffix: "%", change: "↑ 5.5% vs last month" },
];


const impactPersonas = [
  {
    tag: "Dispatch Manager",
    headline: "Improved Routing & Exceptions",
    body: "Reduce the cognitive load on dispatchers with AI-driven suggestions and automated exception alerts.",
    icon: (
      <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    tag: "Logistics Head",
    headline: "Lower Costs, Higher Reliability",
    body: "Strategic oversight into fleet efficiency that translates directly into measurable transport savings.",
    icon: (
      <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    tag: "Customer Ops",
    headline: "Enhanced Brand Experience",
    body: "Give customers real-time tracking links and proactive notifications that build long-term trust.",
    icon: <IconUser className="h-6 w-6 text-gray-500" />,
  },
];


const integrations = [
  { name: "Telematics+" },
  { name: "GeoMaps" },
  { name: "GlobalTMS" },
  { name: "CarrierAPI" },
];

const integrationFeatures = [
  "Standard Telematics (OBD-II, J1939)",
  "Native Google Maps & HERE Integration",
  "REST API for Custom Carrier Portals",
  "Certified TMS Connectors",
];



export default function DeliveryPage() {
  return (
    <main>
      <HeroSection {...heroData} />
      <PainPointsSection {...painData} />
      <FeaturesSection {...featuresData} />
      <LifecycleSection {...lifecycleData} variant="connected" />
      <AnimatedSection className="bg-blue-100/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-10">
            <div>
              <FlyInText
                as="h2"
                direction="up"
                className="text-2xl font-extrabold text-gray-900 sm:text-3xl leading-tight"
              >
                Performance At a Glance
              </FlyInText>
              <FlyInText
                as="p"
                direction="up"
                delay={0.06}
                className="mt-3 text-sm text-gray-600 leading-relaxed sm:max-w-xs"
              >
                Track the metrics that define your logistics success and drive data-driven decision making.
              </FlyInText>
              <AnimateOnScroll variant="fade-up" delay={150} className="mt-5">
                <span className="inline-block rounded-full border border-gray-300 bg-white px-4 py-1.5 text-xs font-semibold text-gray-600 shadow-sm">
                  Real-time Data
                </span>
              </AnimateOnScroll>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {deliveryStats.map((stat, i) => (
                <AnimateOnScroll
                  key={stat.label}
                  variant="fade-up"
                  delay={i * 100}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6"
                >
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
                    {stat.label}
                  </p>
                  <p className="font-extrabold text-blue-600 leading-none">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={1.4}
                      delay={0.2 + i * 0.1}
                      className="text-2xl sm:text-3xl"
                    />
                  </p>
                  <p className="mt-3 text-xs font-medium text-green-500">{stat.change}</p>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <AnimateOnScroll variant="fade-up" className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <FlyInText as="h2" direction="up" className="text-2xl font-extrabold text-gray-900 sm:text-3xl whitespace-nowrap">
              Impact Across the Enterprise
            </FlyInText>
            <div className="h-px flex-1 bg-gray-200" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {impactPersonas.map((persona, i) => (
              <AnimateOnScroll
                key={persona.headline}
                variant="fade-up"
                delay={i * 100}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                    {persona.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-[var(--inops-blue)]">
                      {persona.tag}
                    </p>
                    <h3 className="text-sm font-extrabold text-gray-900 leading-snug">
                      {persona.headline}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed italic">
                  &ldquo;{persona.body}&rdquo;
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold text-blue-600 mb-0.5">InOps</p>
              <FlyInText as="h2" direction="up" className="text-2xl font-extrabold text-gray-900 sm:text-3xl leading-tight">
                Built for Connectivity
              </FlyInText>
              <FlyInText as="p" direction="up" delay={0.07} className="mt-1 text-sm text-gray-500 leading-relaxed max-w-xl">
                Inops doesn&apos;t operate in a vacuum. We integrate seamlessly with your existing
                technology ecosystem, from telematics providers to global map APIs.
              </FlyInText>

              <ul className="mt-6 space-y-3">
                {integrationFeatures.map((f, i) => (
                  <AnimateOnScroll key={f} variant="slide-right" delay={i * 70} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-3 w-3 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-700">{f}</span>
                  </AnimateOnScroll>
                ))}
              </ul>
            </div>
            <AnimateOnScroll variant="slide-left" delay={150} className="grid grid-cols-2 gap-4">
              {integrations.map((int) => (
                <div
                  key={int.name}
                  className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-8 shadow-sm hover:shadow-md transition"
                >
                  <span className="text-sm font-semibold text-gray-400">{int.name}</span>
                </div>
              ))}
            </AnimateOnScroll>
          </div>
        </div>
      </AnimatedSection>
      <CTASection {...ctaData} />
    </main>
  );
}