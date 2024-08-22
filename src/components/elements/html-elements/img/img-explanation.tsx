import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementAttrLinkCode } from "../../element-attr-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const ImgExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <ElementAttrLinkCode attrName="alt" noLink={true} />
            属性はスクリーンリーダーで読み上げられたり、画像が読み込めない場合に代替テキストとして表示されるため忘れずに設定する
          </p>
        </li>
        <li>
          <p>
            <ElementAttrLinkCode attrName="width" noLink={true} />
            と
            <ElementAttrLinkCode attrName="height" noLink={true} />
            属性を設定することでレイアウトの崩れを防げる
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: <img src="/next.svg" alt="Next.jsのロゴ" />,
          },
          {
            title: "幅と高さを指定",
            element: <img src="/next.svg" alt="Next.jsのロゴ" width="100" height="100" />,
          },
          {
            title: "代替テキスト",
            element: <img src="xxx" alt="Next.jsのロゴ" />,
          },
          {
            title: "外部サイトの画像",
            element: <img src="https://via.placeholder.com/300/92c952" alt="placeholder" />,
          },
        ]}
      />
    </ExplanationContainer>
  );
};
