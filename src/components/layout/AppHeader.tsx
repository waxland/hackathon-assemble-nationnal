"use client";

import { Header } from "@codegouvfr/react-dsfr/Header";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import { usePathname } from "next/navigation";
import { getMainNavigation } from "./MainNavigation";

const brandTop = (
  <>
    République
    <br />
    Française
  </>
);

const homeLinkProps = {
  href: "/",
  title: "Accueil - Minerve.fr",
};

export function AppHeader() {
  const pathname = usePathname();

  return (
    <Header
      brandTop={brandTop}
      serviceTitle="Minerve.fr"
      serviceTagline="Explorer les investissements publics et les signaux d'innovation"
      homeLinkProps={homeLinkProps}
      navigation={getMainNavigation(pathname)}
      quickAccessItems={[headerFooterDisplayItem]}
    />
  );
}
