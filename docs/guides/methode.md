---
sidebar_position: 1
title: Attaquer un énoncé sans paniquer
description: Une méthode en 6 étapes pour passer du sujet au programme.
---

# Attaquer un énoncé sans paniquer

**L’idée en une phrase :** face à un énoncé, ne code jamais tout de suite — suis ces 6 étapes dans l’ordre, et le programme s’écrira presque tout seul.

:::info[Prérequis]
Avoir survolé les [Premiers pas](/decouverte/algorithme). Cette page sert pendant tout le semestre.
:::

## La méthode

1. **Relis l’énoncé deux fois.** Souligne les entrées (ce qu’on te donne), la sortie (ce qu’on attend) et les cas particuliers.
2. **Liste tes variables.** Pour chacune : nom, type, rôle. Déclare tout en haut, avant même le `debut` logique.
3. **Pose le squelette.** `algorithme` / `debut` / `fin`, rien d’autre. Tu as déjà un programme valide.
4. **Ajoute les E/S.** `afficher` pour guider l’utilisateur, `saisir` pour lire. Teste mentalement : ça dialogue déjà.
5. **Choisis tes structures.** Un choix → [si](/tests/conditions). Une répétition → [boucles](/boucles). Une série → [tableaux](/donnees/tableaux). Un bout réutilisable → [fonction](/routines/fonctions).
6. **Trace à la main.** Prends 2–3 jeux de valeurs (dont un cas limite : 0, vide, maximum) et remplis un tableau de trace comme au [chapitre 03](/boucles).

## Exemple complet

Énoncé : *lire deux notes, afficher leur moyenne.*

```algo
algorithme moyenne_deux_notes
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
Reviens une étape en arrière : 90 % des blocages viennent d’une variable mal choisie (étape 2) ou d’un énoncé mal lu (étape 1), pas de la syntaxe.
:::

**Ensuite :** [les erreurs que tout le monde fait](/guides/erreurs-frequentes) — pour les reconnaître avant la correction.
