import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const PortalExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <ElementLinkCode elementName="iframe" />
            に似ているが、埋め込めるコンテンツはもっと制限される
          </p>
        </li>
        <li>
          <p>執筆時点で対応しているブラウザは無し</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
