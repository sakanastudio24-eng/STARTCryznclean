import type { ReactNode, HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Container({ children, className = "", ...rest }: ContainerProps) {
  return (
    <div className={["max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className].join(" ")} {...rest}>
      {children}
    </div>
  );
}
