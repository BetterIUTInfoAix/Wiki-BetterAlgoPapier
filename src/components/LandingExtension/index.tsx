import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type Channel = {
  name: string;
  description: string;
  to: string;
  external?: boolean;
};

const channels: Channel[] = [
  {
    name: 'Marketplace VSCode',
    description: 'Installation en un clic depuis VSCode.',
    to: '/extension/installation',
  },
  {
    name: 'Open VSX',
    description: 'Pour VSCodium et autres éditeurs compatibles.',
    to: '/extension/installation',
  },
  {
    name: 'Fichier .vsix',
    description: 'Installation manuelle, hors ligne.',
    to: '/extension/installation',
  },
];

export default function LandingExtension(): ReactNode {
  return (
    <section className={styles.extension}>
      <div className={styles.extensionInner}>
        <div className={styles.extensionText}>
          <Heading as="h2" className={styles.extensionTitle}>
            L'extension VSCode
          </Heading>
          <p className={styles.extensionDescription}>
            Coloration syntaxique, auto-complétion, snippets et indentation
            automatique. Tous les exemples du wiki collent directement dans
            l'extension.
          </p>
          <div className={styles.extensionChannels}>
            {channels.map((ch) => (
              <Link
                key={ch.name}
                to={ch.to}
                className={styles.channel}>
                <span className={styles.channelName}>{ch.name}</span>
                <span className={styles.channelDescription}>
                  {ch.description}
                </span>
              </Link>
            ))}
          </div>
          <Link
            className="button button--primary button--lg"
            to="/extension/installation">
            Installer l'extension
          </Link>
        </div>
        <div className={styles.extensionVisual}>
          <div className={styles.codeWindow}>
            <div className={styles.codeHeader}>
              <span className={styles.codeDot} />
              <span className={styles.codeDot} />
              <span className={styles.codeDot} />
              <span className={styles.codeFilename}>moyenne.algo</span>
            </div>
            <pre className={styles.codePre}>
              <code>
                <span className={styles.codeKeyword}>algorithme</span> moyenne
                {'\n'}
                <span className={styles.codeKeyword}>declarer</span> notes : <span className={styles.codeType}>tableau_de</span> <span className={styles.codeNumber}>30</span> <span className={styles.codeType}>entier</span>
                {'\n'}
                <span className={styles.codeKeyword}>declarer</span> somme : <span className={styles.codeType}>entier</span> {'<-'} <span className={styles.codeNumber}>0</span>
                {'\n'}
                {'\n'}
                <span className={styles.codeKeyword}>pour</span> i {'<-'} <span className={styles.codeNumber}>0</span> <span className={styles.codeKeyword}>a</span> <span className={styles.codeFunction}>taille</span> (notes)
                {'\n'}
                {"    "}somme {'<-'} somme + notes[i]
                {'\n'}
                <span className={styles.codeKeyword}>fpour</span>
                {'\n'}
                {'\n'}
                <span className={styles.codeFunction}>afficher</span> (somme / <span className={styles.codeFunction}>taille</span> (notes))
                {'\n'}
                <span className={styles.codeKeyword}>fin</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
