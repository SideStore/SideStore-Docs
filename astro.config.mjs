import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://wiki.sidestore.io',
  integrations: [
    starlight({
      title: 'SideStore Docs',
      logo: {
        alt: 'SideStore Logo',
        src: '/src/assets/icons/sidestore-icon.png',
        replacesTitle: false,
      },
      favicon: '/favicon.svg',
      social: {
        github: 'https://github.com/sidestore',
        patreon: 'https://www.patreon.com/sidestore',
        discord: 'https://discord.gg/sidestore-949183273383395328',
        twitter: 'https://twitter.com/sidestore_io'
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'FAQ',
          link: 'faq',
        },
        {
          label: 'Guides',
          items: [
            { label: 'Getting Started', link: '/guides/getting-started/' },
            { label: 'Create a Burner Apple ID', link: '/guides/burner-apple-id/' },
            { label: 'Troubleshooting', link: '/guides/troubleshooting/' },
            { label: 'Error Codes', link: '/guides/error-codes/' },
          ],
        },
        {
          label: 'Advanced',
          items: [
            {label: 'Custom Anisette Server', link: '/advanced/anisette-server/'},
            {label: 'App Sources', link: '/advanced/app-sources/'},
            {label: 'URL Schemes', link: '/advanced/url-schemes/'},
          ],
        },
        {
          label: 'Contributing',
          items: [
            { label: 'Translating the wiki', link: '/contributing/translations/' },
          ]
        },
      ],
    }),
  ],
});
