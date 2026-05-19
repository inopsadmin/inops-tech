import Image from "next/image";

const NAV_LOGO_WIDTH = 140;
const NAV_LOGO_HEIGHT = 36;

type NavbarBrandLogoProps = {
  className?: string;
};

/** Fixed-size InOps wordmark for the navbar — does not resize across breakpoints or scroll. */
export default function NavbarBrandLogo({ className = "" }: NavbarBrandLogoProps) {
  return (
    <span className={`navbar-brand-logo ${className}`.trim()} aria-hidden>
      <Image
        src="/logo.png"
        alt=""
        fill
        sizes={`${NAV_LOGO_WIDTH}px`}
        className="object-contain object-left"
        priority
        loading="eager"
        fetchPriority="high"
        unoptimized
      />
    </span>
  );
}
