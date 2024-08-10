import { Code } from "@/components/elements/code";
import { ContentContainer } from "@/components/elements/content-container";
import { ContentTitle } from "@/components/elements/content-title";
import { ElementInfo } from "@/components/elements/element-info";
import { FrameExplanation } from "@/components/elements/html-elements/frame/frame-explanation";
import { PageContainer } from "@/components/layouts/page-container";
import { findByElementName } from "@/config/html-elements/utils";
import type { Metadata } from "next";

const elementInfo = findByElementName("frame");

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
        <FrameExplanation />
      </ContentContainer>
    </PageContainer>
  );
}
