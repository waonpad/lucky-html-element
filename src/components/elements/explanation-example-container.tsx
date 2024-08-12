import type { JSX, ReactNode } from "react";
import { RenderReactHTML } from "./render-react-html";

type Props = {
  examples: {
    title: ReactNode;
    element: JSX.Element;
  }[];
};

export const ExplanationExampleContainer = ({ examples }: Props) => {
  return (
    <div className="space-y-1">
      <span>使用例</span>
      <ul className="list-disc space-y-2 pl-4">
        {examples.map((example, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <li key={index} className="space-y-2">
            <p>{example.title}</p>
            <div className="flex flex-col items-center justify-center rounded-md border-2 border-slate-300 p-2">
              {example.element}
            </div>
            <RenderReactHTML element={example.element} />
          </li>
        ))}
      </ul>
    </div>
  );
};
