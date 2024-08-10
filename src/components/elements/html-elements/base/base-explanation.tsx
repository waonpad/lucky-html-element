import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const BaseExplanation = () => {
  return (
    <div>
      <ExplanationMemoContainer>
        <li>
          <p>文書内に1つだけしか置けない</p>
        </li>
        <li>
          <p>フレームワークを利用した開発ではほぼ使わなさそう</p>
        </li>
        <li>
          <p>Open Grapghのメタタグはこれで設定したURLを意識しない ← ええ〜</p>
        </li>
      </ExplanationMemoContainer>
    </div>
  );
};
