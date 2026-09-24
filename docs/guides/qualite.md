---
sidebar_position: 3
title: Écrire du code qui ne tue personne
description: Fiabilité, règles NASA et bonne posture face à l'IA.
---

# Écrire du code qui ne tue personne

**L’idée en une phrase :** en pro, on ne juge pas un programme sur « ça marche sur mon exemple » mais sur « ça ne cassera jamais en vrai » — et l’histoire montre ce que coûte l’à-peu-près.

:::info[Prérequis]
Aucun : c’est de la culture d’ingénieur, à lire quand tu veux impressionner en TD.
:::

## Quand l’informatique rate, ça fait mal

Deux catastrophes nées du mépris des spécifications :

- **Ariane 5 (1996)** : une fusée flambant neuve qui s’autodétruit 40 secondes après le décollage — un morceau de code réutilisé d’Ariane 4 sans re-vérifier les hypothèses. 500 millions de dollars en fumée.
- **Apollo-Soyuz (1975)** : le rendez-vous spatial américano-soviétique manque de rater parce que les uns calculaient en **mètres** et les autres en **pouces**. Même nombre, pas même monde.

Moralité : typer, nommer, vérifier les unités et les bornes, ce n’est pas du zèle — c’est le métier.

## Les 10 règles de la NASA, version L1

La NASA impose ces règles à son code critique. Tu peux les appliquer dès le papier :

1. **Pas de flux tordus** : pas de `goto`, pas de récursion sauvage — reste sur des structures lisibles.
2. **Toute boucle a une borne** : tu dois pouvoir dire quand elle s’arrête (revois ta [condition d’arrêt](/decouverte/penser)).
3. **Pas d’allocation dynamique** : déclare tes tableaux à l’avance, ne bricole pas la mémoire au vol.
4. **Fonctions courtes** : si ça ne tient pas sur une page, découpe (voir [Fonctions](/routines/fonctions)).
5. **Au moins deux vérifications par fonction** : teste tes hypothèses (`si` de garde, valeurs limites).
6. **Données au plus près** : une variable ne vit que là où elle sert — déclare local, pas global.
7. **Toujours vérifier les retours** : une fonction qui rend quelque chose, on utilise (ou on contrôle) ce qu’elle rend.
8. **Pas de magie cachée** : pas d’astuce obscure, le code se lit comme du français.
9. **Pointeurs : touche pas** : en papier, ça veut dire — ne manipule jamais une donnée « au hasard », toujours via son nom et son indice valide (0 à `taille - 1`).
10. **Zéro avertissement** : traite chaque warning comme une erreur. Si l’outil râle, c’est qu’il a raison avant toi.

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
