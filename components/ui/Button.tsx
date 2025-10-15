"use client";

import * as React from "react";

type Variant = "primary" | "secondary" | "ghost";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const base =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none px-4 py-2";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-text hover:bg-primary/90",
  secondary: "bg-accent text-neutral-900 hover:bg-accent/90",
  ghost: "bg-transparent text-text hover:bg-white/5",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", ...props }, ref) => {
    return (
      <button ref={ref} className={[base, variants[variant], className].join(" ")} {...props} />
    );
  }
);
Button.displayName = "Button";
