import HeroSection from "@/app/components/solution/SolutionHeroBanner";
import StatsBar from "@/app/components/solution/StatsBar";
import PainPointsSection from "@/app/components/solution/PainPointsSection";
import FeaturesSection from "@/app/components/solution/FeaturesSection";
import LifecycleSection from "@/app/components/solution/LifeCycleSection";
import CTASection from "@/app/components/solution/CTASection";
import { AnimatedSection } from "@/app/components/AnimatedSection";
import { FlyInText } from "@/app/components/FlyInText";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import {
  IconBox,
  IconTag,
  IconChart,
  IconScan,
  IconTruck,
  IconDatabase,
  IconWorkflow,
  IconClipboardCheck,
  IconChip,
  IconCheckCircle,
} from "@/app/components/solution/Icons";


const heroData = {
  bgImage: "/images/solutions/Warehouse-management.jpeg", 
  bgImageAlt: "Warehouse manager reviewing inventory data on a laptop",
  bgPosition: "72% 40%",
  gradientCenter: "28% 22%",
  eyebrow: "Logistics Excellence",
  titleLine1: "Warehouse Management",
  titleLine2: "Solution",
  description:
    "Real-time inventory visibility, efficient operational orchestration and predictive analytics designed for high-throughput modern warehouses.",
  buttons: [
    { label: "Request Demo", href: "/contact", variant: "primary" as const },
  ],
};

const statsData = {
  heading: "Impact Performance",
  subheading: "Industry-leading benchmarks achieved by InOps partners.",
  stats: [
    { label: "Inventory Accuracy", value: 99, suffix: ".9%", change: "↑ 2.4% vs last month", changePositive: true },
    { label: "Orders Picked/hr", value: 240, suffix: "+", change: "↑ 18% vs last month", changePositive: true },
    { label: "Receiving Throughput", value: 1, suffix: ".5k", change: "↑ 12% vs last month", changePositive: true },
    { label: "On-Time Dispatch", value: 99, suffix: ".7%", change: "↑ 4.1% vs last month", changePositive: true },
  ],
};

const painData = {
  layout: "split" as const,
  heading: "The Cost of Operational Inefficiency",
  description:
    "Manual processes and fragmented data lead to invisible leaks in your bottom line. We solve the core friction points that slow down your growth.",
  imageSrc:"/images/solutions/warehouse-employee.jpg",
  imageSrc2: "/images/solutions/Warehouse-PainPoint.jpg",
    points: [
    { title: "Inventory Inaccuracies", description: "Shrinkage and ghost stock lead to missed sales and capital bloat." },
    { title: "Slow Receiving & Putaway", description: "Bottlenecks at the dock prevent stock from becoming sellable quickly." },
    { title: "Inefficient Picking", description: "Excessive travel time and mis-picks erode order fulfillment margins."},
    { title: "Data Silos", description: "Lack of real-time analytics makes proactive management impossible." },
  ],
  highlightBadges: [
    { value: "+30%", label: "Storage utilization efficiency", colorClass: "bg-gray-900 text-white" },
    { value: "−45%", label: "Reduction in order cycle time", colorClass: "bg-blue-600 text-white" },
  ],
};

const featuresData = {
  eyebrow: "Enterprise Features",
  heading: "Engineered for Complexity",
  description:
    "Comprehensive tools that handle the nuances of modern supply chains, from high-volume parcel to specialized asset tracking.",
  ctaLabel: "Download Feature Specs",
  ctaHref: "#",
  cards: [
    {
      icon: <IconBox />,
      title: "Inventory Management",
      description: "Centralized control of stock levels, multi-location support, and automated reorder points.",
    },
    {
      icon: <IconTag />,
      title: "Asset Tracking",
      description: "Live tracking of pallets, forklifts, and equipment with real-time location services.",
    },
    {
      icon: <IconScan />,
      title: "Barcode & QR Support",
      description: "Seamless scanning integration with mobile devices and professional hardware.",
    },
    {
      icon: <IconChart />,
      title: "Warehouse Analytics",
      description: "Visual dashboards for heatmapping, throughput trends, and workforce productivity.",
    },
  ],
};

const lifecycleData = {
  heading: "The InOps Journey",
  subheading: "From arrival to departure, every step is optimized for speed.",
  steps: [
    { icon: <IconClipboardCheck className="h-9 w-9" />,         label: "Receiving", sublabel: "Automated verification & staging protocols", iconBg: "bg-blue-50",   iconColor: "#2563eb" },
    { icon: <IconWorkflow className="h-9 w-9" />, label: "Putaway",   sublabel: "Automated verification & staging protocols", iconBg: "bg-purple-50", iconColor: "#9333ea" },
    { icon: <IconDatabase className="h-9 w-9" />,         label: "Inventory", sublabel: "Automated verification & staging protocols", iconBg: "bg-teal-50",   iconColor: "#0d9488" },
    { icon: <IconScan className="h-9 w-9" />,        label: "Picking",   sublabel: "Automated verification & staging protocols", iconBg: "bg-orange-50", iconColor: "#f97316" },
    { icon: <IconTruck className="h-9 w-9" />,       label: "Dispatch",  sublabel: "Automated verification & staging protocols", iconBg: "bg-blue-50",   iconColor: "#1d4ed8" },
  ],
};

const ctaData = {
  heading: "Optimize your warehouse operations today.",
  subheading:
    "Join hundreds of logistics leaders who have revolutionized their fulfillment efficiency with InOps.",
  buttons: [
    { label: "Request Personal Demo", href: "/contact", variant: "white" as const },
    { label: "Contact Sales Specialist", href: "/contact", variant: "outline-white" as const },
  ]
};

const integrations = [
  { icon: IconChip,     name: "WMS+",        color: "#2563eb" },
  { icon: IconDatabase, name: "ERP Core",     color: "#2563eb" },
  { icon: IconScan,     name: "RFID Pro",     color: "#f97316" },
  { icon: IconTruck,    name: "TMS Connect",  color: "#0d9488" },
];

const deliveryWarehouseFaqItems = [
  {
    question: "What is Delivery and Warehouse Management Software?",
    answer:
      "It helps organizations manage inbound deliveries, outbound dispatches, warehouse operations, vehicle movement, inventory visibility, and gate processes.",
  },
  {
    question: "How does warehouse management software improve efficiency?",
    answer:
      "It automates receiving, storage, picking, dispatch, and inventory tracking, reducing errors and improving operational productivity.",
  },
  {
    question: "Can the solution track delivery vehicles?",
    answer:
      "Yes. Vehicle entry, exit, loading status, and delivery movements can be monitored in real time.",
  },
  {
    question: "Does warehouse management integrate with ERP?",
    answer:
      "Yes. Warehouse Management Software integrates with ERP systems for inventory, procurement, and order management.",
  },
  {
    question: "Which industries use warehouse management solutions?",
    answer:
      "Manufacturing, logistics, distribution, retail, FMCG, pharmaceuticals, and e-commerce companies widely use warehouse management software.",
  },
] as const;

export default function WarehousePage() {
  return (
    <main>
      <HeroSection {...heroData} />
      <StatsBar {...statsData} />
      <PainPointsSection {...painData} />
      <FeaturesSection {...featuresData} />
      <LifecycleSection {...lifecycleData} variant="default" />
      <AnimatedSection className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-1">Ecosystem</p>
              <FlyInText as="h2" direction="up" className="text-2xl font-extrabold text-gray-900">
                Built for Connectivity
              </FlyInText>
              <p className="text-sm text-gray-500 mt-1">Native integrations with your tech stack.</p>
            </div>
            <div className="flex flex-wrap gap-6">
            {integrations.map(({ icon: Icon, name, color }) => (
              <AnimateOnScroll
                key={name}
                variant="scale"
                delay={50}
                className="flex items-center gap-2"
              >
                <div style={{ color }}>
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-sm font-semibold text-gray-600">{name}</span>
              </AnimateOnScroll>
            ))}
          </div>
          </div>
        </div>
      </AnimatedSection>

      <section aria-labelledby="delivery-warehouse-faq-heading" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            {/* <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-blue-800">
              Delivery & Warehouse Management FAQ
            </span> */}
            <h2 id="delivery-warehouse-faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Answers to common questions about delivery tracking, warehouse operations, vehicle movement, ERP integration, and inventory visibility.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.35)]">
            <div className="divide-y divide-slate-200">
              {deliveryWarehouseFaqItems.map((item, index) => (
                <details key={item.question} className="group bg-white/70 px-5 py-5 open:bg-white sm:px-7 sm:py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left marker:hidden">
                    <span className="flex min-w-0 gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold tabular-nums text-blue-700 ring-1 ring-blue-100">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-semibold leading-snug text-slate-950 sm:text-lg">{item.question}</span>
                    </span>
                    <span
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg leading-none text-slate-600 transition group-open:rotate-45 group-open:border-blue-200 group-open:text-blue-700"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 pl-12 text-sm leading-relaxed text-slate-600 sm:pl-12 sm:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection {...ctaData} />

    </main>
  );
}
