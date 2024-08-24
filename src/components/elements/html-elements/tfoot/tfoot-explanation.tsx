import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const TfootExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>表のフッター</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="table" />
            の最後の子要素としてのみ使用できる
          </p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="tr" />
            のみ子要素として持てる
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <table>
                <caption>アグネスタキオンの獲得賞金</caption>
                <thead>
                  <tr>
                    <th>レース名</th>
                    <th>賞金(万円)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3歳新馬</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>ラジオたんぱ杯3歳S</td>
                    <td>3246.2</td>
                  </tr>
                  <tr>
                    <td>弥生賞</td>
                    <td>5470</td>
                  </tr>
                  <tr>
                    <td>皐月賞</td>
                    <td>12892</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>合計</td>
                    <td>22208.2</td>
                  </tr>
                </tfoot>
              </table>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
