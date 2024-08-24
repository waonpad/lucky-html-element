import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementAttrLinkCode } from "../../element-attr-link-code";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const InsExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>文書に挿入された文字列の範囲を表す</p>
        </li>
        <li>
          <p>ソースコードの差分を描画する時等に使う</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="del" />
            は逆の目的で使われる
          </p>
        </li>
        <li>
          <p>
            <ElementAttrLinkCode attrName="cite" noLink={true} />
            属性や
            <ElementAttrLinkCode attrName="datetime" noLink={true} />
            属性を使って詳細な情報を記述できる
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
