"use client";

import type { ReactNode } from "react";
import { Container } from "@mantine/core";
import { SkipLinks } from "@codegouvfr/react-dsfr/SkipLinks";
import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipLinks
        links={[
          { anchor: "#fr-header-main-navigation", label: "Menu" },
          { anchor: "#content", label: "Contenu" },
          { anchor: "#fr-footer", label: "Pied de page" },
        ]}
      />
      <AppHeader />
      <main className="app-main" id="content">
        <Container className="app-content">{children}</Container>
      </main>
      <AppFooter />
    </>
  );
}
