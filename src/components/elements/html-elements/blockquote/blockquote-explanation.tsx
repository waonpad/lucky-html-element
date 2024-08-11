import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementAttrLinkCode } from "../../element-attr-link-code";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const BlockquoteExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>内包する要素のテキストが引用文であることを示す</p>
        </li>
        <li>
          <p>
            行内の短い引用を行う場合、
            <ElementLinkCode elementName="q" />
            要素を使用する
          </p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://vanillaice000.blog.fc2.com/blog-entry-1041.html">
              blockquote要素について考える | The other way round
            </ExternalLink>
          </p>
        </li>
        <li>
          <p>
            <ElementAttrLinkCode attrName="cite" noLink={true} />
            属性はURLしか設定できないが、
            <ElementLinkCode elementName="cite" />
            要素はそれ以外も設定できる
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <blockquote cite="https://umamusume.jp/character/silencesuzuka">
                <p className="whitespace-pre-wrap text-sm">
                  {
                    "スタート直後から先頭に立ち、そのまま独走する『大逃げ』を得意とする天才肌。 物静かでストイックだが、他者を嫌っているわけではなく、ただ走ることに心を奪われているだけである。 スペシャルウィークと同室の先輩で、その透明感に憧れる者は多い。"
                  }
                </p>
              </blockquote>
            ),
          },
          {
            title: "実践的な例",
            element: (
              <figure>
                <blockquote cite="https://umamusume.jp/about/">
                  <p>「ウマ娘」とは？</p>
                  <p className="whitespace-pre-wrap text-sm">
                    {
                      "別世界の名前と魂を受け継いで、“尻尾と耳”そして“超人的な走力”を持つ。\n教育機関である「トレセン学園」に集い、“自身の夢”と“レース”に向けて仲間たちと日々切磋琢磨している。"
                    }
                  </p>
                </blockquote>
                <figcaption>
                  <p className="text-xs">
                    {"ー "}
                    <cite>
                      <ExternalLink href="https://umamusume.jp/about/">
                        About｜ウマ娘 プリティーダービー 公式ポータルサイト｜Cygames
                      </ExternalLink>
                    </cite>
                  </p>
                </figcaption>
              </figure>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
