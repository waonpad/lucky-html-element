import { ExplanationContainer } from "@/components/elements/explanation-container";
import { Code } from "../../code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const DialogExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            ダイアログボックスや、消すことができるアラート、インスペクター、サブウィンドウ等のような対話的コンポーネントを表す
          </p>
        </li>
        <li>
          <p>
            <Code>show()</Code>
            メソッドを使って開くとダイアログの外側も操作可能
          </p>
        </li>
        <li>
          <p>
            <Code>showModal()</Code>
            メソッドを使って開くとダイアログの外側は操作不可
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
