import type { ReactNode } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface CircuitImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function CircuitImage({ src, alt, caption }: CircuitImageProps): ReactNode {
  const imgSrc = useBaseUrl(src);
  return (
    <figure className="circuit-figure">
      <img src={imgSrc} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
