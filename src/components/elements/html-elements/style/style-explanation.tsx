import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const StyleExplanation = () => {
  return (
    <div>
      <ExplanationMemoContainer>
        <li>
          <p>
            基本的に
            <ElementLinkCode elementName="head" />
            内に置く (
            <ElementLinkCode elementName="link" />
            により外部CSSを読み込む方が一般的)
          </p>
        </li>
        <li>
          <p>複数の要素を配置し、詳細度が同じのものがあれば、後に書かれたものが優先される</p>
        </li>
      </ExplanationMemoContainer>
    </div>
  );
};
