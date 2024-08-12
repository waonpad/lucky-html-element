import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const DfnExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>"Definition"の略</p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://blog.w0s.jp/704">{"`<dfn>` 要素の存在が原稿の質を向上させる"}</ExternalLink>
          </p>
        </li>
        <li>
          <p>論文っぽい文章じゃないとあまり使わなさそう</p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: (
              <>
                <ElementLinkCode elementName="dt" />
                の中で使う
              </>
            ),
            element: (
              <dl>
                <dt>
                  <dfn>HTML</dfn>
                </dt>
                <dd className="whitespace-pre-wrap pl-8 text-xs">
                  {"HyperText Markup Languageの略。\nWebページの構造を定義するための言語。"}
                </dd>
              </dl>
            ),
          },
          {
            title: "文章の中で使う",
            element: (
              <p>
                <dfn>HTML</dfn>
                はHyperText Markup Languageの略で、Webページの構造を定義するための言語です。
              </p>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
