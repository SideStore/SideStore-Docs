// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import { lazy } from 'react';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SideStore Docs',
  tagline: 'Your source for instructions on SideStore.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.sidestore.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sidestore', // Usually your GitHub org/user name.
  projectName: 'sidestore-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SideStore',
        logo: {
          alt: 'SideStore Logo',
          src: 'img/logo.png',
          style: {borderRadius: '10px'},
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/SideStore/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.patreon.com/sidestore',
            label: 'Patreon',
            position: 'right',
          },
          {
            href: 'https://discord.gg/sidestore-949183273383395328',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/sidestore-949183273383395328',
              },
              {
                label: 'X, formerly Twitter',
                href: 'https://twitter.com/sidestore_io',
              },
              {
                label: 'Patreon',
                href: 'https://www.patreon.com/sidestore',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                to: 'https://sidestore.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SideStore',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SideStore, LLC. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
