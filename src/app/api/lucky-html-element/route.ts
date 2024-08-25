import { htmlElements } from "@/config/html-elements/html-elements";
import { luckMessages } from "@/config/html-elements/luck-messages";
import { findByElementName } from "@/config/html-elements/utils";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async () => {
  const elementNames = htmlElements.map((element) => element.name);
  const elementName = elementNames[Math.floor(Math.random() * elementNames.length)];

  const elementInfo = findByElementName(elementName);

  const luckMessage = luckMessages[elementName];

  const generatedAt = new Date(Date.now()).toISOString();

  return NextResponse.json({
    elementInfo,
    luckMessage,
    generatedAt,
  });
};
