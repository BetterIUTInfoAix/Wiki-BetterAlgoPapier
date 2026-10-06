import {useState, useEffect, useCallback, useRef} from 'react';
import clsx from 'clsx';
import type {FillInBlankConfig} from './types';
import {renderInline} from './Inline';
import {goToNextExercise} from './navigate';
import ReportIssue from '@site/src/components/ReportIssue';
import styles from './styles.module.css';

/**
 * Normalise une réponse : minuscule, sans accents, sans espaces.
 */
function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '');
}

/**
 * Exercice texte à trous interactif.
 * - Correction souple (casse, accents, espaces)
 * - Plusieurs réponses acceptées par trou
 * - Persistance localStorage par ID d'exercice
 */
export default function FillInBlank({id, title, blanks, hint}: FillInBlankConfig) {
  const storageKey = `exercise-fillblank-${id}`;
  const [values, setValues] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [solved, setSolved] = useState(false);
  const [storageReady, setStorageReady] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Restaurer les réponses avec leur état afin que « Résolu » corresponde au
  // texte réellement conservé dans les champs.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored && stored !== 'solved') {
        const parsed: unknown = JSON.parse(stored);
        if (parsed && typeof parsed === 'object') {
          const state = parsed as {
            values?: unknown;
            submitted?: unknown;
          };
          if (state.values && typeof state.values === 'object') {
            const savedValues = state.values as Record<string, unknown>;
            const restoredValues: Record<number, string> = {};
            blanks.forEach((blank, blankIdx) => {
              const value = savedValues[String(blankIdx)];
              if (typeof value === 'string') restoredValues[blankIdx] = value;
            });
            const hasAllValues = blanks.every(
              (_, idx) => (restoredValues[idx] ?? '').trim() !== '',
            );
            const wasSubmitted = state.submitted === true && hasAllValues;
            const answersAreCorrect = blanks.every((blank, idx) =>
              blank.accepted.some(
                (answer) =>
                  normalize(answer) === normalize(restoredValues[idx] ?? ''),
              ),
            );
            setValues(restoredValues);
            setSubmitted(wasSubmitted);
            setSolved(wasSubmitted && answersAreCorrect);
          }
        }
      } else if (stored === 'solved') {
        // Ancien format : il ne contient pas les réponses, donc ne peut pas
        // justifier un état résolu cohérent après rechargement.
        localStorage.removeItem(storageKey);
      }
    } catch {
      // localStorage indisponible ou donnée invalide — démarrer vide
    } finally {
      setStorageReady(true);
    }
  }, [storageKey, blanks]);

  useEffect(() => {
    if (!storageReady) return;
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({values, submitted, solved}),
      );
    } catch {
      // localStorage indisponible — l'exercice reste utilisable en mémoire
    }
  }, [values, submitted, solved, storageKey, storageReady]);

  // Navigation manuelle (bouton « Suivant ») : exercice suivant sur la page,
  // sinon page suivante du parcours. Jamais automatique — ni au chargement,
  // ni à la restauration « résolu » via localStorage, ni en cas d'échec.
  const handleGoNext = useCallback(() => {
    goToNextExercise(rootRef.current);
  }, []);

  const handleChange = useCallback(
    (blankIdx: number, value: string) => {
      if (submitted) return;
      setValues((prev) => ({...prev, [blankIdx]: value}));
    },
    [submitted],
  );

  const handleSubmit = useCallback(() => {
    setSubmitted(true);

    // Vérifier si tous les trous sont corrects
    const allCorrect = blanks.every((b, idx) => {
      const userVal = values[idx] ?? '';
      const normalized = normalize(userVal);
      return b.accepted.some((a) => normalize(a) === normalized);
    });

    setSolved(allCorrect);
  }, [values, blanks]);

  const handleReset = useCallback(() => {
    setValues({});
    setSubmitted(false);
    setSolved(false);
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // localStorage indisponible — ignorer
    }
  }, [storageKey]);

  const allFilled = blanks.every((_, idx) => (values[idx] ?? '').trim() !== '');

  const allCorrect =
    submitted &&
    blanks.every((b, idx) =>
      b.accepted.some((a) => normalize(values[idx] ?? '') === normalize(a)),
    );

  // Contexte du signalement : l'énoncé reconstitué, puis ce que l'élève a
  // tapé dans chaque trou.
  const statement = blanks
    .map((b) => `${b.before}[…]${b.after}`)
    .join('  ')
    .replace(/\s+/g, ' ')
    .trim();
  const answerSummary = Object.values(values)
    .map((v) => v.trim())
    .filter((v) => v !== '')
    .join(' | ');

  return (
    <div
      ref={rootRef}
      data-exercise
      className={clsx(
        styles.exercise,
        styles.fillInBlank,
        submitted && styles.isSubmitted,
      )}>
      <div className={styles.exerciseHeader}>
        <span className={styles.exerciseBadge}>Texte à trous</span>
        <h4 className={styles.exerciseTitle}>{title}</h4>
        {solved && <span className={styles.solvedBadge}>Résolu</span>}
      </div>

      {hint && <p className={styles.hint}>{renderInline(hint)}</p>}

      <div className={styles.blanksContainer}>
        {blanks.map((b, idx) => {
          const userVal = values[idx] ?? '';
          const normalized = normalize(userVal);
          const isCorrect =
            submitted &&
            b.accepted.some((a) => normalize(a) === normalized);
          const isWrong = submitted && !isCorrect;

          return (
            <span key={idx} className={styles.blankGroup}>
              <span className={styles.blankBefore}>{renderInline(b.before)}</span>
              <input
                type="text"
                value={userVal}
                onChange={(e) => handleChange(idx, e.target.value)}
                disabled={submitted}
                className={clsx(
                  styles.blankInput,
                  isCorrect && styles.blankCorrect,
                  isWrong && styles.blankWrong,
                )}
                aria-label={`Trou ${idx + 1}${b.before ? ` après « ${b.before.trim().slice(-40)} »` : ''}`}
              />
              <span className={styles.blankAfter}>{renderInline(b.after)}</span>
            </span>
          );
        })}
      </div>

      {submitted && (
        <div
          role="status"
          className={clsx(
            styles.feedback,
            allCorrect ? styles.feedbackCorrect : styles.feedbackWrong,
          )}>
          <strong>
            {allCorrect ? 'Bonne réponse !' : 'Pas tout à fait — réessaie.'}
          </strong>
        </div>
      )}

      <div className={styles.actions}>
        {!submitted ? (
          <button
            className={clsx('button button--primary button--sm', styles.actionsButton)}
            onClick={handleSubmit}
            disabled={!allFilled}>
            Valider
          </button>
        ) : (
          <>
            <button
              className={clsx('button button--outline button--sm', styles.actionsButton)}
              onClick={handleReset}>
              Recommencer
            </button>
            {solved && (
              <button
                className={clsx('button button--primary button--sm', styles.actionsButton)}
                onClick={handleGoNext}>
                Suivant
              </button>
            )}
          </>
        )}
      </div>

      <div className={styles.reportRow}>
        <ReportIssue
          kind="quiz"
          pageTitle={title}
          exerciseId={id}
          question={statement}
          userAnswer={answerSummary}
        />
      </div>
    </div>
  );
}
