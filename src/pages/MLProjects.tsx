import { images, mlProjects } from '../data/portfolio';
import { ProjectCard } from '../components/ProjectCard';
import { ImageFrame } from '../components/ImageFrame';
import './Pages.css';
import '../components/ImageFrame.css';

export function MLProjects() {
  return (
    <main className="page">
      <div className="container">
        <section className="hero hero-compact">
          <p className="role mono">// Deep Learning & Perception</p>
          <h1>ML / AI Projects</h1>
          <p className="meta">
            Object detection, semantic segmentation, 3D perception, OCR, and BEV transformers
            for autonomous systems.
          </p>
        </section>

        <section className="section">
          <div className="card-grid">
            {mlProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Project Gallery</h2>
          <p className="section-subtitle">Model outputs, training runs, and deployment snapshots</p>
          <div className="ml-gallery">
            {images.mlGallery.map((photo) => (
              <ImageFrame
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
