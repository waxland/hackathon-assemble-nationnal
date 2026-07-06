export const routes = {
  home: "/",
  investments: "/investissements",
  investmentReport: (programmeCode: string) =>
    `/investissements/${programmeCode}`,
  exploration: "/exploration",
} as const;
