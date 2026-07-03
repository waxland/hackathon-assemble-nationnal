import { formatCompactEuro } from "@/lib/formatters/moneyFormatters";
import type {
  BudgetDistributionItem,
  BudgetExpenseCategorySummary,
  BudgetLine,
  BudgetLineTableRow,
  BudgetProgrammeSummary,
  BudgetYear,
} from "../types/budget.types";
import { getBudgetAmountByYear } from "./budgetAggregations";

const programmeColors = ["#000091", "#18753c", "#d64f7f", "#6a6af4", "#8d533e"];
const expenseColors = ["#000091", "#18753c", "#ce614a", "#7d4e5b"];

export function mapBudgetProgrammeToPieChartData(
  programmes: BudgetProgrammeSummary[],
): BudgetDistributionItem[] {
  return programmes.map((programme, index) => ({
    name: `${programme.programmeCode} - ${programme.programmeName}`,
    value: programme.amount,
    color: programmeColors[index % programmeColors.length],
  }));
}

export function mapBudgetExpenseCategoryToPieChartData(
  categories: BudgetExpenseCategorySummary[],
): BudgetDistributionItem[] {
  return categories.map((category, index) => ({
    name: category.expenseCategoryName,
    value: category.amount,
    color: expenseColors[index % expenseColors.length],
  }));
}

export function mapBudgetLineToTableRow(
  line: BudgetLine,
  year: BudgetYear,
): BudgetLineTableRow {
  return {
    id: line.id,
    programme: `${line.programmeCode} - ${line.programmeName}`,
    category: `${line.expenseCategoryCode} - ${line.expenseCategoryName}`,
    amount: formatCompactEuro(getBudgetAmountByYear(line, year)),
    ministry: line.ministryName,
  };
}
