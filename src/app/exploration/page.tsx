"use client";

import { ScatterChart } from "@mantine/charts";
import {
  Badge,
  Container,
  Group,
  MultiSelect,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";

const MOCK_DATA = [
  {
    color: "blue.5",
    name: "Hydrogène Vert",
    data: [
      { x: 1, y: 12 },
      { x: 2, y: 18 },
      { x: 3, y: 15 },
      { x: 4, y: 25 },
      { x: 5, y: 35 },
      { x: 6, y: 40 },
    ],
  },
  {
    color: "teal.5",
    name: "Quantique",
    data: [
      { x: 1, y: 5 },
      { x: 2, y: 8 },
      { x: 3, y: 12 },
      { x: 4, y: 10 },
      { x: 5, y: 15 },
      { x: 6, y: 22 },
    ],
  },
  {
    color: "pink.5",
    name: "Intelligence Artificielle",
    data: [
      { x: 1, y: 30 },
      { x: 2, y: 45 },
      { x: 3, y: 55 },
      { x: 4, y: 65 },
      { x: 5, y: 90 },
      { x: 6, y: 110 },
    ],
  },
  {
    color: "violet.5",
    name: "Biothérapies",
    data: [
      { x: 1, y: 20 },
      { x: 2, y: 25 },
      { x: 3, y: 22 },
      { x: 4, y: 30 },
      { x: 5, y: 28 },
      { x: 6, y: 35 },
    ],
  },
];

const ALL_KEYWORDS = MOCK_DATA.map((d) => d.name);

export default function ExplorationPage() {
  const [selectedKeywords, setSelectedKeywords] =
    useState<string[]>(ALL_KEYWORDS);

  const filteredData = MOCK_DATA.filter((d) =>
    selectedKeywords.includes(d.name),
  );

  return (
    <Container py="xl" size="xl">
      <Title order={1} mb="xs">
        Exploration interactive
      </Title>
      <Text c="dimmed" size="lg" mb="xl">
        Analysez la fréquence des mentions des mots-clés des Stratégies
        Nationales d'Accélération (SNA) dans les documents parlementaires au fil
        du temps (Timeline en mois).
      </Text>

      <SimpleGrid cols={{ base: 1, md: 4 }} spacing="lg">
        {/* "Sidebar" style Streamlit */}
        <Paper p="md" radius="md" withBorder>
          <Text fw={700} mb="md">
            Filtres de recherche
          </Text>
          <MultiSelect
            label="Mots-clés SNA"
            placeholder="Sélectionnez des thématiques"
            data={ALL_KEYWORDS}
            value={selectedKeywords}
            onChange={setSelectedKeywords}
            clearable
            mb="xl"
          />
          <Text fw={700} size="sm" mb="xs">
            Sources activées
          </Text>
          <Group gap="xs">
            <Badge color="blue" variant="light">
              Questions au Gouvernement
            </Badge>
            <Badge color="indigo" variant="light">
              Dossiers Législatifs
            </Badge>
            <Badge color="cyan" variant="light">
              Comptes rendus
            </Badge>
          </Group>
        </Paper>

        {/* Zone de graphique */}
        <Paper p="xl" radius="md" withBorder style={{ gridColumn: "span 3" }}>
          <Title order={3} mb="xl">
            Nuage de points : Évolution de l'attention parlementaire
          </Title>
          {filteredData.length > 0 ? (
            <ScatterChart
              h={400}
              data={filteredData}
              dataKey={{ x: "x", y: "y" }}
              xAxisLabel="Mois de l'année (1 à 6)"
              yAxisLabel="Nombre de mentions (Sénat & Assemblée)"
              tickLine="y"
              gridAxis="xy"
            />
          ) : (
            <Text c="dimmed" ta="center" py="xl">
              Veuillez sélectionner au moins un mot-clé.
            </Text>
          )}
        </Paper>
      </SimpleGrid>
    </Container>
  );
}
