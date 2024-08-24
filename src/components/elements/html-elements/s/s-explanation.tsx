import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const SExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>すでに適切または正確ではなくなった事柄を表現するために使用する</p>
        </li>
        <li>
          <p>
            文章の修正を示す場合は、
            <ElementLinkCode elementName="del" />
            を使用する
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <p>
                <s>STAP細胞はあります</s>
                ありませんでした
              </p>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
