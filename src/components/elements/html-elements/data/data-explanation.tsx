import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementAttrLinkCode } from "../../element-attr-link-code";

export const DataExplanation = () => {
  return (
    <ExplanationContainer>
      <li>
        <p>
          <ElementAttrLinkCode attrName="data-*" noLink={true} />
          属性を使えばいいのでは・・・？
        </p>
      </li>
    </ExplanationContainer>
  );
};
