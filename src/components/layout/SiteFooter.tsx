import { Container, Group, Text } from "@mantine/core";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container size="xl">
        <Group justify="space-between" py="lg">
          <Text fw={700}>Minerve.fr</Text>
          <Text c="dimmed" size="sm">
            Prototype mocké pour explorer France 2030 et les signaux d'innovation.
          </Text>
        </Group>
      </Container>
    </footer>
  );
}
