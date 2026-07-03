export function formatNumber(value: number): string {
  return new Intl.NumberFormat("fr-FR").format(value);
}

export function formatEuro(value: number): string {
  return `${new Intl.NumberFormat("fr-FR").format(value)} €`;
}

export function formatCompactEuro(value: number): string {
  if (value >= 1_000_000_000) {
    return `${new Intl.NumberFormat("fr-FR", {
      maximumFractionDigits: 1,
    }).format(value / 1_000_000_000)} Md€`;
  }

  if (value >= 1_000_000) {
    return `${new Intl.NumberFormat("fr-FR", {
      maximumFractionDigits: 1,
    }).format(value / 1_000_000)} M€`;
  }

  return formatEuro(value);
}
