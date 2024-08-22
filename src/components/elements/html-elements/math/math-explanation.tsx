import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const MathExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            最上位の
            <ExternalLink href="https://developer.mozilla.org/ja/docs/Web/MathML">MathML要素</ExternalLink>
          </p>
        </li>
        <li>
          <p>数式を記述するために使う</p>
        </li>
        <li>
          <p>使うことになったら調べる</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
