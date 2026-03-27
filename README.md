# ALU 8-bit — Unidade Lógica e Aritmética

Projeto de uma **Unidade Lógica e Aritmética (ALU) de 8 bits** construída do zero no simulador de circuitos digitais [Digital](https://github.com/hneemann/Digital). A ALU implementa 7 operações selecionadas por um opcode de 3 bits.

## Operações implementadas

| SEL[2:0] | Operação     | Tipo         |
|----------|-------------|--------------|
| 000      | Soma        | Aritmética   |
| 001      | Subtração   | Aritmética   |
| 010      | Multiplicação | Aritmética |
| 011      | Divisão     | Aritmética   |
| 100      | Left Shift  | Deslocamento |
| 101      | Right Shift | Deslocamento |
| 110      | NAND        | Lógica       |
| 111      | XOR         | Lógica       |

## Documentação online

A documentação completa está disponível em:
**[https://RafaelSR44.github.io/ponderadaALU/](https://RafaelSR44.github.io/ponderadaALU/)**

## Rodando a documentação localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) >= 18.0

### Instalação

```bash
cd docs
npm install
```

### Iniciar servidor de desenvolvimento

```bash
cd docs
npm start
```

A documentação estará disponível em [http://localhost:3000/ponderadaALU/](http://localhost:3000/ponderadaALU/)

### Build de produção

```bash
cd docs
npm run build
```

O site estático será gerado em `docs/build/`.

## Estrutura do projeto

```
ponderadaALU/
├── docs/                    # Projeto Docusaurus (documentação)
│   ├── docs/                # Páginas de documentação (MDX)
│   │   ├── intro.mdx        # Visão geral da ALU
│   │   ├── operacoes/       # Uma página por operação
│   │   └── referencias.md   # Referências
│   ├── src/
│   │   ├── components/      # Componentes React customizados
│   │   ├── css/custom.css   # Tema personalizado
│   │   └── pages/index.tsx  # Homepage customizada
│   └── static/img/circuits/ # Imagens dos circuitos
├── img/                     # Imagens originais dos circuitos
├── *.dig                    # Circuitos no formato Digital
└── README.md
```

