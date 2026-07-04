"use client";

import type { ReactNode } from "react";
import { BarChart, LineChart } from "@mantine/charts";
import { Badge, Group, List, SimpleGrid, Stack, Table, Text, Title } from "@mantine/core";
import { AssetIcon, type AssetIconName } from "@/components/icons/AssetIcon";
import type { InvestmentProgramme } from "@/data/investments";
import { formatCompactEuro, formatNumber } from "@/lib/format";
import { ReportSlide } from "./ReportSlide";

const formatPercent = (value: number) => `${value}%`;

const programmeIcons: Record<string, AssetIconName> = {
  "421": "school",
  "422": "innovation",
  "423": "factory",
  "424": "nuclear-plant",
  "425": "ecosystem",
};

const reportNavItems: { id: string; label: string; icon: AssetIconName }[] = [
  { id: "vue-generale", label: "Vue générale", icon: "document" },
  { id: "signaux", label: "Signaux", icon: "innovation" },
  { id: "ecosysteme", label: "Écosystème", icon: "companie" },
  { id: "parlement", label: "Parlement", icon: "contract" },
  { id: "sources", label: "Sources", icon: "catalog" },
  { id: "alignement", label: "Alignement", icon: "data-visualization" },
  { id: "synthese", label: "Synthèse", icon: "conclusion" },
];

export function InvestmentReport({ programme }: { programme: InvestmentProgramme }) {
  const report = programme.report;
  const programmeIcon = programmeIcons[programme.programmeCode] ?? "innovation";

  return (
    <div className="report-layout">
      <aside className="report-sidebar">
        <Stack gap="xs">
          {reportNavItems.map(({ id, label, icon }) => (
            <a className="report-nav-link" href={`#${id}`} key={id}>
              <AssetIcon className="report-nav-icon" name={icon} size={24} />
              <span>{label}</span>
            </a>
          ))}
        </Stack>
      </aside>
      <Stack gap="xl">
        <ReportSlide
          description={report.summary}
          id="vue-generale"
          icon={programmeIcon}
          title={`Programme ${programme.programmeCode} - ${report.title}`}
        >
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <Metric label="Budget 2026" value={formatCompactEuro(programme.amount2026)} />
            <Metric label="Lignes budgétaires" value={formatNumber(programme.linesCount)} />
            <Metric label="Mentions parlementaires" value={formatNumber(report.parliament.mentions)} />
          </SimpleGrid>
          <Text>{report.budgetUse}</Text>
          <Group gap="xs">
            {report.keywords.map((keyword) => (
              <Badge color="blueFrance" key={keyword} variant="light">
                {keyword}
              </Badge>
            ))}
          </Group>
          <ChartPanel title="Trajectoire budgétaire mockée">
            <LineChart
              curveType="linear"
              data={report.dataviz.budgetHistory}
              dataKey="year"
              h={220}
              series={[{ name: "budget", label: "Budget", color: "blueFrance.9" }]}
              valueFormatter={formatCompactEuro}
              withDots
            />
          </ChartPanel>
        </ReportSlide>

        <ReportSlide
          description="Lecture rapide des signaux fictifs associés au domaine."
          id="signaux"
          icon="innovation"
          title="Signaux d'innovation"
        >
          <ChartPanel title="Évolution mockée des signaux">
            <LineChart
              curveType="linear"
              data={report.dataviz.signalTimeline}
              dataKey="year"
              h={260}
              series={[
                { name: "patents", label: "Brevets", color: "blueFrance.9" },
                { name: "startups", label: "Startups", color: "greenSignal.9" },
                { name: "parliament", label: "Parlement", color: "grape.6" },
              ]}
              valueFormatter={formatNumber}
              withLegend
              withTooltip
            />
          </ChartPanel>
          <Table.ScrollContainer minWidth={640}>
            <Table striped>
              <Table.Caption>Signaux mockés par année.</Table.Caption>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Année</Table.Th>
                  <Table.Th>Brevets</Table.Th>
                  <Table.Th>Startups</Table.Th>
                  <Table.Th>Parlement</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {report.dataviz.signalTimeline.map((row) => (
                  <Table.Tr key={row.year}>
                    <Table.Td>{row.year}</Table.Td>
                    <Table.Td>{row.patents}</Table.Td>
                    <Table.Td>{row.startups}</Table.Td>
                    <Table.Td>{row.parliament}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </ReportSlide>

        <ReportSlide
          description="Entreprises, emplois, chiffre d'affaires et territoires associés."
          id="ecosysteme"
          icon="companie"
          title="Écosystème économique"
        >
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <Metric label="Entreprises" value={formatNumber(report.ecosystem.companies)} />
            <Metric label="Emplois" value={formatNumber(report.ecosystem.jobs)} />
            <Metric label="CA estimé" value={formatCompactEuro(report.ecosystem.revenue)} />
          </SimpleGrid>
          <Group gap="xs">
            {report.ecosystem.territories.map((territory) => (
              <Badge color="greenSignal" key={territory} variant="light">
                {territory}
              </Badge>
            ))}
          </Group>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <ChartPanel title="Secteurs associés">
              <BarChart
                data={report.dataviz.sectorDistribution}
                dataKey="sector"
                h={280}
                maxBarWidth={36}
                series={[
                  { name: "companies", label: "Entreprises", color: "blueFrance.9" },
                  { name: "patents", label: "Brevets", color: "greenSignal.9" },
                ]}
                valueFormatter={formatNumber}
                withLegend
                withTooltip
              />
            </ChartPanel>
            <ChartPanel title="Répartition territoriale">
              <BarChart
                data={report.dataviz.territorialDistribution}
                dataKey="territory"
                h={280}
                maxBarWidth={36}
                series={[{ name: "budgetShare", label: "Part budget mockée", color: "greenSignal.9" }]}
                valueFormatter={formatPercent}
                withTooltip
              />
            </ChartPanel>
          </SimpleGrid>
          <Table.ScrollContainer minWidth={640}>
            <Table striped>
              <Table.Caption>Startups fictives représentatives du programme.</Table.Caption>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Nom</Table.Th>
                  <Table.Th>Ville</Table.Th>
                  <Table.Th>Maturité</Table.Th>
                  <Table.Th>Emplois</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {report.startups.map((startup) => (
                  <Table.Tr key={startup.name}>
                    <Table.Td>{startup.name}</Table.Td>
                    <Table.Td>{startup.city}</Table.Td>
                    <Table.Td>{startup.maturity}</Table.Td>
                    <Table.Td>{startup.jobs}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </ReportSlide>

        <ReportSlide
          description="Attention parlementaire future à connecter à Assemblée, Sénat et Tricoteuses."
          id="parlement"
          icon="contract"
          title="Données parlementaires"
        >
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Metric label="Mentions" value={formatNumber(report.parliament.mentions)} />
            <Metric label="Tendance" value={report.parliament.trend} />
          </SimpleGrid>
          <Group gap="xs">
            {report.parliament.topics.map((topic) => (
              <Badge color="blueFrance" key={topic} variant="light">
                {topic}
              </Badge>
            ))}
          </Group>
          <ChartPanel title="Sources parlementaires mockées">
            <BarChart
              data={report.dataviz.parliamentarySources}
              dataKey="source"
              h={240}
              maxBarWidth={44}
              series={[{ name: "mentions", label: "Mentions", color: "blueFrance.9" }]}
              valueFormatter={formatNumber}
              withTooltip
            />
          </ChartPanel>
        </ReportSlide>

        <ReportSlide
          description="Score mocké de couverture des sources à brancher pour passer du prototype à une donnée réelle."
          id="sources"
          icon="catalog"
          title="Sources à connecter"
        >
          <ChartPanel title="Couverture dataset estimée">
            <BarChart
              data={report.dataviz.sourceCoverage}
              dataKey="source"
              h={320}
              orientation="vertical"
              series={[{ name: "coverageScore", label: "Couverture", color: "blueFrance.9" }]}
              valueFormatter={formatPercent}
              withTooltip
            />
          </ChartPanel>
        </ReportSlide>

        <ReportSlide
          description="Score synthétique fictif pour comparer budget, écosystème, brevets, territoires et attention parlementaire."
          id="alignement"
          icon="data-visualization"
          title="Alignement des signaux"
        >
          <ChartPanel title="Score d'alignement mocké">
            <BarChart
              data={report.dataviz.alignmentScores}
              dataKey="dimension"
              h={280}
              maxBarWidth={44}
              series={[{ name: "score", label: "Score", color: "greenSignal.9" }]}
              valueFormatter={formatPercent}
              withTooltip
            />
          </ChartPanel>
        </ReportSlide>

        <ReportSlide id="synthese" icon="conclusion" title="Synthèse">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Stack>
              <Title order={3}>Points forts</Title>
              <List>
                {report.strengths.map((strength) => (
                  <List.Item key={strength}>{strength}</List.Item>
                ))}
              </List>
            </Stack>
            <Stack>
              <Title order={3}>Questions ouvertes</Title>
              <List>
                {report.openQuestions.map((question) => (
                  <List.Item key={question}>{question}</List.Item>
                ))}
              </List>
            </Stack>
          </SimpleGrid>
        </ReportSlide>
      </Stack>
    </div>
  );
}

function ChartPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Stack className="chart-panel" gap="sm">
      <Text c="dimmed" fw={700} size="sm">
        {title}
      </Text>
      {children}
    </Stack>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric-box">
      <Text c="dimmed" fw={700} size="sm">
        {label}
      </Text>
      <Title order={3}>{value}</Title>
    </div>
  );
}
