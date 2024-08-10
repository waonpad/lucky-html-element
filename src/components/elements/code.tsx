import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Props = ComponentPropsWithoutRef<"code"> & {
  children: ReactNode;
};

export const Code = ({ children, className = "", ...rest }: Props) => {
  return (
    <code {...rest} className={`rounded-md bg-gray-200 p-1 ${className}`}>
      {children}
    </code>
  );
};
