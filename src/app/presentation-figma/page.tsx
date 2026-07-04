import { Center, Container, Stack, Title } from "@mantine/core";

export default function PresentationFigmaPage() {
  return (
    <Container py="xl" size="xl">
      <Stack gap="xl">
        <Title order={1}>Pitch Deck</Title>
        <Center>
          <iframe
            allowFullScreen
            height="600"
            src="https://embed.figma.com/slides/jd2c6eDCAJqq2uYTFdysbN/Hackathon-Archive-Nationnal---Minerve?node-id=4-472&embed-host=share"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              maxWidth: "1000px",
              width: "100%",
            }}
            title="Présentation Figma Minerve"
          />
        </Center>
      </Stack>
    </Container>
  );
}
