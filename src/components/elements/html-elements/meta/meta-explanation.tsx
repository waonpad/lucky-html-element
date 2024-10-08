import { Code } from "../../code";
import { ExplanationContainer } from "../../explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const MetaExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <Code>{`<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`}</Code>
            とすることで、3秒後に指定したURLに遷移する ← へぇ〜 (基本的には使わない)
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
