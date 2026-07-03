import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Stack, Text, Title } from "@mantine/core";
import { InvestmentReport } from "@/components/reports/InvestmentReport";
import { getProgramme, getProgrammes } from "@/data/investments";
import { formatCompactEuro } from "@/lib/format";

export function generateStaticParams() {
  return getProgrammes().map((programme) => ({
    programmeCode: programme.programmeCode,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ programmeCode: string }>;
}): Promise<Metadata> {
  const { programmeCode } = await params;
  const programme = getProgramme(programmeCode);

  return {
    title: programme
      ? `${programme.programmeCode} - ${programme.report.title} | Minerve.fr`
      : "Rapport | Minerve.fr",
  };
}

export default async function InvestmentReportPage({
  params,
}: {
  params: Promise<{ programmeCode: string }>;
}) {
  const { programmeCode } = await params;
  const programme = getProgramme(programmeCode);

  if (!programme) {
    notFound();
  }

  return (
    <Stack gap="3rem">
      <section className="page-heading">
        <Text c="blueFrance.9" fw={800} size="sm" tt="uppercase">
          Programme {programme.programmeCode} - {formatCompactEuro(programme.amount2026)}
        </Text>
        <Title order={1}>{programme.report.title}</Title>
        <Text c="dimmed" size="lg">
          {programme.report.summary}
        </Text>
      </section>
      <InvestmentReport programme={programme} />
    </Stack>
  );
}
