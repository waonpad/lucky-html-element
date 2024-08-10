import type { htmlElements } from "@/config/html-elements/html-elements";
import Link from "next/link";
import { Code } from "./code";

type Props = {
  elementName: (typeof htmlElements)[number]["name"];
};

export const ElementLinkCode = ({ elementName }: Props) => {
  return (
    <Link
      href={`/html-elements/${elementName}`}
      className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
    >
      <Code>{`<${elementName}>`}</Code>
    </Link>
  );
};
