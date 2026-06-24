import { coastInternship, images } from '../data/portfolio';
import { ImageFrame } from '../components/ImageFrame';
import './Pages.css';
import '../components/ImageFrame.css';

export function CoastAutonomous() {
  return (
    <main className="page">
      <div className="container">
        <section className="hero hero-compact">
          <p className="role mono">// Industry Experience</p>
          <h1>{coastInternship.company}</h1>
          <p className="meta">
            {coastInternship.role}
            <br />
            {coastInternship.period}
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Internship Overview</h2>
          <p className="prose">{coastInternship.description}</p>
        </section>

        <section className="section">
          <ImageFrame
            src={images.coast.src}
            alt={images.coast.alt}
            caption={images.coast.caption}
            className="page-feature-image"
          />
        </section>

        <section className="section">
          <h2 className="section-title">Key Responsibilities</h2>
          <div className="card">
            <ul className="highlight-list responsibilities">
              {coastInternship.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Tech Stack</h2>
          <div className="tags tags-large">
            {coastInternship.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Perception Pipeline</h2>
          <div className="card-grid">
            <article className="card">
              <h3 className="card-title">Object Detection</h3>
              <p className="card-desc">
                Trained and integrated YOLO v4 and v12 architectures for real-time object
                detection on autonomous vehicle platforms with optimized inference pipelines.
              </p>
              <div className="tags">
                {['YOLOv4', 'YOLOv12', 'TensorRT'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
            <article className="card">
              <h3 className="card-title">3D Perception</h3>
              <p className="card-desc">
                PointPillars integration for 3D point cloud object detection, enabling
                LiDAR-based spatial understanding for navigation and obstacle detection.
              </p>
              <div className="tags">
                {['PointPillars', 'LiDAR', '3D Detection'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
            <article className="card">
              <h3 className="card-title">Semantic Segmentation</h3>
              <p className="card-desc">
                ResNet50, DeepLabV3, and FPN architectures for pixel-level scene
                understanding deployed on Jetson Orin with CUDA acceleration.
              </p>
              <div className="tags">
                {['ResNet50', 'DeepLabV3', 'FPN'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
            <article className="card">
              <h3 className="card-title">Sensor Integration</h3>
              <p className="card-desc">
                ROS C++ nodes for Sony ILX-LR1, e-con, and ZED2 stereo cameras —
                image acquisition, synchronization, and RTMAPS pipeline publishing.
              </p>
              <div className="tags">
                {['ROS', 'C++', 'ZED2', 'Calibration'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
