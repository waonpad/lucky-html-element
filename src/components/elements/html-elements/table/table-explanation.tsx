import { ExplanationContainer } from "@/components/elements/explanation-container";
import { Code } from "../../code";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const TableExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>表形式のデータを表す</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="caption" />
            があると表の目的を簡潔に示せるため、アクセシビリティに役立つ
          </p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="th" />
            には
            <Code>scope</Code>
            属性を指定するとどんな形になっているか分かりやすくなる
          </p>
        </li>
        <li>
          <p>複雑な表は小さい表の集合に分割できないか考える</p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="caption" />,
            <ElementLinkCode elementName="thead" />,
            <ElementLinkCode elementName="tbody" />,
            <ElementLinkCode elementName="tfoot" />,
            <ElementLinkCode elementName="tr" />,
            <ElementLinkCode elementName="th" />,
            <ElementLinkCode elementName="td" />,
            <ElementLinkCode elementName="col" />,
            <ElementLinkCode elementName="colgroup" />
            も参照
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
