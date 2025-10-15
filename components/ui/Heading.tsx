import React from "react";

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

type Level = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: Level;
};

const styles: Record<Level, string> = {
  1: "text-4xl sm:text-5xl font-semibold tracking-tight",
  2: "text-3xl sm:text-4xl font-semibold",
  3: "text-2xl font-semibold",
  4: "text-xl font-semibold",
  5: "text-lg font-semibold",
  6: "text-base font-semibold",
};

export default function Heading({ level = 2, className, children, ...props }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={cn(styles[level], className)} {...props}>
      {children}
    </Tag>
  );
}
