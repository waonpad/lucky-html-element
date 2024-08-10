import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const ArticleExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>自己完結しており、（集合したものの中で）個別に配信や再利用を行うことを意図した構成物</p>
        </li>
        <li>
          <p>独立したコンテンツの項目</p>
        </li>
        <li>
          <p>子要素に見出し等を置いて識別可能にするべき</p>
        </li>
        <li>
          <p>
            おそらく子要素に1つ以上の
            <ElementLinkCode elementName="section" />
            要素を子に持つ
          </p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="section" />
            との違いは、 それが自己完結しているかどうかで考えればよさそう？
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <article>
                <h2 className="text-lg">記事のタイトル</h2>
                <p className="text-sm">記事の内容</p>
              </article>
            ),
          },
          {
            title: "情報を付与した例",
            element: (
              <article>
                <h2 className="text-lg">記事のタイトル</h2>
                <p className="text-sm">記事の内容</p>
                <footer>
                  <p className="text-xs">
                    投稿日時: <time>2021-01-01 12:00</time>
                  </p>
                </footer>
              </article>
            ),
          },
          {
            title: "実践的な例",
            element: (
              <article>
                <section>
                  <h2 className="text-lg">朝顔が咲きました</h2>
                  <p className="text-sm">朝起きたら庭に朝顔が咲いていました〜！</p>
                </section>
                <section className="space-y-1">
                  <h2 className="text-lg">コメント一覧</h2>
                  <article>
                    <h3>こんにちは！</h3>
                    <p className="text-xs">今日はいい天気ですね。</p>
                  </article>
                  <article>
                    <h3>例の件について</h3>
                    <p className="text-xs">締切が迫っていますが、進捗はどうですか？</p>
                  </article>
                </section>
              </article>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
