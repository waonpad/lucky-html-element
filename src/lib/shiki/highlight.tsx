import { codeToHtml } from "shiki";
import type { BundledLanguage, BundledTheme } from "shiki";
import "./highlight.css";

type Props = {
  code: string;
  lang: BundledLanguage;
  theme: BundledTheme;
};

export const Highlight = async ({ code, lang, theme }: Props) => {
  const html = await codeToHtml(code, {
    lang,
    theme,
  });

  return (
    <>
      <div
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: html }}
        className="shiki"
      />
    </>
  );
};
