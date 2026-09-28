import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

/**
 * Exemple algo coloré à la main (spans) — léger, pas de dépendance Prism.
 * Rendu garanti, accessible, responsive.
 */
function AlgoExample(): ReactNode {
  return (
    <div className={styles.algoBlock} aria-label="Exemple d'algorithme">
      <div className={styles.algoHeader}>
        <span className={styles.algoDot} />
        <span className={styles.algoDot} />
        <span className={styles.algoDot} />
        <span className={styles.algoFilename}>bonjour.algo</span>
      </div>
      <pre className={styles.algoPre}>
        <code>
          <span className={styles.algoComment}>{"// Mon premier algorithme"}</span>
          {'\n'}
          <span className={styles.algoKeyword}>algorithme</span> bonjour
          {'\n'}
          <span className={styles.algoKeyword}>declarer</span> prenom : <span className={styles.algoType}>string</span>
          {'\n'}
          {'\n'}
          <span className={styles.algoFunction}>afficher</span> (<span className={styles.algoString}>"Bonjour !"</span>)
          {'\n'}
          <span className={styles.algoFunction}>saisir</span> (prenom)
          {'\n'}
          <span className={styles.algoFunction}>afficher</span> (<span className={styles.algoString}>"Enchanté, "</span> + prenom)
          {'\n'}
          <span className={styles.algoKeyword}>fin</span>
        </code>
      </pre>
    </div>
  );
}

export default function LandingHero(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroTagline}>
            L'algorithmique sur papier, claire et progressive, pour les L1 de
            l'IUT d'Aix. Sans jargon inutile, sans pièges cachés.
          </p>
          <div className={styles.heroCta}>
            <Link className="button button--primary button--lg" to="/intro">
              Commencer le parcours
            </Link>
            <Link
              className="button button--outline button--lg"
              to="/extension/installation">
              Installer l'extension
            </Link>
          </div>
        </div>
        <div className={styles.heroCode}>
          <AlgoExample />
        </div>
      </div>
    </header>
  );
}
