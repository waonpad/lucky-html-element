import { Code } from "@/components/elements/code";
import { ContentContainer } from "@/components/elements/content-container";
import { ContentTitle } from "@/components/elements/content-title";
import { ElementInfo } from "@/components/elements/element-info";
import { HtmlExplanation } from "@/components/elements/html-elements/html/html-explanation";
import { PageContainer } from "@/components/layouts/page-container";
import { findByElementName } from "@/config/html-elements/utils";
import type { Metadata } from "next";

const elementInfo = findByElementName("html");

export const metadata: Metadata = {
  title: `<${elementInfo.name}>`,
};

export default function Page() {
  return (
    <PageContainer>
      <ContentContainer>
        <ContentTitle>
          <Code>{`<${elementInfo.name}>`}</Code>
        </ContentTitle>
        <ElementInfo elementInfo={elementInfo} />
        <HtmlExplanation />
      </ContentContainer>
    </PageContainer>
  );
}
