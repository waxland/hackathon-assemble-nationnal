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

export type ProgrammePieData = {
  name: string;
  programmeCode: string;
  programmeName: string;
  value: number;
  color: string;
  share: number;
  linesCount: number;
};

export type ExpenseCategoryKey =
  | "fonctionnement"
  | "intervention"
  | "operationsFinancieres"
  | "autres";

export type ProgrammeExpenseCategoryRow = {
  programme: string;
  programmeCode: string;
  programmeName: string;
  total: number;
} & Record<ExpenseCategoryKey, number>;

export const budgetLines = budgetLinesJson as BudgetLine[];

const reportMetadataByProgramme = reportMetadataJson as Record<string, InvestmentReportBase>;
const reportDatavizByProgramme = reportDatavizJson as Record<string, ProgrammeDataviz>;
const programmeColors = ["#000091", "#18753c", "#d64f7f", "#6a6af4", "#8d533e"];

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

export function getPieData(year: BudgetYear = "2026"): ProgrammePieData[] {
  const total = getTotalBudget(year);
  const grouped = new Map<string, { name: string; amount: number; linesCount: number }>();

  budgetLines.forEach((line) => {
    const current = grouped.get(line.programmeCode);
    grouped.set(line.programmeCode, {
      name: line.programmeName,
      amount: (current?.amount ?? 0) + getAmount(line, year),
      linesCount: (current?.linesCount ?? 0) + 1,
    });
  });

  return Array.from(grouped.entries())
    .map(([programmeCode, programme], index) => ({
      name: `${programmeCode} - ${programme.name}`,
      programmeCode,
      programmeName: programme.name,
      value: programme.amount,
      color: programmeColors[index % programmeColors.length],
      share: total > 0 ? programme.amount / total : 0,
      linesCount: programme.linesCount,
    }))
    .sort((left, right) => right.value - left.value)
    .map((item, index) => ({
      ...item,
      color: programmeColors[index % programmeColors.length],
    }));
}

export function getProgrammeExpenseCategoryRows(
  year: BudgetYear = "2026",
): ProgrammeExpenseCategoryRow[] {
  const rows = new Map<string, ProgrammeExpenseCategoryRow>();

  budgetLines.forEach((line) => {
    const programme = rows.get(line.programmeCode) ?? {
      programme: line.programmeCode,
      programmeCode: line.programmeCode,
      programmeName: line.programmeName,
      total: 0,
      fonctionnement: 0,
      intervention: 0,
      operationsFinancieres: 0,
      autres: 0,
    };
    const amount = getAmount(line, year);
    const categoryKey = getExpenseCategoryKey(line.expenseCategoryName);

    programme.total += amount;
    programme[categoryKey] += amount;
    rows.set(line.programmeCode, programme);
  });

  return Array.from(rows.values()).sort((left, right) => right.total - left.total);
}

function getExpenseCategoryKey(categoryName: string): ExpenseCategoryKey {
  const normalizedCategory = categoryName.toLowerCase();

  if (normalizedCategory.includes("fonctionnement")) {
    return "fonctionnement";
  }

  if (normalizedCategory.includes("intervention")) {
    return "intervention";
  }

  if (normalizedCategory.includes("opérations financières")) {
    return "operationsFinancieres";
  }

  return "autres";
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
