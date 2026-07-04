"use client";

import { Card, Group, Stack, Text, Title } from "@mantine/core";
import { PieChart } from "@mantine/charts";
import { AssetIcon } from "@/components/icons/AssetIcon";
import { getPieData } from "@/data/investments";
import { formatCompactEuro } from "@/lib/format";

export function BudgetPie() {
  const data = getPieData();

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
        <PieChart
          data={data}
          h={320}
          labelsPosition="outside"
          mx="auto"
          size={260}
          tooltipDataSource="segment"
          valueFormatter={formatCompactEuro}
          withLabelsLine
          withTooltip
        />
        <Stack gap="xs">
          {data.map((item) => (
            <GroupLegend color={item.color} key={item.name} label={item.name} value={item.value} />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}

function GroupLegend({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: number;
}) {
  return (
    <div className="legend-row">
      <span className="legend-swatch" style={{ backgroundColor: color }} />
      <Text size="sm">{label}</Text>
      <Text c="dimmed" fw={700} size="sm">
        {formatCompactEuro(value)}
      </Text>
    </div>
  );
}
