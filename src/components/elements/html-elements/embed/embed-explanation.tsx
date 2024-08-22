import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const EmbedExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>埋め込み外部コンテンツ要素</p>
        </li>
        <li>
          <p>多分使わないな</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
