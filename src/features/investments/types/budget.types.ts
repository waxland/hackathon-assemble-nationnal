export type BudgetYear = "2024" | "2025" | "2026";

export type BudgetLine = {
  id: string;
  budgetType: string;
  missionCode: string;
  missionName: string;
  programmeCode: string;
  programmeName: string;
  expenseCategoryCode: string;
  expenseCategoryName: string;
  amount2024: number;
  amount2025: number;
  amount2026: number;
  ministryCode: string;
  ministryName: string;
};

export type BudgetDistributionItem = {
  name: string;
  value: number;
  color?: string;
};

export type BudgetProgrammeSummary = {
  programmeCode: string;
  programmeName: string;
  amount: number;
};

export type BudgetExpenseCategorySummary = {
  expenseCategoryCode: string;
  expenseCategoryName: string;
  amount: number;
};

export type BudgetLineTableRow = {
  id: string;
  programme: string;
  category: string;
  amount: string;
  ministry: string;
};
