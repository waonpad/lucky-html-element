import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const AExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>中身には、"こちら"のような文字列ではなく、行き先を明確に表す文字列を記述する</p>
        </li>
        <li>
          <p>
            onClickイベントは使用せず、そのような場合は
            <ElementLinkCode elementName="button" />
            を使用する
          </p>
        </li>
        <li>
          <p>
            中に
            <ElementLinkCode elementName="button" />
            等の対話型要素を入れない
          </p>
        </li>
        <li>
          <p>新しいタブやウィンドウを開く場合は、その事を示しておくと良い</p>
        </li>
        <li>
          <p>リンク先がHTML以外の場合は、どんなファイル形式かを示しておくと良い</p>
        </li>
        <li>
          <p>複数のリンクが近くにある場合は、分かりやすくするために間隔を空ける</p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://accessible-usable.net/2018/03/entry_180302.html">
              ブロックスキップを考える | Accessible & Usable
            </ExternalLink>
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
