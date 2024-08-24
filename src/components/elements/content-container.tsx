import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ContentContainer = ({ children }: Props) => {
  return (
    <div className="my-8 w-11/12 space-y-6 rounded-md border-gray-300 bg-slate-50 p-4 shadow-lg md:w-5/6 lg:w-3/4">
      {children}
    </div>
  );
};
