# RECAP TODO - Minerve.fr

## Virage produit demandé

- [x] Basculer l'environnement sur Node 24 avec `nvm use 24`.
- [x] Supprimer les tests Playwright.
- [x] Supprimer les tests Vitest.
- [x] Supprimer les pages annexes sans utilité pour le POC.
- [x] Supprimer les dépendances de test, MDX, Sentry et Matomo.
- [x] Réduire le projet à trois routes utiles :
  - [x] `/`
  - [x] `/investissements`
  - [x] `/investissements/[programmeCode]`
- [x] Simplifier l'architecture en dossiers lisibles :
  - [x] `components/layout`
  - [x] `components/cards`
  - [x] `components/dataviz`
  - [x] `components/reports`
  - [x] `data`
  - [x] `lib`
  - [x] `theme`
- [x] Garder les dernières versions npm installées des paquets utiles.
- [x] Revenir à un POC centré sur Mantine, avec un style sobre inspiré de `sites.beta.gouv.fr`.
- [x] Centraliser les données mockées dans `src/data/investments.ts`.
- [x] Créer une landing page de présentation.
- [x] Créer la page liste des investissements France 2030.
- [x] Créer un camembert de répartition des investissements 2026.
- [x] Créer une page rapport slide par programme d'investissement.
- [x] Mettre à jour `README.md` avec la nouvelle architecture.
- [x] Créer `AGENTS.md` avec les règles de prompts et d'architecture du projet.
- [x] Supprimer le routing hérité `/template-nextjs`.
- [x] Retirer `basePath` et `NEXT_PUBLIC_BASE_PATH`.
- [x] Remplacer les URLs template des fichiers `.env.*` par des valeurs Minerve neutres.
- [x] Supprimer les traces Sentry/Matomo restantes des fichiers d'environnement.
- [x] Supprimer les dossiers playground vides `src/app/dsfr` et `src/app/mui`.
- [x] Nettoyer `.github/workflows/deploy.yml` des libellés demo/template et variables Sentry.

## TODO immédiats de vérification

- [x] Relire `AGENTS.md` avant toute nouvelle itération.
- [x] Lancer `npm run type-check`.
- [x] Lancer `npm run build`.
- [x] Vérifier l'absence de `NEXT_PUBLIC_BASE_PATH`, `/template-nextjs`, `template-nextjs` et `SENTRY_PROJECT` dans le code/config hors présent récapitulatif.
- [x] Vérifier que le build exporte uniquement les routes utiles.
- [x] Lancer `npm run dev`.
- [x] Vérifier la landing page sans préfixe `/template-nextjs`.
- [x] Vérifier `/investissements`.
- [x] Vérifier chaque rapport :
  - [x] `/investissements/421`
  - [x] `/investissements/422`
  - [x] `/investissements/423`
  - [x] `/investissements/424`
  - [x] `/investissements/425`

## Notes techniques de l'itération

- [x] Next 16 interdit de passer `Link` comme prop `component` à des composants client depuis un Server Component : les CTA serveur sont donc des liens CSS simples.
- [x] Le rapport slide est un composant client explicite pour éviter une erreur de prerender RSC avec Mantine 9.
- [x] Le build utilise Turbopack standard via `next build`.
- [x] Le serveur dev répond sur `/`, `/investissements` et les cinq rapports ; l'ancien préfixe `/template-nextjs` retourne 404.

## TODO données réelles

- [ ] Remplacer les lignes budgétaires mock par une source CSV/API France 2030.
- [ ] Ajouter un connecteur data.gouv.fr pour découvrir les jeux de données publics liés à France 2030.
- [ ] Ajouter les données INPI brevets par domaine technologique.
- [ ] Ajouter Sirene / INSEE pour entreprises, NAF, effectifs et localisation.
- [ ] Ajouter une source chiffre d'affaires entreprises.
- [ ] Ajouter les données Assemblée nationale pour débats, questions et rapports.
- [ ] Ajouter les données Sénat pour compléter l'attention parlementaire.
- [ ] Exploiter Tricoteuses / Canutes pour les données parlementaires et juridiques.
- [ ] Créer un mapping mots-clés par programme.
- [ ] Ajouter synonymes et familles sectorielles.
- [ ] Ajouter un matching NAF.
- [ ] Ajouter un matching territorial.
- [ ] Ajouter un matching temporel budget / signaux.
- [ ] Ajouter une couche embeddings ou LLM pour proposer des rapprochements.
- [ ] Ajouter un score d'alignement budget / écosystème / parlement.
- [ ] Ajouter une carte territoriale.
- [ ] Ajouter un export PDF des rapports slide.

## Hypothèses mock actuelles

- [x] Les budgets 2024-2026 sont issus de l'extrait fourni dans le prompt.
- [x] Les startups, brevets, emplois, territoires, chiffres d'affaires et mentions parlementaires sont fictifs.
- [x] Les données fictives sont structurées pour être remplacées par des connecteurs réels.
- [x] `France Connect` dans la consigne est interprété comme `France 2030`, cohérent avec le reste du besoin.
