import { ElementLinkCode } from "../../element-link-code";
import { ExplanationContainer } from "../../explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const BaseExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>文書内におけるすべての相対 URL の基点となる URL を指定する</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="head" />
            の子要素として、1つだけ使用できる
          </p>
        </li>
        <li>
          <p>フレームワーク使ってたら使わなさそう</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
