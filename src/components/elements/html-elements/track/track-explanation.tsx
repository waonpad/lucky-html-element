import { ExplanationContainer } from "@/components/elements/explanation-container";
import { Code } from "../../code";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const TrackExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <ElementLinkCode elementName="audio" />
            か
            <ElementLinkCode elementName="video" />
            の子要素として使用する
          </p>
        </li>
        <li>
          <p>
            <Code>src</Code>
            属性に
            <Code>.vtt</Code>
            ファイルのパスを指定し、字幕等を指定する
          </p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://developer.mozilla.org/ja/docs/Web/API/WebVTT_API">
              ウェブビデオテキストトラック形式 (WebVTT)
            </ExternalLink>
            を使用する
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
