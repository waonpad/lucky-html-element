import type { htmlElements } from "@/config/html-elements/html-elements";
import type { ElementInfo as ElmInfo } from "@/types";
import Link from "next/link";
import { ExternalLink } from "./external-link";

type Props = {
  elementInfo: ElmInfo;
  displayElementLink?: boolean;
};

export const ElementInfo = ({ elementInfo, displayElementLink }: Props) => {
  return (
    <div>
      <div className="flex justify-center space-x-2">
        {displayElementLink && (
          <Link
            href={`/html-elements/${elementInfo.name as (typeof htmlElements)[number]["name"]}`}
            className="block text-center text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
          >
            詳細
          </Link>
        )}
        <ExternalLink href={elementInfo.url}>MDNリファレンス</ExternalLink>
      </div>
      <div className="flex justify-center space-x-2">
        {elementInfo.deprecated && <span className="font-bold text-red-600">非推奨な要素です</span>}
        {elementInfo.experimental && <span className="font-bold text-blue-600">実験的要素です</span>}
      </div>
    </div>
  );
};
