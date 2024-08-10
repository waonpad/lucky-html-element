import { Code } from "@/components/elements/code";
import { ContentContainer } from "@/components/elements/content-container";
import { ContentTitle } from "@/components/elements/content-title";
import { ElementInfo } from "@/components/elements/element-info";
import { DivExplanation } from "@/components/elements/html-elements/div/div-explanation";
import { PageContainer } from "@/components/layouts/page-container";
import { findByElementName } from "@/config/html-elements/utils";
import type { Metadata } from "next";

const elementInfo = findByElementName("div");

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
        <DivExplanation />
      </ContentContainer>
    </PageContainer>
  );
}
