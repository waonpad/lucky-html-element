import { ContentContainer } from "@/components/elements/content-container";
import { ContentTitle } from "@/components/elements/content-title";
import { ElementLinkCode } from "@/components/elements/element-link-code";
import { PageContainer } from "@/components/layouts/page-container";
import { htmlElements } from "@/config/html-elements/html-elements";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML要素一覧",
};

export default function Page() {
  return (
    <PageContainer>
      <ContentContainer>
        <ContentTitle>HTML要素一覧</ContentTitle>
        <div className="space-y-1">
          <ul className="list-disc space-y-2 pl-4">
            {htmlElements.map((element) => (
              <li key={element.name}>
                <ElementLinkCode elementName={element.name} />
              </li>
            ))}
          </ul>
        </div>
      </ContentContainer>
    </PageContainer>
  );
}
