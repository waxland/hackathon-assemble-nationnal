# AGENTS.md - Règles projet Minerve.fr

## Mission produit

Minerve.fr est un POC sobre, institutionnel, inspiré de `sites.beta.gouv.fr`.

Le produit doit expliquer les investissements France 2030 et les relier à des signaux d'innovation mockés :

- budget par programme ;
- répartition des investissements ;
- startups et entreprises ;
- brevets ;
- emplois ;
- chiffre d'affaires ;
- signaux territoriaux ;
- attention parlementaire.

Si une consigne mentionne "France Connect" dans ce contexte, l'interpréter comme "France 2030", sauf demande explicite d'authentification FranceConnect.

## Périmètre applicatif

Garder uniquement les routes utiles au POC :

- `/` : landing page de présentation.
- `/investissements` : liste des investissements France 2030 + camembert de répartition.
- `/investissements/[programmeCode]` : rapport slide par programme d'investissement.

Ne pas recréer de pages annexes comme aide, CGU, stats, accessibilité, méthodologie séparée, données séparées, playground, tests de template, etc., sauf demande explicite.

## Architecture attendue

Garder une architecture simple :

```txt
src/
  app/
    page.tsx
    investissements/
      page.tsx
      [programmeCode]/page.tsx
  components/
    cards/
    dataviz/
    layout/
    reports/
  data/
    investments.ts
  lib/
    format.ts
    routes.ts
  styles/
    globals.css
  theme/
    mantineTheme.ts
```

Éviter les dossiers `features/*` tant que le POC reste petit.

## Stack et commandes

Utiliser Node 24 :

```bash
nvm use 24
```

Commandes utiles :

```bash
npm install
npm run dev
npm run type-check
npm run build
```

Le projet utilise :

- Next.js App Router ;
- TypeScript strict ;
- Mantine pour les composants, cards, tables et dataviz ;
- `@mantine/charts` pour le camembert ;
- `@codegouvfr/react-dsfr` seulement pour le socle DSFR minimal ;
- `@tabler/icons-react` pour les icônes.

## Règles UI

Le rendu doit rester :

- institutionnel ;
- lisible ;
- blanc/gris très clair ;
- bleu France comme couleur d'action ;
- sans décor marketing inutile ;
- compatible desktop et mobile ;
- proche de l'esprit `sites.beta.gouv.fr`.

Utiliser Mantine pour :

- `Container`, `Stack`, `Group`, `SimpleGrid` ;
- `Card`, `Badge`, `Table`, `Title`, `Text` ;
- `PieChart`.

Ne pas ajouter de grosses illustrations, gradients décoratifs, landing marketing lourde ou sections inutiles.

## Données

Toutes les données mockées doivent rester centralisées dans :

```txt
src/data/investments.ts
```

Les mocks sont acceptés et souhaités pour l'instant. Ils doivent rester plausibles, cohérents et faciles à remplacer par de vraies sources.

Ne pas intégrer de secrets ni d'identifiants de base de données dans le code.

## Futures sources de données

Prévoir les branchements suivants dans la TODO, sans les implémenter tant que non demandé :

- CSV/API budgétaire France 2030 ;
- data.gouv.fr ;
- INPI brevets ;
- Sirene / INSEE ;
- Assemblée nationale ;
- Sénat ;
- Tricoteuses / Canutes ;
- matching mots-clés ;
- matching NAF ;
- matching territorial ;
- matching temporel ;
- embeddings ou LLM ;
- score d'alignement budget / écosystème / parlement.

## Règles de code

- Pas de `any`.
- Pas de gros composants monolithiques.
- Pas de duplication inutile.
- Pas de tests ou pages de template sans demande explicite.
- Garder les imports courts avec l'alias `@/*`.
- Garder les formatters dans `src/lib/format.ts`.
- Garder les routes dans `src/lib/routes.ts`.
- Préférer les composants simples aux abstractions prématurées.

## Next.js et Mantine

Attention avec Next 16 :

- Ne pas passer `Link` comme prop `component` à un composant client Mantine depuis un Server Component.
- Pour les CTA côté serveur, préférer un `<Link>` stylé en CSS (`primary-button`, `secondary-button`, `small-link-button`).
- Les composants Mantine complexes de rapport peuvent être marqués `"use client"` si le prerender RSC échoue.
- Garder le camembert dans un composant client.

## Checklist avant de rendre

Avant de considérer une itération terminée :

- [ ] `nvm use 24`
- [ ] `npm run type-check`
- [ ] `npm run build`
- [ ] vérifier `/`
- [ ] vérifier `/investissements`
- [ ] vérifier au moins un rapport `/investissements/424`
- [ ] mettre à jour `RECAP_TODO.md` si le périmètre ou la TODO change
