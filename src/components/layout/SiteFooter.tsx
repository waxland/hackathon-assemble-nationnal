import { Container, Group, Stack, Text } from "@mantine/core";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container size="xl">
        <Group align="flex-start" justify="space-between" py="lg">
          <Stack gap={4}>
            <Text fw={700}>Minerve</Text>
            <Text c="dimmed" size="sm">
              Hackathon Assemblée Nationale 2026 — Thématique : "France 2030 – Analyse prospective des Stratégies Nationales d’Accélération (SNA)".
            </Text>
          </Stack>
          <Group align="flex-start" gap="sm" maw={460} wrap="nowrap">
            <Stack align="flex-start" gap={6}>
              <a
                className="small-link-button"
                href="https://minerve.onrender.com"
                rel="noreferrer"
                target="_blank"
              >
                Ouvrir Minerve DataSet
              </a>
            </Stack>
          </Group>
        </Group>
      </Container>
    </footer>
  );
}
