import Image from "next/image";

/** Keeps intrinsic aspect ratio when only one dimension is set via CSS (non-fill mode). */
export const clientLogoImageStyle = { width: "auto", height: "auto" } as const;

type ClientLogoImageProps = {
  src: string;
  alt: string;
  large?: boolean;
  fill?: boolean;
  className?: string;
  sizes?: string;
};

export default function ClientLogoImage({
  src,
  alt,
  large = false,
  fill = false,
  className,
  sizes,
}: ClientLogoImageProps) {
  const width = large ? 280 : 216;
  const height = large ? 112 : 96;
  const unoptimized = src.endsWith(".svg") || src.endsWith(".avif");

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes ?? (large ? "256px" : "200px")}
        unoptimized={unoptimized}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={clientLogoImageStyle}
      className={className}
      sizes={sizes ?? `${width}px`}
      unoptimized={unoptimized}
    />
  );
}
