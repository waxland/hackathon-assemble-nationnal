"use client";

import { Badge, Group, List, SimpleGrid, Stack, Table, Text, Title } from "@mantine/core";
import type { InvestmentProgramme } from "@/data/investments";
import { formatCompactEuro, formatNumber } from "@/lib/format";
import { ReportSlide } from "./ReportSlide";

export function InvestmentReport({ programme }: { programme: InvestmentProgramme }) {
  const report = programme.report;

  return (
    <div className="report-layout">
      <aside className="report-sidebar">
        <Stack gap="xs">
          {[
            ["vue-generale", "Vue générale"],
            ["signaux", "Signaux"],
            ["ecosysteme", "Écosystème"],
            ["parlement", "Parlement"],
            ["synthese", "Synthèse"],
          ].map(([id, label]) => (
            <a className="report-nav-link" href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </Stack>
      </aside>
      <Stack gap="xl">
        <ReportSlide
          description={report.summary}
          id="vue-generale"
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
        </ReportSlide>

        <ReportSlide
          description="Lecture rapide des signaux fictifs associés au domaine."
          id="signaux"
          title="Signaux d'innovation"
        >
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
                {report.timeline.map((row) => (
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
        </ReportSlide>

        <ReportSlide id="synthese" title="Synthèse">
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
