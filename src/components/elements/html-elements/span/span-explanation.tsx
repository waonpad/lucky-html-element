import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const SpanExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            インライン要素版の
            <ElementLinkCode elementName="div" />
            と考えるとわかりやすい
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "色を変えるだけのために使う",
            element: (
              <p>
                <span className="text-red-500">赤色</span>
                の文字
              </p>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
