// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LuAria Docs',
  tagline: 'Build, Bundle & Execute Mods on Terraria Mobile',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.luaria.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'luaria', // Usually your GitHub org/user name.
  projectName: 'luaria-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', /*'fr', 'de', 'es', 'it', 'pt', 'ru'*/],
    /* localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        path: 'en',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr-FR',
      },
      de: {
        label: 'Deutsch',
        direction: 'ltr',
        htmlLang: 'de-DE',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es-ES',
      },
      it: {
        label: 'Italiano',
        direction: 'ltr',
        htmlLang: 'it-IT',
      },
      pt: {
        label: 'Português (Brasil)',
        direction: 'ltr',
        htmlLang: 'pt-BR',
      },
      ru: {
        label: 'Русский',
        direction: 'ltr',
        htmlLang: 'ru-RU',
      },
    }, */
  },  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/luaria-platform/luaria-docs/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        }, 
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      // /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ['en', /*'fr', 'de', 'es', 'it', 'pt', 'ru'*/],
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: '/',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        }
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        title: 'LuAria Docs',
        logo: {
          alt: 'LuAria Logo',
          src: '/img/luaria.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
            // dropdownItemsBefore: [ … ],
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                //MARK: - TODO:
                href: 'https://github.com/luaria-platform/luaria-docs/',
                label: 'Help Us Translate',
              },
            ]
          },
          {
            href: 'https://github.com/luaria-platform/',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      // We don't need this. I want to keep the impl straight foward.
      // footer: {...}
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['lua'],
      },
    }),
};

export default config;
