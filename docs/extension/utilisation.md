---
sidebar_position: 2
title: Utilisation
description: Fichiers .algo, coloration, snippets et pliage.
---

# Utilisation

Les fonctionnalités s’activent sur les fichiers `.algo`. Pour un autre fichier : cliquer le langage en bas à droite → choisir `algo-papier`.

## Ce que fait l’extension

- **Coloration** : mots-clés, types, opérateurs, chaînes, nombres, fonctions.
- **Snippets** : `algorithme`, `fonction`, `procedure`, `si`, `si_sinon`, `pour`, `tant_que`, `jusqua`, `repeter`, `boucle`, `declarer`, `tableau_de`, builtins…
- **Auto-complétion** des mots-clés et types (`ent` → `entier`).
- **Indentation auto** et **pliage** (`debut/fin`, `si/fsi`, `boucle/fboucle`, `choix_sur/fchoix`).

## Exemple rapide

Tape `fonction` + `Tab` :

```algo
fonction nom(variable : in entier) renvoie entier
debut
    renvoie variable;
fin
```

Tape `pour` + `Tab` :

```algo
pour (i variant_de min a max)
faire
    afficher (i);
ffaire
```

:::tip[Suggestions]
Les suggestions auto sont coupées dans les commentaires et les chaînes, mais les snippets restent disponibles. Les menus de types s’ouvrent avec `tableau_de`.
:::
