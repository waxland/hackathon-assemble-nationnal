import type { ReactNode } from "react";
import { Container } from "@mantine/core";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="site-main">
        <Container className="site-content" size="xl">
          {children}
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
