import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  dark = false,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        dark ? "bg-midnight" : "bg-ghost",
        className
      )}
    >
      <div className="container-max">{children}</div>
    </section>
  );
}
