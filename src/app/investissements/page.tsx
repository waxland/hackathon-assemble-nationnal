import type { Metadata } from "next";
import { SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { BudgetPie } from "@/components/dataviz/BudgetPie";
import { InvestmentCard } from "@/components/cards/InvestmentCard";
import { KpiCard } from "@/components/cards/KpiCard";
import { getProgrammes, getTotalBudget } from "@/data/investments";
import { formatCompactEuro, formatNumber } from "@/lib/format";

export const metadata: Metadata = {
  title: "Investissements | Minerve",
};

export default function InvestmentsPage() {
  const programmes = getProgrammes();

  return (
    <Stack gap="3rem">
      <section className="page-heading">
        <Text c="blueFrance.9" fw={800} size="sm" tt="uppercase">
          Investissements France 2030
        </Text>
        <Title order={1}>Répartition et rapports par type d'investissement</Title>
        <Text c="dimmed" size="lg">
          Cette vue part des lignes budgétaires et ouvre un rapport slide pour
          chaque programme. Les données d'écosystème sont mockées jusqu'au
          branchement des sources réelles.
        </Text>
      </section>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        <KpiCard
          icon="money"
          label="Budget total 2026"
          value={formatCompactEuro(getTotalBudget("2026"))}
        />
        <KpiCard
          icon="binders"
          label="Programmes"
          value={formatNumber(programmes.length)}
        />
        <KpiCard
          icon="catalog"
          label="Source actuelle"
          value="Mock France 2030"
        />
      </SimpleGrid>

      <BudgetPie />

      <section>
        <Stack gap="lg">
          <div>
            <Title order={2}>Types d'investissement</Title>
            <Text c="dimmed">
              Chaque carte mène à un rapport structuré en slides.
            </Text>
          </div>
          <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
            {programmes.map((programme) => (
              <InvestmentCard key={programme.programmeCode} programme={programme} />
            ))}
          </SimpleGrid>
        </Stack>
      </section>
    </Stack>
  );
}
