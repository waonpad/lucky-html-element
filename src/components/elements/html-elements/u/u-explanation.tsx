import { ExplanationContainer } from "@/components/elements/explanation-container";
import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const UExplanation = () => {
  return (
    <ExplanationContainer>
      <ExplanationMemoContainer>
        <li>
          <p>非言語的注釈？？？</p>
        </li>
        <li>
          <p>
            綴りエラーの通知や中国語の文字列の
            <ExternalLink href="https://en.wikipedia.org/wiki/Proper_name_mark">固有名詞記号</ExternalLink>
            の記述に使う
          </p>
        </li>
        <li>
          <p>他の要素やCSSを使うのが適切かどうか考慮する</p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "綴りエラー",
            element: (
              <p>
                Hyper Text Markup{" "}
                <u
                  style={{
                    textDecoration: "red wavy underline",
                  }}
                >
                  Languge
                </u>
              </p>
            ),
          },
        ]}
      />
    </ExplanationContainer>
  );
};
