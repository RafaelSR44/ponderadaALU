import type { ReactNode } from 'react';

export interface ExampleRow {
  label: string;
  binary: string;
  decimal?: string;
}

interface ExampleBoxProps {
  title?: string;
  rows: ExampleRow[];
  result: ExampleRow;
  operator?: string;
}

export default function ExampleBox({
  title = 'Exemplo',
  rows,
  result,
  operator = '=',
}: ExampleBoxProps): ReactNode {
  return (
    <div className="example-box">
      <div className="example-box__title">🧮 {title}</div>
      {rows.map((row, i) => (
        <div key={i} className="example-box__row">
          <span className="example-box__label">{row.label}</span>
          <span className="example-box__binary">{row.binary}</span>
          {row.decimal && (
            <span className="example-box__decimal">({row.decimal})</span>
          )}
        </div>
      ))}
      <hr className="example-box__divider" />
      <div className="example-box__row">
        <span className="example-box__label">{operator} {result.label}</span>
        <span className="example-box__binary example-box__result">{result.binary}</span>
        {result.decimal && (
          <span className="example-box__decimal">({result.decimal})</span>
        )}
      </div>
    </div>
  );
}
