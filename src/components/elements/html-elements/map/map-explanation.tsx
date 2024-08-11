import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const MapExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>イメージマップの中でクリック可能な領域を定義する</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="area" />
            要素内と合わせて使用する
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
