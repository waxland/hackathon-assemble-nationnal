export const routes = {
  home: "/",
  investments: "/investissements",
  thematicReports: "/thematiques",
  thematicReport: (programmeCode: string) => `/thematiques/${programmeCode}`,
  dataSources: "/donnees",
  methodology: "/methodologie",
} as const;
