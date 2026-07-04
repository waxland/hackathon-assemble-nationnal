export const routes = {
  home: "/",
  investments: "/investissements",
  investmentReport: (programmeCode: string) =>
    `/investissements/${programmeCode}`,
  presentationFigma: "/presentation-figma",
} as const;
