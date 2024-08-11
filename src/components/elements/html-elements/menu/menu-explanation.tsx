import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const MenuExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            現在、
            <ElementLinkCode elementName="ul" />
            との使い分けに意味はない
          </p>
        </li>
        <li>
          <p>操作を行うための対話型の項目を表示する</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
