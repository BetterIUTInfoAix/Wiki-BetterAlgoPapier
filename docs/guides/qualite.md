---
sidebar_position: 3
title: Écrire du code qui ne tue personne
description: Fiabilité, règles NASA et bonne posture face à l'IA.
format: mdx
---

# Écrire du code qui ne tue personne

**L’idée en une phrase :** en pro, on ne juge pas un programme sur « ça marche sur mon exemple » mais sur « ça ne cassera jamais en vrai » — et l’histoire montre ce que coûte l’à-peu-près.

:::info[Prérequis]
Aucun : c’est de la culture d’ingénieur, à lire quand tu veux impressionner en TD.
:::

## Quand l’informatique rate, ça fait mal

Deux catastrophes nées du mépris des spécifications :

- **Ariane 5 (1996)** : le vol inaugural a été détruit 37 secondes après l’allumage du moteur principal. Le rapport de la commission d’enquête impute l’accident à des erreurs de spécification et de conception dans le logiciel du système de référence inertielle ([ESA, présentation du rapport](https://www.esa.int/Newsroom/Press_Releases/Ariane_501_-_Presentation_of_Inquiry_Board_report)).
- **Mars Climate Orbiter (1999)** : la sonde a été perdue après une erreur de conversion entre unités : le logiciel au sol utilisait des unités anglaises alors que celui de bord travaillait en métrique ([NASA, page mission](https://science.nasa.gov/mission/mars-climate-orbiter/)).

Moralité : typer, nommer, vérifier les unités et les bornes, ce n’est pas du zèle — c’est le métier.

## Les 10 règles de la NASA, version L1

La référence du cours adapte dix règles de codage associées à la NASA. En voici la formulation à retenir :

1. **Éliminer les structures de contrôle complexes** : pas de `goto` ni de récursion.
2. **Borner les boucles** : prévoir une borne supérieure fixe et mesurable pour chaque boucle.
3. **Éviter l’allocation dynamique sur le tas** : privilégier une gestion mémoire statique et prévisible. Cette règle semble contredire la section sur les tableaux dynamiques de la référence du dépôt; leur usage reste à clarifier.
4. **Limiter la taille des fonctions** : le corps d’un sous-programme ne dépasse pas l’équivalent d’une page.
5. **Contrôler par assertions** : prévoir au moins deux assertions d’exécution par fonction.
6. **Restreindre la portée des données** : garder chaque variable dans la portée la plus limitée possible.
7. **Vérifier les valeurs de retour** : examiner les retours des fonctions, ou les ignorer explicitement quand c’est intentionnel.
8. **Restreindre le préprocesseur** : réserver ses directives aux usages strictement nécessaires.
9. **Limiter l’usage des pointeurs** : un seul niveau de déréférencement et aucun pointeur de fonction.
10. **Compiler avec les avertissements activés** : traiter chaque avertissement comme une erreur.

Tu n’appliqueras pas les 10 demain — mais les n°2, 4, 6 et 10, dès ton prochain TD.

## Face à l’IA : reste l’arbitre

L’IA produit du code **syntaxiquement correct mais parfois sémantiquement aberrant** — et souvent sans source vérifiable. Le deal du [chapitre 01](/decouverte/penser) :

- ✅ L’IA pour **explorer** (« montre-moi 3 façons de… »), **expliquer** (« pourquoi ce `fsi` ? »), **relire**.
- ❌ Jamais pour **penser à ta place** : si tu ne peux pas tracer son code dans un tableau, tu ne le comprends pas — donc tu ne le rends pas.

L’expert ne sacrifie jamais sa capacité de validation. Ce wiki existe pour ça : te rendre capable de dire « non, ce code est faux, et voilà pourquoi ».

:::tip[Pour briller en partiel]
Cite une règle NASA pertinente dans ta copie (« boucle bornée, règle n°2 ») quand tu justifies une structure : les correcteurs adorent, et ça prouve que tu penses fiabilité, pas juste syntaxe.
:::

**Pour finir :** relis ton [Parcours](/intro) et repère le chapitre où tu es encore fragile — c’est lui, ta prochaine heure de travail.

<Quiz
  id="qualite-qcm-1"
  title="Les règles NASA, version L1"
  multiple
  questions={[
    {
      question: "Quelles règles appliques-tu dès ton prochain TD ? (la page dit : les n°2, 4, 6 et 10)",
      options: [
        "Toute boucle a une borne",
        "Fonctions courtes",
        "Données au plus près",
        "Zéro avertissement",
        "Pas de flux tordus (pas de `goto`)",
      ],
      correctAnswers: [0, 1, 2, 3],
      explanation:
        "Tu n'appliqueras pas les 10 demain — mais les n°2, 4, 6 et 10 sont accessibles dès maintenant. L’interdiction de `goto` correspond à la règle n°1, pas à la règle n°5.",
    },
    {
      question: "Tu découvres un bloc `si` sans `fsi`. Quel piège as-tu repéré ?",
      options: [
        "Le `;` oublié",
        "`<-` confondu avec `vaut`",
        "Le bloc jamais fermé",
        "Le mauvais marqueur",
        "La boucle qui ne s'arrête jamais",
      ],
      correctAnswers: [2],
      explanation:
        "Erreur n°3 : un `si` sans `fsi`, un `pour` sans `ffaire`… le bloc n'est pas fermé et la structure est incomplète.",
    },
    {
      question: "L'IA te propose un algo qui compile mais dont tu ne comprends pas une ligne. Tu rends ?",
      options: [
        "Oui, il compile donc il est correct",
        "Non : si tu ne peux pas le tracer dans un tableau, tu ne le comprends pas — donc tu ne le rends pas",
      ],
      correctAnswers: [1],
      explanation:
        "L'IA assiste, tu valides. Un code syntaxiquement correct mais sémantiquement aberrant est exactement le piège de la dette cognitive.",
    },
  ]}
/>
