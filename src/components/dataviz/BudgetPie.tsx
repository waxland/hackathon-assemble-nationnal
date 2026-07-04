"use client";

import { BarChart, PieChart } from "@mantine/charts";
import { Card, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { AssetIcon } from "@/components/icons/AssetIcon";
import {
  getPieData,
  getProgrammeExpenseCategoryRows,
  getTotalBudget,
  type ProgrammePieData,
} from "@/data/investments";
import { formatCompactEuro } from "@/lib/format";

const expenseCategorySeries = [
  { name: "fonctionnement", label: "Fonctionnement", color: "blueFrance.9" },
  { name: "intervention", label: "Intervention", color: "greenSignal.9" },
  { name: "operationsFinancieres", label: "Opérations financières", color: "grape.6" },
  { name: "autres", label: "Autres", color: "gray.6" },
] as const;

export function BudgetPie() {
  const data = getPieData("2026");
  const totalBudget = getTotalBudget("2026");
  const totalLines = data.reduce((total, item) => total + item.linesCount, 0);
  const expenseRows = getProgrammeExpenseCategoryRows("2026");
  const visibleExpenseSeries = expenseCategorySeries.filter((series) =>
    expenseRows.some((row) => row[series.name] > 0),
  );

  return (
    <Card className="surface-card">
      <Stack gap="md">
        <Group align="flex-start" gap="md" wrap="nowrap">
          <AssetIcon
            className="section-icon"
            name="data-visualization"
            size={58}
          />
          <Stack gap={4}>
            <Title order={2}>Répartition 2026</Title>
            <Text c="dimmed">
              Camembert des investissements France 2030 par programme budgétaire.
            </Text>
          </Stack>
        </Group>

        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xl">
          <Stack className="budget-chart-panel" gap="sm">
            <PieChart
              data={data}
              h={320}
              labelsPosition="outside"
              labelsType="percent"
              mx="auto"
              size={260}
              tooltipDataSource="segment"
              tooltipProps={{
                allowEscapeViewBox: { x: true, y: true },
                wrapperStyle: { zIndex: 60 },
              }}
              valueFormatter={formatCompactEuro}
              withLabels
              withLabelsLine
              withTooltip
            />
            <Text c="dimmed" size="sm" ta="center">
              Le survol affiche le segment détaillé ; les parts restent visibles
              dans la synthèse à droite.
            </Text>
          </Stack>

          <Stack className="budget-summary-panel" gap="md">
            <Stack gap={2}>
              <Text c="dimmed" fw={700} size="sm">
                Total représenté
              </Text>
              <Title order={3}>{formatCompactEuro(totalBudget)}</Title>
              <Text c="dimmed" size="sm">
                {data.length} programmes budgétaires · {totalLines} lignes
                d'investissement 2026.
              </Text>
            </Stack>
            <Stack gap="xs">
              {data.map((item) => (
                <GroupLegend item={item} key={item.name} />
              ))}
            </Stack>
          </Stack>
        </SimpleGrid>

        <Stack className="chart-panel" gap="md">
          <Stack gap={4}>
            <Title order={3}>Sous-découpage par nature de dépense</Title>
            <Text c="dimmed" size="sm">
              Chaque barre reprend un programme et détaille la part des lignes
              de fonctionnement, d'intervention ou d'opérations financières.
            </Text>
          </Stack>
          <BarChart
            data={expenseRows}
            dataKey="programme"
            h={320}
            maxBarWidth={34}
            orientation="vertical"
            series={visibleExpenseSeries}
            tooltipProps={{
              allowEscapeViewBox: { x: true, y: true },
              wrapperStyle: { zIndex: 60 },
            }}
            type="stacked"
            valueFormatter={formatCompactEuro}
            withLegend
            withTooltip
          />
        </Stack>
      </Stack>
    </Card>
  );
}

function GroupLegend({ item }: { item: ProgrammePieData }) {
  return (
    <div className="budget-legend-row">
      <span className="legend-swatch" style={{ backgroundColor: item.color }} />
      <Stack gap={2}>
        <Text fw={700} size="sm">
          {item.programmeCode} - {item.programmeName}
        </Text>
        <Text c="dimmed" size="xs">
          {formatPercent(item.share)} du total · {item.linesCount} ligne
          {item.linesCount > 1 ? "s" : ""} budgétaire
          {item.linesCount > 1 ? "s" : ""}
        </Text>
      </Stack>
      <Text c="blueFrance.9" fw={800} size="sm">
        {formatCompactEuro(item.value)}
      </Text>
    </div>
  );
}

function formatPercent(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 1,
    style: "percent",
  }).format(value);
}
