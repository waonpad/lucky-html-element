import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const CiteExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>引用された創作物のタイトルを示す</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="blockquote" />,
            <ElementLinkCode elementName="figure" />
            を参照
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
