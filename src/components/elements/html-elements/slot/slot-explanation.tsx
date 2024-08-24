import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const SlotExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>webコンポーネント関連</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
