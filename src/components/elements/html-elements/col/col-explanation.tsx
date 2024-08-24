import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const ColExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>表の列要素？</p>
        </li>
        <li>
          <p>表内の列を定義して、すべての一般セルに共通の意味を定義するために使用する</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="colgroup" />
            要素の子要素としてのみ使用できる
          </p>
        </li>
        <li>
          <p>グループ分けの意味を持つわけではなく、スタイルのために使う</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
