---
sidebar_position: 2
title: Boîte à outils
description: "Référence des fonctions intégrées : E/S, tableaux, aléatoire, caractères."
format: mdx
---

# Boîte à outils

**L’idée en une phrase :** pas besoin de tout réinventer — le langage te donne des fonctions toutes prêtes, pioche dedans.

:::info[Prérequis]
Rien d’obligatoire : c’est une page **référence**, reviens-y quand tu en as besoin.
:::

## Entrées-sorties (tu les connais)

- `afficher (...)` — montre quelque chose.
- `saisir (...)` — lit au clavier.
- `ligne_suivante;` — saute une ligne.

## Tableaux et chaînes

- `taille (t)` — nombre de cases ou de lettres.
- `redimensionner (t, n);` — le tableau fait désormais exactement `n` cases.
- `allonger (t, n);` — ajoute `n` cases non initialisées à la fin (opération documentée dans la référence, mais à clarifier au regard de la règle contre l’allocation dynamique).

Et côté `string` (détaillé dans [Afficher et saisir](/decouverte/entrees-sorties)) : guillemets protégés `\"`, concaténation avec `+`, accès caractère par caractère comme dans un tableau.

## Nombres

- `modulo (a, b)` — le reste de la division. `modulo (17, 5)` vaut 2.
- `rand (min, max)` — un entier au hasard entre les deux, inclus.

```algo
declarer d : entier;
d <- rand (1, 6);
afficher (d);
```

| Exécution possible | Affichage |
|---|---|
| tirage 4 | 4 |
| autre tirage | un nombre entre 1 et 6 |

## Caractères

- `rang (c)` — le code numérique d’un caractère.
- `succ (c)` / `pred (c)` — le caractère suivant / précédent, d’après les noms de la section « Fonctions associées » de la référence algorithmique du dépôt.
- `toupper (c)` / `tolower (c)` — passer en majuscule / minuscule.
- `isdigit (c)`, `isalpha (c)`, `isalnum (c)`, `isspace (c)`, `ispunct (c)`, `isupper (c)`, `islower (c)` — des questions qui renvoient `vrai`/`faux`.

```algo
declarer lettre : caractere;
saisir (lettre);
si (isdigit (lettre))
    afficher ("C’est un chiffre");
sinon
    afficher ("Ce n’est pas un chiffre");
fsi
```

:::tip[Réflexe]
Quand tu te dis « il doit bien exister un truc pour… », cherche ici avant de coder : `taille`, `rand`, `isdigit` et les copains existent justement pour ça.
:::

## À toi

- **Reproduire** : tire un `rand (1, 6)` et affiche-le.
- **Adapter** : teste si un caractère saisi est une lettre avec `isalpha`.
- **Créer** : tire deux dés et affiche leur somme.

<details>
<summary>Solutions</summary>

```algo
declarer d : entier;
d <- rand (1, 6);
afficher (d);
```

```algo
declarer c : caractere;
saisir (c);
si (isalpha (c))
    afficher ("C’est une lettre");
sinon
    afficher ("Ce n’est pas une lettre");
fsi
```

```algo
declarer d1 : entier;
declarer d2 : entier;
d1 <- rand (1, 6);
d2 <- rand (1, 6);
afficher (d1 + d2);
```
</details>

**Prochaine étape :** [Découper avec des fonctions](/routines/fonctions) — pour ranger tout ce savoir dans des routines propres.

<FillInBlank
  id="builtins-fillblank-1"
  title="Le bon nom de fonction"
  blanks={[
    {
      before: "Pour obtenir un entier au hasard entre 1 et 6 inclus : d <- ",
      accepted: ["rand (1, 6)", "rand(1,6)"],
      after: ";",
    },
    {
      before: "Pour connaître le reste de la division de 17 par 5 : ",
      accepted: ["modulo (17, 5)"],
      after: " vaut 2.",
    },
    {
      before: "Pour savoir si un caractère saisi est un chiffre, on teste ",
      accepted: ["isdigit"],
      after: ".",
    },
    {
      before: "Pour connaître le nombre de cases d'un tableau t : ",
      accepted: ["taille"],
      after: ".",
    },
    {
      before: "Un `string` se lit caractère par caractère comme un tableau, donc on peut lui appliquer ",
      accepted: ["taille", "taille()"],
      after: " aussi.",
    },
  ]}
  hint="Indice : « il doit bien exister un truc pour… » — cherche dans la page avant de coder."
/>
