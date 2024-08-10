import { Code } from "../../code";
import { ElementAttrLinkCode } from "../../element-attr-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const LinkExplanation = () => {
  return (
    <div>
      <ExplanationMemoContainer>
        <li>
          <p>
            <ElementAttrLinkCode attrName="rel" />
            属性は"relationship"を意味する
          </p>
        </li>
        <li>
          <p>
            <ElementAttrLinkCode attrName="media" noLink={true} />
            属性により読み込み条件を指定できる
          </p>
        </li>
        <li>
          <p>
            <Code>{`<link blocking="render" ... />`}</Code>
            とする事で、リソースが読み込まれるまでレンダリングをブロックできる
          </p>
        </li>
      </ExplanationMemoContainer>
    </div>
  );
};
