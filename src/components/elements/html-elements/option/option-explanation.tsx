import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const OptionExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <ElementLinkCode elementName="select" />,
            <ElementLinkCode elementName="datalist" />
            <ElementLinkCode elementName="optgroup" />
            の子要素としてのみ使用できる
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
