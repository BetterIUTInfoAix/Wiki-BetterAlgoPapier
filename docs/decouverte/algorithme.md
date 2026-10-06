---
sidebar_position: 2
title: Ton premier algorithme
description: Le squelette algorithme/debut/fin et ton premier afficher.
format: mdx
---

# Ton premier algorithme

**L’idée en une phrase :** un algorithme, c’est une recette écrite dans un moule fixe — `algorithme`, `debut`, `fin` — et dedans, tu peux déjà afficher quelque chose.

:::info[Prérequis]
[Penser comme un ordinateur](/decouverte/penser) — 5 minutes pour comprendre pourquoi la machine ne devine rien.
:::

## Le minimum vital

```algo
algorithme monPremier
debut
    afficher ("Bonjour");
fin
```

Trois lignes de moule, une ligne d’action. Retiens le moule par cœur, il ne change jamais.

## Pas à pas

On exécute ce programme ensemble, comme le ferait ton prof sur papier :

| Étape | Ligne lue | Ce qui se passe |
|---|---|---|
| 1 | `algorithme monPremier` | On donne un nom au programme |
| 2 | `debut` | Le programme commence |
| 3 | `afficher ("Bonjour");` | L’écran affiche : Bonjour |
| 4 | `fin` | Le programme s’arrête |

Ton premier programme affiche déjà quelque chose. Bravo, tu fais de l’algo.

## Procédure et fonction, en bref

Tu croiseras deux grands frères de `algorithme` (détaillés au [chapitre 05](/routines/fonctions)) :

```algo
procedure direBonjour
debut
    afficher ("Bonjour");
fin
```

```algo
fonction double(x : in entier) renvoie entier
debut
    renvoie x * 2;
fin
```

Pas de panique si `in` et `renvoie` te semblent bizarres : pour l’instant, contente-toi de reconnaître les trois moules.

:::danger[Piège Casali]
`fin` oublié = programme incomplet. Et les lignes de moule (`algorithme`, `debut`, `fin`) ne prennent **jamais** de `;`.
:::

## À toi

- **Reproduire** : recopie le premier exemple et change le message affiché.
- **Adapter** : affiche ton prénom, puis ton âge sur une deuxième ligne (deux `afficher`).
- **Créer** : écris une `procedure` qui affiche deux lignes de ton choix.

<details>
<summary>Solutions</summary>

```algo
algorithme presentation
debut
    afficher ("Léa");
    afficher (19);
fin
```

```algo
procedure deuxLignes
debut
    afficher ("Première ligne");
    afficher ("Deuxième ligne");
fin
```
</details>

**Prochaine étape :** [Lire au clavier avec saisir](/decouverte/entrees-sorties).

<FillInBlank
  id="algorithme-fillblank-1"
  title="Le moule par cœur"
  blanks={[
    {
      before: "Un programme s'écrit toujours entre trois lignes de moule :",
      accepted: ["algorithme"],
      after: " nom_du_programme",
    },
    {
      before: "",
      accepted: ["debut"],
      after: " … ",
    },
    {
      before: "",
      accepted: ["fin"],
      after: ". Les trois lignes de moule ne prennent **jamais** de point-virgule.",
    },
    {
      before: "La seule ligne d'action du minimum vital est ",
      accepted: ['afficher ("Bonjour");', 'afficher ("Bonjour")'],
      after: ".",
    },
  ]}
  hint="Indice : trois lignes, la première nomme, les deux autres encadrent."
/>
