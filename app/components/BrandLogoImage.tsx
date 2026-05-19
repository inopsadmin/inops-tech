import Image from "next/image";
import { clientLogoImageStyle } from "@/app/components/ClientLogoImage";

type BrandLogoImageProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fetchPriority?: "high" | "low" | "auto";
};

/** InOps wordmark — use where CSS sets only height or width via Tailwind. */
export default function BrandLogoImage({
  className,
  width = 140,
  height = 40,
  priority = false,
  fetchPriority,
}: BrandLogoImageProps) {
  return (
    <Image
      src="/logo.png"
      alt="InOps Solutions"
      width={width}
      height={height}
      sizes={priority ? `${width}px` : undefined}
      style={clientLogoImageStyle}
      className={className}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={fetchPriority ?? (priority ? "high" : undefined)}
    />
  );
}
