/**
 * Fait défiler la page jusqu'à l'exercice suivant, s'il existe.
 * - Appelé quand l'utilisateur termine un exercice (succès uniquement).
 * - Ne fait rien s'il n'y a pas d'exercice suivant ou hors navigateur.
 * - Respecte `prefers-reduced-motion` (défilement instantané dans ce cas).
 */
export function scrollToNextExercise(current: HTMLElement | null): void {
  if (!current || typeof document === 'undefined' || typeof window === 'undefined') {
    return;
  }
  const exercises = Array.from(document.querySelectorAll('[data-exercise]'));
  const next = exercises[exercises.indexOf(current) + 1] as HTMLElement | undefined;
  if (!next) {
    return;
  }
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  next.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block: 'start'});
}
