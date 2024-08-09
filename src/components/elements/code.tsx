import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Code = ({ children }: Props) => {
  return <code className="rounded-md bg-gray-200 p-1">{children}</code>;
};
