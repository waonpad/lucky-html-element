// ../src/app/components/elements/html-elementsの中の-luck.tsxというファイル名のものを再起的に全て削除

import fs from "node:fs";
import path from "node:path";

// JSONファイルのパス
const deleteTargetPath = path.resolve(__dirname, "../src/app/components/elements/html-elements");

// ファイルを削除
fs.rmdirSync(deleteTargetPath, { recursive: true });
