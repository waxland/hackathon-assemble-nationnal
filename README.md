# Minerve

POC Next.js pour explorer les investissements France 2030 et les relier à des signaux d'innovation mockés.

## Pages conservées

- `/` : landing page de présentation.
- `/investissements` : liste des investissements France 2030 avec camembert de répartition.
- `/investissements/[programmeCode]` : rapport slide par programme d'investissement.

## Architecture

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

## Commandes

```bash
nvm use 24
npm install
npm run dev
npm run type-check
npm run build
```

## Données

Les données brutes sont mockées dans `dataset/` et exposées au front par `src/data/investments.ts`.

Le prochain objectif est de remplacer progressivement ces mocks par :

- CSV/API budgétaire France 2030 ;
- data.gouv.fr ;
- INPI brevets ;
- Sirene / INSEE ;
- Assemblée nationale ;
- Sénat ;
- Tricoteuses / Canutes ;
- matching sémantique budget / écosystème / parlement.
