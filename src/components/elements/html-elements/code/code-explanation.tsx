import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const CodeExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>コードの一部を示す</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
