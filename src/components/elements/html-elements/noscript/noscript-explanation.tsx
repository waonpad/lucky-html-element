import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const NoscriptExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>スクリプトが無効になっている時に中身が表示される</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
