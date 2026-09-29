/**
 * Types partagés pour les exercices interactifs (Quiz, FillInBlank).
 *
 * Les textes sont des chaînes simples qui acceptent deux constructions
 * inline, rendues par `renderInline` : `du code` et **du gras**.
 * Pas de JSX ni de Markdown complet : le `*` est l'opérateur de
 * multiplication en algo papier (`afficher (i * 2)`).
 *
 *   question: 'Quel type pour `entier` ?'
 *   explanation: '**Attention** : on écrit `declarer nom : type;`'
 */

export type QuizQuestion = {
  /** Question affichée (accepte `code` et **gras**) */
  question: string;
  /** Options de réponse (acceptent `code` et **gras**) */
  options: string[];
  /** Index ou index des bonnes réponses */
  correctAnswers: number[];
  /** Explication affichée après correction (accepte `code` et **gras**) */
  explanation: string;
};

export type QuizConfig = {
  /** Identifiant unique pour la persistance localStorage */
  id: string;
  /** Titre de l'exercice */
  title: string;
  /** Questions du QCM */
  questions: QuizQuestion[];
  /** Mode choix unique (radio) ou multiple (checkbox) */
  multiple?: boolean;
};

export type Blank = {
  /** Texte avant le trou (accepte `code` et **gras**) */
  before: string;
  /** Réponses acceptées (comparées sans casse, accents ni espaces) */
  accepted: string[];
  /** Texte après le trou (accepte `code` et **gras**) */
  after: string;
};

export type FillInBlankConfig = {
  /** Identifiant unique pour la persistance localStorage */
  id: string;
  /** Titre de l'exercice */
  title: string;
  /** Texte avec trous */
  blanks: Blank[];
  /** Indice optionnel (accepte `code` et **gras**) */
  hint?: string;
};
