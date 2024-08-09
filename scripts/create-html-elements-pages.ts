import fs from "node:fs";
import path from "node:path";

type ElementInfo = {
  name: string;
  url: string;
  deprecated: boolean;
  experimental: boolean;
};

// ソースファイルのパス
const sourceJsonPath = path.resolve(__dirname, "../data/mdn-html-elements.json");

// ページを作るディレクトリのベースパス
const pagesDir = path.resolve(__dirname, "../src/app/(frontend)");

const main = async () => {
  // JSONファイルを読み込む
  const json = fs.readFileSync(sourceJsonPath, "utf-8");

  // JSONをパース
  const elements: ElementInfo[] = JSON.parse(json);

  // 最初の2個だけ
  elements.slice(0, 2);

  // ページを作成
  for (const element of elements) {
    const pagePath = path.resolve(pagesDir, `${element.name}.tsx`);
    const pageContent = `
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function Page() {
  return (
    <div>
      <h1>${element.name}</h1>
    </div>
  );
}
    `;

    fs.writeFileSync(pagePath, pageContent);
  }
};

main();
