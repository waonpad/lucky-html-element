import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ContentContainer = ({ children }: Props) => {
  return (
    <div className="grid w-3/4 grid-cols-1 gap-6 rounded-md border-gray-300 bg-slate-50 p-4 shadow-lg">{children}</div>
  );
};
