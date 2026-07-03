import { thematicReports } from "../data/thematicReports";
import type { ThematicReport } from "../types/thematicReport.types";

export function getThematicReports(): ThematicReport[] {
  return thematicReports;
}

export function getThematicReportByProgrammeCode(
  programmeCode: string,
): ThematicReport | undefined {
  return thematicReports.find((report) => report.programmeCode === programmeCode);
}
