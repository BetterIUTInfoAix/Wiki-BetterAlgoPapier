---
sidebar_position: 1
title: Répéter sans copier-coller
description: pour, tant_que, repeter et boucle — avec tableaux d’exécution.
format: mdx
---

# Répéter sans copier-coller

**L’idée en une phrase :** dès que tu te surprends à copier-coller la même ligne, c’est qu’il te faut une boucle — tu décris **combien de fois** ou **jusqu’à quand**, et elle s’occupe du reste.

:::info[Prérequis]
[Choisir avec si](/tests/conditions) — les boucles testent des conditions à chaque tour.
:::

## Le minimum vital

```algo
pour (i variant_de 1 a 3) faire
    afficher (i);
ffaire
```

Affiche 1, puis 2, puis 3. Le mot bizarre `variant_de ... a ...` veut juste dire « `i` se promène de 1 à 3 ».

## Pas à pas — la trace, ton super-pouvoir

Sur papier, on suit une boucle avec un **tableau de trace** : une colonne par variable, une ligne par tour. C’est exactement ce que ton prof fait en correction.

| Tour | `i` | Affichage |
|---|---|---|
| 1 | 1 | 1 |
| 2 | 2 | 2 |
| 3 | 3 | 3 |
| fin | — | la boucle s’arrête (`i` a dépassé 3) |

Prends l’habitude de tracer : un tableau de trace aide souvent à repérer les erreurs de boucle avant de terminer le programme.

## Les boucles conditionnelles et la boucle infinie

La référence présente à la fois une règle générale de bornage fixe et des boucles conditionnelles sans borne statique; cette contradiction reste à clarifier. Les exemples ci-dessous suivent les formes de boucles décrites dans ses sections détaillées.

**`tant_que` — on répète tant que c’est vrai (zéro tour possible) :**

```algo
declarer age : entier;
afficher ("Quel âge as-tu ? ");
saisir (age);
tant_que (age <= 0) faire
    afficher ("Un vrai âge, stp : ");
    saisir (age);
ffaire
```

Si l’utilisateur tape directement 19, le corps ne tourne jamais. Trace avec `age` initialisé à `0`, puis saisi à `19` : premier tour exécuté, deuxième test faux → sortie.

**`jusqua ... faire` — on répète jusqu’à ce que ce soit vrai :**

```algo
declarer mot : string;
afficher ("Saisis un mot (stop pour terminer) : ");
saisir (mot);
jusqua (mot vaut "stop") faire
    afficher (mot);
    afficher ("Saisis un autre mot (stop pour terminer) : ");
    saisir (mot);
ffaire
```

**`repeter ... tant_que` — post-condition d’exécution, au moins un tour :**

```algo
declarer code : entier;
repeter
    saisir (code);
tant_que (code ne_vaut_pas 1234)
```

Le corps s’exécute d’abord; il est répété tant que le code ne vaut pas 1234.

**`repeter ... jusqua` — post-condition d’arrêt, au moins un tour :**

```algo
declarer code : entier;
repeter
    saisir (code);
jusqua (code vaut 1234)
```

Ici pas besoin de saisir avant la boucle : le corps tourne d’abord, on teste après.

**`boucle` + `sortie` — sortie manuelle au milieu :**

```algo
declarer x : entier;
boucle
    saisir (x);
    si (x vaut 0)
        sortie;
    fsi
    afficher (x * 2);
fboucle
```

## Sauter un tour avec `continue`

Parfois tu ne veux ni sortir ni t’enfoncer dans des `si` imbriqués : `continue` remonte **immédiatement** au début de la boucle et passe au tour suivant.

```algo
pour (i variant_de 1 a 10) faire
    si (modulo (i, 2) vaut 1)
        continue;
    fsi
    afficher (i);
ffaire
```

| Tour | `i` | Test `modulo vaut 1` ? | Affichage |
|---|---|---|---|
| 1 | 1 | vrai (impair) → `continue` | — |
| 2 | 2 | faux (pair) | 2 |
| 3 | 3 | vrai → `continue` | — |
| … | … | … | 4, 6, 8, 10 |

Résultat : seuls les pairs s’affichent, sans un seul niveau d’indentation en plus. `continue` aplatit le code : au lieu d’imbriquer « si pair alors afficher », tu éjectes les cas inintéressants d’abord.

## La règle stricte du `pour`

La référence interdit `sortie` dans un `pour` : la variable de parcours doit visiter chaque valeur de l’intervalle, sans rupture.

```algo
pour (i variant_de 1 a 10) faire
    si (i vaut 5)
        sortie;
    fsi
ffaire
```

Ça, c’est interdit par la référence : dans cette boucle, la variable de parcours doit visiter toutes les valeurs de l’intervalle. Si le traitement doit pouvoir s’interrompre selon une condition, choisis plutôt une structure conditionnelle documentée dans la référence.

## Quelle boucle choisir ?

| Ta phrase | Ta boucle |
|---|---|
| « Pour `i` de 1 à 10 » (nombre de tours connu) | `pour` |
| « Tant que ce n’est pas bon » (zéro tour possible) | `tant_que` |
| « Jusqu’à ce que ce soit bon » (zéro tour possible) | `jusqua ... faire` |
| « Au moins une fois, puis jusqu’à ce que… » | `repeter ... jusqua` |
| « Je sortirai quand je déciderai » | `boucle` + `sortie` |

:::danger[Piège Casali]
La boucle infinie accidentelle : dans une `tant_que`, la variable testée **doit changer** dans le corps. Si tu testes `age` mais que tu ne `saisir` rien dedans, ça tourne pour toujours. En cas de doute : trace deux tours dans ton tableau.
:::

## À toi

- **Reproduire** : affiche les nombres de 1 à 5 avec un `pour`, puis trace ton tableau.
- **Adapter** : affiche les nombres pairs de 2 à 20 (indice : `i * 2`).
- **Créer** : demande un mot de passe avec `repeter ... jusqua` jusqu’à ce qu’il vaille `"casali"`.

<details>
<summary>Solutions</summary>

```algo
pour (i variant_de 1 a 5) faire
    afficher (i);
ffaire
```

```algo
algorithme pairsJusqua20
debut
    pour (i variant_de 1 a 10) faire
        afficher (i * 2);
    ffaire
fin
```

```algo
declarer mdp : string;
repeter
    afficher ("Mot de passe ? ");
    saisir (mdp);
jusqua (mdp vaut "casali")
```
</details>

**Prochaine étape :** [Stocker des séries](/donnees/tableaux) — les boucles et les tableaux sont inséparables.

<Quiz
  id="boucles-qcm-1"
  title="Choisir la bonne boucle"
  questions={[
    {
      question: "Tu veux afficher les nombres pairs de 2 à 20. Quelle boucle ?",
      options: [
        "Un `pour` de 1 à 10 qui affiche `i * 2`",
        "Un `pour` de 2 à 20 avec un `si` pour sauter les impairs",
        "Un `tant_que` tant que i vaut moins que 20",
      ],
      correctAnswers: [0],
      explanation:
        "Le `pour` à compteur est fait pour ça : on connaît déjà le nombre de tours. `i * 2` fait la multiplication, pas un saut d'itération.",
    },
    {
      question: "Pourquoi `sortie` est-il interdit dans un `pour` ?",
      options: [
        "Parce que `sortie` n'existe que dans `boucle`",
        "Parce que la variable de parcours doit visiter chaque valeur, sans rupture",
        "Parce que `sortie` est plus lent qu'un `si`",
      ],
      correctAnswers: [1],
      explanation:
        "La référence interdit `sortie` dans un `pour` : la variable de parcours doit visiter chaque valeur de l'intervalle. Besoin d'une interruption conditionnelle ? Choisis une boucle conditionnelle.",
    },
    {
      question: "Tu veux redemander l'âge tant que l'utilisateur donne un nombre négatif. Quelle boucle, et que manque-t-il dans le corps ?",
      options: [
        "`tant_que (age <= 0)` — il manque le `saisir (age);` qui change `age`",
        "`pour` de 1 à 10 — il manque un `i * 2`",
        "`repeter ... jusqua` — il manque un `afficher`",
      ],
      correctAnswers: [0],
      explanation:
        "La boucle infinie accidentelle : dans une `tant_que`, la variable testée **doit** changer dans le corps. Sinon ça tourne pour toujours.",
    },
  ]}
/>
