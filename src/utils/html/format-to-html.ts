import pretty from "pretty";
import type { JSX } from "react";

export const formatToHTML = async (element: JSX.Element) => {
  const { renderToStaticMarkup } = await import("react-dom/server");

  const str = renderToStaticMarkup(element);

  const formatted = pretty(str);

  return formatted;
};
