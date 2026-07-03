"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor, Container, Group, Text } from "@mantine/core";
import { routes } from "@/lib/routes";

const navItems = [
  { label: "Accueil", href: routes.home },
  { label: "Investissements", href: routes.investments },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Container size="xl">
        <Group justify="space-between" py="md">
          <Link className="brand-link" href={routes.home}>
            <Text component="span" fw={800} size="lg">
              Minerve.fr
            </Text>
            <Text c="dimmed" component="span" size="sm">
              France 2030, signaux d'innovation
            </Text>
          </Link>
          <Group component="nav" gap="lg">
            {navItems.map((item) => {
              const isActive =
                item.href === routes.home
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Anchor
                  className={isActive ? "nav-link nav-link-active" : "nav-link"}
                  component={Link}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Anchor>
              );
            })}
          </Group>
        </Group>
      </Container>
    </header>
  );
}
