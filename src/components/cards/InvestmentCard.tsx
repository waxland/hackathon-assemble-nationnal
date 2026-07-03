import Link from "next/link";
import { Badge, Card, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import type { InvestmentProgramme } from "@/data/investments";
import { formatCompactEuro } from "@/lib/format";
import { routes } from "@/lib/routes";

export function InvestmentCard({ programme }: { programme: InvestmentProgramme }) {
  return (
    <Card className="surface-card">
      <Stack gap="md">
        <Group justify="space-between" wrap="nowrap">
          <Badge color="blueFrance" variant="light">
            Programme {programme.programmeCode}
          </Badge>
          <Text c="blueFrance.9" fw={800}>
            {formatCompactEuro(programme.amount2026)}
          </Text>
        </Group>
        <Stack gap={4}>
          <Title order={3}>{programme.programmeName}</Title>
          <Text c="dimmed">{programme.report.summary}</Text>
        </Stack>
        <Group justify="space-between">
          <Text c="dimmed" size="sm">
            {programme.linesCount} ligne{programme.linesCount > 1 ? "s" : ""} budgétaire{programme.linesCount > 1 ? "s" : ""}
          </Text>
          <Link
            className="small-link-button"
            href={routes.investmentReport(programme.programmeCode)}
          >
            Voir le rapport
            <IconArrowRight size={16} />
          </Link>
        </Group>
      </Stack>
    </Card>
  );
}
