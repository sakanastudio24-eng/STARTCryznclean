import React from "react";

type HeadingLevel = 1 | 2 | 3;

type HeadingProps = React.PropsWithChildren<{
  level?: HeadingLevel;
  className?: string;
}>;

const levelToTag: Record<HeadingLevel, keyof JSX.IntrinsicElements> = {
  1: "h1",
  2: "h2",
  3: "h3",
};

const levelToClasses: Record<HeadingLevel, string> = {
  1: "text-4xl sm:text-5xl font-semibold tracking-tight",
  2: "text-3xl sm:text-4xl font-semibold",
  3: "text-2xl font-semibold",
};

export default function Heading({ level = 2, className, children }: HeadingProps) {
  const Tag = levelToTag[level] as any;
  const classes = [levelToClasses[level], className].filter(Boolean).join(" ");
  return <Tag className={classes}>{children}</Tag>;
}

import React from "react";

export type HeadingLevel = 1 | 2 | 3;

type HeadingProps = {
  level?: HeadingLevel;
  className?: string;
  children: React.ReactNode;
};

export default function Heading({ level = 1, className = "", children }: HeadingProps) {
  const Tag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements;
  const base = "font-semibold tracking-tight text-balance";
  const scale = level === 1
    ? "text-4xl sm:text-5xl"
    : level === 2
      ? "text-3xl sm:text-4xl"
      : "text-2xl";

  return <Tag className={`${base} ${scale} ${className}`}>{children}</Tag>;
}
