import { clientEnv } from "@/constants/env";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "../elements/external-link";

export const AppHeader = () => {
  return (
    <header className="sticky top-0 flex items-center bg-slate-200 p-2">
      <Link href="/" className="font-bold text-lg">
        {clientEnv.NEXT_PUBLIC_APP_NAME}
      </Link>
      <nav className="ml-4 text-sm">
        <ul className="flex space-x-2">
          <li>
            <Link href="/html-elements">HTML要素一覧</Link>
          </li>
          <li>
            <Link href="/useful-links">便利リンク集</Link>
          </li>
        </ul>
      </nav>
      <nav className="ml-auto">
        <ul>
          <li>
            <ExternalLink href={clientEnv.NEXT_PUBLIC_GITHUB_REPO_URL}>
              <Image src="/github-logo.svg" alt="GitHub" width={24} height={24} />
            </ExternalLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
