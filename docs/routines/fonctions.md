---
sidebar_position: 1
title: Découper avec des fonctions
description: fonction, procedure et les marqueurs in/out/in_out enfin clairs.
---

# Découper avec des fonctions

**L’idée en une phrase :** une fonction, c’est un collègue à qui tu confies un bout de travail — tu lui **donnes** des infos, il te **rend** un résultat, et les marqueurs disent qui a le droit de toucher à quoi.

:::info Prérequis
[Variables](/decouverte/variables) et [Boucles](/boucles) — une fonction manipule des variables, souvent dans une boucle.
:::

## Le minimum vital

```algo
fonction double(x : in entier) renvoie entier
debut
    renvoie x * 2;
fin
```

Lis la première ligne comme une carte d’identité : elle s’appelle `double`, elle reçoit `x` (un entier, en lecture seule), et elle rend un entier.

Une procédure, c’est pareil mais sans rien rendre — elle **fait** au lieu de **calculer** :

```algo
procedure afficher_bonjour(nom : in string)
debut
    afficher ("Bonjour ");
    afficher (nom);
fin
```

## Les marqueurs, avec une image

Imagine que tu prêtes ton cahier à un camarade :

| Marqueur | L’image | Ça veut dire |
|---|---|---|
| `in` | Tu lui montres ton cahier **sous plastique** | il lit, il ne peut rien changer |
| `out` | Tu lui donnes un **cahier vide** | il doit le remplir pour toi |
| `in_out` | Tu lui donnes **ton vrai cahier** | il lit et il peut modifier |

```algo
procedure incrementer(c : in_out entier)
debut
    c <- c + 1;
fin
```

## Pas à pas

```algo
declarer compteur : entier <- 5;
incrementer (compteur);
afficher (compteur);
```

| Étape | Ligne lue | `compteur` | Ce qui se passe |
|---|---|---|---|
| 1 | `declarer compteur : entier <- 5;` | 5 | la boîte contient 5 |
| 2 | `incrementer (compteur);` | 5 → **6** | `in_out` : la procédure modifie la vraie boîte |
| 3 | `afficher (compteur);` | 6 | L’écran affiche : 6 |

Si le paramètre avait été `in`, l’étape 2 aurait été impossible : on ne modifie pas un cahier sous plastique. C’est toute la différence.

## Le cas particulier du prédicat

Une fonction qui renvoie un `booleen` a un nom spécial : un **prédicat**. On le nomme comme une question, souvent en anglais dans le code pro :

```algo
fonction isMultiple(x : in entier, k : in entier) renvoie booleen
debut
    renvoie modulo (x, k) vaut 0;
fin
```

`isMultiple`, `hasValue`… : si le nom se lit comme une question fermée, c’est un prédicat. Tu en as déjà écrit un sans le savoir avec `est_pair`.

## Règle de sécurité : initialise tes `out`

Règle impérative du CM : **tout paramètre marqué `out` doit recevoir une valeur à l’intérieur du sous-programme.** Sinon, l’appelant récupère une case jamais remplie — un effet de bord qui pourrit les données sortantes :

```algo
procedure lire_note(n : out entier)
debut
    afficher ("Note ? ");
    saisir (n);
fin
```

Ici `n` est bien initialisé (via `saisir`) avant la fin de la procédure. Si tu oublies, c’est comme rendre un cahier vide en prétendant l’avoir rempli.

:::danger Piège Casali
`in` pour donner, `out`/`in_out` pour récupérer. Si ta procédure « ne rend rien » alors qu’elle devrait, vérifie le marqueur en premier — pas le corps. Et une `fonction` se termine par `renvoie ...;`, une `procedure` n’a pas de `renvoie`.
:::

## À toi

- **Reproduire** : écris une fonction `carre` qui prend un entier `in` et renvoie son carré.
- **Adapter** : écris une procédure `echanger` avec deux paramètres `in_out` qui échange leur contenu (revois [Variables](/decouverte/variables)).
- **Créer** : une fonction `est_pair` qui utilise `modulo` et renvoie un `booleen`, puis un algorithme qui l’utilise dans un `si`.

<details>
<summary>Solutions</summary>

```algo
fonction carre(x : in entier) renvoie entier
debut
    renvoie x * x;
fin
```

```algo
procedure echanger(a : in_out entier, b : in_out entier)
debut
    declarer tmp : entier;
    tmp <- a;
    a <- b;
    b <- tmp;
fin
```

```algo
fonction est_pair(x : in entier) renvoie booleen
debut
    renvoie modulo (x, 2) vaut 0;
fin

algorithme test_pair
debut
    declarer n : entier;
    saisir (n);
    si (est_pair (n))
        afficher ("pair");
    sinon
        afficher ("impair");
    fsi
fin
```
</details>

**Prochaine étape :** [Installer l’extension](/extension/installation) — pour écrire tout ça avec coloration et snippets.
