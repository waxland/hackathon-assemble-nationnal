import { KpiCard } from "@/components/cards/KpiCard";
import { getProgrammes, getTotalBudget } from "@/data/investments";
import { formatCompactEuro, formatNumber } from "@/lib/format";
import { routes } from "@/lib/routes";
import { Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import {
  IconArrowRight,
  IconChartPie,
  IconFileAnalytics,
  IconSearch,
} from "@tabler/icons-react";
import Link from "next/link";

export default function HomePage() {
  const programmes = getProgrammes();

  return (
    <Stack gap="4rem">
      <section className="hero-section">
        <Stack gap="lg" maw={860}>
          <Text c="blueFrance.9" fw={800} size="sm" tt="uppercase">
            Hackathon Assemblée Nationale 2026
          </Text>
          <Title order={1}>
            Explorer les investissements publics à travers les signaux réels de
            l'innovation.
          </Title>
          <Text c="dimmed" size="xl">
            Minerve.fr relie les lignes budgétaires France 2030 à des signaux
            mockés mais structurés : startups, brevets, emplois, chiffre
            d'affaires, territoires et mentions parlementaires.
          </Text>
          <Group>
            <Link className="primary-button" href={routes.investments}>
              Voir les investissements
              <IconArrowRight size={18} />
            </Link>
            <Link
              className="secondary-button"
              href={routes.investmentReport("424")}
            >
              Ouvrir un rapport
            </Link>
          </Group>
        </Stack>
      </section>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        <KpiCard
          description="Somme mockée des lignes 2026 intégrées au POC."
          label="Budget 2026"
          value={formatCompactEuro(getTotalBudget("2026"))}
        />
        <KpiCard
          description="Types d'investissement reliés à un rapport slide."
          label="Programmes"
          value={formatNumber(programmes.length)}
        />
        <KpiCard
          description="Données fictives à remplacer par API, CSV et MCP."
          label="Mode"
          value="Mock"
        />
      </SimpleGrid>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        {[
          {
            icon: <IconChartPie size={28} />,
            title: "Comprendre la répartition",
            text: "Un camembert donne la part relative de chaque programme France 2030.",
          },
          {
            icon: <IconSearch size={28} />,
            title: "Relier les signaux",
            text: "Chaque action est rapprochée de signaux économiques, scientifiques et parlementaires.",
          },
          {
            icon: <IconFileAnalytics size={28} />,
            title: "Raconter un rapport",
            text: "Une page par programme présente l'analyse comme une suite de slides lisibles.",
          },
        ].map((item) => (
          <div className="feature-card" key={item.title}>
            {item.icon}
            <Title order={3}>{item.title}</Title>
            <Text c="dimmed">{item.text}</Text>
          </div>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
