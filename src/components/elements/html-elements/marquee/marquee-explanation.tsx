import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const MarqueeExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>非推奨なため使わない</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
