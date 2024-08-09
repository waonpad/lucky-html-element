import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PageContainer = ({ children }: Props) => {
  return <div className="flex h-full items-center justify-center bg-slate-100">{children}</div>;
};
