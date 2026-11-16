type SectionFadeProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  effect?: "default" | "3d";
};

export default function SectionFade({ children, id, className = "" }: SectionFadeProps) {
  if (id) return <section id={id} className={className}>{children}</section>;
  return <div className={className}>{children}</div>;
}
