import {useState, useEffect, useCallback} from 'react';
import clsx from 'clsx';
import type {FillInBlankConfig} from './types';
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

  // Charger le statut résolu depuis localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored === 'solved') {
        setSolved(true);
        setSubmitted(true);
      }
    } catch {
      // localStorage indisponible — ignorer
    }
  }, [storageKey]);

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

    if (allCorrect) {
      setSolved(true);
      try {
        localStorage.setItem(storageKey, 'solved');
      } catch {
        // localStorage indisponible — ignorer
      }
    }
  }, [values, blanks, storageKey]);

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

  return (
    <div className={clsx(styles.exercise, styles.fillInBlank)}>
      <div className={styles.exerciseHeader}>
        <span className={styles.exerciseBadge}>Texte à trous</span>
        <h4 className={styles.exerciseTitle}>{title}</h4>
        {solved && <span className={styles.solvedBadge}>Résolu</span>}
      </div>

      {hint && <p className={styles.hint}>{hint}</p>}

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
              <span className={styles.blankBefore}>{b.before}</span>
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
                aria-label={`Trou ${idx + 1}`}
              />
              <span className={styles.blankAfter}>{b.after}</span>
            </span>
          );
        })}
      </div>

      <div className={styles.actions}>
        {!submitted ? (
          <button
            className="button button--primary button--sm"
            onClick={handleSubmit}
            disabled={!allFilled}>
            Valider
          </button>
        ) : (
          <button
            className="button button--outline button--sm"
            onClick={handleReset}>
            Recommencer
          </button>
        )}
      </div>
    </div>
  );
}
