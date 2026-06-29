import HeroSection from "@/app/components/solution/SolutionHeroBanner";
import StatsBar from "@/app/components/solution/StatsBar";
import PainPointsSection from "@/app/components/solution/PainPointsSection";
import FeaturesSection from "@/app/components/solution/FeaturesSection";
import LifecycleSection from "@/app/components/solution/LifeCycleSection";
import CTASection from "@/app/components/solution/CTASection";
import { AnimatedSection } from "@/app/components/AnimatedSection";
import { FlyInText } from "@/app/components/FlyInText";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import AnimatedCounter from "@/app/components/AnimatedCounter";
import {
  IconBox,
  IconTruck,
  IconSearch,
  IconRefresh,
  IconCheckCircle,
  IconChart,
  IconTag,
  IconShield,
} from "@/app/components/solution/Icons";

const ordersHeroRight = (
  <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] bg-white border border-gray-200 flex flex-col">

    <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-gray-100">
      <div className="flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-gray-200" />
        <div className="h-3 w-3 rounded-full bg-gray-200" />
      </div>
      <span className="text-[10px] font-mono text-gray-400">OMS_DASHBOARD_V4.0</span>
    </div>
    <div className="p-6 flex flex-col gap-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-2xl font-black text-gray-900">#ORD-88291</p>
          <p className="text-sm text-gray-500 mt-1">Customer: Global Retail Corp</p>
        </div>
        <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-700 shadow-sm whitespace-nowrap">
          Fulfillment In Progress
        </span>
      </div>
      <div>
        <div className="flex justify-between text-xs font-semibold mb-3">
          <span className="text-gray-400 uppercase tracking-wide">Capture</span>
          <span className="text-gray-400 uppercase tracking-wide">Validate</span>
          <span className="text-blue-600 font-bold uppercase tracking-wide">Picking</span>
          <span className="text-gray-300">···</span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
          <div className="h-2 rounded-full bg-blue-600" style={{ width: "62%" }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-2">
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
            Line Items
          </p>
          <p className="text-2xl font-black text-gray-900">
            1,240 <span className="text-base font-semibold text-gray-400">Units</span>
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
            Est. Delivery
          </p>
          <p className="text-xl font-black text-gray-900">
            Tomorrow, <span className="text-blue-600">4PM</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const heroData = {
  eyebrow: "Enterprise Solutions",
  titleLine1: "Order Management",
  titleLine2: "Solution",
  description:
    "Streamline order capture, fulfillment, tracking and returns in one platform. Orchestrate complex global commerce from a single source of truth.",
  buttons: [
    { label: "Request Demo", href: "#", variant: "primary" as const },
    { label: "Start Free Trial", href: "#", variant: "outline" as const },
  ],
  trustText: "Join 800+ global brands optimizing their fulfillment",
  rightContent: ordersHeroRight,
};

const statsData = {
  heading: "Impact that Matters",
  subheading: "Data-driven organizations achieve higher margins. Track the metrics that define your growth.",
  stats: [
    { label: "Order Cycle Time", value: 4, suffix: ".2 Hours", change: "↓ 7.13% vs last month", changePositive: true },
    { label: "Fulfillment Rate", value: 99, suffix: ".8%", change: "↑ 1.3% vs last month", changePositive: true },
    { label: "Return Rate", value: 3, suffix: ".1%", change: "↓ 0.5% vs last month", changePositive: true },
    { label: "Order Accuracy", value: 99, suffix: ".95%", change: "↑ 0.6% vs last month", changePositive: true },
  ],
};

const painData = {
  layout: "grid" as const,
  heading: "Modern Fulfillment is Complex",
  description:
    "Legacy systems struggle with the fragmentation of modern multi-channel commerce. We solve the gaps that slow you down.",
  points: [
    { title: "Fragmented Channels", description: "Orders scattered across web, mobile, and marketplaces without a single view." },
    { title: "Fulfillment Delays", description: "Manual validation processes causing bottlenecks in picking and packing." },
    { title: "Zero Visibility", description: "Blind spots in the order journey leading to customer frustration and support calls." },
    { title: "Return Complexity", description: "Reverse logistics that are costly and difficult to track for both staff and customers." },
  ],
  highlightBadges: [
    { value: "−38%", label: "Reduction in processing errors", colorClass: "bg-gray-900 text-white" },
    { value: "+99.8%", label: "Fulfillment rate achieved", colorClass: "bg-blue-600 text-white" },
  ],
};

const featuresData = {
  eyebrow: "Platform Capabilities",
  heading: "Engineered for Scalability",
  description:
    "LogiStream OMS provides the tools required to manage orders from any source to any destination.",
  cards: [
    {
      icon: <IconTag />,
      title: "Unified Order Processing",
      description: "Consolidate orders from Shopify, Amazon, ERPs, and custom portals into a single, high-performance orchestration engine.",
    },
    {
      icon: <IconCheckCircle />,
      title: "Fulfillment Management",
      description: "Intelligent routing rules that assign orders to the best warehouse based on inventory availability and geographic proximity.",
    },
    {
      icon: <IconSearch />,
      title: "Real-time Order Tracking",
      description: "End-to-end visibility for both operations teams and end customers. Automated status updates at every milestone.",
    },
    {
      icon: <IconRefresh />,
      title: "Automated Returns Management",
      description: "A streamlined returns portal that automates labels, inspections, and refunds, turning a cost center into a loyalty builder.",
    },
  ],
  columns: 2 as const,
};

const lifecycleData = {
  heading: "The Order Lifecycle",
  subheading: "Seamlessly transition through every stage of the fulfillment journey with automated triggers and validation.",
  steps: [
    { icon: <IconBox className="h-6 w-6" />, label: "Order Capture", sublabel: "Omni-channel" },
    { icon: <IconCheckCircle className="h-6 w-6" />, label: "Validation", sublabel: "Fraud & data" },
    { icon: <IconTag className="h-6 w-6" />, label: "Fulfillment", sublabel: "Smart routing" },
    { icon: <IconTruck className="h-6 w-6" />, label: "Shipping", sublabel: "Carrier dispatch" },
    { icon: <IconRefresh className="h-6 w-6" />, label: "Returns", sublabel: "Loop closed" },
  ],
};

const ctaData = {
  heading: "Streamline your order operations today.",
  subheading: "Join 500+ global brands optimising their fulfillment with LogiStream's enterprise order management platform.",
  buttons: [
    { label: "Request Demo", href: "#", variant: "white" as const },
    { label: "Start Free Trial", href: "#", variant: "outline-white" as const },
  ],
  layout: "centered" as const,
  trustBadges: [
    {
      label: "No Credit Card Required",
    },
    {
      label: "14 day full feature trial",
    },
    {
      label: "Dedicated Onboarding",
    },
  ],
};


type LiveOrderRow = {
  id: string;
  customer: string;
  location: string;
  amount: string;
  status: "processing" | "shipped" | "delivered";
};

const liveOrders: LiveOrderRow[] = [
  { id: "#IN-R82", customer: "Rajesh Kumar", location: "Indiranagar", amount: "₹1,290", status: "processing" },
  { id: "#IN-R83", customer: "Priya Sharma", location: "Koramangala",amount: "₹1,355", status: "shipped" },
  { id: "#IN-R84", customer: "Sunit Patil", location: "Whitefield", amount: "₹11,450", status: "delivered" },
];

const statusMap = {
  processing: { label: "Processing", color: "bg-yellow-100 text-yellow-700" },
  shipped: { label: "Shipped", color: "bg-blue-100 text-blue-700" },
  delivered: { label: "Delivered", color: "bg-green-100 text-green-700" },
};

const dashboardKpis = [
  { label: "Avg Cycle Time",      value: 14,     suffix: ".2h", prefix: "",  delta: "+18%", icon: <IconChart className="h-4 w-4 text-teal-600" /> },
  { label: "Fulfillment Rate",    value: 98,     suffix: ".5%", prefix: "",  delta: "+1.2%", icon: <IconCheckCircle className="h-4 w-4 text-teal-600" /> },
  { label: "Revenue Today",       value: 452000, suffix: "",    prefix: "₹", delta: "+22%",  icon: <IconBox className="h-4 w-4 text-teal-600" /> },
  { label: "COD Reconciliation",  value: 99,     suffix: ".9%", prefix: "",  delta: "+0.5%", icon: <IconTruck className="h-4 w-4 text-teal-600" /> },
];

const avatarStyle: Record<string, { bg: string; text: string }> = {
  R: { bg: "bg-pink-100",   text: "text-pink-600"   },
  P: { bg: "bg-pink-100",   text: "text-pink-600"   },
  S: { bg: "bg-pink-100",   text: "text-pink-600"   },
};


const opsFeatureGroups = [
  {
    icon: <IconBox className="h-6 w-6 text-blue-600" />,
    iconBg: "bg-blue-50",
    title: "Order Processing",
    description: "High-velocity engine designed for Indian festive peak seasons.",
    items: ["Bulk Processing", "Priority Queue Routing", "COT Priority Routing"],
  },
  {
    icon: <IconCheckCircle className="h-6 w-6 text-blue-600" />,
    iconBg: "bg-blue-50",
    title: "Fulfillment Management",
    description: "Real-time global inventory visibility across dark stores and warehouses.",
    items: ["Smart Zone Slotting", "Delay Score Buffers", "Wave Planned"],
  },
  {
    icon: <IconSearch className="h-6 w-6 text-blue-600" />,
    iconBg: "bg-blue-50",
    title: "Order Tracking",
    description: "Branded tracking pages for a premium customer experience.",
    items: ["Milestone Notifications", "Status API Webhooks", "White-labeled"],
  },
  {
    icon: <IconRefresh className="h-6 w-6 text-blue-600" />,
    iconBg: "bg-blue-50",
    title: "Returns Management",
    description: "Turn reverse logistics into a loyalty driver for your brand.",
    items: ["Sell-down Restocking", "Automated QC Workflows", "Exchange Portal"],
  },
];

export default function OrdersPage() {
  return (
    <main>
      <HeroSection {...heroData} />
      <PainPointsSection {...painData} />
      <FeaturesSection {...featuresData} />
      <LifecycleSection {...lifecycleData} variant="boxed" />
      <StatsBar {...statsData} />

      <AnimatedSection className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-12 text-center">
            <FlyInText as="h2" direction="up" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Intelligent Operations Control
            </FlyInText>
            <FlyInText as="p" direction="up" delay={0.07} className="mt-3 text-sm text-gray-500 max-w-xl mx-auto">
              Go beyond simple order processing with predictive analytics tailored for the Indian supply chain.
            </FlyInText>
          </div>
          <div className="mb-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {dashboardKpis.map((kpi, i) => (
                <div
                  key={kpi.label}
                  className="relative rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-400 rounded-l-2xl" />
                  <div className="pl-5 pr-5 pt-5 pb-6">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
                        {kpi.icon}
                      </div>
                      {kpi.delta && (
                        <span className="text-xs font-medium text-gray-400">
                          {kpi.delta}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-1.5">{kpi.label}</p>
                    <p className="text-2xl font-bold text-gray-900 leading-none">
                      {kpi.prefix}
                      <AnimatedCounter
                        value={kpi.value}
                        suffix={kpi.suffix}
                        delay={0.2 + i * 0.1}
                        className="text-2xl font-bold"
                      />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 items-stretch">

            <AnimateOnScroll variant="slide-right" delay={80}>
              <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-4 sm:p-5 h-full">
                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-900">Live Orders — Bengaluru Hub</p>
                  <span className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    Active Now
                  </span>
                </div>
                <div className="w-full text-xs">
                  <div className="flex flex-col gap-3">
                  {liveOrders.map((order) => {
                    const av = avatarStyle[order.customer[0]] ?? { bg: "bg-gray-100", text: "text-gray-600" };
                    const st = statusMap[order.status];
                    return (
                      <div
                        key={order.id}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-3 sm:px-4 hover:bg-gray-50/60 transition-colors"
                      >
                        <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center font-bold text-xs ${av.bg} ${av.text}`}>
                          {order.customer[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-900 truncate">
                            <span className="text-blue-600 font-mono">{order.id}</span>
                            <span className="text-gray-400 mx-1">•</span>
                            {order.customer}
                          </p>
                          <p className="text-[11px] text-gray-400 truncate mt-0.5">{order.location}</p>
                        </div>
  
                        <div className="shrink-0 text-right">
                          <p className="text-sm font-semibold text-gray-900 leading-none">{order.amount}</p>
                          <span className={`inline-block mt-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${st.color}`}>
                            {st.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="slide-left" delay={100}>
              <div className="rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center relative overflow-hidden h-full">
                <div className="w-28 h-52 rounded-[28px] border-[6px] border-gray-800 bg-[#c8c0a0] relative flex items-center justify-center shadow-xl">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-7 h-1.5 bg-gray-800 rounded-full" />
                  <div className="w-full h-full rounded-[22px] bg-white" />
                </div>
                <div className="absolute right-6 top-1/2 -translate-y-1/4 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-md">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wide mb-0.5">Returns Intake</p>
                  <p className="text-xs font-bold text-gray-900">Item Verified</p>
                  <p className="text-[10px] text-gray-500">Ready for Restock</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll variant="fade" delay={120}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {opsFeatureGroups.map((group, i) => (
              <AnimateOnScroll
                key={group.title}
                variant="fade-up"
                delay={i * 80}
                className="rounded-2xl bg-gray-50 p-6 flex flex-col gap-0"
              >
                <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${group.iconBg}`}>
                  {group.icon}
                </div>
                <p className="text-base font-bold text-gray-900 mb-2">{group.title}</p>

                <p className="text-sm text-gray-400 leading-relaxed mb-5">{group.description}</p>
                <ul className="space-y-3 mt-auto">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <IconShield className="h-4 w-4 text-teal-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
        </div>
      </AnimatedSection>
      <CTASection {...ctaData} />
    </main>
  );
}