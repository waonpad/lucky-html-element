import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const TrExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>表の行</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="th" />と
            <ElementLinkCode elementName="td" />
            のみを子要素として持てて、混在させられる
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
