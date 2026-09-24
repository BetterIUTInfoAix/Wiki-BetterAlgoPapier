---
sidebar_position: 1
title: Répéter sans copier-coller
description: pour, tant_que, repeter et boucle — avec tableaux d’exécution.
---

# Répéter sans copier-coller

**L’idée en une phrase :** dès que tu te surprends à copier-coller la même ligne, c’est qu’il te faut une boucle — tu décris **combien de fois** ou **jusqu’à quand**, et elle s’occupe du reste.

:::info Prérequis
[Choisir avec si](/tests/conditions) — les boucles testent des conditions à chaque tour.
:::

## Le minimum vital

```algo
pour (i variant_de 1 a 3)
faire
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

Prends l’habitude de tracer : 80 % des bugs de boucles se voient dans le tableau avant même de finir le programme.

## Les 4 autres boucles

**`tant_que` — on répète tant que c’est vrai (zéro tour possible) :**

```algo
afficher ("Quel âge as-tu ? ");
saisir (age);
tant_que (age <= 0)
faire
    afficher ("Un vrai âge, stp : ");
    saisir (age);
ffaire
```

Si l’utilisateur tape directement 19, le corps ne tourne jamais. Trace avec `age = 0` puis `19` : premier tour exécuté, deuxième test faux → sortie.

**`jusqua ... faire` — on répète jusqu’à ce que ce soit vrai :**

```algo
jusqua (mot vaut "stop")
faire
    saisir (mot);
ffaire
```

**`repeter ... jusqua` — pareil, mais au moins un tour garanti :**

```algo
repeter
    saisir (code);
jusqua (code vaut 1234)
```

Ici pas besoin de saisir avant la boucle : le corps tourne d’abord, on teste après.

**`boucle` + `sortie` — sortie manuelle au milieu :**

```algo
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
pour (i variant_de 1 a 10)
faire
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

Règle du CM, non négociable : dans un `pour`, la variable de parcours **doit visiter chaque valeur, sans rupture**. Autrement dit : **pas de `sortie` dans un `pour`**.

```algo
pour (i variant_de 1 a 10)
faire
    si (i vaut 5)
        sortie;
    fsi
ffaire
```

Ça, c’est interdit. Pourquoi ? Parce que la prévisibilité du `pour` permet au système d’optimiser (et un jour de paralléliser) : s’il peut partir en vrille à tout moment, adieu les optimisations. Besoin de sortir en cours de route ? Prends `tant_que` ou `boucle`, c’est fait pour ça.

## Quelle boucle choisir ?

| Ta phrase | Ta boucle |
|---|---|
| « Pour `i` de 1 à 10 » (nombre de tours connu) | `pour` |
| « Tant que ce n’est pas bon » (zéro tour possible) | `tant_que` |
| « Jusqu’à ce que ce soit bon » (zéro tour possible) | `jusqua ... faire` |
| « Au moins une fois, puis jusqu’à ce que… » | `repeter ... jusqua` |
| « Je sortirai quand je déciderai » | `boucle` + `sortie` |

:::danger Piège Casali
La boucle infinie accidentelle : dans une `tant_que`, la variable testée **doit changer** dans le corps. Si tu testes `age` mais que tu ne `saisir` rien dedans, ça tourne pour toujours. En cas de doute : trace deux tours dans ton tableau.
:::

## À toi

- **Reproduire** : affiche les nombres de 1 à 5 avec un `pour`, puis trace ton tableau.
- **Adapter** : affiche les nombres pairs de 2 à 20 (indice : `i * 2`).
- **Créer** : demande un mot de passe avec `repeter ... jusqua` jusqu’à ce qu’il vaille `"casali"`.

<details>
<summary>Solutions</summary>

```algo
pour (i variant_de 1 a 5)
faire
    afficher (i);
ffaire
```

```algo
algorithme pairs_jusqua_20
debut
    pour (i variant_de 1 a 10)
    faire
        afficher (i * 2);
    ffaire
fin
```

```algo
repeter
    afficher ("Mot de passe ? ");
    saisir (mdp);
jusqua (mdp vaut "casali")
```
</details>

**Prochaine étape :** [Stocker des séries](/donnees/tableaux) — les boucles et les tableaux sont inséparables.
