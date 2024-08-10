import fs from "node:fs";
import path from "node:path";
import { luckMessages } from "@/config/html-elements/luck-messages";
import type { ElementInfo } from "@/types";
import { toPascalCase } from "@/utils";

// ソースファイルのパス
const sourceJsonPath = path.resolve(__dirname, "../data/mdn-html-elements.json");

// typescriptのオブジェクトを作るファイルパス
const tsOutputPath = path.resolve(__dirname, "../src/config/html-elements/html-elements.ts");

// ページを作るディレクトリのベースパス
const pagesDir = path.resolve(__dirname, "../src/app/(frontend)");

// コンポーネントを作るディレクトリのベースパス
const componentsDir = path.resolve(__dirname, "../src/components/elements/html-elements");

// ラッキーアイテムメッセージを作るファイルパス
const luckOutputPath = path.resolve(__dirname, "../src/config/html-elements/luck-messages.ts");

const main = async () => {
  // JSONファイルを読み込む
  const json = fs.readFileSync(sourceJsonPath, "utf-8");

  // JSONをパース
  const elements: ElementInfo[] = JSON.parse(json);

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

  // 対象のキーがから文字でない場合は、そのままスキップする
  const prevLuckContent = luckMessages;

  // 全てのキーに対して、そのキーの値がから文字でない場合は、そのままスキップする
  // キーがなければから文字を入れる
  const keys = elements.map((element) => element.name);

  for (const key of keys) {
    if (!(key in prevLuckContent)) {
      // @ts-ignore
      prevLuckContent[key] = "";
    }
  }

  // ebc順でオブジェクトのキーをソート
  const sortedKeys = Object.keys(prevLuckContent).sort();

  // ソートしたキーを元にオブジェクトを作成
  const sortedLuckContent: Record<string, string> = {};

  for (const key of sortedKeys) {
    // @ts-ignore
    sortedLuckContent[key] = prevLuckContent[key];
  }

  // ラッキーアイテムメッセージを作成
  const luckContent = `
import type { htmlElements } from "./html-elements";

export const luckMessages = ${JSON.stringify(sortedLuckContent, null, 2)} as const satisfies Record<(typeof htmlElements)[number]["name"], string>;

`.trim();

  // ディレクトリがなければ作成
  fs.mkdirSync(path.dirname(luckOutputPath), { recursive: true });

  // 既にファイルがあればスキップ
  // if (fs.existsSync(luckOutputPath)) {
  //   console.log(`Skip: ${luckOutputPath}`);
  // } else {
  // ファイルを作成
  fs.writeFileSync(luckOutputPath, luckContent);
  console.log(`Create: ${luckOutputPath}`);
  // }

  // ページを作成
  for (const element of elements) {
    const pagePath = path.resolve(pagesDir, `html-elements/${element.name}/page.tsx`);

    const pageContent = `
import { Code } from "@/components/elements/code";
import { ContentContainer } from "@/components/elements/content-container";
import { ContentTitle } from "@/components/elements/content-title";
import { ElementInfo } from "@/components/elements/element-info";
import { ${toPascalCase(element.name)}Explanation } from "@/components/elements/html-elements/${element.name}/${element.name}-explanation";
import { PageContainer } from "@/components/layouts/page-container";
import { findByElementName } from "@/config/html-elements/utils";
import type { Metadata } from "next";

const elementInfo = findByElementName("${element.name}");

export const metadata: Metadata = {
  title: \`<\${elementInfo.name}>\`,
};

export default function Page() {
  return (
    <PageContainer>
      <ContentContainer>
        <ContentTitle>
          <Code>{\`<\${elementInfo.name}>\`}</Code>
        </ContentTitle>
        <ElementInfo elementInfo={elementInfo} />
        <${toPascalCase(element.name)}Explanation />
      </ContentContainer>
    </PageContainer>
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

    // 解説コンポーネントを作成
    const componentExplanationPath = path.resolve(componentsDir, element.name, `${element.name}-explanation.tsx`);

    const componentExplanationContent = `
export const ${toPascalCase(element.name)}Explanation = () => {
  return <div>Explanation</div>; // ${"TO" + "DO"}: 内容を書く
};
`.trim();

    // ディレクトリがなければ作成
    fs.mkdirSync(path.dirname(componentExplanationPath), { recursive: true });

    // 既にファイルがあればスキップ
    // if (fs.existsSync(componentExplanationPath)) {
    //   console.log(`Skip: ${componentExplanationPath}`);
    // } else {
    // ファイルを作成
    fs.writeFileSync(componentExplanationPath, componentExplanationContent);
    console.log(`Create: ${componentExplanationPath}`);
    // }
  }
};

main();
