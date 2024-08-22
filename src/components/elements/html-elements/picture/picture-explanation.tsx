import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const PictureExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>画面や端末に合わせて適切な画像を表示するための要素</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="img" />
            は全ての
            <ElementLinkCode elementName="source" />
            要素の後に配置し、条件に合うものが無かった場合に表示される
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "画面サイズによって画像を変える単純な例",
            element: (
              <picture>
                <source media="(min-width: 760px)" srcSet="/night-poster.png" />
                <source media="(min-width: 0px)" srcSet="/night-poster-rotation.png" />
                <img src="/night-poster.png" alt="夜の画像" />
              </picture>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
