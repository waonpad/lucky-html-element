import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const DivExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>他に適切な意味的要素がない場合だけ使用する</p>
        </li>
        <li>
          <p>グループ化のために使う</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="p" />
            の中で文字列をグループ化したいなら
            <ElementLinkCode elementName="span" />
            を使う
          </p>
        </li>
        <li>
          <p>"division"(分割)の略</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
