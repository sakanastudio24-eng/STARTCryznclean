import React from "react";

type ContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={[
      "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      className,
    ].filter(Boolean).join(" ")}>{children}</div>
  );
}

import React from "react";

type ContainerProps = React.PropsWithChildren<{ className?: string }>;

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}
