import { ExplanationContainer } from "@/components/elements/explanation-container";
import { Code } from "../../code";
import { ElementAttrLinkCode } from "../../element-attr-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const H1Explanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <Code>h6</Code>まである
          </p>
        </li>
        <li>
          <p>
            <Code>h1</Code>の次は<Code>h2</Code>が来る。 順番を飛ばしたらダメ
          </p>
        </li>
        <li>
          <p>
            <Code>h1</Code>はページ内で1つだけにするべき
          </p>
        </li>
        <li>
          <p>アクセシビリティのために重要</p>
        </li>
        <li>
          <p>
            <ElementAttrLinkCode attrName="aria-labelledby" />
            とかいうのがあるらしい
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
