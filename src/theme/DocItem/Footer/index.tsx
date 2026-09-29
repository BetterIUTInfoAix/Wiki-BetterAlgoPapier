/**
 * Swizzle wrap de `DocItem/Footer` — ajoute le lien « Signaler une erreur »
 * en bas de chaque page de cours, à côté du lien d'édition existant.
 *
 * Le Footer d'origine ne prend aucune prop et lit la page via `useDoc()` ;
 * on le rend tel quel, puis on ajoute notre lien en dessous.
 */
import type {ReactNode} from 'react';
import DocItemFooter from '@theme-original/DocItem/Footer';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

import ReportIssue from '@site/src/components/ReportIssue';

import styles from './styles.module.css';

export default function DocItemFooterWithReport(): ReactNode {
  const {metadata} = useDoc();

  return (
    <>
      <DocItemFooter />
      <div className={styles.reportRow}>
        <ReportIssue kind="wiki" pageTitle={metadata.title} />
      </div>
    </>
  );
}
