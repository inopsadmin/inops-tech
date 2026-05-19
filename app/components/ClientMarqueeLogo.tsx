import ClientLogoImage from "@/app/components/ClientLogoImage";
import { getClientMarqueeLogoSizing, logoAltFromSrc } from "@/app/lib/industryLeaderClientLogos";

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export default function ClientMarqueeLogo({ src, alt, className = "" }: Props) {
  const { slot, frame, large, imageClass } = getClientMarqueeLogoSizing(src);

  return (
    <div role="listitem" className={`${slot} ${className}`.trim()}>
      <div className={`${frame} shrink-0`}>
        <ClientLogoImage
          src={src}
          alt={alt ?? logoAltFromSrc(src)}
          fill
          large={large}
          className={imageClass}
        />
      </div>
    </div>
  );
}
