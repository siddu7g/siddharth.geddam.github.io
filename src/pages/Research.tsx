import {
  images,
  researchGalleryVideos,
  researchMentor,
  researchMultiUavVideo,
  researchOverview,
  researchProjects,
} from '../data/portfolio';
import { ProjectCard } from '../components/ProjectCard';
import { ImageFrame } from '../components/ImageFrame';
import './Pages.css';
import '../components/ImageFrame.css';

export function Research() {
  return (
    <main className="page">
      <div className="container">
        <section className="hero hero-compact">
          <p className="role mono">// Research Assistant Portal</p>
          <h1>Undergraduate Research</h1>
          <p className="meta">{researchOverview.title}</p>
          <div className="mentor-card">
            <span className="mono mentor-label">Mentor</span>
            <span>{researchMentor.name}</span>
            <span className="mentor-sep">·</span>
            <a href={`mailto:${researchMentor.email}`}>{researchMentor.email}</a>
            <span className="mentor-sep">·</span>
            <span>{researchMentor.lab}, {researchMentor.location}</span>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Research Gallery</h2>
          <p className="section-subtitle">Photos from lab work, flight tests, and presentations</p>
          <div className="research-gallery research-gallery-stack">
            {images.researchGallery.map((photo) => (
              <ImageFrame
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
              />
            ))}
          </div>
          <ul className="research-gallery-videos">
            {researchGalleryVideos.map((video) => (
              <li key={video.url}>
                Click here for youtube links:{' '}
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  {video.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Overview</h2>
          {researchOverview.intro.split('\n\n').map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="prose">
              {paragraph}
            </p>
          ))}
        </section>

        <section className="section">
          <h2 className="section-title">Research Areas</h2>
          <div className="card-grid">
            {researchOverview.sections.map((section) => (
              <article key={section.title} className="card">
                <h3 className="card-title">{section.title}</h3>
                <p className="card-desc">{section.content}</p>
                {'github' in section && section.github && (
                  <a
                    href={section.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline card-link"
                  >
                    View on GitHub →
                  </a>
                )}
              </article>
            ))}
          </div>
          <ImageFrame
            src={images.researchMultiUav.src}
            alt={images.researchMultiUav.alt}
            caption={images.researchMultiUav.caption}
            className="page-feature-image research-section-image"
          />
          <p className="research-feature-video">
            Click here for youtube links:{' '}
            <a href={researchMultiUavVideo.url} target="_blank" rel="noopener noreferrer">
              {researchMultiUavVideo.label}
            </a>
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Research Projects</h2>
          <p className="section-subtitle">
            Fly4Future · WiBotic · Multi-UAV Coordination
          </p>
          <div className="card-grid">
            {researchProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <ImageFrame
            src={images.researchWibotics.src}
            alt={images.researchWibotics.alt}
            caption={images.researchWibotics.caption}
            className="page-feature-image research-section-image"
          />
        </section>

        <section className="section">
          <h2 className="section-title">Summer Research Symposium 2025</h2>
          <div className="card">
            <h3 className="card-title">Multi-UAV Target Search with Fly4Future Research Drones</h3>
            <p className="card-subtitle mono">MRS_UAV_SYSTEM</p>
            <p className="card-desc">
              Presented coordinated multi-robot target search with decentralized communication,
              YOLOv12 vision integration, and real-time Gazebo/RViz simulation at the Summer
              Research Symposium 2025.
            </p>
            <div className="tags">
              {['Fly4Future', 'MRTA', 'YOLOv12', 'Gazebo', 'Decentralized Control'].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
