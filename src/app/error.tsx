"use client";

import Link from "next/link";
import { Button, Stack, Text, Title } from "@mantine/core";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <Stack gap="lg">
      <Title order={1}>Une erreur est survenue</Title>
      <Text c="dimmed">
        Le prototype n'a pas pu afficher cette page. Vous pouvez réessayer ou
        revenir à l'accueil.
      </Text>
      <Button.Group>
        <Button onClick={reset}>Réessayer</Button>
        <Button component={Link} href="/" variant="outline">
          Accueil
        </Button>
      </Button.Group>
    </Stack>
  );
}
