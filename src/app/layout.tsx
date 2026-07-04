import { DsfrHeadBase } from "@codegouvfr/react-dsfr/next-app-router/DsfrHead";
import { createGetHtmlAttributes } from "@codegouvfr/react-dsfr/next-app-router/getHtmlAttributes";
import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import Link from "next/link";
import "../styles/globals.css";
import { Providers } from "./providers";

const { getHtmlAttributes } = createGetHtmlAttributes({
  defaultColorScheme: "system",
});

export const metadata: Metadata = {
  title: "Minerve",
  description:
    "Prototype de tableau de bord pour explorer les investissements France 2030 et les signaux réels d'innovation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" {...getHtmlAttributes({ lang: "fr" })}>
      <head>
        <DsfrHeadBase
          Link={Link}
          preloadFonts={[
            "Marianne-Regular",
            "Marianne-Medium",
            "Marianne-Bold",
          ]}
          doDisableFavicon
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
