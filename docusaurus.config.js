/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CoronaCoin Docs',
  url: 'https://docs.corona-coins.ru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32.ico',
  organizationName: 'corona-coin-vk',
  projectName: 'docs',
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'CoronaCoin Docs'
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Сообщество',
          items: [
            {
              label: 'Паблик ВКонтакте',
              href: 'https://vk.com/corona_coin',
            },
            {
              label: 'Связь с нами',
              href: 'https://vk.me/ccoin_dev',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          showLastUpdateTime: true,
          editUrl: 'https://github.com/corona-coin-vk/docs/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  }
};
