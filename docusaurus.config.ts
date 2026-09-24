import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Wiki BetterAlgoPapier',
  tagline: 'Wiki clair d’algo papier pour les L1 de l’IUT d’Aix — extension VSCode + futur compilateur',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages — https://BetterIUTInfoAix.github.io/Wiki-BetterAlgoPapier/
  url: 'https://BetterIUTInfoAix.github.io',
  baseUrl: '/Wiki-BetterAlgoPapier/',

  organizationName: 'BetterIUTInfoAix',
  projectName: 'Wiki-BetterAlgoPapier',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
    localeConfigs: {
      fr: {
        label: 'Français',
        htmlLang: 'fr-FR',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl:
            'https://github.com/BetterIUTInfoAix/Wiki-BetterAlgoPapier/tree/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/',
        language: ['fr'],
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Wiki BetterAlgoPapier',
      logo: {
        alt: 'Logo BetterAlgoPapier',
        src: 'img/logo-algo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wikiSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {
          to: '/extension/installation',
          label: 'Extension',
          position: 'left',
        },
        {
          href: 'https://github.com/BetterIUTInfoAix/BetterAlgoPapier',
          label: 'GitHub extension',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wiki',
          items: [
            {
              label: 'Introduction',
              to: '/intro',
            },
            {
              label: 'Bases',
              to: '/decouverte/algorithme',
            },
            {
              label: 'Langage',
              to: '/tests/conditions',
            },
          ],
        },
        {
          title: 'Extension',
          items: [
            {
              label: 'Installation',
              to: '/extension/installation',
            },
            {
              label: 'Marketplace VSCode',
              href: 'https://marketplace.visualstudio.com/items?itemName=betteriutinfoaix.better-algo-papier',
            },
            {
              label: 'Open VSX (VSCodium)',
              href: 'https://open-vsx.org/extension/betteriutinfoaix/better-algo-papier',
            },
          ],
        },
        {
          title: 'Projet',
          items: [
            {
              label: 'Wiki GitHub',
              href: 'https://github.com/BetterIUTInfoAix/Wiki-BetterAlgoPapier',
            },
            {
              label: 'Extension GitHub',
              href: 'https://github.com/BetterIUTInfoAix/BetterAlgoPapier',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BetterIUTInfoAix. Wiki en français pour les étudiants de l’IUT d’Aix. Construit avec Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
