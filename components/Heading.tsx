import React from "react";

type HeadingLevel = 1 | 2 | 3;

export default function Heading({ level = 1, className = "", children }: { level?: HeadingLevel; className?: string; children: React.ReactNode }) {
  const Tag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{children}</Tag>;
}
