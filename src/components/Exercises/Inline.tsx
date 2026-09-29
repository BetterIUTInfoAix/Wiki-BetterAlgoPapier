import type {ReactNode} from 'react';
import {Fragment} from 'react';

/**
 * Rendu de deux constructions inline, suffisantes pour les exercices :
 *   `du code`      → <code>du code</code>
 *   **du gras**    → <strong>du gras</strong>
 *
 * Volontairement limité à ces deux cas, et non un moteur Markdown complet :
 * en algo papier le caractère `*` est l'opérateur de multiplication
 * (`afficher (i * 2)`), donc supporter `*italique*` transformerait des
 * formules en italique. Pour un troisième besoin, on l'ajoute ici
 * volontairement, avec un test — pas de regex approchative.
 *
 * L'intérêt principal : le texte reste une chaîne JS, donc `age <- 19;`
 * ou `x >= 10` ne demande aucun échappement.
 */

const INLINE_PATTERN = /(`[^`]+`|\*\*[^*]+\*\*)/g;

export function renderInline(text: string): ReactNode {
  const parts = text.split(INLINE_PATTERN).filter((part) => part !== '');

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }
    if (
      part.startsWith('**') &&
      part.endsWith('**') &&
      part.length > 4
    ) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}
