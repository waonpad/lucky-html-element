import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const DatalistExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>他のコントロール内で選択できる許容または推奨オプションを表す</p>
        </li>
        <li>
          <p>
            特定の種類の
            <ElementLinkCode elementName="input" />
            だけが対応しており、ブラウザによっては対応していないこともあるため事前に確認する
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <div>
                <label htmlFor="axes">あなたが落としたのは？</label>
                <input
                  list="axes-data-list"
                  id="axes"
                  name="axes"
                  className="rounded-md border-2 border-slate-400 p-1"
                />
                <datalist id="axes-data-list">
                  <option value="金の斧" />
                  <option value="銀の斧" />
                </datalist>
              </div>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
