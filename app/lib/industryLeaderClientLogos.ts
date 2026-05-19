/**
 * Client logos for the home hero marquee and `BrandsSlider`.
 */

export const industryLeaderClientLogos = [
  "/client2.png",
  "/clients/skf.png",
  "/client7.png",
  "/bfw.avif",
  "/wheels.png",
  "/client18.png",
  "/client19.jpg",
  "/automotive-axle.png",
  "/client29.png",
] as const;

/** Logos that render in a larger frame (fill parent box — see ClientMarqueeLogo). */
export const enlargedMarqueeLogoSrcs = new Set<string>([
  "/client7.png",
  "/bfw.avif",
  "/automotive-axle.png",
]);

/** Same height/width for every slot so logos share one horizontal alignment axis. */
export const CLIENT_LOGO_MARQUEE_SLOT =
  "relative flex h-[8rem] w-[13.5rem] flex-shrink-0 items-center justify-center sm:h-[5.5rem] sm:w-[14.5rem]";

/** Applied to marquee flex rows (home + brands slider). */
export const CLIENT_LOGO_MARQUEE_TRACK = "flex items-center gap-x-6 sm:gap-x-15";

/** Fixed box — image uses `fill` + object-contain so it always fills this area. */
export const CLIENT_LOGO_MARQUEE_FRAME =
  "relative h-[4.75rem] w-[10.5rem] sm:h-[5.75rem] sm:w-[12rem]";

export const CLIENT_LOGO_MARQUEE_FRAME_LARGE =
  "relative h-[6.75rem] w-[13.5rem] sm:h-[8rem] sm:w-[15.5rem]";

/** Wider slot for extra-large logos (Automotive Axle). */
export const CLIENT_LOGO_MARQUEE_SLOT_XL =
  "relative flex h-[8rem] w-[16rem] flex-shrink-0 items-center justify-center sm:h-[8.5rem] sm:w-[19rem]";

/** Extra-large frame (e.g. wide logos with letterboxing in the PNG). */
export const CLIENT_LOGO_MARQUEE_FRAME_XL =
  "relative h-[8rem] w-[15.5rem] sm:h-[8.5rem] sm:w-[18.5rem]";

/** Logos that need the XL frame + zoom to offset empty PNG padding */
export const extraLargeMarqueeLogoSrcs = new Set<string>(["/automotive-axle.png"]);

/** Logos exported on white — keeps marquee strip seamless */
export const whiteBackgroundMarqueeLogoSrcs = new Set<string>(["/clients/skf.png", "/skf.png"]);

export const CLIENT_LOGO_MARQUEE_IMAGE_CLASS = "object-contain object-center";

export const CLIENT_LOGO_MARQUEE_IMAGE_CLASS_ZOOM =
  "object-contain object-center scale-[1.55] sm:scale-[1.75]";

export function getClientMarqueeLogoSizing(src: string) {
  const extraLarge = extraLargeMarqueeLogoSrcs.has(src);
  const large = extraLarge || enlargedMarqueeLogoSrcs.has(src);
  const frameClass = extraLarge
    ? CLIENT_LOGO_MARQUEE_FRAME_XL
    : CLIENT_LOGO_MARQUEE_FRAME_LARGE;
  const whiteBg = whiteBackgroundMarqueeLogoSrcs.has(src);

  return {
    slot: extraLarge ? CLIENT_LOGO_MARQUEE_SLOT_XL : CLIENT_LOGO_MARQUEE_SLOT,
    frame: `${frameClass} flex items-center justify-center overflow-hidden${
      whiteBg ? " bg-white" : ""
    }${large ? "" : " px-3 py-2 sm:px-4 sm:py-3"}`,
    large,
    imageClass: extraLarge ? CLIENT_LOGO_MARQUEE_IMAGE_CLASS_ZOOM : CLIENT_LOGO_MARQUEE_IMAGE_CLASS,
  };
}

const logoAltBySrc: Record<string, string> = {
  "/client2.png": "Ashok Leyland",
  "/client6.png": "Ashok Leyland",
  "/auto.png": "Automotive Axle",
  "/clients/skf.png": "SKF",
  "/skf.png": "SKF",
  "/skf2.jpg": "SKF",
  "/bfw.avif": "BFW",
  "/wheels.png": "Wheels India",
  "/client18.png": "BHEL",
  "/client19.jpg": "HAL",
  "/automotive-axle.png": "Automotive Axle",
  "/client29.png": "Foxconn",
  "/clients/ashok-leyland.svg": "Ashok Leyland",
  "/clients/automotive-axle.svg": "Automotive Axle",
  "/clients/bhel.svg": "BHEL",
  "/clients/hal.svg": "HAL",
  "/clients/bfw.svg": "BFW",
  "/clients/foxconn.svg": "Foxconn",
  "/clients/skf.svg": "SKF",
  "/clients/wheels-india.svg": "Wheels India",
  "/clients/midhani.svg": "Midhani",
  "/clients/seg.svg": "SEG",
};

export function logoAltFromSrc(src: string) {
  if (logoAltBySrc[src]) return `${logoAltBySrc[src]} logo`;
  const name = src.split("/").pop() ?? "Client";
  return `${name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ")} logo`;
}
