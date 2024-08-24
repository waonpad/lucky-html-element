import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementAttrLinkCode } from "../../element-attr-link-code";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const DelExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>文書から削除された文字列の範囲を表す</p>
        </li>
        <li>
          <p>ソースコードの差分を描画する時等に使う</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="ins" />
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
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <p>
                <del className="text-red-500">関ジャニ∞</del> <ins className="text-green-500">SUPER EIGHT</ins>
                は、日本の男性アイドルグループ
              </p>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
