import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const DetailsExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>折りたたみウィジェットを作成できる</p>
        </li>
        <li>
          <p>
            概要やラベルを
            <ElementLinkCode elementName="summary" />
            で提供する
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <details>
                <summary>いないいない...</summary>
                <p>ばぁ！</p>
              </details>
            ),
          },
          {
            title: "open属性によって開いた状態で表示",
            element: (
              <details open={true}>
                <summary>いないいない...</summary>
                <p>ばぁ！</p>
              </details>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
