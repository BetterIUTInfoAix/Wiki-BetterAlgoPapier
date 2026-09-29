# Changelog

Toutes les évolutions notables de ce wiki sont documentées dans ce fichier.

Le format suit [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/), et le
versionnement suit [SemVer](https://semver.org/lang/fr/).

Ce dépôt ne contient que le **wiki**. L'extension VSCode
[BetterAlgoPapier](https://github.com/BetterIUTInfoAix/BetterAlgoPapier) est
versionnée séparément.

## [Non publié]

## [1.0.1] — 2026-09-29

Correctif de contenu. Aucun changement d'API, aucun changement de
comportement des exercices.

### Retiré

- Page `/exercices-demo` (« Démo exercices interactifs »). C'était un
  échafaudage de développement : elle apparaissait dans le menu latéral comme
  si elle était un cours, à côté des 16 vraies pages, et dans le sitemap
  public. L'API des composants est documentée dans `CONTRIBUTING.md`, qui
  couvre le QCM simple, le QCM à choix multiple, le texte à trous et la
  convention des `id` — rien n'est perdu pour les contributeurs.

## [1.0.0] — 2026-09-29

Première version stable : le parcours pédagogique complet, les exercices
interactifs, et un moyen simple de signaler les erreurs de contenu.

### Exercices interactifs

- `<Quiz />` — QCM à choix unique (boutons radio) ou multiple (cases à cocher),
  avec feedback immédiat et une explication par question.
- `<FillInBlank />` — texte à trous, correction souple insensible à la casse,
  aux accents et aux espaces, plusieurs réponses acceptées par trou.
- **13 pages de cours sur 16** dotées d'exercices, plus une page de
  démonstration (`/exercices-demo`).
- Persistance du statut « Résolu » en `localStorage` — best-effort, ignorée si
  le stockage est indisponible (navigation privée).
- Bouton **Suivant** : va vers l'exercice suivant sur la page, et si l'exercice
  est le dernier, vers la page suivante du parcours.
- Bouton **Signaler** sur chaque exercice et chaque page : un clic ouvre une
  issue GitHub avec le contexte déjà rempli (page, exercice, énoncé, et pour un
  QCM les réponses retenues par l'élève). Deux issue forms dédiés — un pour les
  QCM, un pour les pages de cours.
- Les textes d'exercice acceptent deux constructions inline : `` `du code` `` et
  `**du gras**`. Volontairement pas d'italique : le `*` est l'opérateur de
  multiplication de l'algo papier.
- Accessibilité : questions en `fieldset`/`legend`, feedback annoncé en
  `role="status"`, focus visible au clavier, badges lisibles en thème clair,
  respect de `prefers-reduced-motion`, cibles tactiles de 44 px.

### Contenu

- Parcours pédagogique en 7 chapitres, 16 pages.
- Structure commune à chaque page : idée en une phrase → minimum vital → pas à
  pas → piège Casali → à toi → prochaine étape.
- Coloration syntaxique du langage `algo`, portée depuis l'extension.
- Admonitions migrées au format directive v4.

### Landing page

- Refonte complète en cinq sections : héros, chiffres clés, chapitres,
  extension, compilateur.
- Exemple d'algorithme coloré à la main dans le héros, sans dépendance Prism.

### Infrastructure

- Docusaurus 3.10, TypeScript, Node ≥ 24.
- Recherche hors ligne en français.
- Déploiement GitHub Pages via GitHub Actions, avec `typecheck` et `build` en
  garde-fou.
- `format: mdx` dans le frontmatter : une page `.md` peut héberger du JSX sans
  être renommée.

### Corrections

- `**gras**` et `` `code` `` s'affichaient littéralement dans les exercices : le
  Markdown n'est pas compilé dans une chaîne JavaScript passée en prop MDX.
  Douze backticks étaient concernés sur la seule page de démonstration.
- Le bouton « Suivant » ne faisait rien sur une page ne contenant qu'un seul
  exercice.
- Admonitions cassées par le changement de format de Docusaurus.
