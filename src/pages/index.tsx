import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import LandingHero from '@site/src/components/LandingHero';
import LandingStats from '@site/src/components/LandingStats';
import LandingChapters from '@site/src/components/LandingChapters';
import LandingExtension from '@site/src/components/LandingExtension';
import LandingCompiler from '@site/src/components/LandingCompiler';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Wiki clair d'algo papier pour les L1 de l'IUT d'Aix — extension VSCode + futur compilateur.">
      <LandingHero />
      <main>
        <LandingStats />
        <LandingChapters />
        <LandingExtension />
        <LandingCompiler />
      </main>
    </Layout>
  );
}
