import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const SampExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>コンピュータープログラムからのサンプル出力を表す</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="output" />
            と使い分ける
          </p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="kbd" />
            と組み合わせて、ユーザーの入力を含んだ例を示せる
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
