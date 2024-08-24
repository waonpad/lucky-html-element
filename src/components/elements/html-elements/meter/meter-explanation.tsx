import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const MeterExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>メーター要素</p>
        </li>
        <li>
          <p>使えそうな場面になったら調べる</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
