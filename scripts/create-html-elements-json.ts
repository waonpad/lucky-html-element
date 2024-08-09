import fs from "node:fs";
import path from "node:path";
import { JSDOM } from "jsdom";

// MDNのURL
const mdnUrl = "https://developer.mozilla.org";
// ソースファイルのパス
const sourceHtmlPath = path.resolve(__dirname, "../data/mdn-html-elements.html");
// 保存ファイルのパス
const saveFilePath = path.resolve(__dirname, "../data/mdn-html-elements.json");

const main = async () => {
  // ファイルを読み込む
  const html = fs.readFileSync(sourceHtmlPath, "utf-8");

  // DOMを作成
  const dom = new JSDOM(html);

  const elements = Array.from(dom.window.document.querySelectorAll("ol > li")).map((element) => {
    const aElm = element.querySelector("a");
    if (!aElm) throw new Error(`aElm is empty ${element}`);

    const textContent = aElm.textContent;
    if (!textContent) throw new Error(`textContent is empty ${element}`);

    const trimmed = textContent.trim();

    const elementName = trimmed.replace("<", "").replace(" >", "");

    // 追加情報
    const abbrElm = element.querySelector("abbr");

    const deprecated = abbrElm ? abbrElm.classList.contains("icon-deprecated") : false;
    const experimental = abbrElm ? abbrElm.classList.contains("icon-experimental") : false;

    return {
      name: elementName,
      url: mdnUrl + aElm.getAttribute("href"),
      deprecated,
      experimental,
    };
  });

  // JSONに変換
  const json = JSON.stringify(elements, null, 2);

  // JSONを保存
  fs.writeFileSync(saveFilePath, json);
};

main();
