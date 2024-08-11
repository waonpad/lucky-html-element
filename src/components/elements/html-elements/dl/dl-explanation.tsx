import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const DlExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>説明リスト？</p>
        </li>
        <li>
          <p>用語集の作成やメタデータ（キーと値のペアのリスト）の表示に使う</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="dt" />
            (用語)と
            <ElementLinkCode elementName="dd" />
            (説明)をリスト化する
          </p>
        </li>
        <li>
          <p>用語と説明は1対1の関係である必要はない</p>
        </li>
        <li>
          <p>
            用語と説明を
            <ElementLinkCode elementName="div" />
            でまとめてもいい
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <dl>
                <dt>アドバンス召喚</dt>
                <dd className="whitespace-pre-wrap pl-8 text-xs">
                  {
                    "レベル５以上のモンスターについては召喚前に、自分フィールドの別のモンスターを「リリース」（＝墓地へ送る事）をしなければなりません。\nこれを「アドバンス召喚」と呼びます。\nレベル５・６のモンスターは１体、レベル７以上のモンスターは２体をリリースする必要があります。"
                  }
                </dd>
                <dt>特殊召喚</dt>
                <dd className="whitespace-pre-wrap pl-8 text-xs">
                  {
                    "特殊な手順を踏んでモンスターを出すことを「特殊召喚」といいます。\n魔法・罠カードの効果や、効果モンスターのテキストに記載された手順で呼び出される場合等があります。\n特殊召喚は条件を満たしていれば１ターンに何度でも行う事が可能です。\n特殊召喚はカードに特別な記載がない限り、表側攻撃表示か、表側守備表示でフィールドに出します。"
                  }
                </dd>
              </dl>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
