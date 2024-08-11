import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const PreExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>ブロックレベル要素</p>
        </li>
        <li>
          <p>整形済みテキストを表す</p>
        </li>
        <li>
          <p>アクセシビリティの考慮が必要</p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "ソースコード",
            element: (
              <pre>
                <code>
                  {`
const hello = () => {
  console.log('Hello, World!');
}
                `.trim()}
                </code>
              </pre>
            ),
          },
          {
            title: "アクセシビリティの考慮をした例",
            element: (
              <figure>
                <pre>
                  {`
    ฅ^•ω•^ฅ
              ฅ^•ω•^ฅ    ฅ^•ω•^ฅ
  ฅ^•ω•^ฅ  ฅ^•ω•^ฅ
                `.trim()}
                </pre>
                <figcaption>
                  <p className="text-xs">猫の顔文字がたくさん表示されている</p>
                </figcaption>
              </figure>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
