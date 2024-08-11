import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const OlExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            順序に意味の無い
            <ElementLinkCode elementName="ul" />
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
