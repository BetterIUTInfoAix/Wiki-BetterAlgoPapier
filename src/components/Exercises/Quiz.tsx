import {useState, useEffect, useCallback, useRef} from 'react';
import clsx from 'clsx';
import type {QuizConfig} from './types';
import {renderInline} from './Inline';
import {goToNextExercise} from './navigate';
import styles from './styles.module.css';

/**
 * Exercice QCM interactif.
 * - Choix unique (radio) ou multiple (checkbox)
 * - Feedback immédiat avec explication
 * - Persistance localStorage par ID d'exercice
 */
export default function Quiz({id, title, questions, multiple = false}: QuizConfig) {
  const storageKey = `exercise-quiz-${id}`;
  const [answers, setAnswers] = useState<Record<number, number[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [solved, setSolved] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

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

  // Navigation manuelle (bouton « Suivant ») : exercice suivant sur la page,
  // sinon page suivante du parcours. Jamais automatique — ni au chargement,
  // ni à la restauration « résolu » via localStorage, ni en cas d'échec.
  const handleGoNext = useCallback(() => {
    goToNextExercise(rootRef.current);
  }, []);

  const handleSelect = useCallback(
    (questionIdx: number, optionIdx: number) => {
      if (submitted) return;

      setAnswers((prev) => {
        if (multiple) {
          const current = prev[questionIdx] ?? [];
          const next = current.includes(optionIdx)
            ? current.filter((i) => i !== optionIdx)
            : [...current, optionIdx];
          return {...prev, [questionIdx]: next};
        }
        return {...prev, [questionIdx]: [optionIdx]};
      });
    },
    [submitted, multiple],
  );

  const handleSubmit = useCallback(() => {
    setSubmitted(true);

    // Vérifier si toutes les questions sont correctes
    const allCorrect = questions.every((q, idx) => {
      const userAnswers = answers[idx] ?? [];
      const correct = q.correctAnswers;
      return (
        userAnswers.length === correct.length &&
        correct.every((a) => userAnswers.includes(a))
      );
    });

    if (allCorrect) {
      setSolved(true);
      try {
        localStorage.setItem(storageKey, 'solved');
      } catch {
        // localStorage indisponible — ignorer
      }
    }
  }, [answers, questions, storageKey]);

  const handleReset = useCallback(() => {
    setAnswers({});
    setSubmitted(false);
    setSolved(false);
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // localStorage indisponible — ignorer
    }
  }, [storageKey]);

  const allAnswered = questions.every(
    (_, idx) => (answers[idx] ?? []).length > 0,
  );

  return (
    <div
      ref={rootRef}
      data-exercise
      className={clsx(
        styles.exercise,
        styles.quiz,
        submitted && styles.isSubmitted,
      )}>
      <div className={styles.exerciseHeader}>
        <span className={styles.exerciseBadge}>QCM</span>
        <h4 className={styles.exerciseTitle}>{title}</h4>
        {solved && <span className={styles.solvedBadge}>Résolu</span>}
      </div>

      <div className={styles.questions}>
        {questions.map((q, qIdx) => {
          const userAnswers = answers[qIdx] ?? [];
          const isCorrect =
            submitted &&
            q.correctAnswers.length === userAnswers.length &&
            q.correctAnswers.every((a) => userAnswers.includes(a));
          const isWrong = submitted && !isCorrect;

          return (
            <fieldset
              key={qIdx}
              className={clsx(
                styles.question,
                isCorrect && styles.questionCorrect,
                isWrong && styles.questionWrong,
              )}>
              <legend className={styles.questionText}>
                <strong>{qIdx + 1}.</strong> {renderInline(q.question)}
              </legend>

              <div className={styles.options}>
                {q.options.map((opt, oIdx) => {
                  const isSelected = userAnswers.includes(oIdx);
                  const isCorrectOption = q.correctAnswers.includes(oIdx);

                  return (
                    <label
                      key={oIdx}
                      className={clsx(
                        styles.option,
                        isSelected && styles.optionSelected,
                        submitted &&
                          isCorrectOption &&
                          styles.optionCorrect,
                        submitted &&
                          isSelected &&
                          !isCorrectOption &&
                          styles.optionWrong,
                      )}>
                      <input
                        type={multiple ? 'checkbox' : 'radio'}
                        name={`${id}-q-${qIdx}`}
                        checked={isSelected}
                        onChange={() => handleSelect(qIdx, oIdx)}
                        disabled={submitted}
                        className={styles.optionInput}
                      />
                      <span className={styles.optionLabel}>
                        {renderInline(opt)}
                      </span>
                    </label>
                  );
                })}
              </div>

              {submitted && (
                <div
                  role="status"
                  className={clsx(
                    styles.feedback,
                    isCorrect ? styles.feedbackCorrect : styles.feedbackWrong,
                  )}>
                  <strong>{isCorrect ? 'Correct !' : 'Pas tout à fait.'}</strong>{' '}
                  {renderInline(q.explanation)}
                </div>
              )}
            </fieldset>
          );
        })}
      </div>

      <div className={styles.actions}>
        {!submitted ? (
          <button
            className={clsx('button button--primary button--sm', styles.actionsButton)}
            onClick={handleSubmit}
            disabled={!allAnswered}>
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
    </div>
  );
}
