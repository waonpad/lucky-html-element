import { Code } from "@/components/elements/code";
import { ContentContainer } from "@/components/elements/content-container";
import { ContentTitle } from "@/components/elements/content-title";
import { ElementInfo } from "@/components/elements/element-info";
import { PageContainer } from "@/components/layouts/page-container";
import { luckMessages } from "@/config/html-elements/luck-messages";
import { findByElementName } from "@/config/html-elements/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

// 動的レンダリングを強制する
export const dynamic = "force-dynamic";

export default async function Page() {
  // const elementNames = htmlElements.map((element) => element.name);
  // const elementName = elementNames[Math.floor(Math.random() * elementNames.length)];

  const elementName = "a";

  const elementInfo = findByElementName(elementName);

  const luckMessage = luckMessages[elementName];

  return (
    <PageContainer>
      <ContentContainer>
        <ContentTitle>
          今日のラッキーHTML要素は <Code>{`<${elementName}>`}</Code> です！
        </ContentTitle>
        <ElementInfo elementInfo={elementInfo} />
        <p>{luckMessage}</p>
      </ContentContainer>
    </PageContainer>
  );
}
