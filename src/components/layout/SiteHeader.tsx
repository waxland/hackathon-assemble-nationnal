"use client";

import { routes } from "@/lib/routes";
import { Anchor, Container, Group, Text } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
            <img
              alt=""
              aria-hidden="true"
              className="brand-icon"
              height={44}
              src="/icon-minerve.png"
              width={44}
            />
            <span className="brand-copy">
              <Text component="span" fw={800} size="lg">
                Minerve
              </Text>
              <Text c="dimmed" component="span" size="sm">
                Analyse prospective des SNA
              </Text>
            </span>
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
                  underline="never"
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
