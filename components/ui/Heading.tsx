import React from "react";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3;
};

export default function Heading({ level = 1, className = "", ...props }: HeadingProps) {
  const Tag = (`h${level}`) as unknown as React.ElementType;
  const base = "font-semibold tracking-tight";
  const scale =
    level === 1
      ? "text-4xl sm:text-5xl"
      : level === 2
      ? "text-3xl sm:text-4xl"
      : "text-2xl";

  return <Tag className={`${base} ${scale} ${className}`} {...props} />;
}
