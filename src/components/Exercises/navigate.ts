/**
 * Navigation « Suivant » pour les exercices interactifs.
 *
 * Deux cas, dans l'ordre :
 *  1. un autre exercice existe sur la page → défilement doux jusqu'à lui ;
 *  2. sinon on suit le lien « Suivant » de la pagination Docusaurus
 *     (l'exercice est le dernier de sa page) → navigation vers la page suivante.
 *
 * Aucun appel automatique : uniquement au clic sur le bouton « Suivant ».
 * Défilement instantané si l'utilisateur demande une réduction des animations.
 */

const EXERCISE_SELECTOR = '[data-exercise]';
const NEXT_PAGE_SELECTOR = 'a.pagination-nav__link--next';

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function goToNextExercise(current: HTMLElement | null): void {
  if (
    !current ||
    typeof document === 'undefined' ||
    typeof window === 'undefined'
  ) {
    return;
  }

  const exercises = Array.from(
    document.querySelectorAll<HTMLElement>(EXERCISE_SELECTOR),
  );
  const currentIndex = exercises.indexOf(current);
  const next = currentIndex === -1 ? undefined : exercises[currentIndex + 1];

  if (next) {
    next.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start',
    });
    return;
  }

  // Dernier exercice de la page : on enchaîne sur la page suivante du parcours.
  const nextPage = document.querySelector<HTMLAnchorElement>(NEXT_PAGE_SELECTOR);
  const href = nextPage?.getAttribute('href');
  if (href) {
    window.location.assign(href);
  }
}
