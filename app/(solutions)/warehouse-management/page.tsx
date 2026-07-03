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

const warehouseHeroRight = (
  <div className="relative rounded-2xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] bg-white overflow-visible flex flex-col border border-gray-100 font-sans z-10">
    
    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="bg-[#eef4ff] p-2 rounded-lg text-blue-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-sm">Warehouse Operations Overview</h3>
          <p className="text-[11px] text-gray-500 mt-0.5">Live Snapshot • Today</p>
        </div>
      </div>
      <div className="px-3 py-1 rounded-full border border-gray-200 text-[11px] font-semibold text-gray-700">
        Depot: Main
      </div>
    </div>

    <div className="grid grid-cols-3 gap-3 px-5 py-4">
      <div className="border border-gray-100 rounded-xl p-3 bg-gray-50/50">
        <div className="text-[10px] font-bold text-gray-600 mb-1 tracking-wide">INVENTORY ACCURACY</div>
        <div className="text-xl font-black text-gray-900 flex items-center gap-1.5">
          99.9% 
        </div>
        <div className="text-[10px] text-gray-500 mt-0.5">(vs last month) <span className="text-emerald-500 font-medium">↗</span></div>
      </div>
      <div className="border border-gray-100 rounded-xl p-3 bg-gray-50/50">
        <div className="text-[10px] font-bold text-gray-600 mb-1 tracking-wide">ORDERS PICKED/HR</div>
        <div className="text-xl font-black text-gray-900 flex items-center gap-1.5">
          240+ 
        </div>
        <div className="text-[10px] text-gray-500 mt-0.5">(vs last month) <span className="text-emerald-500 font-medium">↗</span></div>
      </div>
      <div className="border border-gray-100 rounded-xl p-3 bg-gray-50/50">
        <div className="text-[10px] font-bold text-gray-600 mb-1 tracking-wide">ON-TIME DISPATCH</div>
        <div className="text-xl font-black text-gray-900 flex items-center gap-1.5">
          99.7% 
        </div>
        <div className="text-[10px] text-gray-500 mt-0.5">(vs last month) <span className="text-emerald-500 font-medium">↗</span></div>
      </div>
    </div>

    <div className="px-5 pb-5">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-gray-900 text-sm">Live Operations Feed</h4>
        <button className="text-[11px] font-semibold text-gray-500 hover:text-gray-900">
          Filter by Station
        </button>
      </div>

      <div className="flex flex-col text-[12px]">
        <div className="flex items-center justify-between py-2.5 border-t border-gray-100">
          <div className="w-[38%] font-medium text-gray-900">Receiving Station 3 - T. Jenkins</div>
          <div className="w-[28%] text-gray-600">Stock Putaway</div>
          <div className="w-[14%] text-gray-500">08:52 AM</div>
          <div className="w-[18%] flex justify-end">
            <span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 text-[10px] font-bold">In Progress</span>
          </div>
        </div>
        <div className="flex items-center justify-between py-2.5 border-t border-gray-100 relative bg-gray-50 -mx-5 px-5">
          <div className="w-[38%] font-bold text-gray-900">Order #4593 - Pick Verification</div>
          <div className="w-[28%] text-gray-900 relative">
            <span className="relative z-10 font-medium">Stock Verified</span>
            
            <div className="absolute -inset-x-2 -inset-y-1.5 border border-blue-200 bg-blue-50/30 rounded-md shadow-sm pointer-events-none z-10"></div>
            
            <div className="absolute top-[140%] left-0 bg-white rounded-lg shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15)] border border-blue-100 p-2.5 z-20 flex gap-2.5 items-center w-max">
              <div className="bg-blue-50 rounded-full p-1 border border-blue-100">
                <IconCheckCircle />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-[12px] text-gray-900">Stock Verified</div>
                <div className="text-[10px] text-gray-500 mt-0.5">Order fulfillment</div>
              </div>
            </div>
          </div>
          <div className="w-[14%] text-gray-900 font-medium">09:05 AM</div>
          <div className="w-[18%] flex justify-end">
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] font-bold">Verified</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
  rightContent: warehouseHeroRight,
  rightContentWidthClassName: "w-[66%] sm:w-[44%] lg:w-[34%] max-w-[500px]",
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
