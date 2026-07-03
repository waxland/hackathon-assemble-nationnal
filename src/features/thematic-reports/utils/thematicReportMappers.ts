import type { ThematicReport } from "../types/thematicReport.types";

export type ReportTimelineChartRow = {
  year: string;
  patents: number;
  startups: number;
  scientificPlanning: number;
  parliamentaryMentions: number;
};

export function mapReportTimelineToChartData(
  report: ThematicReport,
): ReportTimelineChartRow[] {
  return report.timeline.map((item) => ({
    year: String(item.year),
    patents: item.patents,
    startups: item.startups,
    scientificPlanning: item.scientificPlanning,
    parliamentaryMentions: item.parliamentaryMentions,
  }));
}

export function getReportEconomicTotals(report: ThematicReport) {
  return report.nafCodes.reduce(
    (totals, item) => ({
      companies: totals.companies + item.companiesCount,
      employees: totals.employees + item.employeesCount,
      revenue: totals.revenue + item.totalRevenue,
    }),
    { companies: 0, employees: 0, revenue: 0 },
  );
}
