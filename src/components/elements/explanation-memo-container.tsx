import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ExplanationMemoContainer = ({ children }: Props) => {
  return (
    <div className="space-y-1">
      <span>メモ</span>
      <ul className="list-disc space-y-2 pl-4">{children}</ul>
    </div>
  );
};
