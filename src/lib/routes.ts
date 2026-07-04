export const routes = {
  home: "/",
  investments: "/investissements",
  investmentReport: (programmeCode: string) => `/investissements/${programmeCode}`,
  presentation: "/presentation",
  presentationFigma: "/presentation-figma",
} as const;
