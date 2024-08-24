import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const SmallExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>著作権表示や法的表記のような、注釈や小さく表示される文を表す</p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <p>
                あたしンちグラグラゲームは、1103兆3543億円
                <small>（税込）</small>
                です
              </p>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
