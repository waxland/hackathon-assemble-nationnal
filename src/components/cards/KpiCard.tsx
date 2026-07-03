import { Card, Stack, Text, Title } from "@mantine/core";

export function KpiCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description?: string;
}) {
  return (
    <Card className="surface-card">
      <Stack gap={4}>
        <Text c="dimmed" fw={700} size="sm">
          {label}
        </Text>
        <Title order={3}>{value}</Title>
        {description ? (
          <Text c="dimmed" size="sm">
            {description}
          </Text>
        ) : null}
      </Stack>
    </Card>
  );
}
