/**
 * Types partagés pour les exercices interactifs (Quiz, FillInBlank).
 */

export type QuizQuestion = {
  /** Texte de la question (peut contenir du Markdown inline) */
  question: string;
  /** Options de réponse */
  options: string[];
  /** Index ou index des bonnes réponses */
  correctAnswers: number[];
  /** Explication affichée après correction */
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
  /** Texte avant le trou */
  before: string;
  /** Réponses acceptées (normalisées : sans casse, sans accents, sans espaces) */
  accepted: string[];
  /** Texte après le trou */
  after: string;
};

export type FillInBlankConfig = {
  /** Identifiant unique pour la persistance localStorage */
  id: string;
  /** Titre de l'exercice */
  title: string;
  /** Texte avec trous */
  blanks: Blank[];
  /** Indice optionnel */
  hint?: string;
};
