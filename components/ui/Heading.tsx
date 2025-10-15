import type { HTMLAttributes, ReactNode } from "react";

type Level = 1 | 2 | 3;

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: Level;
  children: ReactNode;
};

const classMap: Record<Level, string> = {
  1: "text-4xl sm:text-5xl font-semibold tracking-tight",
  2: "text-3xl sm:text-4xl font-semibold",
  3: "text-2xl font-semibold",
};

type HeadingTag = 'h1' | 'h2' | 'h3';

export default function Heading({ level = 1, children, className = "", ...rest }: HeadingProps) {
  const Tag = (`h${level}` as HeadingTag);
  return (
    <Tag className={[classMap[level], className].join(" ")} {...rest}>
      {children}
    </Tag>
  );
}
