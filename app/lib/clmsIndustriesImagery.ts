export interface IndustryImage {
  name: string;
  imageUrl: string;
  route: string;
}

export const clmsIndustriesImagery: IndustryImage[] = [
  { 
    name: "Electronics Assembly", 
    imageUrl: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80",
    route: "/industry/electronics" 
  },
  { 
    name: "Logistics & Warehousing", 
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    route: "/industry/logistics" 
  },
  { 
    name: "Pharmaceuticals", 
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    route: "/industry/pharma" 
  },
  { 
    name: "Automotive & Defense", 
    imageUrl: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
    route: "/industry/automotive" 
  },
  { 
    name: "Manufacturing", 
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    route: "/industry/manufacturing" // ✅ This matches your URL
  },
];