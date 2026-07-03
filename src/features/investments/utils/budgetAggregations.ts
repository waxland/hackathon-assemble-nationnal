import type {
  BudgetExpenseCategorySummary,
  BudgetLine,
  BudgetProgrammeSummary,
  BudgetYear,
} from "../types/budget.types";

export function getBudgetAmountByYear(
  line: BudgetLine,
  year: BudgetYear,
): number {
  switch (year) {
    case "2024":
      return line.amount2024;
    case "2025":
      return line.amount2025;
    case "2026":
      return line.amount2026;
  }
}

export function getTotalBudget(lines: BudgetLine[], year: BudgetYear): number {
  return lines.reduce((total, line) => total + getBudgetAmountByYear(line, year), 0);
}

export function groupBudgetByProgramme(
  lines: BudgetLine[],
  year: BudgetYear,
): BudgetProgrammeSummary[] {
  const grouped = new Map<string, BudgetProgrammeSummary>();

  lines.forEach((line) => {
    const current = grouped.get(line.programmeCode);
    const amount = getBudgetAmountByYear(line, year);

    grouped.set(line.programmeCode, {
      programmeCode: line.programmeCode,
      programmeName: line.programmeName,
      amount: (current?.amount ?? 0) + amount,
    });
  });

  return Array.from(grouped.values()).sort((left, right) => right.amount - left.amount);
}

export function groupBudgetByExpenseCategory(
  lines: BudgetLine[],
  year: BudgetYear,
): BudgetExpenseCategorySummary[] {
  const grouped = new Map<string, BudgetExpenseCategorySummary>();

  lines.forEach((line) => {
    const current = grouped.get(line.expenseCategoryCode);
    const amount = getBudgetAmountByYear(line, year);

    grouped.set(line.expenseCategoryCode, {
      expenseCategoryCode: line.expenseCategoryCode,
      expenseCategoryName: line.expenseCategoryName,
      amount: (current?.amount ?? 0) + amount,
    });
  });

  return Array.from(grouped.values()).sort((left, right) => right.amount - left.amount);
}

export function getUniqueProgrammes(
  lines: BudgetLine[],
): {
  programmeCode: string;
  programmeName: string;
}[] {
  const programmes = new Map<string, string>();

  lines.forEach((line) => {
    programmes.set(line.programmeCode, line.programmeName);
  });

  return Array.from(programmes.entries())
    .map(([programmeCode, programmeName]) => ({ programmeCode, programmeName }))
    .sort((left, right) => left.programmeCode.localeCompare(right.programmeCode));
}

export function getProgrammeBudget(
  lines: BudgetLine[],
  programmeCode: string,
  year: BudgetYear,
): number {
  return lines
    .filter((line) => line.programmeCode === programmeCode)
    .reduce((total, line) => total + getBudgetAmountByYear(line, year), 0);
}

export function getBudgetLinesByProgramme(
  lines: BudgetLine[],
  programmeCode: string,
): BudgetLine[] {
  return lines.filter((line) => line.programmeCode === programmeCode);
}
