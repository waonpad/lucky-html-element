import { ExplanationContainer } from "../../explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const BodyExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>文書内に1つだけしか置けない</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
