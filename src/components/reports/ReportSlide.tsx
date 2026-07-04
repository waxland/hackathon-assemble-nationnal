"use client";

import type { ReactNode } from "react";
import { Card, Group, Stack, Text, Title } from "@mantine/core";
import { AssetIcon, type AssetIconName } from "@/components/icons/AssetIcon";

export function ReportSlide({
  id,
  title,
  description,
  icon,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  icon?: AssetIconName;
  children: ReactNode;
}) {
  return (
    <Card className="report-slide" id={id}>
      <Stack gap="lg">
        <Group align="flex-start" gap="md" wrap="nowrap">
          {icon ? (
            <AssetIcon className="slide-icon" name={icon} size={58} />
          ) : null}
          <Stack gap={4}>
            <Title order={2}>{title}</Title>
            {description ? <Text c="dimmed">{description}</Text> : null}
          </Stack>
        </Group>
        {children}
      </Stack>
    </Card>
  );
}
