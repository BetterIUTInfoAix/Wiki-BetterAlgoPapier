---
sidebar_position: 3
title: Afficher et saisir
description: "Dialoguer avec l’utilisateur : afficher, saisir, ligne_suivante."
format: mdx
---

# Afficher et saisir

**L’idée en une phrase :** ton programme peut parler (`afficher`) et écouter (`saisir`) — c’est comme ça qu’il devient interactif.

:::info[Prérequis]
[Écrire ton premier algorithme](/decouverte/algorithme) (le moule `debut`/`fin`).
:::

## Le minimum vital

```algo
declarer age : entier;
afficher ("Quel âge as-tu ? ");
saisir (age);
afficher (age);
```

`afficher` montre, `saisir` attend que l’utilisateur tape quelque chose et le range dans `age`. On déclare toujours la variable avant de l’utiliser; la déclaration est détaillée à la [page suivante](/decouverte/variables).

## Pas à pas

Imaginons que l’utilisateur tape `19` :

| Étape | Ligne lue | Ce qui se passe |
|---|---|---|
| 1 | `declarer age : entier;` | La variable `age` est déclarée, mais pas encore initialisée |
| 2 | `afficher ("Quel âge as-tu ? ");` | L’écran affiche : Quel âge as-tu ? |
| 3 | `saisir (age);` | Le programme attend… l’utilisateur tape `19`, `age` vaut maintenant 19 |
| 4 | `afficher (age);` | L’écran affiche : 19 |

## Sauter une ligne

```algo
afficher ("Ligne 1");
ligne_suivante;
afficher ("Ligne 2");
```

`ligne_suivante;` sert quand tes affichages deviennent complexes et que tu veux forcer le retour à la ligne.

## Ne jamais faire confiance à l’utilisateur (NTUI)

Règle d’or du CM : **NTUI — Never Trust User Input.** Toute saisie est potentiellement erronée (ou malveillante) : l’utilisateur peut taper une lettre quand tu attends un nombre, ou une valeur hors de l’intervalle autorisé. Ne crois jamais une saisie sur parole — **vérifie-la** avec un test ou une boucle :

```algo
declarer age : entier;
afficher ("Ton âge ? ");
saisir (age);
tant_que (age <= 0) faire
    afficher ("Un vrai âge, stp : ");
    saisir (age);
ffaire
```

Tu reverras ce motif partout : saisir, tester, re-saisir tant que c’est invalide. (La boucle `tant_que` est détaillée au [chapitre 03](/boucles).)

## Les textes, en détail

Le type `string`, c’est du texte entre doubles quotes, avec trois super-pouvoirs. Le premier exemple illustre les guillemets protégés :

```algo
afficher ("AEIOUY\"");
```

Le second déclare et saisit `prenom` avant de le concaténer :

```algo
declarer prenom : string;
saisir (prenom);
afficher ("Bonjour " + prenom);
```

- **Guillemets protégés** : `\"` affiche un vrai guillemet dans le texte.
- **Concaténation avec `+`** : on colle deux chaînes bout à bout.
- **Accès caractère par caractère** : un `string` se lit comme un tableau (voir [chapitre 04](/donnees/tableaux)).

:::danger[Piège Casali]
Chaque instruction se termine par `;` — y compris `saisir (age);` et `ligne_suivante;`. Les doubles quotes `"..."` pour les phrases, les simples quotes `'a'` pour un seul caractère.
:::

## À toi

- **Reproduire** : un programme qui affiche une question, saisit une réponse, puis la réaffiche.
- **Adapter** : demande le prénom **et** l’âge, puis affiche les deux.
- **Créer** : un mini questionnaire en 3 questions avec `ligne_suivante;` entre chaque.

<details>
<summary>Solution (niveau adapter)</summary>

```algo
algorithme fiche
debut
    declarer prenom : string;
    declarer age : entier;
    afficher ("Ton prénom ? ");
    saisir (prenom);
    afficher ("Ton âge ? ");
    saisir (age);
    ligne_suivante;
    afficher (prenom);
    afficher (age);
fin
```
</details>

**Prochaine étape :** [Déclarer des variables](/decouverte/variables) — pour comprendre ces lignes `declarer` que tu as admises.

<Quiz
  id="entrees-sorties-qcm-1"
  title="Parler, écouter, ne pas faire confiance"
  questions={[
    {
      question: "Quelle instruction attend que l'utilisateur tape une réponse ?",
      options: ["`afficher`", "`saisir`", "`ligne_suivante`"],
      correctAnswers: [1],
      explanation:
        "`afficher` montre, `saisir` attend et range la réponse dans la variable indiquée, `ligne_suivante;` force un retour à la ligne.",
    },
    {
      question: "NTUI, ça veut dire…",
      options: [
        "Ne Tapis Une Information",
        "**Never Trust User Input** : toute saisie est à vérifier avant de l'utiliser",
        "Ne Tracker Un Utilisateur",
      ],
      correctAnswers: [1],
      explanation:
        "L'utilisateur peut taper une lettre quand tu attends un nombre. Le motif de la page : saisir, tester, re-saisir tant que c'est invalide.",
    },
    {
      question: "Tu veux afficher du texte qui **contient** des guillemets. Quelle règle appliquer ?",
      options: [
        "Les doubles quotes pour une phrase, les simples quotes pour un seul caractère",
        "Les guillemets se protègent avec un antislash : un guillemet affiché s'écrit antislash + guillemet",
        "Un string ne peut pas contenir de guillemet",
      ],
      correctAnswers: [1],
      explanation:
        "C'est le troisième super-pouvoir du `string` : `\"` affiche un vrai guillemet. Retiens aussi : doubles quotes pour une phrase, simples quotes pour un seul caractère.",
    },
  ]}
/>
