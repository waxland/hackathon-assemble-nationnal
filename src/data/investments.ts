import budgetLinesJson from "../../dataset/budget/france-2030-budget-lines.json";
import reportDatavizJson from "../../dataset/dataviz/investment-programme-dataviz.json";
import reportMetadataJson from "../../dataset/reports/investment-programme-reports.json";

export type BudgetYear = "2024" | "2025" | "2026";

export type BudgetLine = {
  id: string;
  programmeCode: string;
  programmeName: string;
  expenseCategoryName: string;
  amount2024: number;
  amount2025: number;
  amount2026: number;
};

export type SignalTimelinePoint = {
  year: string;
  patents: number;
  startups: number;
  parliament: number;
};

export type BudgetHistoryPoint = {
  year: BudgetYear;
  budget: number;
};

export type SourceCoveragePoint = {
  source: string;
  coverageScore: number;
};

export type SectorDistributionPoint = {
  sector: string;
  companies: number;
  patents: number;
};

export type ParliamentarySourcePoint = {
  source: string;
  mentions: number;
};

export type TerritorialDistributionPoint = {
  territory: string;
  companies: number;
  jobs: number;
  budgetShare: number;
};

export type AlignmentScorePoint = {
  dimension: string;
  score: number;
};

export type ProgrammeDataviz = {
  budgetHistory: BudgetHistoryPoint[];
  signalTimeline: SignalTimelinePoint[];
  sourceCoverage: SourceCoveragePoint[];
  sectorDistribution: SectorDistributionPoint[];
  parliamentarySources: ParliamentarySourcePoint[];
  territorialDistribution: TerritorialDistributionPoint[];
  alignmentScores: AlignmentScorePoint[];
};

export type InvestmentReportBase = {
  programmeCode: string;
  title: string;
  summary: string;
  budgetUse: string;
  keywords: string[];
  ecosystem: {
    companies: number;
    jobs: number;
    revenue: number;
    territories: string[];
  };
  startups: {
    name: string;
    city: string;
    maturity: string;
    jobs: number;
  }[];
  parliament: {
    mentions: number;
    trend: "En hausse" | "Stable" | "À qualifier";
    topics: string[];
  };
  strengths: string[];
  openQuestions: string[];
};

export type InvestmentReport = InvestmentReportBase & {
  dataviz: ProgrammeDataviz;
};

export type InvestmentProgramme = {
  programmeCode: string;
  programmeName: string;
  amount2026: number;
  linesCount: number;
  report: InvestmentReport;
};

export const budgetLines = budgetLinesJson as BudgetLine[];

const reportMetadataByProgramme = reportMetadataJson as Record<string, InvestmentReportBase>;
const reportDatavizByProgramme = reportDatavizJson as Record<string, ProgrammeDataviz>;

export function getAmount(line: BudgetLine, year: BudgetYear): number {
  if (year === "2024") return line.amount2024;
  if (year === "2025") return line.amount2025;
  return line.amount2026;
}

export function getTotalBudget(year: BudgetYear = "2026"): number {
  return budgetLines.reduce((total, line) => total + getAmount(line, year), 0);
}

export function getProgrammes(): InvestmentProgramme[] {
  const grouped = new Map<string, { name: string; amount: number; linesCount: number }>();

  budgetLines.forEach((line) => {
    const current = grouped.get(line.programmeCode);
    grouped.set(line.programmeCode, {
      name: line.programmeName,
      amount: (current?.amount ?? 0) + line.amount2026,
      linesCount: (current?.linesCount ?? 0) + 1,
    });
  });

  return Array.from(grouped.entries())
    .map(([programmeCode, value]) => ({
      programmeCode,
      programmeName: value.name,
      amount2026: value.amount,
      linesCount: value.linesCount,
      report: getReport(programmeCode),
    }))
    .sort((left, right) => right.amount2026 - left.amount2026);
}

export function getProgramme(programmeCode: string): InvestmentProgramme | undefined {
  return getProgrammes().find((programme) => programme.programmeCode === programmeCode);
}

export function getPieData() {
  const colors = ["#000091", "#18753c", "#d64f7f", "#6a6af4", "#8d533e"];

  return getProgrammes().map((programme, index) => ({
    name: `${programme.programmeCode} - ${programme.programmeName}`,
    value: programme.amount2026,
    color: colors[index % colors.length],
  }));
}

function getReport(programmeCode: string): InvestmentReport {
  const report = reportMetadataByProgramme[programmeCode];
  const dataviz = reportDatavizByProgramme[programmeCode];

  if (!report || !dataviz) {
    throw new Error(`Dataset missing for programme ${programmeCode}`);
  }

  return {
    ...report,
    dataviz,
  };
}
