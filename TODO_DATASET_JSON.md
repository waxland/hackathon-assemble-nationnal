# Contrat DATA - Hackathon Minerve (France 2030 / SNA)

## Objectif

Ce document sert de contrat de remplissage pour l'équipe DATA. L'objectif est de remplacer progressivement les mocks par des données réelles sans changer la structure des fichiers ni les composants front. 

L'ambition est d'alimenter les "Stratégies Nationales d'Accélération" (SNA) de France 2030 en reliant le budget voté aux signaux d'innovation réels.

Règle de base :

- ne pas renommer les fichiers ;
- ne pas renommer les clés JSON ;
- garder une entrée pour chaque programme `421`, `422`, `423`, `424`, `425` ;
- mettre les montants en euros entiers, sans séparateur et sans symbole ;
- utiliser les dates ISO `YYYY-MM-DD` ;
- garder `isMock: true` tant que la donnée n'est pas réelle ;
- passer `isMock: false` uniquement quand la source et le traitement sont vérifiés ;
- remplir `sourceUrl`, `confidence`, `updatedAt` et `notes` dès qu'une donnée vient d'une source réelle.

## Programmes à couvrir partout

- `421` : Soutien des progrès de l'enseignement et de la recherche.
- `422` : Valorisation de la recherche.
- `423` : Accélération de la modernisation des entreprises.
- `424` : Financement des investissements stratégiques.
- `425` : Financement structurel des écosystèmes d'innovation.

Chaque fichier JSON orienté programme doit contenir ces cinq clés dans `programmes`, même si certaines listes sont temporairement vides.

## Formats de récupération attendus

- Budget France 2030 : CSV ou JSON tabulaire, une ligne par programme / catégorie / année.
- data.gouv.fr : JSON API de catalogue, ou CSV exporté puis normalisé dans `dataset/sources/data-gouv-datasets.json`.
- INPI brevets : CSV ou JSON normalisé, une ligne par famille de brevet.
- Sirene / INSEE : CSV Sirene ou JSON API, une ligne par entreprise ou établissement retenu.
- Chiffre d'affaires : CSV normalisé, une ligne par `siren` et exercice fiscal.
- Assemblée nationale / Sénat / Tricoteuses : JSON ou JSONL, une ligne par document parlementaire.
- Matching thématique : JSON maintenu à la main, une entrée par programme.
- Scores d'alignement : JSON calculé, une entrée par programme et par dimension.

La sortie finale à commiter dans le repo doit toujours être du JSON valide, indenté avec deux espaces.

## Fichiers déjà branchés au front

### `dataset/budget/france-2030-budget-lines.json`

Statut : utilisé par `src/data/investments.ts`.

Format : tableau JSON.

Structure interne d'une ligne :

```json
{
  "id": "fr2030-424-6",
  "programmeCode": "424",
  "programmeName": "Financement des investissements stratégiques",
  "expenseCategoryName": "Dépenses d'intervention",
  "amount2024": 3318311564,
  "amount2025": 4052897364,
  "amount2026": 3364301779
}
```

Champs :

- `id` : identifiant stable construit côté DATA, idéalement `fr2030-{programmeCode}-{categorie}`.
- `programmeCode` : chaîne obligatoire parmi `421`, `422`, `423`, `424`, `425`.
- `programmeName` : libellé officiel.
- `expenseCategoryName` : catégorie budgétaire normalisée.
- `amount2024`, `amount2025`, `amount2026` : nombres entiers en euros.

À récupérer :

- [ ] source officielle budgétaire ;
- [ ] millésime ;
- [ ] catégorie de dépense ;
- [ ] montants par année ;
- [ ] si disponible, distinguer AE / CP dans un futur fichier dédié plutôt que modifier cette structure.

### `dataset/reports/investment-programme-reports.json`

Statut : utilisé par `src/data/investments.ts`.

Format : objet indexé par code programme.

Structure interne par programme :

```json
{
  "programmeCode": "424",
  "title": "Investissements stratégiques et souveraineté",
  "summary": "Résumé court affiché en intro.",
  "budgetUse": "Phrase décrivant l'usage principal du budget.",
  "keywords": ["souveraineté", "énergie"],
  "ecosystem": {
    "companies": 766,
    "jobs": 68100,
    "revenue": 24100000000,
    "territories": ["Grenoble", "Toulouse"]
  },
  "startups": [
    { "name": "ChipFoundry", "city": "Grenoble", "maturity": "Series B", "jobs": 82 }
  ],
  "parliament": {
    "mentions": 103,
    "trend": "En hausse",
    "topics": ["souveraineté industrielle"]
  },
  "strengths": ["Point fort"],
  "openQuestions": ["Question ouverte"]
}
```

Champs :

- `title`, `summary`, `budgetUse` : textes éditoriaux courts, prêts à afficher.
- `keywords` : tags de matching et d'affichage.
- `ecosystem.companies` : nombre agrégé d'entreprises rattachées.
- `ecosystem.jobs` : emplois agrégés.
- `ecosystem.revenue` : chiffre d'affaires agrégé en euros.
- `ecosystem.territories` : territoires principaux affichés en badges.
- `startups` : exemples représentatifs, pas l'exhaustif complet.
- `parliament.mentions` : total documents ou occurrences retenues.
- `parliament.trend` : uniquement `En hausse`, `Stable` ou `À qualifier`.
- `strengths`, `openQuestions` : synthèse éditoriale.

À remplir depuis :

- [ ] agrégats Sirene / INSEE ;
- [ ] agrégats CA ;
- [ ] agrégats brevets INPI ;
- [ ] agrégats parlementaires ;
- [ ] analyse éditoriale validée.

### `dataset/dataviz/investment-programme-dataviz.json`

Statut : utilisé par les graphiques des rapports.

Format : objet indexé par code programme.

Structure interne par programme :

```json
{
  "budgetHistory": [
    { "year": "2026", "budget": 3606716321 }
  ],
  "signalTimeline": [
    { "year": "2025", "patents": 89, "startups": 28, "parliament": 26 }
  ],
  "sourceCoverage": [
    { "source": "INPI brevets", "coverageScore": 79 }
  ],
  "sectorDistribution": [
    { "sector": "Semi-conducteurs", "companies": 126, "patents": 38 }
  ],
  "parliamentarySources": [
    { "source": "Sénat", "mentions": 34 }
  ],
  "territorialDistribution": [
    { "territory": "Grenoble", "companies": 248, "jobs": 23800, "budgetShare": 41 }
  ],
  "alignmentScores": [
    { "dimension": "Budget", "score": 94 }
  ]
}
```

Champs :

- `budgetHistory[].year` : chaîne `2024`, `2025`, `2026`.
- `budgetHistory[].budget` : euros entiers.
- `signalTimeline[].patents` : nombre de familles de brevets rattachées.
- `signalTimeline[].startups` : nombre d'entreprises/startups rattachées.
- `signalTimeline[].parliament` : nombre de documents ou mentions parlementaires.
- `sourceCoverage[].coverageScore` : score `0-100` indiquant la maturité de la source.
- `sectorDistribution[]` : répartition sectorielle pour bar chart.
- `parliamentarySources[]` : distribution Assemblée / Sénat / Tricoteuses.
- `territorialDistribution[].budgetShare` : pourcentage entier `0-100`.
- `alignmentScores[].score` : score `0-100`.

À remplir depuis :

- [ ] budget agrégé ;
- [ ] INPI ;
- [ ] Sirene / INSEE ;
- [ ] documents parlementaires ;
- [ ] calculs de scoring.

## Fichiers sources à remplir par l'équipe DATA

### `dataset/catalog/investment-programmes.json`

Rôle : catalogue pivot des cinq programmes, utile pour vérifier que tous les fichiers couvrent le même périmètre.

Format : objet `{ schemaVersion, updatedAt, isMock, programmes }`.

Chaque `programmes[code]` contient :

- `programmeCode` ;
- `programmeName` ;
- `shortName` ;
- `theme` ;
- `reportRoute` ;
- `primaryTags` ;
- `ownerHint`.

TODO :

- [ ] vérifier les libellés officiels ;
- [ ] valider les thèmes éditoriaux ;
- [ ] remplacer `ownerHint` par une responsabilité d'équipe si utile.

### `dataset/sources/data-gouv-datasets.json`

Rôle : référencer les jeux de données data.gouv.fr à rattacher à chaque programme.

Format attendu en entrée DATA : JSON API data.gouv.fr ou CSV normalisé.

Structure cible :

```json
{
  "programmes": {
    "424": {
      "datasets": [
        {
          "datasetId": "id-data-gouv",
          "title": "Titre",
          "producer": "Producteur",
          "license": "Licence",
          "granularity": "projet",
          "lastModifiedAt": "2026-02-28",
          "landingPageUrl": "https://...",
          "apiUrl": "https://...",
          "matchedKeywords": ["énergie"],
          "confidence": 0.81,
          "notes": "Commentaire DATA"
        }
      ]
    }
  }
}
```

TODO :

- [ ] récupérer l'identifiant data.gouv.fr ;
- [ ] récupérer le producteur ;
- [ ] récupérer licence, dates, URL, API ;
- [ ] qualifier la granularité : `programme`, `projet`, `entreprise`, `territoire`, `structure`.

### `dataset/sources/inpi-patent-families.json`

Rôle : lister les familles de brevets rattachées aux programmes.

Format attendu en entrée DATA : CSV ou JSON, une ligne par famille de brevet.

Structure cible :

- `patentFamilyId` : identifiant famille.
- `title` : titre brevet.
- `applicants` : déposants.
- `publicationYear` : année numérique.
- `technologyCodes` : codes IPC/CPC.
- `territory` : territoire principal si identifiable.
- `matchedKeywords` : mots-clés qui justifient le rattachement.
- `confidence` : nombre `0-1`.
- `sourceUrl` : lien INPI ou source.

TODO :

- [ ] dédupliquer par famille de brevet ;
- [ ] normaliser les déposants ;
- [ ] mapper IPC/CPC vers les thèmes des programmes ;
- [ ] garder le score de confiance du matching.

### `dataset/sources/sirene-companies.json`

Rôle : lister les entreprises/startups rattachées aux programmes.

Format attendu en entrée DATA : CSV Sirene, StockUniteLegale/StockEtablissement, ou JSON API.

Structure cible :

- `siren` : identifiant entreprise sur 9 chiffres, string.
- `name` : nom affichable.
- `nafCode` et `nafLabel` : activité.
- `legalCategory` : forme juridique.
- `city`, `region` : localisation.
- `workforceRange` : tranche effectif.
- `administrativeStatus` : `A` si actif.
- `matchedKeywords` : justification de rattachement.
- `confidence` : nombre `0-1`.

TODO :

- [ ] utiliser `siren` comme clé de jointure ;
- [ ] filtrer les entreprises fermées ou non pertinentes ;
- [ ] rattacher aux programmes par NAF, mots-clés, brevets, aides ou territoires.

### `dataset/sources/company-revenues.json`

Rôle : fournir le chiffre d'affaires par entreprise et année fiscale.

Format attendu en entrée DATA : CSV normalisé.

Structure cible :

- `siren` ;
- `companyName` ;
- `fiscalYear` ;
- `revenue` en euros entiers ;
- `currency`, normalement `EUR` ;
- `sourceName` ;
- `sourceUrl` ;
- `confidence`.

TODO :

- [ ] garantir que `siren` existe dans `sirene-companies.json` ;
- [ ] documenter les absences de CA ;
- [ ] éviter les agrégats non sourcés ;
- [ ] garder la dernière année fiscale disponible.

### `dataset/sources/parliamentary-documents.json`

Rôle : stocker les documents Assemblée, Sénat et Tricoteuses/Canutes reliés aux programmes.

Format attendu en entrée DATA : JSON ou JSONL, une ligne par document.

Structure cible :

- `documentId` : identifiant stable de la source.
- `source` : `Assemblée nationale`, `Sénat` ou `Tricoteuses / Canutes`.
- `documentType` : `question`, `débat`, `rapport`, `amendement`, `texte consolidé`.
- `title` ;
- `publishedAt` en `YYYY-MM-DD` ;
- `author` ;
- `url` ;
- `matchedKeywords` ;
- `mentionCount` ;
- `confidence`.

TODO :

- [ ] conserver les URL sources ;
- [ ] normaliser les types de document ;
- [ ] dédupliquer les documents présents dans plusieurs sources ;
- [ ] distinguer nombre de documents et nombre d'occurrences si nécessaire.

### `dataset/matching/programme-taxonomy.json`

Rôle : dictionnaire contrôlé de matching par programme.

Format attendu en entrée DATA : JSON maintenu à la main, versionné dans Git.

Structure cible :

- `keywords` ;
- `synonyms` ;
- `nafCodes` ;
- `technologyCodes` ;
- `territories` ;
- `timeWindow.startYear` ;
- `timeWindow.endYear`.

TODO :

- [ ] valider les synonymes avec l'équipe métier ;
- [ ] ajouter des exclusions si certains mots-clés créent du bruit ;
- [ ] documenter les codes NAF et IPC/CPC retenus ;
- [ ] garder des fenêtres temporelles cohérentes avec les budgets.

### `dataset/metrics/programme-alignment-scores.json`

Rôle : stocker les scores calculés d'alignement budget / innovation / entreprises / territoires / parlement.

Format attendu en entrée DATA : JSON calculé par script ou notebook.

Structure cible :

- `methodology.weights` : pondérations ;
- `programmes[code].globalScore` : score `0-100` ;
- `programmes[code].dimensions[]` :
  - `dimension` ;
  - `score` ;
  - `rationale`.

TODO :

- [ ] valider les pondérations ;
- [ ] calculer les scores depuis les fichiers sources ;
- [ ] garder une phrase de justification par dimension ;
- [ ] ajouter la date de calcul dans `updatedAt`.

## Checklist de complétude

- [x] Chaque fichier source contient un exemple mock pour `421`.
- [x] Chaque fichier source contient un exemple mock pour `422`.
- [x] Chaque fichier source contient un exemple mock pour `423`.
- [x] Chaque fichier source contient un exemple mock pour `424`.
- [x] Chaque fichier source contient un exemple mock pour `425`.
- [x] Les fichiers déjà utilisés par le front ont une explication technique dans cette TODO.
- [x] Les fichiers sources à remplir ont une structure cible documentée.
- [ ] Ajouter une validation automatique pour vérifier les cinq codes programmes dans chaque fichier.
- [ ] Ajouter une validation automatique des dates ISO.
- [ ] Ajouter une validation automatique des scores `0-1` et `0-100`.
- [ ] Ajouter une validation automatique des montants en euros entiers.

## Règles de livraison DATA

- [ ] Ouvrir une PR par famille de source si possible.
- [ ] Inclure la source brute ou le script d'extraction dans une note de PR.
- [ ] Ne pas commiter de secret, token ou identifiant privé.
- [ ] Ne pas modifier les composants React pour corriger un problème de donnée.
- [ ] Modifier `src/data/investments.ts` uniquement si le contrat JSON change volontairement.
