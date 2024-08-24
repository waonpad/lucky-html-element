import { ContentContainer } from "@/components/elements/content-container";
import { ContentTitle } from "@/components/elements/content-title";
import { ExternalLink } from "@/components/elements/external-link";
import { PageContainer } from "@/components/layouts/page-container";
import { usefulLinks } from "@/config/useful-links";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "便利リンク集",
};

export default function Page() {
  return (
    <PageContainer>
      <ContentContainer>
        <ContentTitle>便利リンク集</ContentTitle>
        <div className="space-y-1">
          <ul className="list-disc space-y-2 pl-4">
            {usefulLinks.map((link) => (
              <li key={link.url}>
                <ExternalLink href={link.url}>{link.name}</ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </ContentContainer>
    </PageContainer>
  );
}
