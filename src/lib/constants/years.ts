import type { BudgetYear } from "@/features/investments/types/budget.types";

export const budgetYears: BudgetYear[] = ["2024", "2025", "2026"];

export function isBudgetYear(value: string | undefined): value is BudgetYear {
  return budgetYears.some((year) => year === value);
}
