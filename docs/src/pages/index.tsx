import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

type Operation = {
  icon: string;
  opcode: string;
  title: string;
  desc: string;
  link: string;
};

const OPERATIONS: Operation[] = [
  {
    icon: '➕',
    opcode: 'SEL 000',
    title: 'Soma',
    desc: 'Somador de 8 bits com ripple carry. Usa 8 somadores completos encadeados com propagação de carry.',
    link: '/ponderadaALU/docs/operacoes/soma',
  },
  {
    icon: '➖',
    opcode: 'SEL 001',
    title: 'Subtração',
    desc: 'Subtração em complemento de 2. Inverte B, soma A + ~B + 1 usando o mesmo somador de 8 bits.',
    link: '/ponderadaALU/docs/operacoes/subtracao',
  },
  {
    icon: '✖️',
    opcode: 'SEL 010',
    title: 'Multiplicação',
    desc: 'Multiplicador array com N² portas AND, N meio-somadores e N(N-2) somadores completos.',
    link: '/ponderadaALU/docs/operacoes/multiplicacao',
  },
  {
    icon: '➗',
    opcode: 'SEL 011',
    title: 'Divisão',
    desc: 'Algoritmo de divisão com restauração. Usa subtratores de 1 bit com restore em 8 iterações.',
    link: '/ponderadaALU/docs/operacoes/divisao',
  },
  {
    icon: '↔️',
    opcode: 'SEL 100 / 101',
    title: 'Shift Lógico',
    desc: 'Deslocamento lógico para esquerda (×2) e direita (÷2) com inserção de zero na posição vaga.',
    link: '/ponderadaALU/docs/operacoes/shift',
  },
  {
    icon: '🔀',
    opcode: 'SEL 110',
    title: 'NAND',
    desc: 'Porta NAND de 8 bits. Porta universal — qualquer função lógica pode ser construída só com NAND.',
    link: '/ponderadaALU/docs/operacoes/nand',
  },
  {
    icon: '⊕',
    opcode: 'SEL 111',
    title: 'XOR',
    desc: 'OU Exclusivo de 8 bits. Útil para paridade, comparação e operações de criptografia.',
    link: '/ponderadaALU/docs/operacoes/xor',
  },
];

function OperationCard({ icon, opcode, title, desc, link }: Operation): ReactNode {
  return (
    <div className="op-card">
      <span className="op-card__icon">{icon}</span>
      <span className="op-card__opcode">{opcode}</span>
      <h3 className="op-card__title">{title}</h3>
      <p className="op-card__desc">{desc}</p>
      <Link className="op-card__link" to={link}>
        Ver documentação →
      </Link>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="ALU 8-bit — Documentação"
      description="Documentação completa da Unidade Lógica e Aritmética de 8 bits e CPU de arquitetura Von Neumann construídas no simulador Digital"
    >
      {/* Hero */}
      <section className="hero-alu">
        <div className="section-chip">⚡ Circuitos Digitais — Módulo 5 · Inteli</div>
        <h1 className="hero-alu__title">ALU 8-bit & CPU Von Neumann</h1>
        <p className="hero-alu__subtitle">
          Unidade Lógica e Aritmética de 8 bits e CPU de arquitetura Von Neumann construídas do zero no simulador Digital.
          Documentação completa de todas as operações — da teoria ao circuito.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="hero-alu__cta" to="/ponderadaALU/docs/intro">
            📖 Explorar a ALU
          </Link>
          <Link
            className="hero-alu__cta"
            to="/ponderadaALU/docs/cpu"
            style={{ background: 'linear-gradient(135deg, #0077b6, #023e8a)' }}
          >
            🖥️ Ver a CPU
          </Link>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-item">
          <div className="stat-value">8</div>
          <div className="stat-label">bits de dados</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">7</div>
          <div className="stat-label">operações ALU</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">3</div>
          <div className="stat-label">bits de opcode</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">Von Neumann</div>
          <div className="stat-label">arquitetura CPU</div>
        </div>
      </div>

      {/* CPU highlight banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,119,182,0.15), rgba(0,180,216,0.1))',
        borderTop: '1px solid rgba(0,180,216,0.2)',
        borderBottom: '1px solid rgba(0,180,216,0.2)',
        padding: '2rem',
        textAlign: 'center',
        margin: '0',
      }}>
        <span style={{ fontSize: '2rem' }}>🖥️</span>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0.5rem 0' }}>CPU de Arquitetura Von Neumann</h2>
        <p style={{ color: 'var(--ifm-color-content-secondary)', marginBottom: '1rem', maxWidth: '600px', margin: '0 auto 1rem' }}>
          A ALU está integrada em uma CPU completa com PC, registradores, EEPROMs separadas para instruções e dados, Unidade de Controle com Ring Counter e ciclo fetch-decode-execute de 5 etapas.
        </p>
        <Link className="op-card__link" to="/ponderadaALU/docs/cpu" style={{ fontSize: '1rem' }}>
          Ver documentação da CPU →
        </Link>
      </div>

      {/* Operations grid */}
      <main>
        <div style={{ textAlign: 'center', padding: '2.5rem 1rem 0' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Operações da ALU</h2>
          <p style={{ color: 'var(--ifm-color-content-secondary)', marginBottom: 0 }}>
            Clique em qualquer operação para acessar a documentação detalhada com exemplos e diagramas de circuito.
          </p>
        </div>
        <div className="ops-grid">
          {OPERATIONS.map((op) => (
            <OperationCard key={op.title} {...op} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
