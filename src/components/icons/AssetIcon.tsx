export type AssetIconName =
  | "binders"
  | "catalog"
  | "companie"
  | "conclusion"
  | "contract"
  | "data-visualization"
  | "document"
  | "document-search"
  | "ecosystem"
  | "environment"
  | "factory"
  | "innovation"
  | "internet"
  | "location-france"
  | "map"
  | "money"
  | "nuclear-plant"
  | "school"
  | "search";

export function AssetIcon({
  name,
  size = 48,
  alt,
  className,
}: {
  name: AssetIconName;
  size?: number;
  alt?: string;
  className?: string;
}) {
  return (
    <img
      alt={alt ?? ""}
      aria-hidden={alt ? undefined : "true"}
      className={className ? `asset-icon ${className}` : "asset-icon"}
      height={size}
      loading="lazy"
      src={`/icons/${name}.svg`}
      width={size}
    />
  );
}
