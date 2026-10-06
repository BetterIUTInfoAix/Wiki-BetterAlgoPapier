---
sidebar_position: 1
title: Attaquer un énoncé sans paniquer
description: Une méthode en 6 étapes pour passer du sujet au programme.
format: mdx
---

# Attaquer un énoncé sans paniquer

**L’idée en une phrase :** face à un énoncé, ne code jamais tout de suite — suis ces 6 étapes dans l’ordre, et le programme s’écrira presque tout seul.

:::info[Prérequis]
Avoir survolé les [Premiers pas](/decouverte/algorithme). Cette page sert pendant tout le semestre.
:::

## La méthode

1. **Relis l’énoncé deux fois.** Souligne les entrées (ce qu’on te donne), la sortie (ce qu’on attend) et les cas particuliers.
2. **Liste tes variables.** Pour chacune : nom, type, rôle. Dans le programme, déclare-les toutes au début du corps, juste après `debut`, avant toute instruction.
3. **Pose le squelette.** `algorithme` / `debut` / `fin`, rien d’autre. Tu as déjà un programme valide.
4. **Ajoute les E/S.** `afficher` pour guider l’utilisateur, `saisir` pour lire. Teste mentalement : ça dialogue déjà.
5. **Choisis tes structures.** Un choix → [si](/tests/conditions). Une répétition → [boucles](/boucles). Une série → [tableaux](/donnees/tableaux). Un bout réutilisable → [fonction](/routines/fonctions).
6. **Trace à la main.** Prends 2–3 jeux de valeurs (dont un cas limite : 0, vide, maximum) et remplis un tableau de trace comme au [chapitre 03](/boucles).

## Exemple complet

Énoncé : *lire deux notes, afficher leur moyenne.*

```algo
algorithme moyenneDeuxNotes
debut
    declarer n1 : reel;
    declarer n2 : reel;
    declarer m : reel;
    afficher ("Note 1 ? ");
    saisir (n1);
    afficher ("Note 2 ? ");
    saisir (n2);
    m <- (n1 + n2) / 2;
    afficher (m);
fin
```

Trace avec `n1 = 10`, `n2 = 14` :

| Étape | `n1` | `n2` | `m` | Affichage |
|---|---|---|---|---|
| saisir | 10 | — | — | — |
| saisir | 10 | 14 | — | — |
| calcul | 10 | 14 | 12 | — |
| afficher | 10 | 14 | 12 | 12 |

:::tip[Bloqué plus de 10 minutes ?]
Reviens une étape en arrière : un blocage vient souvent d’une variable mal choisie (étape 2) ou d’un énoncé mal lu (étape 1), pas de la syntaxe.
:::

**Ensuite :** [les erreurs que tout le monde fait](/guides/erreurs-frequentes) — pour les reconnaître avant la correction.

<Quiz
  id="methode-qcm-1"
  title="L'ordre compte"
  questions={[
    {
      question: "Tu as un énoncé sous les yeux et tu ne sais pas par où commencer. Quelle est la première étape ?",
      options: [
        "Écrire direct le code, la syntaxe viendra",
        "Relire l'énoncé deux fois et isoler entrées, sortie et cas particuliers",
        "Chercher un programme similaire sur internet",
      ],
      correctAnswers: [1],
      explanation:
        "Étape 1 de la méthode : commence par clarifier l'énoncé et les variables avant de chercher une erreur de syntaxe.",
    },
    {
      question: "Pourquoi regrouper toutes les déclarations au début du corps, juste après `debut` ?",
      options: [
        "Parce que le compilateur l'impose",
        "Parce que ça réduit le nombre de lignes",
        "Pour avoir la liste complète : nom, type, rôle — et les repérer d'un coup d'œil",
      ],
      correctAnswers: [2],
      explanation:
        "Étape 2 : la liste des variables est un document de conception. C'est aussi là que tu attrapes les variables jamais utilisées ou jamais déclarées.",
    },
    {
      question: "Tu bloques depuis 10 minutes sur un énoncé. Que faire ?",
      options: [
        "Revenir une étape en arrière — le plus souvent c'est l'énoncé ou le choix des variables",
        "Attendre la correction pour comprendre",
        "Rajouter des `afficher` au hasard partout",
      ],
      correctAnswers: [0],
      explanation:
        "Revenir d'un cran coûte moins cher que d'accumuler du code faux. Et la règle d'or du débogage : un seul suspect à la fois.",
    },
  ]}
/>
