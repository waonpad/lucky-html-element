import { ExplanationContainer } from "@/components/elements/explanation-container";
import { Code } from "../../code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const SearchExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>要素の内容の目的が検索や絞り込み機能であることを示す</p>
        </li>
        <li>
          <p>検索結果はこの中にいれない</p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/search">
              <Code>{`<input type="search">`}</Code>
            </ExternalLink>
            も参照
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <search>
                <input type="search" name="search" id="search" className="border-2" />
                <button type="submit">検索</button>
              </search>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
