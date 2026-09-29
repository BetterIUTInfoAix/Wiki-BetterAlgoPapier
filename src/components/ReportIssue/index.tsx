/**
 * « Signaler une erreur » — un clic, sans backend.
 *
 * Le site est 100 % statique : ce composant n'envoie rien. Il construit
 * l'URL de création d'issue GitHub avec le contexte déjà rempli, et laisse
 * l'élève valider dans l'éditeur GitHub.
 *
 * Le pré-remplissage passe par les query params portant l'`id` des champs
 * du formulaire d'issue (`?template=qcm.yml&page=...&question=...`). Les
 * `id` doivent correspondre exactement à ceux de `.github/ISSUE_TEMPLATE/`.
 */

import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';

import styles from './styles.module.css';

const REPO = 'BetterIUTInfoAix/Wiki-BetterAlgoPapier';

const TEMPLATES = {
  quiz: 'qcm.yml',
  wiki: 'wiki.yml',
} as const;

export type ReportKind = keyof typeof TEMPLATES;

export type ReportIssueProps = {
  /** Quel formulaire d'issue ouvrir : un exercice, ou une page de cours. */
  kind: ReportKind;
  /** Titre de la page, utilisé pour le titre de l'issue. */
  pageTitle?: string;
  /** Id de l'exercice (convention `{page}-{type}-{numero}`). */
  exerciseId?: string;
  /** Énoncé de la question signalée. */
  question?: string;
  /** Ce que l'élève a répondu, si l'exercice a été validé. */
  userAnswer?: string;
};

const LABELS = {quiz: 'Signaler cette question', wiki: 'Signaler une erreur'};

/**
 * Retire la mise en forme inline des options (`code`, **gras**) : le rapport
 * part dans un champ de formulaire GitHub, pas dans du Markdown rendu.
 */
function plain(text: string): string {
  return text.replace(/`/g, '').replace(/\*\*/g, '').trim();
}

export default function ReportIssue({
  kind,
  pageTitle,
  exerciseId,
  question,
  userAnswer,
}: ReportIssueProps): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const {pathname} = useLocation();

  // siteConfig.url + pathname : aucune fenêtre, donc rendu serveur compris.
  const pageUrl = `${siteConfig.url}${pathname}`;

  const params = new URLSearchParams({template: TEMPLATES[kind]});

  if (kind === 'quiz' && exerciseId) {
    const label = pageTitle ? `${pageTitle} (${exerciseId})` : exerciseId;
    params.set('title', `[QCM] ${label}`);
    params.set('exercice', exerciseId);
    if (question) {
      params.set('question', plain(question));
    }
    if (userAnswer) {
      params.set('ma-reponse', plain(userAnswer));
    }
  } else {
    params.set('title', `[Wiki] ${pageTitle ?? 'page de cours'}`);
  }
  params.set('page', pageUrl);

  const href = `https://github.com/${REPO}/issues/new?${params.toString()}`;
  const label = LABELS[kind];
  const ariaLabel =
    kind === 'quiz' && exerciseId
      ? `${label} — exercice ${exerciseId}`
      : label;

  return (
    <a
      className={styles.reportLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}>
      <svg
        className={styles.reportIcon}
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <path d="M8 1.5v9" />
        <path d="M8 14.5v.01" />
        <path d="M3.2 4.2A6.5 6.5 0 1 0 12.8 4.2c-1.2 0-2.3.4-3.1 1.1L8 7l-1.7-1.7a4.6 4.6 0 0 0-3.1-1.1Z" />
      </svg>
      {label}
    </a>
  );
}
