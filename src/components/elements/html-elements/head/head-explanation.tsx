import { ElementLinkCode } from "../../element-link-code";
import { ExplanationContainer } from "../../explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const HeadExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>ページのメタデータを入れる要素</p>
        </li>
        <li>
          <p>
            よく見るのものの他に、
            <ElementLinkCode elementName="noscript" />
            ,
            <ElementLinkCode elementName="template" />
            が入る
          </p>
        </li>
        <li>
          <p>
            React19により、
            <ElementLinkCode elementName="title" />,
            <ElementLinkCode elementName="link" />,
            <ElementLinkCode elementName="meta" />
            はコンポーネント内から巻き上げられる。
            <ExternalLink href="https://react.dev/blog/2024/04/25/react-19#support-for-metadata-tags">
              React 19 RC – React
            </ExternalLink>
          </p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
