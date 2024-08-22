import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const SourceExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <ElementLinkCode elementName="picture" />,
            <ElementLinkCode elementName="audio" />,
            <ElementLinkCode elementName="video" />
            の子要素として、複数のメディアソースを指定するために使う
          </p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="picture" />
            で使う場合は画面サイズやデバイスによって画像を出し分けるのに使い、
            <ElementLinkCode elementName="audio" />
            や
            <ElementLinkCode elementName="video" />
            で使う場合はファイル形式のブラウザの互換性のために使う
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
