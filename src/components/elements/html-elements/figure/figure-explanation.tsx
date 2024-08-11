import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const FigureExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>キャプションが付けられる図要素</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="figcaption" />
            を最初か最後の子要素に持つ事がある
          </p>
        </li>
        <li>
          <p>文書の本文の流れから参照されるが、本文の流れに影響を与えない</p>
        </li>
        <li>
          <p>自己完結している</p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://hysryt.com/archives/1782">
              いまいちよくわからないfigure要素の使い方 - ナデズダ・ゴボリン🖥
            </ExternalLink>
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <figure>
                <div className="flex h-40 w-40 items-center justify-center bg-slate-200">
                  <p>かわいい子猫の画像</p>
                </div>
                <figcaption>
                  <p className="text-xs">かわいい子猫</p>
                </figcaption>
              </figure>
            ),
          },
          {
            title: "実践的な例 (figureに囲まれた部分を取り除いても成立する)",
            element: (
              <div className="space-y-1">
                <p className="text-sm">
                  ... かの有名なボカロ曲においても、食べてすぐ寝ると丑になってしまうという歌詞が存在する。
                </p>
                <figure className="space-y-1 rounded-md bg-slate-100 p-1">
                  <blockquote>
                    <p className="whitespace-pre-wrap text-xs">{"食べてすぐ寝て丑になる\n起きてまた寝て人でなし？"}</p>
                  </blockquote>
                  <figcaption>
                    <p className="text-xs">
                      ー <cite>マーシャル・マキシマイザー (柊マグネタイトによるボーカロイド楽曲)</cite>
                    </p>
                  </figcaption>
                </figure>
                <p className="text-sm">これ以上丑化被害者を出すわけにはいかない。早急にこの問題を周知すべきだ。</p>
              </div>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
