import { SITE_NAME } from "@/app/lib/site";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

const HOME: BreadcrumbItem = { name: SITE_NAME, path: "/" };

/** Human-readable labels for breadcrumb trails (visible + JSON-LD). */
const LABEL_BY_PATH: Record<string, string> = {
  "/about": "About",
  "/contact": "Contact",
  "/blog": "Blog",
  "/brochures": "Brochures",
  "/biometric-reader": "Biometric Access Control",
  "/turnstiles": "Turnstiles",
  "/accessories": "Accessories",
  "/contract-labour-management": "Contract Labour Management",
  "/hris": "HR Information System",
  "/early-wage-access": "Early Wage Access (EWA)",
  "/cctv-attendance": "Time & Attendance",
  "/canteen-and-visitor": "Canteen & Visitor Management",
  "/mobile-app-attendance": "Mobile Workforce App",
  "/enterprise-solution": "Enterprise Solution",
  "/visitor-management": "Visitor Management",
  "/fixed-asset-management": "Fixed Asset Management",
};

export function getBreadcrumbsForPath(pathname: string): BreadcrumbItem[] {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (normalized === "/") return [HOME];

  const blogMatch = /^\/blog\/([^/]+)$/.exec(normalized);
  if (blogMatch) {
    const slug = blogMatch[1];
    const title = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return [HOME, { name: "Blog", path: "/blog" }, { name: title, path: normalized }];
  }

  const label = LABEL_BY_PATH[normalized];
  if (!label) return [HOME];

  const solutionPaths = new Set([
    "/contract-labour-management",
    "/hris",
    "/early-wage-access",
    "/cctv-attendance",
    "/canteen-and-visitor",
    "/mobile-app-attendance",
    "/enterprise-solution",
    "/visitor-management",
    "/fixed-asset-management",
  ]);
  const productPaths = new Set(["/biometric-reader", "/turnstiles", "/accessories"]);

  if (solutionPaths.has(normalized)) {
    return [HOME, { name: "Solutions", path: "/#solutions" }, { name: label, path: normalized }];
  }
  if (productPaths.has(normalized)) {
    return [HOME, { name: "Products", path: "/biometric-reader" }, { name: label, path: normalized }];
  }

  return [HOME, { name: label, path: normalized }];
}
