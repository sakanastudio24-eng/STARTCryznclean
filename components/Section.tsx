import React from "react";
import Container from "./Container";
import Heading from "./Heading";

export default function Section({ title, intro, children, className = "", titleLevel = 2 }: { title?: string; intro?: string; children?: React.ReactNode; className?: string; titleLevel?: 1 | 2 | 3 }) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`.trim()}>
      <Container>
        {title ? (
          <div className="mb-8">
            <Heading level={titleLevel}>
              {title}
            </Heading>
            {intro ? (
              <p className="mt-3 text-muted-foreground max-w-2xl">{intro}</p>
            ) : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
