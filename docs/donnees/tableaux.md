---
sidebar_position: 1
title: Stocker des séries
description: tableau_de, taille et redimensionner, main dans la main avec pour.
---

# Stocker des séries

**L’idée en une phrase :** quand une seule boîte ne suffit plus (30 notes, 50 prénoms), tu prends un **classeur** : un `tableau_de` qui range toute la série sous un seul nom.

:::info Prérequis
[Répéter avec des boucles](/boucles) — on remplit et on lit un tableau avec `pour`.
:::

## Le minimum vital

```algo
declarer notes : tableau_de 30 entier;
```

Un classeur de 30 cases entières, nommé `notes`. Il existe aussi sans taille annoncée, et avec d’autres contenus :

```algo
declarer noms : tableau_de 50 string;
```

## Les cases sont numérotées à partir de 0

Point crucial du CM : les éléments sont accessibles par un **indice qui va de 0 à taille-1**. Un tableau de 30 cases se parcourt de la case 0 à la case 29 — pas de 1 à 30.

| Tableau `notes` de 3 cases | case 0 | case 1 | case 2 |
|---|---|---|---|
| Contenu saisi | 12 | 8 | 15 |

Retiens le réflexe : **dernière case = `taille - 1`**. Vouloir lire la case `taille`, c’est lire une case qui n’existe pas — plantage garanti le jour du compilateur.

## Pas à pas — remplir puis lire

```algo
pour (i variant_de 1 a 3)
faire
    afficher ("Note ? ");
    saisir (note);
ffaire
afficher (taille (notes));
```

| Tour | `i` | `note` saisie | Affichage final |
|---|---|---|---|
| 1 | 1 | 12 | — |
| 2 | 2 | 8 | — |
| 3 | 3 | 15 | — |
| fin | — | — | `taille (notes)` → le nombre de cases |

`taille` te dit combien de cases contient le classeur — ou combien de lettres contient une chaîne.

## Changer la taille en cours de route

Deux outils, deux jobs :

```algo
redimensionner (notes, 60);
allonger (notes, 5);
```

- `redimensionner (t, n)` : le tableau fait désormais exactement `n` cases.
- `allonger (t, n)` : on **ajoute** `n` cases non initialisées à la fin (vu en CM — la coloration arrive bientôt dans l’extension).

Ton classeur de 30 passe à 60 cases avec le premier, ou à 35 cases (dont 5 vides) avec le second. Pratique quand tu ne connais pas le nombre d’élèves à l’avance.

:::danger Piège Casali
Déclare le tableau **avant** la boucle qui le remplit, et ne confonds pas le tableau (`notes`, le classeur) avec la variable temporaire (`note`, une case). Relis ton code à voix haute : « je saisis une note, je la range dans notes ».
:::

## À toi

- **Reproduire** : déclare un `tableau_de 10 reel` nommé `prix`, affiche sa `taille`.
- **Adapter** : saisis 5 prénoms dans un tableau de `string` avec un `pour`, puis affiche la `taille`.
- **Créer** : déclare un tableau, `redimensionner`-le au double, affiche les deux tailles.

<details>
<summary>Solutions</summary>

```algo
declarer prix : tableau_de 10 reel;
afficher (taille (prix));
```

```algo
declarer noms : tableau_de 5 string;
pour (i variant_de 1 a 5)
faire
    afficher ("Prénom ? ");
    saisir (prenom);
ffaire
afficher (taille (noms));
```
</details>

**Prochaine étape :** [Boîte à outils](/donnees/builtins) — les fonctions toutes prêtes qui te font gagner du temps.
