import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const UlExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            順序に意味のある
            <ElementLinkCode elementName="ol" />
            との使い分けをする
          </p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="li" />
            のみを子要素として持つ
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
