import React from "react";
import Container from "./Container";
import Heading from "./Heading";

type SectionProps = {
  title?: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  titleLevel?: 1 | 2 | 3;
};

export default function Section({ title, intro, children, className = "", titleClassName = "", titleLevel = 2 }: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>
        {title && (
          <div className="mb-8 max-w-3xl">
            <Heading level={titleLevel} className={titleClassName}>{title}</Heading>
            {intro ? (
              <p className="mt-3 text-base leading-7 text-muted-foreground">{intro}</p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
