---
sidebar_position: 2
title: Les erreurs de tout le monde
description: Les 5 pièges classiques et comment les repérer seul.
format: mdx
---

# Les erreurs de tout le monde

**L’idée en une phrase :** ces 5 erreurs sont fréquentes chez les débutants — les reconnaître aide à orienter le débogage.

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

Un `si` sans `fsi`, un `pour` sans `ffaire`, un `choix_sur` sans `fchoix`… et le bloc est incomplet. Réflexe : dans l’extension, replie les blocs un par un — celui qui ne se plie pas est celui qui manque sa fin.

## 4. Le mauvais marqueur

Ta procédure modifie une variable mais elle est déclarée `in` ? C’est comme écrire sur un cahier sous plastique : impossible. Passe en `in_out` (ou `out`) — détails au [chapitre 05](/routines/fonctions).

## 5. La boucle qui ne s’arrête jamais

```algo
algorithme boucleInfinie
debut
    declarer age : entier;
    age <- 0;
    tant_que (age vaut 0) faire
        afficher ("Donne ton âge");
    ffaire
fin
```

On initialise `age` à 0, puis on la teste sans jamais la modifier dans le corps : la boucle tourne pour toujours. Il manque le `saisir (age);` dans la boucle. En cas de doute, trace deux tours dans un tableau ([chapitre 03](/boucles)).

:::tip[Règle d’or du débogage]
Un seul suspect à la fois : affiche tes variables avec `afficher` juste avant l’endroit bizarre. Ce que montre l’écran tranche entre « la valeur est fausse » et « le test est faux ».
:::

<Quiz
  id="erreurs-frequentes-qcm-1"
  title="C'est laquelle, l'erreur ?"
  questions={[
    {
      question: "`si (x <- 10)` — qu'est-ce qui ne va pas ?",
      options: [
        "`<-` ne peut pas être utilisé dans un `si`",
        "Dans un `si`, on **compare** : il faut écrire `si (x vaut 10)`",
        "Il manque un `fsi`",
      ],
      correctAnswers: [1],
      explanation:
        "Erreur n°2 : tu **ranges** 10 dans `x` au lieu de **demander** si `x` vaut 10. Relis à voix haute : « si x prend 10 » ne veut rien dire.",
    },
    {
      question: "Tu constates qu'un bloc `si` n'a pas de `fsi`. Quelle erreur as-tu repérée ?",
      options: [
        "Un bloc conditionnel incomplet",
        "Une comparaison entre deux variables",
        "Une variable qui n'a pas été déclarée",
      ],
      correctAnswers: [0],
      explanation:
        "Un `si` doit se terminer par `fsi`. Sans ce marqueur, le bloc conditionnel est incomplet; cela ne permet pas de conclure que ses deux branches s'exécutent.",
    },
    {
      question: "Dans l'exemple, `age` vaut 0 et `tant_que (age vaut 0)` affiche « Donne ton âge » en boucle infinie. Pourquoi ?",
      options: [
        "`tant_que` est maladif",
        "On teste `age` mais on ne le modifie jamais dans le corps : le `saisir (age);` manque",
        "Il faut un `fsi` autour",
      ],
      correctAnswers: [1],
      explanation:
        "Erreur n°5 : dans une `tant_que`, la variable testée **doit** changer dans le corps. Trace deux tours dans un tableau et tu le verras tout de suite.",
    },
  ]}
/>
