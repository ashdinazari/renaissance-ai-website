"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-royal/50 focus:ring-offset-2 focus:ring-offset-midnight";

  const variants = {
    primary:
      "bg-gradient-to-r from-royal to-electric text-white shadow-[0_4px_14px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.5)] hover:scale-[1.02]",
    secondary:
      "bg-white/5 border border-slate-300/20 text-white hover:bg-white/10 hover:border-royal/40",
    ghost:
      "text-ice-blue hover:text-white underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm rounded-lg",
    md: "px-8 py-4 text-base rounded-xl",
    lg: "px-10 py-5 text-lg rounded-xl",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
