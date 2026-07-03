"use client";

import { Footer } from "@codegouvfr/react-dsfr/Footer";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import pkg from "../../../package.json";

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

const bottomLinks = [
  { text: "Conditions d'utilisation", linkProps: { href: "/cgu" } },
  { text: "Statistiques", linkProps: { href: "/stats" } },
  {
    text: "Politique de confidentialité",
    linkProps: { href: "/politique-confidentialite" },
  },
  { text: "Aide", linkProps: { href: "/aide" } },
];

export function AppFooter() {
  return (
    <Footer
      brandTop={brandTop}
      accessibility="non compliant"
      contentDescription="Minerve.fr est un prototype exploratoire pour analyser l'alignement entre investissements publics France 2030 et signaux d'innovation."
      homeLinkProps={homeLinkProps}
      license={`Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous licence ${pkg.license}.`}
      accessibilityLinkProps={{ href: "/accessibilite" }}
      termsLinkProps={{ href: "/mentions-legales" }}
      bottomItems={[...bottomLinks, headerFooterDisplayItem]}
    />
  );
}
