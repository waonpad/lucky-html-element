import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const OutputExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>計算結果やユーザー操作の結果を表す</p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <div>
                <input type="number" value={1} readOnly={true} />
                <span>{" + "}</span>
                <input type="number" value={2} readOnly={true} />
                <span>{" = "}</span>
                <output>3</output>
              </div>
            ),
          },
          {
            title: "単純な例2",
            element: (
              <div>
                <p>全て大文字にします</p>
                <input type="text" value="hello" readOnly={true} />
                <output>HELLO</output>
              </div>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
