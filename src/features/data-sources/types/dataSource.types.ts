export type DataSourceStatus = "mock" | "available" | "planned" | "missing";

export type DataSource = {
  id: string;
  name: string;
  description: string;
  usage: string;
  status: DataSourceStatus;
  reliability: "high" | "medium" | "low";
  integrationDifficulty: "low" | "medium" | "high";
};
