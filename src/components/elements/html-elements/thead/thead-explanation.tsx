import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const TheadExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>表のヘッダー</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="table" />
            の子要素としてのみ使用できる
          </p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="tr" />
            のみ子要素として持てる
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
