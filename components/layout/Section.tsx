import type { ReactNode, HTMLAttributes } from "react";
import Container from "./Container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export default function Section({ children, className = "", ...rest }: SectionProps) {
  return (
    <section className={["py-16 sm:py-20 lg:py-24", className].join(" ")} {...rest}>
      <Container>{children}</Container>
    </section>
  );
}
