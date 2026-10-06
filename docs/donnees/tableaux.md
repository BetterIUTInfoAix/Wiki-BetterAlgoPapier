---
sidebar_position: 1
title: Stocker des séries
description: tableau_de, taille et redimensionner, main dans la main avec pour.
format: mdx
---

# Stocker des séries

**L’idée en une phrase :** quand une seule boîte ne suffit plus (30 notes, 50 prénoms), tu prends un **classeur** : un `tableau_de` qui range toute la série sous un seul nom.

:::info[Prérequis]
[Répéter avec des boucles](/boucles) — on remplit et on lit un tableau avec `pour`.
:::

## Le minimum vital

```algo
declarer notes : tableau_de [30] entier;
```

Un classeur de 30 cases entières, nommé `notes`. La référence décrit aussi les tableaux sans taille annoncée, mais leur emploi est à clarifier puisque la règle d’allocation de cette même référence semble le contredire.

## Les cases sont numérotées à partir de 0

Point crucial du CM : les éléments sont accessibles par un **indice qui va de 0 à taille-1**. Un tableau de 30 cases se parcourt de la case 0 à la case 29 — pas de 1 à 30.

| Tableau `notes` de 3 cases | case 0 | case 1 | case 2 |
|---|---|---|---|
| Contenu saisi | 12 | 8 | 15 |

Retiens le réflexe : **dernière case = `taille - 1`**. Vouloir lire la case `taille`, c’est lire une case qui n’existe pas — plantage garanti le jour du compilateur.

## Pas à pas — remplir puis lire

```algo
algorithme saisirNotes
debut
    declarer notes : tableau_de [3] entier;
    declarer note : entier;
    pour (i variant_de 0 a 2) faire
        afficher ("Note ? ");
        saisir (note);
        notes[i] <- note;
    ffaire
    afficher (taille (notes));
fin
```

| Tour | `i` | `note` saisie | Valeur rangée | Affichage |
|---|---:|---:|---|---|
| 1 | 0 | 12 | `notes[0] <- 12` | — |
| 2 | 1 | 8 | `notes[1] <- 8` | — |
| 3 | 2 | 15 | `notes[2] <- 15` | — |
| fin | — | — | `notes` contient `[12, 8, 15]` | `taille (notes)` affiche 3 |

`taille` te dit combien de cases contient le classeur — ou combien de lettres contient une chaîne.

## Changer la taille en cours de route

La référence documente deux opérations de redimensionnement, mais leur autorisation reste à clarifier avec la règle qui proscrit l’allocation dynamique :

```algo
redimensionner (notes, 60);
allonger (notes, 5);
```

- `redimensionner (t, n)` : le tableau fait désormais exactement `n` cases.
- `allonger (t, n)` : on **ajoute** `n` cases non initialisées à la fin (opération documentée dans la référence, mais à clarifier au regard de la règle contre l’allocation dynamique).

:::danger[Piège Casali]
Déclare le tableau **avant** la boucle qui le remplit, parcours les indices de `0` à `taille (notes) - 1`, et range chaque saisie dans la case correspondante (`notes[i]`).
:::

## À toi

- **Reproduire** : déclare un `tableau_de [10] reel` nommé `prix`, affiche sa `taille`.
- **Adapter** : saisis 5 prénoms dans un tableau de `string` avec un `pour`, puis affiche la `taille`.
- **Créer** : si l’enseignant confirme que les tableaux dynamiques sont autorisés, déclare un tableau, `redimensionner`-le au double et affiche les deux tailles.

<details>
<summary>Solutions</summary>

```algo
declarer prix : tableau_de [10] reel;
afficher (taille (prix));
```

```algo
algorithme saisirPrenoms
debut
    declarer noms : tableau_de [5] string;
    pour (i variant_de 0 a 4) faire
        afficher ("Prénom ? ");
        saisir (noms[i]);
    ffaire
    afficher (taille (noms));
fin
```
</details>

**Prochaine étape :** [Boîte à outils](/donnees/builtins) — les fonctions toutes prêtes qui te font gagner du temps.

<FillInBlank
  id="tableaux-fillblank-1"
  title="Complète les trous"
  blanks={[
    {
      before: "Pour déclarer un classeur de 30 cases entières nommé notes, on écrit : declarer notes : tableau_de [",
      accepted: ["30", "trente"],
      after: "] ",
    },
    {
      before: "",
      accepted: ["entier"],
      after: ";",
    },
    {
      before: "Dans un tableau de 30 cases, la dernière case porte l'indice ",
      accepted: ["29"],
      after: " (c'est taille - 1).",
    },
    {
      before: "Le nombre de cases s'obtient avec ",
      accepted: ["taille"],
      after: ".",
    },
    {
      before: "Pour ajouter 5 cases vides à la fin d'un tableau t, on appelle ",
      accepted: ["allonger", "allonger(t, 5)"],
      after: " ; pour le remettre exactement à 60 cases, on appelle ",
    },
    {
      before: "",
      accepted: ["redimensionner", "redimensionner(t, 60)"],
      after: ".",
    },
  ]}
  hint="Indice : un indice commence à 0, et les deux outils de redimensionnement ne font pas la même chose."
/>

