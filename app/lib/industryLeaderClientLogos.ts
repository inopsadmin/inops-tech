/**
 * Client logos used in the “Trusted by industry leaders” marquee (`BrandsSlider`)
 * and the hero “Trusted by leading manufacturing…” strip on the home page.
 */
/** Marquee slots: PNG brand marks that need larger bounds (e.g. BENTELER, Ashok Leyland). */
export const enlargedMarqueeLogoSrcs = new Set<string>(["/client6.png", "/client7.png"]);

export const industryLeaderClientLogos = [
  "/client-5.png",
  "/client-8.png",
  "/client-9.svg",
  "/client2.png",
  "/client6.png",
  "/client7.png",
  "/client10.png",
  "/client17.png",
  "/client18.png",
  "/client19.jpg",
  "/client20.png",
  "/client22.png",
  "/client23.webp",
  "/client24.png",
  "/client25.svg",
  "/client26.png",
  "/client29.png",
  "/client30.svg",
] as const;

export function logoAltFromSrc(src: string) {
  const name = src.split("/").pop() ?? "Client logo";
  return name
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}
