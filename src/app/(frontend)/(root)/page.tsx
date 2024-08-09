import { Code } from "@/components/elements/code";
import { ContentContainer } from "@/components/elements/content-container";
import { ContentTitle } from "@/components/elements/content-title";
import { ElementInfo } from "@/components/elements/element-info";
import { PageContainer } from "@/components/layouts/page-container";
import { htmlElements } from "@/config/html-elements/html-elements";
import { findByElementName } from "@/config/html-elements/utils";
import { toPascalCase } from "@/utils";
import type { Metadata } from "next";
import type { JSX } from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

// 動的レンダリングを強制する
export const dynamic = "force-dynamic";

export default async function Page() {
  const elementNames = htmlElements.map((element) => element.name);
  const elementName = elementNames[Math.floor(Math.random() * elementNames.length)];

  const elementInfo = findByElementName(elementName);

  const ElementLuck: () => JSX.Element = await import(
    `@/components/elements/html-elements/${elementName}/${elementName}-luck`
  ).then((module) => module[`${toPascalCase(elementName)}Luck`]);

  return (
    <PageContainer>
      <ContentContainer>
        <ContentTitle>
          今日のラッキーHTML要素は <Code>{`<${elementName}>`}</Code> です！
        </ContentTitle>
        <ElementInfo elementInfo={elementInfo} />
        <ElementLuck />
      </ContentContainer>
    </PageContainer>
  );
}
