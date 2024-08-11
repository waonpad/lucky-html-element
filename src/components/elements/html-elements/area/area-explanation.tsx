import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const AreaExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>イメージマップの中でクリック可能な領域を定義する</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="map" />
            要素内でのみ使用可能
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
