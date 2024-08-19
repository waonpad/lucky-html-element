import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const SubExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>下付き文字要素</p>
        </li>
        <li>
          <p>数式、化学式等に使う</p>
        </li>
        <li>
          <p>"SubScript"の略</p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "化学式",
            element: (
              <p>
                H<sub>2</sub>O
              </p>
            ),
          },
          {
            title: "脚注",
            element: (
              <p>
                HTML
                <sub>[1]</sub>
              </p>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
