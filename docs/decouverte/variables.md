---
sidebar_position: 4
title: Variables
description: Ranger des valeurs dans des boîtes typées avec declarer et <-.
---

# Variables

**L’idée en une phrase :** une variable, c’est une **case mémoire** — une boîte étiquetée (son nom) qui ne contient qu’une sorte de chose (son type), et tu y ranges avec `<-`.

:::info[Prérequis]
[Afficher et saisir](/decouverte/entrees-sorties) — tu as déjà utilisé des variables sans le savoir.
:::

## Le minimum vital

```algo
declarer age : entier;
age <- 19;
```

La déclaration suit toujours le modèle `declarer nom : Type;`. Une case = **une seule valeur** à la fois : ranger une nouvelle valeur écrase l’ancienne.

Et les 7 types à connaître :

| Type | Contient | Exemple |
|---|---|---|
| `entier` | nombre sans virgule | `-3`, `19` |
| `entier_naturel` | nombre positif | `0`, `42` |
| `reel` | nombre à virgule, notation scientifique acceptée | `3.5`, `-21.2e12` |
| `booleen` | `vrai` ou `faux` | `vrai` |
| `caractere` | un symbole entre simples quotes | `'a'` |
| `string` | du texte entre doubles quotes | `"Léa"` |
| `tableau_de` | une série (détaillée au [chapitre 04](/donnees/tableaux)) | `tableau_de 30 entier` |

## Pas à pas

```algo
declarer age : entier;
age <- 19;
age <- age + 1;
afficher (age);
```

| Étape | Ligne lue | Boîte `age` | Affichage |
|---|---|---|---|
| 1 | `declarer age : entier;` | boîte vide, prête | — |
| 2 | `age <- 19;` | 19 | — |
| 3 | `age <- age + 1;` | 20 (on lit 19, on ajoute 1, on re-range) | — |
| 4 | `afficher (age);` | 20 | 20 |

Lis `<-` comme « prend la valeur ». La flèche montre où va la valeur : toujours **vers** la variable.

## Nommer, c’est déjà programmer

La nomenclature n’est pas de la déco, c’est de la **maintenance** : dans 3 mois (ou pour ton voisin de TD), un bon nom explique le code tout seul.

- **Variables en CamelCase** : on colle les mots, chaque nouveau mot commence par une majuscule — `superPlombier`, `moyenneGenerale`, `nombreEleves`.
- **Constantes avec `K` devant** (obligatoire) : `KtauxTVA`, `KMAJEUR`.

```algo
declarer KtauxTVA : reel <- 0.2;
declarer prixTTC : reel;
prixTTC <- prixHT * (1 + KtauxTVA);
```

Une erreur de nom ne bloque pas l’exécution mais ruine la compréhension : appeler `Link` un livreur de princesse au lieu de `Mario`, personne ne s’y retrouve. Nomme ce que c’est, pas ce que ça fait joli.

:::tip[Caractères voisins]
`succ (c)` donne le caractère suivant, `prec (c)` le précédent (certains polys écrivent `pred`, c’est la même idée — dans l’extension et ce wiki, c’est `prec`).
:::

## Constantes

Une valeur qui ne changera jamais, avec un `K` devant (voir ci-dessus) :

```algo
declarer KMAJEUR : entier <- 18;
```

:::danger[Piège Casali]
`=` n’affecte **rien** en algo papier. `age = 19` ne range pas 19 dans `age` — il faut `age <- 19`. C’est l’erreur n°1 des débutants, et c’est normal de la faire.
:::

## À toi

- **Reproduire** : déclare un `reel` nommé `moyenne`, range `12.5` dedans, affiche-le.
- **Adapter** : déclare deux entiers, range une valeur dans chacun, puis échange leur contenu avec une 3ᵉ variable.
- **Créer** : un programme qui saisit un prix, applique 20 % de réduction dans une 2ᵉ variable, et affiche le résultat.

<details>
<summary>Solutions (reproduire + adapter)</summary>

```algo
declarer moyenne : reel;
moyenne <- 12.5;
afficher (moyenne);
```

```algo
declarer a : entier <- 3;
declarer b : entier <- 7;
declarer tmp : entier;
tmp <- a;
a <- b;
b <- tmp;
```
</details>

**Prochaine étape :** [Comparer des valeurs](/tests/operateurs) — pour enfin utiliser ces variables dans des décisions.
