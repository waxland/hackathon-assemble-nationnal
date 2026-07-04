import { Container, Paper, Stack, Title, Typography } from "@mantine/core";
import fs from "fs/promises";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function PresentationPage() {
  const filePath = path.join(process.cwd(), "PRESENTATION.md");
  const content = await fs.readFile(filePath, "utf8");

  return (
    <Container py="xl" size="md">
      <Stack gap="xl">
        <Title order={1}>Pitch Deck (Format Texte)</Title>
        <Paper p="xl" radius="md" shadow="sm" withBorder>
          <Typography>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </Typography>
        </Paper>
      </Stack>
    </Container>
  );
}
