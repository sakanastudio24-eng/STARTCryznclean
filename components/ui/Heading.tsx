import React from "react";

type Level = 1 | 2 | 3;

const levelToClass: Record<Level, string> = {
  1: "text-4xl sm:text-5xl font-semibold tracking-tight",
  2: "text-3xl sm:text-4xl font-semibold",
  3: "text-2xl font-semibold",
};

export function Heading({ as = 1, children, className = "" }: { as?: Level; children: React.ReactNode; className?: string }) {
  const tagForLevel: Record<Level, 'h1' | 'h2' | 'h3'> = { 1: 'h1', 2: 'h2', 3: 'h3' };
  const Tag: React.ElementType = tagForLevel[as];
  return <Tag className={`${levelToClass[as]} ${className}`}>{children}</Tag>;
}
