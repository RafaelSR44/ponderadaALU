import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ponderadaALU/markdown-page',
    component: ComponentCreator('/ponderadaALU/markdown-page', 'f9f'),
    exact: true
  },
  {
    path: '/ponderadaALU/docs',
    component: ComponentCreator('/ponderadaALU/docs', '15f'),
    routes: [
      {
        path: '/ponderadaALU/docs',
        component: ComponentCreator('/ponderadaALU/docs', '858'),
        routes: [
          {
            path: '/ponderadaALU/docs',
            component: ComponentCreator('/ponderadaALU/docs', '051'),
            routes: [
              {
                path: '/ponderadaALU/docs/intro',
                component: ComponentCreator('/ponderadaALU/docs/intro', '0a7'),
                exact: true,
                sidebar: "aluSidebar"
              },
              {
                path: '/ponderadaALU/docs/operacoes/divisao',
                component: ComponentCreator('/ponderadaALU/docs/operacoes/divisao', '8ab'),
                exact: true,
                sidebar: "aluSidebar"
              },
              {
                path: '/ponderadaALU/docs/operacoes/multiplicacao',
                component: ComponentCreator('/ponderadaALU/docs/operacoes/multiplicacao', 'f02'),
                exact: true,
                sidebar: "aluSidebar"
              },
              {
                path: '/ponderadaALU/docs/operacoes/nand',
                component: ComponentCreator('/ponderadaALU/docs/operacoes/nand', 'c52'),
                exact: true,
                sidebar: "aluSidebar"
              },
              {
                path: '/ponderadaALU/docs/operacoes/shift',
                component: ComponentCreator('/ponderadaALU/docs/operacoes/shift', '4e1'),
                exact: true,
                sidebar: "aluSidebar"
              },
              {
                path: '/ponderadaALU/docs/operacoes/soma',
                component: ComponentCreator('/ponderadaALU/docs/operacoes/soma', '6e2'),
                exact: true,
                sidebar: "aluSidebar"
              },
              {
                path: '/ponderadaALU/docs/operacoes/subtracao',
                component: ComponentCreator('/ponderadaALU/docs/operacoes/subtracao', '40c'),
                exact: true,
                sidebar: "aluSidebar"
              },
              {
                path: '/ponderadaALU/docs/operacoes/xor',
                component: ComponentCreator('/ponderadaALU/docs/operacoes/xor', '417'),
                exact: true,
                sidebar: "aluSidebar"
              },
              {
                path: '/ponderadaALU/docs/referencias',
                component: ComponentCreator('/ponderadaALU/docs/referencias', 'b5b'),
                exact: true,
                sidebar: "aluSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ponderadaALU/',
    component: ComponentCreator('/ponderadaALU/', '841'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
