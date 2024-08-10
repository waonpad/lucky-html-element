import { ExplanationExampleContainer } from "../../explanation-example-container";
import { ExplanationMemoContainer } from "../../explanation-memo-container";
import { ExternalLink } from "../../external-link";

export const AddressExplanation = () => {
  return (
    <div className="space-y-4">
      <ExplanationMemoContainer>
        <li>
          <p>中身が個人、団体、組織の連絡先情報を提供する事を示す</p>
        </li>
        <li>
          <p>ページの編集者の連絡先情報を提供する場合のみ使用する</p>
        </li>
        <li>
          <p>住所のみに対して使う事は想定されていない</p>
        </li>
        <li>
          <p>
            <ExternalLink href="https://webfrontend.ninja/html-address-element/">
              【HTML】address 要素の正しい使いかた – webfrontend.ninja
            </ExternalLink>
          </p>
        </li>
      </ExplanationMemoContainer>
      <ExplanationExampleContainer
        examples={[
          {
            title: "メールアドレスを記載した例",
            element: (
              <address>
                メール: <ExternalLink href="mailto:example@example.com">example@example.com</ExternalLink>
              </address>
            ),
          },
        ]}
      />
    </div>
  );
};
