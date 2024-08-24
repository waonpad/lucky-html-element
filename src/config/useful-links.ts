export type UsefulLink = {
  name: string;
  url: string;
};

export const usefulLinks = [
  {
    name: "HTML 要素リファレンス - HTML: ハイパーテキストマークアップ言語 | MDN",
    url: "https://developer.mozilla.org/ja/docs/Web/HTML/Element",
  },
  {
    name: "TAKLOG – フロントエンドエンジニアの私的メモブログ",
    url: "https://www.tak-dcxi.com/",
  },
  {
    name: "ARIA の使用: ロール、ステート、プロパティ - アクセシビリティ | MDN",
    url: "https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles",
  },
  {
    name: "初心者向けHTMLリファレンス | catnose",
    url: "https://catnose.me/learning/html",
  },
] as const satisfies UsefulLink[];
