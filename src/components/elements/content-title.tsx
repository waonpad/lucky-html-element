import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ContentTitle = ({ children }: Props) => {
  return <h1 className="text-center font-bold text-2xl">{children}</h1>;
};
