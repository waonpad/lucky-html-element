import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const DtExplanation = () => {
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
            <ElementLinkCode elementName="dd" />
            とセットで使う
          </p>
        </li>
        <li>
          <p>用語を表す</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
