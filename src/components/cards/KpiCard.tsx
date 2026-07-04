import { Card, Group, Stack, Text, Title } from "@mantine/core";
import { AssetIcon, type AssetIconName } from "@/components/icons/AssetIcon";

export function KpiCard({
  label,
  value,
  description,
  icon,
}: {
  label: string;
  value: string;
  description?: string;
  icon?: AssetIconName;
}) {
  return (
    <Card className="surface-card">
      <Stack gap="sm">
        <Group align="flex-start" justify="space-between" wrap="nowrap">
          <Stack gap={4}>
            <Text c="dimmed" fw={700} size="sm">
              {label}
            </Text>
            <Title order={3}>{value}</Title>
          </Stack>
          {icon ? (
            <AssetIcon className="card-icon" name={icon} size={44} />
          ) : null}
        </Group>
        {description ? (
          <Text c="dimmed" size="sm">
            {description}
          </Text>
        ) : null}
      </Stack>
    </Card>
  );
}
