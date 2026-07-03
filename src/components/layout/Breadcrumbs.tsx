import Link from "next/link";
import { Breadcrumbs as MantineBreadcrumbs, Text } from "@mantine/core";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <MantineBreadcrumbs aria-label="Fil d'Ariane">
      {items.map((item) =>
        item.href ? (
          <Link href={item.href} key={item.label}>
            {item.label}
          </Link>
        ) : (
          <Text c="dimmed" key={item.label} span>
            {item.label}
          </Text>
        ),
      )}
    </MantineBreadcrumbs>
  );
}
