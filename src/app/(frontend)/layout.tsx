import { AppHeader } from "@/components/layouts/app-header";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppHeader />
      <main className="flex grow flex-col">{children}</main>
    </>
  );
}
