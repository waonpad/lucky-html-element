import type { ComponentPropsWithoutRef } from "react";

type Props = Omit<ComponentPropsWithoutRef<"a">, "rel" | "target">;

export const ExternalLink = ({ children, className = "", ...rest }: Props) => {
  return (
    <a
      {...rest}
      rel="noopener noreferrer"
      target="_blank"
      className={`text-blue-600 underline visited:text-purple-600 hover:text-blue-800 ${className}`}
    >
      {children}
    </a>
  );
};
