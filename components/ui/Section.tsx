import React from "react";
import Container from "./Container";
import Heading from "./Heading";

type SectionProps = React.PropsWithChildren<{
  title?: string;
  intro?: string;
  className?: string;
  containerClassName?: string;
  titleLevel?: 1 | 2 | 3;
}>;

export default function Section({
  title,
  intro,
  className,
  containerClassName,
  titleLevel = 2,
  children,
}: SectionProps) {
  return (
    <section className={["py-16 sm:py-20 lg:py-24", className].filter(Boolean).join(" ")}> 
      <Container className={containerClassName}>
        {(title || intro) && (
          <div className="max-w-3xl">
            {title && <Heading level={titleLevel}>{title}</Heading>}
            {intro && <p className="mt-3 text-base leading-7 text-muted-foreground">{intro}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

import React from "react";
import Container from "./Container";
import Heading from "./Heading";

type SectionProps = {
  title?: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  titleClassName?: string;
};

export default function Section({ title, intro, children, className = "", titleClassName = "" }: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>
        {title && (
          <div className="mb-8">
            <Heading level={2} className={titleClassName}>{title}</Heading>
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
