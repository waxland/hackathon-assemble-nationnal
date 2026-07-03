import Link from "next/link";
import { Stack, Text, Title } from "@mantine/core";

export default function NotFound() {
  return (
    <Stack gap="lg">
      <Title order={1}>Page introuvable</Title>
      <Text c="dimmed">
        La page demandée n'existe pas dans le prototype Minerve.fr.
      </Text>
      <Link className="primary-button" href="/">
        Retour à l'accueil
      </Link>
    </Stack>
  );
}
