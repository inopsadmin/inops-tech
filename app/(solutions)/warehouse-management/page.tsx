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
} from "@/app/components/solution/Icons";

const warehouseHeroRight = (
  <div className="relative w-full max-w-150 rounded-3xl shadow-[0_24px_60px_-12px_rgba(0,0,0,0.18)] bg-gray-900 overflow-hidden aspect-[4/3] flex flex-col border border-[#1a2235]">
    <div className="flex items-center gap-3 px-4 py-3 bg-[#0a0f1a] shrink-0">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-gray-700/40" />
        <div className="w-3 h-3 rounded-full bg-gray-700/40" />
        <div className="w-3 h-3 rounded-full bg-gray-700/40" />
      </div>
      <div className="flex-1 h-4 rounded-sm bg-gray-700/40 max-w-[25%]" />
    </div>
    
    <div className="flex flex-1 rounded-sm! overflow-hidden">
      <div className="w-16 flex flex-col gap-3 pl-3.5 pt-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-9 h-9 rounded-lg bg-gray-700/40"></div>
        ))}
      </div>

      <div className="flex-1 flex flex-col gap-3 p-3 overflow-hidden">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 rounded-xl border border-blue-900/60 bg-blue-700/10 p-4 h-28 flex flex-col gap-3">
            <div className="w-10 h-3 rounded bg-blue-500/50"></div>
            <div className="w-full max-w-20 h-6 rounded bg-blue-500"></div>
          </div>
          <div className="col-span-1 rounded-xl bg-gray-700/40 h-28"></div>
          <div className="col-span-1 rounded-xl bg-gray-700/40 h-28"></div>
        </div>
        <div className="w-[48%] h-4 rounded-md bg-gray-700/40 mt-2"></div>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-3 border border-gray-800 px-3 py-3.5 my-2"
            >
              <div className="h-4 w-4 shrink-0 rounded-full bg-gray-700/40" />
              <div className="h-2 flex-1 rounded bg-gray-700/40" style={{ maxWidth: "75%" }} />
              <div className="ml-auto h-3.5 w-12 rounded bg-gray-700/40" />
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="absolute rounded-md! bottom-8 right-8 bg-white py-4 px-5 shadow-2xl flex flex-col gap-2.5 min-w-50 border border-gray-100 z-10">
      <div className="flex items-center justify-center gap-3">
        <div className="w-5 h-5 rounded-full border-[1.5px] border-gray-800 flex items-center justify-center">
          <svg className="w-3 h-3 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-sm font-bold text-gray-900 tracking-wide">Stock Verified</span>
      </div>
      <div className="w-full h-1.5 bg-[#f3f4f6] rounded-full mt-1"></div>
    </div>
  </div>
);


const heroData = {
  eyebrow: "Logistics Excellence",
  titleLine1: "Warehouse",
  titleLine2: "Management",
  titleLine3: "Solution",
  description:
    "Real-time inventory visibility, efficient operational orchestration, and predictive analytics designed for high-throughput modern warehouses.",
  buttons: [
    { label: "Request Demo", href: "#", variant: "primary" as const },
    { label: "See Warehouse Demo", href: "#", variant: "outline" as const },
  ],
  trustText: "Trusted by 500+ warehouse managers worldwide",
  rightContent: warehouseHeroRight,
};

const statsData = {
  heading: "Impact Performance",
  subheading: "Industry-leading benchmarks achieved by LogiStream partners.",
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
  imageSrc2: "/images/solutions/warehouse-PainPoint.jpg",
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
  heading: "The LogiStream Journey",
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
    "Join hundreds of logistics leaders who have revolutionized their fulfillment efficiency with LogiStream.",
  buttons: [
    { label: "Request Personal Demo", href: "#", variant: "white" as const },
    { label: "Contact Sales Specialist", href: "#", variant: "outline-white" as const },
  ],
  testimonial: {
    quote: "LogiStream didn't just give us software; they gave us a 40% efficiency boost in 3 months.",
    name: "David Chen",
    role: "Director of Ops, GlobalFreight",
  },
};

const integrations = [
  { icon: IconChip,     name: "WMS+",        color: "#2563eb" },
  { icon: IconDatabase, name: "ERP Core",     color: "#2563eb" },
  { icon: IconScan,     name: "RFID Pro",     color: "#f97316" },
  { icon: IconTruck,    name: "TMS Connect",  color: "#0d9488" },
];

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
      <CTASection {...ctaData} />
      </AnimatedSection>

    </main>
  );
}
