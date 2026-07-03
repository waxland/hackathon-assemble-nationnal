import type { Metadata } from "next";
import Link from "next/link";
import { DsfrHeadBase } from "@codegouvfr/react-dsfr/next-app-router/DsfrHead";
import { createGetHtmlAttributes } from "@codegouvfr/react-dsfr/next-app-router/getHtmlAttributes";
import { Providers } from "./providers";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "../styles/globals.css";

const { getHtmlAttributes } = createGetHtmlAttributes({
  defaultColorScheme: "system",
});

export const metadata: Metadata = {
  title: "Minerve.fr | Explorer les investissements France 2030",
  description:
    "Prototype de tableau de bord pour relier les investissements publics France 2030 aux signaux réels de l'innovation française.",
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
          preloadFonts={["Marianne-Regular", "Marianne-Medium", "Marianne-Bold"]}
          doDisableFavicon
        />
        <link rel="icon" href="/favicon.ico" />
        {process.env.CONTENT_SECURITY_POLICY && (
          <meta
            httpEquiv="Content-Security-Policy"
            content={process.env.CONTENT_SECURITY_POLICY}
          />
        )}
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
