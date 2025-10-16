import React from "react";

export default function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}
