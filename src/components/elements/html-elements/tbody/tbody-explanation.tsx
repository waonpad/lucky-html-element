import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const TbodyExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>表の本体</p>
        </li>
        <li>
          <p>
            連続していれば、1つの
            <ElementLinkCode elementName="table" />
            の中に 複数配置できる
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
