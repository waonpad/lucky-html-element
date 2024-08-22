import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ElementAttrLinkCode } from "../../element-attr-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const AudioExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>1つ以上の音源を含む</p>
        </li>
        <li>
          <p>
            <ElementAttrLinkCode attrName="src" noLink={true} />
            属性に音源のURLを指定
          </p>
        </li>
        <li>
          <p>自動再生、ループ再生、音量調整等の機能を持つ</p>
        </li>
        <li>
          <p>使うことになったらまた調べる</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
