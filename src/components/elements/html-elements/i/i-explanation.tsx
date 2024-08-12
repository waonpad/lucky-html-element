import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const IExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>他のテキストと区別するために使う</p>
        </li>
        <li>
          <p>慣用句,固有名詞,語調が変わるところなど</p>
        </li>
        <li>
          <p>"i"とは"italic"の略</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
