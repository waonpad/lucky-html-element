import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const BrExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>連続して使用しない</p>
        </li>
        <li>
          <p>改行文字でよさそう</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
