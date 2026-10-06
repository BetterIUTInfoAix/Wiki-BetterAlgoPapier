import type {ReactNode} from 'react';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  {value: '7', label: 'types de données'},
  {value: '20', label: 'builtins répertoriés'},
  {value: '8', label: 'chapitres progressifs'},
  {value: '16', label: 'pages de cours'},
];

export default function LandingStats(): ReactNode {
  return (
    <section className={styles.stats}>
      <div className={styles.statsInner}>
        <div className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
