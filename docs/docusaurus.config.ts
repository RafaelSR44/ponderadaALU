import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ALU 8-bit',
  tagline: 'Documentação de Circuitos Digitais — Unidade Lógica e Aritmética',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://RafaelSR44.github.io',
  baseUrl: '/ponderadaALU/',

  organizationName: 'RafaelSR44',
  projectName: 'ponderadaALU',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ALU 8-bit',
      logo: {
        alt: 'ALU Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'aluSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          href: 'https://github.com/RafaelSR44/ponderadaALU',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Operações',
          items: [
            { label: 'Visão Geral da ALU', to: '/docs/intro' },
            { label: 'Soma', to: '/docs/operacoes/soma' },
            { label: 'Subtração', to: '/docs/operacoes/subtracao' },
            { label: 'Multiplicação', to: '/docs/operacoes/multiplicacao' },
            { label: 'Divisão', to: '/docs/operacoes/divisao' },
          ],
        },
        {
          title: 'Operações Lógicas',
          items: [
            { label: 'Shift Lógico', to: '/docs/operacoes/shift' },
            { label: 'NAND', to: '/docs/operacoes/nand' },
            { label: 'XOR', to: '/docs/operacoes/xor' },
            { label: 'Referências', to: '/docs/referencias' },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/RafaelSR44/ponderadaALU',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rafael SR — ALU 8-bit. Construído com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
