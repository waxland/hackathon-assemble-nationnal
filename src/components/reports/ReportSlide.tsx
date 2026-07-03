"use client";

import type { ReactNode } from "react";
import { Card, Stack, Text, Title } from "@mantine/core";

export function ReportSlide({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <Card className="report-slide" id={id}>
      <Stack gap="lg">
        <Stack gap={4}>
          <Title order={2}>{title}</Title>
          {description ? <Text c="dimmed">{description}</Text> : null}
        </Stack>
        {children}
      </Stack>
    </Card>
  );
}
