import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const CaptionExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>表のキャプション, タイトルを表す</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="table" />
            要素の最初の子要素としてのみ使用できる
          </p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="figure" />
            要素の唯一の子孫として
            <ElementLinkCode elementName="table" />
            要素を持つ場合、
            <ElementLinkCode elementName="figcaption" />
            を使用する
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <table className="table-auto">
                <caption>ウマ娘のスリーサイズ</caption>
                <thead>
                  <tr>
                    <th>名前</th>
                    <th>B</th>
                    <th>W</th>
                    <th>H</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>スペシャルウィーク</td>
                    <td>81</td>
                    <td>56</td>
                    <td>81</td>
                  </tr>
                  <tr>
                    <td>サイレンススズカ</td>
                    <td>70</td>
                    <td>53</td>
                    <td>79</td>
                  </tr>
                </tbody>
              </table>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
