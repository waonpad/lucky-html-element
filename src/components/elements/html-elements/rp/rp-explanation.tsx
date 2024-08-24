import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const RpExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>使う事になったら調べる</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
