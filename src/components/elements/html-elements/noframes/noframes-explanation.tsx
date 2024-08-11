import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const NoframesExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <ElementLinkCode elementName="frameset" />
            が廃止されたため使わない
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
