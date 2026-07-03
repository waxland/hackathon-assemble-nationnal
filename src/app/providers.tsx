"use client";

import { ReactNode } from "react";
import Link from "next/link";
import {
  DsfrProviderBase,
  StartDsfrOnHydration,
} from "@codegouvfr/react-dsfr/next-app-router";
import { MantineProvider } from "@mantine/core";
import NextAppDirEmotionCacheProvider from "tss-react/next/appDir";
import { AppShell } from "@/components/layout/AppShell";
import { mantineTheme } from "@/theme/mantineTheme";
import { MatomoTracker } from "./MatomoTracker";

declare module "@codegouvfr/react-dsfr" {
  interface RegisterLink {
    Link: typeof Link;
  }
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <DsfrProviderBase Link={Link} defaultColorScheme="system" lang="fr">
      <StartDsfrOnHydration />
      <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
        <MantineProvider theme={mantineTheme}>
          <MatomoTracker />
          <AppShell>{children}</AppShell>
        </MantineProvider>
      </NextAppDirEmotionCacheProvider>
    </DsfrProviderBase>
  );
}
