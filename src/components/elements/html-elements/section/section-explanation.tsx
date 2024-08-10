import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const SectionExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>そのセクションを表現する、より意味的に具体的な要素がない場合に使用する</p>
        </li>
        <li>
          <p>汎用的な区分要素</p>
        </li>
        <li>
          <p>基本的に中には見出しを置く</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
