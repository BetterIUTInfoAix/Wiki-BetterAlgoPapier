# Contribuer au Wiki BetterAlgoPapier

Merci de ton aide ! Ce document explique comment contribuer au wiki.

## Règles générales

1. **1 page = 1 notion** — chaque page traite un seul concept.
2. **Exemples vérifiés** — tous les blocs ```` ```algo ```` doivent fonctionner dans l'extension VSCode v1.0.5.
3. **Ton simple** — phrases courtes, tableaux comparatifs, 1 anti-exemple par page langage.
4. **Structure pédagogique** — chaque page suit le plan : idée en une phrase → minimum vital → pas à pas → piège Casali → à toi → prochaine étape.

## Ajouter un exercice interactif

Le wiki supporte deux types d'exercices interactifs : **QCM** et **texte à trous**.

### Utilisation dans une page MDX

Les composants `<Quiz />` et `<FillInBlank />` sont disponibles globalement dans les pages `.mdx` (pas besoin d'import).

### QCM

```mdx
<Quiz
  id="mon-exercice-qcm"
  title="Mon titre"
  questions={[
    {
      question: "Ta question ?",
      options: ["Réponse A", "Réponse B", "Réponse C"],
      correctAnswers: [1], // Index de la bonne réponse
      explanation: "Explication affichée après correction.",
    },
  ]}
/>
```

**QCM à choix multiple** — ajoute `multiple` et plusieurs index dans `correctAnswers` :

```mdx
<Quiz
  id="mon-exercice-qcm-multi"
  title="Mon titre"
  multiple
  questions={[
    {
      question: "Question ?",
      options: ["A", "B", "C", "D"],
      correctAnswers: [0, 2], // Plusieurs bonnes réponses
      explanation: "Explication.",
    },
  ]}
/>
```

### Texte à trous

```mdx
<FillInBlank
  id="mon-exercice-fillblank"
  title="Mon titre"
  blanks={[
    {
      before: "Texte avant le trou ",
      accepted: ["reponse1", "reponse2"], // Plusieurs réponses acceptées
      after: " texte après.",
    },
  ]}
  hint="Indice optionnel."
/>
```

### Convention de nommage des `id`

- Format : `{page}-{type}-{numero}` (ex: `variables-qcm-1`, `boucles-fillblank-2`)
- L'`id` est utilisé pour la persistance `localStorage` — il doit être **unique** dans tout le site.
- Si l'`id` change, l'étudiant devra refaire l'exercice.

### Bonnes pratiques

- **1 à 3 questions par exercice** — reste court et ciblé.
- **Explication systématique** — l'étudiant doit comprendre pourquoi.
- **Réponses acceptées variées** — pour le texte à trous, accepte les variantes (casse, accents, espaces).
- **Pas de dépendance externe** — tout est corrigé côté client.

## Mise en forme dans un exercice

Les textes des exercices (`question`, `options`, `explanation`, `before`, `after`, `hint`) acceptent deux constructions inline :

| Écrit | Rendu |
|---|---|
| `` `du code` `` | du code en style inline |
| `**du gras**` | du gras |

```mdx
question: "Quel type pour un nombre entier ?"          // rendu simple
explanation: "**Attention** : on écrit `declarer nom : type;`"  // rendu formaté
```

Ce n'est **pas** du Markdown complet, et ce n'est pas du JSX : le `*` reste
l'opérateur de multiplication de l'algo papier (`afficher (i * 2)`), donc
l'italique `*texte*` n'est pas supporté — il trollerait les formules.

Conséquence pratique : on écrit `age <- 19;` directement dans la chaîne, sans
échapper le `<`. Si une chaîne contient une apostrophe ou un guillemet, utilise
les guillemets doubles pour l'encadrer.

## Signaler une erreur

Chaque exercice et chaque page de cours ont un lien **Signaler**. Il ouvre un
formulaire d'issue GitHub (`src/components/ReportIssue/`) avec le contexte déjà
rempli : page, exercice, énoncé, et pour un QCM les réponses que l'élève a
retenues. Le site n'envoie rien — c'est l'élève qui valide dans l'éditeur
GitHub, donc rien n'est stocké côté wiki.

Les deux formulaires sont des *issue forms*, dans
`.github/ISSUE_TEMPLATE/` :

| Fichier | Pour | Labels |
|---|---|---|
| `qcm.yml` | un exercice interactif | `signalement`, `qcm` |
| `wiki.yml` | une page de cours | `signalement`, `wiki` |

**Contrainte à respecter** : le pré-remplissage passe par les query params qui
portent l'`id` d'un champ du formulaire. Si tu renommes un `id:` dans le YAML,
le champ correspondant ne se remplira plus automatiquement.

### Triage

- `La bonne réponse est fausse` → corriger l'index dans `correctAnswers`.
- `La question est ambiguë` → plusieurs options se défendent : c'est presque
  toujours un `correctAnswers` trop large. Les réponses répétées dans
  `ma-reponse` sont le signal : si tout le monde choisit la même, c'est l'option
  qui est mal conçue, pas l'élève.
- Fermer avec `duplicate` si le signalement existe déjà.

## Structure du projet

```
docs/           → Pages de cours (.md ou .mdx)
.github/
  ISSUE_TEMPLATE/ → Formulaires d'issue (signalements élèves)
src/
  components/   → Composants React (Landing*, Exercises/, ReportIssue/)
  pages/        → Pages React (index.tsx = landing)
  theme/        → Swizzles Docusaurus (MDXComponents, DocItem/Footer, prism-include-languages)
  css/          → Thème global (custom.css)
```

## Build et vérification

```bash
npm install
npm run typecheck
npm run build
npm run serve
```

Le build doit passer sans erreur. Les pages `.md` existantes ne doivent pas être affectées.
