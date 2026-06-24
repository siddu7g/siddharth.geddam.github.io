import { roboticsProjectHighlight, roboticsProjects } from '../data/portfolio';
import { ProjectCard } from '../components/ProjectCard';
import { ImageFrame } from '../components/ImageFrame';
import './Pages.css';
import '../components/ImageFrame.css';

export function RoboticsProjects() {
  return (
    <main className="page">
      <div className="container">
        <section className="hero hero-compact">
          <p className="role mono">// Simulation · Embedded · Autonomy</p>
          <h1>Robotics & UAV Projects</h1>
          <p className="meta">
            UAV simulation, ArduPilot SITL, AirSim integration, and hands-on embedded
            hardware builds.
          </p>
        </section>

        <section className="section project-highlight">
          <h2 className="section-title">Highlight: {roboticsProjectHighlight.name}</h2>
          <p className="project-highlight-label mono">{roboticsProjectHighlight.label}</p>
          <p className="prose">{roboticsProjectHighlight.description}</p>
          <div className="project-highlight-gallery">
            {roboticsProjectHighlight.gallery.map((photo) => (
              <ImageFrame
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className="project-highlight-image"
              />
            ))}
          </div>
          <div className="tags project-highlight-tags">
            {roboticsProjectHighlight.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="card-grid">
            {roboticsProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
