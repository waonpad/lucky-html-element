import { ExplanationContainer } from "@/components/elements/explanation-container";
import { Code } from "../../code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const BigExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            代わりに
            <Code>font-size</Code>
            プロパティを使う
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
