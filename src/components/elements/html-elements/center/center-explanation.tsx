import { ExplanationContainer } from "@/components/elements/explanation-container";
import { Code } from "../../code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const CenterExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            代わりにCSSの
            <Code>text-align</Code>か<Code>margin</Code>
            プロパティを使う
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
