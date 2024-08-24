import { ExplanationContainer } from "@/components/elements/explanation-container";
import { Code } from "../../code";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const ThExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>表の見出し</p>
        </li>
        <li>
          <p>
            <Code>colspan</Code>,<Code>rowspan</Code>
            属性でセルを結合できる
          </p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="tr" />
            の子要素としてのみ使用できる
          </p>
        </li>
        <li>
          <p>
            <Code>scope</Code>,<Code>headers</Code>
            属性を使って詳細な情報を記述できる
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
