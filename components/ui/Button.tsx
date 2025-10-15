import React from "react";
import Link from "next/link";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "ghost";

const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
const sizes = {
  md: "h-10 px-4 py-2",
  lg: "h-11 px-5",
};
const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand/90",
  secondary: "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white",
  ghost: "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-current",
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
};

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return <button className={clsx(base, sizes[size], variants[variant], className)} {...props} />;
}

export function ButtonLink({ href, className, variant = "primary", size = "md", children, ...props }: React.ComponentProps<typeof Link> & { variant?: ButtonVariant; size?: keyof typeof sizes; children?: React.ReactNode }) {
  return (
    <Link href={href} className={clsx(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
