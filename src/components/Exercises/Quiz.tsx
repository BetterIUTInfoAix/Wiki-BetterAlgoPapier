import {useState, useEffect, useCallback, useRef} from 'react';
import clsx from 'clsx';
import type {QuizConfig} from './types';
import {renderInline} from './Inline';
import {goToNextExercise} from './navigate';
import ReportIssue from '@site/src/components/ReportIssue';
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
  const [storageReady, setStorageReady] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Restaurer les réponses avec leur état : un simple badge « résolu » ne
  // suffit pas à reconstruire le feedback ni les choix affichés.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored && stored !== 'solved') {
        const parsed: unknown = JSON.parse(stored);
        if (parsed && typeof parsed === 'object') {
          const state = parsed as {
            answers?: unknown;
            submitted?: unknown;
          };
          if (state.answers && typeof state.answers === 'object') {
            const savedAnswers = state.answers as Record<string, unknown>;
            const restoredAnswers: Record<number, number[]> = {};
            questions.forEach((question, questionIdx) => {
              const selected = savedAnswers[String(questionIdx)];
              if (
                Array.isArray(selected) &&
                selected.length === new Set(selected).size &&
                (multiple || selected.length <= 1) &&
                selected.every(
                  (index) =>
                    Number.isInteger(index) &&
                    index >= 0 &&
                    index < question.options.length,
                )
              ) {
                restoredAnswers[questionIdx] = selected;
              }
            });
            const hasAllAnswers = questions.every(
              (_, idx) => (restoredAnswers[idx] ?? []).length > 0,
            );
            const wasSubmitted = state.submitted === true && hasAllAnswers;
            const answersAreCorrect = questions.every((question, idx) => {
              const selected = restoredAnswers[idx] ?? [];
              return (
                selected.length === question.correctAnswers.length &&
                question.correctAnswers.every((index) => selected.includes(index))
              );
            });
            setAnswers(restoredAnswers);
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
  }, [storageKey, questions, multiple]);

  useEffect(() => {
    if (!storageReady) return;
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({answers, submitted, solved}),
      );
    } catch {
      // localStorage indisponible — l'exercice reste utilisable en mémoire
    }
  }, [answers, submitted, solved, storageKey, storageReady]);

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

    setSolved(allCorrect);
  }, [answers, questions]);

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

  // Contexte du signalement : les options que l'élève a retenues, question
  // par question. C'est ce qui permet de distinguer « la réponse est fausse »
  // d'une question ambiguë.
  const answerSummary = questions
    .map((q, idx) => {
      const picked = (answers[idx] ?? []).map((oIdx) => q.options[oIdx] ?? '');
      return picked.length > 0 ? picked.join(' / ') : null;
    })
    .filter((line): line is string => line !== null)
    .join('  ||  ');

  const questionSummary = questions.map((q) => q.question).join('  ||  ');

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

      <div className={styles.reportRow}>
        <ReportIssue
          kind="quiz"
          pageTitle={title}
          exerciseId={id}
          question={questionSummary}
          userAnswer={answerSummary}
        />
      </div>
    </div>
  );
}
