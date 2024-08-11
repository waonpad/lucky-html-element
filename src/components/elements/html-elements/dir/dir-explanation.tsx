import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const DirExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            代わりに
            <ElementLinkCode elementName="ul" />
            を使う
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
