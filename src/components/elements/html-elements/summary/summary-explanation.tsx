import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const SummaryExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <ElementLinkCode elementName="details" />
            の中身の概要を表す
          </p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="details" />
            の最初の子要素としてのみ使用できる
          </p>
        </li>
        <li>
          <p>これが無いと「詳細」という文字列が代わりに表示される</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
