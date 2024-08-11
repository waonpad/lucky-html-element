import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const DdExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <ElementLinkCode elementName="dl" />
            の子要素としてしか使えない
          </p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="dt" />
            とセットで使う
          </p>
        </li>
        <li>
          <p>説明を表す</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
