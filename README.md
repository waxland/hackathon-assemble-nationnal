# Minerve

POC Next.js pour explorer les investissements France 2030 et les relier à des signaux d'innovation mockés.

## Liens Utiles

- **Lien du Website Minerve** : [https://minerve-zeta.vercel.app/](https://minerve-zeta.vercel.app/)
- **Lien du site relié au dataset et à l’exploration** : [https://minerve.onrender.com](https://minerve.onrender.com)
- **Présentation (Figma)** : [https://www.figma.com/design/0NNkN93P3MM2gjEKCQBbxZ/Untitled?node-id=0-1&t=V3M5BGidRCmO8RGA-1](https://www.figma.com/design/0NNkN93P3MM2gjEKCQBbxZ/Untitled?node-id=0-1&t=V3M5BGidRCmO8RGA-1)
- **Github relié au projet - partie Front-end** : [https://github.com/waxland/hackathon-assemble-nationnal](https://github.com/waxland/hackathon-assemble-nationnal)
- **Github relié au projet partie Backend - Dataset** : [https://github.com/waxland/hackathon-assemble-nationnal-dataset](https://github.com/waxland/hackathon-assemble-nationnal-dataset)

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
