import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const HeaderExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>ページの全体以外に対しても使える</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="body" />
            直下にある場合は特殊な意味を持つ
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "記事のヘッダー",
            element: (
              <article>
                <header>
                  <h2>記事のタイトル</h2>
                </header>
                <section>
                  <p className="text-sm">記事の内容</p>
                </section>
              </article>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
