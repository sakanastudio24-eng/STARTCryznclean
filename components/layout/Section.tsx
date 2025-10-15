import React from "react";
import Container from "../layout/Container";

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
  noContainer?: boolean;
};

export default function Section({ as: Tag = "section", className, children, noContainer = false, ...props }: SectionProps) {
  const content = noContainer ? (
    children
  ) : (
    <Container>
      {children}
    </Container>
  );

  return (
    <Tag className={cn("py-16 sm:py-20 lg:py-24", className)} {...props}>
      {content}
    </Tag>
  );
}
