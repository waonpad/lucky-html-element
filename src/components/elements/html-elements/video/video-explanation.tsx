import { ExplanationContainer } from "@/components/elements/explanation-container";
import { Code } from "../../code";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const VideoExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <Code>controls</Code>
            属性を指定しないと、ビデオの再生や停止、音量調整などの操作ができない
          </p>
        </li>
        <li>
          <p>
            <Code>poster</Code>
            属性を指定すると、再生が開始されるまでの間に表示される画像を指定できる
          </p>
        </li>
        <li>
          <p>
            アクセシビリティのため、字幕と文字化情報を提供すると良い (こちらも参照:{" "}
            <ElementLinkCode elementName="track" />)
          </p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://developer.mozilla.org/ja/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video">
              HTML5 の動画へのキャプションと字幕の追加
            </ExternalLink>
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: <video src="/night.mp4" controls={true} muted={true} />,
          },
          {
            title: "字幕を追加した例",
            element: (
              <video src="/night.mp4" controls={true} muted={true}>
                <track src="/sample.vtt" kind="subtitles" srcLang="ja" label="日本語" default={true} />
              </video>
            ),
          },
          {
            title: "poster 属性を追加した例",
            element: <video src="/night.mp4" controls={true} muted={true} poster="/night-poster.png" />,
          },
        ]}
      />
    </ExplanationContainer>
  );
};
