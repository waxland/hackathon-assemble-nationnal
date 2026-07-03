import { mainNavigationItems } from "@/lib/navigation/navigationItems";

export function getMainNavigation(pathname: string) {
  return mainNavigationItems.map((item) => ({
    text: item.label,
    linkProps: { href: item.href },
    isActive:
      item.href === "/"
        ? pathname === item.href
        : pathname === item.href || pathname.startsWith(`${item.href}/`),
  }));
}
