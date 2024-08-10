import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const FooterExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>案外ページの全体以外に対しても使える</p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://developer.mozilla.org/ja/docs/Web/HTML/Content_categories#%E5%8C%BA%E5%88%86%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84">
              区分コンテンツ
            </ExternalLink>
            の中で使う
          </p>
        </li>
        <li>
          <p>著者に関する情報、関連文書へのリンク、著作権情報等を入れる</p>
        </li>
        <li>
          <p>送信ボタンとかは当然入れない</p>
        </li>
        <li>
          <p>位置的に一番下にある必要はない。一番上にあってもいい</p>
        </li>
        <li>
          <p>同じ階層に2つ以上配置しても問題はない ← そうなの！？</p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "複数配置の例",
            element: (
              <article>
                <h2>記事のタイトル</h2>
                <footer>
                  <p className="text-xs">
                    この記事を読む前に読んでほしい他の記事:{" "}
                    <ExternalLink href="https://example.com">記事A</ExternalLink>
                  </p>
                </footer>
                <section>
                  <p className="text-sm">記事の内容</p>
                </section>
                <footer>
                  <p className="text-xs">
                    投稿日時: <time>2021-01-01 12:00</time>
                  </p>
                </footer>
              </article>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
