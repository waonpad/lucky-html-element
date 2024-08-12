import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const BExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>強調を示す</p>
        </li>
        <li>
          <p>"b"は"bold"の略</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
