import { Highlight } from "@/lib/shiki/highlight";
import { formatToHTML } from "@/utils/html/format-to-html";
import type { JSX } from "react";

type Props = {
  element: JSX.Element;
};

export const RenderReactHTML = async ({ element }: Props) => {
  const source = await formatToHTML(element);

  return (
    <>
      <Highlight code={source} lang="html" theme="dark-plus" />
    </>
  );
};
