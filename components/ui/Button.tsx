"use client";
import React from "react";

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  asChild?: boolean;
};

const base =
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-text hover:bg-primary/90 px-4 py-2 shadow-sm",
  secondary:
    "bg-muted text-black hover:bg-muted/90 px-4 py-2",
  ghost:
    "bg-transparent text-current hover:bg-black/5 dark:hover:bg-white/10 px-3 py-2",
};

export default function Button({ variant = "primary", className, children, asChild, ...props }: ButtonProps) {
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      className: cn(base, variants[variant], child.props.className, className),
      ...props,
    });
  }
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
