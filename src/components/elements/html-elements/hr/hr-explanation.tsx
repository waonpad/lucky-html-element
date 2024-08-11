import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const HrExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>セクションで区切るほどではないが、話題の変わり目を示したい場合に使う</p>
        </li>
        <li>
          <ElementLinkCode elementName="select" />
          の中で、
          <ElementLinkCode elementName="option" />
          の区切りを示すためにも使えるが、
          <ElementLinkCode elementName="optgroup" />
          の使用を検討する
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
