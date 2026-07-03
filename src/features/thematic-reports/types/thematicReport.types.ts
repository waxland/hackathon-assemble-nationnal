export type StartupMaturity =
  | "Seed"
  | "Series A"
  | "Series B"
  | "Scale-up"
  | "Public actor";

export type TimelineSignal = {
  year: number;
  patents: number;
  startups: number;
  scientificPlanning: number;
  parliamentaryMentions: number;
};

export type NafCodeSignal = {
  code: string;
  label: string;
  companiesCount: number;
  employeesCount: number;
  totalRevenue: number;
};

export type StartupSignal = {
  name: string;
  nafCode: string;
  revenue: number;
  employees: number;
  city: string;
  maturity: StartupMaturity;
};

export type ParliamentarySignal = {
  totalMentions: number;
  mainKeywords: string[];
  trend: "rising" | "stable" | "declining";
  sources: string[];
};

export type ThematicReport = {
  programmeCode: string;
  programmeName: string;
  title: string;
  summary: string;
  keywords: string[];
  patentsCount: number;
  startupsCount: number;
  scientificPlanningCount: number;
  parliamentaryMentionsCount: number;
  timeline: TimelineSignal[];
  nafCodes: NafCodeSignal[];
  topStartups: StartupSignal[];
  parliamentary: ParliamentarySignal;
  strengths: string[];
  weakSignals: string[];
  openQuestions: string[];
};
