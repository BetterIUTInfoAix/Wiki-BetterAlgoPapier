import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type Channel = {
  name: string;
  description: string;
  href: string;
};

const channels: Channel[] = [
  {
    name: 'Marketplace VSCode',
    description: 'Installation en un clic depuis VSCode.',
    href: 'https://marketplace.visualstudio.com/items?itemName=betteriutinfoaix.better-algo-papier',
  },
  {
    name: 'Open VSX',
    description: 'Pour VSCodium et autres éditeurs compatibles.',
    href: 'https://open-vsx.org/extension/betteriutinfoaix/better-algo-papier',
  },
  {
    name: 'Fichier .vsix',
    description: 'Installation manuelle, hors ligne.',
    href: 'https://github.com/BetterIUTInfoAix/BetterAlgoPapier/releases/latest',
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
                href={ch.href}
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
                <span className={styles.codeKeyword}>debut</span>
                {'\n'}
                <span className={styles.codeKeyword}>declarer</span> notes : <span className={styles.codeType}>tableau_de</span> [<span className={styles.codeNumber}>30</span>] <span className={styles.codeType}>reel</span>;
                {'\n'}
                <span className={styles.codeKeyword}>declarer</span> note : <span className={styles.codeType}>reel</span>;
                {'\n'}
                <span className={styles.codeKeyword}>declarer</span> somme : <span className={styles.codeType}>reel</span>;
                {'\n'}
                somme {'<-'} <span className={styles.codeNumber}>0</span>;
                {'\n'}
                <span className={styles.codeKeyword}>pour</span> (i <span className={styles.codeKeyword}>variant_de</span> <span className={styles.codeNumber}>0</span> <span className={styles.codeKeyword}>a</span> <span className={styles.codeNumber}>29</span>) <span className={styles.codeKeyword}>faire</span>
                {'\n'}
                {"    "}<span className={styles.codeFunction}>saisir</span> (note);
                {'\n'}
                {"    "}notes[i] {'<-'} note;
                {'\n'}
                {"    "}somme {'<-'} somme + note;
                {'\n'}
                <span className={styles.codeKeyword}>ffaire</span>
                {'\n'}
                <span className={styles.codeFunction}>afficher</span> (somme / <span className={styles.codeFunction}>taille</span> (notes));
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
