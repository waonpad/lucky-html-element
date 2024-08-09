import type { ElementInfo as ElmInfo } from "@/types";

type Props = {
  elementInfo: ElmInfo;
};

export const ElementInfo = ({ elementInfo }: Props) => {
  return (
    <div>
      <a
        href={elementInfo.url}
        rel="noopener noreferrer"
        target="_blank"
        className="block text-center text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
      >
        MDNリファレンス
      </a>
      <div className="flex justify-center">
        {elementInfo.deprecated && <span className="mx-2 font-bold text-red-600">非推奨な要素です</span>}
        {elementInfo.experimental && <span className="mx-2 font-bold text-blue-600">実験的要素です</span>}
      </div>
    </div>
  );
};
