import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const VarExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>数式やプログラムコード内の変数の名前を表す</p>
        </li>
        <li>
          <p>他の要素やCSSを使うのが適切かどうか考慮する</p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "数式",
            element: (
              <p>
                <var>x</var> + <var>y</var> = 2
              </p>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
