import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  aluSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '🔧 Visão Geral da ALU',
    },
    {
      type: 'category',
      label: '⚙️ Operações Aritméticas',
      items: [
        'operacoes/soma',
        'operacoes/subtracao',
        'operacoes/multiplicacao',
        'operacoes/divisao',
      ],
    },
    {
      type: 'category',
      label: '🔀 Operações Lógicas e Shift',
      items: [
        'operacoes/shift',
        'operacoes/nand',
        'operacoes/xor',
      ],
    },
    {
      type: 'doc',
      id: 'cpu',
      label: '🖥️ CPU Harvard',
    },
    {
      type: 'doc',
      id: 'referencias',
      label: '📚 Referências',
    },
  ],
};

export default sidebars;
