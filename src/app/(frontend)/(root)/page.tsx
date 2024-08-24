import { Code } from "@/components/elements/code";
import { ContentContainer } from "@/components/elements/content-container";
import { ContentTitle } from "@/components/elements/content-title";
import { ElementInfo } from "@/components/elements/element-info";
import { PageContainer } from "@/components/layouts/page-container";
import { htmlElements } from "@/config/html-elements/html-elements";
import { luckMessages } from "@/config/html-elements/luck-messages";
import { findByElementName } from "@/config/html-elements/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  const elementNames = htmlElements.map((element) => element.name);
  const elementName = elementNames[Math.floor(Math.random() * elementNames.length)];

  const elementInfo = findByElementName(elementName);

  const luckMessage = luckMessages[elementName];

  return (
    <PageContainer>
      <ContentContainer>
        <ContentTitle>
          今日のラッキーHTML要素は <Code>{`<${elementName}>`}</Code> です！
        </ContentTitle>
        <p className="whitespace-pre-wrap">{luckMessage}</p>
        <ElementInfo elementInfo={elementInfo} displayElementLink={true} />
      </ContentContainer>
    </PageContainer>
  );
}
