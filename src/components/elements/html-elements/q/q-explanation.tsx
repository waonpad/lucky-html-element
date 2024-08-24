import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const QExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>短いインラインの引用を表す</p>
        </li>
        <li>
          <p>
            長文の引用には
            <ElementLinkCode elementName="blockquote" />
            を使用する
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
