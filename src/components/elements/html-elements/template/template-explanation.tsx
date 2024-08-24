import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";

export const TemplateExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>JavaScriptで表示をあれこれするために使う</p>
        </li>
        <li>
          <p>まぁReact使ってたら使わないか</p>
        </li>
      </ExplanationMemoContainer>
    </ExplanationContainer>
  );
};
