import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const StrongExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>重大性や緊急性の高いテキストを示す</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
