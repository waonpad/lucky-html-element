import { ExplanationContainer } from "@/components/elements/explanation-container";
import { Code } from "../../code";
import { ElementLinkCode } from "../../element-link-code";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const HgroupExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>
            <ElementLinkCode elementName="h1" /> 〜 <Code>h6</Code>
            と<ElementLinkCode elementName="p" />
            をまとめるのに使う
          </p>
        </li>
        <li>
          <p>
            <ElementLinkCode elementName="p" />
            が一番上にあっても問題ない
          </p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://www.tak-dcxi.com/article/use-hgroup-for-marking-up-the-main-heading-and-subheading/">
              主題と副題のマークアップにはhgroupを使用する – TAKLOG
            </ExternalLink>
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "単純な例",
            element: (
              <hgroup>
                <h2>ポケットモンスター</h2>
                <p className="text-sm">この星の、不思議な不思議な生き物</p>
              </hgroup>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
