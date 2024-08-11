import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const FontExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>代わりにCSSのフォント関連のプロパティを使う</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
