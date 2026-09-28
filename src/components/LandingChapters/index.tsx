import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type Chapter = {
  number: string;
  title: string;
  description: string;
  to: string;
  prerequisites: string;
};

const chapters: Chapter[] = [
  {
    number: '01',
    title: 'Premiers pas',
    description:
      'Écrire un programme, afficher, saisir, déclarer des variables.',
    to: '/decouverte/algorithme',
    prerequisites: 'Aucun',
  },
  {
    number: '02',
    title: 'Comparer et choisir',
    description:
      'Comparer des valeurs, écrire des `si` et des `choix_sur`.',
    to: '/tests/operateurs',
    prerequisites: 'Chapitre 01',
  },
  {
    number: '03',
    title: 'Répéter',
    description:
      'Choisir la bonne boucle : `pour`, `tant_que`, `repeter`, `boucle`.',
    to: '/boucles',
    prerequisites: 'Chapitre 02',
  },
  {
    number: '04',
    title: 'Tableaux et outils',
    description:
      'Stocker des séries (indices 0 à `taille-1`), utiliser `taille` et les builtins.',
    to: '/donnees/tableaux',
    prerequisites: 'Chapitre 03',
  },
  {
    number: '05',
    title: 'Fonctions',
    description:
      'Découper ton code, paramètres `in/out/in_out`, prédicats.',
    to: '/routines/fonctions',
    prerequisites: 'Chapitre 04',
  },
  {
    number: '06',
    title: 'Extension',
    description:
      'Coder confortablement dans VSCode / VSCodium.',
    to: '/extension/installation',
    prerequisites: 'Chapitre 05',
  },
  {
    number: '07',
    title: 'Méthode et pièges',
    description:
      'Attaquer un énoncé, éviter les 5 erreurs, penser fiabilité.',
    to: '/guides/methode',
    prerequisites: 'Chapitre 06',
  },
];

function ChapterCard({number, title, description, to, prerequisites}: Chapter): ReactNode {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.cardNumber}>{number}</div>
      <div className={styles.cardBody}>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardPrereq}>
          <span className={styles.cardPrereqLabel}>Prérequis :</span>{' '}
          {prerequisites}
        </div>
      </div>
    </Link>
  );
}

export default function LandingChapters(): ReactNode {
  return (
    <section className={styles.chapters}>
      <div className={styles.chaptersInner}>
        <Heading as="h2" className={styles.chaptersTitle}>
          Ton parcours, chapitre par chapitre
        </Heading>
        <p className={styles.chaptersSubtitle}>
          Suis les chapitres dans l'ordre. Chaque page te dit d'où tu viens et
          où aller ensuite.
        </p>
        <div className={styles.chaptersGrid}>
          {chapters.map((ch) => (
            <ChapterCard key={ch.number} {...ch} />
          ))}
        </div>
      </div>
    </section>
  );
}
