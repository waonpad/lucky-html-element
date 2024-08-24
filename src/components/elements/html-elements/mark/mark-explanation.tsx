import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const MarkExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            周囲の文脈での関連性によって参照したり表記したりする目的でマーク付けされたり強調表示されたりするテキストを表す
          </p>
        </li>
        <li>
          <p>検索操作で検索された語を示す場合などに使用される</p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <p>
                このサイトは、筆者の<mark>HTML</mark>の要素の勉強用に作られました
              </p>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
