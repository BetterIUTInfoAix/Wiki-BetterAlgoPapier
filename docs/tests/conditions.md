---
sidebar_position: 2
title: Choisir avec si
description: si/sinon/fsi et choix_sur pour prendre des décisions.
---

# Choisir avec si

**L’idée en une phrase :** `si` pose ta question, et le programme prend un chemin ou un autre selon la réponse — comme un aiguillage.

:::info Prérequis
[Comparer](/tests/operateurs) — tes questions avec `vaut` vont servir ici.
:::

## Le minimum vital

```algo
si (moyenne >= 10)
    afficher ("Admis");
sinon
    afficher ("Recalé");
fsi
```

Avec un cas du milieu :

```algo
si (note vaut 20)
    afficher ("Parfait");
sinon_si (note vaut 10)
    afficher ("Passable");
sinon
    afficher ("Autre cas");
fsi
```

## Pas à pas

Avec `moyenne` qui vaut 12 :

| Étape | Ligne lue | Ce qui se passe |
|---|---|---|
| 1 | `si (moyenne >= 10)` | question : 12 >= 10 → **vrai**, on entre dans le premier bloc |
| 2 | `afficher ("Admis");` | L’écran affiche : Admis |
| 3 | `sinon` … `fsi` | question déjà vraie → on **saute** ce bloc |

Si la moyenne avait valu 8, on aurait sauté le premier bloc et exécuté le `sinon`. Un seul chemin s’exécute, jamais les deux.

## Choisir entre plusieurs valeurs

Quand tu testes la même variable contre plein de valeurs, `choix_sur` est plus lisible :

```algo
choix_sur (jour)
    cas 1 :
        afficher ("Lundi");
    cas 2 :
        afficher ("Mardi");
    autre :
        afficher ("Autre jour");
fchoix
```

## Pas à pas (choix_sur)

Avec `jour` qui vaut 2 :

| Étape | Ligne lue | Ce qui se passe |
|---|---|---|
| 1 | `choix_sur (jour)` | on regarde la valeur : 2 |
| 2 | `cas 1 :` | 2 ne vaut pas 1 → on saute |
| 3 | `cas 2 :` | 2 vaut 2 → on exécute |
| 4 | `afficher ("Mardi");` | L’écran affiche : Mardi |

:::danger Piège Casali
Chaque `si` veut son `fsi`, chaque `choix_sur` son `fchoix`. Si ton programme « fait les deux chemins », cherche le `fsi` oublié — c’est lui 9 fois sur 10.
:::

## À toi

- **Reproduire** : `si`/`sinon` qui affiche « Majeur » quand `age >= 18`, « Mineur » sinon.
- **Adapter** : ajoute un `sinon_si` pour afficher « Tout juste majeur » quand `age vaut 18`.
- **Créer** : un `choix_sur` sur `mois` (1 → janvier, 2 → février, `autre` → mois inconnu).

<details>
<summary>Solutions</summary>

```algo
si (age >= 18)
    afficher ("Majeur");
sinon
    afficher ("Mineur");
fsi
```

```algo
si (age vaut 18)
    afficher ("Tout juste majeur");
sinon_si (age >= 18)
    afficher ("Majeur");
sinon
    afficher ("Mineur");
fsi
```

```algo
choix_sur (mois)
    cas 1 :
        afficher ("janvier");
    cas 2 :
        afficher ("fevrier");
    autre :
        afficher ("mois inconnu");
fchoix
```
</details>

**Prochaine étape :** [Répéter avec des boucles](/boucles) — parce qu’écrire 100 `afficher` à la main, très peu pour toi.
