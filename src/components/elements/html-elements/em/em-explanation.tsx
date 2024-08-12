import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const EmExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>テキストの強調をする</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
