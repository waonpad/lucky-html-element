import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const AsideExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>メインコンテンツと間接的な関係しか持っていないものを入れる (余談要素)</p>
        </li>
        <li>
          <p>ページのサイドバーとかに使う</p>
        </li>
        <li>
          <p>無くてもメインの流れに支障がないものと考えるといいかも</p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "よくあるやつ",
            element: (
              <div className="grid min-h-72 w-full grid-cols-4 gap-3">
                <article className="col-span-3 flex items-center justify-center bg-slate-300">
                  <h1>メインコンテンツ</h1>
                </article>
                <aside className="col-span-1 h-fit space-y-2 bg-slate-200 p-1">
                  <section>
                    <h2>関連記事</h2>
                    <ul>
                      {Array.from({ length: 5 }).map((_, i) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        <li key={i} className="text-sm">
                          記事{i + 1}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h2>広告</h2>
                    <ul className="space-y-1">
                      <li>
                        <div className="h-12 w-full bg-blue-200" />
                      </li>
                      <li>
                        <div className="h-12 w-full bg-red-200" />
                      </li>
                    </ul>
                  </section>
                </aside>
              </div>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
