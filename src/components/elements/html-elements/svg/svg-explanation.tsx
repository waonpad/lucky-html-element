import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const SvgExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>入れ子可能</p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://developer.mozilla.org/ja/docs/Web/SVG/Element">
              SVG 要素リファレンス
            </ExternalLink>
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <title>サンプルSVG</title>
                <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
              </svg>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
