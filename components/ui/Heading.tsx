import React from "react";

export type HeadingLevel = 1 | 2 | 3;

type HeadingProps = {
  level?: HeadingLevel;
  className?: string;
  children: React.ReactNode;
};

export default function Heading({ level = 1, className = "", children }: HeadingProps) {
  const Tag: any = `h${level}`;
  const base = "font-semibold tracking-tight text-balance";
  const scale = level === 1
    ? "text-4xl sm:text-5xl"
    : level === 2
      ? "text-3xl sm:text-4xl"
      : "text-2xl";

  return <Tag className={`${base} ${scale} ${className}`}>{children}</Tag>;
}
