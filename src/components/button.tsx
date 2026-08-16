import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "solid" | "outline" | "outline-light";

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

const variants: Record<Variant, string> = {
  solid: "bg-brass text-forest-deep hover:bg-brass-light",
  outline: "border border-brass/60 text-cream hover:bg-brass hover:text-forest-deep",
  "outline-light": "border border-ink/30 text-ink hover:border-brass hover:bg-brass/10",
};

type Props = {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<typeof Link>;

export default function ButtonLink({ href, variant = "solid", children, className = "", ...rest }: Props) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
