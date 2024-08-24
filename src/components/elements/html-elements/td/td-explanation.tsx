import { ExplanationContainer } from "@/components/elements/explanation-container";
import { Code } from "../../code";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const TdExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>表のセル</p>
        </li>
        <li>
          <p>
            <Code>colspan</Code>
            <Code>rowspan</Code>
            属性でセルを結合できる
          </p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="tr" />
            の子要素としてのみ使用できる
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
