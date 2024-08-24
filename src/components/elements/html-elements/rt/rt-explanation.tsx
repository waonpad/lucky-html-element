import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const RtExplanation = () => {
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
