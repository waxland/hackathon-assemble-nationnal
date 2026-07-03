export const routes = {
  home: "/",
  investments: "/investissements",
  investmentReport: (programmeCode: string) => `/investissements/${programmeCode}`,
} as const;
