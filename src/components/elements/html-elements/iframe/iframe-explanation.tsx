import { ExplanationContainer } from "@/components/elements/explanation-container";
import { Code } from "../../code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const IframeExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>マップとかYouTubeの動画を埋め込む時に使うやつ</p>
        </li>
        <li>
          <p>要素の中と外では完全に文書構造が分離されているが、内外はお互いに参照できる</p>
        </li>
        <li>
          <p>
            アクセシビリティのため、
            <Code>title</Code>属性を指定すると良い
          </p>
        </li>
        <li>
          <p>ページが重くなるため、使用は控えめにする</p>
        </li>
        <li>
          <p>埋め込んだコンテンツはSEOに関係しない</p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <iframe
                src="https://www.yugioh-card.com/japan/"
                title="
              遊戯王オフィシャルサイト"
                width="400"
                height="300"
              />
            ),
          },
          {
            title: "sandbox 属性を追加した例 (この場合、MENUが開けなくなる)",
            element: (
              <iframe
                src="https://www.yugioh-card.com/japan/"
                title="
              遊戯王オフィシャルサイト"
                width="400"
                height="300"
                sandbox=""
              />
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
