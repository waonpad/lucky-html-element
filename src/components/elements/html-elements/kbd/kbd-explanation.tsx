import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const KbdExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>キーボード入力等を示す</p>
        </li>
        <li>
          <p>入れ子にして一連の操作を示せる</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="samp" />
            と組み合わせて、画面上に表示された操作を示せる
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
