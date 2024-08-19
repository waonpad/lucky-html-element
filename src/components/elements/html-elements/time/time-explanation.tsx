import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementAttrLinkCode } from "../../element-attr-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const TimeExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>時刻を表す(有効な期間も一応表現可能)</p>
        </li>
        <li>
          <p>SEOや機械が読むのにに有効</p>
        </li>
        <li>
          <p>
            日付の計算で混乱するため、
            <ExternalLink href="https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%AC%E3%82%B4%E3%83%AA%E3%82%AA%E6%9A%A6">
              グレゴリオ暦
            </ExternalLink>
            導入前の日付に対しては使用しない
          </p>
        </li>
        <li>
          <p>
            グレゴリオ暦の導入はきっちりこれと決まっているわけではない・・・国によって違うがここ100年くらいであれば問題なさそう
          </p>
        </li>
        <li>
          <p>
            <ElementAttrLinkCode attrName="datetime" noLink={true} />
            属性もしくは、要素のテキストの内容で有効なdatetime値を示す
          </p>
        </li>
        <li>
          <p>正確な日時が確立されない時間(紀元250年頃の冬、等)をエンコードするのは意図されていない</p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <p>
                現在時刻は
                <time>2011-11-18T14:54:39.929Z</time>
                です。
              </p>
            ),
          },
          {
            title: "datetime属性を使った例",
            element: (
              <p>
                日本は戦争に敗北し、
                <time dateTime="1945-08-15">1945年8月15日</time>
                に終戦しました。
              </p>
            ),
          },
          {
            title: "グレゴリオ暦導入前の日付",
            element: <p>鎌倉幕府は1185年に成立したという説があります</p>,
          },
          {
            title: "公開日時と更新日時",
            element: (
              <p>
                この記事は
                <time dateTime="2021-11-18" itemProp="datePublished">
                  2021年11月18日
                </time>
                に公開され、
                <time dateTime="2021-11-19" itemProp="dateModified">
                  2021年11月19日
                </time>
                に更新されました。
              </p>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
