import fs from "node:fs";
import path from "node:path";
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

  // ページを作成
  for (const element of elements) {
    const pagePath = path.resolve(pagesDir, `${element.name}/page.tsx`);

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

    // 運勢コンポーネントを作成
    const componentPath = path.resolve(componentsDir, element.name, `${element.name}-luck.tsx`);

    const componentContent = `
export const ${toPascalCase(element.name)}Luck = () => {
  return <div>Luck</div>; // ${"TO" + "DO"}: 内容を書く
};
`.trim();

    // ディレクトリがなければ作成
    fs.mkdirSync(path.dirname(componentPath), { recursive: true });

    // 既にファイルがあればスキップ
    // if (fs.existsSync(componentPath)) {
    //   console.log(`Skip: ${componentPath}`);
    // } else {
    // ファイルを作成
    fs.writeFileSync(componentPath, componentContent);
    console.log(`Create: ${componentPath}`);
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
