import { ExplanationContainer } from "../../explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const HtmlExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>lang属性を適切に設定する</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
