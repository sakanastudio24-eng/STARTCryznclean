import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand/90 focus-visible:ring-brand/50",
  secondary: "border border-subtle bg-white/5 text-white hover:bg-white/10 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600",
  ghost: "bg-transparent text-inherit hover:bg-zinc-100/50 dark:hover:bg-zinc-800/40 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600",
};

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${VARIANTS[variant]} ${className}`}
      {...props}
    />
  );
}
