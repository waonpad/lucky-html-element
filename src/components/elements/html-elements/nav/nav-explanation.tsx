import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const NavExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>中身がリストである必要は無い</p>
        </li>
        <li>
          <p>リンクのリストがあってもこれを使わなくてもいい</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
