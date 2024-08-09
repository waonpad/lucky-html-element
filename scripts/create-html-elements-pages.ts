import fs from "node:fs";
import path from "node:path";
import type { ElementInfo } from "@/types";

// ソースファイルのパス
const sourceJsonPath = path.resolve(__dirname, "../data/mdn-html-elements.json");

// typescriptのオブジェクトを作るファイルパス
const tsOutputPath = path.resolve(__dirname, "../src/config/html-elements/html-elements.ts");

// ページを作るディレクトリのベースパス
const pagesDir = path.resolve(__dirname, "../src/app/(frontend)");

const main = async () => {
  // JSONファイルを読み込む
  const json = fs.readFileSync(sourceJsonPath, "utf-8");

  // JSONをパース
  const elements: ElementInfo[] = JSON.parse(json);

  // TODO: あとで修正 テスト用に最初の2個だけ
  const firstTwoElements = elements.slice(0, 2);

  // typescriptのオブジェクトを作成
  const tsContent = `
/**
 * 注意: 自動生成スクリプトによって作成されるファイルです。修正しないでください。
 */
import type { ElementInfo } from "@/types";

export const htmlElements = ${JSON.stringify(elements, null, 2)} as const satisfies ElementInfo[];
`.trim();

  // ファイルを作成
  fs.writeFileSync(tsOutputPath, tsContent);

  // ページを作成
  for (const element of firstTwoElements) {
    const pagePath = path.resolve(pagesDir, `${element.name}/page.tsx`);

    const pageContent = `
import { findByElementName } from "@/config/html-elements/utils";
import type { Metadata } from "next";

const element = findByElementName("${element.name}");

export const metadata: Metadata = {
  title: \`<\${element.name}>\`,
};

export default function Page() {
  return (
    <div>
      <h1>{element.name}</h1>
    </div>
  );
}
`.trim();

    // ディレクトリがなければ作成
    fs.mkdirSync(path.dirname(pagePath), { recursive: true });

    // 既にファイルがあればスキップ
    // if (fs.existsSync(pagePath)) {
    //   console.log(`Skip: ${pagePath}`);
    // } else {
    // ファイルを作成
    fs.writeFileSync(pagePath, pageContent);
    console.log(`Create: ${pagePath}`);
    // }
  }
};

main();
