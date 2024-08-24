import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const LabelExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>支援技術を妨げるため、中に見出し要素は配置しない</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
