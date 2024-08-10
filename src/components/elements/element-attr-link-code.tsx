import { Code } from "./code";
import { ExternalLink } from "./external-link";

type Props = {
  attrName: string;
  noLink?: boolean;
};

export const ElementAttrLinkCode = ({ attrName, noLink }: Props) => {
  if (noLink) {
    return <Code>{attrName}</Code>;
  }

  return (
    <ExternalLink href={`https://developer.mozilla.org/ja/docs/Web/HTML/Attributes/${attrName}`}>
      <Code>{attrName}</Code>
    </ExternalLink>
  );
};
