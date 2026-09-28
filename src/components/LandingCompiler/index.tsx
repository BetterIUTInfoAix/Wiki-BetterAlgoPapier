import type {ReactNode} from 'react';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

export default function LandingCompiler(): ReactNode {
  return (
    <section className={styles.compiler}>
      <div className={styles.compilerInner}>
        <div className={styles.compilerIcon}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <Heading as="h2" className={styles.compilerTitle}>
          Le compilateur arrive
        </Heading>
        <p className={styles.compilerDescription}>
          Ce wiki est structuré pour accueillir le futur compilateur
          BetterAlgoPapier. La syntaxe, les types et les builtins sont déjà
          documentés — il ne reste qu'à les exécuter.
        </p>
        <div className={styles.compilerTeaser}>
          <code className={styles.compilerCode}>
            <span className={styles.compilerPrompt}>$</span> algo run bonjour.algo
          </code>
          <span className={styles.compilerOutput}>
            Bonjour !
          </span>
        </div>
        <p className={styles.compilerNote}>
          Bientôt disponible. En attendant, l'extension VSCode fait déjà
          gagner un temps précieux.
        </p>
      </div>
    </section>
  );
}
