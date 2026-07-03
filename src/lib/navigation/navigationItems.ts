import { routes } from "../constants/routes";

export const mainNavigationItems = [
  {
    label: "Accueil",
    href: routes.home,
  },
  {
    label: "Investissements",
    href: routes.investments,
  },
  {
    label: "Thématiques",
    href: routes.thematicReports,
  },
  {
    label: "Données",
    href: routes.dataSources,
  },
  {
    label: "Méthodologie",
    href: routes.methodology,
  },
] as const;
