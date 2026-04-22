/**
 * Curated Unsplash imagery aligned with industrial workforce, CLMS, biometrics, and access.
 * Centralised so homepage sliders and modules stay consistent with real services.
 */

export const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=3200&q=85",
    alt: "Business team reviewing workforce governance dashboards on screens",
    title: "Single Source of Truth for Workforce Governance",
    description:
      "Eliminate data silos by consolidating workforce and workplace systems into one platform. Achieve consistent governance and visibility across HR, contract labour, and facility management.",
  },
  {
    src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=3200&q=85",
    alt: "Biometric face recognition and secure identity verification interface",
    title: "Face Recognition That Works Across Mobile, CCTV & On-Ground Devices",
    description:
      "From entry gates to remote check-ins, enable consistent face-based tracking. Strengthen security, reduce leakages, and improve workforce visibility.",
  },
  {
    src: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=3200&q=85",
    alt: "Employee reviewing earnings and financial planning documents",
    title: "Building Financial Resilience for the Workforce",
    description:
      "A platform designed to give employees access to earned wages while helping businesses build a more stable workforce.",
  },
] as const;

/** Order matches `whyCards` in `app/page.tsx` */
export const whySectionCardImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
] as const;

export const moduleCarouselImages = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
] as const;

export const featuresSliderImages = {
  clms: "/WhatsApp Image 2026-04-20 at 3.24.40 PM.jpeg",
  visibility: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
} as const;

export const industriesImagery = [
  { name: "Manufacturing", imageUrl: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=600&q=80" },
  { name: "Logistics", imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" },
  { name: "Automobile", imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80" },
  { name: "Construction", imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
  { name: "Retail", imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" },
] as const;

/** Extra scenes for solution pages (spec panels) */
export const solutionPageImagery = {
  payroll: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
  canteen: "https://images.unsplash.com/photo-1555396273-367f5e9c2826?auto=format&fit=crop&w=1200&q=85",
  fixedAsset: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
} as const;

export const productPageImagery = {
  biometricHeroDevice:
    "/images/bio_new.png",
  biometricSpecScene:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q5",
  turnstileHero:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000&q=85",
  accessoryExit:
    "/images/Wireless-Exit-Button-.png",
  accessoryIndustrial:
    "/images/SL-600.png",
  fingerprintSensor:
    "/images/1.png",
  rfCards:
    "/images/2.png",
} as const;
