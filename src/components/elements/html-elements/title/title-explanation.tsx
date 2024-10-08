import { Code } from "../../code";
import { ExplanationContainer } from "../../explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const TitleExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <Code>children</Code>
            にはテキストのみを含む事ができる
          </p>
        </li>
        <li>
          <p>ブラウザのタブや検索結果に表示されるため重要</p>
        </li>
        <li>
          <p>短いよりは長くて説明的な方が良いが、55~60文字に収める(それ以上は検索結果に表示されない)</p>
        </li>
        <li>
          <p>サイト内で固有のものにする</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
