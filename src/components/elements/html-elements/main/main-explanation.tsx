import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementAttrLinkCode } from "../../element-attr-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const MainExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <ElementAttrLinkCode attrName="hidden" noLink={true} />
            属性が指定されていない場合、ページ内で1つだけしか置けない
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
