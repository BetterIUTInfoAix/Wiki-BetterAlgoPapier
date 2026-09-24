---
sidebar_position: 2
title: Les erreurs de tout le monde
description: Les 5 pièges classiques et comment les repérer seul.
---

# Les erreurs de tout le monde

**L’idée en une phrase :** ces 5 erreurs, **tous** les débutants les font — les connaître, c’est les repérer en dix secondes au lieu de chercher une heure.

:::info[Prérequis]
Aucun : reviens ici chaque fois qu’un programme « ne marche pas ».
:::

## 1. Le `;` oublié

```algo
afficher ("oubli")
```

Le compilateur (et ton prof) attendent un `;` à la fin de chaque instruction simple. Seules les lignes de moule (`algorithme`, `debut`, `fin`, `si`, `faire`…) s’en passent.

## 2. `<-` confondu avec `vaut`

```algo
si (x <- 10)
    afficher ("dix");
fsi
```

Ici tu **ranges** 10 dans `x` au lieu de **demander** si `x` vaut 10. Relis à voix haute : « si x prend 10 » ne veut rien dire → c’est `si (x vaut 10)`.

## 3. Le bloc jamais fermé

Un `si` sans `fsi`, un `pour` sans `ffaire`, un `choix_sur` sans `fchoix`… et le programme « fait les deux chemins ». Réflexe : dans l’extension, replie les blocs un par un — celui qui ne se plie pas est celui qui manque sa fin.

## 4. Le mauvais marqueur

Ta procédure modifie une variable mais elle est déclarée `in` ? C’est comme écrire sur un cahier sous plastique : impossible. Passe en `in_out` (ou `out`) — détails au [chapitre 05](/routines/fonctions).

## 5. La boucle qui ne s’arrête jamais

```algo
tant_que (age vaut 0)
faire
    afficher ("Donne ton âge");
ffaire
```

On teste `age` mais on ne le modifie jamais dans le corps : si `age` vaut 0 au départ, ça tourne pour toujours. Il manque le `saisir (age);` dans la boucle. En cas de doute, trace deux tours dans un tableau ([chapitre 03](/boucles)).

:::tip[Règle d’or du débogage]
Un seul suspect à la fois : affiche tes variables avec `afficher` juste avant l’endroit bizarre. Ce que montre l’écran tranche entre « la valeur est fausse » et « le test est faux ».
:::
