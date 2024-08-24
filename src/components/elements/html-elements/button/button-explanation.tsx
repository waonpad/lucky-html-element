import { ExplanationContainer } from "@/components/elements/explanation-container";
import { Code } from "../../code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const ButtonExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <Code>popovertarget</Code>
            属性と
            <Code>popovertargetaction</Code>
            を使用する事でHTMLだけでポップオーバーを実装できる
          </p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://developer.mozilla.org/ja/docs/Web/API/Popover_API">
              ポップオーバー API
            </ExternalLink>
          </p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://qiita.com/degudegu2510/items/e7bb4ef6133ed05e4a43">
              アイコンボタンをアクセシビリティ対応するには、どう作るのがいいと思いますか？
            </ExternalLink>
          </p>
        </li>
        <li>
          <p>操作しやすいよう、大きさに注意する</p>
        </li>
        <li>
          <p>操作しやすいよう、ボタン同士の間隔に注意する</p>
        </li>
        <li>
          <p>
            状態は
            <ExternalLink
              href="
            https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed"
            >
              <Code>aria-pressed</Code>
            </ExternalLink>
            属性で表す
          </p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://developer.mozilla.org/ja/docs/Web/HTML/Content_categories#%E8%A8%98%E8%BF%B0%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84">
              記述コンテンツ
            </ExternalLink>
            を内容に持ち、
            <ExternalLink href="https://developer.mozilla.org/ja/docs/Web/HTML/Content_categories#%E5%AF%BE%E8%A9%B1%E5%9E%8B%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84">
              対話型コンテンツ
            </ExternalLink>
            があってはならない
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "ポップオーバー操作",
            element: (
              <div>
                <ul className="list-disc space-y-1">
                  <li>
                    <button
                      popoverTarget="popover1"
                      popoverTargetAction="toggle"
                      type="button"
                      className="rounded-md bg-slate-200 p-1"
                    >
                      ポップオーバーの表示をトグルする
                    </button>
                  </li>
                  <li>
                    <button
                      popoverTarget="popover1"
                      popoverTargetAction="show"
                      type="button"
                      className="rounded-md bg-slate-200 p-1"
                    >
                      ポップオーバーを表示する
                    </button>
                  </li>
                  <li>
                    <button
                      popoverTarget="popover1"
                      popoverTargetAction="hide"
                      type="button"
                      className="rounded-md bg-slate-200 p-1"
                    >
                      ポップオーバーを非表示にする
                    </button>
                  </li>
                </ul>
                <div id="popover1" popover="auto" className="max-w-[90%] space-y-2 bg-blue-400">
                  <p>
                    <Code>popover</Code>
                    がautoの場合、ポップオーバーの外側をクリックしたり、<kbd>ESC</kbd>キーを押すと非表示になる。
                    また、複数のポップオーバーを同時表示できず開くと他のポップオーバーが非表示になる
                  </p>
                  <p>
                    <Code>popover</Code>
                    がmanualの場合、ボタンで操作する必要がある。 また、複数のポップオーバーを同時表示できる
                  </p>
                  <div className="flex justify-end">
                    <button
                      popoverTarget="popover1"
                      popoverTargetAction="hide"
                      type="button"
                      className="rounded-md bg-slate-200 p-1"
                    >
                      非表示にする
                    </button>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "アイコンボタン (aria-labelを使用)",
            element: (
              <button
                popoverTarget="popover2"
                popoverTargetAction="toggle"
                type="button"
                className="h-8 w-8 rounded-md bg-slate-200 p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="検索ボタン">
                  {/* <!--!Font={true} ={true}Aweso={true}me={true}={true} Free={true} ={true}6.6.0 by=={true}{true} @fontawesome={true} - https:={true}//fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                  <title>虫眼鏡のSVG</title>
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </button>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
