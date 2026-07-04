---
# Direction de mise en page
### Gabarit commun pour le deck Minerve

**Principe global** : chaque slide reste simple, avec une sidebar gauche stable et un contenu visuel principal à droite.

**Structure recommandée**
* **Sidebar gauche** : icône principale, titre court, 2 à 4 points clés, pagination discrète.
* **Zone droite** : une dataviz, un schéma, une capture ou 2 à 3 cartes maximum.
* **Style** : fond blanc, texte noir/gris, bleu France pour les liens et accents, rouge uniquement pour signaler une rupture ou une alerte.
* **Icônes** : utiliser les SVG du dossier `icons/` dans le Markdown, et `/icons/` côté site Next.

---

# Slide 1 : Minerve
### Hackathon Assemblée Nationale 2026

**Message clé** : Minerve transforme des documents et jeux de données publics en tableau de bord d'aide à la décision pour analyser France 2030 et les stratégies nationales d'accélération.

**Contenu à afficher**
* Thématique : France 2030 - Analyse prospective des Stratégies Nationales d'Accélération.
* Ambition : connecter budget, écosystème économique et attention parlementaire.
* Liens utiles :
  * Application démonstrateur : lien à renseigner.
  * Minerve DataSet : [https://minerve.onrender.com](https://minerve.onrender.com)
  * Code source : lien GitHub à renseigner.

**Icônes à intégrer**
* Sidebar : <img src="icons/innovation.svg" width="40" alt="Innovation" /> `icons/innovation.svg`
* Cartes / schéma : <img src="icons/money.svg" width="28" alt="Budget" /> `icons/money.svg` · <img src="icons/ecosystem.svg" width="28" alt="Écosystème" /> `icons/ecosystem.svg` · <img src="icons/contract.svg" width="28" alt="Parlement" /> `icons/contract.svg`

**Agencement proposé**
* Sidebar gauche : logo Minerve en haut, titre `Minerve`, sous-titre hackathon, liens utiles en bas.
* Zone droite : triangle simple avec `Budget voté`, `Écosystème économique`, `Attention parlementaire`.
* Centre du triangle : pastille `Minerve` comme couche de lecture.
* Bas de slide : petite mention `01 - Introduction`.

**Visuel à produire** : schéma triangulaire sobre, sans illustration complexe.

---

# Slide 2 : Le problème
### L'investissement public face à la réalité du terrain

**Message clé** : l'État investit massivement, mais les données permettant de vérifier l'adéquation entre priorités publiques et capacités du terrain restent dispersées.

**Contenu à afficher**
* Les données sont fragmentées entre budget, recherche, entreprises, brevets, publications et Parlement.
* Les décideurs manquent d'une lecture consolidée.
* La question centrale : les investissements publics correspondent-ils aux signaux réels d'innovation ?

**Icônes à intégrer**
* Sidebar : <img src="icons/eye-off.svg" width="40" alt="Manque de visibilité" /> `icons/eye-off.svg`
* Colonnes : <img src="icons/binders.svg" width="28" alt="Budget" /> `icons/binders.svg` · <img src="icons/companie.svg" width="28" alt="Entreprises" /> `icons/companie.svg` · <img src="icons/document.svg" width="28" alt="Documents" /> `icons/document.svg`

**Agencement proposé**
* Sidebar gauche : titre `Le problème`, puis 3 bullets maximum : `silos`, `faible lisibilité`, `décision difficile`.
* Zone droite : trois colonnes verticales non connectées :
  * `Budget public`
  * `Terrain économique et scientifique`
  * `Débat parlementaire`
* Entre les colonnes : flèches pointillées ou cassées pour montrer l'absence de liaison.
* Mettre une phrase courte sous le schéma : `Les signaux existent, mais ils ne sont pas reliés.`

**Visuel à produire** : diagramme de silos avec ruptures visuelles.

---

# Slide 3 : L'idée, la Solution Minerve
### Un assistant IA et tableau de bord décisionnel

**Message clé** : Minerve connecte les silos de données et produit une lecture visuelle, comparable et actionnable pour éclairer la décision publique.

**Contenu à afficher**
Créer un assistant / dashboard / report IA capable de :
1. **Récupérer automatiquement** les données publiques : data.gouv.fr via MCP, Assemblée nationale via MCP.
2. **Analyser** les stratégies nationales d'accélération.
3. **Comparer** ces objectifs avec les données réelles de recherche et d'innovation.
4. **Produire des recommandations** claires, visuelles et compréhensibles.

**En résumé** : un outil qui connecte les silos pour éclairer la décision publique.

**Icônes à intégrer**
* Sidebar : <img src="icons/data-visualization.svg" width="40" alt="Dashboard" /> `icons/data-visualization.svg`
* Pipeline : <img src="icons/catalog.svg" width="28" alt="Dataset" /> `icons/catalog.svg` · <img src="icons/search.svg" width="28" alt="Analyse" /> `icons/search.svg` · <img src="icons/document-search.svg" width="28" alt="Rapport" /> `icons/document-search.svg`

**Agencement proposé**
* Sidebar gauche : titre `L'idée`, phrase de synthèse, puis les 4 capacités en liste numérotée.
* Zone droite : pipeline horizontal en 4 blocs :
  * `MCP data.gouv.fr / Assemblée`
  * `Dataset JSON structuré`
  * `Analyse IA et scoring`
  * `Recommandations`
* À droite du pipeline : petite carte finale `Décision publique éclairée`.
* Garder beaucoup d'espace blanc : cette slide doit être immédiatement compréhensible.

**Visuel à produire** : pipeline fonctionnel, avec une icône par bloc.

---

# Slide 4 : Ce que fait le POC aujourd'hui
### Les fonctionnalités coeur du démonstrateur

**Message clé** : le POC montre déjà la navigation complète : landing, liste d'investissements, dataviz budgétaire et rapport par programme.

**Contenu à afficher**
* Vue globale des investissements France 2030.
* Camembert de répartition budgétaire 2026.
* Rapport slide par programme, avec indicateurs, dataviz, signaux économiques et parlementaires.

**Icônes à intégrer**
* Sidebar : <img src="icons/application.svg" width="40" alt="Application" /> `icons/application.svg`
* Cartes : <img src="icons/house.svg" width="28" alt="Landing" /> `icons/house.svg` · <img src="icons/data-visualization.svg" width="28" alt="Dataviz" /> `icons/data-visualization.svg` · <img src="icons/document-search.svg" width="28" alt="Rapport" /> `icons/document-search.svg`

**Agencement proposé**
* Sidebar gauche : titre `POC aujourd'hui`, puis trois bullets : `Vue globale`, `Dataviz macro`, `Rapports automatiques`.
* Zone droite : trois cartes alignées horizontalement :
  * `Landing page`
  * `Investissements + camembert`
  * `Rapport programme`
* Dans chaque carte : petite capture ou wireframe, icône en haut gauche, libellé court en bas.
* Ne pas ajouter de texte long dans la zone droite.

**Visuel à produire** : triptyque de wireframes ou captures.

---

# Slide 5 : Architecture technique
### Une structure simple, prête pour la donnée réelle

**Message clé** : l'architecture sépare clairement les données, la normalisation et l'interface, afin de remplacer les mocks progressivement.

**Contenu à afficher**
* Next.js App Router, Node 24, TypeScript strict.
* Mantine pour les composants et la dataviz.
* Données mockées dans `dataset/`.
* Façade typée dans `src/data/investments.ts`.
* Routes utiles : `/`, `/investissements`, `/investissements/[programmeCode]`.

**Icônes à intégrer**
* Sidebar : <img src="icons/coding.svg" width="40" alt="Code" /> `icons/coding.svg`
* Schéma : <img src="icons/catalog.svg" width="28" alt="JSON" /> `icons/catalog.svg` · <img src="icons/internet.svg" width="28" alt="Routes" /> `icons/internet.svg` · <img src="icons/application.svg" width="28" alt="Front" /> `icons/application.svg`

**Agencement proposé**
* Sidebar gauche : stack technique en liste courte.
* Zone droite : schéma en couches verticales :
  * bas : `dataset/*.json`
  * milieu : `src/data/investments.ts`
  * haut : `pages Next + composants Mantine`
* À droite du schéma : mini liste `Remplaçable`, `Typé`, `Maintenable`.
* Garder la slide très technique mais visuellement lisible.

**Visuel à produire** : diagramme de couches.

---

# Slide 6 : Données cibles
### Connecter le budget à la réalité du terrain

**Message clé** : Minerve doit agréger les sources capables de mesurer l'activité réelle de recherche, d'innovation et d'économie.

**Contenu à afficher**
* INPI : brevets et domaines technologiques.
* INSEE / Sirene : entreprises, codes NAF, effectifs, localisation.
* Chiffre d'affaires : signaux économiques.
* data.gouv.fr : jeux de données publics associés.

**Icônes à intégrer**
* Sidebar : <img src="icons/catalog.svg" width="40" alt="Dataset" /> `icons/catalog.svg`
* Matrice : <img src="icons/innovation.svg" width="28" alt="Brevets" /> `icons/innovation.svg` · <img src="icons/companie.svg" width="28" alt="Entreprises" /> `icons/companie.svg` · <img src="icons/location-france.svg" width="28" alt="Territoires" /> `icons/location-france.svg`

**Agencement proposé**
* Sidebar gauche : familles de données à connecter.
* Zone droite : matrice `source x usage`.
* Lignes : `INPI`, `Sirene`, `CA entreprises`, `data.gouv.fr`.
* Colonnes : `brevets`, `entreprises`, `emplois`, `territoires`, `CA`.
* Cellules : score simple `0`, `1`, `2`, `3` ou pastilles de couverture.

**Visuel à produire** : matrice de couverture des sources.

---

# Slide 7 : Croisement parlementaire
### Mesurer l'attention de la représentation nationale

**Message clé** : Minerve relie les signaux économiques aux débats, rapports et questions parlementaires.

**Contenu à afficher**
* Sources : Assemblée nationale, Sénat, Tricoteuses / Canutes.
* Signaux : débats, rapports, questions, votes, mentions de filières.
* Objectif : mesurer l'attention parlementaire sur chaque programme d'investissement.

**Icônes à intégrer**
* Sidebar : <img src="icons/justice-scales.svg" width="40" alt="Institution" /> `icons/justice-scales.svg`
* Frise : <img src="icons/city-hall.svg" width="28" alt="Assemblée" /> `icons/city-hall.svg` · <img src="icons/contract.svg" width="28" alt="Texte parlementaire" /> `icons/contract.svg` · <img src="icons/calendar.svg" width="28" alt="Chronologie" /> `icons/calendar.svg`

**Agencement proposé**
* Sidebar gauche : sources et objectif démocratique.
* Zone droite : frise horizontale.
* Trois lignes : `Assemblée`, `Sénat`, `Tricoteuses`.
* Marqueurs sur la frise : `question`, `rapport`, `débat`, `vote`.
* Utiliser une couleur par source, sans dépasser trois couleurs.

**Visuel à produire** : timeline parlementaire multi-sources.

---

# Slide 8 : Indicateur clé
### Le score d'alignement

**Message clé** : le score d'alignement permet de comparer budget, écosystème et attention parlementaire pour détecter angles morts et opportunités.

**Contenu à afficher**
Le score croise 3 dimensions :
1. **Effort budgétaire** : argent investi.
2. **Dynamique de l'écosystème** : brevets, entreprises, emplois, chiffre d'affaires.
3. **Attention parlementaire** : volume et teneur des débats.

**Cas d'usage** : repérer les programmes fortement financés mais peu visibles dans les signaux terrain, ou au contraire les domaines émergents sous-financés.

**Icônes à intégrer**
* Sidebar : <img src="icons/compass.svg" width="40" alt="Alignement" /> `icons/compass.svg`
* Dataviz : <img src="icons/money.svg" width="28" alt="Budget" /> `icons/money.svg` · <img src="icons/factory.svg" width="28" alt="Économie" /> `icons/factory.svg` · <img src="icons/data-visualization.svg" width="28" alt="Score" /> `icons/data-visualization.svg`

**Agencement proposé**
* Sidebar gauche : définition du score et usage métier.
* Zone droite haute : radar à 5 axes : `Budget`, `Brevets`, `Entreprises`, `Territoires`, `Parlement`.
* Zone droite basse : quadrant `budget élevé/faible` x `signaux terrain forts/faibles`.
* Ajouter 2 exemples de points dans le quadrant : `angle mort` et `alignement fort`.

**Visuel à produire** : radar + quadrant.

---

# Slide 9 : Vision
### Au-delà de France 2030

**Message clé** : France 2030 est un point de départ ; Minerve peut devenir un outil de rétrospective budgétaire multi-thématiques.

**Contenu à afficher**
* Explorer d'autres thématiques : transition écologique, défense, santé, industrie.
* Ajouter des cartographies territoriales.
* Croiser agenda parlementaire, décaissements, emploi, brevets et publications.
* Utiliser des embeddings ou LLMs pour matcher les lignes budgétaires avec des secteurs économiques réels.

**Icônes à intégrer**
* Sidebar : <img src="icons/map.svg" width="40" alt="Carte" /> `icons/map.svg`
* Filtres : <img src="icons/environment.svg" width="28" alt="Écologie" /> `icons/environment.svg` · <img src="icons/army-tank.svg" width="28" alt="Défense" /> `icons/army-tank.svg` · <img src="icons/location-france.svg" width="28" alt="France" /> `icons/location-france.svg`

**Agencement proposé**
* Sidebar gauche : vision multi-thématiques.
* Zone droite : carte de France simplifiée.
* Sur la carte : couches superposées `budget`, `emplois`, `brevets`, `mentions parlementaires`.
* En haut de la carte : chips de filtres `Transition`, `Défense`, `Santé`, `Industrie`.

**Visuel à produire** : carte de France en couches.

---

# Slide 10 : Prochaines étapes
### De la maquette au produit

**Message clé** : les prochaines étapes consistent à remplacer les mocks, fiabiliser le matching et rendre les rapports exploitables.

**Contenu à afficher**
1. **Données réelles** : connecter API, CSV et MCP.
2. **Moteur de matching** : sémantique, NAF, territorial, temporel.
3. **Exports** : PDF ou rapport exploitable en commission, cabinet ou équipe data.

**Icônes à intégrer**
* Sidebar : <img src="icons/in-progress.svg" width="40" alt="Roadmap" /> `icons/in-progress.svg`
* Roadmap : <img src="icons/catalog.svg" width="28" alt="Données" /> `icons/catalog.svg` · <img src="icons/search.svg" width="28" alt="Matching" /> `icons/search.svg` · <img src="icons/document-download.svg" width="28" alt="Export" /> `icons/document-download.svg`

**Agencement proposé**
* Sidebar gauche : objectif `maquette → produit`.
* Zone droite : roadmap en 3 colonnes.
* Colonne 1 : `Données réelles`, statut `prototype`.
* Colonne 2 : `Matching`, statut `mock`.
* Colonne 3 : `Export / usage métier`, statut `à cadrer`.
* Ajouter une checklist courte dans chaque colonne.

**Visuel à produire** : roadmap en 3 colonnes.
