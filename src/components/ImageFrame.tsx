import { useState } from 'react';
import { asset } from '../data/portfolio';
import './ImageFrame.css';

interface ImageFrameProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function ImageFrame({ src, alt, caption, className = '' }: ImageFrameProps) {
  const [error, setError] = useState(false);
  const resolved = asset(src);

  return (
    <figure className={`image-frame ${className}`}>
      {error ? (
        <div className="image-placeholder">
          <span className="image-placeholder-icon mono">+</span>
          <span className="mono image-placeholder-label">Add photo</span>
          <span className="mono image-placeholder-path">{src.split('/').pop()}</span>
        </div>
      ) : (
        <img src={resolved} alt={alt} onError={() => setError(true)} loading="lazy" />
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
