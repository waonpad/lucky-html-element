import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const PExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>テキストの段落を表す</p>
        </li>
        <li>
          <p>中にブロックレベル要素が見つかると自動的に閉じるが、これはフレームワークを使うと発生しない</p>
        </li>
        <li>
          <p>中にブロックレベル要素は入れてはいけない</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
