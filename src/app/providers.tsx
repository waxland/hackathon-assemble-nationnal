"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  DsfrProviderBase,
  StartDsfrOnHydration,
} from "@codegouvfr/react-dsfr/next-app-router";
import { MantineProvider } from "@mantine/core";
import { SiteShell } from "@/components/layout/SiteShell";
import { mantineTheme } from "@/theme/mantineTheme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <DsfrProviderBase Link={Link} defaultColorScheme="light" lang="fr">
      <StartDsfrOnHydration />
      <MantineProvider theme={mantineTheme}>
        <SiteShell>{children}</SiteShell>
      </MantineProvider>
    </DsfrProviderBase>
  );
}
