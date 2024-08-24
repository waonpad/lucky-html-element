import { ExplanationContainer } from "@/components/elements/explanation-container";
import { Code } from "../../code";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const ParamExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            代わりに
            <ElementLinkCode elementName="object" />に<Code>data</Code>
            属性を使う
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
