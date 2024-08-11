import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const StrikeExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>リファレンスを参照</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
