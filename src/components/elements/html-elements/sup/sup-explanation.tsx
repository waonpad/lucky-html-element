import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const SupExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>上付き文字要素</p>
        </li>
        <li>
          <p>序数やべき乗等に使う</p>
        </li>
        <li>
          <p>"SuperScript"の略</p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "べき乗",
            element: (
              <p>
                2<sup>8</sup>
              </p>
            ),
          },
          {
            title: "序数",
            element: (
              <p>
                1<sup>st</sup>
              </p>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
