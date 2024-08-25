import type { GET } from "@/app/api/lucky-html-element/route";
import { Code } from "@/components/elements/code";
import { ContentContainer } from "@/components/elements/content-container";
import { ContentTitle } from "@/components/elements/content-title";
import { ElementInfo } from "@/components/elements/element-info";
import { PageContainer } from "@/components/layouts/page-container";
import { hostApi } from "@/config/url/host-api";
import type { NextResponseType, PromiseType } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

// ビルド時に自身のAPIを呼ぶ事ができないためSSRにする
export const dynamic = "force-dynamic";

const getLuckyHtmlElement = async () => {
  const response = await fetch(hostApi("lucky-html-element"), {
    // キャッシュする
    cache: "force-cache",
    next: {
      tags: ["lucky-html-element"],
    },
  });

  const data: NextResponseType<PromiseType<ReturnType<typeof GET>>> = await response.json();

  return data;
};

export default async function Page() {
  const { elementInfo, luckMessage, generatedAt } = await getLuckyHtmlElement();

  return (
    <PageContainer>
      <ContentContainer>
        <ContentTitle>
          今日のラッキーHTML要素は <Code>{`<${elementInfo.name}>`}</Code> です！
        </ContentTitle>
        <time dateTime={generatedAt} className="hidden">
          取得日時: {new Date(generatedAt).toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}
        </time>
        <p className="whitespace-pre-wrap">{luckMessage}</p>
        <ElementInfo elementInfo={elementInfo} displayElementLink={true} />
      </ContentContainer>
    </PageContainer>
  );
}
