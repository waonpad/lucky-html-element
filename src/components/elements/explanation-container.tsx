import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ExplanationContainer = ({ children }: Props) => {
  return <div className="space-y-4">{children}</div>;
};
