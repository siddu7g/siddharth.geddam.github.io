import { ImageFrame } from './ImageFrame';
import './ImageFrame.css';

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  tags: string[];
  github?: string;
  image?: string;
  imageAlt?: string;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  highlights,
  tags,
  github,
  image,
  imageAlt,
}: ProjectCardProps) {
  return (
    <article className="card">
      <h3 className="card-title">{title}</h3>
      {subtitle && <p className="card-subtitle mono">{subtitle}</p>}
      <p className="card-desc">{description}</p>
      {highlights && highlights.length > 0 && (
        <ul className="highlight-list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      {image && (
        <ImageFrame
          src={image}
          alt={imageAlt ?? title}
          className="achievement-card-image"
        />
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline card-link"
        >
          View on GitHub →
        </a>
      )}
    </article>
  );
}
