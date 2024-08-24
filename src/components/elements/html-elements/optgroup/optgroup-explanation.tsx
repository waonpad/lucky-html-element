import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const OptgroupExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <ElementLinkCode elementName="select" />
            の子要素として、
            <ElementLinkCode elementName="option" />
            のグループ化を行う
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <div>
                <label htmlFor="favorite-pokemon">好きなポケモンを選んでね</label>
                <select id="favorite-pokemon" className="rounded-md border-2 border-slate-400 p-1">
                  <optgroup label="カントー地方">
                    <option value="bulbasaur">フシギダネ</option>
                    <option value="charmander">ヒトカゲ</option>
                    <option value="squirtle">ゼニガメ</option>
                  </optgroup>
                  <optgroup label="ジョウト地方">
                    <option value="chikorita">チコリータ</option>
                    <option value="cyndaquil">ヒノアラシ</option>
                    <option value="totodile">ワニノコ</option>
                  </optgroup>
                </select>
              </div>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
