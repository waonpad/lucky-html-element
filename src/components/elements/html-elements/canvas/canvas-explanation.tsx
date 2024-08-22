import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const CanvasExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>ブロックの中で、代替コンテンツを提供するべき</p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://developer.mozilla.org/ja/docs/Web/API/Canvas_API">キャンバス API</ExternalLink>
          </p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://developer.mozilla.org/ja/docs/Web/API/WebGL_API">
              WebGL: ウェブの 2D および 3D グラフィック
            </ExternalLink>
          </p>
        </li>
        <li>
          <p>使うことになったらまた調べる</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
