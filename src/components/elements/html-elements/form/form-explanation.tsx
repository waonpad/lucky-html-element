import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementAttrLinkCode } from "../../element-attr-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const FormExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <ElementAttrLinkCode attrName="autocomplete" noLink={true} />
            属性で入力保管の有無を指定できる
          </p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://developer.mozilla.org/ja/docs/Learn/Forms/How_to_structure_a_web_form">
              フォームの構築方法 - ウェブ開発を学ぶ | MDN
            </ExternalLink>
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
