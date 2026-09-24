---
sidebar_position: 1
title: Comparer
description: vaut, ne_vaut_pas et la logique ET/OU/NON pour poser des questions.
---

# Comparer

**L’idée en une phrase :** avant de choisir (`si`), il faut savoir poser une question à l’ordinateur — et les questions se posent avec `vaut`, pas avec `=`.

:::info[Prérequis]
[Variables](/decouverte/variables) — tu compares des boîtes dont tu connais le contenu.
:::

## Le minimum vital

```algo
age vaut 18
note ne_vaut_pas 20
```

| Ce que tu veux dire | Ce que tu écris |
|---|---|
| égal à | `vaut` |
| différent de | `ne_vaut_pas` |
| plus petit / plus grand | `<`, `>`, `<=`, `>=` |
| les deux vrais | `ET` |
| au moins un vrai | `OU` |
| le contraire | `NON` |
| ET qui s’arrête dès que c’est faux | `ET_ALORS` |
| OU qui s’arrête dès que c’est vrai | `OU_SINON` |

## Pas à pas

Avec `age` qui vaut 19, évaluons `age vaut 18 OU age vaut 19` :

| Étape | Morceau évalué | Résultat |
|---|---|---|
| 1 | `age vaut 18` | faux (19 n’est pas 18) |
| 2 | `OU` | il suffit qu’un côté soit vrai… on continue |
| 3 | `age vaut 19` | vrai |
| **Résultat** | `faux OU vrai` | **vrai** |

## Arithmétique, vite fait

`+ - * / %` comme en maths, plus `modulo (a, b)` pour le reste d’une division :

```algo
reste <- modulo (17, 5);
```

`reste` vaut 2. Tu t’en reserviras pour tester la parité.

## Le court-circuit : l’ordre qui sauve

Contrairement aux maths (tout évalué d’un coup), l’ordinateur évalue **dans l’ordre, de gauche à droite**. `ET_ALORS` et `OU_SINON` exploitent ça : dès que le résultat est joué, **on n’évalue pas la suite**.

Exemple du CM : pour tester la date d’un fichier, vérifie **d’abord** qu’il existe :

```algo
si (fichier_existe (nom) ET_ALORS date_valide (nom))
```

| Étape | Morceau évalué | Résultat |
|---|---|---|
| 1 | `fichier_existe (nom)` | faux (le fichier n’existe pas) |
| 2 | `ET_ALORS` | c’est déjà perdu → **on s’arrête là** |
| 3 | `date_valide (nom)` | **jamais évalué** — et tant mieux, lire la date d’un fichier fantôme planterait |

Avec un `ET` classique, la machine évaluerait quand même la date… et planterait. Retiens : **le test de garde d’abord, l’accès ensuite**. Même logique avec `OU_SINON` dans l’autre sens.

:::danger[Piège Casali]
Trois symboles, trois jobs : `<-` **range**, `vaut` **compare**, `=` tout seul **ne fait ni l’un ni l’autre** dans une condition — oublie-le. Et `==` / `!=` n’existent pas en papier : c’est `vaut` / `ne_vaut_pas`.
:::

## À toi

- **Reproduire** : écris les questions « `note` vaut 10 », « `age` ne vaut pas 0 », « `x` plus grand que 5 ».
- **Adapter** : combine « majeur (`age >= 18`) ET prénom non vide » en une seule question.
- **Créer** : une question qui est vraie quand un nombre est entre 10 et 20 inclus.

<details>
<summary>Solutions</summary>

```algo
note vaut 10
age ne_vaut_pas 0
x > 5
```

```algo
age >= 18 ET prenom ne_vaut_pas ""
```

```algo
x >= 10 ET x <= 20
```
</details>

**Prochaine étape :** [Choisir avec si](/tests/conditions) — tes questions vont enfin servir.
