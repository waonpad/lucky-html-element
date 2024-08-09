import { htmlElements } from "./html-elements";

// 注意: 自動生成スクリプトによって参照される
export const findByElementName = <T extends (typeof htmlElements)[number]["name"]>(name: T) => {
  const element = htmlElements.find((element) => element.name === name);

  if (!element) {
    throw new Error(`Element not found: ${name}`);
  }

  return element as Extract<(typeof htmlElements)[number], { name: T }>;
};
