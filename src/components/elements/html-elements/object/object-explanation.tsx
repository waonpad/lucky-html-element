import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const ObjectExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>外部オブジェクト要素？？？</p>
        </li>
        <li>
          <p>画像、内部の閲覧コンテキスト、プラグインによって扱われるリソースなどのように扱われる外部リソースを表す</p>
        </li>
        <li>
          <p>
            ただ使うだけでは
            <ElementLinkCode elementName="img" />や
            <ElementLinkCode elementName="iframe" />
            等と違いが出ないが、これはいろんな形式の代替コンテンツを提供することができるのが特色
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "代替コンテンツを提供する例",
            element: (
              <object type="video/mp4" data="/notfound.mp4">
                <img src="/night-poster.png" alt="夜の画像" />
              </object>
            ),
          },
          {
            title: "代替コンテンツを提供する例",
            element: (
              <object type="video/mp4" data="/notfound.mp4">
                <p>おっと、動画がどこかにいっちゃいました</p>
              </object>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
