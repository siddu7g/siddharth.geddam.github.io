import {
  about,
  contact,
  images,
  projectHighlight,
  seniorAchievements,
} from '../data/portfolio';
import { ImageFrame } from '../components/ImageFrame';
import './Pages.css';
import '../components/ImageFrame.css';

export function Home() {
  return (
    <main className="page">
      <div className="container">
        <section className="hero">
          <p className="role mono">AI Engineer · Robotics · Autonomy</p>
          <h1>{contact.name}</h1>
          <p className="meta">
            {contact.location}
            <br />
            {contact.degree} · {contact.concentration}
            <br />
            {contact.university} · {contact.years}
          </p>
          <div className="hero-actions">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              GitHub →
            </a>
            <a href={`mailto:${contact.email}`} className="btn btn-outline">
              Get in Touch
            </a>
          </div>
          <div className="stat-grid">
            <div className="stat">
              <div className="stat-value">Incoming @ Tesla</div>
            </div>
            <div className="stat">
              <div className="stat-value">AI/ML</div>
              <div className="stat-label">Concentration</div>
            </div>
            <div className="stat">
              <div className="stat-value">Autonomous Vehicles</div>
              <div className="stat-label">Research Focus</div>
            </div>
            <div className="stat">
              <div className="stat-value">COAST</div>
              <div className="stat-label">Industry Internship</div>
            </div>
          </div>
        </section>

        <section className="profile-section">
          <ImageFrame
            src={images.profile}
            alt={contact.name}
            className="profile-photo"
          />
          <div className="profile-intro">
            <h2>{contact.name}</h2>
            <p className="profile-years mono">{contact.years}</p>
            <p className="profile-tagline">
              {contact.location}
              <br />
              {contact.degree} · {contact.concentration}
              <br />
              {contact.university}
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">About Me</h2>
          {about.split('\n\n').map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="prose">
              {paragraph}
            </p>
          ))}
        </section>

        <section className="section project-highlight">
          <h2 className="section-title">Project Highlight - {projectHighlight.name}</h2>
          <p className="project-highlight-label mono">{projectHighlight.label}</p>
          <div className="project-highlight-part">
            <h3 className="project-highlight-part-title">{projectHighlight.parts[0].title}</h3>
            <p className="prose">{projectHighlight.parts[0].description}</p>
          </div>
          <div className="project-highlight-gallery">
            {projectHighlight.gallery.map((photo) => (
              <ImageFrame
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className="project-highlight-image"
              />
            ))}
          </div>
          <div className="project-highlight-part">
            <h3 className="project-highlight-part-title">{projectHighlight.parts[1].title}</h3>
            <p className="prose">{projectHighlight.parts[1].description}</p>
          </div>
          <div className="tags project-highlight-tags">
            {projectHighlight.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={projectHighlight.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline card-link"
          >
            View on GitHub →
          </a>
        </section>

        <section className="section">
          <h2 className="section-title">Latest Endowments</h2>
          <p className="section-subtitle">
            Senior Year Research Projects and Achievements (August 2025 – Present)
          </p>
          <div className="card-grid">
            {seniorAchievements.map((item) => (
              <article key={item.title} className="card achievement-card">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-subtitle mono">{item.subtitle}</p>
                {item.description.split('\n\n').map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="card-desc">
                    {paragraph}
                  </p>
                ))}
                {'highlights' in item && item.highlights ? (
                  <ul className="achievement-highlights">
                    {item.highlights.map((point) => (
                      <li key={point.slice(0, 48)}>{point}</li>
                    ))}
                  </ul>
                ) : null}
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <ImageFrame
                  src={item.image}
                  alt={item.imageAlt}
                  className="achievement-card-image"
                />
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Research Presentation</h2>
          <div className="card">
            <h3 className="card-title">Multi-UAV Decentralized Coordination</h3>
            <p className="card-subtitle mono">Spring 2025 · SmartNet Laboratory</p>
            <p className="card-desc">
              Presented research on autonomous decentralized multi-UAV coordinated systems
              with stereo vision depth cameras, UVDAR, 3D LiDAR, and Intel NUC platforms.
              Applications span search & rescue, mapping, and aerial communication networks.
            </p>
          </div>
          <ImageFrame
            src={images.researchSymposium.src}
            alt={images.researchSymposium.alt}
            caption={images.researchSymposium.caption}
            className="image-natural symposium-image research-section-image"
          />
        </section>
      </div>
    </main>
  );
}
