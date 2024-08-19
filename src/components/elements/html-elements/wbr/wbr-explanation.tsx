import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const WbrExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>改行可能要素？？？</p>
        </li>
        <li>
          <p>ブラウザーが任意で改行してよい位置、改行位置の候補を表す</p>
        </li>
        <li>
          <p>"Word Break Opportunity"の略(？)</p>
        </li>
        <li>
          <p>上手く使うの難しそうだな・・・</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
