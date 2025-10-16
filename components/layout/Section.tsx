import React from "react";
import Container from "../layout/Container";

export default function Section({ children, className = "", containerClassName = "" }: { children: React.ReactNode; className?: string; containerClassName?: string }) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
