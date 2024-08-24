import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const SelectExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <ElementLinkCode elementName="option" />,
            <ElementLinkCode elementName="optgroup" />
            のみを子要素として持てる
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
