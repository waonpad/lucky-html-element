import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const PlaintextExplanation = () => {
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
