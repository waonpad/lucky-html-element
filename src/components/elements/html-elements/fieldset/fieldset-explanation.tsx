import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const FieldsetExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>いくつかのコントロールをグループ化するために使用する</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="legend" />
            でキャプションを提供できる
          </p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://waic.jp/translations/WCAG-TECHS/H71">
              H71: fieldset 要素及び legend 要素を使用して、フォームコントロールのグループに関する説明を提供する | WCAG
              2.0 達成方法集
            </ExternalLink>
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <fieldset>
                <legend>最初のポケモン</legend>
                <input type="radio" name="pokemon" id="bulbasaur" value="bulbasaur" />
                <label htmlFor="bulbasaur">フシギダネ</label>
                <br />
                <input type="radio" name="pokemon" id="charmander" value="charmander" />
                <label htmlFor="charmander">ヒトカゲ</label>
                <br />
                <input type="radio" name="pokemon" id="squirtle" value="squirtle" />
                <label htmlFor="squirtle">ゼニガメ</label>
              </fieldset>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
