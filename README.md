# Wiki BetterAlgoPapier

Wiki statique d’algo papier pour les L1 de l’IUT d’Aix — extension VSCode **BetterAlgoPapier** + futur compilateur.

- Stack : **Docusaurus 3 + TypeScript**, Node **>= 24**, recherche offline FR (`docusaurus-search-local`), highlight custom `algo` porté de l’extension.
- Contenu : `docs/` en Markdown (MDX seulement pour l’interactif futur).
- Déploiement : **GitHub Pages** (`gh-pages`) via Actions.

## Démarrer

```bash
nvm use # Node 24 minimum
npm install
npm start
```

## Build / vérif

```bash
npm run typecheck
npm run build
npm run serve
```

## Déploiement

Push sur `main` → workflow `Deploy Docusaurus to GitHub Pages` → https://BetterIUTInfoAix.github.io/Wiki-BetterAlgoPapier/

## Contribuer

1. Une page = une notion, exemples ` ```algo ` vérifiés dans l’extension `.algo`.
2. Ton simple, tableaux comparatifs, 1 anti-exemple par page langage.
3. Référence extension alignée sur **1.0.5** en attendant le compilateur.
