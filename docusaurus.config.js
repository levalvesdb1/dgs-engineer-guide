module.exports = {
  title: 'DB1 Techguide',
  tagline:
    'Um guia para os engenheiros DGS utilizarem no dia a dia. Ferramentas, documentações, dicas e outras coisas bacanudas que estamos preparando para vocês!!',
  url: 'https://engineering.db1.com.br',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'infinum',
  projectName: 'Engineering Techguide',
  staticDirectories: ['static'],
  scripts: [
    {
      src: 'https://buttons.github.io/buttons.js',
      async: true,
      defer: true,
    },
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: 'DB1 Techguide Logo',
        src: 'img/dgs-engineering.png',
      },
      items: [
        {
          to: 'docs/engineering-metrics',
          activeBasePath: 'pages',
          label: 'Developer Guide',
          position: 'right',
        },
        {
          to: 'https://techradar.db1.com.br',
          activeBasePath: 'technology-radar',
          label: 'Technology Radar',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['php'],
    },

    colorMode: {
      disableSwitch: true,
    },
    trailingSlash: false,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/scss/application.scss'),
        },
        blog: {
          blogTitle: 'Tutorials and articles about DB1 Techguide',
          blogDescription: 'Tutorials and articles about DB1 Techguide',
          blogSidebarTitle: 'Latest posts',
          showReadingTime: true,
          postsPerPage: 6,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  customFields: {
    keywords: [
      'wordpress tools',
      'development tools',
      'wordpress project',
      'Gutenberg blocks',
      'development kit',
      'wordpress kit',
    ],
    image: 'img-why-boilerplate@2x.png',
  },
};
