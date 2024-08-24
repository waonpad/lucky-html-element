import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const InputExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>種類が多すぎて書くのが面倒なので、リファレンスを参照</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="label" />
            を連携させる事で、支援技術に役立つ
          </p>
        </li>
        <li>
          <p>
            プレースホルダーは入力された値がどのように見えるかのヒントを示すものであり、
            説明やプロンプトではない。ラベルの代用にはならない
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
