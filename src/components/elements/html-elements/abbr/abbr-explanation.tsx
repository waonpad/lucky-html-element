import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const AbbrExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>略語を表す</p>
        </li>
        <li>
          <p>マイナーすぎるし知っとくだけでいいか</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
